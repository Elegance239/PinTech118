onEvent('recipes', event => {
    event.custom(
        {
            "type": "mekanism:combining",
            "extraInput": { "ingredient": { "item": "minecraft:deepslate" } },
            "mainInput": {"amount": 18, "ingredient": { "item": "minecraft:gold_nugget" } },
            "output": { "item": "kubejs:gold_combine" }
        })
})