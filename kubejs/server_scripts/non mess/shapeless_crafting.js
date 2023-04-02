onEvent('recipes', event => {
    event.shapeless('kubejs:silica_dust', ['3x #quark:shards', '#forge:dusts/quartz']) 
	event.shapeless('pneumaticcraft:assembly_io_unit_import', ['pneumaticcraft:assembly_io_unit_export']) 
    event.shapeless('pneumaticcraft:assembly_io_unit_export', ['pneumaticcraft:assembly_io_unit_import']) 
    event.shapeless('kubejs:unassembled_laser_matrix', ['6x industrialforegoing:laser_lens0', 'mekanismgenerators:reactor_glass'])
    event.shapeless('minecraft:gravel', ['9x kubejs:slag_powder']) 
    event.shapeless('kubejs:enderium_rod_bundle', ['4x kubejs:enderium_rod'])
    event.shapeless('24x kubejs:accelerator_frame', ['3x kubejs:compressed_iron_plate', 'kubejs:modular_machine_framework']) 
})