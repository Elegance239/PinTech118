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

    let input4 = "create:basin"
    event.custom({
        
        "type": "create:sequenced_assembly",
        "ingredient": {
        "item": input4
        },
        "loops": 1,
        "results": [
            Item.of("kubejs:mixture_basin").toJson(),
        ],
        "sequence": [
        {
            "type": "create:filling",
            "ingredients": [
            {
                "item": input4,
                
            },
            { fluid: 'thermal_extra:zauvium', amount: 500 }
            ],
            "results": [
            {
                "item": input4
            }
            ]
        },
        {
            "type": "create:filling",
            "ingredients": [
            {
                "item": input4,
                
            },
            { fluid: 'thermal_extra:nectium', amount: 500 }
            ],
            "results": [
            {
                "item": input4
            }
            ]
        },
        {
            "type": "create:filling",
            "ingredients": [
            {
                "item": input4,
            },
            { fluid: 'thermal_extra:drownium', amount: 500 }
            ],
            "results": [
            {
                "item": input4
            }
            ]
        },
        {
            "type": "create:filling",
            "ingredients": [
            {
                "item": input4,
                
            },
            { fluid: 'thermal_extra:nebulium', amount: 500 }
            ],
            "results": [
            {
                "item": input4
            }
            ]
        },
        {
            "type": "create:filling",
            "ingredients": [
            {
                "item": input4,
            },
            { fluid: 'thermal_extra:vukaium', amount: 500 }
            ],
            "results": [
            {
                "item": input4
            }
            ]
        },
        ],
        "transitionalItem": {
        "item": input4
        }
    })
    /* event.recipes.createSequencedAssembly(
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
    ).transitionalItem('create:basin').loops(2) */

    /* event.recipes.createSequencedAssembly(
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
    ).transitionalItem('kubejs:cut_machine_frame').loops(1) */

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'kubejs:cut_machine_frame' },
        results: [ Item.of('kubejs:plated_machine_frame').toJson() ],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'kubejs:cut_machine_frame' },
                    { tag: 'create:sandpaper' }
                ],
                results: [ { item: 'kubejs:cut_machine_frame' } ],
                keepHeldItem: true
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'kubejs:cut_machine_frame' },
                    { item: 'kubejs:superalloy_plate_bundle' }
                ],
                results: [ { item: 'kubejs:cut_machine_frame' } ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'kubejs:cut_machine_frame' },
                    { item: 'kubejs:superalloy_plate_bundle' }
                ],
                results: [ { item: 'kubejs:cut_machine_frame' } ]
            },
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'kubejs:cut_machine_frame' },
                    { item: 'immersiveengineering:hammer' }
                ],
                results: [ { item: 'kubejs:cut_machine_frame' } ],
                keepHeldItem: true
            }
        ],
        transitionalItem: { item: 'kubejs:cut_machine_frame' },
        loops: 1
    });

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: [ Item.of('kubejs:phosphor_blend').toJson() ],
        results: [{item: 'minecraft:glowstone_dust', count: 16}],
        sequence: [
            {
                type: 'create:filling',
                ingredients: [
                    { item: 'kubejs:phosphor_blend' },
                    { fluid: 'tconstruct:liquid_soul', amount: 1000 }
                ],
                results: [ { item: 'kubejs:phosphor_blend' } ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    { item: 'kubejs:phosphor_blend' },
                    { fluid: 'tconstruct:liquid_soul', amount: 1000 }
                ],
                results: [ { item: 'kubejs:phosphor_blend' } ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    { item: 'kubejs:phosphor_blend' },
                    { fluid: 'minecraft:lava', amount: 1000 }
                ],
                results: [ { item: 'kubejs:phosphor_blend' } ]
            }
        ],
        transitionalItem: { item: 'kubejs:phosphor_blend' },
        loops: 1
    });


    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: Item.of('kubejs:nanocomposite_alloy').toJson(),
        results: [ Item.of('tconstruct:debris_nugget').toJson() ],
        sequence: [
            {
                type: 'create:filling',
                ingredients: [
                    { item: 'kubejs:nanocomposite_alloy' },
                    { fluid: 'tconstruct:blazing_blood', amount: 5 }
                ],
                results: [ { item: 'kubejs:nanocomposite_alloy' } ]
            },
            {
                type: 'create:pressing',
                ingredients: [ { item: 'kubejs:nanocomposite_alloy' } ],
                results: [ { item: 'kubejs:nanocomposite_alloy' } ]
            }
        ],
        transitionalItem: { item: 'kubejs:nanocomposite_alloy' },
        loops: 50
    });

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: Item.of('kubejs:fluorite_seed').toJson(),
        results: [ Item.of('mekanism:fluorite_gem').toJson() ],
        sequence: [
            {
                type: 'create:filling',
                ingredients: [
                    { item: 'kubejs:fluorite_seed' },
                    { fluid: 'minecraft:water', amount: 400 }
                ],
                results: [ { item: 'kubejs:fluorite_seed' } ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    { item: 'kubejs:fluorite_seed' },
                    { fluid: 'minecraft:water', amount: 400 }
                ],
                results: [ { item: 'kubejs:fluorite_seed' } ]
            },
            {
                type: 'create:filling',
                ingredients: [
                    { item: 'kubejs:fluorite_seed' },
                    { fluid: 'minecraft:water', amount: 400 }
                ],
                results: [ { item: 'kubejs:fluorite_seed' } ]
            }
        ],
        transitionalItem: { item: 'kubejs:fluorite_seed' },
        loops: 3
    });
})