// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	// Change recipes here
	
	/*event.custom({
		type: 'create:pressing',
		ingredients: [
			Ingredient.of('thermal:tin_ingot').toJson()
		],
		results: [
			Item.of('thermal:tin_plate').toJson(),
		],
	})*/
	event.custom({
		type: 'create:pressing',
		ingredients: [
			Ingredient.of('mekanism:enriched_redstone').toJson()
		],
		results: [
			Item.of('minecraft:redstone').toJson(),
		],
	})
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('create:rose_quartz').toJson(),
			Ingredient.of('minecraft:sand').toJson(),
		],
		results: [
			Item.of('create:polished_rose_quartz').toJson(),
		],
		heatRequirement: 'heated',
	})
	event.custom({
		type: 'create:milling',
		ingredients: [
			Ingredient.of('create:raw_zinc').toJson(),
		],
		results: [
			Item.of('create:crushed_zinc_ore').toJson(),
		],
	})
	event.custom({
		type: 'create:compacting',
		ingredients: [
			Ingredient.of('minecraft:sand').toJson(),
			Ingredient.of('minecraft:bricks').toJson(),
			Ingredient.of('minecraft:white_concrete_powder').toJson(),
		],
		results: [
			{item: 'immersiveengineering:cokebrick', count: 3}
		],

	})
	

	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('minecraft:sand').toJson(),
			Ingredient.of('minecraft:obsidian').toJson(),
			Ingredient.of('minecraft:quartz').toJson(),
		],
		results: [
			{item: 'thermal:obsidian_glass', count: 2}
		],
		heatRequirement:'heated',
	})
	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
		  "item": "create:andesite_casing"
		},
		"loops": 2,
		"results": [
		  {
			"item": "create:brass_casing"
		  },
		],
		"sequence": [
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "create:andesite_casing"
			  },
			  {
				"item": "immersiveengineering:treated_wood_horizontal"
			  }
			],
			"results": [
			  {
				"item": "create:andesite_casing"
			  }
			]
		  },
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "create:andesite_casing"
			  },
			  {
				"item": "immersiveengineering:treated_wood_horizontal"
			  }
			],
			"results": [
			  {
				"item": "create:andesite_casing"
			  }
			]
		  },
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "create:andesite_casing"
			  },
			  {
				"item": "create:brass_sheet"
			  }
			],
			"results": [
			  {
				"item": "create:andesite_casing"
			  }
			]
		  }
		],
		"transitionalItem": {
		  "item": "create:andesite_casing"
		}
	  })
	  event.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"item": "thermal:raw_silver"
			}
		],
		"results": [
			{
				"item": "kubejs:processed_raw_silver"
			}
		],
		heatRequirement: "heated",

	});
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('create:crushed_tin_ore').toJson(),
		],
		results: [
			{item:'thermal:tin_nugget', count:9}
		]
	})

	// Create: Zinc Processing Chain
	event.custom({
		type: 'create:compacting',
		ingredients: [
			Ingredient.of('minecraft:gravel').toJson(),
			Ingredient.of('minecraft:gravel').toJson(),
			Ingredient.of('minecraft:gravel').toJson(),
			Ingredient.of('minecraft:gravel').toJson(),
			Ingredient.of('minecraft:gravel').toJson(),
			Ingredient.of('minecraft:gravel').toJson(),
			Ingredient.of('minecraft:gravel').toJson(),
			Ingredient.of('minecraft:gravel').toJson(),
			Ingredient.of('minecraft:gravel').toJson(),
		],
		results: [
			Item.of('kubejs:dense_gravel').toJson(),
		],

	});
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('kubejs:dense_gravel').toJson(),
			{ amount: 250, fluid: 'minecraft:water', nbt: {}}
		],
		results: [
			Item.of('kubejs:wet_filtered_gravel').toJson(),
		],
	})
	event.custom({
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "kubejs:wet_filtered_gravel",
		  },
		  {
			"item": "minecraft:sponge",
		  }
		],
		"results": [
		  {
			"item": "kubejs:clean_filtered_gravel",
		  }
		]
	  }),

	event.custom( {
		"type": "thermal:smelter",
		"ingredient": {
		  "item": "kubejs:clean_filtered_gravel",
		},
		"result": [
		  {
			"item": "kubejs:tarnished_zinc_nugget",
			"count": 1
		  }
		],
		"energy_mod": 1
	  })
	event.custom({
		"type": "create:splashing",
		"ingredients": [
		  {
			"item": "kubejs:tarnished_zinc_nugget"
		  }
		],
		"results": [
		  {
			"chance": 0.5,
			"item": "create:zinc_nugget"
		  },
		  {
			"chance": 0.5,
			"item": "kubejs:failed_zinc_nugget"
		  }
		]
	  })
	event.custom(
		{
			"type": "minecraft:smoking",
			"cookingtime": 50,
			"experience": 0.0,
			"ingredient": {
			  "item": "minecraft:sugar"
			},
			"result": "kubejs:cellulose"
		}
	)
	event.custom({
		type: 'create:mixing',
		ingredients: [
			Ingredient.of('kubejs:cellulose').toJson(),
			Ingredient.of('minecraft:sand').toJson(),
		],
		results: [
			Item.of('minecraft:sponge').toJson(),
		],
	})
	// Zinc Processing Chain ends here.

	event.custom( {
		"type": "thermal:smelter",
		"ingredients": [
			{
			  "value": [
				{
				  "item": "minecraft:brick"
				}
			  ],
			  "count": 1
			},
			{
			  "value": [
				{
				  "item": "thermal:nickel_dust"
				},
			  ],
			  "count": 1
			},
			{
				"value": [
				  {
					"item": "thermal:tin_dust"
				  },
				],
				"count": 1
			}
			
		  ],
		"result": [
		  {
			"item": "kubejs:brickeltin",
			"count": 1
		  }
		],
		"energy_mod": 1
	  })

	  //Sequenced Assembly for Vacuum Tube

	  event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
		  "item": "create:electron_tube"
		},
		"loops": 1,
		"results": [
			Item.of("immersiveengineering:electron_tube").toJson(),
		],
		"sequence": [
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "create:electron_tube"
			  },
			  {
				"item": "immersiveengineering:wire_copper"
			  }
			],
			"results": [
			  {
				"item": "create:electron_tube"
			  }
			]
		  },
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "create:electron_tube"
			  },
			  {
				"item": "thermal:electrum_plate"
			  }
			],
			"results": [
			  {
				"item": "create:electron_tube"
			  }
			]
		  },
		  {
			"type": "create:deploying",
			"ingredients": [
			  {
				"item": "create:electron_tube"
			  },
			  {
				"item": "minecraft:glass"
			  }
			],
			"results": [
			  {
				"item": "create:andesite_casing"
			  }
			]
		  },
		  {
			"type": "create:pressing",
			"ingredients": [
			  {
				"item": "create:electron_tube"
			  }
			],
			"results": [
				{
				  "item": "create:electron_tube"
				}
			  ]
		  }
		],
		"transitionalItem": {
		  "item": "create:electron_tube"
		}
	  })

	  //Advanced Electronic Component Chain

	  event.custom({
		type: 'create:compacting',
		ingredients: [
			Ingredient.of('kubejs:brickeltin').toJson(),
			Ingredient.of('immersiveengineering:wire_lead').toJson(),
			Ingredient.of('immersiveengineering:wire_lead').toJson(),
			{ amount: 100, fluid: 'thermal:resin', nbt: {}}
		],
		results: [
			{
				"item": "kubejs:resistor", count:2
			  },
		],
	})

	event.shaped('kubejs:adv_comp_base', [
		' C ',
		' C ',
		' B '
	], {
		C:'createaddition:copper_spool',
		B:'create:brass_sheet',
	})
	event.shaped('kubejs:cap_inf_advcomp', [
		'C  ',
		'CP ',
		'C  '
	], {
		C:'createaddition:capacitor',
		P:'kubejs:adv_comp_base',
	})
	event.shaped('kubejs:brickeltin_inf_advcomp', [
		'   ',
		'C C',
		'CPC'
	], {
		C:'kubejs:resistor',
		P:'kubejs:cap_inf_advcomp',
	})
	event.shaped('immersiveengineering:component_electronic_adv', [
		'VP ',
		'V  ',
		'   '
	], {
		V:'immersiveengineering:electron_tube',
		P:'kubejs:brickeltin_inf_advcomp',
	})

	//Advanced Electronic Component Chain Finished.

	event.shapeless('thermal:press_gear_die', 'immersiveengineering:mold_gear')

	//RS Items Here:

	event.custom({
		type: 'create:compacting',
		ingredients: [
			Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
			Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
			Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
			Ingredient.of('refinedstorage:quartz_enriched_iron').toJson(),
			Ingredient.of('thermal:machine_frame').toJson(),
			Ingredient.of('thermal:redstone_servo').toJson(),
		],
		results: [
			Item.of('kubejs:comp_machinecasing').toJson(),
		],
	})

	event.custom({
		"type": "pneumaticcraft:pressure_chamber",
		"inputs": [
		  {
			"item": "kubejs:comp_machinecasing",
		  }
		],
		"pressure": 2.0,
		"results": [
		  {
			"item": "refinedstorage:machine_casing"
		  }
		]
	  })
	  event.custom({
		"type": "pneumaticcraft:explosion_crafting",
		"input": {
		  "item": "thermal:steel_ingot",
		},
		"loss_rate": 75,
		"results": [
		  {
			"item": "pneumaticcraft:ingot_iron_compressed"
		  }
		]
	  })

	  //RS Items End here.


	  event.shapeless(
		Item.of('create:iron_sheet'), 
		[
			'minecraft:iron_ingot',
			'minecraft:iron_ingot',
			'immersiveengineering:hammer'
		]

	  //Coal Processing Chain starts here.

	)

	  event.custom({
		type: 'create:compacting',
		ingredients: [
			Ingredient.of('kubejs:plant_matter').toJson(),
			Ingredient.of('kubejs:plant_matter').toJson(),
			Ingredient.of('kubejs:plant_matter').toJson(),
			Ingredient.of('kubejs:plant_matter').toJson(),
		],
		results: [
			Item.of('kubejs:peat').toJson(),
		],
	})

	event.custom({
		"type": "mekanism:infusion_conversion",
		"input": {
		  "ingredient": {
			"item": "kubejs:poo"
		  }
		},
		"output": {
		  "amount": 10,
		  "infuse_type": "kubejs:poo"
		}
	  }) 

	event.custom({
		type: "thermal:bottler",
		ingredient: [
			{ amount: 1000, fluid: "kubejs:piss", nbt:{}},
			{ item: 'kubejs:poo_infused_peat'},
		],
		result: [
			{
				item: "kubejs:drenched_peat",
			}
		]
	})


	  event.custom({
		"type": "create:splashing",
		"ingredients": [
		  {
			"item": "kubejs:stinky_coal"
		  }
		],
		"results": [
		  {
			"item": "minecraft:coal"
		  }
		],
	  })
	  
	//Coal Processing ends here.

	//Compressed Iron Components

	event.custom({

			"type":"createaddition:rolling",
			"input": {
				  "item": "pneumaticcraft:ingot_iron_compressed"
			},
			"result": {
				"item": "kubejs:compressed_iron_rod",
				"count": 2
			},
			"conditions": [ {
				"type": "forge:mod_loaded",
				"modid": "pneumaticcraft"
			} ]
		
	})

	event.custom({
		type: "thermal:press",
		ingredient: [
			{
				item:"pneumaticcraft:ingot_iron_compressed"
			}
		],
		result: [
			{
				item:"kubejs:compressed_iron_plate"
			}
		]
	})

	//Compressed Iron Components Ends.
	event.custom({
		type: "thermal:smelter",
		ingredient: [
			Item.of("2x minecraft:iron_ingot").toJson(),
			Item.of("thermal:nickel_ingot").toJson(),
			Item.of("mekanism:dust_refined_obsidian").toJson(),
		],
		result:
		[
			{item:'thermal:invar_ingot', count:3}
		]
	})

	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
		  "item": "minecraft:redstone_block"
		},
		"loops": 50,
		"results": [
		  {
			"item": "mekanism:enriched_redstone"
		  },
		],
		"sequence": [
		  {
			"type": "create:pressing",
			"ingredients": [
			  {
				"item": "minecraft:redstone_block"
			  },
			  {
				"item": "minecraft:redstone_block"
			  }
			],
			"results": [
			  {
				"item": "minecraft:redstone_block"
			  }
			]
		  },
		  
		],
		"transitionalItem": {
		  "item": "minecraft:redstone_block"
		}
	  })

	event.custom({
		"type": "create:sequenced_assembly",
		"ingredient": {
		  "item": "create:brass_casing"
		},
		"loops": 50,
		"results": [
		  {
			"item": "kubejs:reinforced_casing"
		  },
		],
		"sequence": [

			  {
				"type": "create:filling",
				"ingredients": [
				  {
					"item": "create:brass_casing"
				  },
				  {
					"amount": 90,
					"fluid": "tconstruct:molten_lead",
					"nbt": {}
				  }
				],
				"results": [
				  {
					"item": "create:brass_casing"
				  }
				]
			},

			{
				"type": "create:filling",
				"ingredients": [
				  {
					"item": "create:brass_casing"
				  },
				  {
					"amount": 100,
					"fluid": "thermal:resin",
					"nbt": {}
				  }
				],
				"results": [
				  {
					"item": "create:brass_casing"
				  }
				]
			},

			{
				"type": "create:pressing",
				"ingredients": [
				  {
					"item": "create:brass_casing"
				  },
				  {
					"item": "create:brass_casing"
				  }
				],
				"results": [
				  {
					"item": "create:brass_casing"
				  }
				]
			  },	

		],
		"transitionalItem": {
		  "item": "create:brass_casing"
		}
	  })

	  event.smelting('kubejs:calcium_oxide', 'create:limestone')
	  event.custom({
		type: 'thermal:smelter',
		ingredients: [
            { item: 'create:limestone', count:1},
		],
		results: [
            { item: 'kubejs:calcium_oxide', count:1},

		],

		energy: 1000
	})
})



onEvent('item.tags', event =>{
 
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	event.add('lychee:fire_immune', 'kubejs:cellulose')
	event.add('lychee:fire_immune', 'minecraft:sponge')
	event.add('refinedstorage:processors', 'refinedstorage:basic_processor')
	event.add('refinedstorage:processors', 'refinedstorage:improved_processor')
	event.add('refinedstorage:processors', 'refinedstorage:advanced_processor')
	event.add('refinedstorage:cores', 'refinedstorage:destruction_core')
	event.add('refinedstorage:cores', 'refinedstorage:construction_core')
	event.add('refinedstorage:raw_processors', 'refinedstorage:raw_basic_processor')
	event.add('refinedstorage:raw_processors', 'refinedstorage:raw_improved_processor')
	event.add('refinedstorage:raw_processors', 'refinedstorage:raw_advanced_processor')
})
