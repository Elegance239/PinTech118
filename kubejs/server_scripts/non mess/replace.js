onEvent('recipes', event => {

    event.replaceInput({id:'thermal:saw_blade'}, 'minecraft:copper_ingot', 'thermal:steel_block')
	event.replaceInput({id:'create:crafting/kinetics/mechanical_saw'}, 'minecraft:iron_ingot', 'thermal:saw_blade')
	//event.replaceInput({}, 'industrialforegoing:plastic', 'pneumaticcraft:plastic')
	event.replaceInput({id:'refinedstorage:raw_basic_processor'}, 'minecraft:iron_ingot', 'thermal:steel_nugget')
	event.replaceInput({id:'refinedstorage:raw_improved_processor'}, 'minecraft:gold_ingot', 'thermal:electrum_nugget')
	event.replaceInput({id:'refinedstorage:raw_advanced_processor'}, 'minecraft:diamond', 'kubejs:enriched_diamond_nugget')
	event.replaceInput({id:'extendedcrafting:advanced_table'}, 'extendedcrafting:basic_table', 'minecraft:crafting_table')
    event.replaceInput({id:'sophisticatedbackpacks:upgrade_base'}, 'minecraft:string', 'immersiveengineering:hemp_fabric')
    event.replaceInput({id:'sophisticatedbackpacks:upgrade_base'}, 'minecraft:iron_ingot', 'thermal:steel_ingot')

})