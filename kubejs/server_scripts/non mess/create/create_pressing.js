onEvent('recipes', event => {

    event.custom({
        type: 'create:pressing',
        ingredients: [
            Ingredient.of('kubejs:plutonium_superalloy').toJson()
        ],
        results: [
            Item.of('kubejs:plutonium_superalloy_plate').toJson(),
        ],
    })

})