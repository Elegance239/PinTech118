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

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('minecraft:obsidian').toJson(),
			{ fluid: 'minecraft:water', amount: 500 }
		],
		results: [ { fluid: 'tconstruct:molten_obsidian', amount: 1000 } ],
		heatRequirement: 'superheated',
		id: 'create:mixing/molten_obsidian'
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Fluid.of('thermal:redstone', 1000).toJson(),
			Fluid.of('tconstruct:molten_signalum', 90).toJson()
		],
		results: [Fluid.of('thermal_extra:zauvium', 500).toJson()],
		id: 'create:mixing/zauvium'
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Fluid.of('tconstruct:molten_refined_glowstone', 270).toJson(),
			Fluid.of('tconstruct:molten_lumium', 90).toJson()
		],
		results: [Fluid.of('thermal_extra:nectium', 500).toJson()],
		id: 'create:mixing/nectium'
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Fluid.of('industrialforegoing:pink_slime', 500).toJson(),
			Fluid.of('tconstruct:molten_refined_obsidian', 90).toJson()
		],
		results: [Fluid.of('thermal_extra:nebulium', 500).toJson()],
		id: 'create:mixing/nebulium'
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Fluid.of('create_enchantment_industry:experience', 500).toJson(),
			Fluid.of('tconstruct:molten_uranium', 90).toJson()
		],
		results: [Fluid.of('thermal_extra:vukaium', 500).toJson()],
		id: 'create:mixing/vukaium'
	});
	
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Fluid.of('kubejs:cryogenic_coolant', 1000).toJson(),
			Fluid.of('tconstruct:molten_enderium', 90).toJson()
		],
		results: [Fluid.of('thermal_extra:drownium', 500).toJson()],
		id: 'create:mixing/drownium_enderium'
	});
	
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Fluid.of('kubejs:cryogenic_coolant', 1000).toJson(),
			Fluid.of('thermal_extra:dragon_enderium', 45).toJson()
		],
		results: [Fluid.of('thermal_extra:drownium', 500).toJson()],
		id: 'create:mixing/drownium_dragon_enderium'
	});
	
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Item.of('minecraft:dragon_breath').toJson(),
			Fluid.of('tconstruct:molten_enderium', 45).toJson()
		],
		results: [Fluid.of('thermal_extra:dragon_enderium', 90).toJson()],
		heatRequirement: 'heated',
		id: 'create:mixing/dragon_enderium'
	});
	
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Item.of('createchromaticreturn:refined_radiance').toJson(),
			Item.of('createchromaticreturn:refined_radiance').toJson(),
			Fluid.of('tconstruct:molten_electrum', 450).toJson()
		],
		results: [Item.of('kubejs:neoclydium_ingot_test').toJson()],
		heatRequirement: 'superheated',
		id: 'create:mixing/neoclydium_ingot_test'
	});

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Item.of('mekanism:pellet_plutonium').toJson(),
			Item.of('immersiveengineering:ingot_hop_graphite').toJson(),
			Item.of('immersiveengineering:ingot_hop_graphite').toJson(),
			Item.of('thermal_extra:polarium_ingot').toJson(),
			Fluid.of('minecraft:water', 500).toJson()
		],
		results: [Item.of('kubejs:plutonium_superalloy').toJson()],
		id: 'create:mixing/plutonium_superalloy'
	});

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

	event.replaceInput({id:"createaddition:mixing/biomass_from_sticks"}, 'minecraft:stick', '8x mekanism:bio_fuel')

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Item.of('kubejs:dehydrated_biomass').toJson(),
			Item.of('kubejs:calcium_oxide').toJson()
		],
		results: [Item.of('kubejs:desiccated_biomass').toJson()],
		id: 'create:mixing/desiccated_biomass'
	});
	
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Item.of('kubejs:iron_oxide').toJson(),
			Item.of('kubejs:iron_oxide').toJson(),
			Item.of('immersiveengineering:dust_aluminum').toJson(),
			Item.of('immersiveengineering:dust_aluminum').toJson(),
			Item.of('mekanism:dust_lithium').toJson(),
			Item.of('minecraft:blaze_powder').toJson()
		],
		results: [Item.of('kubejs:pyrotheum').toJson()],
		id: 'create:mixing/pyrotheum'
	});
	
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Fluid.of('kubejs:waste', 500).toJson(),
			Item.of('kubejs:sieve').toJson(),
			Item.of('kubejs:impure_gold', 9).withChance(0.7).toJson(),
			Item.of('kubejs:impure_gold', 6).withChance(0.5).toJson(),
			Item.of('kubejs:impure_gold', 3).withChance(0.3).toJson(),
			Item.of('kubejs:impure_gold').withChance(0.1).toJson()
		],
		results: [
			Fluid.of('minecraft:water', 1000).toJson(),
			Item.of('kubejs:sieve_with_gold').toJson()
		],
		id: 'create:mixing/waste_sieving'
	});
	
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Item.of('minecraft:gunpowder').toJson(),
			Item.of('minecraft:gunpowder').toJson(),
			Item.of('minecraft:spider_eye').toJson(),
			Item.of('minecraft:spider_eye').toJson(),
			Item.of('minecraft:rotten_flesh').toJson(),
			Item.of('minecraft:rotten_flesh').toJson(),
		],
		results: [Fluid.of('pneumaticcraft:etching_acid', 1000).toJson(),],
		id: 'create:mixing/etching_acid'
	});
	
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Item.of('kubejs:highly_enriched_carbon').toJson(),
			Item.of('mekanism:alloy_reinforced').toJson(),
			Item.of('thermal:nickel_ingot').toJson(),
			Item.of('pneumaticcraft:ingot_iron_compressed').toJson()
		],
		results: [Item.of('thermal_extra:polarium_ingot').toJson()],
		id: 'create:mixing/polarium_ingot',
		heatRequirement: 'superheated'
	});
})