onEvent('recipes', event => {
    event.recipes.createDeploying('kubejs:core_machine_frame', ['kubejs:dissolved_machine_frame', 'kubejs:neoclydium_core'])
    event.recipes.createDeploying(
        'kubejs:sieve_with_gold', 
        ['kubejs:sieve', 'create:crushed_gold_ore']
    )
})