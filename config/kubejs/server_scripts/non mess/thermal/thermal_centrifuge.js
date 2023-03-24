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
            chance:2.0
          },
          {
            item: "kubejs:slag_powder",
            count:1
          }
        ],
        energy: 1600
	})

})

