onEvent('recipes', event => {
    event.shapeless('kubejs:silica_dust', ['3x #quark:shards', '#forge:dusts/quartz']) 
	event.shapeless('pneumaticcraft:assembly_io_unit_import', ['pneumaticcraft:assembly_io_unit_export']) 
    event.shapeless('pneumaticcraft:assembly_io_unit_export', ['pneumaticcraft:assembly_io_unit_import']) 
    event.shapeless('kubejs:unassembled_laser_matrix', ['6x industrialforegoing:laser_lens0', 'mekanismgenerators:reactor_glass'])
    event.shapeless('minecraft:gravel', ['9x kubejs:slag_powder']) 
    event.shapeless('kubejs:enderium_rod_bundle', ['4x kubejs:enderium_rod'])
    event.shapeless('24x kubejs:accelerator_frame', ['3x kubejs:compressed_iron_plate', 'kubejs:modular_machine_framework']) 
    event.shapeless('kubejs:phosphor_blend',['#forge:dusts/uranium','kubejs:silica_dust', '3x #forge:dusts/zinc',  '2x #forge:dusts/sulfur'])
    event.shapeless('kubejs:superalloy_plate_bundle', '3x thermal_extra:polarium_plate')
    event.shapeless('kubejs:vukaium_plate_bundle', '3x thermal_extra:vukaium_plate')
    event.shapeless('thermal:dynamo_magmatic', ['thermal:dynamo_stirling','thermal:invar_gear'])
    event.shapeless('thermal:dynamo_gourmand', ['thermal:dynamo_stirling','minecraft:cake'])
    event.shapeless('thermal:dynamo_lapidary', ['thermal:dynamo_stirling','minecraft:amethyst_block'])
    event.shapeless('thermal:dynamo_numismatic', ['thermal:dynamo_stirling','minecraft:ender_eye'])
    event.shapeless('thermal:dynamo_compression', ['thermal:dynamo_stirling','pneumaticcraft:small_tank'])
    event.shapeless('mekanismgenerators:heat_generator', ['immersiveengineering:thermoelectric_generator','pneumaticcraft:small_tank'])
    event.shapeless('mekanism:upgrade_speed', ['kubejs:upgrade_base','thermal:lumium_plate'])
    event.shapeless('mekanism:upgrade_energy', ['kubejs:upgrade_base','thermal:rf_coil'])
    event.shapeless('mekanism:upgrade_gas', ['kubejs:upgrade_base','kubejs:composite_mechanical_component'])
    event.shapeless('mm:item_output_port', 'mm:item_input_port')
    event.shapeless('mm:item_input_port', 'mm:item_output_port')
    event.shapeless('mm:fluid_output_port', 'mm:fluid_input_port')
    event.shapeless('mm:fluid_input_port', 'mm:fluid_output_port')
    event.shapeless('kubejs:mesh', '9x minecraft:string')
})