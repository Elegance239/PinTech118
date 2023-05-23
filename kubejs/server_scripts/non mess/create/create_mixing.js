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
		[Fluid.of('create_enchantment_industry:experience', 1000), Fluid.of('tconstruct:molten_uranium', 90)]
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

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('kubejs:crude_alumina').toJson(),
            { fluid: 'mekanism:hydrofluoric_acid', amount: 100}
		],
		results: [
			{ fluid: 'kubejs:impure_alumina_solution', amount: 100},
		],
	})

	event.recipes.create.mixing(
		Item.of('kubejs:desiccated_biomass'),
		[Item.of('kubejs:dehydrated_biomass'), Item.of('kubejs:calcium_oxide')]
	)


	event.replaceInput({id:"createaddition:mixing/biomass_from_sticks"}, 'minecraft:stick', '8x mekanism:bio_fuel')

	event.recipes.create.mixing(
		Item.of('kubejs:pyrotheum'),
		[Item.of('2x kubejs:iron_oxide'), Item.of('2x immersiveengineering:dust_aluminum'), Item.of('mekanism:dust_lithium'), Item.of('minecraft:blaze_powder')]
	)

	event.recipes.create.mixing(
		[Fluid.of('kubejs:waste', 500), Item.of('kubejs:sieve'), Item.of('9x kubejs:impure_gold').withChance(0.7), Item.of('6x kubejs:impure_gold').withChance(0.5), Item.of('3x kubejs:impure_gold').withChance(0.3), Item.of('1x kubejs:impure_gold').withChance(0.1)],
		[Fluid.of('minecraft:water', 1000), Item.of('kubejs:sieve_with_gold')]	
	)

	event.recipes.create.mixing(
		Fluid.of('pneumaticcraft:etching_acid', 1000),
		[Item.of('2x minecraft:gunpowder'), Item.of('2x minecraft:spider_eye'), Item.of('2x minecraft:rotten_flesh')]
	)
})