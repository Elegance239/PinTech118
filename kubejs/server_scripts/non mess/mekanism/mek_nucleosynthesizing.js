
onEvent('recipes', event => {
    event.custom(
        {
            "type": "mekanism:nucleosynthesizing",
            "duration": 200,
            "gasInput": { "amount": 30, "gas": "mekanism:antimatter" },
            "itemInput": { "ingredient": { "item": "mekanism:elite_control_circuit" }},
            "output": { "item": "mekanism:ultimate_control_circuit" }
        }
    )

    function nucleosynthesizing(duration, amount, item, output) {
        event.custom(
            {
                "type": "mekanism:nucleosynthesizing",
                "duration": duration,
                "gasInput": { "amount": amount, "gas": "mekanism:antimatter"},
                "itemInput": { "ingredient": { "item": item }},
                "output": { "item": output} 
            }
        )
    }
    nucleosynthesizing(50, 3, 'farmersdelight:milk_bottle', 'minecraft:dragon_breath')
    nucleosynthesizing(50, 10, 'mekanism:alloy_reinforced', 'mekanism:alloy_atomic')
})
