import re
import json

def fix():
    f = open('descriptiva.json', encoding="utf8")
    data = json.load(f)
    str = json.dumps(data)
    val = re.sub(r'"(\d+),(\d+)"', r'\1.\2', str)
    #print(val)
    
    with open('descriptivaN.json', 'wb') as encrypted_file:
        encrypted_file.write(val.encode('utf-8')) 

if __name__ == "__main__":
    fix()