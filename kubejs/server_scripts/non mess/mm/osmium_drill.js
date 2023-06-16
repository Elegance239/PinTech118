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
        duration: 800,
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
        ],
        outputs: [
            MMIngredient("kubejs:processed_raw_osmium", 1),
        ]
    })

   
})