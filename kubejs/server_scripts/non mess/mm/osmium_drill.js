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
    event.build("mm:osmium", {
        duration: 500,
        structureId: "namespace:osmium_drill",
        name: {
            text: "Synthesizing: Osmium"
        },
        inputs: [
            {
                type:"mm:per_tick",
                ingredient: {
                    type: "mm:energy",
                    amount: 150
                }
                
            },
            MMIngredient("thermal:steel_ingot", 1)
        ],
        outputs: [
            MMIngredient("mekanism:ingot_osmium", 1),
        ]
    })

   
})