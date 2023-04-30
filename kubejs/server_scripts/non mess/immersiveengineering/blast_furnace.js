

onEvent('recipes', event => {
    // Change recipes here


    event.custom({
        "type": "immersiveengineering:blast_furnace",
        "result": { "item": "thermal:raw_silver" },
        "input": { "item": "kubejs:crushed_argentite" },
        "slag": { "item": "thermal:slag" },
        "time": 1200
    })


})

