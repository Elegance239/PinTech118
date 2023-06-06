onEvent('recipes', event => {
    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('minecraft:obsidian').toJson(),
        ],
        results: [
            Item.of('minecraft:obsidian').toJson(),
            Item.of('minecraft:obsidian').withChance(0.5),
        ],
        id: 'create:crushing/obsidian'
    })

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('createchromaticreturn:chromatic_compound').toJson(),
        ],
        results: [
            Item.of('kubejs:chromatic_dust').toJson(),
        ],
        id: 'create:crushing/chromatic_compound'
    })

    event.custom({
        type: 'create:crushing',
        ingredients: [
            Ingredient.of('kubejs:gold_combine').toJson(),
        ],
        results: [
            {item: 'create:crushed_gold_ore', count: 2},
            Item.of('create:crushed_gold_ore').withChance(0.25),
            Item.of('create:experience_nugget').withChance(0.75)
        ],
        id: 'create:crushing/gold_combine'
    })
})