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
    event.build("mm:launch", {
        duration: 10,
        structureId: "namespace:electromagnetic_catapult",
        name: {
            text: "Launching: RKM"
        },
        inputs: [
            {
                type:"mm:simple",
                ingredient: {
                    type: "mm:energy",
                    amount: 2000000000
                }
                
            },
            MMIngredient('kubejs:propulsion_module', 1),
            MMIngredient('kubejs:structure_module', 1),
            MMIngredient('kubejs:power_module', 1),
            MMIngredient('kubejs:payload_module', 1),
            MMIngredient('kubejs:guidance_module', 1),
            MMIngredient('kubejs:shielding_module', 1),
        ],
        outputs: [
        ]
    })

   
})