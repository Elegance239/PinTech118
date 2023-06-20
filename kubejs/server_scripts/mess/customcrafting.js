
let IE = (id) => 'immersiveengineering:'+id

onEvent('recipes', event => {
	event.shaped('minecraft:furnace', [
		'CCC',
		'C C',
		'CCC'
	], {
		C:'minecraft:cobblestone',

	})
	event.shaped('create:electron_tube', [
		' P ',
		' S ',
		' B '
	], {
		P:'create:polished_rose_quartz',
		S:'thermal:silver_plate',
		B:'#forge:plates/brass'
	})
	event.shaped('create:mechanical_press', [
		' S ',
		'ASA',
		'IPI'
	], {
		A:'create:andesite_casing',
		S:'create:shaft',
		I:'minecraft:iron_ingot',
		P:'minecraft:piston'
	})
	event.shaped('create:deployer', [
		'I I',
		'ASA',
		'IBI'
	], {
		A:'create:andesite_casing',
		S:'create:shaft',
		I:'#forge:plates/iron',
		B:'create:brass_hand',
	})
	event.shaped('create:mechanical_mixer', [
		' S ',
		'ACA',
		'IWI'
	], {
		A:'create:andesite_casing',
		S:'create:shaft',
		C:'create:cogwheel',
		W:'create:whisk',
		I:'#forge:plates/iron'
	})
	event.shaped('create:empty_blaze_burner', [
		' S ',
		'SNS',
		' S '
	], {
		S:'thermal:steel_plate',
		N:'minecraft:netherrack'
	})
	event.shaped('thermal:rf_coil', [
		' E ',
		'GSG',
		' E '
	], {
		G:'immersiveengineering:wirecoil_electrum',
		E:'thermal:electrum_plate',
		S:'thermal:redstone_servo'
	})
	event.shaped('thermal:machine_frame', [
		'SHS',
		'HBH',
		'SRS'
	], {
		H:'thermal:obsidian_glass',
		S:'thermal:steel_plate',
		B:'create:brass_casing',
		R:'thermal:redstone_servo',
	})
	event.shaped('thermal:redstone_servo', [
		' E ',
		' I ',
		' E '
	], {
		E:'create:electron_tube',
		I:'immersiveengineering:stick_iron'
	})
	event.shaped('create:steam_engine', [
		' S ',
		'BSB',
		'BCB'
	], {
		S:'immersiveengineering:stick_steel',
		B:'#forge:plates/brass',
		C:'create:copper_casing',
	})
	event.shaped('2x createaddition:capacitor', [
		' E ',
		'TGT',
		' G ',
	], {
		E:'immersiveengineering:wire_electrum',
		T:'thermal:tin_plate',
		G:'minecraft:glass',
	})
	event.shaped('mekanism:steel_casing', [
		'SSS',
		'EME',
		'SSS',
	], {
		E:'immersiveengineering:wirecoil_electrum',
		M:'thermal:machine_frame',
		S:'thermal:steel_plate',
	})
	event.shaped('create:mechanical_saw', [
		' P ',
		'PSP',
		' A ',
	], {
		A:'create:andesite_casing',
		P:'#forge:plates/iron',
		S:'thermal:saw_blade'
	})
	event.shapeless(
		Item.of(IE('blastbrick_reinforced')), 
		[
			'thermal:invar_plate',
			IE('blastbrick'),
			'thermal:invar_plate',
		]
	)
	event.shaped('thermal:machine_press', [
		'HPH',
		'LML',
		'LSL'
	], {
		H:'thermal:obsidian_glass',
		P:'create:mechanical_press',
		L:'thermal:lead_plate',
		M:'thermal:machine_frame',
		S:'thermal:redstone_servo',
	})
	event.shaped('thermal:machine_smelter', [
		'HBH',
		'SMS',
		'CRC'
	], {
		H:'thermal:obsidian_glass',
		B:'minecraft:blast_furnace',
		S:'thermal:steel_plate',
		M:'thermal:machine_frame',
		C:'createaddition:copper_spool',
		R:'immersiveengineering:stick_steel'
	})
	event.shaped('thermal:machine_pulverizer', [
		'HBH',
		'SMS',
		'CRC'
	], {
		H:'thermal:obsidian_glass',
		B:'minecraft:blast_furnace',
		S:'thermal:steel_plate',
		M:'thermal:machine_frame',
		C:'createaddition:copper_spool',
		R:'minecraft:iron_bars'
	})
	event.shaped('thermal:machine_furnace', [
		'HBH',
		'SMS',
		'CCC'
	], {
		H:'thermal:obsidian_glass',
		B:'minecraft:blast_furnace',
		S:'thermal:steel_plate',
		M:'thermal:machine_frame',
		C:'#forge:plates/copper',

	})
	event.shaped('thermal:machine_refinery', [
		'HBH',
		'SMS',
		'TRT'
	], {
		H:'thermal:obsidian_glass',
		T:'mekanism:basic_fluid_tank',
		B:'minecraft:blast_furnace',
		S:'thermal:steel_plate',
		M:'thermal:machine_frame',
		R:'thermal:redstone_servo'
	})
	event.shaped('mekanism:basic_fluid_tank', [
		'RIR',
		'H H',
		'RIR'
	], {
		R:'minecraft:redstone',
		I:'#forge:plates/iron',
		H:'thermal:obsidian_glass',
	})
	event.shaped('thermal:device_rock_gen', [
		'III',
		'IAI',
		'OOO'
	], {
		I:'#forge:plates/iron',
		A:'create:andesite_casing',
		O:'minecraft:obsidian'
	})
	event.shaped('industrialforegoing:machine_frame_simple', 
	[
		  "ABA",
		  "CDC",
		  "AEA"
	],
		{
		  "A": {
			"item": "thermal:tin_plate"
		  },
		  "B": {
			"item": "thermal:rf_coil"
		  },
		  "C": {
			"item": "thermal:upgrade_augment_1"
		  },
		  "D": {
			"item": "mekanism:steel_casing"
		  },
		  "E": {
			"item": "industrialforegoing:machine_frame_pity"
		  }
		},
	)
	event.shaped('2x industrialforegoing:machine_frame_simple', [
		'HAH',
		'SCS',
		'FPF',
	], {
		H:'kubejs:composite_mechanical_component',
		A:'mekanism:basic_control_circuit',
		S:'thermal:steel_gear',
		C:'mekanism:steel_casing',
		F:'thermal:rf_coil',
		P:'industrialforegoing:machine_frame_pity',
	})

	event.shaped('industrialforegoing:dissolution_chamber', [
		'SSS',
		'SMS',
		'SFS',
	], {
		S:'thermal:silver_plate',
		M:'industrialforegoing:machine_frame_simple',
		F:'thermal:machine_refinery'
	})

	event.shaped('thermal:machine_chiller', [
		'GTG',
		'IMI',
		'PIP',
	], {
		G:'thermal:obsidian_glass',
		T:'mekanism:basic_fluid_tank',
		I:'thermal:invar_plate',
		M:'thermal:machine_frame',
		P:'minecraft:packed_ice'
	})

	event.shaped('thermal:machine_crucible', [
		'GTG',
		'IMI',
		'IBI',
	], {
		G:'thermal:obsidian_glass',
		T:'mekanism:basic_fluid_tank',
		I:'thermal:invar_plate',
		B:'create:blaze_burner',
		M:'thermal:machine_frame'
	})
	event.shapeless(
		Item.of('mekanism:crafting_formula'), 
		[
			'#forge:plates/bronze',
			'create:electron_tube'
		]
	)
	event.shaped('mekanism:formulaic_assemblicator', [
		'ICI',
		'IMI',
		'IFI',
	], {
		M:'thermal:machine_frame',
		I:'#forge:plates/iron',
		C:'create:mechanical_crafter',
		F:'mekanism:crafting_formula'
	})

	event.shapeless('kubejs:plant_matter', ['4x #forge:sapling'])

	event.shaped('storagedrawers:compacting_drawers_3', [
		'CPC',
		'CBC',
		'CSC',
	], {
		P:'create:mechanical_press',
		B:'create:basin',
		C:'minecraft:cobblestone',
		S:'#forge:storage_blocks/steel',
	})

	event.shaped('storagedrawers:controller', [
		'CSC',
		'RMR',
		'CBC',
	], {
		R:'minecraft:comparator',
		S:'thermal:redstone_servo',
		C:'minecraft:cobblestone',
		B:'#forge:storage_blocks/steel',
		M:'thermal:machine_frame'
	})
	event.shaped('xnet:controller', [
		'SSS',
		'HMH',
		'RIR',
	], {
		R:'minecraft:repeater',
		S:'thermal:steel_plate',
		H:'thermal:obsidian_glass',
		I:'thermal:redstone_servo',
		M:'thermal:machine_frame'
	})
	event.shaped('mekanism:metallurgic_infuser', [
		'HCH',
		'RSR',
		'BFB',
	], {
		H:'thermal:obsidian_glass',
		F:'minecraft:blast_furnace',
		R:'minecraft:redstone',
		S:'mekanism:steel_casing',
		B:'createaddition:gold_rod',
		C:'thermal:rf_coil'
	})
	event.shaped('mekanism:enrichment_chamber', [
		'HFH',
		'ESE',
		'PGP',
	], {
		H:'thermal:obsidian_glass',
		F:'minecraft:blast_furnace',
		E:'mekanism:enriched_redstone',
		S:'mekanism:steel_casing',
		P:'thermal:electrum_plate',
		G:'thermal:steel_gear',
	})
	event.shapeless(
		{item: 'kubejs:enriched_diamond_nugget', count: 4},
		[
			Item.of('mekanism:enriched_diamond').toJson(),
		]
	)
	event.shapeless(
		Item.of('kubejs:silicon_wafer').toJson(),
		[
			Item.of('4x refinedstorage:silicon').toJson(),
		]
	)
	
	event.shaped('refinedstorage:controller', [
		'CLD',
		'BMB',
		'QAQ',
	], {
		C:'refinedstorage:construction_core',
		L:'immersiveengineering:logic_unit',
		D:'refinedstorage:destruction_core',
		B:'mekanism:basic_control_circuit',
		M:'refinedstorage:machine_casing',
		Q:'refinedstorage:quartz_enriched_iron_block',
		A:'refinedstorage:advanced_processor'
	})

	event.shaped('refinedstorage:grid', [
		'ICH',
		'QMH',
		'IDH',
	], {
		H:'thermal:obsidian_glass',
		I:'refinedstorage:improved_processor',
		C:'refinedstorage:construction_core',
		Q:'refinedstorage:quartz_enriched_iron',
		M:'refinedstorage:machine_casing',
		D:'refinedstorage:destruction_core',
	})
	
	event.shapeless(
		Item.of('refinedstorage:crafting_grid').toJson(),
		[
			Item.of('refinedstorage:grid').toJson(),
			Item.of('mekanism:formulaic_assemblicator').toJson(),
			Item.of('refinedstorage:advanced_processor').toJson(),
		]
	)

	event.shapeless(
		Item.of('refinedstorage:fluid_grid').toJson(),
		[
			Item.of('refinedstorage:grid').toJson(),
			Item.of('mekanism:basic_fluid_tank').toJson(),
			Item.of('refinedstorage:advanced_processor').toJson(),
		]
	)
	
	event.shaped('2x refinedstorage:crafter', [
		'QCQ',
		' F ',
		'QDQ',
	], {
		C:'refinedstorage:construction_core',
		Q:'refinedstorage:quartz_enriched_iron',
		F:'mekanism:formulaic_assemblicator',
		D:'refinedstorage:destruction_core',
	})

	event.shapeless('refinedstorage:construction_core', ['refinedstorage:improved_processor', '2x kubejs:aqueous_ingot'])

	event.shapeless('refinedstorage:destruction_core', ['refinedstorage:improved_processor', '2x createchromaticreturn:glowing_ingot'])
	
})

