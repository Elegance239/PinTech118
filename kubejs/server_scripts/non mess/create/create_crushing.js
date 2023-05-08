onEvent('recipes', event => {
    event.recipes.createCrushing(
        ['minecraft:obsidian', Item.of('minecraft:obsidian').withChance(0.5)],
        'minecraft:obsidian'

    ).id('create:crushing/obsidian')

    event.recipes.createCrushing(
        'kubejs:chromatic_dust',
        'createchromaticreturn:chromatic_compound',
    ).id('create:crushing/chromatic_compound')

    event.recipes.createCrushing(
        [Item.of('2x create:crushed_gold_ore'), Item.of('create:crushed_gold_ore').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75)],
        'kubejs:gold_combine'
    ).id('create:crushing/gold_combine')
})