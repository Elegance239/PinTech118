function MMItem(item, count) {
    return {
      type: "mm:simple",
      ingredient: {
        type: "mm:item",
        item: item,
        count: count
      }
    };
  }
  function MMFluid(fluid, amount) {
    return {
      type: "mm:simple",
      ingredient: {
        type: "mm:fluid",
        fluid: fluid,
        amount: amount
      }
    };
  }
  function MMEnergy(amount) {
    return {
        type: "mm:per_tick",
        ingredient: {
            type: "mm:energy",
            amount: amount
        }
    };
  }
  

onEvent("mm.recipes", event => {
    event.build("mm:cryogenic_coolant", {
        duration: 50,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Cryogenic Coolant"
        },
        inputs: [
            MMEnergy(200),
            MMFluid("kubejs:liquid_nitrogen", 100),
            MMFluid("mekanism:hydrogen", 100)
        ],
        outputs: [
            MMFluid("kubejs:cryogenic_coolant", 100),
        ]
    })

    event.build("mm:cryogenic_coolant", {
        duration: 50,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Cryogenic Coolant"
        },
        inputs: [
            MMEnergy(200),
            MMFluid("mekanism:hydrofluoric_acid", 100),
            MMItem("kubejs:crude_alumina",1)
        ],
        outputs: [
            MMFluid('kubejs:impure_alumina_solution', 100),
        ]
    })

    event.build("mm:superalloy", {
        duration: 100,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Superalloy"
        },
        inputs: [
            MMEnergy(500),      //500RF/t = superheat, 200RF/t = normal/heated
            MMItem('kubejs:highly_enriched_carbon',1),
            MMItem('mekanism:alloy_reinforced',1),
            MMItem('thermal:nickel_ingot',1),
            MMItem("pneumaticcraft:ingot_iron_compressed",1)
        ],
        outputs: [
            MMItem('thermal_extra:polarium_ingot',1),
        ]
    })
})