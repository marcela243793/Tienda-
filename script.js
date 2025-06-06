document.addEventListener('DOMContentLoaded', () => {

const productos = [
    
{ id: 1, nombre: 'Computador1', precio: 2300000},
{ id: 2, nombre: 'computador2', precio: 1800000},
{ id: 3, nombre: 'auriculares 1', precio: 85000},
{ id: 4, nombre: 'mouse1', precio: 65000},
{ id: 5, nombre: 'mouse 2', precio: 45000},
{ id: 6, nombre: 'parlantes 1', precio: 38000},
{ id: 7, nombre: 'teclado 1', precio: 25000},
{ id: 8, nombre: 'teclado 2', precio: 50000},
{ id: 9, nombre: 'usb1', precio: 30000},
{ id: 10, nombre: 'usb2', precio: 30000},
];

    const productosContainer = document.getElementById('producto');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarritoElement = document.getElementById('total-carrito');
    const btnComprar = document.getElementById('btn-comprar');
    const facturaSection = document.getElementById('factura');
    const itemsFacturaDiv = document.getElementById('items-factura');
    const totalFacturaElement = document.getElementById('total-factura');
    const btnNuevaCompra = document.getElementById('btn-nueva-compra');
    const btnVolverComprar = document.getElementById('btn-volver-comprar');

    let carrito = [];
    let totalCarrito = 0;

    // Función para agregar un producto al carrito
    function agregarAlCarrito(id) {
        const productos = productos.find(p => p.id === id);
        if (productos) {
            carrito.push(productos);
            actualizarCarrito();
        }
    }

    // Función para actualizar la visualizacion del carrito
    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        totalCarrito = 0;

        carrito.forEach(productos => {
            const li = document.createElement('li');
            li.innerHTML = `
   <span>${productos.nombre}</span>
   <span>$${productos.precio.toLocaleString()}</span>
      `;
            listaCarrito.appendChild(li);
            totalCarrito += productos.precio;
        });

       totalCarritoElement.textContent = `Total: $${totalCarrito.toLocaleString()}`;
    }

    // Función para mostrar la factura
    function mostrarFactura() {
        itemsFacturaDiv.innerHTML = '';
        let totalFactura = 0;

        carrito.forEach(productos => {
            const itmDiv = document.createElement('div');
            itmDiv.innerHTML = `
         <span>${productos.nombre}</span>
      <span>$${productos.precio.toLocaleString()}</span>
              `;
            itemsFacturaDiv.appendChild(itmDiv);
            totalFactura += productos.precio;
        });

        totalFacturaElement.textContent = `Total Factura: $${totalFactura.toLocaleString()}`;
        facturaSection.style.display = 'block';
    }

    // Función para limpiar el carrito
    function limpiarCarrito() {
        carrito = [];
        totalCarrito =0;
        actualizarCarrito();
        facturaSection.style.display = 'none';
    
    }
    
    // Evento para agregar un producto al carrito
   productosContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-agregar')) {
             const id = parseInt(event.target.getAttribute ('data-id'));
             agregarAlCarrito(id);
        }
    

    // Evento para comprar y generar la factura
    btnComprar.addEventListener('click', () => {
        if(carrito.length > 0) {
            mostrarFactura();
        } else {
            alert("El carrito esta vacio. por favor, agregue productos antes de comprar.");
        }
   });

   // Evento para volver a comprar y limpiar el carrito
   btnNuevaCompra.addEventListener('click', () =>{
         limpiarCarrito();
   });
    btnVolverComprar.addEventListener('click', () => {
          limpiarCarrito();
    });
});
