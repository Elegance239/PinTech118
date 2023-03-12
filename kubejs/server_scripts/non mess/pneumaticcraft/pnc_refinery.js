onEvent('recipes', event => {
	// Change recipes heree
	event.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
          "type": "pneumaticcraft:fluid",
          "amount": 20,
          "fluid": "minecraft:water"
        },
        "results": [
            
          {
            "amount": 19,
            "fluid": "mekanism:steam"
          },
          {
            "amount": 1,
            "fluid": "mekanism:brine"
          },
        ],
        "temperature": {
          "min_temp": 350
        }
      })
    event.custom({
        "type": "pneumaticcraft:refinery",
        "input": {
          "type": "pneumaticcraft:fluid",
          "amount": 20,
          "fluid": "mekanism:brine"
        },
        "results": [
        {
            "amount": 19,
            "fluid": "mekanism:steam"
        },
          {
            "amount": 1,
            "fluid": "mekanism:lithium"
          },
        ],
        "temperature": {
          "min_temp": 350
        }
      })
})


