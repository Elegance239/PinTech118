
onEvent('recipes', event => {
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '  T  ',
            ' ESE ',
            'TCMCT',
            ' ESE ',
            '  T  ',
        ],
        key: {
            "T": {
                "item": "thermal:tin_plate"
              },
              "E": {
                "item": "create:electron_tube"
              },
              "S": {
                "item": "immersiveengineering:stick_steel"
              },
              "C": {
                "item": "createaddition:copper_spool"
              },
              "M": {
                "item": "thermal:machine_frame"
              },
        },
        result: {
            "item": "createaddition:alternator"
        },
    })

    event.recipes.createMechanicalCrafting('industrialforegoing:ore_laser_base', 
        [
          "AABAA",
          "ACDCA",
          "BEFEB",
          "ACGCA",
          "AABAA"
        ],
        {
          "A": {
            "item": "mekanism:hdpe_sheet"
          },
          "B": {
            "item": "mekanismgenerators:laser_focus_matrix"
          },
          "C": {
            "item": "mekanism:advanced_control_circuit"
          },
          "D": {
            "item": "mekanism:basic_energy_cube"
          },
          "E": {
            "item": "refinedstorage:destruction_core"
          },
          "F": {
            "item": "industrialforegoing:machine_frame_advanced"
          },
          "G": {
            "item": "refinedstorage:construction_core"
          }
        })
      

    event.recipes.createMechanicalCrafting('industrialforegoing:laser_drill', 
        [
          "AABAA",
          "ACDCA",
          "AEFEA",
          "AGHGA",
          "AAIAA"
        ],
        {
          "A": {
            "item": "mekanism:hdpe_sheet"
          },
          "B": {
            "item": "mekanism:laser"
          },
          "C": {
            "item": "extrastorage:neural_processor"
          },
          "D": {
            "item": "mekanismgenerators:laser_focus_matrix"
          },
          "E": {
            "item": "mekanism:elite_control_circuit"
          },
          "F": {
            "item": "industrialforegoing:machine_frame_advanced"
          },
          "G": {
            "item": "refinedstorage:destruction_core"
          },
          "H": {
            "item": "mekanism:basic_energy_cube"
          },
          "I": {
            "item": "refinedstorage:detector"
          }
          
        })
})
