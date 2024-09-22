let nome = "Robert";
let xp = 1000;

function classificarHeroi(xpAtual) {
  if (xpAtual <= 1000) {
    return "Ferro";
  } else if (xpAtual <= 2000) {
    return "Bronze";
  } else if (xpAtual <= 5000) {
    return "Prata";
  } else if (xpAtual <= 7000) {
    return "Ouro";
  } else if (xpAtual <= 8000) {
    return "Platina";
  } else if (xpAtual <= 9000) {
    return "Ascendente";
  } else if (xpAtual <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

let nivel = classificarHeroi(xp);
console.log(
  `O Herói de nome: ${nome} está no nível de: ${nivel} com xp de: ${xp}!`
);
