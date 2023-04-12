onEvent('recipes', event => {
    event.recipes.createCrushing(
        ['minecraft:obsidian', Item.of('minecraft:obsidian').withChance(0.5)],
        'minecraft:obsidian'

    ).id('create:crushing/obsidian')

    event.recipes.createCrushing(
        'kubejs:chromatic_dust',
        'createchromaticreturn:chromatic_compound',
    ).id('create:crushing/chromatic_compound')
})