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
        "additives":[{item:'mekanism:alloy_reinforced', count:10},{tag:'forge:dusts/ender_pearl', count:2}],
        "energy":409600,
        "input":{item:'kubejs:enderium_alloy_base'},
        "results":[{"item":'kubejs:porous_enderium_dust'}],
        "time":400
    })

    event.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[{item:'kubejs:graphene', count:4},{item:'minecraft:diamond', count:3}, {item:'minecraft:netherite_ingot', count:1}],
        "energy":409600,
        "input":{item:'kubejs:supersymmetric_particles'},
        "results":[{"item":'kubejs:supersymmetric_alloy'}],
        "time":400
    })
    event.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[{item:'minecraft:copper_ingot', count:8},{item:'mekanism:alloy_infused', count:3}, {item:'mekanism:enriched_redstone', count:3}],
        "energy":102400,
        "input":{item:'mekanism:dust_refined_obsidian'},
        "results":[{"item":'thermal:signalum_ingot'}],
        "time":200
    })
    event.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[],
        "energy":12800,
        "input":{item:'kubejs:desiccated_biomass'},
        "results":[{"item":'kubejs:vaporized_biomass'}],
        "time":50
    })
})