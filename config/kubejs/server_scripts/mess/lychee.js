onEvent('recipes', event => {
     /* event.custom({
        "type": "lychee:lightning_channeling",
        "item_in": [
            {
                "item": "minecraft:diorite"
            },
            {
                "item": "jaopca:dusts.zinc"
            },
            {
                "item": "minecraft:redstone"
            },
        ],
        "post": [
            {
                "type": "drop_item",
                "item": "minecraft:iron_ingot",
            }
        ]
    }) */

    event.custom(
        {
        "type": "lychee:item_inside",
        "item_in": {
            "item": "kubejs:cut_gold"
        },
        "block_in": {
            "blocks": ["kubejs:liquid_calcium_cyanide"],
        },
        "post": [
            {
                "type": "place",
                "block": "kubejs:liquid_calcium_dicyanoaurate"
            }
        ]
    })

    event.custom(
        {
        "type": "lychee:item_inside",
        "item_in": {
            "item": "kubejs:cut_gold"
        },
        "block_in": {
            "blocks": ["kubejs:liquid_sodium_cyanide"],
        },
        "post": [
            {
                "type": "place",
                "block": "kubejs:liquid_sodium_dicyanoaurate"
            }
        ]
    })
})