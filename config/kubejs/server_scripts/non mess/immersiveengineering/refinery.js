onEvent('recipes', event => {
	// Change recipes here
	
	
	event.custom({
		"type":"immersiveengineering:refinery",
        "energy":500,
        "input0":{"amount":10,"tag":"forge:hydrogen"},
        "input1":{"amount":10,"tag":"forge:nitrogen"},
        "result":{"amount":10,"fluid":"kubejs:cryogenic_coolant"}
        //"type":"immersiveengineering:refinery","catalyst":{"tag":"forge:plates/silver"},"energy":120,"input0":{"amount":8,"tag":"forge:ethanol"},"result":{"amount":8,"fluid":"immersiveengineering:acetaldehyde"}
    })


})