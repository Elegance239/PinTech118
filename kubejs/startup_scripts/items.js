// priority: 0
onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	
	event.create('clean_filtered_gravel').displayName('Clean Filtered Gravel')
	event.create('failed_zinc_nugget').displayName('Failed Zinc Nugget')
	event.create('ground_dripstone').displayName('Ground Dripstone')
	event.create('tarnished_zinc_nugget').displayName('Tarnished Zinc Nugget')
	event.create('wet_filtered_gravel').displayName('Wet Filtered Gravel')
	event.create('dense_gravel').displayName('Dense Gravel')
	event.create('cellulose').displayName('Cellulose')
	event.create('sub_power_input').displayName('Substandard Power Input Package')
	event.create('slag_powder').displayName('Slag Powder')
	event.create('redstone_slag_powder').displayName('Redstone Slag Powder')
	event.create('copper_slag_powder').displayName('Copper Slag Powder')
	event.create('silica_dust').displayName('Silica Dust')
	event.create('acidified_ground_dripstone').displayName('Acidified Ground Dripstone')
	event.create('resistor').displayName('Resistor')
	event.create('brickeltin').displayName('Brickeltin')
	event.create('adv_comp_base').displayName('Electronics Backplane')
	event.create('brickeltin_inf_advcomp').displayName('Partial Assmbled Electronics 2/3')
	event.create('cap_inf_advcomp').displayName('Partial Assembled Electronics 1/3')
	event.create('plant_matter').displayName('Compressed Plant Matter')
	event.create('poo').displayName('Animal Solid Waste')
	event.create('compressed_iron_plate').displayName('Compressed Iron Plate')
	event.create('compressed_iron_rod').displayName('Compressed Iron Rod')
	event.create('refined_redstone_blend').displayName('Refined Redstone Blend')
	event.create('peat').displayName('Pressed Peat')
	event.create('poo_infused_peat').displayName('Pressed Poo Infused Peat')
	event.create('drenched_peat').displayName('Pressed Drenched Malodorous Peat')
	event.create('stinky_coal').displayName('Stinky Coal')
	event.create('unprocessed_netherite_alloy').displayName('Unprocessed Netherite Alloy')
	event.create('advanced_processor_bundle').displayName('Advanced Processor Bundle')
	event.create('improved_processor_bundle').displayName('Improved Processor Bundle')
	event.create('silicon_wafer').displayName('Silicon Wafer')
	event.create('enriched_diamond_nugget').displayName('Enriched Diamond Nugget')
	event.create('aqueous_ingot').displayName('Aqueous Ingot').glow(true).rarity('uncommon')
	event.create('polymer_resin').displayName('Polymer Resin')
	event.create('reinforced_stone_powder').displayName('Reinforced Stone Powder')
	event.create('precision_assembly_module').displayName('Precision Assembly Module')
	event.create('impure_quartz_crystal').displayName('Impure Quartz Crystal')
	event.create('cut_gold').displayName('Cut Gold')
	event.create('calcium_hydroxide').displayName('Calcium Hydroxide')
	event.create('calcium_oxide').displayName('Calcium Oxide')
	event.create('impure_gold').displayName('Impure Gold')
	event.create('highly_enriched_carbon').displayName('Highly Enriched Carbon')
	event.create('logic_gate').displayName('Digital Circuit')
	event.create('processed_raw_lead').displayName('Processed Raw Lead')
	event.create('processed_raw_nickel').displayName('Processed Raw Nickel')
	event.create('processed_raw_silver').displayName('Processed Raw Silver')
	event.create('processed_raw_zinc').displayName('Processed Raw Zinc')
	event.create('processed_raw_tin').displayName('Processed Raw Tin')
	event.create('processed_raw_aluminum').displayName('Processed Raw Bauxite')
	event.create('processed_raw_uranium').displayName('Processed Raw Uranium')
	event.create('processed_raw_osmium').displayName('Processed Raw Osmium')
	//this is not ideal, need players to remember which ores need to be processed, which do not
	//ideally, the above should be named 'Raw Ore', and the original should be renamed 'Crude Raw Ore'

	event.create('reinforcement_catalyst').displayName('Reinforcement Catalyst').glow(true).rarity('rare')
	event.create('contaminated_reinforcement_catalyst').displayName('Contaminated Reinforcement Catalyst')
	event.create('coolant_capsule').displayName('Coolant Capsule')
	event.create('composite_mechanical_component').displayName('Composite Mechanical Component')
	event.create('composite_mechanical_component_u').displayName('Incomplete Composite Mechanical Component')
	event.create('cooling_system').displayName('Cooling System')
	event.create('mold_lens').displayName('Mold: Lens')
	event.create('mold_core').displayName('Mold: Core')
	event.create('lens_stuck_in_mold').displayName('Lens Stuck In Mold')
	event.create('doped_neural_processor').displayName('Doped Neural Processor')
	event.create('advanced_machine_frame_0').displayName('Partial Advanced Machine Frame 0/6')
	event.create('advanced_machine_frame_1').displayName('Partial Advanced Machine Frame 1/6')
	event.create('advanced_machine_frame_2').displayName('Partial Advanced Machine Frame 2/6')
	event.create('advanced_machine_frame_3').displayName('Partial Advanced Machine Frame 3/6')
	event.create('advanced_machine_frame_4').displayName('Partial Advanced Machine Frame 4/6')
	event.create('advanced_machine_frame_5').displayName('Partial Advanced Machine Frame 5/6')

	event.create('raw_copper_mote').displayName('Raw Copper Mote')
	event.create('raw_lead_mote').displayName('Raw Lead Mote')
	event.create('raw_tin_mote').displayName('Raw Tin Mote')
	event.create('raw_silver_mote').displayName('Raw Silver Mote')
	event.create('raw_bauxite_mote').displayName('Raw Bauxite Mote')
	event.create('raw_nickel_mote').displayName('Raw Nickel Mote')
	event.create('raw_iron_mote').displayName('Raw Iron Mote')
	event.create('raw_uranium_mote').displayName('Raw Uranium Mote')

	event.create('neoclydium_ingot_test').displayName('Neoclydium Ingot').rarity('epic').maxStackSize(16).texture("kubejs:item/neoclydium_ingot_test")
	event.create('graphene').displayName('Graphene')
	event.create('graphene_oxide').displayName('Graphene Oxide')
	event.create('rough_graphene').displayName('Rough Graphene')
	event.create('advanced_component').displayName('Advanced Component')
	event.create('unpowered_advanced_component').displayName('Unpowered Advanced Component')
	event.create('conductive_polymer').displayName('Conductive Polymer')
	event.create('crude_enderium_alloy_base').displayName('Crude Enderium Alloy Base')
	event.create('enderium_alloy_base').displayName('Enderium Alloy Base')
	event.create('porous_enderium_dust').displayName('Porous Enderium Dust')
	event.create('centrifuge_core').displayName('Centrifuge Core')
	event.create('superconducting_mixture').displayName('Superconducting Mixture')
	event.create('sintered_superconductor_pellet').displayName('Sintered Superconductor Pellet')
	event.create('superconductor').displayName('Superconductor').rarity('epic')
	event.create('superconducting_magnet').displayName('Superconducting Magnet').rarity('uncommon')
	event.create('enderium_rod_bundle').displayName('Enderium Rod Bundle').rarity('uncommon')
	event.create('enderium_rod').displayName('Enderium Rod').rarity('uncommon')
	event.create('supersymmetric_particles').displayName('Supersymmetric Particles').rarity('epic')
	event.create('supersymmetric_alloy').displayName('Supersymmetric Alloy').rarity('epic')
	event.create('animal_flesh').displayName('Extreme Violence')
	event.create('chromatic_dust').displayName('Chromatic Dust').rarity('uncommon')
	event.create('neoclydium_core').displayName('Neoclydium Core').rarity('epic').texture("kubejs:item/neoclydium_core")
	event.create('superalloy_capsule').displayName('Superalloy Capsule')
	event.create('plutonium_superalloy').displayName('Plutonium Superalloy').rarity('uncommon')
	event.create('plutonium_superalloy_plate').displayName('Plutonium Superalloy Plate').rarity('uncommon')
	event.create('ion_trap').displayName('Ion Trap')
	event.create('activated_ion_trap').displayName('Activated Ion Trap')
	event.create('superconducting_circuit').displayName('Superconducting Circuit')
	event.create('superconducting_wire').displayName('Superconducting Wire')
	event.create('quantum_cpu').displayName('Quantum CPU')
	event.create('quantum_cpu_package').displayName('Quantum CPU Package')
	event.create('quantum_computer').displayName('Quantum Computer')
	event.create('laser_array').displayName('Laser Array')
	event.create('neutronium').displayName('Neutronium').glow(true)
	event.create('neutronium_plate').displayName('Neutronium Plate').glow(true)
	event.create('neoclydium_diode').displayName('Neoclydium Diode').rarity('epic').texture('kubejs:item/neoclydium_diode')
	event.create('neoclydium_wire').displayName('Neoclydium Wire').rarity('epic').texture('kubejs:item/neoclydium_wire')
	event.create('argentite').displayName('Argentite')
	event.create('crushed_argentite').displayName('Crushed Argentite')
	event.create('zinc_chromate').displayName('Zinc Chromate')
	event.create('reinforced_alloy_base').displayName('Reinforced Alloy Base')
	event.create('chin_new').displayName('Chin').rarity('epic')
	event.create('crude_alumina').displayName('Crude Alumina')
	event.create('tarnished_iron_ingot').displayName('Tarnished Iron Ingot')
	event.create('tarnished_copper_ingot').displayName('Tarnished Copper Ingot')
	event.create('dehydrated_biomass').displayName('Dehydrated Biomass')
	event.create('desiccated_biomass').displayName('Desiccated Biomass')
	event.create('vaporized_biomass').displayName('Vaporized Biomass')
	event.create('iron_oxide').displayName('Iron Oxide')
	event.create('pyrotheum').displayName('Pyrotheum')
	event.create('nanocomposite_alloy').displayName('Nanocomposite Alloy')
	event.create('blackstone_alloy').displayName('Blackstone Alloy')
	event.create('impure_diamond').displayName('Impure Diamond')
	event.create('phosphor_blend').displayName('Phosphor Blend')
	event.create('diamond_seed').displayName('Diamond Seed')
	event.create('unassembled_advanced_control_circuit').displayName('Unassembled Advanced Control Circuit')
	event.create('vukaium_plate_bundle').displayName('Vukaium Plate Bundle')
	event.create('superalloy_plate_bundle').displayName('Superalloy Plate Bundle')
	event.create('upgrade_base').displayName('Upgrade Base')
	event.create('augment_base').displayName('Augment Base')
	event.create('sieve').displayName('Sieve')
	event.create('sieve_with_gold').displayName('Sieve with Gold')
	event.create('ender_core').displayName('Ender Core')
	event.create('diode').displayName('Diode')
	event.create('gold_drop').displayName('Gold Drop')
	event.create('mesh').displayName('Mesh')
	event.create('pressurized_ender_core').displayName('Pressurized Ender Core')
	event.create('enriched_charcoal').displayName('Enriched Charcoal')
	event.create('radioactive_ender_regolith').displayName('Radioactive Ender Regolith')
	event.create('enriched_ender_regolith').displayName('Enriched Ender Regolith')
	event.create('fluorite_seed').displayName('Fluorite Seed')

})