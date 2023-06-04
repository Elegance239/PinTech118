onEvent('recipes', event => {
	// Change recipes here

	event.custom({
		type: 'thermal:crucible',
		ingredients: [


			{ tag: 'forge:ingots/tin', count: 1 }
		],
		results: [
			{ amount: 90, fluid: 'tconstruct:molten_tin' }


		],

		energy: 10000
	})

	event.custom({
		type: 'thermal:crucible',
		ingredients: [


			{ tag: 'forge:ingots/lead', count: 1 }
		],
		results: [
			{ amount: 90, fluid: 'tconstruct:molten_lead' }
		],
		energy: 10000
	})

	event.custom({
		type: 'thermal:crucible',
		ingredients: [


			{ tag: 'forge:ingots/compressed_iron', count: 1 }
		],
		results: [
			{ amount: 90, fluid: 'kubejs:molten_compressed_iron' }
		],
		energy: 10000
	})

	event.recipes.thermal.crucible(Fluid.of('createchromaticreturn:chromatic_mixture', 5000), 'createchromaticreturn:chromatic_compound')

	const ingotstofluid = [
		['minecraft:iron_ingot', 'tconstruct:molten_iron'],
		['minecraft:copper_ingot', 'tconstruct:molten_copper'],
		['minecraft:gold_ingot', 'tconstruct:molten_gold'],
		['create:zinc_ingot', 'tconstruct:molten_zinc'],
		['create:brass_ingot', 'tconstruct:molten_brass'],
		['immersiveengineering:ingot_aluminum', 'tconstruct:molten_aluminum'],
		['immersiveengineering:ingot_uranium', 'tconstruct:molten_uranium'], 
		['mekanism:ingot_refined_obsidian', 'tconstruct:molten_refined_obsidian'],
		['mekanism:ingot_refined_glowstone', 'tconstruct:molten_refined_glowstone'],
		['mekanism:ingot_osmium', 'tconstruct:molten_osmium'],
		['thermal:steel_ingot', 'tconstruct:molten_steel'],
		['thermal:signalum_ingot', 'tconstruct:molten_signalum'],
		['thermal:lumium_ingot', 'tconstruct:molten_lumium'],
		['thermal:enderium_ingot', 'tconstruct:molten_enderium'],
		['thermal:silver_ingot', 'tconstruct:molten_silver'],
		['thermal:nickel_ingot', 'tconstruct:molten_nickel'],
		['thermal_extra:zauvium_ingot', 'thermal_extra:zauvium'],
		['thermal_extra:drownium_ingot', 'thermal_extra:drownium'],
		['thermal:electrum_ingot', 'tconstruct:molten_electrum'],
		['thermal:invar_ingot', 'tconstruct:molten_invar'],
		['thermal:constantan_ingot', 'tconstruct:molten_constantan'],
		['thermal_extra:dragon_enderium_ingot', 'thermal_extra:dragon_enderium'],
		['thermal_extra:vukaium_ingot', 'thermal_extra:vukaium'],
		['thermal_extra:nebulium_ingot', 'thermal_extra:nebulium'],
		['thermal_extra:nectium_ingot', 'thermal_extra:nectium'],
	]

	ingotstofluid.forEach(ingot => {
		event.recipes.thermal.crucible(Fluid.of(ingot[1], 90), ingot[0])
	})

	event.recipes.thermal.crucible(Fluid.of('tconstruct:molten_glass', 1000), '#forge:glass')
	event.recipes.thermal.crucible(Fluid.of('kubejs:quasi_antientropic_fuel', 1000), 'kubejs:supersymmetric_alloy').energy(1000000)
})

