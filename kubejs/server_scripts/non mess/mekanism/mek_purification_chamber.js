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
    })
