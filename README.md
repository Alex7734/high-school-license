# Atestatul este live!

[Hostat cu Google Firebase apasand aici veti putea folosii aplicatia](https://atestat-3921a.web.app/)<br>
https://atestat-3921a.web.app/ --> link



# Atestat Informatica

Cu totii stim despre faimosul algoritm _Dijkstra_ care gaseste cea mai scurta distanta dintre doua puncte ale unui graf prin folosirea unei structuri de date abstracte si anume [,,Cozii de prioritati''](https://en.wikipedia.org/wiki/Priority_queue). Un videoclip care explica foarte bine acest algoritm este cel de la Computerphile, linkul este [aici](https://www.youtube.com/watch?v=GazC3A4OQTE). Ei bine acest proiect reuseste sa ilustreze intr-un mod interactiv _gasirea celui mai scurt drum intre 2 puncte ale unui grafic_ cu mentionaria faptului ca graficul nostru este o matrice de _12 linii cu coloane generate dinamic de utilizator (intre 5 si 30)_ fiind prezente si noduri la care nu avem access sub forma unor _ziduri_. _Nodurile sunt elemente ale matricii_, iar _distanta intre ele este de valoare egala(1)_. 

#### Problema este simpla!
> Sa se gaseasca cel mai scurt drum din coltul _STANGA SUS_ pana la coltul din _DREAPTA JOS_ al matricei. Traversand labirintul nu avem voie sa folosim elementele de tip _wall_. 

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

# Studiu de caz, folosind orasele din romania!
### V-om compara Dijkstra cu A* folosind aceasta harta de mai jos, costurile drumurilor sunt predefinite
![Romania](https://i.imgur.com/shfmL8O.jpg)



# Demonstratie a aplicatiei
![Demo](https://user-images.githubusercontent.com/63779353/137626930-840d7a8b-1068-46c9-860e-2fb1b81a609b.gif)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

