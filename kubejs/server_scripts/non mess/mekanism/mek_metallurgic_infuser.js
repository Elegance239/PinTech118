onEvent('recipes', event => {
	// Change recipes here
	
    event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {"amount":640,"tag":"mekanism:redstone"},
		itemInput: [
			{ingredient: 
				{item: 'minecraft:quartz', count:1}
			}
		],
		output: { item: 'create:rose_quartz', count:2},
	})

	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {"amount":60,"infuse_type":"kubejs:poo"},
		itemInput: [
			{ingredient: 
				{item: 'kubejs:peat', count:1}
			}
		],
		output: { item: 'kubejs:poo_infused_peat', count:1},
            
	})

	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {"amount":20,"tag":"mekanism:redstone"},
		itemInput: [
			{ingredient: 
				{item: 'thermal:electrum_ingot', count:1}
			}
		],
		output: { item: 'mekanism:alloy_infused', count:1},      
	})
	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {"amount":80,"tag":"mekanism:diamond"},
		itemInput: [
			{ingredient: 
				
				{item: 'kubejs:contaminated_reinforcement_catalyst', count:1}
			}
		],
		output: { item: 'kubejs:reinforcement_catalyst', count:1},
	})

	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {"amount":20,"infuse_type":"kubejs:graphene"},
		itemInput: [
			{ingredient: 
				
				{item: 'kubejs:blackstone_alloy', count:1}
			}
		],
		output: { item: 'kubejs:nanocomposite_alloy', count:1},
	})

	event.custom({
		type: 'mekanism:metallurgic_infusing',
		chemicalInput: {"amount":80,"infuse_type":"mekanism:carbon"},
		itemInput: [
			{ingredient: 
				
				{item: 'minecraft:charcoal', count:1}
			}
		],
		output: { item: 'thermal:coal_coke', count:1},
	})
})

