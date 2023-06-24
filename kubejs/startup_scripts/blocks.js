// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('block.registry', event => {

	event.create('reinforced_casing').material('metal').hardness(2.0).displayName('Reinforced Casing')
	event.create('engineering_block_frame').material('metal').hardness(2.0).displayName('Engineering Block Frame')
	event.create('comp_machinecasing').material('metal').hardness(2.0).displayName('Compacted Machine Casing')
	event.create('storage_bundle')
    .textureAll('kubejs:block/storage_bundle_side')
    .texture('up', 'kubejs:block/storage_bundle_top')
	.texture('down', 'kubejs:block/storage_bundle_bottom')
	event.create('unassembled_laser_matrix').material('glass')
    .textureAll('kubejs:block/unassembled_laser_matrix')
	event.create('modular_machine_framework').material('metal').displayName('Modular Machine Framework')
    .textureAll('kubejs:block/modular_machine_framework')

	event.create('mixture_basin').material('metal').displayName('Basin with Volatile Chromatic Mixture')
	.textureAll('kubejs:block/mixture_basin_side')
	.texture('up', 'kubejs:block/mixture_basin_top')
	.texture('down', 'kubejs:block/mixture_basin_bottom')

	event.create('accelerator_magnet').material('metal').hardness(2.0).lightLevel(1).displayName('Superconducting Magnet Block') //temp, please change this sounds terrible
	event.create('particle_collector').material('metal').hardness(2.0).displayName('Particle Collector')
	event.create('advanced_modular_framework').material('metal').hardness(2.0).displayName('Advanced Modular Framework')
	event.create('accelerator_frame').material('metal').hardness(2.0).displayName('Accelerator Frame')

	event.create('dissolved_machine_frame').displayName('Dissolved Machine Frame')
	.textureAll('kubejs:item/machine_frame/side')
	.texture('up', 'kubejs:item/machine_frame/dissolved_top')
	.texture('down', 'kubejs:item/machine_frame/bottom')
	.material('metal')

	event.create('core_machine_frame').displayName('Core-Inserted Machine Frame')
	.textureAll('kubejs:item/machine_frame/side')
	.texture('up', 'kubejs:item/machine_frame/core_top')
	.texture('down', 'kubejs:item/machine_frame/bottom')
	.material('metal')

	event.create('filled_machine_frame').displayName('Filled Machine Frame')
	.textureAll('kubejs:item/machine_frame/side')
	.texture('up', 'kubejs:item/machine_frame/filled_top')
	.texture('down', 'kubejs:item/machine_frame/bottom')
	.material('metal')

	event.create('cut_machine_frame').displayName('Cut Machine Frame')
	.textureAll('kubejs:item/machine_frame/crooked_side')
	.texture('up', 'kubejs:item/machine_frame/filled_top')
	.texture('down', 'kubejs:item/machine_frame/bottom')
	.material('metal')

	event.create('plated_machine_frame').displayName('Plated Machine Frame')
	.textureAll('kubejs:item/machine_frame/supreme_side')
	.texture('up', 'kubejs:item/machine_frame/unpressurized_top')
	.texture('down', 'kubejs:item/machine_frame/bottom')
	.material('metal')
	
	event.create('pressurized_machine_frame').displayName('Pressurized Machine Frame')
	.textureAll('kubejs:item/machine_frame/supreme_side')
	.texture('up', 'kubejs:item/machine_frame/supreme_top')
	.texture('down', 'kubejs:item/machine_frame/supreme_bottom')
	.material('metal')

	event.create('gold_combine').displayName('Combined Gold Deposit')
	.textureAll('kubejs:item/gold_combine')
	.material('metal')

	event.create('basic_versatile_frame').material('metal').hardness(2.0).displayName('Basic Versatile Frame')

	event.create('advanced_versatile_frame').material('metal').hardness(2.0).displayName('Advanced Versatile Frame')

	event.create('blender_model').displayName('Blender Model')
	.textureAll('kubejs:item/custom_machine_side')
	.texture('north', 'kubejs:item/blender')

	event.create('formulaic_synthesizer_model').displayName('Formulaic Synthesizer Model')
	.textureAll('kubejs:item/custom_machine_side')
	.texture('north', 'kubejs:item/formulaic_synthesizer')

	event.create('gold_trophy').displayName('Cool X-Ray Trophy')
})


