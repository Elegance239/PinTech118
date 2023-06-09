
onEvent('recipes', event => {
    event.custom({
        "type": "mekanism:compressing", 
        "chemicalInput": { "amount": 1, "gas": "mekanism:osmium" }, 
        "itemInput": { "ingredient": { item:'kubejs:porous_enderium_dust' } },
        "output": { "item": "thermal:enderium_ingot" }
    })

    event.custom({
        "type": "mekanism:compressing", 
        "chemicalInput": { "amount": 1, "gas": "mekanism:osmium" }, 
        "itemInput": { "ingredient": { item:'kubejs:neutronium' } },
        "output": { "item": "kubejs:neutronium_plate" }
    })

    event.custom({
        "type": "mekanism:compressing", 
        "chemicalInput": { "amount": 1, "gas": "mekanism:osmium" }, 
        "itemInput": { "ingredient": { item:'mekanism:dust_refined_obsidian' } },
        "output": { "item": "mekanism:ingot_refined_obsidian" }
    })
})

