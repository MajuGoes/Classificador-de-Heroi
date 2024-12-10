const nome = prompt("Digite o seu nome");
const experienciaXP = prompt("Digite sua quantidade de experiência em XP");
let nivel = '';

if(experienciaXP < 1000) {
    nivel = "Ferro";  
}else if(experienciaXP >= 1000 && experienciaXP < 2000) {
    nivel = "Bronze";
}else if(experienciaXP >= 2000 && experienciaXP < 5000) {
    nivel = "Prata";
}else if(experienciaXP >= 5000 && experienciaXP < 7000) {
    nivel = "Ouro";
}else if(experienciaXP >= 7000 && experienciaXP < 8000) {
    nivel = "Platina";
}else if(experienciaXP >= 8000 && experienciaXP < 9000) {
    nivel = "Ascendente";
}else if(experienciaXP >= 9000 && experienciaXP < 10000) {
    nivel = "Imortal";
}else{
    nivel = "Radiante";
}

alert(`O herói ${nome} está no nível ${nivel}`);