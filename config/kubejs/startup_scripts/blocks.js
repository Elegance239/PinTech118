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
})


