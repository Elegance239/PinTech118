onEvent('recipes', event => {
    // Change recipes here


    event.custom({

        "type": "immersiveengineering:crusher",
        "energy": 12800,
        "input": { "item": "minecraft:pointed_dripstone" },
        "result": { "count": 10, "item": "kubejs:ground_dripstone" },
        "secondaries": []

    })
    event.custom({

        "type": "immersiveengineering:crusher",
        "energy": 6400,
        "input": { "item": "minecraft:end_stone" },
        "result": { "count": 1, "item": "kubejs:radioactive_ender_regolith" },
        "secondaries": []

    })


})

