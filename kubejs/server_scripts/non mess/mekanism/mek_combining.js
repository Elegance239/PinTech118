onEvent('recipes', event => {
    event.custom(
        {
            "type": "mekanism:combining",
            "extraInput": { "ingredient": { "item": "minecraft:deepslate" } },
            "mainInput": {"amount": 18, "ingredient": { "item": "kubejs:gold_drop" } },
            "output": { "item": "kubejs:gold_combine" }
        })
})