class ejercicios{
  //Ejercicio 1, Sumar dos numeros siempre cuando el primero sea mayor al segundo
    suma(){
      //Definicion de variables 
       let num1=15
       let num2=5
       let suma=0
       if(num1 > num2){
        suma=num1+num2
       } 
       else{
        console.log('num1 no es mayor')
       }
        console.log(`la suma de ${num1} y ${num2} es ${suma}`)
    }   
    //Ejercicio 2, Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
    Operaciones(){
      let num1=10
      let num2=5
      let suma=0
      let resta=0
      let multi=1
      let divi
      let reci
      suma=num1+num2
      resta=num1-num2
      multi=num1*num2
      divi=num1/num2
      reci=num1%num2
      console.log(`La suma de ${num1} y ${num2} es ${suma}`);
      console.log(`La resta de ${num1} y ${num2} es ${resta}`);
      console.log(`La multi de ${num1} y ${num2} es ${multi}`);
      console.log(`La divi de ${num1} y ${num2} es ${divi}`);
      console.log(`La reci de ${num1} y ${num2} es ${reci}`);  
    }
    //Ejercicio 3, Presentar el mayor de dos numeros
  Mayor(){
    // definicion de variables 
    let num1=20
    let num2=10
    if (num1 > num2) {
        console.log("El número mayor es: " + num1);
      } 
      else {
        console.log("El número mayor es: " + num2);
      }
  }
    
  //Ejercicio 4, Dado un nombre presentarlo 
  Nombre(){
    //definicion de variables 
    let nombre= "Maria"
    console.log(`El nombre es ` + nombre);
  } 
  //Ejercicio 5, Dado un valor de compra presentar el total considerando un 12% de iva
  Valor(){
    let valor=30
    let iva=0.12
    let total=0
    total=valor+(valor*iva)
    console.log(`el total es ${total}`);
  }
  //Ejercicio 9, Dados dos nombres indicar si son iguales o diferentes
  Nombresiguales(){
    let Nombre1="Jose"
    let Nombre2="Juan"
    if(Nombre1==Nombre2){
      console.log(`${Nombre1} y ${Nombre2} son nombres iguales iguales`);
    }
    else{
      console.log(`${Nombre1} y ${Nombre2} son nombres diferentes`);
    }
 

  }
  //Ejercicio 22, Dado un numero invertirlo
  Numero_invertido(){
    let numero=1234
    let invertido = parseInt(numero.toString().split().reverse().join())
    console.log(`El numero invertido de ${numero} es ${invertido}`);

  }
  
}
let suma1=new ejercicios()
console.warn(`ejercicio 1`);
suma1.suma()

let operacion1=new ejercicios()
console.warn(`ejercicio 2`);
operacion1.Operaciones()


let mayor1=new ejercicios()
console.warn(`ejercicio 3`);
mayor1.Mayor()

let nombre1=new ejercicios()
console.warn(`ejercicio 4`);
nombre1.Nombre()

let valor1= new ejercicios()
console.warn(`ejercicio 5`);
valor1.Valor()

let nombresiguales1=new ejercicios()
console.warn(`ejercicio 9`);
nombresiguales1.Nombresiguales()

let invertido=new ejercicios()
console.warn(`ejercicio 22`);
invertido.Numero_invertido()



class Conciclo{
//Ejercicio 6, Presentar 5 veces un nombre
Nomb(){
  let nomb= "Anthony"
  let c=0
  for( c=0; c< 5; c++){
    console.log(`${nomb}`);
  }
}
//Ejercicio 7, Presentar los numeros multiplos de 3 del 3 al 21
Multiplos3(){
  let i=3
  for(i=3;i<=21;i++){
    if(i % 3 == 0){
      console.log(`${i}`);
    }
  }
}
//Ejercicio 8, Presentar los numeros multiplos de 3 del 21 al 3
Multi3(){
  let i=21
  for(i=21;i>=3;i=i-3){
    if(i % 3 == 0){
      console.log(`${i}`);
    }
  }
}

//Ejercicio 10,  Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
Menor_caracter(){
  let arreglo=['123',`23`,'2345','675','890','756','123456','1234678','23','9',]
  let i=0
  for(i=0; i < 10; i++){
    if(arreglo[i].length <5){
      console.log(`El elemento ${arreglo[i]} tiene menos de 5 caracteres`);

    }

  }
}

//Ejercicio 11, Dado un arreglo presentar sus elementos
Arreglo(){
  let i=0
  let numeros=[10,20,5,6,7]
  let longitud=numeros.length
  while(i < longitud){
    console.log(`${numeros[i]}`);
    i=i+1
    }
  }
// Ejercicio 12, Dado un arreglo de numeros presentar los menores a 10
Numeros_menores(){
  let i=0
  let num=[10,20,4,5,7,11] 
  let longitud= num.length
  while(i< longitud){
    if(num[i] < 10){
      console.log(`${num[i]}`);
    }
    i=i+1
  }
}
//Ejercicio 13, Dado un arreglo de numeros presentar los impares y al final la suma de los pare
Pares_impares(){
  let i=0
  let suma=0
  let number=[10,20,5,6,9,7,4]
  let longitud=number.length
  while(i < longitud){
    if(number[i] % 2 !=0){
      console.log(`${number[i]} es impar `);
    }
    else {
      suma=suma+number[i]
    }
    i=i+1
    }
    console.log(`La suma de los numeros pares es ${suma}`);
  }
  //Ejercicio 14, Presentar el primero el medio y el ultimo valor de un arreglo
  Primero_medio_ultimo(){
    let i=0
    let num=[20,11,23,25,45,3,12,9,3,7]
    let primero=num[0]
    let medio= num[num.length/2]
    let ultimo=num[num.length-1]
    for(i=0;i<num.length;i++){
      if(i === 0){
        console.log(`El primero es: ${primero}`);
      }
      else if(i === num.length/2){
        console.log(`El de en medio es: ${medio}`);
      }
      else if(i === num.length-1){
        console.log(`El ultimo es: ${ultimo}`);
      }
      }
    }
    //Ejercicio 15, Calcular el vuelto de un a compra dado el costo y el pago
    Vuelto_de_una_compra(){
      let pago=50
      let costo=30
      let vuelto=pago-costo
      console.log(`El vuelto es ${vuelto}`);
    }
    //Ejercicio 16, Presentar la tabla de multiplicar de cualquier numero del 1 al 12
    Tabla_de_multiplicar(){
      let tabla=6
      let i=1
      for(i=1; i<=12;i++){
        console.log(`${tabla} * ${i} = ${tabla*i}`);
      }
    }
    //Ejercicio 17, Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
    Multiplicacion_por_suma(){
      let num1=5
      let num2=3
      let c=0
      let total=0
      for(c=1 ; c<=num2 ; c++){
        total=total+num1
      }
      console.log(`el resultado ${total}`);
    }
    //Ejercicio 18, Realizar la division de dos numeros por medio de restas sucesivas
    Division_por_resta(){
      let num1=15
      let num2=3
      let c=0
      while(num1>=num2){
        num1=num1-num2
        c=c+1
      }
      console.log(`el cociente de la operacion es:${c}`);
      console.log(`el resto de la operacion es:${num1}`);
    }
    //Ejercicio 19, Calcular el factorial de un numero
    Factorial(){
      let num= 5
      let factorial=1
      let i=0
     
      for(i=1; i<= num;i++){
        factorial=factorial*i
        console.log(`${num} * ${i} = ${factorial}`);
    }
    console.log(`El factorial de ${num} es: ${factorial}`);
  }
  //Ejercicio 20, Calcular el exponente de un numero
  Exponente_numero(){
    let numero=6
    let exp=2
    let i=0
    let multi=1
  for(i=0; i< exp ; i++){
    multi=multi*numero
  }
  console.log(`El exponente de ${numero} es ${multi}`);
  }
  //Ejercicio 21, Calcular la serie de fibonacci dado un numero
  Fibonacci(){
    let numero=8
    let i=0
    let fibonacci=[]
    fibonacci[0]=0
    fibonacci[1]=1
    for(i=2 ; i< numero;i++){
      fibonacci[i]=fibonacci[i-1] + fibonacci[i-2]
    }
    console.log(`La serie de fibonacci ${numero} es ${fibonacci}`);
  }

  //Ejercicio 23, Presentar los divisores de un numero
  Divisores(){
    let i=1
    let num=8
    let divisores=[]
    for(i=1 ; i<= num; i++){
      if(num % i == 0){
        divisores.push(i)
      }
    }
    console.log(`Los divisores de ${num} son ${divisores}`);
    
  }
  //Ejercicio 24, Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero)
  Numero_perfecto(){
    let numero=6
    let suma=0 
    let i=0
    let es_perfecto=true
    for(i=1; i < numero ; i++){
      if(numero % i ==0){
        suma=suma+i
        es_perfecto=true
        
      }
      if(es_perfecto){
        console.log(` El ${numero} es perfeto`);
      }
      else{
        console.log(`El ${numero} no es perfecto`);
      }

    }

  }
  //Ejercicio 25, Verfificar si un numero es primo o no(Primo cuando solo es divsivible para 1 y el propio numero, es decir no tenga divisores)
  Numero_primo(){
    let num=10
    let i=0
    let esprimo=true
    for(i=2; i < num; i++){
      if(num % i===0){
        esprimo=false
      }
    }
    if(esprimo){
      console.log(`El ${num} si es primo `);
    }
    else{
      console.log(`El ${num} no es primo `);
    }
    
  }


  }


  

  
  
  








let nomb1=new Conciclo()
console.warn(`ejercicio 6`);
nomb1.Nomb()

let multiplos1=new Conciclo()
console.warn(`ejercicio 7`);
multiplos1.Multiplos3()

let multi1=new Conciclo()
console.warn(`ejercicio 8`);
multi1.Multi3()

let caracteres1=new Conciclo()
console.warn(`ejercicio 10`);
caracteres1.Menor_caracter()

let arreglo1=new Conciclo()
console.warn(`ejercicio 11`);
arreglo1.Arreglo()

let Numerosmenores1=new Conciclo()
console.warn(`ejercicio 12`);
Numerosmenores1.Numeros_menores()

let Paresimpares1=new Conciclo()
console.warn(`ejercicio 13`);
Paresimpares1.Pares_impares()

let Primeromedioultimo1=new Conciclo()
console.warn(`ejercicio 14`)
Primeromedioultimo1.Primero_medio_ultimo()

let Vuelto_de_una_compra1=new Conciclo()
console.warn(`ejercicio 15`)
Vuelto_de_una_compra1.Vuelto_de_una_compra()

let Tabla_de_multiplicar1=new Conciclo()
console.warn(`ejercicio 16`)
Tabla_de_multiplicar1.Tabla_de_multiplicar()

let Multiplicacion_por_suma1=new Conciclo()
console.warn(`ejercicio 17`)
Multiplicacion_por_suma1.Multiplicacion_por_suma()

let Division_por_resta1=new Conciclo()
console.warn(`ejercicio 18`)
Division_por_resta1.Division_por_resta()

let factorial1=new Conciclo()
console.warn(`ejercicio 19`)
factorial1.Factorial()

let exponente1=new Conciclo()
console.warn(`ejercicio 20`)
exponente1.Exponente_numero()

let fibonacci1=new Conciclo()
console.warn(`ejercicio 21`)
fibonacci1.Fibonacci()

let divisores1=new Conciclo()
console.warn(`ejercicio 23`)
divisores1.Divisores()

let perfecto1=new Conciclo()
console.warn(`ejercicio 24`)
perfecto1.Numero_perfecto()

let primo1=new Conciclo()
console.warn(`ejercicio 25`)
primo1.Numero_primo()






      
    


