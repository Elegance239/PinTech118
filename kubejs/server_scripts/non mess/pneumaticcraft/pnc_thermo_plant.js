onEvent('recipes', event => {
	// Change recipes here


	event.custom({

		type: "pneumaticcraft:thermo_plant",
		"air_use_multiplier": 5.0,
		exothermic: false,
		fluid_input: {
			type: "pneumaticcraft:fluid",
			amount: 100,
			fluid: "minecraft:water"
		},
		fluid_output: {
			amount: 100,
			fluid: "kubejs:silica_rich_water"
		},
		item_input: {
			item: "kubejs:silica_dust"
		},
		pressure: 4.0,
		"speed": 0.2,
		temperature: {
			min_temp: 1473
		}
	})

	event.custom({

		type: "pneumaticcraft:thermo_plant",
		"air_use_multiplier": 20.0,
		exothermic: false,
		fluid_input: {
			type: "pneumaticcraft:fluid",
			amount: 8000,
			fluid: "thermal:glowstone"
		},
		item_output: {
			item: "minecraft:netherite_ingot"
		},
		item_input: {
			item: "kubejs:unprocessed_netherite_alloy"
		},
		pressure: 8,
		"speed": 0.2,
		temperature: {
			min_temp: 2073
		}
	})
	event.custom({

		type: "pneumaticcraft:thermo_plant",
		exothermic: false,
		fluid_input: {
			type: "pneumaticcraft:fluid",
			amount: 100,
			fluid: "pneumaticcraft:lpg"
		},
		item_input: {
			item: "kubejs:polymer_resin"
		},
		fluid_output: {
			type: "pneumaticcraft:fluid",
			amount: 1000,
			fluid: "pneumaticcraft:plastic"
		},
		temperature: {
			min_temp: 373
		}
	})
	event.custom({

		type: "pneumaticcraft:thermo_plant",
		exothermic: false,
		fluid_input: {
			type: "pneumaticcraft:fluid",
			amount: 100,
			tag: "forge:biodiesel"
		},
		item_input: {
			item: "kubejs:polymer_resin"
		},
		fluid_output: {
			type: "pneumaticcraft:fluid",
			amount: 1000,
			fluid: "pneumaticcraft:plastic"
		},
		temperature: {
			min_temp: 373
		}
	})

	event.custom({
		air_use_multiplier: 5.0,
		type: "pneumaticcraft:thermo_plant",
		exothermic: true,
		item_input: {
			item: "minecraft:packed_ice"
		},
		fluid_output: {
			type: "pneumaticcraft:fluid",
			amount: 200,
			fluid: "kubejs:liquid_nitrogen"
		},
		pressure: 3,
		speed: 0.2,
		temperature: {
			max_temp: 70
		}
	})


	event.custom({

		type: "pneumaticcraft:thermo_plant",
		exothermic: false,
		fluid_input: {
			type: "pneumaticcraft:fluid",
			amount: 500,
			fluid: "thermal:redstone"
		},
		item_input: {
			item: 'kubejs:doped_neural_processor'
		},
		item_output: {
			item: "extrastorage:neural_processor"
		},
		temperature: {
			min_temp: 873
		}
	})

	event.custom({

		type: "pneumaticcraft:thermo_plant",
		exothermic: false,
		fluid_input: {
			type: "pneumaticcraft:fluid",
			amount: 1000,
			fluid: "minecraft:water"
		},
		item_input: {
			item: "create:brass_ingot"
		},
		item_output: {
			item: "kubejs:aqueous_ingot"
		},
		temperature: {
			max_temp: 300
		}
	})

	event.custom({

		type: "pneumaticcraft:thermo_plant",
		exothermic: false,
		fluid_input: {
			type: "pneumaticcraft:fluid",
			amount: 1000,
			fluid: "minecraft:lava"
		},
		item_input: {
			item: "create:brass_ingot"
		},
		item_output: {
			item: "createchromaticreturn:glowing_ingot"
		},
		temperature: {
			min_temp: 200
		}
	})

	event.custom({

		type: "pneumaticcraft:thermo_plant",
		exothermic: false,
		fluid_input: {
			type: "pneumaticcraft:fluid",
			amount: 1000,
			fluid: "minecraft:water"
		},
		item_input: {
			item: "kubejs:rough_graphene"
		},
		item_output: {
			item: "kubejs:graphene"
		},
		temperature: {
			min_temp: 370,
			max_temp: 373
		}
	})

	
	event.custom({

		type: "pneumaticcraft:thermo_plant",
		exothermic: false,
		fluid_input: {
			type: "pneumaticcraft:fluid",
			amount: 100,
			fluid: "minecraft:water"
		},
		item_input: {
			item: "minecraft:calcite"
		},
		item_output: {
			item: "create:limestone"
		},
		temperature: {
			min_temp: 473
		}
	})
	
	event.custom({

		type: "pneumaticcraft:thermo_plant",
		"air_use_multiplier": 1000.0,
		exothermic: false,
		item_output: {
			item: "kubejs:impure_diamond"
		},
		item_input: {
			item: "kubejs:diamond_seed"
		},
		pressure: 9.8,
		"speed": 0.01,
		temperature: {
			min_temp: 2223
		}
	})

	event.custom({

		type: "pneumaticcraft:thermo_plant",
		exothermic: false,
		fluid_input: {
			type: "pneumaticcraft:fluid",
			amount: 360,
			fluid: "tconstruct:molten_enderium"
		},
		item_input: {
			item: "kubejs:pressurized_ender_core"
		},
		item_output: {
			item: "kubejs:enderium_core"
		},
		temperature: {
			min_temp: 473
		}
	})
	
})






