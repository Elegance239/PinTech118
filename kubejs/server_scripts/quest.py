import ast
import json

def modify_quest(raw_string):
    modified_string = raw_string.replace(':', '":')
    modified_string = modified_string.replace('d",', 'd",\n')
    modified_string = modified_string.replace(',"', '",\n')
    modified_string = modified_string.replace(',"}', '}')
    modified_string = modified_string.replace(',"]', ']')
    print(modified_string)
    
    quests = ast.literal_eval(modified_string)
    
    modified_quests = []
    
    for quest in quests:
        modified_quest = {}
        
        modified_quest['icon'] = quest['tasks'][0]['item']
        modified_quest['x'] = quest['x']
        modified_quest['y'] = quest['y']
        modified_quest['can_repeat'] = True
        modified_quest['id'] = quest['id']
        
        tasks = [{
            'id': '122D2FC9C75835B0',
            'type': 'item',
            'item': 'thermal:copper_coin',
            'consume_items': True
        }]
        
        modified_quest['tasks'] = tasks
        
        rewards = []
        
        for reward in quest['tasks']:
            reward['count'] = 64
            rewards.append(reward)
        
        modified_quest['rewards'] = rewards
        
        modified_quests.append(modified_quest)
    
    return modified_quests

# Example usage
raw_string = '''
		{
			x: -4.5d
			y: -4.0d
			id: "653AB455AE875D60"
			tasks: [{
				id: "702A0FDB0ED1AAD7"
				type: "item"
				item: "minecraft:prismarine"
			}]
		}
'''

modified_quests = modify_quest(raw_string)

output = json.dumps(modified_quests, indent=4)
print(output)