onEvent('recipes', event => {
	// Change recipes here
	
    event.custom(
		{
            "type": "mekanism:purifying",
            "itemInput": {
                "ingredient": {
                    "item": 'immersiveengineering:raw_uranium'
                }
            },
            "chemicalInput": {
                "amount": 1,
                "gas": "mekanism:oxygen"
            },
            "output": {
                "item": "kubejs:processed_raw_uranium",
                "count": 1
            }
        }

        
	)

    event.custom(
		{
            "type": "mekanism:purifying",
            "itemInput": {
                "ingredient": {
                    "item": 'kubejs:zinc_chromate'
                }
            },
            "chemicalInput": {
                "amount": 1,
                "gas": "mekanism:oxygen"
            },
            "output": {
                "item": "jaopca:mekanism_clumps.zinc",
                "count": 1
            }
        }
        
        
	)
    })
