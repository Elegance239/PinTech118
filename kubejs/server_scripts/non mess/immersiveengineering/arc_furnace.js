onEvent('recipes', event => {
/* for reference:

    event.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[{"tag":"forge:ingots/zinc"}],
        "conditions":[
            {"type":"forge:not",
            "value":{"type":"forge:tag_empty",
            "tag":"forge:ingots/brass"}},

            {"type":"forge:not",
            "value":{"type":"forge:tag_empty",
            "tag":"forge:ingots/zinc"}}
        ],
        "energy":51200,
        "input":{"tag":"forge:ingots/copper"},
        "results":[
            {"base_ingredient":{"tag":"forge:ingots/brass"},"count":2}
        ],
        "time":100
    })
*/

//ENERGY VALUES NEED ADJUSTING
    event.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[],
        "energy":204800,
        "input":{item:'immersiveengineering:raw_aluminum'},
        "results":[{"item":'kubejs:processed_raw_aluminum'}],
        "time":400
    })
    event.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[],
        "energy":204800,
        "input":{item:'kubejs:advanced_machine_frame_4'},
        "results":[{"item":'kubejs:advanced_machine_frame_5'}],
        "time":400
    })
    event.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[{item:'mekanism:alloy_reinforced', count:4},{tag:'forge:dusts/ender_pearl'}],
        "energy":409600,
        "input":{item:'kubejs:enderium_alloy_base'},
        "results":[{"item":'kubejs:porous_enderium_dust'}],
        "time":400
    })
})