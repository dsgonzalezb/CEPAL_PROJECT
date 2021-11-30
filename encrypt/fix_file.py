import re
import json

def fix():
    f = open('DESCRIPTIVA.json', encoding="utf8")
    data = json.load(f)
    str = json.dumps(data)
    val = re.sub(r'"(\d+),(\d+)"', r'\1.\2', str)
    val = re.sub(r'"(\d+)"', r'\1', str)
    #print(val)
    
    with open('DESCRIPTIVA.json', 'wb') as encrypted_file:
        encrypted_file.write(val.encode('utf-8')) 

if __name__ == "__main__":
    fix()