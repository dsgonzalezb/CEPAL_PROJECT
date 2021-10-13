import re
import json

def fix():
    f = open('DESCRIPTIVA_ID.json', encoding="utf8")
    data = json.load(f)
    str = json.dumps(data)
    val = re.sub(r'"(\d+),(\d+)"', r'\1.\2', str)
    #print(val)
    
    with open('DESCRIPTIVA_IDN.json', 'wb') as encrypted_file:
        encrypted_file.write(val.encode('utf-8')) 

if __name__ == "__main__":
    fix()