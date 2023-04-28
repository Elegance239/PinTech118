
onEvent('recipes', event => {
    const tier0ingots = [
		['minecraft:iron_ingot','minecraft:raw_iron'],
		['minecraft:gold_ingot','minecraft:raw_gold'],
		['minecraft:copper_ingot','minecraft:raw_copper'],
	];

	const tier2ingots = [
		['thermal:tin_nugget','thermal:tin_ore'],
		['thermal:silver_nugget','thermal:silver_ore'],
	];
	/*
	tier0ingots.forEach((item) => {
		event.smelting(item[0],item[1]);
	})
	
	tier2ingots.forEach((item) => {
		event.blasting(item[0],item[1]);
	});
	*/
    //event.blasting('create:zinc_ingot', 'create:crushed_zinc_ore');
    //event.blasting('3x create:zinc_nugget', 'create:raw_zinc');

    const allIngots = [
        ['minecraft:iron_ingot','9x minecraft:iron_nugget'],
		['minecraft:gold_ingot','9x minecraft:gold_nugget'],
		['minecraft:copper_ingot','9x thermal:copper_nugget'],
        ['thermal:tin_ingot','9x thermal:tin_nugget'],
		['thermal:silver_ingot','9x thermal:silver_nugget'],
        ['create:zinc_ingot','9x create:zinc_nugget']
    ]
    allIngots.forEach((ingot) => {
        event.shapeless(ingot[0], ingot[1]);
    })
})