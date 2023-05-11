onEvent('recipes', event => {
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
        "item": "immersiveengineering:sheetmetal_steel"
        },
        "loops": 1,
        "results": [
            Item.of("kubejs:engineering_block_frame").toJson(),
        ],
        "sequence": [
        {
            "type": "create:cutting",
            "ingredients": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            },
            ],
            "results": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            }
            ]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            },
            {
                "item": "thermal:steel_gear"
            }
            ],
            "results": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            }
            ]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            },
            {
                "item": "immersiveengineering:component_steel"
            }
            ],
            "results": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            }
            ]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            },
            {
                "item": "immersiveengineering:component_iron"
            }
            ],
            "results": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            }
            ]
        },
        {
            "type": "create:pressing",
            "ingredients": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            }
            ],
            "results": [
                {
                "item": "immersiveengineering:sheetmetal_steel"
                }
            ]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            },
            {
                "item": "immersiveengineering:stick_steel"
            }
            ],
            "results": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            }
            ]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            },
            {
                "item": "immersiveengineering:stick_steel"
            }
            ],
            "results": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            }
            ]
        },
        {
            "type": "create:pressing",
            "ingredients": [
            {
                "item": "immersiveengineering:sheetmetal_steel"
            }
            ],
            "results": [
                {
                "item": "immersiveengineering:sheetmetal_steel"
                }
            ]
        },

        ],
        "transitionalItem": {
        "item": "immersiveengineering:sheetmetal_steel"
        }
    })

    let input = "thermal:gold_plate"
    event.custom({
        
        "type": "create:sequenced_assembly",
        "ingredient": {
        "item": input
        },
        "loops": 1,
        "results": [
            {item:'create:precision_mechanism', count:4}
        ],
        "sequence": [
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": input
            },
            {
                "item": "pneumaticcraft:compressed_iron_gear"
            }
            ],
            "results": [
            {
                "item": input
            }
            ]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": input
            },
            {
                "item": "thermal:silver_gear"
            }
            ],
            "results": [
            {
                "item": input
            }
            ]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": input
            },
            {
                "item": "minecraft:iron_nugget"
            }
            ],
            "results": [
            {
                "item": input
            }
            ]
        },
        {
            "type": "create:pressing",
            "ingredients": [
            {
                "item": input
            }
            ],
            "results": [
                {
                "item": input
                }
            ]
        },
        ],
        "transitionalItem": {
        "item": input
        }
    })

    let input2 = "mekanism:cardboard_box"
    event.custom({
        
        "type": "create:sequenced_assembly",
        "ingredient": {
        "item": input2
        },
        "loops": 1,
        "results": [
            Item.of("kubejs:storage_bundle").toJson(),
        ],
        "sequence": [
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": input2
            },
            {
                "item": "kubejs:improved_processor_bundle"
            }
            ],
            "results": [
            {
                "item": input2
            }
            ]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": input2
            },
            {
                "item": "kubejs:advanced_processor_bundle"
            }
            ],
            "results": [
            {
                "item": input2
            }
            ]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": input2
            },
            {
                "item": "refinedstorage:construction_core"
            }
            ],
            "results": [
            {
                "item": input2
            }
            ]
        },
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": input2
            },
            {
                "item": "refinedstorage:destruction_core"
            }
            ],
            "results": [
            {
                "item": input2
            }
            ]
        },
        ],
        "transitionalItem": {
        "item": input2
        }
    })

    let input3 = "kubejs:advanced_machine_frame_1"
    event.custom({
        
        "type": "create:sequenced_assembly",
        "ingredient": {
        "item": input3
        },
        "loops": 2,
        "results": [
            Item.of("kubejs:advanced_machine_frame_2").toJson(),
        ],
        "sequence": [
        {
            "type": "create:deploying",
            "ingredients": [
            {
                "item": input3
            },
            {
                "item": "thermal:netherite_plate"
            }
            ],
            "results": [
            {
                "item": input3
            }
            ]
        },
        
        {
            "type": "create:pressing",
            "ingredients": [
            {
                "item": input3
            }
            ],
            "results": [
                {
                "item": input3
                }
            ]
        },
        ],
        "transitionalItem": {
        "item": input3
        }
    })

    event.recipes.createSequencedAssembly(
        [Item.of('kubejs:mixture_basin')],
        'create:basin',
        [
            event.recipes.createFilling('create:basin', 
            [
                'create:basin',
                Fluid.of('thermal_extra:zauvium', 500)
            ]),
            event.recipes.createFilling('create:basin', 
            [
                'create:basin',
                Fluid.of('thermal_extra:nectium', 500)
            ]),
            event.recipes.createFilling('create:basin', 
            [
                'create:basin',
                Fluid.of('thermal_extra:drownium', 500)
            ]),
            event.recipes.createFilling('create:basin', 
            [
                'create:basin',
                Fluid.of('thermal_extra:nebulium', 500)
            ]),
            event.recipes.createFilling('create:basin', 
            [
                'create:basin',
                Fluid.of('thermal_extra:vukaium', 500)
            ]),
        ]
    ).transitionalItem('create:basin').loops(2)

    event.recipes.createSequencedAssembly(
        'kubejs:plated_machine_frame',
        'kubejs:cut_machine_frame',
        [
            event.recipes.createDeploying(
                'kubejs:cut_machine_frame', 
                ['kubejs:cut_machine_frame', '#create:sandpaper']
            ).keepHeldItem(),

            event.recipes.createDeploying(
                'kubejs:cut_machine_frame', 
                ['kubejs:cut_machine_frame', 'kubejs:superalloy_plate_bundle']
            ),

            event.recipes.createDeploying(
                'kubejs:cut_machine_frame', 
                ['kubejs:cut_machine_frame', 'kubejs:superalloy_plate_bundle']
            ),

            
            event.recipes.createDeploying(
                'kubejs:cut_machine_frame', 
                ['kubejs:cut_machine_frame', 'immersiveengineering:hammer']
            ).keepHeldItem(),
        ]
    ).transitionalItem('kubejs:cut_machine_frame').loops(1)

    event.recipes.createSequencedAssembly(
        [Item.of('16x minecraft:glowstone_dust')],
        'kubejs:phosphor_blend',
        [
            event.recipes.createFilling('kubejs:phosphor_blend', 
            [
                'kubejs:phosphor_blend',
                Fluid.of('tconstruct:liquid_soul', 1000)
            ]),
            event.recipes.createFilling('kubejs:phosphor_blend', 
            [
                'kubejs:phosphor_blend',
                Fluid.of('tconstruct:liquid_soul', 1000)
            ]),
            event.recipes.createFilling('kubejs:phosphor_blend', 
            [
                'kubejs:phosphor_blend',
                Fluid.of('minecraft:lava', 1000)
            ]),
        ]
    ).transitionalItem('kubejs:phosphor_blend').loops(1)


    event.recipes.createSequencedAssembly(
        [Item.of('tconstruct:debris_nugget')],
        'kubejs:nanocomposite_alloy',
        [
            event.recipes.createFilling('kubejs:nanocomposite_alloy', 
            [
                'kubejs:nanocomposite_alloy',
                Fluid.of('tconstruct:blazing_blood', 5)
            ]),
            event.recipes.createPressing('kubejs:nanocomposite_alloy', 
            [
                'kubejs:nanocomposite_alloy',
            ]),
        ]
    ).transitionalItem('kubejs:nanocomposite_alloy').loops(50)
})