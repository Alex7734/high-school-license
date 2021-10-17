# Atestat

Cu totii stim despre faimosul algoritm _Dijkstra_ care gaseste cea mai scurta distanta dintre doua puncte ale unui graf prin 


***
Ce este algoritmul A*?
---

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
