onEvent('recipes', event => {
    event.custom(
        {
            "type":"mekanism:centrifuging",
            "input":{"amount":1,"gas":"kubejs:radioisotope_mixture"},
            "output":{"amount":1,"gas":"kubejs:uranium"}}
        )
})