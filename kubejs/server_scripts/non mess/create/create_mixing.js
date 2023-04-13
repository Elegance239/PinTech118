onEvent('recipes', event => {
	// Change recipes here
	
	
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('create:rose_quartz').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
            { fluid: 'minecraft:water', amount: 1000}
		],
		results: [
			{ amount: 1000, fluid: 'kubejs:redstone_slag_slurry'}
		],
		heatRequirement: 'heated',
	})

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('kubejs:redstone_slag_powder').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
			Ingredient.of('#forge:slag').toJson(),
            { fluid: 'minecraft:water', amount: 1000}
		],
		results: [
			{ amount: 1000, fluid: 'kubejs:redstone_slag_slurry'},
			Item.of('kubejs:slag_powder').toJson()
		],
		heatRequirement: 'heated',
	})

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('minecraft:quartz').toJson(),
			Ingredient.of('minecraft:redstone_block').toJson(),
		],
		results: [
			{item:'create:rose_quartz', count: 2},
		]

	})
	event.custom({
		type: 'create:mixing',
		ingredients: [
			{ fluid: 'minecraft:water', amount: 250},
			Ingredient.of('minecraft:redstone').toJson(),
		],
		results: [
			{ fluid: 'immersiveengineering:redstone_acid', amount: 250}
		]

	})

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
			Ingredient.of('mekanism:bio_fuel').toJson(),
            { fluid: 'minecraft:water', amount: 1000}
		],
		results: [
			Item.of('thermal:rubber').toJson()
		]
	})

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('#forge:dusts/sulfur').toJson(),
			Ingredient.of('thermal:rubber').toJson(),
			Ingredient.of('thermal:rubber').toJson(),
			Ingredient.of('thermal:rubber').toJson(),
			Ingredient.of('thermal:rubber').toJson(),
            { fluid: 'minecraft:water', amount: 1000}
		],
		results: [
			{item:'industrialforegoing:plastic', count: 6},
		],
		heatRequirement: 'heated',
	})

	event.recipes.create.mixing(
		Fluid.of('tconstruct:molten_obsidian', 1000), 
		[Fluid.of('minecraft:water', 500), 'minecraft:obsidian']
		).superheated().id('create:mixing/molten_obsidian')

	event.recipes.create.mixing(Item.of('thermal_extra:polarium_ingot'), [Item.of('thermal:nickel_ingot'), Item.of('kubejs:highly_enriched_carbon'), Item.of('pneumaticcraft:ingot_iron_compressed'), Item.of('mekanism:alloy_reinforced')]).superheated()

	event.recipes.create.mixing(
		Fluid.of('thermal_extra:zauvium', 500),
		[Fluid.of('thermal:redstone', 1000), Fluid.of('tconstruct:molten_signalum', 90)]
	)

	event.recipes.create.mixing(
		Fluid.of('thermal_extra:nectium', 500),
		[Fluid.of('tconstruct:molten_refined_glowstone', 1000), Fluid.of('tconstruct:molten_lumium', 90)]
	)

	event.recipes.create.mixing(
		Fluid.of('thermal_extra:nebulium', 500),
		[Fluid.of('industrialforegoing:pink_slime', 1000), Fluid.of('tconstruct:molten_refined_obsidian', 90)]
	)

	event.recipes.create.mixing(
		Fluid.of('thermal_extra:vukaium', 500),
		[Fluid.of('industrialforegoing:essence', 1000), Fluid.of('tconstruct:molten_uranium', 90)]
	)

	event.recipes.create.mixing(
		Fluid.of('thermal_extra:drownium', 500),
		[Fluid.of('kubejs:cryogenic_coolant', 1000), Fluid.of('tconstruct:molten_enderium', 90)]
	)

	event.recipes.create.mixing(
		Fluid.of('thermal_extra:drownium', 500),
		[Fluid.of('kubejs:cryogenic_coolant', 1000), Fluid.of('thermal_extra:dragon_enderium', 45)]
	)

	event.recipes.create.mixing(
		Fluid.of('thermal_extra:dragon_enderium', 90),
		[Item.of('minecraft:dragon_breath'), Fluid.of('tconstruct:molten_enderium', 45)]
	).heated()

	event.recipes.create.mixing(
		Item.of('kubejs:neoclydium_ingot_test'),
		[Item.of('2x createchromaticreturn:refined_radiance'), Fluid.of('tconstruct:molten_electrum', 450)]
	).superheated()

	event.recipes.create.mixing(
		Item.of('kubejs:plutonium_superalloy'),
		[Item.of('mekanism:pellet_plutonium'), Item.of('2x immersiveengineering:ingot_hop_graphite'), Item.of('thermal_extra:polarium_ingot'), Fluid.of('minecraft:water', 500)]
	)
})