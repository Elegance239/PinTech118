onEvent('item.tags', event => {
    
    event.add('forge:rods/compressed_iron', 'kubejs:compressed_iron_rod')
    event.add('forge:rods/all_metal', 'kubejs:compressed_iron_rod')
    event.add('forge:rods', 'kubejs:compressed_iron_rod')

    event.add('forge:plates/compressed_iron', 'kubejs:compressed_iron_plate')
    event.add('forge:plates', 'kubejs:compressed_iron_plate')



    event.add('forge:raw_materials/lead', 'kubejs:processed_raw_lead')
    event.remove('forge:raw_materials/lead', 'thermal:raw_lead')

    event.add('forge:raw_materials/nickel', 'kubejs:processed_raw_nickel')
    event.remove('forge:raw_materials/nickel', 'thermal:raw_nickel')

    event.add('forge:raw_materials/silver', 'kubejs:processed_raw_silver')
    event.remove('forge:raw_materials/silver', 'thermal:raw_silver')

    /*event.add('forge:raw_materials/zinc', 'kubejs:processed_raw_zinc')
    event.add('forge:raw_materials', 'kubejs:processed_raw_zinc')
    event.remove('forge:raw_materials/zinc', 'create:raw_zinc')
    event.remove('forge:raw_materials', 'create:raw_zinc')*/

    event.add('forge:raw_materials/tin', 'kubejs:processed_raw_tin')
    event.remove('forge:raw_materials/tin', 'thermal:raw_tin')

    event.add('forge:raw_materials/aluminum', 'kubejs:processed_raw_aluminum')
    event.remove('forge:raw_materials/aluminum', 'immersiveengineering:raw_aluminum')

    event.add('forge:raw_materials/uranium', 'kubejs:processed_raw_uranium')
    event.remove('forge:raw_materials/uranium', 'immersiveengineering:raw_uranium')

    event.add('forge:raw_materials/osmium', 'kubejs:processed_raw_osmium')
    event.remove('forge:raw_materials/osmium', 'mekanism:raw_osmium')

    event.add('thermal:crafting/dies', 'immersiveengineering:mold_rod')

    event.add('kubejs:blueprints', 'kubejs:graphene') //this is a test
  })

  onEvent('fluid.tags', event =>{
    event.add('forge:nitrogen','kubejs:liquid_nitrogen')
  })