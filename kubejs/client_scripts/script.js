// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('client.generate_assets', event => {
    const rename = (item, newName) => event.addLang(Item.of(item).item.getDescriptionId(), newName)
    const renamefluid = (fluid, newName) => event.addLang(Fluid.of(fluid).fluid.getDescriptionId(), newName)
  
    // rename mutton to BAAAAAAA
    rename('immersiveengineering:steel_scaffolding_wooden_top', "Wooden Top Steel Scaffolding")
    // rename all items with e in their path to EEEEEEEEEEEE
    // Ingredient.of(/:.*e/).stacks.forEach(item => rename(item, "EEEEEEEEEEEE"))
    rename('create:chromatic_compound', 'Chromatic Compound Base')
    rename('thermal_extra:polarium_ingot', 'Nickel-Based Superalloy')
    rename('thermal_extra:polarium_plate', 'Superalloy Plate')
    rename('refinedstorage:crafter', 'Crafter Tier 1')
    rename('extrastorage:iron_crafter', 'Crafter Tier 2')
    rename('extrastorage:gold_crafter', 'Crafter Tier 3')
    rename('extrastorage:diamond_crafter', 'Crafter Tier 4')
    rename('extrastorage:netherite_crafter', 'Crafter Tier 5')
  })
