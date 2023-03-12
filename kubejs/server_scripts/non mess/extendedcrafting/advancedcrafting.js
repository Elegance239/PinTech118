onEvent('recipes', event => {
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AABAA",
          "ACDCA",
          "BEFEB",
          "ACGCA",
          "AABAA"
        ],
        "key": {
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
        },
        "result": {
          "item": "industrialforegoing:ore_laser_base"
        }
    })

    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AABAA",
          "ACDCA",
          "AEFEA",
          "AGHGA",
          "AAIAA"
        ],
        "key": {
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
        },
        "result": {
          "item": "industrialforegoing:laser_drill"
        }
      }
    )
})