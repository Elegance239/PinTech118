// priority: 0

onEvent('item.registry', event => {
	event.create('expansion_card').texture("kubejs:item/expansion_card").rarity('epic').tooltip("Huh? What's this?")
	event.create('fragile_heart').rarity('rare').tooltip('Handle with Care')
	event.create('chaos_mechanism').rarity('epic').texture("kubejs:item/chaos_mechanism")
	event.create('core_mechanism').rarity('uncommon').texture("kubejs:item/core_mechanism")
	event.create('precarious_mechanism').texture("kubejs:item/precarious_mechanism")
	event.create('transcendent_mechanism').rarity('rare').texture("kubejs:item/transcendent_mechanism")
	event.create('void_mechanism').rarity('rare').texture("kubejs:item/void_mechanism")
	event.create('inferno_ingot').texture("kubejs:item/inferno_ingot").rarity('uncommon')
	event.create('void_ingot').texture("kubejs:item/void_ingot").rarity('rare')
	event.create('coruscating_ingot_1').texture("kubejs:item/coruscating_ingot").rarity('rare')
	event.create('coruscating_ingot_2').texture("kubejs:item/coruscating_ingot").rarity('rare')
	event.create('coruscating_ingot_3').texture("kubejs:item/coruscating_ingot").rarity('rare')
	event.create('hellfire_crystal').displayName('Crystal of Hellfire').rarity('uncommon')
	event.create('oblivion_crystal').displayName('Crystal of Oblivion').rarity('rare')
	event.create('iridescence_crystal').displayName('Crystal of Iridescence').rarity('rare')
	event.create('hellfire_blend').rarity('uncommon')
	event.create('inferno_ingot_base').rarity('uncommon')
	event.create('void_ingot_base').rarity('rare')
	event.create('oblivion_blend').rarity('rare')
	event.create('ender_air_bottle').tooltip('How to Obtain?????')
	event.create('unpurified_ingot').displayName('Unpurified Ingot').rarity('rare')
	event.create('purity_ingot').displayName('Ingot of the Physic of Purity').rarity('epic')
	event.create('purity_blend').displayName('Blend of Purity')
	event.create('pure_crystal')
	
	event.create('laputa_shard').displayName('Vivid Memory: Shard of Laputa').tooltip('This shard has lost its former glory, but it used to lift the ground within a radius of 41 blocks to the sky.')
})

onEvent('mekanism.gas.registry', event => {
	event.create("oblivion_gas").color(0x19151f)
	event.create("pure_gas").color(0xFFFFFF)
})

onEvent('mekanism.slurry.registry', event => {
	event.create("pure", "clean").color(0xFFFFFF)
})


onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('fan').displayName('Vivid Memory: Overused Fan')
	.textureAll('kubejs:item/fan_side')
	.texture('north', 'kubejs:item/fan_casing')

	event.create('spatial_pylon').displayName('Vivid Memory: Spatial Pylon')
	.textureAll('kubejs:item/spatial_pylon')
})

onEvent('fluid.registry', event => {
	event.create('liquid_purity')
    .thinTexture(0xFFFFFF)
    .bucketColor(0xFFFFFF)
    .displayName('Liquid Purity')
  	.luminosity(0)

	event.create('murky_water')
	.thickTexture(0x242929)
	.thickTexture(0x242929)
	.displayName('Vivid Memory: Murky Water')
	.luminosity(0)

})
