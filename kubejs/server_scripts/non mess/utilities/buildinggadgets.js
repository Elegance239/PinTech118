onEvent('recipes', event => {
    event.shaped('rftoolsutility:screen',
        [
            "AAA",
            "ABA",
            "CCC"
        ],
        {
            "A": {
                "item": "thermal:obsidian_glass"
            },
            "B": {
                "item": "rftoolsbase:machine_base"
            },
            "C": {
                "item": "thermal:steel_ingot"
            }
        },

    )

    event.shaped('buildinggadgets:gadget_building',
        [
            "ABA",
            "CDC",
            "ABA"
        ],
        {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "create:electron_tube"
            },
            "C": {
                "item": "minecraft:diamond"
            },
            "D": {
                "item": "rftoolsutility:screen"
            }
        },
    )

    event.shaped('buildinggadgets:gadget_exchanging',
        [
            "ABA",
            "CDC",
            "ABA"
        ],
        {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "minecraft:diamond"
            },
            "C": {
                "item": "create:electron_tube"
            },
            "D": {
                "item": "rftoolsutility:screen"
            }
        },
    )

    event.shaped('buildinggadgets:gadget_copy_paste',
        [
            "ABA",
            "CDC",
            "ABA"
        ],
        {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "create:electron_tube"
            },
            "C": {
                "item": "minecraft:emerald"
            },
            "D": {
                "item": "rftoolsutility:screen"
            }
        },

    )

    event.shaped('buildinggadgets:gadget_destruction',
        [
            "ABA",
            "CDC",
            "ABA"
        ],
        {
            "A": {
                "item": "minecraft:iron_ingot"
            },
            "B": {
                "item": "refinedstorage:destruction_core"
            },
            "C": {
                "item": "refinedstorage:construction_core"
            },
            "D": {
                "item": "rftoolsutility:screen"
            }
        },

    )
})