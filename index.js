import {heroesData} from './controllers/gameController.js'



//Dado de 1 a 100 inclusives
function dadoAttack (1, 100) {
    return Math.floor(math.random() * (100-0+1))
}

//Dado de 1 a 20 inclusives
function dadoTotalDamage (1, 20) {
    return Math.floor(math.random() * (20-0+1))
}

//Lanzar un dado entre 1 y 100 incusive
//Si el resultado es igual o menor que "combat", el ataque tiene EXITO
const attackResult = []

heroesData = powerstats.forEach(element => {
    if(element.combat <= dadoAttack)
        console.log("El ataque tiene exito")
        //Lanzar el ataque
})

//Si el resultado de 1D100 es menos o igual que block, se bloquea el ataque

const blockResult = []

let block = (powerstats.speed + powerstats.combat) / 2
blockResult = getAllHeroes.powerstats.forEach(element => {
    if(element.block >= dadoAttack)
        console.log("El bloqueo ha sido un exito")
})


function firstAttacker = powerstats.intelligence + powerstats.speed 