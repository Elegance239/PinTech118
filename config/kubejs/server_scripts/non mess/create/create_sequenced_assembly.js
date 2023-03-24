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
})