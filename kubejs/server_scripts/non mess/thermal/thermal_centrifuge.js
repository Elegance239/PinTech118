onEvent('recipes', event => {
	// Change recipes here
	
	event.custom({
        type: "thermal:centrifuge",
        ingredient: {
          item: "kubejs:acidified_ground_dripstone",
          count:1
        },
        result: [
          {
            item: "kubejs:raw_copper_mote",
            chance:0.8
          },
          {
            item: "kubejs:slag_powder",
            chance:0.1
          }
        ],
        energy: 400
	})

  event.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "kubejs:vaporized_biomass",
      count:1
    },
    result: [
      {
        item: "kubejs:raw_lead_mote",
      },
      {
        item: "mekanism:dust_charcoal",
      }
    ],
    energy: 400
})
})

