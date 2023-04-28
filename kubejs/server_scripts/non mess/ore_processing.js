onEvent('recipes', event => {
    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            { item: 'thermal:raw_lead', count:1}
        ],
        results: [
            { item: 'kubejs:processed_raw_lead', count:1},
        ],
        energy: 3200
    })

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            { item: 'thermal:raw_nickel', count:1}
        ],
        results: [
            { item: 'kubejs:processed_raw_nickel', count:1},
        ],
        energy: 3200
    })

    /*event.custom({
        type: 'thermal:smelter',
        ingredients: [
            { item: 'create:raw_zinc', count:1}
        ],
        results: [
            { item: 'kubejs:processed_raw_zinc', count:1},
        ],
        energy: 3200
    })*/

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            { item: 'thermal:raw_silver', count:1}
        ],
        results: [
            { item: 'kubejs:processed_raw_silver', count:1},
        ],
        energy: 3200
    })

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            { item: 'thermal:raw_tin', count:1}
        ],
        results: [
            { item: 'kubejs:processed_raw_tin', count:1},
        ],
        energy: 3200
    })
})
