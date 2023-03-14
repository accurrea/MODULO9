function funcion1(valor){
    if(typeof valor === "number"){
        return valor * 2
    }
    throw new Error("Ingrese un numero")
}

const funcion2 = valor=>{
    return valor * 2
}
// console.log(funcion2(2));
// console.log(funcion1(41));

let numero = "ee"
try{
    console.log("Esta funcionando bien");
    const res = funcion2(numero)
    console.log(res);

}catch(e){
    console.error(`${e}`)  

}
console.log("buenas ");
