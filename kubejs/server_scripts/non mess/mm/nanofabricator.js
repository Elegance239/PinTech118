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
    /* ***** UNIQUE RECIPES ***** */
    event.build("mm:ion_trap_n", {
        duration: 200,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Ion Trap"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
                }
            },
            MMIngredient("immersiveengineering:stick_aluminum", 3),
            MMIngredient("thermal:rf_coil", 1),
            MMIngredient("kubejs:laser_array", 2),
            MMIngredient("kubejs:advanced_component", 1),
        ],
        outputs: [
            MMIngredient("kubejs:ion_trap", 1),
        ]
    })

    event.build("mm:quantum_cpu_n", {
        duration: 500,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Quantum CPU"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
                }
            },
            MMIngredient("kubejs:supersymmetric_alloy", 1),
            MMIngredient("mekanism:elite_control_circuit", 2),
            MMIngredient("kubejs:activated_ion_trap", 4),
            MMIngredient("kubejs:superconducting_circuit", 3),
            MMIngredient("kubejs:quantum_cpu_package", 1),
        ],
        outputs: [
            MMIngredient("kubejs:quantum_cpu", 1),
        ]
    })

    event.build("mm:supercharged_coil", {
        duration: 200,
        structureId: "namespace:multi_assembler",
        name: {
            text: "Assembling: Supercharged Coil"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 500
                }
            },
            MMIngredient('kubejs:superconducting_wire',3),
            MMIngredient("mekanism:laser",1),
            MMIngredient('mekanism:ultimate_control_circuit',2),
            MMIngredient("mekanism:pellet_polonium",4)
        ],
        outputs: [
            MMIngredient("mekanism:supercharged_coil",1)
        ]
    })


    /* ***** MULTI-ASSEMBLER UPGRADES ***** */ 
    event.build("mm:advanced_machine_frame_n", {
        duration: 300,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Incomplete Composite Mechanical Component"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
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
    event.build("mm:composite_n", {
        duration: 200,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Incomplete Composite Mechanical Component"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
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
    event.build("mm:advanced_n", {
        duration: 200,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Unpowered Advanced Component"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
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

    event.build("mm:engineering_block_frame_n", {
        duration: 100,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Engineering Block Frame"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
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

    event.build("mm:superconducting_magnet_n", {
        duration: 400,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Superconducting Magnet"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
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

    event.build("mm:advanced_modular_framework_n", {
        duration: 100,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Advanced Modular Framework"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
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

    event.build("mm:elite_control_circuit_n", {
        duration: 100,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Elite Control Circuit"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
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

    event.build("mm:basic_versatile_n", {
        duration: 100,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Basic Versatile Frame"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
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

    event.build("mm:advanced_versatile_n", {
        duration: 100,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Advanced Versatile Frame"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
                }
            },
            MMIngredient('kubejs:conductive_polymer',2),
            MMIngredient('mekanism:elite_control_circuit',1),
            MMIngredient('kubejs:composite_mechanical_component',1),
            MMIngredient('mekanism:steel_casing',1),
            
        ],
        outputs: [
            MMIngredient("kubejs:advanced_versatile_frame",2)
        ]
    })

    event.build("mm:power_module", {
        duration: 10000,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Power Module"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
                }
            },
            MMIngredient("mekanismgenerators:fusion_reactor_frame", 75),
            MMIngredient("mekanismgenerators:fusion_reactor_port", 2),
            MMIngredient("mekanismgenerators:fusion_reactor_controller", 1),
            MMIngredient("mekanismgenerators:reactor_glass", 8),
            MMIngredient("mekanismgenerators:laser_focus_matrix", 1),
            MMIngredient("advgenerators:turbine_tier5", 30),
            MMIngredient("mekanism:ultimate_induction_provider", 2),
            MMIngredient("mekanism:ultimate_induction_cell", 4),
            MMIngredient("kubejs:lv_bundle", 1),
            MMIngredient("kubejs:hv_bundle", 1),
            MMIngredient("kubejs:dt_capsule", 50),
            MMIngredient('kubejs:quantum_computer', 10)
        ],
        outputs: [
            MMIngredient("kubejs:power_module",1)
        ]
    })

    event.build("mm:payload_module", {
        duration: 10000,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Payload Module"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
                }
            },
            MMIngredient('kubejs:pyrotheum', 100),
            MMIngredient('mekanism:pellet_plutonium', 400),
            MMIngredient('kubejs:neutronium', 400),
            MMIngredient('kubejs:chaos_mechanism', 1),
            MMIngredient('kubejs:quantum_computer', 10)
        ],
        outputs: [
            MMIngredient("kubejs:payload_module",1)
        ]
    })

    event.build("mm:structure_module", {
        duration: 10000,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Structure Module"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
                }
            },
            MMIngredient('industrialforegoing:machine_frame_supreme', 30),
            MMIngredient('kubejs:composite_mechanical_component', 500),
            MMIngredient('thermal_extra:dragon_integral_component', 32),
            MMIngredient('kubejs:advanced_modular_framework', 100),
            MMIngredient('kubejs:structural_chassis', 200),
            MMIngredient('kubejs:quantum_computer', 10)
            

        ],
        outputs: [
            MMIngredient("kubejs:structure_module",1)
        ]
    })

    event.build("mm:shielding_module", {
        duration: 10000,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Shielding Module"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
                }
            },
            MMIngredient('kubejs:superconducting_magnet', 300),
            MMIngredient('thermal:netherite_plate', 500),
            MMIngredient('kubejs:mv_bundle', 1),
            MMIngredient('kubejs:quantum_computer', 10)

        ],
        outputs: [
            MMIngredient("kubejs:shielding_module", 1)
        ]
    })

    event.build("mm:propulsion_module", {
        duration: 10000,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Propulsion Module"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
                }
            },
            MMIngredient('mekanism:pellet_antimatter', 300),
            MMIngredient('kubejs:magnetic_nozzle', 100),
            MMIngredient('kubejs:quantum_computer', 10)

        ],
        outputs: [
            MMIngredient("kubejs:propulsion_module", 1)
        ]
    })


    event.build("mm:guidance_module", {
        duration: 10000,
        structureId: "namespace:nanofabricator",
        name: {
            text: "Assembling: Guidance Module"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000
                }
            },
            MMIngredient('mekanism:ultimate_control_circuit', 200),
            MMIngredient('mekanism:teleportation_core', 50),
            MMIngredient('kubejs:neoclydium_diode', 20),
            MMIngredient('kubejs:quantum_computer', 100)

        ],
        outputs: [
            MMIngredient("kubejs:guidance_module", 1)
        ]
    })

})

