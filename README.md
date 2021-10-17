# Atestat Informatica

Cu totii stim despre faimosul algoritm _Dijkstra_ care gaseste cea mai scurta distanta dintre doua puncte ale unui graf prin folosirea unei structuri de date abstracte si anume [,,Cozii de prioritati''](https://en.wikipedia.org/wiki/Priority_queue). Un videoclip care explica foarte bine acest algoritm este cel de la Computerphile, linkul este [aici](https://www.youtube.com/watch?v=GazC3A4OQTE). Ei bine acest proiect reuseste sa ilustreze intr-un mod interactiv _gasirea celui mai scurt drum intre 2 puncte ale unui grafic_ cu mentionaria faptului ca graficul nostru este o matrice de _12 linii cu coloane generate dinamic de utilizator (intre 5 si 30)_ fiind prezente si noduri la care nu avem access sub forma unor _ziduri_. _Nodurile sunt elemente ale matricii_, iar _distanta intre ele este de valoare egala(1)_. 

#### Problema este simpla!
> Sa se gaseasca cel mai scurt drum din coltul _STANGA SUS_ pana la coltul din _DREAPTA JOS_ traversand labirintul nu avem voie sa folosim elementele de tip _wall_. 

Am rezolvat-o deci si vizualizat-o folosind Dijkstra si un alt algoritm mai elegant si optim ca acesta (A*). Alegerea algoritmului este a utilizatorului inainte de a genera matricea.


***
Ce este algoritmul A*?
---

Dupa cum am spus mai sus, un _Dijkstra mai optim_, in imaginea de mai jos, care reprezinta o vizualizare a algoritmului_ aflam de ce!

![A*](https://i.imgur.com/YjtIqZR.png)

Algoritmul _nu verifica partea matricei indicata de sagetile albastre_, deoarece se indeparteaza de punctul final. A* _incearca a urmarii sagetile rosii_ si deci sa isi gaseasca calea prin labirint folosindu-se de faptul ca stie unde este punctul de final si coordonatele punctului care il analizeaza. Pentru ca acest lucru sa fie indeplinit in spatiul 2D al matricei generate se foloseste de o _functie heuristica ,,Manhattan distance''_. Aceasta dustabta este data de functia prezenta in fisierul astar.js: 

```JavaScript
function heuristic(a, b){
    let d = Math.abs(a.x-b.x) + Math.abs(a.y - b.y)
    return d
}
```

Aceasta este apelata la fiecare calcul al valorii unui nod din graf vecin celui care este in calcul in prezent, fiecare nod din graf va fi suma _valorii de distanta normala parcursa (G)_ si _distanta heuristica (H)_ formand funcita (F) definita mai jos:

```JavaScript
neighbour.f = neighbour.h + neighbour.g;

// Unde h este definita in functie de algoritmul folosit, fiind prezenta in A* ea va fi functia prezentata mai sus, 
// deoarece Dijkstra nu se bazeaza pe heuristice, iar F = G + H, in algoritmul Dijkstra singura diferenta va fi 
// H = 0 --> F = G | Variabila choice care este analizata in if este defapt alegerea care o facem pentru algoritmul ales

 if (choice == 0){
  neighbour.h = heuristic(neighbour, endNode);
} else {
  neighbour.h = 0
}

```
Functia _G este incrementata cu 1 la fiecare departare in adancime_ a algoritmului de la nodul de start spre nodul final
***
### Demonstratie a aplicatiei
![Demo](https://user-images.githubusercontent.com/63779353/137626930-840d7a8b-1068-46c9-860e-2fb1b81a609b.gif)
