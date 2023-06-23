// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {

    event.custom({
        type: 'thermal:press',
        ingredients: [
            Ingredient.of('minecraft:iron_block').toJson(),
            Item.of('kubejs:fragile_heart').toJson(),
        ],
        results: [
            Item.of('kubejs:expansion_card').toJson(),
        ],
        energy: 1000
    })

    /* event.recipes.createSequencedAssembly(
        [Item.of('kubejs:fragile_heart')],
        'minecraft:glass',
        [
            event.recipes.createDeploying('minecraft:glass',
                [
                    'minecraft:glass',
                    'minecraft:glass',
                ]
            ),
        ]
    ).transitionalItem('minecraft:glass').loops(5555) */

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'minecraft:glass' },
        results: [{ item: 'kubejs:fragile_heart' }],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [
                    { item: 'minecraft:glass' },
                    { item: 'minecraft:glass' }
                ],
                results: [
                    { item: 'minecraft:glass' },
                ]
            },
        ],
        transitionalItem: { item: 'minecraft:glass' },
        loops: 6969,
    }).id('create:sequenced_assembly/fragile_heart')

    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'create:precision_mechanism' },
            { item: 'kubejs:expansion_card' },
        ],
        results: [Item.of('kubejs:precarious_mechanism').toJson()],
        keepHeldItem: true,
    }).id('create:deploying/precarious_mechanism')

    event.recipes.immersiveengineeringArcFurnace(
        [Item.of('kubejs:inferno_ingot_base')],
        { item: 'kubejs:hellfire_blend', count: 32 },
    )

    event.custom({
        type: 'create:mixing',
        ingredients: [
            Item.of('create:cinder_flour').toJson(),
            Item.of('create:cinder_flour').toJson(),
            Item.of('minecraft:blaze_powder').toJson(),
            Item.of('create:powdered_obsidian').toJson(),
            Item.of('create:powdered_obsidian').toJson(),
            Item.of('minecraft:nether_brick').toJson(),
            Item.of('minecraft:nether_brick').toJson(),
            Item.of('minecraft:nether_brick').toJson(),
            Item.of('thermal:signalum_dust').toJson(),
            Item.of('minecraft:magma_cream').toJson(),
        ],
        results: [
            Item.of('kubejs:hellfire_blend').toJson(),
        ],
        heatRequirement: 'heated',
    }).id('create:mixing/hellfire_blend')

    event.custom({

        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 5000,
            tag: "tconstruct:blazing_blood"
        },
        item_input: {
            item: "kubejs:inferno_ingot_base"
        },
        item_output: {
            item: "kubejs:inferno_ingot"
        },
        temperature: {
            min_temp: 690
        }
    })

    event.custom({

        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 10000,
            tag: "tconstruct:molten_glass"
        },
        item_input: {
            item: "kubejs:inferno_ingot"
        },
        item_output: {
            item: "kubejs:hellfire_crystal"
        },
        temperature: {
            min_temp: 690
        }
    })

    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'kubejs:precarious_mechanism' },
            { item: 'kubejs:hellfire_crystal' },
        ],
        results: [Item.of('kubejs:core_mechanism').toJson()],

    }).id('create:deploying/core_mechanism')

    event.custom({
        type: 'create:mixing',
        ingredients: [
            Item.of('thermal:enderium_dust').toJson(),
            Item.of('tconstruct:ender_slime_ball').toJson(),
            Item.of('fluxnetworks:flux_dust').toJson(),
            Item.of('fluxnetworks:flux_dust').toJson(),
            Item.of('thermal:tar').toJson(),
            Item.of('thermal:tar').toJson(),
            Item.of('kubejs:ender_air_bottle').toJson(),
            Item.of('thermal:netherite_dust').toJson(),
        ],
        results: [
            Item.of('kubejs:oblivion_blend').toJson(),
        ],
        heatRequirement: 'superheated',
    }).id('create:mixing/oblivion_blend')

    event.custom(
        {
            "type": "mekanism:gas_conversion",
            "input": { "ingredient": { "item": "kubejs:oblivion_blend" } },
            "output": { "amount": 25, "gas": "kubejs:oblivion_gas" }
        }
    )

    event.custom({
        "type": "mekanism:compressing",
        "chemicalInput": { "amount": 4, "gas": "kubejs:oblivion_gas" },
        "itemInput": { "ingredient": { item: 'minecraft:netherite_ingot' } },
        "output": { "item": "kubejs:void_ingot_base" }
    })

    event.custom(
        {
            "type": "mekanism:reaction",
            "duration": 200,
            "fluidInput": { "amount": 10000, "fluid": "thermal:ender" },
            "gasInput": { "amount": 5000, "gas": "mekanism:hydrogen" },
            "itemInput": { "amount": 1, "ingredient": { "item": "kubejs:void_ingot_base" } },
            "itemOutput": { "item": "kubejs:void_ingot" }
        })

    event.custom({

        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 10000,
            tag: "tconstruct:molten_glass"
        },
        item_input: {
            item: "kubejs:void_ingot"
        },
        item_output: {
            item: "kubejs:oblivion_crystal"
        },
        temperature: {
            min_temp: 690
        }
    })

    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'kubejs:core_mechanism' },
            { item: 'kubejs:oblivion_crystal' },
        ],
        results: [Item.of('kubejs:void_mechanism').toJson()],

    }).id('create:deploying/void_mechanism')

    event.custom({
        type: 'create:mixing',
        ingredients: [
            Item.of('createchromaticreturn:refined_radiance').toJson(),
            Fluid.of('mekanism:steam', 1000).toJson(),
            Item.of('kubejs:expansion_card').toJson(),
            Item.of('quark:white_rune').toJson(),
            Fluid.of('minecraft:milk', 250).toJson(),
            Item.of('kubejs:supersymmetric_particles').toJson(), 
        ],
        results: [
            Item.of('kubejs:purity_blend').toJson(),
        ],
        heatRequirement: 'superheated',
    }).id('create:mixing/purity_blend')

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'kubejs:fragile_heart' },
        results: [{ item: 'kubejs:unpurified_ingot' }],
        sequence: [
            {
                type: 'create:pressing',
                ingredients: [
                    Ingredient.of('kubejs:fragile_heart').toJson(),
                ],
                results: [
                    Item.of('kubejs:unpurified_ingot').toJson(),
                ],
            },
        ],
        transitionalItem: { item: 'kubejs:fragile_heart' },
        loops: 99999,
    }).id('create:sequenced_assembly/unpurified_ingot')

    event.custom({
        "type": "mekanism:dissolution", 
        "gasInput": { "amount": 20, "gas": "mekanism:sulfuric_acid" }, 
        "itemInput": { "amount": 1, "ingredient": { "item": "kubejs:purity_blend" } }, 
        "output": { "amount": 50, "chemicalType": "slurry", "slurry": "kubejs:pure" }
    })

    event.custom(
        { "type": "mekanism:crystallizing",
        "chemicalType": "slurry",
        "input": { "amount": 50, "slurry": "kubejs:pure" },
        "output": { "item": "kubejs:pure_crystal", "count": 1 } }
    )    

    event.recipes.thermal.crucible(Fluid.of('kubejs:liquid_purity', 50), 'kubejs:pure_crystal').energy(1000)

    event.custom({

        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 2400,
            fluid: "kubejs:liquid_purity",
        },
        item_input: {
            item: "kubejs:unpurified_ingot"
        },
        item_output: {
            item: "kubejs:purity_ingot"
        },
        temperature: {
            min_temp: 690
        }
    })

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: { item: 'kubejs:purity_ingot' },
        results: [{ item: 'kubejs:iridescence_crystal' }],
        sequence: [
            {
                type: 'create:filling',
                ingredients: [
                    {
                      item: "kubejs:purity_ingot"
                    },
                    {
                      "amount": 1000,
                      "fluid": "tconstruct:molten_glass",
                      "nbt": {}
                    }
                  ],
                  "results": [
                    {
                      "item": "kubejs:purity_ingot"
                    }
                  ]
            },
        ],
        transitionalItem: { item: 'kubejs:purity_ingot' },
        loops: 1000,
    }).id('create:sequenced_assembly/iridescence_crystal')


    event.custom({
        type: 'create:deploying',
        ingredients: [
            { item: 'kubejs:void_mechanism' },
            { item: 'kubejs:iridescence_crystal' },
        ],
        results: [Item.of('kubejs:transcendent_mechanism').toJson()],

    }).id('create:deploying/transcendent_mechanism')


    event.recipes.createSplashing(
		Item.of('kubejs:fan'),
		Item.of('create:encased_fan'),
	)

    event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('minecraft:copper_ingot').toJson(),
		  Item.of('minecraft:gold_ingot').toJson(),
          Item.of('minecraft:redstone').toJson(),
          Item.of('minecraft:quartz').toJson(),
          Item.of('create:zinc_ingot').toJson(),
          Item.of('create:brass_ingot').toJson(),
          Item.of('thermal:silver_ingot').toJson(),
          Item.of('thermal:nickel_ingot').toJson(),
          Item.of('thermal:lead_ingot').toJson(),
          Item.of('thermal:tin_ingot').toJson(),
          Item.of('thermal:steel_ingot').toJson(),
          Item.of('pneumaticcraft:ingot_iron_compressed').toJson(),
          Item.of('thermal:bronze_ingot').toJson(),
          Item.of('thermal:electrum_ingot').toJson(),
          Item.of('thermal:invar_ingot').toJson(),
          Item.of('thermal:constantan_ingot').toJson(),
          Item.of('thermal:signalum_ingot').toJson(), 
		],
		pressure: 4,
		results: [
		  Item.of('kubejs:coruscating_ingot_1').toJson(),
		]
	})

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
          Item.of('immersiveengineering:ingot_aluminum').toJson(),
          Item.of('immersiveengineering:ingot_uranium').toJson(),
          Item.of('thermal:lumium_ingot').toJson(),
          Item.of('tconstruct:cobalt_ingot').toJson(),
          Item.of('tconstruct:seared_brick').toJson(),
          Item.of('thermal:enderium_ingot').toJson(),
          Item.of('thermal_extra:vukaium_ingot').toJson(),
          Item.of('thermal_extra:nebulium_ingot').toJson(),
          Item.of('thermal_extra:nectium_ingot').toJson(),
          Item.of('thermal_extra:polarium_ingot').toJson(),
          Item.of('thermal_extra:zauvium_ingot').toJson(),
          Item.of('thermal_extra:drownium_ingot').toJson(),
          Item.of('mekanism:ingot_osmium').toJson(),
          Item.of('mekanism:ingot_refined_obsidian').toJson(),
          Item.of('mekanism:ingot_refined_glowstone').toJson(),
          Item.of('createchromaticreturn:refined_radiance').toJson(),
          Item.of('createchromaticreturn:chromatic_compound').toJson(),
          Item.of('kubejs:supersymmetric_alloy').toJson(),

        ],
        pressure: 4.9,
        results: [
            Item.of('kubejs:coruscating_ingot_2').toJson(),
        ]
    })

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
          Item.of('kubejs:inferno_ingot').toJson(),
          Item.of('kubejs:void_ingot').toJson(),
          Item.of('kubejs:purity_ingot').toJson(),
        ],
        pressure: 4.9,
        results: [
            Item.of('kubejs:coruscating_ingot_3').toJson(),
        ]
    })
    
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
          Item.of('kubejs:coruscating_ingot_1').toJson(),
          Item.of('kubejs:coruscating_ingot_2').toJson(),
          Item.of('kubejs:coruscating_ingot_3').toJson(),
        ],
        pressure: 4.9,
        results: [
            Item.of('kubejs:laputa_shard').toJson(),
        ]
    })

    event.recipes.createMixing(
        Fluid.of('kubejs:murky_water', 1000),
        [Fluid.of('kubejs:waste', 1000), Item.of('64x kubejs:poo'), Fluid.of('kubejs:piss', 1000)]
    ) 

    event.shaped('kubejs:spatial_pylon', 
    [
          "ABA",
          "CDE",
          "AFA"
        ],
        {
          "A": {
            "item": "minecraft:white_concrete"
          },
          "B": {
            "item": "rftoolsutility:screen"
          },
          "C": {
            "item": "refinedstorage:security_manager"
          },
          "D": {
            "item": "extrastorage:storagepart_4096k"
          },
          "E": {
            "item": "minecraft:blue_ice"
          },
          "F": {
            "item": "minecraft:spyglass"
          }
        },
    )

    event.shapeless(
        Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Selected:"ARTIFACT",Special:1b}'),
        Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}')
    )

    event.remove({output: 'industrialforegoing:infinity_nuke'})
    
    event.custom({
		type: "pneumaticcraft:pressure_chamber",
		inputs: [
		  Item.of('kubejs:hellfire_crystal').toJson(),
          {
			"type": "pneumaticcraft:stacked_item",
			"count": 64,
			"item": "minecraft:tnt"
		  },
          {
			"type": "pneumaticcraft:stacked_item",
			"count": 64,
			"item": "minecraft:tnt"
		  },
          {
			"type": "pneumaticcraft:stacked_item",
			"count": 64,
			"item": "minecraft:tnt"
		  },
		],
		pressure: 4.9,
		results: [
		  Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}').toJson(),
		]
	})

    event.recipes.createSequencedAssembly(
        'kubejs:chaos_mechanism',
        'kubejs:transcendent_mechanism',
        [
            event.recipes.createDeploying(
                'kubejs:transcendent_mechanism',
                ['kubejs:transcendent_mechanism', 'kubejs:murky_water_bucket']
            ),
            event.recipes.createDeploying(
                'kubejs:transcendent_mechanism',
                ['kubejs:transcendent_mechanism', 'kubejs:spatial_pylon']
            ),
            event.recipes.createDeploying(
                'kubejs:transcendent_mechanism',
                ['kubejs:transcendent_mechanism', 'kubejs:laputa_shard']
            ),
            event.recipes.createDeploying(
                'kubejs:transcendent_mechanism',
                ['kubejs:transcendent_mechanism', 'kubejs:fan']
            ),
            event.recipes.createDeploying(
                'kubejs:transcendent_mechanism',
                ['kubejs:transcendent_mechanism', Item.of('industrialforegoing:infinity_nuke', '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:1000000,FluidName:"biofuel"},Selected:"ARTIFACT",Special:1b}')]
            )
        ]
    ).transitionalItem('kubejs:transcendent_mechanism').loops(1)

})

onEvent('item.right_click', event => {
    if (event.item.id != "minecraft:glass_bottle") return
    event.server.runCommandSilent(`execute if entity @p[nbt={Dimension:"minecraft:the_end"}] run give ${event.player} kubejs:ender_air_bottle`)
    event.server.runCommandSilent(`execute if entity @p[nbt={Dimension:"minecraft:the_end"}] run clear ${event.player} minecraft:glass_bottle 1`)
})



onEvent('item.tags', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    // event.get('forge:cobblestone').add('minecraft:diamond_ore')

    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})