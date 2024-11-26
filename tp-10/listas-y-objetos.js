var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];
function ordenarPorApellido(listaDePersonas) {

    return listaDePersonas.sort((persona1, persona2) => {
        let apellido1 = persona1.apellido.toLowerCase();
        let apellido2 = persona2.apellido.toLowerCase();

        if (apellido1 < apellido2) {
            return -1;
        }
        if (apellido1 > apellido2) {
            return 1;
        }
        return 0;
    });

}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));
function soloNombres(listaDePersonas) {
    return listaDePersonas.map(persona => persona.nombre);
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

function promedioEdades(listaDePersonas) {
    let totalEdad = listaDePersonas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    return totalEdad / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

function soloMayoresDeEdad(listaDePersonas) {
    return listaDePersonas.filter(persona => persona.edad > 18);
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

function laPersonaMayor(listaDePersonas) {
    return listaDePersonas.reduce((mayor, persona) => 
        persona.edad > mayor.edad ? persona : mayor
    );
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));