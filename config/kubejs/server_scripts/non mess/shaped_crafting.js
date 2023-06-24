
onEvent('recipes', event => {
    event.shaped('pneumaticcraft:thermopneumatic_processing_plant', [
        'RGR',
        'TPT',
        'RIR'
    ], {
        R:'pneumaticcraft:reinforced_stone',
        G:'thermal:invar_gear',
        T:'pneumaticcraft:small_tank',
        P:'pneumaticcraft:pressure_tube',
        I:'thermal:invar_plate'
    })
    event.shaped('pneumaticcraft:refinery', [
        'RGR',
        'ITI',
        'RFR'
    ], {
        R:'pneumaticcraft:reinforced_stone',
        G:'thermal:obsidian_glass',
        T:'pneumaticcraft:small_tank',
        F:'thermal:machine_refinery',
        I:'thermal:invar_plate'
    })
    event.shaped('pneumaticcraft:refinery_output', [
        'RGR',
        'IPI',
        'RTR'
    ], {
        R:'pneumaticcraft:reinforced_stone',
        G:'thermal:obsidian_glass',
        T:'pneumaticcraft:small_tank',
        P:'pneumaticcraft:pressure_tube',
        I:'thermal:invar_plate'
    })
    event.shaped('2x pneumaticcraft:pressure_chamber_valve', [
        'PPP',
        'CTC',
        'PPP'
    ], {
        P:'pneumaticcraft:pressure_chamber_wall',
        T:'pneumaticcraft:pressure_tube',
        C:'kubejs:compressed_iron_plate'
    })
    event.shaped('2x pneumaticcraft:pressure_chamber_interface', [
        'PPP',
        'CGC',
        'PPP'
    ], {
        P:'pneumaticcraft:pressure_chamber_wall',
        G:'pneumaticcraft:compressed_iron_gear',
        C:'kubejs:compressed_iron_plate'
    })

    event.shaped('6x kubejs:reinforced_stone_powder', [
        'CRC',
        'CRC',
        'CRC'
    ], {
        C:'minecraft:white_concrete_powder',
        R:'kubejs:compressed_iron_rod'
    })
    event.shaped('2x immersiveengineering:light_engineering', [
        'PMP',
        'RER',
        'PGP'
    ], {
        P:'#forge:plates/tin',
        R:'#forge:rods/iron',
        E:'kubejs:engineering_block_frame',
        M:'create:precision_mechanism',
        G:'thermal:iron_gear'
    })
    event.shaped('2x immersiveengineering:heavy_engineering', [
        'PMP',
        'RER',
        'PGP'
    ], {
        P:'kubejs:compressed_iron_plate',
        R:'pneumaticcraft:reinforced_stone',
        E:'kubejs:engineering_block_frame',
        M:'create:precision_mechanism',
        G:'pneumaticcraft:compressed_iron_gear'
    })
    event.shaped('2x immersiveengineering:rs_engineering', [
        'PSP',
        'RER',
        'PCP'
    ], {
        P:'#forge:plates/iron',
        R:'#forge:rods/copper',
        E:'kubejs:engineering_block_frame',
        S:'thermal:redstone_servo',
        C:'immersiveengineering:coil_mv'
    })
    event.shaped('industrialforegoing:machine_frame_pity', [
        'LSL',
        'EBE',
        'LSL'
    ], {
        L: '#forge:plates/lead',
        S:'minecraft:smooth_stone',
        E:'immersiveengineering:light_engineering',
        B:'create:brass_casing'
    })
    event.shaped('industrialforegoing:fluid_extractor', [
        'CSC',
        'CPC',
        'CAC'
    ], {
        C:'kubejs:compressed_iron_plate',
        S:'create:spout',
        P:'industrialforegoing:machine_frame_pity',
        A:'thermal:device_tree_extractor'
    })
    event.shaped('industrialforegoing:latex_processing_unit', [
        'CSC',
        'CPC',
        'CFC'
    ], {
        C:'kubejs:compressed_iron_plate',
        S:'pneumaticcraft:small_tank',
        P:'industrialforegoing:machine_frame_pity',
        F:'thermal:machine_furnace'
    })
    event.shaped('kubejs:precision_assembly_module', [
        '   ',
        'RHR',
        'CPC'
    ], {
        R:'pneumaticcraft:reinforced_stone',
        H:'immersiveengineering:heavy_engineering',
        C:'kubejs:compressed_iron_plate',
        P:'pneumaticcraft:printed_circuit_board'
    })
    event.shaped('pneumaticcraft:assembly_io_unit_export', [
        'SCC',
        '  C',
        'BPB'
    ], {
        S:'create:smart_chute',
        C:'pneumaticcraft:pneumatic_cylinder',
        B:'mekanism:basic_control_circuit',
        P:'kubejs:precision_assembly_module'
    })
    
    event.shaped('pneumaticcraft:assembly_drill', [
        'SCC',
        '  C',
        'BPB'
    ], {
        S:'pneumaticcraft:drill_bit_diamond',
        C:'pneumaticcraft:pneumatic_cylinder',
        B:'mekanism:basic_control_circuit',
        P:'kubejs:precision_assembly_module'
    })
    
    event.shaped('pneumaticcraft:assembly_laser', [
        'SCC',
        '  C',
        'BPB'
    ], {
        S:'thermal:laser_diode',
        C:'pneumaticcraft:pneumatic_cylinder',
        B:'mekanism:basic_control_circuit',
        P:'kubejs:precision_assembly_module'
    })
    event.shaped('pneumaticcraft:assembly_platform', [
        'C C',
        'LLL',
        'TPT'
    ], {
        L:'pneumaticcraft:plastic',
        C:'pneumaticcraft:pneumatic_cylinder',
        T:'pneumaticcraft:reinforced_pressure_tube',
        P:'kubejs:precision_assembly_module'
    })
    event.shaped('pneumaticcraft:assembly_controller', [
        ' S ',
        'BMB',
        'TPT'
    ], {
        S:'rftoolsutility:screen',
        T:'pneumaticcraft:reinforced_pressure_tube',
        B:'mekanism:basic_control_circuit',
        P:'kubejs:precision_assembly_module',
        M:'industrialforegoing:machine_frame_simple'
    })
    event.shaped('thermal:laser_diode', [
        'GRG',
        'IFI',
        'W W'
    ], {
        G:'minecraft:glass',
        R:'thermal:ruby_dust',
        I:'thermal:invar_plate',
        F:'immersiveengineering:toolupgrade_shield_flash',
        W:'#forge:wires/electrum'
    })
    event.shaped('pneumaticcraft:pneumatic_cylinder', [
        'PRP',
        'CRC',
        'PMP'
    ], {
        P:'pneumaticcraft:plastic',
        C:'kubejs:compressed_iron_plate',
        R:'kubejs:compressed_iron_rod',
        M:'immersiveengineering:component_steel'
    })
    event.shaped('mekanism:advanced_control_circuit', [
        'PBP',
        'LSL',
        'PBP'
    ], {
        P:'refinedstorage:basic_processor',
        B:'mekanism:basic_control_circuit',
        L:'kubejs:logic_gate',
        S:'#forge:plates/signalum'
    })
    event.shaped('8x pipez:item_pipe', [
        '   ',
        'BCB',
        '   '
    ], {
        B:'#forge:plates/brass',
        C:'create:chute'
    })
    event.shaped('8x pipez:fluid_pipe', [
        '   ',
        'BCB',
        '   '
    ], {
        B:'#forge:plates/brass',
        C:'create:fluid_pipe'
    })
    event.shaped('8x pipez:gas_pipe', [
        '   ',
        'BCB',
        '   '
    ], {
        B:'#forge:plates/brass',
        C:'mekanism:alloy_infused'
    })
    event.shaped('12x pipez:energy_pipe', [
        '   ',
        'BCB',
        '   '
    ], {
        B:'#forge:plates/brass',
        C:'create:rose_quartz'
    })
    event.shaped('2x mekanismgenerators:reactor_glass', [
        'LSL',
        'S S',
        'LSL',
    ], {
        L:'thermal:lead_ingot',
        S:'thermal:signalum_glass',
    })
    event.shaped('mekanism:pressurized_reaction_chamber', [
        'PPP',
        'AEA',
        'CIC'
    ], {
        A:'mekanism:advanced_control_circuit',
        C:'kubejs:composite_mechanical_component',
        P:'pneumaticcraft:pressure_chamber_wall',
        I:'pneumaticcraft:pressure_chamber_interface',
        E:'mekanism:enrichment_chamber'
    })
    event.shaped('mekanism:purification_chamber', [
        'PPP',
        'AEA',
        'CIC'
    ], {
        A:'mekanism:advanced_control_circuit',
        C:'kubejs:composite_mechanical_component',
        P:'kubejs:compressed_iron_plate',
        I:'thermal:signalum_gear',
        E:'mekanism:enrichment_chamber'
    })
    event.shaped('mekanism:electrolytic_separator', [
        'PPP',
        'AEA',
        'CIC'
    ], {
        A:'mekanism:advanced_control_circuit',
        C:'kubejs:composite_mechanical_component',
        P:'kubejs:compressed_iron_plate',
        I:'mekanism:electrolytic_core',
        E:'mekanism:steel_casing'
    })
    event.shaped('mekanism:rotary_condensentrator', [
        'PPP',
        'AEA',
        'CIC'
    ], {
        A:'mekanism:basic_control_circuit',
        C:'kubejs:composite_mechanical_component',
        P:'kubejs:compressed_iron_plate',
        I:'mekanism:basic_chemical_tank',
        E:'mekanism:steel_casing'
    })
    event.shaped('mekanism:electrolytic_core', [
        'IAI',
        'GRG',
        'IAI'
    ], {
        A:'#forge:dusts/aluminum',
        I:'mekanism:alloy_infused',
        G:'#forge:rods/gold',
        R:'mekanism:alloy_reinforced',
    })
    event.shaped('mekanism:basic_chemical_tank', [
        'RIR',
        'S S',
        'RSR'
    ], {
        R:'minecraft:redstone',
        I:'immersiveengineering:component_iron',
        S:'#forge:plates/steel'
    })
    event.shaped('kubejs:cooling_system', [
        'ABA',
        'LOL',
        'CSC'
    ], {
        A:'#forge:plates/aluminum',
        B:'mekanism:basic_control_circuit',
        L:'mekanism:dust_lithium',
        O:'kubejs:coolant_capsule',
        C:'kubejs:composite_mechanical_component',
        S:'#forge:plates/signalum'
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
          "AAA"
        ],
        {
          "A": {
            "item": "kubejs:compressed_iron_plate"
          },
          "B": {
            "item": "industrialforegoing:laser_drill"
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
            "item": "thermal:laser_diode"
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