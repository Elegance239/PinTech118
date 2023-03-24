// priority: 10

const categories = [
    {
        id: 'kubejs:ores',
        category_item_id: 'minecraft:paper',
        title: 'Ores',
        description: 'Learn about how to obtain ores and their information.',
        items: ['mekanism:ingot_osmium',]
    },
];

onEvent('ponder.tag', (event) => {
    categories.forEach((category) => {
        event.createTag(id, category_item_id, title, description, [items])
    });
});