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
        duration: 20,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Cryogenic Coolant"
        },
        inputs: [
            MMEnergy(200),
            MMFluid("kubejs:liquid_nitrogen", 50),
            MMFluid("mekanism:hydrogen", 50)
        ],
        outputs: [
            MMFluid("kubejs:cryogenic_coolant", 50),
        ]
    })

    event.build("mm:cryogenic_coolant", {
        duration: 20,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Cryogenic Coolant"
        },
        inputs: [
            MMEnergy(200),
            MMFluid("mekanism:hydrofluoric_acid", 50),
            MMItem("kubejs:crude_alumina",1)
        ],
        outputs: [
            MMFluid('kubejs:impure_alumina_solution', 50),
        ]
    })

    event.build("mm:superalloy", {
        duration: 80,
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
    

    event.build("mm:desiccated_biomass", {
        duration: 20,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Desiccated Biomass"
        },
        inputs: [
            MMEnergy(200),      
            MMItem('kubejs:dehydrated_biomass',1),
            MMItem('kubejs:calcium_oxide',1),
        ],
        outputs: [
            MMItem('kubejs:desiccated_biomass',1),
        ]
    })
    
})