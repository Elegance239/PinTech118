onEvent('recipes', event => {
	// Change recipes here
    event.custom({
		type: 'thermal:pyrolyzer',
		ingredients: [
			Item.of('minecraft:charcoal').toJson(),
		],
		results: [
			Item.of('kubejs:enriched_charcoal').toJson(), 
            Fluid.of('immersiveengineering:creosote',50).toJson(), 
		],
		energy: 4000
	})

    event.custom({
        "type": "thermal:pyrolyzer",
        "ingredient": {
          "item": "minecraft:coal"
        },
        "result": [
          {
            "item": "thermal:coal_coke"
          },
          {
            "item": "thermal:tar",
            "chance": 0.25
          },
          {
            "fluid": "immersiveengineering:creosote",
            "amount": 250
          }
        ],
        "experience": 0.15
      })
    
    event.custom({
        "type": "thermal:pyrolyzer",
        "ingredient": {
          "tag": "minecraft:logs"
        },
        "result": [
          {
            "item": "minecraft:charcoal"
          },
          {
            "fluid": "immersiveengineering:creosote",
            "amount": 125
          }
        ],
        "experience": 0.15
      })
})