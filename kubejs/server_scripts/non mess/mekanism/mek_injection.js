onEvent('recipes', event => {
    // Change recipes here

    event.custom({

        type: "mekanism:injecting",
        itemInput: {
            ingredient: {
                item: 'immersiveengineering:dust_hop_graphite'
            }
        },
        chemicalInput: {
            amount: 2,
            gas: "mekanism:sulfuric_acid"
        },
        output: {
            item: "kubejs:graphene_oxide",
            count: 1
        }
    })

    event.custom({

        type: "mekanism:injecting",
        itemInput: {
            ingredient: {
                item: 'kubejs:crude_enderium_alloy_base'
            }
        },
        chemicalInput: {
            amount: 3,
            gas: "mekanism:hydrogen_chloride"
        },
        output: {
            item: "kubejs:enderium_alloy_base",
            count: 1
        }
    })

    event.recipes.mekanismInjecting(
        'kubejs:dissolved_machine_frame',
        'industrialforegoing:machine_frame_advanced',
        {gas: 'mekanism:sulfuric_acid', amount: 5}
    )

})
