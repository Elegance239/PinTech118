onEvent('recipes', event => {

    event.custom(
        {
            "type":"mekanism:oxidizing",
            "input":{"ingredient":{"item":"kubejs:chromatic_dust"}},
            "output":{"amount":5000,"gas":"kubejs:chromatic_gas"}
        }
    )

    event.custom(
        {
            "type":"mekanism:oxidizing",
            "input":{"ingredient":{"item":"createchromaticreturn:glowing_ingot"}},
            "output":{"amount":500,"gas":"kubejs:glowing_gas"}
        }
    )

})