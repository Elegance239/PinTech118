// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('client.generate_assets', event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
  
    // rename mutton to BAAAAAAA
    rename('immersiveengineering:steel_scaffolding_wooden_top', "Wooden Top Steel Scaffolding")
    // rename all items with e in their path to EEEEEEEEEEEE
    // Ingredient.of(/:.*e/).stacks.forEach(item => rename(item, "EEEEEEEEEEEE"))
    rename('create:chromatic_compound', 'Chromatic Compound Base')
  })
