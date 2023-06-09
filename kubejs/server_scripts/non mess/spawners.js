onEvent('recipes', (event) => {

    const id_prefix = 'pintech:apotheosis/spawner_modifier/';
    const recipes = [
        {
            mainhand: { item: 'mekanism:basic_control_circuit' },
            stat_changes: [{ id: 'no_ai', value: true }],
            id: 'apotheosis:spawner/no_ai'
        },
        {
            mainhand: { item: 'mekanism:basic_control_circuit' },
            offhand: { item: 'minecraft:quartz' },
            stat_changes: [{ id: 'no_ai', value: false }],
            id: 'apotheosis:spawner/no_ai_inverted'
        },
        {
            mainhand: { item: 'meetyourfight:spectres_eye' },
            stat_changes: [{ id: 'ignore_players', value: true }],
            id: 'apotheosis:spawner/ignore_players'
        },
        {
            mainhand: { item: 'meetyourfight:spectres_eye' },
            stat_changes: [{ id: 'ignore_players', value: false }],
            id: 'apotheosis:spawner/ignore_players_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_intangible' },
            stat_changes: [{ id: 'ignore_conditions', value: true }],
            id: 'apotheosis:spawner/ignore_conditions'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_intangible' },
            stat_changes: [{ id: 'ignore_conditions', value: false }],
            id: 'apotheosis:spawner/ignore_conditions_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_shield' },
            stat_changes: [{ id: 'ignore_light', value: true }],
            id: 'apotheosis:spawner/ignore_light'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_shield' },
            stat_changes: [{ id: 'ignore_light', value: false }],
            id: 'apotheosis:spawner/ignore_light_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_linger' },
            stat_changes: [
                {
                    id: 'max_nearby_entities',
                    value: 2,
                    min: -1,
                    max: 10
                }
            ],
            id: 'apotheosis:spawner/max_nearby'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_linger' },
            
            stat_changes: [
                {
                    id: 'max_nearby_entities',
                    value: -2,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/max_nearby_inverted'
        },
        {
            mainhand: { item: 'mekanism:upgrade_speed' },
            stat_changes: [
                {
                    id: 'min_delay',
                    value: -10,
                    min: 80,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/min_delay'
        },
        {
            mainhand: { item: 'mekanism:upgrade_speed' },
            offhand: { item: 'minecraft:quartz' },
            stat_changes: [
                {
                    id: 'min_delay',
                    value: 10,
                    min: -1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/min_delay_inverted'
        },
        {
            mainhand: { item: 'thermal:machine_speed_augment' },
            stat_changes: [
                {
                    id: 'max_delay',
                    value: -10,
                    min: 160,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/max_delay'
        },
        {
            mainhand: { item: 'thermal:machine_speed_augment' },
            offhand: { item: 'minecraft:quartz' },
            stat_changes: [
                {
                    id: 'max_delay',
                    value: 10,
                    min: -1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/max_delay_inverted'
        },
        {
            mainhand: { item: 'thermal:lumium_ingot' },
            stat_changes: [
                {
                    id: 'spawn_count',
                    value: 1,
                    min: -1,
                    max: 5
                }
            ],
            id: 'apotheosis:spawner/spawn_count'
        },
        {
            mainhand: { item: 'thermal:lumium_ingot' },
            offhand: { item: 'minecraft:quartz' },
            stat_changes: [
                {
                    id: 'spawn_count',
                    value: -1,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/spawn_count_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:ritual_scrying' },
            stat_changes: [
                {
                    id: 'req_player_range',
                    value: 2,
                    min: -1,
                    max: 50
                }
            ],
            id: 'apotheosis:spawner/player_range'
        },
        {
            mainhand: { item: 'ars_nouveau:ritual_scrying' },
            stat_changes: [
                {
                    id: 'req_player_range',
                    value: -2,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/player_range_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_aoe' },
            stat_changes: [
                {
                    id: 'spawn_range',
                    value: 1,
                    min: -1,
                    max: 32
                }
            ],
            id: 'apotheosis:spawner/spawn_range'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_aoe' },
            stat_changes: [
                {
                    id: 'spawn_range',
                    value: -1,
                    min: 1,
                    max: -1
                }
            ],
            id: 'apotheosis:spawner/spawn_range_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_sensitive' },
            stat_changes: [
                {
                    id: 'redstone_control',
                    value: true
                }
            ],
            id: 'apotheosis:spawner/redstone_control'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_sensitive' },
            stat_changes: [
                {
                    id: 'redstone_control',
                    value: false
                }
            ],
            id: 'apotheosis:spawner/redstone_control_inverted'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_dampen' },
            stat_changes: [
                {
                    id: 'silent',
                    value: true
                }
            ],
            id: 'apotheosis:spawner/silent'
        },
        {
            mainhand: { item: 'ars_nouveau:glyph_dampen' },
            stat_changes: [
                {
                    id: 'silent',
                    value: false
                }
            ],
            id: 'apotheosis:spawner/silent_inverted'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'apotheosis:spawner_modifier';
        recipe.conditions = [{ type: 'apotheosis:module', module: 'spawner' }];
        event.custom(recipe).id(recipe.id);
    });
});