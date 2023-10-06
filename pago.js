const listaProductoPagar = document.getElementById('lista-productos-pagar');
let totalPago = 0;
//RECUPERAR CARRITO Y COLOCARLO EN EL ASIDE

function mostrarCarritoPago() {
  let precioTotalCarrito = document.getElementById('precio-total-carrito');
  setTimeout(() => {
    for (productoDeCarrito of carrito) {
      listaProductoPagar.innerHTML += `
        <article class="pago__producto">
        <div>
        <img src="img/${productoDeCarrito.img}" alt="" id="producto-id">
        </div>
        <h2 id="producto-nombre">${productoDeCarrito.nombre}</h2>
        <div>
      </div>
      </article>
      `;
    }

  console.log(precioTotalCarrito);
  totalPago = carrito.reduce(
    (acumulador, prod) => acumulador + prod.precio,
    0
  );
  precioTotalCarrito.innerHTML = `
  <p>Precio Total a pagar: $${totalPago}</p>
  `;
},2000);
}

const btnFinPedido = document.getElementById('finalizar-pago');
btnFinPedido.addEventListener('click', finalizarPedido);
const popUp = document.getElementById('pop-up');
popUp.classList.add('ocultar')

function finalizarPedido(){
  popUp.classList.add('mostrar');
}

function redirect(){
  window.location.href="./index.html";
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
}

mostrarCarritoPago();
