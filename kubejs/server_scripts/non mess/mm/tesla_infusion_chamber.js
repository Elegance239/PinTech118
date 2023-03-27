onEvent("mm.recipes", event => {
    event.build("mm:rough_graphene", {
        duration: 200,
        structureId: "namespace:tesla_infusion_chamber",
        name: {
            text: "Energizing: Rough Graphene"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 2000
                }
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:graphene_oxide",
                    count: 1
                }
            },
        ],
        outputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:rough_graphene",
                    count: 1
                }
            }
        ]
    })

    event.build("mm:advanced_component", {
        duration: 500,
        structureId: "namespace:tesla_infusion_chamber",
        name: {
            text: "Energizing: Advanced Component"
        },
        inputs: [
            {
                type: "mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 2000
                }
            },
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:unpowered_advanced_component",
                    count: 1
                }
            },
        ],
        outputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:item",
                    item: "kubejs:advanced_component",
                    count: 1
                }
            }
        ]
    })
})




