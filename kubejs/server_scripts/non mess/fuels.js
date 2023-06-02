onEvent('recipes', (event) => {

    var multiplier = 1;
    var data = {
        recipes: [
            { input: 'pneumaticcraft:diesel', energy: 1000000 },
            { input: 'immersivepetroleum:diesel', energy: 1000000 },
            { input: 'pneumaticcraft:biodiesel', energy: 1000000 },
            { input: 'pneumaticcraft:kerosene', energy: 1100000 },
            { input: 'pneumaticcraft:gasoline', energy: 1500000 },
            { input: 'immersivepetroleum:gasoline', energy: 1500000 },
            { input: 'pneumaticcraft:lpg', energy: 1800000 },
            { input: 'pneumaticcraft:ethanol', energy: 400000 },
            { input: 'immersiveengineering:ethanol', energy: 400000 },
            { input: 'kubejs:quasi_antientropic_fuel', energy: 200000000 },
            
        ]
    };
    data.recipes.forEach((recipe) => {
            event.recipes.thermal.compression_fuel(Fluid.of(recipe.input, 1000)).energy(recipe.energy * multiplier)
            event.custom({
                
                    "type": "advgenerators:liquid_fuel",
                    "fuel": {
                      "fluid": recipe.input
                    },
                    "fePerMb": recipe.energy/1000
            })

    });
});