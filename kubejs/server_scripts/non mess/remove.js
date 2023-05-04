// priority: 0

onEvent('recipes', event => {
event.remove({type:'minecraft:smelting', output:'#forge:ingots', not:[{input:"#forge:dusts"},{input:"#forge:raw_materials"}]})
event.remove({type:'minecraft:blasting', output:'#forge:ingots', not:[{input:"#forge:dusts"},{input:"#forge:raw_materials"}]})
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
event.remove({input: 'minecraft:fire_charge', output:'thermal:obsidian_glass'})
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
event.remove({mod:"thermal", input:'#forge:dusts', output: '#forge:dusts'})
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
event.remove({input: 'create:cinder_flour', output:'minecraft:glowstone_dust'})
event.remove({input: 'industrialforegoing:dryrubber', output:'industrialforegoing:plastic'})


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
        'createchromaticreturn:chromatic_compound',
        'mekanism:isotopic_centrifuge',
        'mekanism:chemical_dissolution_chamber',
        'mekanism:chemical_oxidizer',
        'mekanism:chemical_infuser',
        'mekanismgenerators:fission_reactor_casing',
        'mekanismgenerators:control_rod_assembly',
        'mekanismgenerators:fission_fuel_assembly',
        'mekanism:alloy_atomic',
        'mekanism:pellet_plutonium',
        'mekanism:pellet_polonium',
        'industrialforegoing:machine_frame_supreme',
        "advgenerators:iron_tubing",
        "advgenerators:iron_wiring",
        "advgenerators:controller",
        "advgenerators:iron_frame",
        "advgenerators:turbine_rotor_tier1",
        "advgenerators:turbine_rotor_tier2",
        "advgenerators:turbine_rotor_tier3",
        "advgenerators:turbine_rotor_tier4",
        "advgenerators:turbine_rotor_tier5",
        "advgenerators:turbine_blade",
        "advgenerators:efficiency_upgrade_tier1",
        "advgenerators:efficiency_upgrade_tier2",
        "advgenerators:advanced_pressure_valve",
        "advgenerators:turbine_kit_tier2",
        "advgenerators:turbine_kit_tier3",
        "advgenerators:turbine_kit_tier4",
        "advgenerators:turbine_kit_tier5",
        'mekanism:ultimate_control_circuit',
        'mekanism:supercharged_coil',
        'mekanism:antiprotonic_nucleosynthesizer',
        'sophisticatedbackpacks:stack_upgrade_tier_1',
        'sophisticatedbackpacks:stack_upgrade_tier_2',
        'sophisticatedbackpacks:stack_upgrade_tier_3',
        'sophisticatedbackpacks:stack_upgrade_tier_4',
        'sophisticatedbackpacks:pickup_upgrade',
        'sophisticatedbackpacks:advanced_pickup_upgrade',
        'sophisticatedbackpacks:filter_upgrade', 
        'sophisticatedbackpacks:advanced_filter_upgrade',
        'sophisticatedbackpacks:crafting_upgrade',
        'sophisticatedbackpacks:magnet_upgrade',
        'sophisticatedbackpacks:advanced_magnet_upgrade',
        'sophisticatedbackpacks:tool_swapper_upgrade',
        'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
        "mekanismgenerators:solar_panel",
        "mekanismgenerators:solar_generator",
        'mekanism:energy_tablet',
        'mekanism:advanced_energy_cube',
        "minecraft:pointed_dripstone",
        'trashcans:item_trash_can',
        "trashcans:liquid_trash_can",
        "trashcans:energy_trash_can",
        'rftoolsutility:screen', 
        'buildinggadgets:gadget_building',
        'buildinggadgets:gadget_exchanging', 
        'buildinggadgets:gadget_copy_paste', 
        'buildinggadgets:gadget_destruction',
        'ironjetpacks:iron',
        'thermal:upgrade_augment_1',
        'thermal:upgrade_augment_2',
        'thermal:upgrade_augment_3',
        'thermal_extra:dragon_integral_component',
        'thermal:machine_cycle_augment',
        'create:blaze_cake_base',
        'thermal_extra:advanced_augment_base',
        'extrastorage:iron_crafter',
        'extrastorage:gold_crafter',
        'extrastorage:diamond_crafter',
        'extrastorage:netherite_crafter',
        'immersiveengineering:alloybrick',
        'immersiveengineering:dynamo',
        'thermal:dynamo_stirling',
        'immersiveengineering:thermoelectric_generator',
        'mekanismgenerators:bio_generator',
        'mekanismgenerators:advanced_solar_generator',
        'mekanismgenerators:wind_generator',
        'thermal:dynamo_magmatic',
        'thermal:dynamo_gourmand',
        'thermal:dynamo_lapidary',
        'thermal:dynamo_numismatic',
        'thermal:dynamo_compression',
        'mekanismgenerators:heat_generator',
        'rftoolsbase:machine_frame',
        'createaddition:straw',
        'mekanism:basic_tier_installer',
        'thermal:dynamo_output_augment',
        'mekanism:upgrade_speed',
        'mekanism:upgrade_energy',
        'mekanism:upgrade_gas'
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
        'thermal:machines/smelter/smelter_alloy_enderium',
        'mekanism:control_circuit/basic',
        'createchromaticreturn:refined_mixture_recipe',
        'mekanism:metallurgic_infusing/alloy/reinforced',
        'immersiveengineering:alloysmelter/invar',
        'immersiveengineering:arcfurnace/alloy_invar',
        'tconstruct:smeltery/alloys/molten_invar',
        'tconstruct:smeltery/alloys/molten_enderium',
        'tconstruct:smeltery/alloys/molten_signalum',
        'tconstruct:smeltery/alloys/molten_invar',
        'tconstruct:smeltery/alloys/molten_lumium',
        'tconstruct:smeltery/alloys/molten_netherite',
        'tconstruct:compat/refined_obsidian_ingot',
        'tconstruct:compat/refined_glowstone_ingot',
        'createchromaticreturn:i_to_uranium',
        'createchromaticreturn:cf_to_gs',
        'createchromaticreturn:polonium_nugget_recipe',
        'createchromaticreturn:plutonium_nugget_recipe',
        'createchromaticreturn:antimatter_recipe',
        'create:crushing/prismarine_crystals',
        'immersiveengineering:crafting/electrum_mix',
        'immersiveengineering:crafting/constantan_mix',
        'createaddition:compat/immersiveengineering/electrum',
        'createaddition:compat/immersiveengineering/constantan',
        'create:splashing/soul_sand',
        'create:crushing/diorite',
        'create:crushing/diorite_recycling',
        'thermal:machines/smelter/smelter_alloy_lumium'
    ]

    recipeId.forEach(item => {
        event.remove({id:item})
    })

})
