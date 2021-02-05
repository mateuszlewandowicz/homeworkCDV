/* Zadanie 1
---
Napisz funkcję która dla przekazanego argumentu zwróci typ danych. 
Dla obiektów dodatkowo powinna zostać zwrócona nazwa klasy.

Przykład:
Dla wartości `1` zwracana wartość to `"number"`
Dla wartości `new Date()` zwracana wartość to `"object Date"`
Dla wartości `fetch('https://api.github.com/users/juszczak')` zwracana wartość to `"object Promise"`*/

/*let typeData;

let dataSearch = typeData =>{
a = typeof typeData;
console.log(`Typ dlanych dla tego argumewntu to: ${a}`);

};
dataSearch(2);*/




/*Zadanie 2
---
Napisz funkcję która odwróci kolejność cyfr dla przekazanej w argumencie liczby.

Przykład:
Dla liczby `32243` zwracana wartość to `34223`


let x;

let twist = x => {
let array = x.split('');
let y = array.reverse();
console.log(` Dla liczby ${x} zwracana wartość to: ${y.join('')}`);
};

twist('123456789');

*/





/*Zadanie 3
---
Napisz funkcję obliczającą Liczbę Trójkątną* o numerze przekazanym jako argument.

Przykład:
Dla wartości `3` zwracana wartość to `6`
Dla wartości `6` zwracna wartość to `21`

Wersja zaawansowana
---
Funkcja powinna obliczać Liczbę Czworościenną.

Przykład:
Dla wartości `3` zwracna wartość to `10`
Dla wartości `8` zwracna wartość to `120`

> *[Liczba trójkątna](https://pl.wikipedia.org/wiki/Liczba_tr%C3%B3jk%C4%85tna)
> *[Liczby czworościenne](https://pl.wikipedia.org/wiki/Liczby_czworo%C5%9Bcienne)

let x = prompt('Podaj wartość:');
let enta;

let trojkat = x =>{
let y = Number(x);
enta = (y*(y + 1));
console.log(`Dla wartość ${x} zwracana wartość to ${enta/2}`)
};
trojkat(x);


let x = prompt('Podaj wartość:');
let enta;

let czworo = x =>{
let y = Number(x);
enta = (y*(y + 1)*(y + 2));
console.log(`Dla wartość ${x} zwracana wartość to ${enta/6}`)
};
czworo(x);

*/




/*Zadanie 4
---
Napisz funkcję która dla przekazanego w argumencie wyrazu zwróci tablicę wszystkich możliwych permutacji* liter.

Przykład:
Dla tekstu `DOG` zwracana wartość to `['DOG', 'ODG', 'GDO', 'DGO', 'OGD', 'GOD']`

> *[Permutacja](https://pl.wikipedia.org/wiki/Permutacja)


let findPermutations = (string) => {
  if (!string || typeof string !== "string"){
    return "Podaj wartość"
  } else if (string.length < 2 ){
    return string
  }

  let permutationsArray = [] 
   
  for (let i = 0; i < string.length; i++){
    let char = string[i]

    if (string.indexOf(char) != i)
    continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  return permutationsArray
}

findPermutations('DOG');

*/


/*

https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2


*/


/*Zadanie 5
---
Napisz funkcje pozwalające zakodować oraz odkodować wiadomości Szyfrem Cezara*.

> *[Szyfr Cezara](https://pl.wikipedia.org/wiki/Szyfr_Cezara)


var alfabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//sprawdzenie:
for (x in alfabet) document.writeln(x);
document.write("index to typ: "+ typeof x+" !<br><br>");  

//Szyfrujemy i odszyfrowujemy:
function koduj(tekst, przesun) {
var kod="";
for (x in tekst) {
  for (y in alfabet) {
    if (tekst.charAt(x)==alfabet.charAt(y)) {
	    indeks=(Number(y)+przesun)%26; 
    
        kod+=alfabet.charAt(indeks);
	}
  }
}
document.write(kod+"<br>");  
}
//sprawdzamy czy działa:

koduj('MATEUSZ', 4);

*/





/*Zadanie 6
---
Napisz funkcję która oblicza minimalną liczbę kroków wymaganych rozwiązania problemu Wież Hanoi*.

> *[Wieże Hanoi](https://pl.wikipedia.org/wiki/Wie%C5%BCe_Hanoi)


let x = prompt('Ilość krążków:');
let enta;

let hanoi = x =>{
let y = Number(x);
enta = (2**y)-1;
console.log(`Dla ilości krążków: ${x} minimalna liczba kroków to: ${enta}`)
};
hanoi(x);



*/







/*Zadanie 7
---

Napisz funkcję `flatten` która dla przekazanej tablicy tablic zwróci tablicę składającą się 
z elementów tablic wewnętrznych.

Przykład:
Dla tablicy `[[1, 2], [3, 4]]` zwracana wartość to `[1, 2, 3, 4]`


Wersja zaawansowana:
---

Dodaj obsługę dowolnego zagnieżdżenia tablic.

Przykład:
Dla tablicy `[1, [2], [[3, 4], [5]]]` zwracana wartość to `[1, 2, 3, 4, 5]`

let alpha = [1, 2, 3];
let beta = [9, 8, 7];

let flatten = (alpha, beta) =>{
let newflatten = alpha.concat(beta);
console.log(` Połączona tablica to: ${newflatten}`);

};
flatten(alpha, beta);

*/



