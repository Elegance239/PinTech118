onEvent('recipes', event => {
    event.custom({
        type:'create:compacting',
        ingredients: [
            Ingredient.of('kubejs:lens_stuck_in_mold').toJson(),
        ],
        results: [
            Item.of('kubejs:mold_lens').toJson(),
            Item.of('industrialforegoing:laser_lens0').toJson(),
        ]
    })

    event.custom({
        type:'create:compacting',
        ingredients: [
            Ingredient.of('kubejs:superconducting_mixture').toJson(),
            Ingredient.of('kubejs:graphene').toJson(),
            Ingredient.of('kubejs:graphene').toJson(),
        ],
        results: [
            Item.of('kubejs:sintered_superconductor_pellet').toJson(),
        ],
        heatRequirement: "superheated"
    })
})