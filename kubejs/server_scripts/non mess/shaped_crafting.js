
onEvent('recipes', event => {
  event.shaped('pneumaticcraft:thermopneumatic_processing_plant', [
    'RGR',
    'TPT',
    'RIR'
  ], {
    R: 'pneumaticcraft:reinforced_stone',
    G: 'thermal:invar_gear',
    T: 'pneumaticcraft:small_tank',
    P: 'pneumaticcraft:pressure_tube',
    I: 'thermal:invar_plate'
  })
  event.shaped('pneumaticcraft:refinery', [
    'RGR',
    'ITI',
    'RFR'
  ], {
    R: 'pneumaticcraft:reinforced_stone',
    G: 'thermal:obsidian_glass',
    T: 'pneumaticcraft:small_tank',
    F: 'thermal:machine_refinery',
    I: 'thermal:invar_plate'
  })
  event.shaped('pneumaticcraft:refinery_output', [
    'RGR',
    'IPI',
    'RTR'
  ], {
    R: 'pneumaticcraft:reinforced_stone',
    G: 'thermal:obsidian_glass',
    T: 'pneumaticcraft:small_tank',
    P: 'pneumaticcraft:pressure_tube',
    I: 'thermal:invar_plate'
  })
  event.shaped('2x pneumaticcraft:pressure_chamber_valve', [
    'PPP',
    'CTC',
    'PPP'
  ], {
    P: 'pneumaticcraft:pressure_chamber_wall',
    T: 'pneumaticcraft:pressure_tube',
    C: 'kubejs:compressed_iron_plate'
  })
  event.shaped('2x pneumaticcraft:pressure_chamber_interface', [
    'PPP',
    'CGC',
    'PPP'
  ], {
    P: 'pneumaticcraft:pressure_chamber_wall',
    G: 'pneumaticcraft:compressed_iron_gear',
    C: 'kubejs:compressed_iron_plate'
  })

  event.shaped('6x kubejs:reinforced_stone_powder', [
    'CRC',
    'CRC',
    'CRC'
  ], {
    C: 'minecraft:white_concrete_powder',
    R: 'kubejs:compressed_iron_rod'
  })
  event.shaped('2x immersiveengineering:light_engineering', [
    'PMP',
    'RER',
    'PGP'
  ], {
    P: '#forge:plates/tin',
    R: '#forge:rods/iron',
    E: 'kubejs:engineering_block_frame',
    M: 'create:precision_mechanism',
    G: 'thermal:iron_gear'
  })
  event.shaped('2x immersiveengineering:heavy_engineering', [
    'PMP',
    'RER',
    'PGP'
  ], {
    P: 'kubejs:compressed_iron_plate',
    R: 'pneumaticcraft:reinforced_stone',
    E: 'kubejs:engineering_block_frame',
    M: 'create:precision_mechanism',
    G: 'pneumaticcraft:compressed_iron_gear'
  })
  event.shaped('2x immersiveengineering:rs_engineering', [
    'PSP',
    'RER',
    'PCP'
  ], {
    P: '#forge:plates/iron',
    R: '#forge:rods/copper',
    E: 'kubejs:engineering_block_frame',
    S: 'thermal:redstone_servo',
    C: 'immersiveengineering:coil_mv'
  })
  event.shaped('industrialforegoing:machine_frame_pity', [
    'LSL',
    'EBE',
    'LSL'
  ], {
    L: '#forge:plates/lead',
    S: 'minecraft:smooth_stone',
    E: 'immersiveengineering:light_engineering',
    B: 'create:brass_casing'
  })
  event.shaped('industrialforegoing:fluid_extractor', [
    'CSC',
    'CPC',
    'CAC'
  ], {
    C: 'kubejs:compressed_iron_plate',
    S: 'create:spout',
    P: 'industrialforegoing:machine_frame_pity',
    A: 'thermal:device_tree_extractor'
  })
  event.shaped('industrialforegoing:latex_processing_unit', [
    'CSC',
    'CPC',
    'CFC'
  ], {
    C: 'kubejs:compressed_iron_plate',
    S: 'pneumaticcraft:small_tank',
    P: 'industrialforegoing:machine_frame_pity',
    F: 'thermal:machine_furnace'
  })
  event.shaped('kubejs:precision_assembly_module', [
    '   ',
    'RHR',
    'CPC'
  ], {
    R: 'pneumaticcraft:reinforced_stone',
    H: 'immersiveengineering:heavy_engineering',
    C: 'kubejs:compressed_iron_plate',
    P: 'pneumaticcraft:printed_circuit_board'
  })
  event.shaped('pneumaticcraft:assembly_io_unit_export', [
    'SCC',
    '  C',
    'BPB'
  ], {
    S: 'create:smart_chute',
    C: 'pneumaticcraft:pneumatic_cylinder',
    B: 'mekanism:basic_control_circuit',
    P: 'kubejs:precision_assembly_module'
  })

  event.shaped('pneumaticcraft:assembly_drill', [
    'SCC',
    '  C',
    'BPB'
  ], {
    S: 'pneumaticcraft:drill_bit_diamond',
    C: 'pneumaticcraft:pneumatic_cylinder',
    B: 'mekanism:basic_control_circuit',
    P: 'kubejs:precision_assembly_module'
  })

  event.shaped('pneumaticcraft:assembly_laser', [
    'SCC',
    '  C',
    'BPB'
  ], {
    S: 'thermal:laser_diode',
    C: 'pneumaticcraft:pneumatic_cylinder',
    B: 'mekanism:basic_control_circuit',
    P: 'kubejs:precision_assembly_module'
  })
  event.shaped('pneumaticcraft:assembly_platform', [
    'C C',
    'LLL',
    'TPT'
  ], {
    L: 'pneumaticcraft:plastic',
    C: 'pneumaticcraft:pneumatic_cylinder',
    T: 'pneumaticcraft:reinforced_pressure_tube',
    P: 'kubejs:precision_assembly_module'
  })
  event.shaped('pneumaticcraft:assembly_controller', [
    ' S ',
    'BMB',
    'TPT'
  ], {
    S: 'rftoolsutility:screen',
    T: 'pneumaticcraft:reinforced_pressure_tube',
    B: 'mekanism:basic_control_circuit',
    P: 'kubejs:precision_assembly_module',
    M: 'industrialforegoing:machine_frame_simple'
  })
  event.shaped('thermal:laser_diode', [
    'GRG',
    'IFI',
    'W W'
  ], {
    G: 'minecraft:glass',
    R: 'thermal:cinnabar_dust',
    I: 'thermal:invar_plate',
    F: 'thermal:silver_plate',
    W: '#forge:wires/electrum'
  })
  event.shaped('pneumaticcraft:pneumatic_cylinder', [
    'PRP',
    'CRC',
    'PMP'
  ], {
    P: 'pneumaticcraft:plastic',
    C: 'kubejs:compressed_iron_plate',
    R: 'kubejs:compressed_iron_rod',
    M: 'immersiveengineering:component_steel'
  })
  event.shaped('kubejs:unassembled_advanced_control_circuit', [
    'PBP',
    'LSL',
    'PBP'
  ], {
    P: 'refinedstorage:basic_processor',
    B: 'mekanism:basic_control_circuit',
    L: 'kubejs:logic_gate',
    S: '#forge:plates/signalum'
  })
  event.shaped('8x pipez:item_pipe', [
    '   ',
    'BCB',
    '   '
  ], {
    B: '#forge:plates/brass',
    C: 'create:chute'
  })
  event.shaped('8x pipez:fluid_pipe', [
    '   ',
    'BCB',
    '   '
  ], {
    B: '#forge:plates/brass',
    C: 'create:fluid_pipe'
  })
  event.shaped('8x pipez:gas_pipe', [
    '   ',
    'BCB',
    '   '
  ], {
    B: '#forge:plates/brass',
    C: 'mekanism:alloy_infused'
  })
  event.shaped('12x pipez:energy_pipe', [
    '   ',
    'BCB',
    '   '
  ], {
    B: '#forge:plates/brass',
    C: 'create:rose_quartz'
  })
  event.shaped('2x mekanismgenerators:reactor_glass', [
    'LSL',
    'S S',
    'LSL',
  ], {
    L: 'thermal:lead_ingot',
    S: 'thermal:signalum_glass',
  })
  event.shaped('mekanism:pressurized_reaction_chamber', [
    'PPP',
    'AEA',
    'CIC'
  ], {
    A: 'mekanism:advanced_control_circuit',
    C: 'kubejs:composite_mechanical_component',
    P: 'pneumaticcraft:pressure_chamber_wall',
    I: 'pneumaticcraft:pressure_chamber_interface',
    E: 'mekanism:enrichment_chamber'
  })
  event.shaped('mekanism:purification_chamber', [
    'PPP',
    'AEA',
    'CIC'
  ], {
    A: 'mekanism:advanced_control_circuit',
    C: 'kubejs:composite_mechanical_component',
    P: 'kubejs:compressed_iron_plate',
    I: 'thermal:signalum_gear',
    E: 'mekanism:enrichment_chamber'
  })
  event.shaped('mekanism:electrolytic_separator', [
    'PPP',
    'AEA',
    'CIC'
  ], {
    A: 'mekanism:advanced_control_circuit',
    C: 'kubejs:composite_mechanical_component',
    P: 'kubejs:compressed_iron_plate',
    I: 'mekanism:electrolytic_core',
    E: 'mekanism:steel_casing'
  })
  event.shaped('mekanism:rotary_condensentrator', [
    'PPP',
    'AEA',
    'CIC'
  ], {
    A: 'mekanism:basic_control_circuit',
    C: 'kubejs:composite_mechanical_component',
    P: 'kubejs:compressed_iron_plate',
    I: 'mekanism:basic_chemical_tank',
    E: 'mekanism:steel_casing'
  })
  event.shaped('mekanism:electrolytic_core', [
    'IAI',
    'GRG',
    'IAI'
  ], {
    A: '#forge:dusts/aluminum',
    I: 'mekanism:alloy_infused',
    G: '#forge:rods/gold',
    R: 'mekanism:alloy_reinforced',
  })
  event.shaped('mekanism:basic_chemical_tank', [
    'RIR',
    'S S',
    'RSR'
  ], {
    R: 'minecraft:redstone',
    I: 'immersiveengineering:component_iron',
    S: '#forge:plates/steel'
  })
  event.shaped('kubejs:cooling_system', [
    'ABA',
    'LOL',
    'CSC'
  ], {
    A: '#forge:plates/aluminum',
    B: 'mekanism:basic_control_circuit',
    L: 'mekanism:dust_lithium',
    O: 'kubejs:coolant_capsule',
    C: 'kubejs:composite_mechanical_component',
    S: '#forge:plates/signalum'
  })

  event.shaped('refinedstorage:disk_drive', [
    "ABC",
    "DED",
    "FGF"
  ],
    {
      "A": {
        "item": "refinedstorage:construction_core"
      },
      "B": {
        "item": "pneumaticcraft:reinforced_chest"
      },
      "C": {
        "item": "refinedstorage:destruction_core"
      },
      "D": {
        "item": "mekanism:advanced_control_circuit"
      },
      "E": {
        "item": "refinedstorage:machine_casing"
      },
      "F": {
        "item": "refinedstorage:quartz_enriched_iron_block"
      },
      "G": {
        "item": "refinedstorage:advanced_processor"
      },
    })

  event.shaped('mekanism:chemical_injection_chamber', [
    "ABA",
    "CDC",
    "ABA"
  ],
    {
      "A": {
        "item": "mekanism:alloy_reinforced"
      },
      "B": {
        "item": "thermal:upgrade_augment_1"
      },
      "C": {
        "item": "mekanism:elite_control_circuit"
      },
      "D": {
        "item": "mekanism:purification_chamber"
      }
    },
  )

  event.shaped('mekanism:osmium_compressor', [
    "AAA",
    "BCB",
    "DED"
  ],
    {
      "A": {
        "item": "immersiveengineering:plate_uranium"
      },
      "B": {
        "item": "mekanism:ingot_osmium"
      },
      "C": {
        "item": "mekanism:chemical_injection_chamber",
      },
      "D": {
        "item": "kubejs:cooling_system"
      },
      "E": {
        "item": "thermal:machine_press"
      }
    },
  )

  event.shaped('mm:osmium_drill_controller', [
    "AAA",
    "ABA",
    "ACA"
  ],
    {
      "A": {
        "item": "kubejs:compressed_iron_plate"
      },
      "B": {
        "item": "industrialforegoing:laser_drill"
      },
      "C": {
        "item": "industrialforegoing:ore_laser_base"
      }
    },
  )

  event.shaped('mm:osmium_drill_laser_input_port',
    [
      "ABA",
      "BCB",
      "ABA"
    ],
    {
      "A": {
        "item": "kubejs:compressed_iron_plate"
      },
      "B": {
        "item": "mekanism:alloy_reinforced"
      },
      "C": {
        "item": "industrialforegoing:ore_laser_base"
      }
    },
  )

  event.shaped('mekanism:laser',
    [
      "AB ",
      "CDE",
      "AB ",
    ],
    {
      "A": {
        "item": "mekanism:steel_casing"
      },
      "B": {
        "item": "mekanism:alloy_reinforced"
      },
      "C": {
        "item": "mekanism:basic_energy_cube"
      },
      "D": {
        "item": "kubejs:cooling_system"
      },
      "E": {
        "item": "kubejs:laser_array"
      }
    },
  )
  event.shaped('4x kubejs:modular_machine_framework',
    [
      "ABA",
      "CDC",
      "AEA"
    ],
    {
      "A": {
        "item": "immersiveengineering:plate_aluminum"
      },
      "B": {
        "item": "immersiveengineering:heavy_engineering"
      },
      "C": {
        "item": "immersiveengineering:light_engineering"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_simple"
      },
      "E": {
        "item": "immersiveengineering:rs_engineering"
      }
    },
  )

  event.shaped('mekanism:isotopic_centrifuge',
    [
      "ACA",
      "BFB",
      "DED"
    ],
    {
      "A": {
        "item": "immersiveengineering:plate_aluminum"
      },
      "B": {
        "item": "mekanismgenerators:reactor_glass"
      },
      "C": {
        "item": "mekanism:elite_chemical_tank"
      },
      "D": {
        "item": "kubejs:composite_mechanical_component"
      },
      "E": {
        "item": "mekanism:elite_control_circuit"
      },
      "F": {
        "item": "kubejs:centrifuge_core"
      }
    })

  event.shaped('mekanism:chemical_dissolution_chamber',
    [
      "AAA",
      "BCB",
      "DED"
    ],
    {
      "A": {
        "item": "immersiveengineering:plate_uranium"
      },
      "B": {
        "item": "mekanism:elite_chemical_tank"
      },
      "C": {
        "item": "industrialforegoing:dissolution_chamber"
      },
      "D": {
        "item": "kubejs:composite_mechanical_component"
      },
      "E": {
        "item": "mekanism:elite_control_circuit"
      }
    },
  )

  event.shaped('mekanism:chemical_oxidizer',
    [
      "AAA",
      "BCD",
      "EFE"
    ],
    {
      "A": {
        "item": "immersiveengineering:plate_uranium"
      },
      "B": {
        "item": "pneumaticcraft:reinforced_chest"
      },
      "C": {
        "item": "mekanism:steel_casing"
      },
      "D": {
        "item": "mekanism:dynamic_tank"
      },
      "E": {
        "item": "kubejs:composite_mechanical_component"
      },
      "F": {
        "item": "mekanism:elite_control_circuit"
      }
    },
  )

  event.shaped('mekanism:chemical_infuser',
    [
      "AAA",
      "BCB",
      "DED"
    ],
    {
      "A": {
        "item": "immersiveengineering:plate_uranium"
      },
      "B": {
        "item": "mekanism:elite_control_circuit"
      },
      "C": {
        "item": "mekanism:pressurized_reaction_chamber"
      },
      "D": {
        "item": "kubejs:composite_mechanical_component"
      },
      "E": {
        "item": "kubejs:cooling_system"
      }
    },
  )


  event.shaped('mm:multi_assembler_controller',
    ["ABA", "CDC", "EEE"],
    {
      "A": {
        "item": "mekanism:alloy_reinforced"
      },
      "B": {
        "item": "pneumaticcraft:assembly_controller"
      },
      "C": {
        "item": "mekanism:advanced_control_circuit"
      },
      "D": {
        "item": "mekanism:formulaic_assemblicator"
      },
      "E": {
        "item": "kubejs:modular_machine_framework"
      }
    },
  )
  event.shaped('mm:tesla_infusion_chamber_controller',
    ["ABA", "CDC", "EFE"],
    {
      "A": {
        "item": "kubejs:composite_mechanical_component"
      },
      "B": {
        "item": "mekanism:laser"
      },
      "C": {
        "item": "mekanism:elite_control_circuit"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_advanced"
      },
      "E": {
        "item": "kubejs:modular_machine_framework"
      },
      "F": {
        "item": "thermal:enderium_gear"
      }
    },
  )

  event.shaped('kubejs:centrifuge_core',
    [
      "ABA",
      "BCB",
      "ABA"
    ],
    {
      "A": {
        "item": "mekanism:ingot_osmium"
      },
      "B": {
        "item": "thermal_extra:polarium_plate"
      },
      "C": {
        "item": "thermal:enderium_block"
      }
    })

  event.shaped('4x mekanismgenerators:fission_reactor_casing',
    [
      "ABA",
      "BCB",
      "ABA"
    ],
    {
      "A": {
        "item": "thermal_extra:polarium_plate"
      },
      "B": {
        "item": "thermal:lead_plate"
      },
      "C": {
        "item": "mekanism:steel_casing"
      }
    },
  )


  event.shaped('kubejs:accelerator_magnet',
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "kubejs:modular_machine_framework"
      },
      "B": {
        "item": "immersiveengineering:coil_hv"
      },
      "C": {
        "item": "thermal_extra:polarium_plate"
      },
      "D": {
        "item": "kubejs:superconducting_magnet"
      }
    })
  event.shaped('kubejs:particle_collector',
    ["ABA", "CDC", "EBE"],
    {
      "A": {
        "item": "kubejs:modular_machine_framework"
      },
      "B": {
        "item": "thermal:netherite_plate"
      },
      "C": {
        "item": "mekanism:block_refined_obsidian"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_advanced"
      },
      "E": {
        "item": "kubejs:advanced_component"
      }
    })

  event.shaped('mm:linear_particle_accelerator_controller',
    ["ABA", "ACA", "DDD"],
    {
      "A": {
        "item": "mekanism:elite_control_circuit"
      },
      "B": {
        "item": "kubejs:superconducting_wire"
      },
      "C": {
        "item": "industrialforegoing:machine_frame_advanced"
      },
      "D": {
        "item": "kubejs:advanced_component"
      }
    },
  )

  event.shaped('2x mekanismgenerators:fission_fuel_assembly',
    [
      "ABA",
      "BCB",
      "ADA"
    ],
    {
      "A": {
        "item": "thermal_extra:polarium_plate"
      },
      "B": {
        "item": "thermal:lead_plate"
      },
      "C": {
        "item": "mekanism:elite_chemical_tank"
      },
      "D": {
        "item": "kubejs:enderium_core"
      }
    },
  )
  event.shaped('mm:nanofabricator_controller',
    ["ABA", "CDC", "EEE"],
    {
      "A": {
        "item": "kubejs:advanced_component"
      },
      "B": {
        "item": "kubejs:superconducting_magnet"
      },
      "C": {
        "item": "mekanism:elite_control_circuit"
      },
      "D": {
        "item": "mm:multi_assembler_controller"
      },
      "E": {
        "item": "thermal:enderium_plate"
      }
    },
  )


  event.shaped('mekanismgenerators:control_rod_assembly',
    [
      "ABA",
      "BCB",
      "ABA"
    ],
    {
      "A": {
        "item": "thermal_extra:polarium_plate"
      },
      "B": {
        "item": "immersiveengineering:graphite_electrode",
      },
      "C": {
        "item": "industrialforegoing:machine_frame_advanced"
      }
    },
  )

  event.shaped('mekanism:solar_neutron_activator',
    [
      " A ",
      "BCB",
      "DED"
    ],
    {
      "A": {
        "item": "mekanismgenerators:solar_generator"
      },
      "B": {
        "item": "mekanism:elite_control_circuit"
      },
      "C": {
        "item": "industrialforegoing:machine_frame_advanced"
      },
      "D": {
        "item": "kubejs:composite_mechanical_component"
      },
      "E": {
        "item": "mekanism:elite_chemical_tank"
      }
    }

  )

  event.shaped('industrialforegoing:mob_slaughter_factory',
    [
      "ABA",
      "CDC",
      "AEA"
    ],
    {
      "A": {
        "item": "mekanism:hdpe_sheet"
      },
      "B": {
        "item": "kubejs:animal_flesh"
      },
      "C": {
        "item": "mekanism:advanced_chemical_tank"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_advanced"
      },
      "E": {
        "item": "mekanism:elite_control_circuit"
      }
    },
  )

  event.shaped('kubejs:animal_flesh',
    [
      " A ",
      "BCD",
      " E "
    ],
    {
      "A": {
        "item": "immersiveengineering:windmill_blade"
      },
      "B": {
        "item": "farmersdelight:netherite_knife"
      },
      "C": {
        "item": "thermal:saw_blade"
      },
      "D": {
        "item": "minecraft:netherite_sword"
      },
      "E": {
        "item": "pneumaticcraft:turbine_blade"
      }
    },
  )

  event.shaped('kubejs:laser_array',
    ["ABA",
      "ACA",
      "   "],
    {
      "A": {
        "item": "thermal:laser_diode"
      },
      "B": {
        "item": "industrialforegoing:laser_lens0"
      },
      "C": {
        "item": "mekanism:advanced_control_circuit"
      }
    },
  )
  event.shaped('kubejs:quantum_computer',
    ["ABA",
      "CDC",
      "AEA"],
    {
      "A": {
        "item": "kubejs:advanced_modular_framework"
      },
      "B": {
        "item": "kubejs:conductive_polymer"
      },
      "C": {
        "item": "kubejs:quantum_cpu"
      },
      "D": {
        "item": "thermal:upgrade_augment_3"
      },
      "E": {
        "item": "kubejs:superconducting_magnet"
      }
    },
  )

  event.shaped('8x advgenerators:iron_tubing',
    [" A ",
      "ABA",
      " A "],
    {
      "A": {
        "item": "immersiveengineering:wire_steel"
      },
      "B": {
        "item": "kubejs:compressed_iron_rod"
      }
    },
  )

  event.shaped('2x advgenerators:turbine_blade',
    ["AAB", "AAB", "  B"],
    {
      "A": {
        "item": "thermal:invar_plate"
      },
      "B": {
        "item": "kubejs:compressed_iron_rod"
      }
    },
  )

  event.shaped('advgenerators:turbine_rotor_tier1',
    ["AAA", "ABA", "AAA"],
    {
      "A": {
        "item": "advgenerators:turbine_blade"
      },
      "B": {
        "item": "thermal:dynamo_stirling"
      }
    },
  )

  event.shaped('advgenerators:turbine_rotor_tier2',
    ["ADA", "BCB", "ADA"],
    {
      "A": {
        "item": "mekanism:alloy_infused"
      },
      "B": {
        "item": "thermal:invar_gear"
      },
      "C": {
        "item": "advgenerators:turbine_rotor_tier1"
      },
      "D": {
        "item": "thermal:lumium_plate"
      },
    },
  )

  event.shaped('advgenerators:turbine_kit_tier2',
    ["ADA", "BCB", "ADA"],
    {
      "A": {
        "item": "mekanism:alloy_infused"
      },
      "B": {
        "item": "thermal:invar_gear"
      },
      "C": {
        "item": "advgenerators:upgrade_kit"
      },
      "D": {
        "item": "thermal:lumium_plate"
      },
    },
  )

  event.shaped('advgenerators:turbine_rotor_tier3',
    ["ABA", "CDC", "AAA"],
    {
      "A": {
        "item": "immersiveengineering:plate_aluminum"
      },
      "B": {
        "item": "kubejs:composite_mechanical_component"
      },
      "C": {
        "item": "mekanism:hdpe_sheet"
      },
      "D": {
        "item": "advgenerators:turbine_rotor_tier2"
      }
    },
  )

  event.shaped('advgenerators:turbine_kit_tier3',
    ["ABA", "CDC", "AAA"],
    {
      "A": {
        "item": "immersiveengineering:plate_aluminum"
      },
      "B": {
        "item": "kubejs:composite_mechanical_component"
      },
      "C": {
        "item": "mekanism:hdpe_sheet"
      },
      "D": {
        "item": "advgenerators:upgrade_kit"
      }
    },
  )

  event.shaped('advgenerators:turbine_rotor_tier4',
    ["ABA", "ACA", "ABA"],
    {
      "A": {
        "item": "mekanism:ingot_refined_obsidian"
      },
      "B": {
        "item": "kubejs:composite_mechanical_component"
      },
      "C": {
        "item": "advgenerators:turbine_rotor_tier3"
      }
    },
  )

  event.shaped('advgenerators:turbine_kit_tier4',
    ["ABA", "ACA", "ABA"],
    {
      "A": {
        "item": "mekanism:ingot_refined_obsidian"
      },
      "B": {
        "item": "kubejs:composite_mechanical_component"
      },
      "C": {
        "item": "advgenerators:upgrade_kit"
      }
    },
  )

  event.shaped('advgenerators:turbine_rotor_tier5',
    ["ABA", "ACA", "AAA"],
    {
      "A": {
        "item": "thermal_extra:polarium_plate"
      },
      "B": {
        "item": "thermal:enderium_gear"
      },
      "C": {
        "item": "advgenerators:turbine_rotor_tier4"
      }
    },
  )

  event.shaped('advgenerators:turbine_kit_tier5',
    ["ABA", "ACA", "AAA"],
    {
      "A": {
        "item": "thermal_extra:polarium_plate"
      },
      "B": {
        "item": "thermal:enderium_gear"
      },
      "C": {
        "item": "advgenerators:upgrade_kit"
      }
    },
  )

  event.shaped('advgenerators:controller',
    ["ABA", "BCB", "ABA"],
    {
      "A": {
        "item": "advgenerators:iron_frame"
      },
      "B": {
        "item": "mekanism:advanced_control_circuit"
      },
      "C": {
        "item": "kubejs:improved_processor_bundle"
      }
    },
  )

  event.shaped("advgenerators:efficiency_upgrade_tier1",
    ["ABA", "CDE", "ABA"],
    {
      "A": {
        "item": "thermal:lumium_plate"
      },
      "B": {
        "item": "advgenerators:turbine_rotor_tier3"
      },
      "C": {
        "item": "advgenerators:pressure_valve"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_simple"
      },
      "E": {
        "item": "immersiveengineering:heavy_engineering"
      }
    },
  )

  event.shaped('advgenerators:advanced_pressure_valve',
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "thermal_extra:polarium_plate"
      },
      "B": {
        "item": "kubejs:composite_mechanical_component"
      },
      "C": {
        "item": "thermal:netherite_plate"
      },
      "D": {
        "item": "mekanism:elite_control_circuit"
      },
    },
  )

  event.shaped("advgenerators:efficiency_upgrade_tier2",
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "mekanism:ingot_refined_obsidian"
      },
      "B": {
        "item": "kubejs:cooling_system"
      },
      "C": {
        "item": "advgenerators:advanced_pressure_valve"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_advanced"
      }
    },
  )

  event.shaped('kubejs:neoclydium_diode',
    [
      "ABA",
      "CDC",
      "E E"
    ],
    {
      "A": {
        "item": "thermal:lumium_glass"
      },
      "B": {
        "item": "kubejs:neoclydium_ingot_test"
      },
      "C": {
        "item": "thermal_extra:polarium_plate"
      },
      "D": {
        "item": "kubejs:plutonium_superalloy_plate"
      },
      "E": {
        "item": "kubejs:neoclydium_wire"
      }
    },
  )

  event.shaped('mekanism:ultimate_control_circuit',
    [
      "ABA",
      "CDC",
      "AEA"
    ],
    {
      "A": {
        "item": "kubejs:plutonium_superalloy_plate"
      },
      "B": {
        "item": "kubejs:neoclydium_diode"
      },
      "C": {
        "item": "mekanism:alloy_atomic"
      },
      "D": {
        "item": "mekanism:elite_control_circuit"
      },
      "E": {
        "item": "thermal:upgrade_augment_2"
      }
    },
  )

  event.shaped('4x mekanism:sps_casing',
    [
      "ABA",
      "BCB",
      "ABA"
    ],
    {
      "A": {
        "item": "mekanism:hdpe_sheet"
      },
      "B": {
        "item": "kubejs:plutonium_superalloy_plate"
      },
      "C": {
        "item": "industrialforegoing:machine_frame_supreme"
      }
    },
  )

  event.shaped('mekanism:antiprotonic_nucleosynthesizer',
    [
      "ABA",
      "CDC",
      "ABA"
    ],
    {
      "A": {
        "item": "kubejs:neutronium_plate"
      },
      "B": {
        "item": "mekanism:hdpe_sheet"
      },
      "C": {
        "item": "mekanism:ultimate_control_circuit"
      },
      "D": {
        "item": "mekanism:chemical_injection_chamber"
      }
    },
  )

  event.shaped('mekanismgenerators:solar_panel',
    ["AAA", "BCB", "DDD"],
    {
      "A": {
        "item": "minecraft:glass_pane"
      },
      "B": {
        "item": "minecraft:redstone"
      },
      "C": {
        "item": "thermal:gold_plate"
      },
      "D": {
        "item": "thermal:copper_plate"
      }
    },
  )

  event.shaped('mekanismgenerators:solar_generator',
    ["AAA", "BCB", "BDB"],
    {
      "A": {
        "item": "mekanismgenerators:solar_panel"
      },
      "B": {
        "item": "thermal:constantan_plate"
      },
      "C": {
        "item": "thermal:rf_coil"
      },
      "D": {
        "item": "immersiveengineering:stick_steel"
      }
    },
  )

  event.shaped('mekanism:energy_tablet',
    ["ABA", "CBC", "ABA"],
    {
      "A": {
        "item": "minecraft:redstone"
      },
      "B": {
        "item": "thermal:gold_plate"
      },
      "C": {
        "item": "create:polished_rose_quartz"
      }
    },
  )

  event.shaped('mekanism:advanced_energy_cube',
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "mekanism:alloy_infused"
      },
      "B": {
        "item": "mekanism:energy_tablet"
      },
      "C": {
        "item": "thermal:signalum_ingot"
      },
      "D": {
        "item": "mekanism:basic_energy_cube"
      }
    },
  )

  event.shaped('thermal:upgrade_augment_1',
    [
      "ABA",
      "CDC",
      "ABA"
    ],
    {
      "A": {
        "item": "thermal:invar_ingot"
      },
      "B": {
        "item": "thermal:obsidian_glass"
      },
      "C": {
        "item": "thermal:steel_gear"
      },
      "D": {
        "item": "immersiveengineering:component_electronic_adv"
      }
    },
  )

  event.shaped('thermal:upgrade_augment_2',
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "pneumaticcraft:printed_circuit_board"
      },
      "B": {
        "item": "mekanism:alloy_infused"
      },
      "C": {
        "item": "thermal:lumium_ingot"
      },
      "D": {
        "item": "thermal:upgrade_augment_1"
      }
    },
  )

  event.shaped('thermal:upgrade_augment_3',
    [
      "ABA",
      "CDC",
      "ABA"
    ],
    {
      "A": {
        "item": "thermal:enderium_ingot"
      },
      "B": {
        "item": "thermal:enderium_glass"
      },
      "C": {
        "item": "kubejs:composite_mechanical_component"
      },
      "D": {
        "item": "thermal:upgrade_augment_2"
      }
    },
  )

  event.shaped('thermal_extra:dragon_integral_component',
    [
      " A ",
      "BCB",
      " A "
    ],
    {
      "A": {
        "item": "thermal_extra:dragon_breath_plating"
      },
      "B": {
        "item": "kubejs:advanced_component"
      },
      "C": {
        "item": "thermal:upgrade_augment_3"
      }
    },
  )

  event.shaped(Item.of('custommachinery:custom_machine_item', { machine: "custommachinery:blender" }),
    ["ABA", "CDC", "EEE"],
    {
      "A": {
        "item": "mekanism:alloy_reinforced"
      },
      "B": {
        "item": "thermal:invar_gear"
      },
      "C": {
        "item": "mekanism:advanced_control_circuit"
      },
      "D": {
        "item": "pneumaticcraft:fluid_mixer"
      },
      "E": {
        "item": "kubejs:modular_machine_framework"
      }
    },
  )

  event.shaped('thermal:machine_cycle_augment',
    [
      "ABA",
      "CDC",
      "ABA"
    ],
    {
      "A": {
        "item": "thermal:silver_plate"
      },
      "B": {
        "item": "thermal:electrum_plate"
      },
      "C": {
        "item": "thermal:constantan_plate"
      },
      "D": {
        "item": "thermal:redstone_servo"
      }
    },
  )
  event.shaped('extrastorage:iron_crafter',
    [
      " A ",
      "BCB",
      " D "
    ],
    {
      "A": {
        "item": "refinedstorage:crafting_upgrade"
      },
      "B": {
        "item": "immersiveengineering:component_steel"
      },
      "C": {
        "item": "refinedstorage:crafter"
      },
      "D": {
        "item": "storagedrawers:iron_storage_upgrade"
      }
    },
  )

  event.shaped('extrastorage:gold_crafter',
    [
      " A ",
      "BCB",
      " D "
    ],
    {
      "A": {
        "item": "mekanism:upgrade_speed"
      },
      "B": {
        "item": "extrastorage:neural_processor"
      },
      "C": {
        "item": "extrastorage:iron_crafter"
      },
      "D": {
        "item": "storagedrawers:gold_storage_upgrade"
      }
    },
  )

  event.shaped('extrastorage:diamond_crafter',
    [
      "ABA",
      "CDC",
      "AEA"
    ],
    {
      "A": {
        "item": "mekanism:upgrade_speed"
      },
      "B": {
        "item": "kubejs:cooling_system"
      },
      "C": {
        "item": "kubejs:composite_mechanical_component"
      },
      "D": {
        "item": "extrastorage:gold_crafter"
      },
      "E": {
        "item": "storagedrawers:diamond_storage_upgrade"
      }
    },

  )

  event.shaped('immersiveengineering:dynamo',
    [" A ", "BCB", "DED"],
    {
      "A": {
        "item": "thermal:rf_coil"
      },
      "B": {
        "item": "minecraft:redstone"
      },
      "C": {
        "item": "immersiveengineering:component_steel"
      },
      "D": {
        "item": "minecraft:iron_ingot"
      },
      "E": {
        "item": "immersiveengineering:coil_lv"
      }
    },
  )

  event.shaped('thermal:dynamo_stirling',
    [" A ", "BCB", "BDB"],
    {
      "A": {
        "item": "thermal:rf_coil"
      },
      "B": {
        "item": "thermal:steel_plate"
      },
      "C": {
        "item": "thermal:constantan_gear"
      },
      "D": {
        "item": "immersiveengineering:coil_lv"
      }
    },
  )

  event.shaped('immersiveengineering:thermoelectric_generator',
    ["ABA", "CDC", "CCC"],
    {
      "A": {
        "item": "immersiveengineering:component_steel"
      },
      "B": {
        "item": "thermal:rf_coil"
      },
      "C": {
        "item": "thermal:constantan_plate"
      },
      "D": {
        "item": "immersiveengineering:coil_lv"
      }
    },
  )

  event.shaped('mekanismgenerators:bio_generator',
    ["AAA", "BCB", "DBD"],
    {
      "A": {
        "item": "mekanism:bio_fuel"
      },
      "B": {
        "item": "thermal:dynamo_stirling"
      },
      "C": {
        "item": "pneumaticcraft:pneumatic_cylinder"
      },
      "D": {
        "item": "mekanism:basic_control_circuit"
      }
    },
  )

  event.shaped('mekanismgenerators:advanced_solar_generator',
    ["ABA", "ACA", "DDD"],
    {
      "A": {
        "item": "mekanismgenerators:solar_generator"
      },
      "B": {
        "item": "thermal:signalum_dust"
      },
      "C": {
        "item": "mekanism:basic_control_circuit"
      },
      "D": {
        "item": "immersiveengineering:stick_steel"
      }
    },
  )

  event.shaped('mekanismgenerators:wind_generator',
    ["ABA", "CDC", "CEC"],
    {
      "A": {
        "item": "mekanism:advanced_control_circuit"
      },
      "B": {
        "item": "mekanismgenerators:turbine_blade"
      },
      "C": {
        "item": "kubejs:composite_mechanical_component"
      },
      "D": {
        "item": "advgenerators:turbine_rotor_tier2"
      },
      "E": {
        "item": "immersiveengineering:heavy_engineering"
      }
    },
  )

  event.shaped('rftoolsbase:machine_frame',
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "kubejs:compressed_iron_plate"
      },
      "B": {
        "item": "pneumaticcraft:plastic"
      },
      "C": {
        "item": "mekanism:basic_control_circuit"
      },
      "D": {
        "item": "mekanism:steel_casing"
      }
    },
  )
  event.shaped('kubejs:augment_base',
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "thermal:lumium_coin"
      },
      "B": {
        "item": "thermal:invar_plate"
      },
      "C": {
        "item": "thermal:obsidian_glass"
      },
      "D": {
        "item": "mekanism:basic_control_circuit"
      }
    },
  )
  event.shaped('kubejs:upgrade_base',
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "thermal:lumium_coin"
      },
      "B": {
        "item": "mekanism:alloy_infused"
      },
      "D": {
        "item": "mekanism:basic_control_circuit"
      },
      "C": {
        "item": "thermal:invar_plate"
      }
    },
  )

  event.shaped('mekanism:basic_tier_installer',
    ["ABA", "BCB", "ABA"],
    {
      "A": {
        "item": "mekanism:basic_control_circuit"
      },
      "B": {
        "item": "thermal:lumium_ingot"
      },
      "C": {
        "item": "thermal:upgrade_augment_1"
      }
    },
  )

  event.shaped('thermal:dynamo_output_augment',
    [" A ", "BCB", " A "],
    {
      "A": {
        "item": "thermal:silver_gear"
      },
      "B": {
        "item": "kubejs:compressed_iron_plate"
      },
      "C": {
        "item": "kubejs:augment_base"
      }
    },
  )
  event.shaped('grapplemod:baseupgradeitem',
    [" A ", "ABA", " B "],
    {
      "A": {
        "item": "thermal:lumium_coin"
      },
      "B": {
        "item": "thermal:hazmat_fabric"
      }
    },
  )

  event.shaped('mekanism:combiner',
    [
      "ABA",
      "CDC",
      "ABA"
    ],
    {
      "A": {
        "item": "mekanism:alloy_infused"
      },
      "B": {
        "item": "minecraft:cobblestone"
      },
      "C": {
        "item": "mekanism:basic_control_circuit"
      },
      "D": {
        "item": "thermal:machine_press"
      }
    },

  )

  event.shaped('mm:energy_input_port',
    [" A ", " B ", " A "],
    {
      "A": {
        "item": "kubejs:modular_machine_framework"
      },
      "B": {
        "item": "thermal:rf_coil"
      }
    },
  )
  event.shaped('mm:item_input_port',
    [" A ", " B ", " A "],
    {
      "A": {
        "item": "kubejs:modular_machine_framework"
      },
      "B": {
        "item": "pneumaticcraft:omnidirectional_hopper"
      }
    },
  )

  event.shaped('mm:fluid_input_port',
    [" A ", " B ", " A "],
    {
      "A": {
        "item": "kubejs:modular_machine_framework"
      },
      "B": {
        "item": "pneumaticcraft:liquid_hopper"
      }
    },
  )

  event.shaped('pneumaticcraft:air_compressor',
    ["ABA", "CDC", "CCC"],
    {
      "A": {
        "item": "kubejs:compressed_iron_plate"
      },
      "B": {
        "item": "pneumaticcraft:pressure_tube"
      },
      "C": {
        "item": "pneumaticcraft:reinforced_bricks"
      },
      "D": {
        "item": "thermal:dynamo_stirling"
      }
    },
  )


  event.shaped('enderstorage:ender_chest',
    [
      "ABA",
      "CDC",
      "AEA"
    ],
    {
      "A": {
        "item": "minecraft:blaze_rod"
      },
      "B": {
        "tag": "forge:wool"
      },
      "C": {
        "item": "mekanism:alloy_reinforced"
      },
      "D": {
        "item": "ironchest:obsidian_chest"
      },
      "E": {
        "item": "kubejs:pressurized_ender_core"
      }
    },
  )

  event.shaped('enderstorage:ender_tank',
    [
      "ABA",
      "CDC",
      "AEA"
    ],
    {
      "A": {
        "item": "minecraft:blaze_rod"
      },
      "B": {
        "item": "minecraft:white_wool"
      },
      "C": {
        "item": "mekanism:alloy_reinforced"
      },
      "D": {
        "item": "mekanism:advanced_fluid_tank"
      },
      "E": {
        "item": "kubejs:pressurized_ender_core"
      }
    },

  )

  event.shaped('mekanism:advanced_tier_installer',
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "kubejs:composite_mechanical_component"
      },
      "B": {
        "item": "mekanism:advanced_control_circuit"
      },
      "C": {
        "item": "mekanism:alloy_infused"
      },
      "D": {
        "item": "immersiveengineering:heavy_engineering"
      }
    },
  )

  event.shaped('mekanism:elite_tier_installer',
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "mekanism:hdpe_sheet"
      },
      "B": {
        "item": "mekanism:elite_control_circuit"
      },
      "C": {
        "item": "mekanism:ingot_osmium"
      },
      "D": {
        "item": "mekanism:ingot_refined_glowstone"
      }
    },
  )

  event.shaped('kubejs:sieve',
    [
      "AAA",
      "ABA",
      "AAA"
    ],
    {
      "A": {
        "item": "minecraft:oak_planks"
      },
      "B": {
        "item": "kubejs:mesh"
      }
    },
  )

  event.shaped('thermal:machine_pyrolyzer',
    ["AAA", "ABA", "CDC"],
    {
      "A": {
        "item": "immersiveengineering:cokebrick"
      },
      "B": {
        "item": "thermal:machine_frame"
      },
      "C": {
        "item": "thermal:constantan_gear"
      },
      "D": {
        "item": "immersiveengineering:furnace_heater"
      }
    },
  )
  event.shaped('thermal:machine_bottler',
    ["ABA", "CDC", "EFE"],
    {
      "A": {
        "item": "thermal:obsidian_glass"
      },
      "B": {
        "item": "mekanism:basic_fluid_tank"
      },
      "C": {
        "item": "thermal:steel_plate"
      },
      "D": {
        "item": "thermal:machine_frame"
      },
      "E": {
        "item": "createaddition:copper_spool"
      },
      "F": {
        "item": "thermal:silver_gear"
      }
    },
  )

  event.shaped('fluxnetworks:flux_core',
    [
      "ABA",
      "BCB",
      "ABA"
    ],
    {
      "A": {
        "item": "fluxnetworks:flux_dust"
      },
      "B": {
        "item": "minecraft:obsidian"
      },
      "C": {
        "item": "kubejs:pressurized_ender_core"
      }
    },
  )

  event.shaped('refinedstorageaddons:wireless_crafting_grid',
    [
      "ABA",
      "CDC",
      "AEA"
    ],
    {
      "A": {
        "item": "mekanism:hdpe_sheet"
      },
      "B": {
        "item": "refinedstorage:advanced_processor"
      },
      "C": {
        "item": "mekanism:alloy_reinforced"
      },
      "D": {
        "item": "refinedstorage:crafting_grid"
      },
      "E": {
        "item": "kubejs:pressurized_ender_core"
      }
    },
  )

  event.shaped('simplyjetpacks:thruster_mek1',
    ["ABA", "CDC", "AEA"],
    {
      "A": {
        "item": "mekanism:alloy_infused"
      },
      "B": {
        "item": "immersiveengineering:component_electronic_adv"
      },
      "C": {
        "item": "thermal:dynamo_compression"
      },
      "D": {
        "item": "mekanism:steel_casing"
      },
      "E": {
        "item": "thermal:lumium_ingot"
      }
    },
  )
  event.shaped('simplyjetpacks:thruster_mek2',
    ["ABA", "CDC", "AEA"],
    {
      "A": {
        "item": "pneumaticcraft:plastic"
      },
      "B": {
        "item": "mekanism:advanced_control_circuit"
      },
      "C": {
        "item": "advgenerators:turbine_rotor_tier1"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_simple"
      },
      "E": {
        "item": "immersiveengineering:heavy_engineering"
      }
    },
  )
  event.shaped('simplyjetpacks:thruster_mek3',
    ["ABA", "CDC", "AEA"],
    {
      "A": {
        "item": "mekanism:hdpe_sheet"
      },
      "B": {
        "item": "mekanism:elite_control_circuit"
      },
      "C": {
        "item": "kubejs:composite_mechanical_component"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_advanced"
      },
      "E": {
        "item": "kubejs:coolant_capsule"
      }
    },
  )
  event.shaped('simplyjetpacks:thruster_mek4',
    ["ABA", "CDC", "AEA"],
    {
      "A": {
        "item": "kubejs:conductive_polymer"
      },
      "B": {
        "item": "kubejs:superconducting_magnet"
      },
      "C": {
        "item": "kubejs:advanced_component"
      },
      "D": {
        "item": "industrialforegoing:machine_frame_advanced"
      },
      "E": {
        "item": "thermal:enderium_gear"
      }



    },
  )
  event.shaped('mekanism:induction_casing',
    [
      " A ",
      "ABA",
      " A "
    ],
    {
      "A": {
        "item": "kubejs:modular_machine_framework"
      },
      "B": {
        "item": "mekanism:energy_tablet"
      }
    },
  )
  event.shaped('mekanism:chemical_crystallizer',
    ["AAA", "BCB", "DED"],
    {
      "A": {
        "item": "immersiveengineering:plate_aluminum"
      },
      "B": {
        "item": "mekanism:elite_control_circuit"
      },
      "C": {
        "item": "thermal:machine_crystallizer"
      },
      "D": {
        "item": "kubejs:composite_mechanical_component"
      },
      "E": {
        "item": "thermal:signalum_gear"
      }
    },
  )
  event.shaped('4x biggerreactors:reactor_casing',
    ["ABA", "BCB", "ADA"],
    {
      "A": {
        "item": "thermal:lead_plate"
      },
      "B": {
        "item": "biggerreactors:graphite_ingot"
      },
      "C": {
        "item": "immersiveengineering:heavy_engineering"
      },
      "D": {
        "item": "kubejs:composite_mechanical_component"
      }
    },
  )

  event.shaped('4x biggerreactors:turbine_casing',
    ["ABA", "CDC", "ABA"],
    {
      "A": {
        "item": "immersiveengineering:plate_aluminum"
      },
      "B": {
        "item": "biggerreactors:cyanite_ingot"
      },
      "C": {
        "item": "biggerreactors:graphite_ingot"
      },
      "D": {
        "item": "immersiveengineering:light_engineering"
      }
    },
  )
  event.shaped('biggerreactors:reactor_terminal',
    ["AAA", "BCB", "AAA"],
    {
      "A": {
        "item": "biggerreactors:reactor_casing"
      },
      "B": {
        "item": "mekanism:elite_control_circuit"
      },
      "C": {
        "item": "industrialforegoing:machine_frame_advanced"
      }
    },
  )
  event.shaped('2x biggerreactors:reactor_fuel_rod',
    ["ABA", "ACA", "ABA"],
    {
      "A": {
        "item": "biggerreactors:reactor_casing"
      },
      "B": {
        "item": "thermal:lead_plate"
      },
      "C": {
        "item": "kubejs:cooling_system"
      }
    },
  )
  event.shaped('simplyjetpacks:armorplating_mek1',
    ["AAA", "ABA", "AAA"],
    {
      "A": {
        "item": "kubejs:compressed_iron_plate"
      },
      "B": {
        "item": "mekanism:basic_control_circuit"
      }
    },
  )
  event.shaped('simplyjetpacks:armorplating_mek2',
    ["ABA", "BCB", "ABA"],
    {
      "A": {
        "item": "thermal:invar_plate"
      },
      "B": {
        "item": "mekanism:alloy_infused"
      },
      "C": {
        "item": "simplyjetpacks:armorplating_mek1"
      }
    },
  )

  event.shaped('simplyjetpacks:armorplating_mek3',
    ["ABA", "BCB", "ABA"],
    {
      "A": {
        "item": "mekanism:hdpe_sheet"
      },
      "B": {
        "item": "kubejs:composite_mechanical_component"
      },
      "C": {
        "item": "simplyjetpacks:armorplating_mek2"
      }
    },
  )
  event.shaped('simplyjetpacks:armorplating_mek4',
    ["ABA", "BCB", "ABA"],
    {
      "A": {
        "item": "thermal:netherite_plate"
      },
      "B": {
        "item": "kubejs:graphene"
      },
      "C": {
        "item": "simplyjetpacks:armorplating_mek3"
      }
    },
  )

  event.shaped(Item.of('custommachinery:custom_machine_item', { machine: "custommachinery:formulaic_synthesizer" }),
    ["ABA", "BCB", "ADA"],
    {
      "A": {
        "item": "thermal:invar_plate"
      },
      "B": {
        "item": "mekanism:basic_control_circuit"
      },
      "C": {
        "item": "mekanism:formulaic_assemblicator"
      },
      "D": {
        "item": "thermal:lumium_gear"
      }
    },
  )

  event.shaped('kubejs:magnetic_nozzle',
    ["ABA", "CDC", "CEC"],
    {
      "A": {
        "item": "kubejs:cooling_system"
      },
      "B": {
        "item": "kubejs:superconducting_wire"
      },
      "C": {
        "item": "thermal_extra:polarium_plate"
      },
      "D": {
        "item": "kubejs:advanced_component"
      },
      "E": {
        "item": "kubejs:neutronium_plate"
      }
    },
  )

  event.shaped('mm:large_energy_input_port',
    ["AAA", "ABA", "AAA"],
    {
      "A": {
        "item": "mm:energy_input_port"
      },
      "B": {
        "item": "kubejs:superconducting_wire"
      }
    },
  )

  event.shaped('mm:electromagnetic_catapult_controller',
    [
      "ABA",
      "CDC",
      "ABA"
    ],
    {
      "A": {
        "item": "kubejs:quantum_computer"
      },
      "B": {
        "item": "thermal:enderium_gear"
      },
      "C": {
        "item": "kubejs:superconducting_magnet"
      },
      "D": {
        "item": "mekanism:ultimate_control_circuit"
      }
    },


  )

})
