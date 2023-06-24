
onEvent("lootjs", (event) => {
    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.4)
        .addWeightedLoot([1, 4], [
            Item.of("thermal:lumium_ingot"),
        ]);

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.15)
        .addWeightedLoot([1, 1], [
            Item.of("kubejs:basic_versatile_frame"),
        ]);

    event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.1)
        .addWeightedLoot([1, 1], [
            Item.of("kubejs:chin_new"),
        ]);

        event
        .addLootTypeModifier(LootType.CHEST)
        .randomChance(0.08)
        .addWeightedLoot([1, 1], [
            Item.of("kubejs:formula1"),
            Item.of("kubejs:formula2"),
            Item.of("kubejs:formula3"),
            Item.of("kubejs:formula4"),
            Item.of("kubejs:formula5"),
            Item.of("kubejs:formula6"),
            Item.of("kubejs:formula7"),
            Item.of("kubejs:formula8"),
            Item.of("kubejs:formula9"),
        ]);
    
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("pneumaticcraft:transistor");
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("pneumaticcraft:capacitor");
     event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("pneumaticcraft:logistics_core");
     event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("pneumaticcraft:compressed_stone");
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("pneumaticcraft:pneumatic_cylinder");
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("pneumaticcraft:ingot_iron_compressed");
    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("pneumaticcraft:spawner_agitator");
    
    event.disableLootModification("dungeons_arise:chests/mines_treasure_small");
    event.disableLootModification("dungeons_arise:chests/mines_treasure_small");
    event.disableLootModification(/.*barrel.*/)
});
