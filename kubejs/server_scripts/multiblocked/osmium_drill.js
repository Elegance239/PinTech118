onEvent('recipes', event => {

    event.recipes.multiblocked.multiblock("pintech_osmium_drill_2")
        .inputItem('minecraft:raw_iron')
        .outputItem('kubejs:processed_raw_osmium')
        .setPerTick(true)
        .inputFE(150)
        .duration(1)
    
})