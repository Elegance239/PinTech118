onEvent('jei.add.items', event => {
  event.add(Item.of('thermal:laser_diode'))
  event.add(Item.of('thermal:ruby'))
  event.add(Item.of('thermal:sapphire'))
  event.add(Item.of('thermal_extra:vukaium_plate_3'))
  event.add(Item.of('minecraft:dragon_egg'))
})

onEvent('jei.hide.items', event => {
  event.hide(Item.of('mm:osmium_drill_laser_input_port'))
  //event.hide(Item.of('mekanism:structural_glass'))
  const tiers = ['1','2','3','4','5']
  tiers.forEach(tier => {
    event.hide(Item.of('simplyjetpacks:jetpack_vanilla' + tier))
    event.hide(Item.of('simplyjetpacks:jetpack_vanilla' + tier + "_armored"))
    event.hide(Item.of('simplyjetpacks:jetpack_te' + tier))
    event.hide(Item.of('simplyjetpacks:jetpack_te' + tier + "_armored"))
    event.hide(Item.of('simplyjetpacks:jetpack_ie' + tier))
    event.hide(Item.of('simplyjetpacks:jetpack_ie' + tier + "_armored"))
    event.hide(Item.of('simplyjetpacks:armorplating_te' + tier))
    event.hide(Item.of('simplyjetpacks:armorplating_ie' + tier))
    event.hide(Item.of('simplyjetpacks:thruster_vanilla' + tier))
    event.hide(Item.of('simplyjetpacks:thruster_vanilla' + tier + "_armored"))
    event.hide(Item.of('simplyjetpacks:thruster_te' + tier))
    event.hide(Item.of('simplyjetpacks:thruster_te' + tier + "_armored"))
    event.hide(Item.of('simplyjetpacks:thruster_ie' + tier))
    event.hide(Item.of('simplyjetpacks:thruster_ie' + tier + "_armored"))
  })
  event.hide(Item.of('simplyjetpacks:jetpack_te5_enderium'))
  event.hide(Item.of('simplyjetpacks:armorplating_te5_enderium'))
  event.hide(Item.of('kubejs:blender_model'))
  event.hide(Item.of('kubejs:formulaic_synthesizer_model'))
  event.hide(Item.of('mm:osmium_drill_laser_input_port'))
  event.hide(Item.of('mm:blender_controller'))
})