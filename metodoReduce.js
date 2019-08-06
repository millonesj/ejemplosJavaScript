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
