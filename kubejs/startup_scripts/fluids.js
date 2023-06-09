// priority: 0
onEvent('fluid.registry', event => {
	event.create('redstone_slag_slurry')
    .thickTexture(0x9E3728)
    .bucketColor(0x9E3728)
    .displayName('Redstone Slag Slurry')
  	.luminosity(0)


	event.create('silica_rich_water')
    .thinTexture(0x6A87A3)
    .bucketColor(0x6A87A3)
    .displayName('Silica-Rich Water')


	event.create('piss')
    .thinTexture(0xEECA10)
    .bucketColor(0xEECA10)
    .displayName('Animal Excretions')
  	.luminosity(0)

	event.create('waste')
    .thinTexture(0x272020)
    .bucketColor(0x272020)
    .displayName('Waste')
  	.luminosity(0)


/*
	event.create('solder')
    .thickTexture(0xCCCCCC)
    .bucketColor(0xCCCCCC)
    .displayName('Solder')
  	.luminosity(0)

	event.create('molten_lead')
    .thickTexture(0x292433)
    .bucketColor(0x292433)
    .displayName('Molten Lead')
  	.luminosity(0)

*/
	event.create('hydrogen_cyanide')
    .thinTexture(0xE3FEFD)
    .bucketColor(0xE3FEFD)
    .displayName('Hydrogen Cyanide')
  	.luminosity(0)

	event.create('liquid_calcium_cyanide')
    .thinTexture(0xEAEBEB)
    .bucketColor(0xEAEBEB)
    .displayName('Liquid Calcium Cyanide')
  	.luminosity(0)

	event.create('liquid_calcium_dicyanoaurate')
    .thinTexture(0xE3FEFD)
    .bucketColor(0xE3FEFD)
    .displayName('Liquid Calcium Dicyanoaurate')
  	.luminosity(0)

	event.create('liquid_sodium_dicyanoaurate')
    .thinTexture(0xE4E4CE)
    .bucketColor(0xE4E4CE)
    .displayName('Liquid Sodium Dicyanoaurate')
  	.luminosity(0)

	event.create('liquid_sodium_cyanide')
    .thinTexture(0xE4E4CE)
    .bucketColor(0xE4E4CE)
    .displayName('Liquid Sodium Cyanide')
  	.luminosity(0)

	event.create('liquid_nitrogen')
    .thinTexture(0x8ABBDB)
    .bucketColor(0x8ABBDB)
    .displayName('Liquid Nitrogen')
  	.luminosity(0)
	.temperature(70)

	event.create('cryogenic_coolant')
    .thinTexture(0xA8DFE3)
    .bucketColor(0xA8DFE3)
    .displayName('Cryogenic Coolant')
  	.luminosity(0)
	.temperature(10)

	event.create('createchromaticreturn:chromatic_mixture')
    .stillTexture('kubejs:block/chromaticmixture')
    .bucketColor(0x5D2363)
    .displayName('Chromatic Mixture')
  	.luminosity(1)
    .viscosity(2000)
    .rarity('rare')

	event.create('molten_enderium_alloy_base')
    .thickTexture(0x34325C)
    .bucketColor(0x34325C)
    .displayName('Molten Enderium Alloy Base')
  	.luminosity(0)

	event.create('molten_compressed_iron')
    .thickTexture(0x515253)
    .bucketColor(0x515253)
    .displayName('Molten Compressed Iron')
  	.luminosity(0)

	event.create('alumina_solution')
    .thinTexture(0xCCCCCC)
    .bucketColor(0xCCCCCC)
    .displayName('Alumina Solution')
  	.luminosity(0)

	event.create('impure_alumina_solution')
    .thinTexture(0xada59c)
    .bucketColor(0xada59c)
    .displayName('Impure Alumina Solution')
  	.luminosity(0)

  event.create('quasi_antientropic_fuel')
    .thinTexture(0x7a36f7)
    .bucketColor(0x7a36f7)
    .displayName('Quasi-Antientropic Fuel')
  	.luminosity(0)
})


/* onEvent('fluid.registry', event => {
	event.create('radiant_gas')
    .stillTexture('kubejs:block/radiant_gas')
    .gaseous()
}) 
*/