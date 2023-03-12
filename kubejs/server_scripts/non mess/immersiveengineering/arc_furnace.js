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
    event.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[],
        "energy":204800,
        "input":{item:'kubejs:advanced_machine_frame_4'},
        "results":[{"item":'kubejs:advanced_machine_frame_5'}],
        "time":400
    })
})