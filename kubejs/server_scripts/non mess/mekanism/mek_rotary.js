onEvent('recipes', event => {
	event.custom({
		"type":"mekanism:rotary",
		"fluidInput":{"amount":1,"fluid":"kubejs:liquid_calcium_cyanide"},
		"fluidOutput":{"amount":1,"fluid":"kubejs:liquid_calcium_cyanide"},
		"gasInput":{"amount":1,"gas":"kubejs:calcium_cyanide"},
		"gasOutput":{"amount":1,"gas":"kubejs:calcium_cyanide"}
	})

	event.custom({
		"type":"mekanism:rotary",
		"fluidInput":{"amount":1,"fluid":"createchromaticreturn:refined_mixture"},
		"fluidOutput":{"amount":1,"fluid":"createchromaticreturn:refined_mixture"},
		"gasInput":{"amount":1,"gas":"kubejs:radiant_gas"},
		"gasOutput":{"amount":1,"gas":"kubejs:radiant_gas"}
	})	

})

