onEvent('recipes', event => {

    event.custom(
        {
            "type":"mekanism:oxidizing",
            "input":{"ingredient":{"item":"kubejs:chromatic_dust"}},
            "output":{"amount":2000,"gas":"kubejs:chromatic_gas"}
        }
    )

    event.custom(
        {
            "type":"mekanism:oxidizing",
            "input":{"ingredient":{"item":"createchromaticreturn:glowing_ingot"}},
            "output":{"amount":100,"gas":"kubejs:glowing_gas"}
        }
    )
    event.custom(
        {
            "type":"mekanism:oxidizing",
            "input":{"ingredient":{"item":"kubejs:enriched_ender_regolith"}},
            "output":{"amount":20,"gas":"kubejs:radioisotope_mixture"}
        }
    )
})