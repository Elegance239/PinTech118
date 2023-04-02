
onEvent('recipes', event => {
    event.custom({
        "type": "mekanism:compressing", 
        "chemicalInput": { "amount": 1, "gas": "mekanism:osmium" }, 
        "itemInput": { "ingredient": { item:'kubejs:porous_enderium_dust' } },
        "output": { "item": "thermal:enderium_ingot" }
    })
})

