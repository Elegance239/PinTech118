onEvent('recipes', event => {
    //Machine recipe : 
    event.recipes.custommachinery.custom_machine("custommachinery:formulaic_synthesizer", 100)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("immersiveengineering:component_steel", 1))
        .requireItem(Item.of("mekanism:alloy_reinforced", 1))
        .requireItem(Item.of("immersiveengineering:stick_aluminum", 6))
        .requireItem(Item.of("thermal:copper_gear", 1))
        .requireItem(Item.of("pneumaticcraft:plastic", 3))
        .requireItem(Item.of("kubejs:formula", 1), "blueprint").chance(0)
        .produceItem(Item.of("kubejs:composite_mechanical_component", 1))       //prefab conmposite component

    event.recipes.custommachinery.custom_machine("custommachinery:formulaic_synthesizer", 100)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("mekanism:basic_control_circuit", 1))
        .requireItem(Item.of("kubejs:logic_gate", 2))
        .requireItem(Item.of("refinedstorage:advanced_processor", 1))
        .requireItem(Item.of("kubejs:formula", 1), "blueprint").chance(0)
        .produceItem(Item.of("kubejs:unassembled_advanced_control_circuit", 1))       //overclocked circuit

    event.recipes.custommachinery.custom_machine("custommachinery:formulaic_synthesizer", 100)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("industrialforegoing:plastic", 1))
        .requireItem(Item.of("industrialforegoing:dryrubber", 2))
        .requireItem(Item.of("pneumaticcraft:plastic", 1))
        .requireItem(Item.of("kubejs:formula", 1), "blueprint").chance(0)
        .produceItem(Item.of("kubejs:polymer_resin", 4))       //recycled polymer

    event.recipes.custommachinery.custom_machine("custommachinery:formulaic_synthesizer", 100)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("mekanism:advanced_control_circuit", 1))
        .requireItem(Item.of("mekanism:dust_lithium", 2))
        .requireItem(Item.of("kubejs:composite_mechanical_component", 2))
        .requireItem(Item.of("kubejs:coolant_capsule", 1))
        .requireItem(Item.of("refinedstorage:improved_processor", 2))
        .requireItem(Item.of("kubejs:formula", 1), "blueprint").chance(0)
        .produceItem(Item.of("kubejs:cooling_system", 2))       //autoregulated cooling system

    event.recipes.custommachinery.custom_machine("custommachinery:formulaic_synthesizer", 100)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("thermal:signalum_nugget", 1))
        .requireItem(Item.of("refinedstorage:silicon", 1))
        .requireItem(Item.of("immersiveengineering:nugget_aluminum", 1))
        .requireItem(Item.of("pneumaticcraft:plastic", 1))
        .requireItem(Item.of("mekanism:enriched_redstone", 1))
        .requireItem(Item.of("immersiveenginering:wire_copper", 1))
        .requireItem(Item.of("kubejs:formula", 1), "blueprint").chance(0)
        .produceItem(Item.of("pneumaticcraft:transistor", 1))       //MOSFET transistor
    
    event.recipes.custommachinery.custom_machine("custommachinery:formulaic_synthesizer", 100)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("thermal:steel_gear", 1))
        .requireItem(Item.of("createaddition:copper_rod", 2))
        .requireItem(Item.of("thermal:iron_plate", 2))
        .requireItem(Item.of("create:brass_casing", 1))
        .requireItem(Item.of("kubejs:formula", 1), "blueprint").chance(0)
        .produceItem(Item.of("kubejs:engineering_block_frame", 1))       //retrofitted engineering block

    event.recipes.custommachinery.custom_machine("custommachinery:formulaic_synthesizer", 100)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("kubejs:superconducting_wire", 2))
        .requireItem(Item.of("kubejs:cooling_system", 2))
        .requireItem(Item.of("kubejs:conductive_polymer", 12))
        .requireItem(Item.of("kubejs:advanced_component", 1))
        .requireItem(Item.of("mekanism:advanced_control_circuit", 1))
        .requireItem(Item.of("kubejs:formula", 1), "blueprint").chance(0)
        .produceItem(Item.of("kubejs:superconducting_magnet", 1))       //supercharged electromagnet

    event.recipes.custommachinery.custom_machine("custommachinery:formulaic_synthesizer", 100)
        .requireEnergyPerTick(200)
        .requireItem(Item.of("minecraft:copper_ingot", 24))
        .requireItem(Item.of("mekanism:enriched_redstone", 4))
        .requireItem(Item.of("mekanism:dust_refined_obsidian", 1))
        .requireItem(Item.of("kubejs:formula", 1), "blueprint").chance(0)
        .produceItem(Item.of("thermal:signalum_ingot", 1))       //simplified signalum alloy
})