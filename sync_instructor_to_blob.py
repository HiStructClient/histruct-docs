import mimetypes

# Přepínač pro kontrolu MD5
CHECK_MD5 = True  # Nastavte na False pro nahrání všech souborů, jinak se nahrajou jen změněné soubory
import os
import hashlib
from azure.storage.blob import BlobServiceClient, ContentSettings

# Nastavte tyto proměnné podle vašeho Azure Storage
CONNECTION_STRING = os.getenv('AZURE_STORAGE_CONNECTION_STRING', '')
CONTAINER_NAME = os.getenv('AZURE_STORAGE_CONTAINER', 'docs')
LOCAL_FOLDER = 'build/site_instructor'

# Inicializace klienta
blob_service_client = BlobServiceClient.from_connection_string(CONNECTION_STRING)
container_client = blob_service_client.get_container_client(CONTAINER_NAME)

def get_file_md5(path):
    md5 = hashlib.md5()
    with open(path, 'rb') as f:
        while True:
            data = f.read(65536)
            if not data:
                break
            md5.update(data)
    return md5.digest()  # Vrací bytes, stejně jako Azure

def get_blob_md5(blob_client):
    try:
        props = blob_client.get_blob_properties()
        return props.content_settings.content_md5  # Vrací bytes
    except Exception as e:
        print(f'Chyba při získávání MD5 blobu: {e}')
        return None

def sync_folder_to_blob(local_folder):
    # Získání všech lokálních souborů (relativní cesty)
    local_files = set()
    for root, dirs, files in os.walk(local_folder):
        for file in files:
            local_path = os.path.join(root, file)
            blob_path = os.path.relpath(local_path, local_folder).replace('\\', '/')
            local_files.add(blob_path)

    # Získání všech blobů v kontejneru
    blobs_on_storage = set()
    blobs_list = container_client.list_blobs()
    for blob in blobs_list:
        blobs_on_storage.add(blob.name)

    # Upload pouze změněných nebo nových souborů
    for blob_path in local_files:
        local_path = os.path.join(local_folder, blob_path)
        blob_client = container_client.get_blob_client(blob_path)
        upload = True
        if CHECK_MD5 and blob_path in blobs_on_storage:
            try:
                local_md5 = get_file_md5(local_path)
                remote_md5 = get_blob_md5(blob_client)
                if local_md5 == remote_md5 and remote_md5 is not None:
                    upload = False
            except Exception as e:
                print(f'Chyba při porovnání MD5 pro {blob_path}: {e}')
        if upload:
            print(f'Nahrávám {local_path} jako {blob_path}')
            content_type, _ = mimetypes.guess_type(local_path)
            if content_type is None:
                content_type = 'application/octet-stream'
            with open(local_path, 'rb') as data:
                blob_client.upload_blob(
                    data,
                    overwrite=True,
                    content_settings=ContentSettings(content_type=content_type)
                )
        else:
            print(f'Přeskočeno (beze změny): {blob_path}')

    # Mazání blobů, které nejsou v lokální složce
    blobs_to_delete = blobs_on_storage - local_files
    for blob_name in blobs_to_delete:
        print(f'Mazání přebytečného blobu: {blob_name}')
        container_client.delete_blob(blob_name)

if __name__ == '__main__':
    sync_folder_to_blob(LOCAL_FOLDER)
    print('Synchronizace dokončena.')
