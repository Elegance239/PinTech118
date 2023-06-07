onEvent('recipes', event => {
    event.custom({
        type: 'create:compacting',
        ingredients: [
            Ingredient.of('kubejs:lens_stuck_in_mold').toJson(),
        ],
        results: [
            Item.of('kubejs:mold_lens').toJson(),
            Item.of('industrialforegoing:laser_lens0').toJson(),
        ]
    })

    event.custom({
        type: 'create:compacting',
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
        type: 'create:compacting',
        ingredients: [
            Item.of('minecraft:egg').toJson(),
            Item.of('minecraft:sugar').toJson(),
            Item.of('create:cinder_flour').toJson(),
            {item: 'kubejs:pyrotheum', count: 24}
        ],
        results: [
            Item.of('create:blaze_cake_base').toJson(),
        ],
    })

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Ingredient.of('tconstruct:grout').toJson(),
        ],
        results: [
            Item.of('tconstruct:seared_brick').toJson(),
        ],
        heatRequirement: "heated"
    })

    event.custom({
        type: 'create:compacting',
        ingredients: [
            Ingredient.of('48x kubejs:raw_iron_mote').toJson(),
        ],
        results: [
            Item.of('minecraft:raw_iron').toJson(),
        ],
    })
})