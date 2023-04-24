onEvent('recipes', event => {
    event.shaped('trashcans:item_trash_can',
        [
            "CCC",
            "ABA",
            "AAA"
        ],
        {
            "A": {
                "tag": "forge:cobblestone"
            },
            "B": {
                "item": "ironchest:obsidian_chest"
            },
            "C": {
                "tag": "forge:stone"
            }
        },
    )

    event.shaped('trashcans:liquid_trash_can',
        [
            "AAA",
            "BCB",
            "BBB"
        ],
        {
            "A": {
                "tag": "forge:stone"
            },
            "B": {
                "tag": "forge:cobblestone"
            },
            "C": {
                "item": "mekanism:basic_fluid_tank"
            }
        },
    )

    event.shaped('trashcans:energy_trash_can',
        [
            "AAA",
            "BCB",
            "BBB"
        ],
        {
            "A": {
                "tag": "forge:stone"
            },
            "B": {
                "tag": "forge:cobblestone"
            },
            "C": {
                "item": "mekanism:basic_energy_cube"
            }
        },
    )
})