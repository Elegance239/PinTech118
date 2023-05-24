function MMIngredient(item, count) {
    return {
      type: "mm:simple",
      ingredient: {
        type: "mm:item",
        item: item,
        count: count
      }
    };
  }

onEvent("mm.recipes", event => {
    event.build("mm:advanced_machine_frame", {
        duration: 600,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Partial Advanced Machine Frame 4/6"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient("kubejs:advanced_machine_frame_3", 1),
            MMIngredient("mekanism:hdpe_sheet", 4),
            MMIngredient("kubejs:composite_mechanical_component", 4),
        ],
        outputs: [
            MMIngredient("kubejs:advanced_machine_frame_4", 1),
        ]
    })
    event.build("mm:composite", {
        duration: 400,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Incomplete Composite Mechanical Component"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient("immersiveengineering:component_steel", 1),
            MMIngredient("immersiveengineering:plate_aluminum", 4),
            MMIngredient("mekanism:alloy_reinforced", 1),
        ],
        outputs: [
            MMIngredient("kubejs:composite_mechanical_component_u", 1),
        ]
    })
    event.build("mm:advanced", {
        duration: 400,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Unpowered Advanced Component"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient("kubejs:composite_mechanical_component", 1),
            MMIngredient("kubejs:conductive_polymer", 3),
            MMIngredient("extrastorage:neural_processor", 2)
        ],
        outputs: [
            MMIngredient("kubejs:unpowered_advanced_component", 1)
        ]
    })

    event.build("mm:engineering_block_frame", {
        duration: 200,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Engineering Block Frame"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient("thermal:steel_gear", 1),
            MMIngredient("immersiveengineering:component_steel", 1),
            MMIngredient("immersiveengineering:component_iron", 1),
            MMIngredient("immersiveengineering:stick_steel", 2),
            MMIngredient("immersiveengineering:sheetmetal_steel", 1),
        ],
        outputs: [
            MMIngredient("kubejs:engineering_block_frame",1)
        ]
    })

    event.build("mm:superconducting_magnet", {
        duration: 800,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Superconducting Magnet"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient("kubejs:superconducting_wire",1),
            MMIngredient("kubejs:advanced_component",3),
            MMIngredient("kubejs:cooling_system",2),
            MMIngredient("mekanism:elite_control_circuit",1),
            MMIngredient("thermal:rf_coil",1),
            MMIngredient("thermal_extra:polarium_plate",5),
        ],
        outputs: [
            MMIngredient("kubejs:superconducting_magnet",1)
        ]
    })

    event.build("mm:advanced_modular_framework", {
        duration: 200,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Advanced Modular Framework"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient("thermal_extra:polarium_plate",1),
            MMIngredient("kubejs:modular_machine_framework",1),
            MMIngredient("kubejs:conductive_polymer",1)
        ],
        outputs: [
            MMIngredient("kubejs:advanced_modular_framework",1)
        ]
    })

    event.build("mm:elite_control_circuit", {
        duration: 200,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Elite Control Circuit"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient('extrastorage:neural_processor',3),
            MMIngredient("mekanism:advanced_control_circuit",1),
            MMIngredient('mekanism:alloy_reinforced',3),
            MMIngredient("kubejs:cooling_system",1)
        ],
        outputs: [
            MMIngredient("mekanism:elite_control_circuit",1)
        ]
    })

    event.build("mm:basic_versatile", {
        duration: 200,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Basic Versatile Frame"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient('mekanism:hdpe_sheet',2),
            MMIngredient('mekanism:elite_control_circuit',1),
            MMIngredient('mekanism:steel_casing',1),
            
        ],
        outputs: [
            MMIngredient("kubejs:basic_versatile_frame",2)
        ]
    })

    event.build("mm:advanced_versatile", {
        duration: 200,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Advanced Versatile Frame"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient('kubejs:conductive_polymer',1),
            MMIngredient('mekanism:elite_control_circuit',1),
            MMIngredient('kubejs:composite_mechanical_component',1),
            MMIngredient('mekanism:steel_casing',1),
            
        ],
        outputs: [
            MMIngredient("kubejs:advanced_versatile_frame",2)
        ]
    })

    event.build("mm:pressure_ender_core", {
        duration: 50,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Pressurized Ender Core"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient('kubejs:ender_core',1),
        ],
        outputs: [
            MMIngredient("kubejs:pressurized_ender_core",1)
        ]
    })
})

