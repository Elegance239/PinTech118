onEvent('recipes', event => {
    event.custom(
        {
            "type":"mekanism:activating",
            "input":{"amount":1,"gas":"kubejs:chromoxy_gas"},
            "output":{"amount":1,"gas":"kubejs:incandescent_gas"}}
        )
})