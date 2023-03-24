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
			Ingredient.of('32x kubejs:raw_copper_mote').toJson(),
		],
		results: [
			Item.of('minecraft:raw_copper').toJson(),
		]
	})
})

