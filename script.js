document.addEventListener('DOMContentLoaded', () => {

    const productos = [
        { id: 1, nombre: 'Computador ASUS', precio: 2300000 },
        { id: 2, nombre: 'Computador portátil', precio: 1800000 },
        { id: 3, nombre: 'Auriculares inalámbricos', precio: 85000 },
        { id: 4, nombre: 'Mouse 1', precio: 65000 },
        { id: 5, nombre: 'Mouse 2', precio: 45000 },
        { id: 6, nombre: 'Parlantes inalámbricos', precio: 38000 },
        { id: 7, nombre: 'Teclados', precio: 25000 },
        { id: 8, nombre: 'Teclado', precio: 50000 },
        { id: 9, nombre: 'USB 1', precio: 30000 },
        { id: 10, nombre: 'USB 2', precio: 30000 },
    ];

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

    function agregarAlCarrito(id) {
        const producto = productos.find(p => p.id === id);
        if (producto) {
            carrito.push(producto);
            actualizarCarrito();
        }
    }

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        totalCarrito = 0;
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${producto.nombre}</span>
                <span>$${producto.precio.toLocaleString()}</span>
            `;
            listaCarrito.appendChild(li);
            totalCarrito += producto.precio;
        });

        totalCarritoElement.textContent = `Total: $${totalCarrito.toLocaleString()}`;
    }

    function mostrarFactura() {
        itemsFacturaDiv.innerHTML = '';
        let totalFactura = 0;

        carrito.forEach(producto => {
            const itmDiv = document.createElement('div');
            itmDiv.innerHTML = `
                <span>${producto.nombre}</span>
                <span>$${producto.precio.toLocaleString()}</span>
            `;
            itemsFacturaDiv.appendChild(itmDiv);
            totalFactura += producto.precio;
        });

        totalFacturaElement.textContent = `Total Factura: $${totalFactura.toLocaleString()}`;
        facturaSection.style.display = 'block';
        document.getElementById('carrito').style.display = 'none';
    }

    function limpiarCarrito() {
        carrito = [];
        totalCarrito = 0;
        actualizarCarrito();
        facturaSection.style.display = 'none';
        document.getElementById('carrito').style.display = 'block';
    }

    document.getElementById('productos').addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-agregar')) {
            const id = parseInt(event.target.getAttribute('data-id'));
            agregarAlCarrito(id);
        }
    });

    btnComprar.addEventListener('click', () => {
        if (carrito.length > 0) {
            mostrarFactura();
        } else {
            alert("El carrito está vacío. Por favor, agregue productos antes de comprar.");
        }
    });

    btnNuevaCompra.addEventListener('click', () => {
        limpiarCarrito();
    });

    btnVolverComprar.addEventListener('click', () => {
        limpiarCarrito();
    });

});
