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

    event.custom({
        type:'create:compacting',
        ingredients: [
            Ingredient.of('minecraft:egg').toJson(),
            Ingredient.of('minecraft:sugar').toJson(),
            Ingredient.of('create:cinder_flour').toJson(),
            Item.of('24x kubejs:pyrotheum').toJson(),
        ],
        results: [
            Item.of('create:blaze_cake_base').toJson(),
        ],
    })

    event.custom({
        type:'create:compacting',
        ingredients: [
            Ingredient.of('tconstruct:grout').toJson(),
        ],
        results: [
            Item.of('tconstruct:seared_brick').toJson(),
        ],
        heatRequirement: "heated"
    })
})