let idArticulo = parseInt(
  prompt(
    'Selecciona el artículo que quieres comprar\n 1.- Mochila - $600MXN\n 2.- Toalla de microfibra - $200MXN \n 3.- Almohada de viaje - $70MXN\n 4.- Organizador de viaje - $45MXN\n 5.- Etiqueta de equipaje - 20MXN\n 0.- Salir'
  )
);
let totalPrecioArticulo = 0;

const sumarPrecioArticulo = (precioArticulo) => {
  totalPrecioArticulo = totalPrecioArticulo + precioArticulo;
  alert('Subtotal: $' + totalPrecioArticulo);
};

while (idArticulo != 0) {
  switch (idArticulo) {
    case 1:
      sumarPrecioArticulo(600);
      break;
    case 2:
      sumarPrecioArticulo(200);
      break;
    case 3:
      sumarPrecioArticulo(70);
      break;
    case 4:
      sumarPrecioArticulo(45);
      break;
    case 5:
      sumarPrecioArticulo(20);
      break;
    default:
      alert('Error');
      break;
  }

  idArticulo = parseInt(
    prompt(
      'Selecciona el artículo que quieres comprar\n 1.- Mochila - $600MXN\n 2.- Toalla de microfibra - $200MXN \n 3.- Almohada de viaje - $70MXN\n 4.- Organizador de viaje - $45MXN\n 5.- Etiqueta de equipaje - 20MXN\n 0.- Salir'
    )
  );
}

if(idArticulo == 0){
  alert('Total: $' + totalPrecioArticulo);
}