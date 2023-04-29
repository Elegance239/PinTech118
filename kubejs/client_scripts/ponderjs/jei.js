onEvent('jei.add.items', event => {
  event.add(Item.of('thermal:laser_diode'))
  event.add(Item.of('thermal:ruby'))
  event.add(Item.of('thermal:sapphire'))

})

onEvent('jei.hide.items', event => {
  event.hide(Item.of('mm:osmium_drill_controller'))
  event.hide(Item.of('mm:osmium_drill_laser_input_port'))
})