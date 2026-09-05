# -*- coding: utf-8 -*-
import json
import re

with open("test_er_bakery.py", "r", encoding="utf-8") as f:
    code = f.read()

# Extract bakery_er_html
start = code.find("bakery_er_html = '''") + len("bakery_er_html = '''")
end = code.rfind("'''\nprint")
bakery_content = code[start:end].strip()

# Now load data.js
with open(r"c:\Users\informatics\Desktop\abstact ung\js\data.js", "r", encoding="utf-8") as f:
    data_text = f.read()

# We can parse the COURSE_DATA chapters or do a clean regex/string replacement
# Let's see if we can find ch5-er-diagrams-cardinality in data_text
target_id = '"id": "ch5-er-diagrams-cardinality"'
idx = data_text.find(target_id)
if idx == -1:
    # try single quote
    target_id = "'id': 'ch5-er-diagrams-cardinality'"
    idx = data_text.find(target_id)

print("Found target_id at:", idx)

# Find content field for this section
content_key = '"content": '
content_idx = data_text.find(content_key, idx)
print("Found content_key at:", content_idx)

# Find the start of the string after content_key
start_quote = content_idx + len(content_key)
quote_char = data_text[start_quote]
print("Quote char:", repr(quote_char))

# If it's a JSON encoded string or template literal
# Let's inspect next 50 chars
print("Snippet after quote:", repr(data_text[start_quote:start_quote+50]))

# Because data.js was generated using json.dumps for each chapter, the string is JSON escaped!
# Let's write a python script that loads the chapters array, updates the section, and re-writes!
