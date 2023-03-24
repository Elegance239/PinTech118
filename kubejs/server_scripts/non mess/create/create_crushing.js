onEvent('recipes', event => {
    event.recipes.createCrushing(
        ['minecraft:obsidian', Item.of('minecraft:obsidian').withChance(0.5)],
        'minecraft:obsidian'

    ).id('create:crushing/obsidian')
})