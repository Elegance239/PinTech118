onEvent('recipes', event => {
    event.custom(
        { "type": "mekanism:separating",
         "input": { "amount": 2, "fluid": "kubejs:alumina_solution" },
          "leftGasOutput": { "gas": "kubejs:gaseous_aluminum", "amount": 1 },
           "rightGasOutput": { "gas": "kubejs:gaseous_impure_alumina", "amount": 1 } }
    )
})