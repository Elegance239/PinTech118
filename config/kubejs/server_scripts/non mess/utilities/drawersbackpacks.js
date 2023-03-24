onEvent('recipes', event => {
    let SD = (id) => 'storagedrawers:'+id
    let SB = (id) => 'sophisticatedbackpacks:'+id
    event.shaped(SD('obsidian_storage_upgrade'),
    [
        'SCS',
        'OUO',
        'SCS',
    ],
    {
        S:'minecraft:stick',
        C:'#forge:chests',
        O:'minecraft:obsidian',
        U:SD('upgrade_template'),
    })

    event.shaped(SD('iron_storage_upgrade'),
    [
        'TST',
        'IOI',
        'TST',
    ],
    {
        S:'thermal:steel_plate',
        T:'thermal:tin_ingot',
        I:'thermal:iron_plate',
        O:SD('obsidian_storage_upgrade'),
    })

    event.shaped(SD('gold_storage_upgrade'),
    [
        'TST',
        'IOI',
        'TST',
    ],
    {
        S:'thermal:invar_plate',
        T:'pneumaticcraft:ingot_iron_compressed',
        I:'thermal:electrum_plate',
        O:SD('iron_storage_upgrade'),
    })

    event.shaped(SD('diamond_storage_upgrade'),
    [
        'TST',
        'IOI',
        'TST',
    ],
    {
        S:'thermal:signalum_plate',
        I:'mekanism:enriched_diamond',
        T:'kubejs:aqueous_ingot',
        O:SD('gold_storage_upgrade'),
    })

    event.shaped(SD('emerald_storage_upgrade'),
    [
        'TST',
        'IOI',
        'TST',
    ],
    {
        S:'immersiveengineering:plate_uranium',
        I:'mekanism:hdpe_sheet',
        T:'mekanism:alloy_reinforced',
        O:SD('diamond_storage_upgrade'),
    })

    event.shaped(SD('upgrade_template'),
    [
        'SPS',
        'PDP',
        'SPS',
    ],
    {
        S:'minecraft:stick',
        P:'#minecraft:planks',
        D:'#storagedrawers:drawers',
    })

    event.shaped(SB('iron_backpack'),
    [
        'ITI',
        'TBT',
        'ISI',
    ],
    {
        S:SD('iron_storage_upgrade'),
        I:'thermal:iron_plate',
        T:'immersiveengineering:hemp_fabric',
        B:SB('backpack'),
    })

    event.shaped(SB('gold_backpack'),
    [
        'ITI',
        'TBT',
        'ISI',
    ],
    {
        S:SD('gold_storage_upgrade'),
        I:'thermal:electrum_plate',
        T:'thermal:hazmat_fabric',
        B:SB('iron_backpack'),
    })
    
    event.shaped(SB('diamond_backpack'),
    [
        'ITI',
        'TBT',
        'ISI',
    ],
    {
        S:SD('diamond_storage_upgrade'),
        I:'mekanism:enriched_diamond',
        T:'thermal:diving_fabric',
        B:SB('gold_backpack'),
    })

    event.shaped(SB('netherite_backpack'),
    [
        'INI',
        'TBT',
        'ISI',
    ],
    {
        S:SD('emerald_storage_upgrade'),
        I:'mekanism:alloy_reinforced',
        T:'mekanism:hdpe_sheet',
        B:SB('diamond_backpack'),
        N:'minecraft:netherite_block',
    })

    event.shaped(('thermal:hazmat_fabric'),
    [
        'TCT',
        'CLC',
        'TCT',
    ],
    {
        T:'immersiveengineering:hemp_fabric',
        C:'thermal:cured_rubber',
        L:'thermal:lead_ingot',

    })

    event.shaped(('thermal:diving_fabric'),
    [
        'TCT',
        'CLC',
        'TCT',
    ],
    {
        T:'thermal:hazmat_fabric',
        C:'kubejs:aqueous_ingot',
        L:'thermal:signalum_ingot',

    })
})