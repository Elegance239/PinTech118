onEvent('recipes', event => {
	// Change recipes here
	
    event.custom(
		{
            "type": "mekanism:injecting",
            "itemInput": {
                "ingredient": {
                    "item": 'immersiveengineering:dust_hop_graphite'
                }
            },
            "chemicalInput": {
                "amount": 1,
                "gas": "mekanism:sulfuric_acid"
            },
            "output": {
                "item": "kubejs:graphene_oxide",
                "count": 1
            }
        }
        
	)
    })
