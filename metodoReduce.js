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
/* [ { marca: 'Honda', activo: true },
  { marca: 'Hyundai', activo: true },
  { marca: 'Toyota', activo: true } ] */


console.log("= * =");
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

console.log(sinRepetidos); // [ 1, 2, 3, 4, 5, 6, 8, 9, 7 ]

console.log("= * =");
/* 
	::: Retorna un nuevo array con los productos agrupados segun categoria 
 */
var listaDeProductos = [
  {
    categoria: "aceites",
    nombre: "Oliva"
  },
  {
    categoria: "arroz",
    nombre: "extra"
  },
  {
    categoria: "aceites",
    nombre: "vegetal"
  },
  {
    categoria: "arroz",
    nombre: "superior"
  },
  {
    categoria: "arroz",
    nombre: "integral"
  },
  {
    categoria: "aceites",
    nombre: "especial"
  }
];

const agrupadosPorCategoria = listaDeProductos.reduce(function(
  productosPorCategoria,
  producto,
  indiceActual
) {
  if (indiceActual === 0) {
    let nuevaCategoria = {
      categoria: producto.categoria,
      productos: [producto.nombre]
    };
    productosPorCategoria.push(nuevaCategoria);
  } else {
    let existe = false;
    productosPorCategoria.forEach((element, indice) => {
      if (element.categoria === producto.categoria) {
        productosPorCategoria[indice].productos.push(producto.nombre);
        existe = true;
      }
    });
    if (!existe) {
      let nuevaCategoria = {
        categoria: producto.categoria,
        productos: [producto.nombre]
      };
      productosPorCategoria.push(nuevaCategoria);
    }
  }

  return productosPorCategoria;
},
[]);

console.log(agrupadosPorCategoria);
/* [ { categoria: 'aceites',
    productos: [ 'Oliva', 'vegetal', 'especial' ] },
  { categoria: 'arroz',
    productos: [ 'extra', 'superior', 'integral' ] } ] */
