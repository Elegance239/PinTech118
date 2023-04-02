onEvent('recipes', event => {
	event.custom({
		"type": "industrialforegoing:dissolution_chamber",
		"input": [
		  {
			"item": "createaddition:connector"
		  },
		  {
			"item": "immersiveengineering:component_electronic_adv"
		  },
		  {
			"item": "createaddition:connector"
		  },
		  {
			"item": "mekanism:alloy_infused"
		  },
		  {
			"item": "mekanism:alloy_infused"
		  },
		  {
			"item": "immersiveengineering:wirecoil_copper_ins"
		  },
		  {
			"item": "mekanism:alloy_infused"
		  },
		  {
			"item": "immersiveengineering:wirecoil_copper_ins"
		  }
		],
		"inputFluid": "{Amount:200,FluidName:\"thermal:redstone\"}",
		"output": {
		  "count": 1,
		  "item": "mekanism:basic_control_circuit"
		},
		"processingTime": 300
	  })
	  
	  event.custom({
		"type": "industrialforegoing:dissolution_chamber",
		"input": [
		  {
			"item": "pneumaticcraft:unassembled_pcb"
		  },
		  {
			"item": "pneumaticcraft:transistor"
		  },
		  {
			"item": "pneumaticcraft:transistor"
		  },
		  {
			"item": "pneumaticcraft:capacitor"
		  },
		  {
			"item": "pneumaticcraft:capacitor"
		  },
		  {
			"item": "kubejs:resistor"
		  },
		  {
			"item": "kubejs:resistor"
		  },
		  {
			"item": "kubejs:resistor"
		  },
		],
		"inputFluid": "{Amount:90,FluidName:\"tconstruct:molten_tin\"}",
		"output": {
		  "count": 1,
		  "item": "pneumaticcraft:printed_circuit_board"
		},
		"processingTime": 300
	  })

	  event.custom({
		"type": "industrialforegoing:dissolution_chamber",
		"input": [
		  {
			"item": "createaddition:connector"
		  },
		  {
			"item": "pneumaticcraft:printed_circuit_board"
		  },
		  {
			"item": "createaddition:connector"
		  },
		  {
			"item": "mekanism:alloy_infused"
		  },
		  {
			"item": "mekanism:alloy_infused"
		  },
		  {
			"item": "immersiveengineering:wirecoil_copper_ins"
		  },
		  {
			"item": "mekanism:alloy_infused"
		  },
		  {
			"item": "immersiveengineering:wirecoil_copper_ins"
		  }
		],
		"inputFluid": "{Amount:200,FluidName:\"thermal:redstone\"}",
		"output": {
		  "count": 2,
		  "item": "mekanism:basic_control_circuit"
		},
		"processingTime": 300
	  })

	  event.custom({
		"type": "industrialforegoing:dissolution_chamber",
		"input": [
		  {
			"item": "pneumaticcraft:transistor"
		  },
		  {
			"item": "pneumaticcraft:transistor"
		  },
		  {
			"item": "pneumaticcraft:transistor"
		  },
		  {
			"item": "pneumaticcraft:transistor"
		  },
		  {
			"item": "immersiveengineering:wirecoil_copper_ins"
		  },
		  {
			"item": "immersiveengineering:wirecoil_copper_ins"
		  },
		  {
			"item": "pneumaticcraft:plastic"
		  },
		],
		"inputFluid": "{Amount:90,FluidName:\"tconstruct:molten_tin\"}",
		"output": {
		  "count": 1,
		  "item": "kubejs:logic_gate"
		},
		"processingTime": 300
	  })

	  event.custom({
		"type": "industrialforegoing:dissolution_chamber",
		"input": [
		  {
			"item": "thermal:invar_plate"
		  },
		  {
			"item": "thermal:invar_plate"
		  },
		  {
			"item": "thermal:invar_plate"
		  },
		  {
			"item": "thermal:invar_plate"
		  },
		  {
			"item": "kubejs:aqueous_ingot"
		  },
		  {
			"item": "kubejs:aqueous_ingot"
		  },
		  {
			"item": "kubejs:aqueous_ingot"
		  },
		  {
			"item": "kubejs:aqueous_ingot"
		  },
		  

		],
		"inputFluid": "{Amount:1000,FluidName:\"kubejs:cryogenic_coolant\"}",
		"output": {
		  "count": 1,
		  "item": "kubejs:coolant_capsule"
		},
		"processingTime": 300
	  })
/*
	  event.custom({
		"type": "industrialforegoing:dissolution_chamber",
		"input": [

		  {
			"item": 'extrastorage:neural_processor'
		  },
		  {
			"item": "mekanism:advanced_control_circuit"
		  },
		  {
			"item": 'mekanism:alloy_reinforced'
		  },
		  
		  {
			"item": 'extrastorage:neural_processor'
		  },
		  {
			"item": 'mekanism:alloy_reinforced'
		  },
		  {
			"item": 'extrastorage:neural_processor'
		  },
		  {
			"item": "kubejs:cooling_system"
		  },
		  {
			"item": 'mekanism:alloy_reinforced'
		  },
		  

		  

		],
		"inputFluid": "{Amount:1000,FluidName:\"thermal:redstone\"}",
		"output": {
		  "count": 1,
		  "item": "mekanism:elite_control_circuit"
		},
		"processingTime": 300
	  })
	  */
})

