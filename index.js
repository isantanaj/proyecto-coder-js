let idArticulo = parseInt(
  prompt(
    'Selecciona el artículo que quieres comprar\n 1.- Mochila - $600MXN\n 2.- Toalla de microfibra - $200MXN \n 3.- Almohada de viaje - $70MXN\n 4.- Organizador de viaje - $45MXN\n 5.- Etiqueta de equipaje - 20MXN'
  )
);
let totalPrecioArticulo = 0;

const sumarPrecioArticulo = (precioArticulo) => {
  totalPrecioArticulo = totalPrecioArticulo + precioArticulo;
  console.log('Subtotal: $' + totalPrecioArticulo);
};

while (idArticulo != 0) {
  switch (idArticulo) {
    case 1:
      sumarPrecioArticulo(600);
      break;
    default:
      console.log('Error');
      break;
  }

  idArticulo = parseInt(
    prompt(
      'Selecciona el artículo que quieres comprar\n 1.- Mochila - $600MXN\n 2.- Toalla de microfibra - $200MXN \n 3.- Almohada de viaje - $70MXN\n 4.- Organizador de viaje - $45MXN\n 5.- Etiqueta de equipaje - 20MXN'
    )
  );
}
