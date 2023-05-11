onEvent('mekanism.gas.registry', event => {
	event.create("calcium_hydroxide").color(0xEAEBEB)
    event.create("hydrogen_cyanide").color(0xEAEBEB)
    event.create("calcium_cyanide").color(0xE5F9F9)
    event.create("chromatic_gas").color(0x5D2363)
    event.create("chromoxy_gas").color(0x9A789D)
    event.create("incandescent_gas").color(0xCECECE)
    event.create("glowing_gas").color(0xFED061)
    event.create("radiant_gas").color(0xFDFCFF)
    event.create("gaseous_aluminum").color(0xCCCCCC)
    event.create("gaseous_impure_alumina").color(0xada59c)
})

onEvent('mekanism.infuse_type.registry', event => {

    event.create("poo").color(0x4E3612)
    event.create("graphene").color(0x111111)
})