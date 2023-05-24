onEvent('recipes', event => {
    event.custom(
		{
			type: "create:filling",
			ingredients: [
			  {
				item: "kubejs:mold_lens"
			  },
			  {
				"amount": 100,
				"fluid": "tconstruct:molten_glass",
				"nbt": {}
			  }
			],
			"results": [
			  {
				"item": "kubejs:lens_stuck_in_mold"
			  }
			]
		  }
	)

	event.recipes.createFilling('kubejs:ender_core', [
		'minecraft:ender_eye',
		Fluid.of('tconstruct:molten_electrum', 270)
	  ])

})