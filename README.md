# Atestatul este live!

https://atestat-3921a.web.app/

## Problema 
> Se da un labirint de 12 linii si n coloane (4<n<31), n este ales dinamic. Sa se gaseasca cel mai scurt drum din coltul _STANGA SUS_ pana la coltul din _DREAPTA JOS_ al labirintului. Traversand labirintul nu avem voie sa folosim elementele de tip _wall_. 

## Rezolvare
> Am folosit algoritmul Dijkstra si A* pentru rezolvarea propriu-zisa a problemei din punct de vedere algoritmic. Vizual, elemente de CSS si Javascript vor fi folosite pentru a ilustra _nodurille verificate in timp real_ si la final _cel mai scurt drum dintre cele doua puncte alese_.

## Elemente folosite pentru realizarea proiectului
* Algoritmi si structuri de date
  * Cautarea informata
  * [Dijkstra](https://ro.wikipedia.org/wiki/Algoritmul_lui_Dijkstra) si [A*](https://en.wikipedia.org/wiki/A*_search_algorithm)
  * [Coada prioritara](https://en.wikipedia.org/wiki/Priority_queue)
  * [Functii euristice](http://software.ucv.ro/~cbadica/ai/cap6.pdf)
  * Matricea
  * Vectorul de aparitii
* Limbaje de programare, estetica, hosting si version control
  * Javascript [ES6](https://www.w3schools.com/js/js_es6.asp)
  * HTML & CSS
  * [Firebase](https://en.wikipedia.org/wiki/Firebase)
  * [Git](https://ro.wikipedia.org/wiki/Git)
  * [Node Package Manager (NPM)](https://en.wikipedia.org/wiki/Npm_(software))
* Librarii folosite
  * [React JS](https://reactjs.org/)
  * Firebase Github Actions
  * NPM
* Notiuni folosite pentru implementarea proiectului
  * [Programare functionala](https://ro.wikipedia.org/wiki/Programare_func%C8%9Bional%C4%83) (React Hooks, algoritmii de cautare)
  * [Programare Obiect-Orientata](https://ro.wikipedia.org/wiki/Programare_orientat%C4%83_pe_obiecte) (Componentele React)
  * Programare [ASYNC](https://en.wikipedia.org/wiki/Asynchrony_(computer_programming))-ronista (update la starea cautarii automata fara nevoia unui refresh)
  * Optimizarea algoritmilor prin folosirea tehnicii de informare 
  * Hosting folosind o baza de date [NoSQL](https://en.wikipedia.org/wiki/NoSQL) (Firebase)


# Scopul proiectului si ideea 

Motivul pentru care am ales aceasta tema este interesul meu in algormiti optimi si pentru a vedea in timp real diferenta dintre un algoritm de cautare informat si unul normal.
Lucrurile care se pot gasii pe interent despre aceste algorimuri aplicate pe grafuri sunt vaste si interesante, avand aplicatii in viata de zi cu zi cum ar fi Apple si Google Maps. Cu totii stim despre faimosul algoritm _Dijkstra_ care gaseste cea mai scurta distanta dintre doua puncte ale unui graf prin folosirea unei structuri de date abstracte si anume ,,Cozii de prioritati''. Un videoclip care explica foarte bine acest algoritm este cel de la Computerphile, linkul este [aici](https://www.youtube.com/watch?v=GazC3A4OQTE). Am incercat atunci si eu sa explic intr-un mod vizual cum se cauta cel mai scurt drum dintre doua puncte intr-un graf.

Acest proiect reuseste sa ilustreze intr-un mod interactiv _gasirea celui mai scurt drum intre 2 puncte ale unui graf_ cu mentionaria faptului ca graful nostru este o matrice de _12 linii cu coloane generate dinamic de utilizator (intre 5 si 30)_ fiind prezente si noduri la care nu avem access sub forma unor _ziduri_. _Nodurile sunt elemente ale matricii_, iar _costul traversarii intre nodurile vecine este de valoare egala(1)_. Am vizualizat gasirea celui mai scurt drum prin aplicarea algoritmului Dijkstra si al unui alt algoritm mai elegant si optim ca acesta, A*. 

### Cum folosim vizualizatorul?
Alegerea algoritmului este a utilizatorului inainte de a genera labirintul se va selecta **0 pentru A*** sau **1 pentru Dijkstra** dupa care se va apasa butonul **Submit**. Doar dupa aceea putem genera labirintul **alegand numarul de coloane** si apasand dupa butonul **GENEREAZA**. Vizualizarea va incepe dupa apasarea butonului **Vizualizeaza** si daca doriti as introduceti date noi apasati mai intai butonul **Refresh**.

__Daca generearea initiala nu functioneaza **continuati sa incercati**, acest lucru este datorat modului de implementare ales, nu vor fi acceptate labirinte in care nu exista o legatura directa intre cele 2 puncte astfel programul da refresh paginii web__ 


***
Ce este algoritmul A*?
---
A * este un algoritm de parcurgere a graficului si cautare de cai, care este adesea utilizat în multe domenii ale informaticii datorita completitudinii, optimitatii si eficientei sale. Dupa cum am spus deci A* este un _Dijkstra mai optim_, in videoclipul de mai jos observam cum functioneaza algoritmul.

![A*](https://upload.wikimedia.org/wikipedia/commons/9/98/AstarExampleEn.gif)

Algoritmul _nu verifica in intregime partea stanga a grafului_, lucru care Dijkstra l-ar fi facut, deoarece se indeparteaza de punctul final. Daca acesta nu gaseste cel mai scurt drum indreptandu-se spre partea punctul final acesta se va calcula si probabilitatea de a se indeparta de nodul final, doar pe urma. A* _incearca a urmarii destinatia finala_ si deci sa isi gaseasca calea prin labirint folosindu-se de faptul ca stie unde este punctul de final si coordonatele punctului care il analizeaza. Pentru ca acest lucru sa fie indeplinit in spatiul 2D al matricei generate se foloseste de o _functie euristica ,,Manhattan distance''_. Aceasta este data de functia prezenta in fisierul astar.js: 

```JavaScript
function heuristic(a, b){
    let d = Math.abs(a.x-b.x) + Math.abs(a.y - b.y)
    return d
}
```

Aceasta este apelata la fiecare calcul al valorii unui nod din graf vecin celui care este in calcul in prezent, fiecare nod din graf va fi suma _valorii de distanta normala parcursa (G)_ si _distanta euristica (H)_ formand funcita (F) definita mai jos:

```JavaScript

// Analiza valorilor f,h si g al unui nod vecin celui curent

neighbour.h = heuristic(neighbour, endNode);
neighbour.g = current.g + 1
neighbour.f = neighbour.h + neighbour.g;


// current este nodul pe care ne aflam
// neigbour este nodul care il calculam, fiind pozitionati pe nodul current

```
Dupa ce a calculat valoarea f aceasta va fi comparata la intrarea in coada de prioritati pe o pozitie relativa cu valoarea f (se incearca verificarea nodurilor cu o valoare f cat mai mica). Procesul se repeta pentru toti vecinii nodului curent, dupa ce toti au fost adaugati in coada cu prioritati se trece la urmatorul nod iar cel mai scrut traseu este mereu pastrat in memorie. Algoritmul se va oprii cand ne aflam la nodul de final si va creea un vector __path__ care contine cel mai scurt drum care trebuie urmat prin ,,backtracking'' intorcandu-se la valoarea sa initiala:

```JavaScript
if (current === endNode){
    let temp = current;
    path.push(temp);
    while (temp.prev){
       path.push(temp.prev);
       temp = temp.prev;
    }
    return {path, visitedNodes}
}
```

In cazul in care nu s-a ajuns la un nod final if-ul de mai sus este ignorat iar algoritmul isi continua procesul de a analiza toti vecinii nodului curent astfel:
```JavaScript
// selectam vecinii
var neighbours = current.neighbours;

for (let i=0; i<neighbours.length; i++){
    let neighbour = neighbours[i];
    // daca nodul care il analizam nu este un perete si nu este deja analizat continuam
    if (!closedSet.includes(neighbour) && !neighbour.isWall){
        let tempG = current.g + 1; // g-ul creste
        let newPath = false;
        // se verifica daca nodul curent este deja in nodurile candidate pentru a fi cel mai scurt drum
        if (openSet.includes(neighbour)){
            if (tempG < neighbour.g){
                neighbour.g = tempG;
                newPath = true;
            } 
        } else {
            neighbour.g = tempG;
            newPath = true; 
            openSet.push(neighbour);
        }
        
        if (newPath){
            // calculam valoarea finala f in functie de algoritmul ales
            // Dijkstra are f=g iar A* are f=h+g
            if (choice == 0){
                neighbour.h = heuristic(neighbour, endNode);
            } else {
                neighbour.h = 0
            }
            neighbour.f = neighbour.h + neighbour.g;
            neighbour.prev = current;
        }
    }
}

```
Dupa executarea acestui for vom merge din nou in programul principal care nu se va oprii cat timp exista inca noduri candidate sau am gasit un drum la nodul final. Se va executa o cautare a nodului cu cea mai mica valoare f astfel:
```JavaScript
let leastIndex = 0;
for (let i=0; i<openSet.length; i++){
    if (openSet[i].f < openSet[leastIndex].f){
        leastIndex = i;
    }
}
```

***

# Studiu de caz, folosind orasele din romania! (COMING SOON!)
### Vom compara Dijkstra cu A* folosind aceasta harta de mai jos, costurile drumurilor sunt predefinite
![Romania](https://i.imgur.com/shfmL8O.jpg)



# Demonstratie a aplicatiei
![Demo](https://user-images.githubusercontent.com/63779353/137626930-840d7a8b-1068-46c9-860e-2fb1b81a609b.gif)

