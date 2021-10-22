from cryptography.fernet import Fernet
import json

key = 's439NtXWeX28815bJCsmRfhEeiTGvs1Xnr_zAduKUAU='

def newKey():
    key = Fernet.generate_key()
  
    # string the key in a file
    with open('filekey.key', 'wb') as filekey:
        filekey.write(key)

def decrypt():
    # using the key
    fernet = Fernet(key)
    with open('../data/respuesta_usuario', 'rb') as enc_file:
        encrypted = enc_file.read()
    # decrypting the file
    decrypted = fernet.decrypt(encrypted)
    # opening the file in write mode and
    # writing the decrypted data
    jsonD = json.loads(decrypted.decode('utf8'))
    print(jsonD)
              
def encrypt():
    fernet = Fernet(key)
    f = open('TABLA.json', encoding="utf8")
    data = json.load(f)
    str = json.dumps(data)
    # opening the original file to encrypt
        
    # encrypting the file
    encrypted = fernet.encrypt(str.encode('utf8'))
    
    # opening the file in write mode and 
    # writing the encrypted data
    with open('../data/tabla', 'wb') as encrypted_file:
        encrypted_file.write(encrypted) 
if __name__ == "__main__":
    encrypt()