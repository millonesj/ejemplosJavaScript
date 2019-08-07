/* Ejemplo de uso del método reduce.
Tenemos un array de objetos tipo carro, usamos reduce para obtener un nuevo array con solo los objetos cuyo atributo es: a
ctivo = true */
const carros = [
	{
		marca: "Honda",
		activo: true
	},
	{
		marca: "Hyundai",
		activo: true
	},
	{
		marca: "Toyota",
		activo: true
	},
	{
		marca: "Mazda",
		activo: false
	}
];

const reducido = carros.reduce(function(nuevaLista, objetoItera) {
	if (objetoItera.activo) {
		nuevaLista.push(objetoItera);
		return nuevaLista;
	} else {
		return nuevaLista;
	}
}, []);

console.log(reducido);

/*
::: Quitar duplicados de Array :::
 */
var lista = [1, 2, 3, 4, 5, 6, 1, 1, 2, 3, 4, 5, 8, 9, 1, 2, 5, 4, 4, 7, 9];

const sinRepetidos = lista.reduce(function(nueva, row) {
  if (nueva.indexOf(row) < 0) {
		nueva.push(row)
	};
  return nueva;
}, []);

console.log(sinRepetidos);
