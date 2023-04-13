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
    event.build("mm:supersymmetric_particles", {
        duration: 1200,
        structureId: "namespace:linear_particle_accelerator",
        name: {
            text: "Synthesizing: Supersymmetric Particles"
        },
        inputs: [
            {
                type: "mm:simple",
                ingredient: {
                    type: "mm:energy",
                    amount: 15000000
                }
            },
            MMIngredient("thermal:lead_dust", 32)
        ],
        outputs: [
            MMIngredient("kubejs:supersymmetric_particles", 1)
        ]
    })

   
})




