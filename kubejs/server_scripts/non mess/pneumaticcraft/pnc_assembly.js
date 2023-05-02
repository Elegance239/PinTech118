onEvent('recipes', event => {
	// Change recipes heree
	event.custom({
        type: "pneumaticcraft:assembly_drill",
        input: {
            item: "kubejs:composite_mechanical_component_u"
        },
        program: "drill",
        result: {
            item: "kubejs:composite_mechanical_component"
        }
        
})

    event.custom({
    type: "pneumaticcraft:assembly_laser",
    input: {
        item: 'kubejs:unassembled_laser_matrix',
    },
    program: "laser",
    result: {
        item: "mekanismgenerators:laser_focus_matrix",
    }

    
    
    })
    event.custom({
        type: "pneumaticcraft:assembly_laser",
        input: 
        
            {"type": "pneumaticcraft:stacked_item",
            "count": 4,
            "item": 'refinedstorage:raw_advanced_processor'},
        
        program: "laser",
        result: {
            item: 'extrastorage:raw_neural_processor',
        }
    })

    event.custom({
        type: "pneumaticcraft:assembly_drill",
        input: {
            item: "industrialforegoing:machine_frame_simple"
        },
        program: "drill",
        result: {
            item: "kubejs:advanced_machine_frame_0"
        }
    })

    event.custom({
        type: "pneumaticcraft:assembly_laser",
        input: {
            item: "kubejs:advanced_machine_frame_0"
        },
        program: "laser",
        result: {
            item: "kubejs:advanced_machine_frame_1"
        }
    })

    event.custom({
        type: "pneumaticcraft:assembly_laser",
        input: {
            item: 'kubejs:compressed_iron_plate',
        },
        program: "laser",
        result: 		  {
			"type": "pneumaticcraft:stacked_item",
			"count": 2,
			"item": "advgenerators:iron_frame"
		  },

    })

    event.custom({
        type: "pneumaticcraft:assembly_laser",
        input: {
            item: 'kubejs:unassembled_advanced_control_circuit',
        },
        program: "laser",
        result: 		  {
            item: 'mekanism:advanced_control_circuit',
        },

    })

})