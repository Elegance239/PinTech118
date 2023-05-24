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
        duration: 40,
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

    event.build("mm:impure_alumina", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Alumina"
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
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Superalloy"
        },
        inputs: [
            MMEnergy(200),      //500RF/t = superheat, 200RF/t = normal/heated
            MMItem('kubejs:highly_enriched_carbon',1),
            MMItem('mekanism:alloy_reinforced',1),
            MMItem('thermal:nickel_ingot',1),
            MMItem("pneumaticcraft:ingot_iron_compressed",1),
            MMItem('kubejs:pyrotheum',1)
        ],
        outputs: [
            MMItem('thermal_extra:polarium_ingot',1),
        ]
    })
    

    event.build("mm:desiccated_biomass", {
        duration: 40,
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

    event.build("mm:pyrotheum", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Pyrotheum"
        },
        inputs: [
            MMEnergy(200),      
            MMItem('kubejs:iron_oxide',2),
            MMItem('immersiveengineering:dust_aluminum',2),
            MMItem('mekanism:dust_lithium',1),
            MMItem('minecraft:blaze_powder',1),
        ],
        outputs: [
            MMItem('kubejs:pyrotheum',1),
        ]
    })
    
    event.build("mm:neoclydium", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Neoclydium"
        },
        inputs: [
            MMEnergy(200),      
            MMItem('createchromaticreturn:refined_radiance',2),
            MMFluid("tconstruct:molten_electrum", 450),
            MMItem('kubejs:pyrotheum',1),
        ],
        outputs: [
            MMItem('kubejs:neoclydium_ingot_test',1),
        ]
    })

    event.build("mm:plastic", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Plastic"
        },
        inputs: [
            MMEnergy(200),      
            MMItem('thermal:sulfur_dust',1),
            MMFluid("minecraft:water", 1000),
            MMItem('thermal:rubber',4),
        ],
        outputs: [
            MMItem('industrialforegoing:plastic',6),
        ]
    })
    event.build("mm:zauvium", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Zauvium"
        },
        inputs: [
            MMEnergy(200),      
            MMFluid('thermal:redstone', 1000),
            MMFluid('tconstruct:molten_signalum', 90),
        ],
        outputs: [
            MMFluid('thermal_extra:zauvium', 500),
        ]
    })

    event.build("mm:nectium", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Nectium"
        },
        inputs: [
            MMEnergy(200),      
            MMFluid('tconstruct:molten_refined_glowstone', 1000),
            MMFluid('tconstruct:molten_lumium', 90),
        ],
        outputs: [
            MMFluid('thermal_extra:nectium', 500),
        ]
    })

    event.build("mm:nebulium", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Nebulium"
        },
        inputs: [
            MMEnergy(200),      
            MMFluid('industrialforegoing:pink_slime', 1000),
            MMFluid('tconstruct:molten_refined_obsidian', 90),
        ],
        outputs: [
            MMFluid('thermal_extra:nebulium', 500),
        ]
    })

    event.build("mm:vukaium", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Vukaium"
        },
        inputs: [
            MMEnergy(200),      
            MMFluid('create_enchantment_indsutry:experience', 250),
            MMFluid('tconstruct:molten_uranium', 90),
        ],
        outputs: [
            MMFluid('thermal_extra:vukaium', 500),
        ]
    })

    event.build("mm:drownium", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Drownium"
        },
        inputs: [
            MMEnergy(200),      
            MMFluid('kubejs:cryogenic_coolant', 1000),
            MMFluid('tconstruct:molten_enderium', 90),
        ],
        outputs: [
            MMFluid('thermal_extra:drownium', 500),
        ]
    })

	event.build("mm:cheaper_drownium", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Drownium"
        },
        inputs: [
            MMEnergy(200),      
            MMFluid('kubejs:cryogenic_coolant', 1000),
            MMFluid('thermal_extra:dragon_enderium', 45),
        ],
        outputs: [
            MMFluid('thermal_extra:drownium', 500),
        ]
    })

    event.build("mm:shadowessence", {
        duration: 80,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Shadow Essence"
        },
        inputs: [
            MMEnergy(500),      
            MMItem('fluxnetworks:flux_dust', 5),
            MMItem('thermal:steel_coin', 4),
            MMItem('thermal:tar', 3),
            MMItem('minecraft:obsidian', 2),
            MMItem('minecraft:dragon_egg', 1),
            MMFluid('createchromaticreturn:refined_mixture', 5000),
        ],
        outputs: [
            MMFluid('createchromaticreturn:shadow_essence', 5000),
        ]
    })

    event.build("mm:dragon", {
        duration: 40,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Dragon Enderium"
        },
        inputs: [
            MMEnergy(200),      
            MMItem('minecraft:dragon_breath', 1),
            MMFluid('tconstruct:molten_enderium', 45),
        ],
        outputs: [
            MMFluid('thermal_extra:dragon_enderium', 90),
        ]
    })

    event.build("mm:blackstone", {
        duration: 200,
        structureId: "namespace:blender",
        name: {
            text: "Mixing: Blackstone Alloy"
        },
        inputs: [
            MMEnergy(200),      
            MMItem('mekanism:ingot_osmium', 1),
            MMItem('minecraft:blackstone', 16),
            MMItem('kubejs:pyrotheum', 2),
        ],
        outputs: [
            MMItem('kubejs:blackstone_alloy', 9),
        ]
    })
})