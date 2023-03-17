onEvent('recipes', event => {
    // Change recipes here


    event.custom({

        "type": "immersiveengineering:crusher",
        "energy": 1600,
        "input": { "item": "minecraft:pointed_dripstone" },
        "result": { "count": 1, "item": "kubejs:ground_dripstone" },
        "secondaries": []

    })


})