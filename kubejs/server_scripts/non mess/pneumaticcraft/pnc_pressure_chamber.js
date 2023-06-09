onEvent('recipes', event => {
	// Change recipes here
	
    event.custom({
		"type": "pneumaticcraft:pressure_chamber",
		"inputs": [
		  {
			"item": "kubejs:drenched_peat",
		  }
		],
		"pressure": 3.5,
		"results": [
		  {
			"item": "kubejs:stinky_coal"
		  }
		]
	  })

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  { type: "pneumaticcraft:stacked_item", item: "thermal:steel_ingot", count: 4 },
		  Item.of("thermal:lead_ingot").toJson(),
		  
		],
		pressure: 3.5,
		results: [
		  {item: 'pneumaticcraft:ingot_iron_compressed', count: 2}
		]
	})
	event.custom(
	{
		"type": "pneumaticcraft:pressure_chamber",
		"inputs": [
		{
				"item": "minecraft:quartz"
		},
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 3,
			"item": "thermal:steel_ingot"
		  },
		  
		],
		"pressure": 2.5,
		"results": [
		  {
			"item": "refinedstorage:quartz_enriched_iron"
		  },
		]
	  })

	  event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of("refinedstorage:processor_binding").toJson(),
		  Item.of("thermal:steel_nugget").toJson(),
		  Item.of("refinedstorage:silicon").toJson(),
		  Item.of("minecraft:redstone").toJson(),
		],
		pressure: 2.5,
		results: [
		  Item.of("refinedstorage:raw_basic_processor").toJson(),
		]
	})

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of("refinedstorage:processor_binding").toJson(),
		  Item.of("thermal:electrum_nugget").toJson(),
		  Item.of("refinedstorage:silicon").toJson(),
		  Item.of("minecraft:redstone").toJson(),
		],
		pressure: 3,
		results: [
		  Item.of("refinedstorage:raw_improved_processor").toJson(),
		]
	})

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of("refinedstorage:processor_binding").toJson(),
		  Item.of("kubejs:enriched_diamond_nugget").toJson(),
		  Item.of("refinedstorage:silicon").toJson(),
		  Item.of("minecraft:redstone").toJson(),
		],
		pressure: 3.5,
		results: [
		  Item.of("refinedstorage:raw_advanced_processor").toJson(),
		]
	})

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of("industrialforegoing:plastic").toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 2,
			"item": "industrialforegoing:dryrubber"
		  },
		],
		pressure: 2,
		results: [
		  Item.of("kubejs:polymer_resin").toJson(),
		]
	})
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of("kubejs:adv_comp_base").toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 2,
			"item": "pneumaticcraft:plastic"
		  },
		  Item.of("mekanism:enriched_redstone").toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 3,
			"item": "minecraft:gold_nugget"
		  },
		],
		pressure: 1.5,
		results: [
		  Item.of("pneumaticcraft:empty_pcb").toJson(),
		]
	})
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of("immersiveengineering:wire_electrum").toJson(),
		  Item.of("pneumaticcraft:plastic").toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 2,
			"item": "thermal:signalum_nugget"
		  },
		  Item.of("create:polished_rose_quartz").toJson(),
		],
		pressure: 1,
		results: [
		  Item.of("pneumaticcraft:transistor").toJson(),
		]
	})

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of("immersiveengineering:wire_electrum").toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 2,
			"item": "pneumaticcraft:plastic"
		  },
		  Item.of("#forge:slimeballs").toJson(),
		  Item.of("thermal:tin_plate").toJson(),
		  Item.of("thermal:copper_plate").toJson(),
		],
		pressure: 1,
		results: [
		  Item.of("pneumaticcraft:capacitor").toJson(),
		]
	})

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of("mekanism:enriched_carbon").toJson(),
		],
		pressure: 2.5,
		results: [
		  Item.of("kubejs:highly_enriched_carbon").toJson(),
		]
	})
/*
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('kubejs:advanced_machine_frame_3').toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 4,
			"item": "kubejs:composite_mechanical_component"
		  },
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 4,
			"item": "mekanism:hdpe_sheet"
		  },
		],
		pressure: 3,
		results: [
		  Item.of('kubejs:advanced_machine_frame_4').toJson(),
		]
	})
*/
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('minecraft:netherite_ingot').toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 4,
			"item": "immersiveengineering:ingot_hop_graphite"
		  },
		],
		pressure: 3,
		results: [
		  Item.of('immersiveengineering:graphite_electrode').toJson(),
		]
	})


	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('thermal:signalum_dust').toJson(),
		  Item.of('mekanism:hdpe_sheet').toJson(),
		  Item.of('kubejs:graphene').toJson(),
		],
		pressure: 4,
		results: [
		  Item.of('kubejs:conductive_polymer').toJson(),
		]
	})

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('kubejs:plated_machine_frame').toJson(),
		],
		pressure: 4.5,
		results: [
		  Item.of('kubejs:pressurized_machine_frame').toJson(),
		]
	})

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('minecraft:netherite_ingot').toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 3,
			"item": "mekanism:ingot_refined_obsidian"
		  },
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 3,
			"item": "kubejs:conductive_polymer"
		  },
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 5,
			"item": "immersiveengineering:plate_aluminum"
		  },
		  Item.of('kubejs:advanced_processor_bundle').toJson(),
		],
		pressure: 3,
		results: [
		  Item.of('kubejs:quantum_cpu_package').toJson(),
		]
	})

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('minecraft:cobblestone').toJson(),
		  Item.of('kubejs:slag_powder').toJson(),
		  Item.of('minecraft:bone_meal').toJson(),
		],
		pressure: 3,
		results: [
		  Item.of('minecraft:calcite').toJson(),
		]
	})
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('kubejs:superconducting_mixture').toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 2,
			"item": "kubejs:graphene"
		  },
		  Item.of('kubejs:pyrotheum').toJson(),
		],
		pressure: 4,
		results: [
		  Item.of('kubejs:sintered_superconductor_pellet').toJson(),
		]
	})
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('kubejs:enriched_diamond_nugget').toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 6,
			"item": "immersiveengineering:dust_hop_graphite"
		  },
		  Item.of('jaopca:dusts.cobalt').toJson(),
		],
		pressure: 4,
		results: [
		  Item.of('kubejs:diamond_seed').toJson(),
		]
	})
	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('kubejs:enriched_diamond_nugget').toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 10,
			"item": "immersiveengineering:dust_hop_graphite"
		  },
		],
		pressure: 4,
		results: [
		  Item.of('kubejs:diamond_seed').toJson(),
		]
	})

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('kubejs:resistor').toJson(),
		  Item.of('refinedstorage:silicon').toJson(),
		],
		pressure: 1,
		results: [
		  Item.of('kubejs:diode').toJson(),
		]
	})

	event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('kubejs:neoclydium_core').toJson(),
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 40,
			"item": "kubejs:compressed_iron_rod"
		  },
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 10,
			"item": "thermal_extra:polarium_plate"
		  },
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 3,
			"item": "mekanism:alloy_atomic"
		  },
		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 10,
			"item": "kubejs:conductive_polymer"
		  },
		],
		pressure: 4.5,
		results: [
		  Item.of('kubejs:structural_chassis').toJson(),
		]
	})
})
