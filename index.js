const listaProducto = document.getElementById('producto-lista');
const iconoCarrito = document.getElementById('carrito');
let total = 0;
const filtroPrecio1 = document.getElementById('precio-1');
const filtroPrecio2 = document.getElementById('precio-2');
const filtroPrecio3 = document.getElementById('precio-3');
//OBTENER CARRITO
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

//MOSTRAR LISTA PRODUCTOS
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
};
mostrarProductos(productos);
//BTN COMPRA
let btnCompras = document.getElementsByClassName('producto__btn');
//DETECTAR ID DE PRODUCTO PARA AGREGAR A CARRITO
for (const btnCompra of btnCompras) {
  btnCompra.addEventListener('click', () => {
    const productoCarrito = productos.find(
      (producto) => producto.id == btnCompra.id
    );
    agregarProductoACarrito(productoCarrito);
  });
}

//AGREGAR PRODUCTOS A COMPRAS
function agregarProductoACarrito(producto) {
  carrito.push(producto);

  Toastify({
    text: `${producto.nombre} agregado al carrito`,
    className: 'info',
    style: {
      background: 'linear-gradient(to right, #eee, #f9f9f9)',
      width: '250px',
      color: '#000',
    },
  }).showToast();

  let tbody = document.getElementById('tbody');
  let precioTotal = document.getElementById('precio-total');

  tbody.innerHTML += `
  <tr id="producto-body">
  <td>${producto.nombre}</td>
  <td>$${producto.precio}</td>
  </tr>`;

  total = carrito.reduce(
    (acumulador, productoPrecio) => acumulador + productoPrecio.precio,
    0
  );
  precioTotal.innerHTML = `<p>Precio Total $${total}</p>`;
  //AGREGAR CARRITO A LOCALSTORAGE
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

if (carrito.length != 0) {
  recuperarCarrito();
}

// let set = new Set( carrito.map( JSON.stringify ) )
// let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );

// console.log(arrSinDuplicaciones)

//RECUPERAR CARRITO Y COLOCARLO EN EL ASIDE
function recuperarCarrito() {
  let tbody = document.getElementById('tbody');
  let precioTotal = document.getElementById('precio-total');
  for (prodCarrito of carrito) {
    tbody.innerHTML += `
    <tr id="producto-body">
    <td>${prodCarrito.nombre}</td>
    <td>$${prodCarrito.precio}</td>
    </tr>`;
  }
  total = carrito.reduce(
    (acumulador, prod) => acumulador + prodCarrito.precio,
    0
  );
  precioTotal.innerHTML = `<p>Precio Total $${total}</p>`;
}
//DESPLEGAR CARRITO COMPRAS
iconoCarrito.addEventListener('click', desplegarCarrito);
function desplegarCarrito() {
  const contenedorCarrito = document.getElementById('producto-carrito');
  contenedorCarrito.classList.toggle('ocultar');
}

//FILTRO PARA BUSCAR EN BARRA DE BÚSQUEDA
const buscar = document.getElementById('buscar');

function filtrarBusqueda() {
  listaProducto.innerHTML = '';
  const texto = buscar.value.toLowerCase();

  for (let producto of productos) {
    let nombre = producto.nombre.toLocaleLowerCase();
    if (nombre.indexOf(texto) != -1) {
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
  }

  if (listaProducto.innerHTML === '') {
    listaProducto.innerHTML += `
    <li>Producto no encontrado...</li>
    `;
  }
}
buscar.addEventListener('keyup', filtrarBusqueda);

//FILTRO PRECIO <$350
const filtrarProductosMenor = () => {
  listaProducto.innerHTML = '';
  for (const producto of productos) {
    if (producto.precio < 350) {
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
  }
};

//FILTRO PRECIO $350 - $700
const filtrarProductosEntre = () => {
  listaProducto.innerHTML = '';
  for (const producto of productos) {
    if (producto.precio >= 350 && producto.precio <= 700) {
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
  }
};

//FILTRO PRECIO >$700
const filtrarProductosMayor = () => {
  listaProducto.innerHTML = '';
  for (const producto of productos) {
    if (producto.precio > 700) {
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
  }
};

filtroPrecio1.addEventListener('click', filtrarProductosMenor);
filtroPrecio2.addEventListener('click', filtrarProductosEntre);
filtroPrecio3.addEventListener('click', filtrarProductosMayor);

//BORRAR FILTRO DE PRECIO
const borrarFiltro = document.getElementById('quitar-filtro');
borrarFiltro.addEventListener('click', () => {
  listaProducto.innerHTML = '';
  mostrarProductos(productos);
});

//VACIAR CARRITO
const vaciarCarrito = document.getElementById('vaciar-carrito');
vaciarCarrito.addEventListener('click', () => {
  carrito = [];
  localStorage.clear();
  tbody.innerHTML = '';
  let precioTotal = document.getElementById('precio-total');
  precioTotal.innerText = `Precio Total $0`;
  //ALERTA DE CARRITO VACIADO
  Toastify({
    text: `Carrito vaciado`,
    className: 'info',
    style: {
      background: 'linear-gradient(to right, #eee, #f9f9f9)',
      width: '250px',
      color: '#000',
    },
  }).showToast();
});

// const borrarProducto = document.getElementsByClassName('remove-producto');
// borrarProducto.addEventListener('click', ()=>{
//   console.log(``)
// });
