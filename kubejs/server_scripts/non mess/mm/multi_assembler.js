onEvent("mm.recipes", event => {
    event.build("mm:advanced_machine_frame", {
        duration: 600,
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
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:advanced_machine_frame_3",
                    count: 1
                }
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "mekanism:hdpe_sheet",
                    count: 4
                }
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:composite_mechanical_component",
                    count: 4
                }
            }
        ],
        outputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:advanced_machine_frame_4",
                    count: 1
                }
            }
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
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "immersiveengineering:component_steel",
                    count: 1
                }
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "immersiveengineering:plate_aluminum",
                    count: 4
                }
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "mekanism:alloy_reinforced",
                    count: 1
                }
            }
        ],
        outputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:composite_mechanical_component_u",
                    count: 1
                }
            }
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
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:composite_mechanical_component",
                    count: 1
                }
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:conductive_polymer",
                    count: 3
                }
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "extrastorage:neural_processor",
                    count: 2
                }
            }
        ],
        outputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:unpowered_advanced_component",
                    count: 1
                }
            }
        ]
    })
})


