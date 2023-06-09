// priority: 0

onEvent('recipes', event => {
event.remove({type:'minecraft:smelting', output:'#forge:ingots'})
event.remove({type:'minecraft:blasting', output:'#forge:ingots'})
event.remove({output:'create:electron_tube'})
event.remove({output:'create:mechanical_press'})
event.remove({output:'create:deployer'})
event.remove({output:'create:mechanical_mixer'})
event.remove({output:'create:empty_blaze_burner'})
event.remove({output:'thermal:rf_coil'})
event.remove({output:'thermal:machine_frame'})
event.remove({output:'thermal:redstone_servo'})
event.remove({output:'create:steam_engine'})
event.remove({output:'createaddition:alternator'})
event.remove({output:'immersiveengineering:cokebrick'})
event.remove({output:'thermal:obsidian_glass'})
event.remove({output:'create:brass_casing'})
event.remove({id: 'thermal:machines/smelter/smelter_alloy_steel'})
event.remove({input:'immersiveengineering:hammer', output:'#forge:dusts'})
event.remove({input:'create:crushed_silver_ore', output: 'thermal:silver_nugget'})
event.remove({input:'create:crushed_tin_ore', output: 'thermal:tin_nugget'})
event.remove({id: 'immersiveengineering:crafting/stick_iron'})
event.remove({id: 'immersiveengineering:crafting/stick_steel'})
event.remove({id: 'immersiveengineering:crafting/stick_aluminum'})
event.remove({output:'createaddition:capacitor'})
event.remove({output:'mekanism:steel_casing'})
event.remove({type: 'pneumaticcraft:explosion_crafting'})
event.remove({input:'immersiveengineering:wirecutter', output:'#forge:wires'})
event.remove({output:'mekanism:enriched_redstone'})
event.remove({type:'mekanism:metallurgic_infusing', output:'create:rose_quartz'})
event.remove({id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'})
event.remove({input: 'minecraft:fire_charge', output: '#forge:ingots'})
event.remove({id: 'thermal:machines/smelter/smelter_alloy_invar'})
event.remove({input: '#forge:nuggets', output: '#forge:gears'})
event.remove({input:'#forge:dusts', output: '#forge:dusts'})
event.remove({input: 'minecraft:iron_ingot', output: 'refinedstorage:quartz_enriched_iron'})
event.remove({output:'#refinedstorage:processors'})
event.remove({input:'immersiveengineering:hammer', output:'#forge:plates'})
event.remove({input:'immersiveengineering:hammer', output:'#forge:plates'})
event.remove({output:'sophisticatedbackpacks:iron_backpack'})
event.remove({output:'sophisticatedbackpacks:gold_backpack'})
event.remove({output:'sophisticatedbackpacks:diamond_backpack'})
event.remove({output:'sophisticatedbackpacks:netherite_backpack'})
event.remove({type: "industrialforegoing:laser_drill_ore"})
event.remove({id: 'tconstruct:smeltery/alloys/molten_refined_obsidian'})

// I am dumb.
let IE = (id) => 'immersiveengineering:'+id
let IF = (id) => 'industrialforegoing:'+id
let SB = (id) => 'sophisticatedbackpacks'+id
let SD = (id) => 'storagedrawers:'+id
    const removeid = [
        IE('blastbrick_reinforced'),
        'thermal:machine_press',
        'thermal:machine_smelter',
        'thermal:machine_pulverizer',
        'thermal:machine_furnace',
        'thermal:machine_refinery',
        'thermal:machine_crucible',
        'thermal:machine_chiller',
        'mekanism:basic_fluid_tank',
        'thermal:device_rock_gen',
        IE('electron_tube'),
        IE('component_electronic_adv'),
        'thermal:press_gear_die',
        IF('machine_frame_simple'),
        IF('dissolution_chamber'),
        'refinedstorage:machine_casing',
        'mekanism:crafting_formula',
        'mekanism:formulaic_assemblicator',
        'storagedrawers:compacting_drawers_3',
        'storagedrawers:controller',
        'xnet:controller',
        'pneumaticcraft:refinery',
        'pneumaticcraft:thermopneumatic_processing_plant',
        'pneumaticcraft:refinery_output',
        'mekanism:metallurgic_infuser',
        'mekanism:enrichment_chamber',
        'refinedstorage:raw_basic_processor',
        'refinedstorage:raw_improved_processor',
        'refinedstorage:raw_advanced_processor',
        'refinedstorage:controller',
        'refinedstorage:grid',
        'refinedstorage:crafting_grid',
        'refinedstorage:fluid_grid',
        'refinedstorage:construction_core',
        'refinedstorage:destruction_core',
        'pneumaticcraft:pressure_chamber_interface',
        'pneumaticcraft:pressure_chamber_valve',
        'immersiveengineering:rs_engineering',
        'immersiveengineering:light_engineering',
        'immersiveengineering:heavy_engineering',
        'industrialforegoing:machine_frame_pity',
        'industrialforegoing:fluid_extractor',
        'industrialforegoing:latex_processing_unit',
        'pneumaticcraft:assembly_io_unit_export',
        'pneumaticcraft:assembly_io_unit_import',
        'pneumaticcraft:assembly_laser',
        'pneumaticcraft:assembly_drill',
        'pneumaticcraft:assembly_platform',
        'pneumaticcraft:assembly_controller',
        "pneumaticcraft:printed_circuit_board",
        'pneumaticcraft:pneumatic_cylinder',
        'mekanism:advanced_control_circuit',
        SD('obsidian_storage_upgrade'),
        SD('iron_storage_upgrade'),
        SD('gold_storage_upgrade'),
        SD('diamond_storage_upgrade'),
        SD('emerald_storage_upgrade'),
        SD('upgrade_template'),
        'thermal:hazmat_fabric',
        'thermal:diving_fabric',
        'mekanismgenerators:laser_focus_matrix',
        'mekanismgenerators:reactor_glass',
        'industrialforegoing:ore_laser_base',
        'mekanism:basic_chemical_tank',
        'mekanism:electrolytic_core',
        'mekanism:rotary_condensentrator',
        'mekanism:electrolytic_separator',
        'mekanism:purification_chamber',
        'mekanism:pressurized_reaction_chamber',
        'extrastorage:raw_neural_processor',
        'mekanism:elite_control_circuit',
        'industrialforegoing:machine_frame_advanced',
        'createchromaticreturn:glowing_ingot',
        'refinedstorage:disk_drive',
        'industrialforegoing:laser_lens0',
        'industrialforegoing:laser_lens1',
        'industrialforegoing:laser_lens2',
        'industrialforegoing:laser_lens3',
        'industrialforegoing:laser_lens4',
        'industrialforegoing:laser_lens5',
        'industrialforegoing:laser_lens6',
        'industrialforegoing:laser_lens7',
        'industrialforegoing:laser_lens8',
        'industrialforegoing:laser_lens9',
        'industrialforegoing:laser_lens10',
        'industrialforegoing:laser_lens11',
        'industrialforegoing:laser_lens12',
        'industrialforegoing:laser_lens13',
        'industrialforegoing:laser_lens14',
        'industrialforegoing:laser_lens15',
        'industrialforegoing:laser_drill',
        'mekanism:chemical_injection_chamber',
        'mekanism:osmium_compressor',
        'mekanism:laser',
        'createchromaticreturn:shadow_steel',
        'createchromaticreturn:refined_radiance',
        
    ]

    removeid.forEach(item => {
        event.remove({output: item})
    })

    const recipeId = [
        'mekanism:processing/netherite/scrap_to_dust',
        'thermal:machines/smelter/smelter_alloy_netherite',
        'minecraft:netherite_ingot',
        'mekanism:processing/steel/enriched_iron_to_dust',
        'mekanism:processing/iron_enriched',
        'mekanism:metallurgic_infusing/alloy/infused',
        'thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron',
        'refinedstorage:crafter',
        'pneumaticcraft:reinforced_stone',
        'pneumaticcraft:thermo_plant/plastic_from_biodiesel',
        'pneumaticcraft:thermo_plant/plastic_from_lpg',
        'pneumaticcraft:pressure_chamber/empty_pcb',
        'pneumaticcraft:pressure_chamber/transistor',
        'pneumaticcraft:pressure_chamber/capacitor',
        'thermal:machines/smelter/smelter_alloy_signalum',
        SB('iron_backpack'),
        'mekanism:reaction/substrate/water_hydrogen',
        'pipez:energy_pipe',
        'pipez:item_pipe',
        'pipez:fluid_pipe',
        'pipez:gas_pipe',
        'createchromaticreturn:zinc_recipe',
        'thermal:signalum_dust_4',
        'extrastorage:neural_processor',
        'immersiveengineering:blueprint/graphite_electrode',
        'immersiveengineering:metalpress/electrode',
        'tconstruct:smeltery/melting/obsidian/block',
        'tconstruct:smeltery/melting/obsidian/dust',
        'tconstruct:smeltery/alloys/molten_obsidian',
        'create:crushing/obsidian',
    ]

    recipeId.forEach(item => {
        event.remove({id:item})
    })

})
