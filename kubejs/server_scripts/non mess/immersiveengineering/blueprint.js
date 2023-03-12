onEvent('recipes', event => {
	// Change recipes here
	
	
	event.custom({
		
            "type":"immersiveengineering:blueprint",
            "category":"components",
            "inputs":[
                {"base_ingredient":{"tag":"forge:plates/aluminum"},"count":4},
                {"item":"mekanism:alloy_reinforced"}],

            "result":{"item":"kubejs:composite_mechanical_component_u"}
            
	})

    event.custom({
		
        "type":"immersiveengineering:blueprint",
        "category":"molds",
        "inputs":[
            {"base_ingredient":{"tag":"forge:plates/steel"},"count":3},
            {"item":"immersiveengineering:wirecutter"}],

        "result":{"item":"kubejs:mold_lens"}
        
})


})