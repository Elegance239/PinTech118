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
})

