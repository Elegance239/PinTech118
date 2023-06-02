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

    event.recipes.createPressing('thermal_extra:advanced_augment_base', 'kubejs:vukaium_plate_bundle')

    

})