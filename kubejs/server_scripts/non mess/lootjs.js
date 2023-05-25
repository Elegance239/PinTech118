
onEvent("lootjs", (event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.5)
        .addWeightedLoot([1, 4], [
            Item.of("thermal:lumium_ingot"),
        ]);

    event
        .addLootTypeModifier(LootType.CHEST) // or multiple LootType.BLOCK, LootType.ENTITY ...
        .randomChance(0.2)
        .addWeightedLoot([1, 2], [
            Item.of("kubejs:basic_versatile_frame"),
        ]);

    event
        .addLootTypeModifier(LootType.CHEST) // or multiple LootType.BLOCK, LootType.ENTITY ...
        .randomChance(0.2)
        .addWeightedLoot([1, 2], [
            Item.of("kubejs:chin_new"),
        ]);
});
