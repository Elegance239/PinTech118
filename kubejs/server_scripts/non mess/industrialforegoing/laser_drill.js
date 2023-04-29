onEvent('recipes', event => {
	event.custom({
        "type": "forge:conditional",
        "recipes": [
          {
            "conditions": [
              {
                "type": "forge:not",
                "value": {
                  "type": "forge:tag_empty",
                  "tag": "forge:raw_materials/osmium"
                }
              }
            ],
            "recipe": {
              "type": "industrialforegoing:laser_drill_ore",
              "catalyst": {
                "item": "industrialforegoing:laser_lens0"
              },
              "output": {
                "tag": "forge:raw_materials/osmium"
              },
              "pointer": 0,
              "rarity": [
                {
                  "blacklist": {
                    "type": "minecraft:worldgen/biome",
                    "values": [
                      "minecraft:the_end",
                      "minecraft:the_void",
                      "minecraft:small_end_islands",
                      "minecraft:end_barrens",
                      "minecraft:end_highlands",
                      "minecraft:end_midlands"
                    ]
                  },
                  "depth_max": 36,
                  "depth_min": 5,
                  "weight": 8,
                  "whitelist": {}
                },
                {
                  "blacklist": {
                    "type": "minecraft:worldgen/biome",
                    "values": [
                      "minecraft:the_end",
                      "minecraft:the_void",
                      "minecraft:small_end_islands",
                      "minecraft:end_barrens",
                      "minecraft:end_highlands",
                      "minecraft:end_midlands"
                    ]
                  },
                  "depth_max": 255,
                  "depth_min": 0,
                  "weight": 1,
                  "whitelist": {}
                }
              ]
            }
          }
        ]
      })
})
