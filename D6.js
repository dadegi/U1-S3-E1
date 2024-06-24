/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log('***** ESERCIZIO 1 *****');

function joinString(str1, str2) {
	let newString;
	newString = str1.slice(0, 2).concat(str2.slice(str2.length - 3));
	console.log(newString.toUpperCase());
}

joinString('hello', 'world');

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log('***** ESERCIZIO 2 *****');

function randomize() {
	const numArray = [];
	for (let i = 0; i < 10; i++) {
		let newNum = Math.floor(Math.random() * 100) + 1;
		if (numArray.indexOf(newNum) === -1) {
			numArray.push(newNum);
		} else {
			i--;
		}
	}
	console.log(numArray);
}

randomize();

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log('***** ESERCIZIO 3 *****');

const myArray = [2, 6, 15, 95, 64, 77, 23, 46, 36, 11, 72, 83];

function even() {
	const myEvenNumbers = myArray.filter(el => el % 2 === 0);
	console.log(myEvenNumbers);
}

even();

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log('***** ESERCIZIO 4 *****');

function sum1() {
	let mySum = 0;
	myArray.forEach(item => {
		mySum += item;
	});
	console.log(mySum);
}

sum1();

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log('***** ESERCIZIO 5 *****');

function sum2() {
	let mySum = myArray.reduce((total, item) => total + item, 0);
	console.log(mySum);
}

sum2();

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log('***** ESERCIZIO 6 *****');

function increment(numArr, value) {
	const incrementArray = numArr.map(item => {
		return item + value;
	});
	console.log(incrementArray);
}

increment([1, 2, 3, 4, 5], 8);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log('***** ESERCIZIO 7 *****');

function strLength(strArray) {
	const longStr = strArray.map(item => {
		return item.length;
	});
	console.log(longStr);
}

strLength(['Epicode', 'is', 'great']);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log('***** ESERCIZIO 8 *****');
// forEach()
function onlyOdd1() {
	const numArray = [];
	for (let i = 0; i < 100; i++) {
		numArray.push(i);
	}

	const oddArray = [];
	numArray.forEach(item => {
		if (item % 2 !== 0) {
			oddArray.push(item);
		}
	});
	console.log(oddArray);
}

onlyOdd1();

// for
function onlyOdd2() {
	const oddArray = [];
	for (let i = 0; i < 100; i++) {
		if (i % 2 !== 0) {
			oddArray.push(i);
		}
	}
	console.log(oddArray);
}

onlyOdd2();

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
	{
		Title: 'The Lord of the Rings: The Fellowship of the Ring',
		Year: '2001',
		imdbID: 'tt0120737',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
	},
	{
		Title: 'The Lord of the Rings: The Return of the King',
		Year: '2003',
		imdbID: 'tt0167260',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
	},
	{
		Title: 'The Lord of the Rings: The Two Towers',
		Year: '2002',
		imdbID: 'tt0167261',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of War',
		Year: '2005',
		imdbID: 'tt0399295',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
	},
	{
		Title: 'Lords of Dogtown',
		Year: '2005',
		imdbID: 'tt0355702',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
	},
	{
		Title: 'The Lord of the Rings',
		Year: '1978',
		imdbID: 'tt0077869',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of the Flies',
		Year: '1990',
		imdbID: 'tt0100054',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
	},
	{
		Title: 'The Lords of Salem',
		Year: '2012',
		imdbID: 'tt1731697',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
	},
	{
		Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
		Year: '1984',
		imdbID: 'tt0087365',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
	},
	{
		Title: 'Lord of the Flies',
		Year: '1963',
		imdbID: 'tt0057261',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
	},
	{
		Title: 'The Avengers',
		Year: '2012',
		imdbID: 'tt0848228',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Infinity War',
		Year: '2018',
		imdbID: 'tt4154756',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Age of Ultron',
		Year: '2015',
		imdbID: 'tt2395427',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
	},
	{
		Title: 'Avengers: Endgame',
		Year: '2019',
		imdbID: 'tt4154796',
		Type: 'movie',
		Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
	},
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log('***** ESERCIZIO 9 *****');

const oldest = () => {
	let oldYear = parseInt(movies[0].Year);
	let oldMovie = movies[0];
	movies.forEach(item => {
		if (parseInt(item.Year) < oldYear) {
			oldYear = parseInt(item.Year);
			oldMovie = item;
		}
	});
	console.log(oldMovie);
};

oldest();

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log('***** ESERCIZIO 10 *****');

const howManyMovies = () => {
	console.log(movies.length);
};

howManyMovies();

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log('***** ESERCIZIO 11 *****');

const onlyTitles = () => {
	const arrayTitles = movies.map(item => {
		return item.Title;
	});
	console.log(arrayTitles);
};

onlyTitles();

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log('***** ESERCIZIO 12 *****');

const lastMillenium = () => {
	const arrayXXI = movies.filter(item => {
		return parseInt(item.Year) > 2000;
	});
	console.log(arrayXXI);
};

lastMillenium();

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log('***** ESERCIZIO 13 *****');

const sumYear = () => {
	const sumY = movies.reduce((total, item) => total + parseInt(item.Year), 0);
	console.log(sumY);
};

sumYear();

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log('***** ESERCIZIO 14 *****');

const findID = movieId => {
	const myMovie = movies.find(item => item.imdbID === movieId);
	console.log(myMovie);
};

findID('tt4154756');

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log('***** ESERCIZIO 15 *****');
const findIndArr = year => {
	const myMovie = movies.findIndex(item => item.Year == year);
	console.log(myMovie);
};

findIndArr(2012);
