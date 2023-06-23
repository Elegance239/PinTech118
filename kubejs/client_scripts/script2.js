// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

  onEvent('client.generate_assets', event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
    const renamefluid = (fluid, newName) => event.addLang(Fluid.of(fluid).fluid.getDescriptionId(), newName)
  
    rename(Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Selected:"ARTIFACT",Special:1b}'), 'Vivid Memory: Nuke')
  })
