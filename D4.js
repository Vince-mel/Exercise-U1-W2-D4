/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function(l1, l2) {
   return l1*l2;
}

console.log("l'area del rettangolo di lati 20 e 10 è :",area(20,10))



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function(n1,n2) {
     if (n1===n2)  {
        return result= (n1+n2)*3;
         } else {
            return result=n1+n2;
         }
  
}

console.log(crazySum(10,10))
console.log(crazySum(10,30))




/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function(X) {
    
    if ( X > 19) {
        return (Math.abs(X-19)*3);
    }   else {
        return Math.abs(X-19);
    }
}   
    
console.log(crazyDiff(10))
console.log(crazyDiff(20))
 


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (y) {
    if (y>20<=100) {
        return true;
    } else if (y=400){
        return true;
    } else {
        return false;
    }
}

console.log(boundary(50))
console.log(boundary(400))
console.log(boundary(19))






/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (string) {
    if (string.startsWith("EPICODE")) {
      return string;
    } else {
      return "EPICODE" + string;
    }
  }
  
console.log(epify("CIAOO!! "))
console.log(epify("EPICODE CIAOO!!"))







/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (num){
    if (num%3===0) {
        return ("è un multiplo di 3");
    } else if (num%7===0) {
        return ("è un multiplo di 7");
    } else {
        return ("non è un multiplo di 3 o 7");
    }

}

console.log(check3and7(9))
console.log(check3and7(21))
console.log(check3and7(8))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (string) {
    let str = string.split("");
    let reverse = str.reverse("");
    let reverse2 = reverse.join("");
    return reverse2 

}
console.log(reverseString("CANE"))


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (string) {
    return string.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(upperFirst("il cane abbaia"))




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (string) {
    return string.slice(1, -1);
}
console.log(cutString("CIAO EPICODE"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (num) {
    let result = [];
  for (let i = 0; i < num; i++) {
    result.push(Math.floor(Math.random() * 11));
  }
  return result;
}
console.log(giveMeRandom(40))