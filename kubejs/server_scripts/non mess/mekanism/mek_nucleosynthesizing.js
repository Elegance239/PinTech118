
onEvent('recipes', event => {
    event.custom(
        {
            "type": "mekanism:nucleosynthesizing",
            "duration": 1000,
            "gasInput": { "amount": 15, "gas": "mekanism:antimatter" },
            "itemInput": { "ingredient": { "item": "mekanism:elite_control_circuit" }},
            "output": { "item": "mekanism:ultimate_control_circuit" }
        }
    )
})
