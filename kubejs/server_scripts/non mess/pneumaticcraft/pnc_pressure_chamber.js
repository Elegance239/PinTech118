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
		  Item.of("mekanism:dust_refined_obsidian").toJson(),
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
		  Item.of("thermal:signalum_coin").toJson(),
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

})
