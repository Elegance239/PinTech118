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
            MMIngredient("kubejs:graphene_oxide", 1)
        ],
        outputs: [
            MMIngredient("kubejs:rough_graphene", 1)
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
            MMIngredient("kubejs:unpowered_advanced_component", 1)
        ],
        outputs: [
            MMIngredient("kubejs:advanced_component", 1)
        ]
    })
})




