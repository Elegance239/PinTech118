onEvent('recipes', event => {

    event.custom({
        type: 'create:emptying', 
        ingredients: [
            Item.of('kubejs:mixture_basin').toJson(),
        ],
        results: [
            Item.of('create:basin').toJson(),
            Fluid.of('createchromaticreturn:chromatic_mixture', 500).toJson(),
        ]
    })
})