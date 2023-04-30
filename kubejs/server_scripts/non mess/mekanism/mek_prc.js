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

    event.custom(
		{"type":"mekanism:reaction",
        "duration":100,
        "fluidInput":{"amount":2000,"fluid":"createchromaticreturn:chromatic_mixture"},
        "gasInput":{"amount":1000,"gas":"mekanism:polonium"},
        "itemInput":{"amount":1,"ingredient":{"item":"mekanism:alloy_reinforced"}},
        "itemOutput":{"item":"mekanism:alloy_atomic"}
    })
    
    event.custom(
		{"type":"mekanism:reaction",
        "duration":100,
        "fluidInput":{"amount":2000,"fluid":"minecraft:water"},
        "gasInput":{"amount":1000,"gas":"mekanism:polonium"},
        "itemInput":{"amount":1,"ingredient":{"item":"kubejs:superalloy_capsule"}},
        "itemOutput":{"item":"mekanism:pellet_polonium"}
    })

    event.custom(
		{"type":"mekanism:reaction",
        "duration":100,
        "fluidInput":{"amount":2000,"fluid":"minecraft:water"},
        "gasInput":{"amount":1000,"gas":"mekanism:plutonium"},
        "itemInput":{"amount":1,"ingredient":{"item":"kubejs:superalloy_capsule"}},
        "itemOutput":{"item":"mekanism:pellet_plutonium"}
    })

    event.custom(
		{"type":"mekanism:reaction",
        "duration":20000,
        "fluidInput":{"amount":1000,"fluid":"mekanism:ethene"},
        "gasInput":{"amount":5000,"gas":"mekanism:hydrogen"},
        "itemInput":{"amount":1,"ingredient":{"item":"kubejs:impure_diamond"}},
        "itemOutput":{"item":"minecraft:diamond"}
    })
})

