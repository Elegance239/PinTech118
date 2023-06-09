onEvent('recipes', event => {
	const addrods = [
		['minecraft:iron_ingot', 'immersiveengineering:stick_iron'],
		['thermal:steel_ingot', 'immersiveengineering:stick_steel'],
		['immersiveengineering:ingot_aluminum', 'immersiveengineering:stick_aluminum'],
		['minecraft:copper_ingot', 'createaddition:copper_rod'],
		['minecraft:gold_ingot', 'createaddition:gold_rod'],
		['create:brass_ingot', 'createaddition:brass_rod'],
		['pneumaticcraft:ingot_iron_compressed','kubejs:compressed_iron_rod'],
	]

	addrods.forEach(item => {
		event.custom(
		{
			"type": "thermal:press",
			"ingredients": [
			  {
				"item": item[0],
			  },
			  {
				"item": "immersiveengineering:mold_rod"
			  }
			],
			"result": [
			  {
				"item": item[1],
				count: 2
			  }
			],
			"energy": 800
		  })
	})
	//RS Processing 

	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('4x refinedstorage:advanced_processor').toJson(),
			Item.of('kubejs:silicon_wafer').toJson(),
		],
		results: [
			Item.of('kubejs:advanced_processor_bundle').toJson(), 
		],
		energy: 1000
	})

	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('4x refinedstorage:improved_processor').toJson(),
			Item.of('kubejs:silicon_wafer').toJson(),
		],
		results: [
			Item.of('kubejs:improved_processor_bundle').toJson(), 
		],
		energy: 1000
	})

	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('2x refinedstorage:raw_advanced_processor').toJson(),
		],
		results: [
			Item.of('refinedstorage:advanced_processor').toJson(),
		]
	})

	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('2x refinedstorage:raw_improved_processor').toJson(),
		],
		results: [
			Item.of('refinedstorage:improved_processor').toJson(),
		]
	})

	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('2x refinedstorage:raw_basic_processor').toJson(),
		],
		results: [
			Item.of('refinedstorage:basic_processor').toJson(),
		]
	})
	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('36x kubejs:raw_copper_mote').toJson(),
		],
		results: [
			Item.of('minecraft:raw_copper').toJson(),
		]
	})

	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('36x kubejs:raw_lead_mote').toJson(),
		],
		results: [
			Item.of('thermal:raw_lead').toJson(),
		]
	})
	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('36x kubejs:raw_tin_mote').toJson(),
		],
		results: [
			Item.of('thermal:raw_tin').toJson(),
		]
	})
	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('36x kubejs:raw_nickel_mote').toJson(),
		],
		results: [
			Item.of('thermal:raw_nickel').toJson(),
		]
	})
	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('36x kubejs:raw_uranium_mote').toJson(),
		],
		results: [
			Item.of('immersiveengineering:raw_uranium').toJson(),
		]
	})
	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('36x kubejs:raw_iron_mote').toJson(),
		],
		results: [
			Item.of('minecraft:raw_iron').toJson(),
		]
	})

	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('kubejs:plutonium_superalloy').toJson(),
		],
		results: [
			Item.of('kubejs:plutonium_superalloy_plate').toJson(),
		]
	})

	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('createaddition:biomass').toJson(),
		],
		results: [
			Item.of('kubejs:dehydrated_biomass').toJson(),
		]
	})

	event.custom({
		type: 'thermal:press',
		ingredients: [
			Ingredient.of('kubejs:vukaium_plate_bundle').toJson(),
		],
		results: [
			Item.of('thermal_extra:advanced_augment_base').toJson(),
		]
	})

})

