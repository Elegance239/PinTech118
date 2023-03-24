onEvent('recipes', event => {
	// Change recipes here
	
    event.custom(
		{"type":"mekanism:reaction",
        "duration":100,
        "fluidInput":{"amount":10,"tag":"minecraft:water"},
        "gasInput":{"amount":100,"gas":"mekanism:hydrogen"},
        "gasOutput":{"amount":100,"gas":"mekanism:ethene"},
        "itemInput":{"amount":2,"ingredient":{"item":"pneumaticcraft:plastic"}},
        "itemOutput":{"item":"mekanism:substrate"}
    })
	
    event.custom(
		{"type":"mekanism:reaction",
        "duration":100,
        "fluidInput":{"amount":2000,"fluid":"kubejs:liquid_nitrogen"},
        "gasInput":{"amount":500,"gas":"mekanism:chlorine"},
        "itemInput":{"amount":1,"ingredient":{"item":"kubejs:advanced_machine_frame_2"}},
        "itemOutput":{"item":"kubejs:advanced_machine_frame_3"}
    })

})

