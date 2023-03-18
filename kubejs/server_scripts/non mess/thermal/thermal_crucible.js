onEvent('recipes', event => {
	// Change recipes here
	
    event.custom({
		type: 'thermal:crucible',
		ingredients: [

            
			{ tag: 'forge:nuggets/tin', count:1}
		],
		results: [
            { amount: 16, fluid: 'kubejs:solder'}

		
		],

		energy: 1000
	})

	event.custom({
		type: 'thermal:crucible',
		ingredients: [

            
			{ tag: 'forge:ingots/lead', count:1}
		],
		results: [
            { amount: 144, fluid: 'kubejs:molten_lead'}

		
		],

		energy: 1000
	})
})

