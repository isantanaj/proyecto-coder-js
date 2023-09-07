//FUNCIÓN MOSTRAR TODOS LOS ARTÍCULOS
const mostrarTodosArticulos = () => {
  let textoAlert = '';
  for (const articulo of articulos) {
    textoAlert += `ID: ${articulo.id} Nombre: ${articulo.nombre} - Precio: ${articulo.precio} MXN \n`;
  }
  alert(`Hay ${articulos.length} productos \n ${textoAlert}`);
};

//FUNCIÓN FILTRAR ARTÍCULOS POR PRECIO MÁXIMO
const filtrarPrecioMax = (precioMaximo) => {
  //SE CREA NUEVO ARRAY PARA PRODUCTOS CON EL PRECIO MÁXIMO
  const articulosFiltradosMax = articulos.filter(
    (articulo) => articulo.precio <= precioMaximo
  );
  if (articulosFiltradosMax.length != 0) {
    let articulosMaxAlert = '';
    articulosFiltradosMax.map((articulo) => {
      articulosMaxAlert += `ID: ${articulo.id} Nombre: ${articulo.nombre} - Precio: ${articulo.precio} MXN \n`;
    });
    alert(articulosMaxAlert);
  } else {
    alert('No se encuentran productos por ese precio');
  }
};

//FUNCIÓN FILTRAR ARTÍCULOS POR PRECIO MÍNIMO
const filtrarPrecioMin = (precioMinimo) => {
  //SE CREA NUEVO ARRAY PARA PRODUCTOS CON EL PRECIO MÍNIMO
  const articulosFiltradosMin = articulos.filter(
    (articulo) => articulo.precio >= precioMinimo
  );

  if (articulosFiltradosMin.length != 0) {
    let articulosMinAlert = '';
    articulosFiltradosMin.map((articulo) => {
      articulosMinAlert += `ID: ${articulo.id} Nombre: ${articulo.nombre} - Precio: ${articulo.precio} MXN \n`;
    });
    alert(articulosMinAlert);
  } else {
    alert('No se encuentran productos por ese precio');
  }
};

//OBTENER OPCIÓN
let op = parseInt(
  prompt(
    'Ingrese la opción deseada:\n 1:Mostrar todos los productos\n 2:Buscar artículo por precio máximo\n 3:Buscar artículo por precio mínimo \n 0: Salir'
  )
);
//SWITCH CON OPCIONES
switch (op) {
  case 1:
    mostrarTodosArticulos();
    break;
  case 2:
    let obtPrecioMax = parseFloat(
      prompt('Ingresa el precio máximo que desees: (0 - Salir)')
    );
    while (obtPrecioMax != 0) {
      filtrarPrecioMax(obtPrecioMax);
      obtPrecioMax = parseFloat(
        prompt('Ingresa el precio máximo que desees: (0 - Salir)')
      );
    }
    break;
  case 3:
    let obtPrecioMin = parseFloat(
      prompt('Ingresa el precio mínimo que desees: (0 - Salir)')
    );
    while (obtPrecioMin != 0) {
      filtrarPrecioMin(obtPrecioMin);
      obtPrecioMin = parseFloat(
        prompt('Ingresa el precio mínimo que desees: (0 - Salir)')
      );
    }
    break;
}
