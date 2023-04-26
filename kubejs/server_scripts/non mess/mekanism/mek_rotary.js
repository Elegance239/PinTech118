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
	event.custom({
		"type":"mekanism:rotary",
		"fluidInput":{"amount":1,"fluid":"tconstruct:molten_aluminum"},
		"fluidOutput":{"amount":1,"fluid":"tconstruct:molten_aluminum"},
		"gasInput":{"amount":40,"gas":"kubejs:gaseous_aluminum"},
		"gasOutput":{"amount":40,"gas":"kubejs:gaseous_aluminum"}
	})	
	event.custom({
		"type":"mekanism:rotary",
		"fluidInput":{"amount":1,"fluid":"kubejs:impure_alumina_solution"},
		"fluidOutput":{"amount":1,"fluid":"kubejs:impure_alumina_solution"},
		"gasInput":{"amount":1,"gas":"kubejs:gaseous_impure_alumina"},
		"gasOutput":{"amount":1,"gas":"kubejs:gaseous_impure_alumina"}
	})	
})

