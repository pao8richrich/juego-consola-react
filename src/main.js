import {
    obtenerGlobo,
    obtenerEscudo,
    obtenerEspejo,
    obtenerEstaca,
    obtenerLinterna
} from './items';

import {
    lazy,
    unitornio,
    megastofeles,
    zombie,
    burlon
} from './niveles';

let numeroNivel,
    carisma,
    fuerza,
    inteligencia,
    belleza,
    vida,
    tijeras,
    globos,
    linternas,
    estacas,
    escudo;

const abrirCofre = () => {
    console.log('Encontraste un cofre... 🎁🛍');
    const items = [
        obtenerGlobo,
        obtenerEscudo,
        obtenerEspejo,
        obtenerEstaca,
        obtenerLinterna
    ];
    const item = items[Math.floor(Math.random() * items.length)];
    const resultado = item();
    if (resultado) {
        console.log(' con un ' + resultado + '!');
    } else {
        console.log(' pero estaba vacio! 💩');
    }
};

const niveles = [lazy, unitornio, megastofeles, zombie, burlon, abrirCofre];

const jugarNivel = () => {
    const nivel = niveles[Math.floor(Math.random() * niveles.length)];
    numeroNivel++;
    setTimeout(() => {
        console.log('Entrando al nivel ' + numeroNivel + '...');
    }, 1000);
    setTimeout(() => {
        nivel();
    }, 2500);
    setTimeout(() => {
        console.log(`
          - RESULTADOS DESPUES DEL NIVEL ${numeroNivel} -`);
    }, 3000);
    setTimeout(() => {
        console.log(`
          - ESTADISTICAS DE VIDA -
          carisma: ${carisma}
          fuerza: ${fuerza}
          inteligencia: ${inteligencia}
          belleza: ${belleza}
          vida total: ${vida}
          `);
    }, 5000);
    setTimeout(() => {
        console.log(`
          - INVENTARIO -
          tijeras: ${tijeras}
          globos: ${globos}
          linternas: ${linternas}
          estacas: ${estacas}
          escudo activado? ${escudo ? 'Si.' : 'No.'}
          `);
    }, 7000);
};


jugarNivel();