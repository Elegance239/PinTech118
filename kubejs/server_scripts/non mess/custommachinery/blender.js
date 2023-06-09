onEvent('recipes', event => {
    //Machine recipe : 
    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireFluid(Fluid.of("kubejs:liquid_nitrogen", 50))
        .requireFluid(Fluid.of("mekanism:hydrogen", 50))
        .produceFluid(Fluid.of("kubejs:cryogenic_coolant", 50))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireFluid(Fluid.of("mekanism:hydrofluoric_acid", 50))
        .requireItem(Item.of("kubejs:crude_alumina", 1))
        .produceFluid(Fluid.of("kubejs:impure_alumina_solution", 50))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("kubejs:highly_enriched_carbon", 1))
        .requireItem(Item.of("mekanism:alloy_reinforced", 1))
        .requireItem(Item.of("thermal:nickel_ingot", 1))
        .requireItem(Item.of("pneumaticcraft:ingot_iron_compressed", 1))
        .requireItem(Item.of("kubejs:pyrotheum", 1))
        .produceItem(Item.of("thermal_extra:polarium_ingot", 1))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("kubejs:dehydrated_biomass", 1))
        .requireItem(Item.of("kubejs:calcium_oxide", 1))
        .produceItem(Item.of("kubejs:desiccated_biomass", 1))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("kubejs:iron_oxide", 2))
        .requireItem(Item.of("immersiveengineering:dust_aluminum", 2))
        .requireItem(Item.of("mekanism:dust_lithium", 1))
        .requireItem(Item.of("minecraft:blaze_powder", 1))
        .produceItem(Item.of("kubejs:pyrotheum", 1))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("createchromaticreturn:refined_radiance", 2))
        .requireFluid(Fluid.of("tconstruct:molten_electrum", 450))
        .requireItem(Item.of("kubejs:pyrotheum", 1))
        .produceItem(Item.of("kubejs:neoclydium_ingot_test", 1))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("thermal:sulfur_dust", 1))
        .requireFluid(Fluid.of("minecraft:water", 1000))
        .requireItem(Item.of("thermal:rubber", 4))
        .produceItem(Item.of("industrialforegoing:plastic", 6))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireFluid(Fluid.of("thermal:redstone", 1000))
        .requireFluid(Fluid.of("tconstruct:molten_signalum", 90))
        .produceFluid(Fluid.of("thermal_extra:zauvium", 500))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireFluid(Fluid.of("tconstruct:molten_refined_glowstone", 270))
        .requireFluid(Fluid.of("tconstruct:molten_lumium", 90))
        .produceFluid(Fluid.of("thermal_extra:nectium", 500))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireFluid(Fluid.of("industrialforegoing:pink_slime", 1000))
        .requireFluid(Fluid.of("tconstruct:molten_refined_obsidian", 90))
        .produceFluid(Fluid.of("thermal_extra:nebulium", 500))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireFluid(Fluid.of("create_enchantment_industry:experience", 500))
        .requireFluid(Fluid.of("tconstruct:molten_uranium", 90))
        .produceFluid(Fluid.of("thermal_extra:vukaium", 500))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireFluid(Fluid.of("kubejs:cryogenic_coolant", 1000))
        .requireFluid(Fluid.of("tconstruct:molten_enderium", 90))
        .produceFluid(Fluid.of("thermal_extra:drownium", 500))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 80)
        .requireEnergyPerTick(500)
        .requireItem(Item.of("fluxnetworks:flux_dust", 5))
        .requireItem(Item.of("thermal:steel_coin", 4))
        .requireItem(Item.of("thermal:tar", 3))
        .requireItem(Item.of("minecraft:obsidian", 2))
        .requireItem(Item.of("minecraft:dragon_egg", 1))
        .requireFluid(Fluid.of("createchromaticreturn:refined_mixture", 1000))
        .produceFluid(Fluid.of("createchromaticreturn:shadow_essence", 1000))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 40)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("minecraft:dragon_breath", 1))
        .requireFluid(Fluid.of("tconstruct:molten_enderium", 45))
        .produceFluid(Fluid.of("thermal_extra:dragon_enderium", 90))

    event.recipes.custommachinery.custom_machine("custommachinery:blender", 200)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("mekanism:ingot_osmium", 1))
        .requireItem(Item.of("minecraft:blackstone", 16))
        .requireItem(Item.of("kubejs:pyrotheum", 2))
        .produceItem(Item.of("kubejs:blackstone_alloy", 9))


})