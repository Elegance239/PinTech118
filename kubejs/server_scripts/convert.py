#use recipe maker wand to copy to clipboard, run this program to convert it directly into kubejs format, outputted to clipboard

import json
import pyperclip

# Get input from clipboard
input_str = pyperclip.paste()

# Process input string
input_dict = json.loads(input_str)

output_str = 'event.shaped(\'{}\','.format(input_dict['result']['item'])
output_str += '\n    {},'.format(json.dumps(input_dict['pattern']))
output_str += '\n    {},'.format(json.dumps(input_dict['key'], indent=4))

output_str += '\n)'

# Copy output to clipboard
pyperclip.copy(output_str)

