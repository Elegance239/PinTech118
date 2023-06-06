onEvent('recipes', event => {
    /*event.recipes.createDeploying('kubejs:core_machine_frame', ['kubejs:dissolved_machine_frame', 'kubejs:neoclydium_core']) */
    
    event.custom({
        type: 'create:deploying',
        ingredients: [
            Item.of('kubejs:dissolved_machine_frame').toJson(),
            Item.of('kubejs:neoclydium_core').toJson(),
        ],
        results: [
            Item.of('kubejs:core_machine_frame').toJson(),
        ],
        id: 'create:deploying/core_machine_frame'
    });

    event.custom({
        type: 'create:deploying',
        ingredients: [
            Ingredient.of('kubejs:sieve').toJson(),
            Ingredient.of('create:crushed_gold_ore').toJson(),
        ],
        results: [
            Ingredient.of('kubejs:sieve_with_gold').toJson(),
        ],
        id: 'create:deploying/sieve_with_gold'
    });
})