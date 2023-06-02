onEvent('recipes', event => {
    event.custom(
        { "type": "mekanism:crystallizing",
        "chemicalType": "gas",
        "input": { "amount": 10, "gas": "kubejs:uranium" },
        "output": { "item": "kubejs:raw_uranium_mote" } }
    )
})