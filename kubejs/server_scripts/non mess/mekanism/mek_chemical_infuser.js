onEvent('recipes', event => {
	// Change recipes here
	
    event.custom(
		{
			"type":"mekanism:chemical_infusing",
			"leftInput": {"amount":1,"gas":"kubejs:calcium_hydroxide"},
			"output": {"amount":1,"gas":"kubejs:calcium_cyanide"},
			"rightInput": {"amount":1,"gas":"kubejs:hydrogen_cyanide"},
		}
	)

	event.custom(
		{
			"type":"mekanism:gas_conversion",
			"input":{"ingredient":{"item":"kubejs:calcium_hydroxide"}},
			"output":{"amount":100,"gas":"kubejs:calcium_hydroxide"}
		}
	)
	
	event.custom(
		{
			"type":"mekanism:chemical_infusing",
			"leftInput": {"amount":1,"gas":"kubejs:chromatic_gas"},
			"output": {"amount":1,"gas":"kubejs:chromoxy_gas"},
			"rightInput": {"amount":2,"gas":"mekanism:oxygen"},
		}
	)

	event.custom(
		{
			"type":"mekanism:chemical_infusing",
			"leftInput": {"amount":1,"gas":"kubejs:incandescent_gas"},
			"output": {"amount":1,"gas":"kubejs:radiant_gas"},
			"rightInput": {"amount":1,"gas":"kubejs:glowing_gas"},
		}
	)

})

