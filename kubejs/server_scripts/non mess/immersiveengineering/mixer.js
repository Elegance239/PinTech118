
onEvent('recipes', event => {
    // Change recipes here


    event.custom({
        "type": "immersiveengineering:mixer",
        "energy": 3200,
        "fluid": {
            "amount": 90, "tag": "tconstruct:molten_refined_obsidian"
        },
        "inputs": [{
            "base_ingredient": { "tag": "forge:dusts/lead" }, "count": 3
        },
        { "item": "minecraft:chorus_fruit", count:10 }],
        "result": {
            "amount": 90, "fluid": "kubejs:molten_enderium_alloy_base"
        }
    })


})

