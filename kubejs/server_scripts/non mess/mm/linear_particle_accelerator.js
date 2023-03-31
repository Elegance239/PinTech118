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
    event.build("mm:diamond", {
        duration: 100,
        structureId: "namespace:linear_particle_accelerator",
        name: {
            text: "Energizing: Rough Graphene"
        },
        inputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:energy",
                    amount: 1000000
                }
            },
            MMIngredient("minecraft:diamond", 1)
        ],
        outputs: [
            MMIngredient("minecraft:emerald", 1)
        ]
    })

   
})




