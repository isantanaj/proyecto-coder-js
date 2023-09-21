const listaProducto = document.getElementById('producto-lista');
const iconoCarrito = document.getElementById('carrito');
let total = 0;
// const filtroPrecio1 = document.getElementById('precio-1');
// const filtroPrecio2 = document.getElementById('precio-2');
// const filtroPrecio3 = document.getElementById('precio-3');
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const mostrarProductos = (listaProductos) => {
  for (const producto of listaProductos) {
    listaProducto.innerHTML += `
    <article class="contenedor__producto">
    <div>
    <img src="img/${producto.img}" alt="" id="producto-id">
    </div>
    <h2 id="producto-nombre">${producto.nombre}</h2>
    <p id="producto-precio">$${producto.precio} MXN</p>
    <div>
    <button id=${producto.id} class="producto__btn">Agregar a carrito<button>
    </div>
    </article>
    `;
  }

  let btnCompras = document.getElementsByClassName('producto__btn');

  for (const btnCompra of btnCompras) {
    btnCompra.addEventListener('click', () => {
      // console.log('Has hecho click en el boton' + btnCompra.id);
      const productoCarrito = productos.find(
        (producto) => producto.id == btnCompra.id
      );
      // console.log(productoCarrito);
      agregarProductoACarrito(productoCarrito);
    });
  }
};
mostrarProductos(productos);

function agregarProductoACarrito(producto) {
  carrito.push(producto);
  let tbody = document.getElementById('tbody');
  let precioTotal = document.getElementById('precio-total');
  tbody.innerHTML += `
  <tr>
  <td>${producto.nombre}</td>
  <td>$${producto.precio}</td>
  </tr>`;
  total = carrito.reduce((acumulador,prod) => acumulador + producto.precio, 0);
  precioTotal.innerHTML = `<p>Precio Total $${total}</p>`;

  localStorage.setItem('carrito', JSON.stringify(carrito));
}

if(carrito.length != 0){
recuperarCarrito();
}

function recuperarCarrito(){
  let tbody = document.getElementById('tbody');
  let precioTotal = document.getElementById('precio-total');
  for(prodCarrito of carrito){

    tbody.innerHTML += `
    <tr>
    <td>${prodCarrito.nombre}</td>
    <td>$${prodCarrito.precio}</td>
    </tr>`;
  }
  total = carrito.reduce((acumulador,prod) => acumulador + prodCarrito.precio, 0);
  precioTotal.innerHTML = `<p>Precio Total $${total}</p>`;

}

iconoCarrito.addEventListener('click', desplegarCarrito);
function desplegarCarrito() {
  const contenedorCarrito = document.getElementById('producto-carrito');
  contenedorCarrito.classList.toggle('ocultar');
}

/*
const filtrarProductos = (listaProductos) => {
  listaProducto.remove();
  let productoFiltro = 0;
  for (const producto of listaProductos) {
    productoFiltro = productos.filter((producto) => producto.precio < 350);
    listaProducto.innerHTML += `
  <article class="contenedor__producto">
  <div>
  <img src="img/image 1.png" alt="" id="producto-id">
  </div>
  <h2 id="producto-nombre">${producto.nombre}</h2>
  <p id="producto-precio">$${producto.precio} MXN</p>
  <div>
  <button id=${producto.id} class="producto__btn">Agregar a carrito<button>
  </div>
  </article>
  `;
  }
  console.log(productoFiltro);
};

filtroPrecio1.addEventListener('click', filtrarProductos);
filtrarProductos(productos);
*/
