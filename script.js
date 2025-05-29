document.addEventListener('DOMContentLoaded',()=>{

const productos =[
{id:1,nombre:'computador1',precio:2300000},
{id:2,nombre:'computador2',precio:1800000},
{id:3,nombre:'auriculares1',precio:85008 },
{id:4,nombre:'mouse1',precio:65000},
{id:5,nombre:'mouse2',precio:45000},
{id:6,nombre:'parlantes1',precio:38000},
{id:7,nombre:'teclado1',precio:25000},
{id:8,nombre:'teclado2',precio:50000},
{id:9,nombre:'usb1',precio:30000},
{id:18,nombre:'usb2',precio:30000}         
];
const productosContainer=document.getElementById
('productos');
const listaCarrito=document.getElementById
('lista-carrito');
const totalCarrito=document.getElementById
('totsl-carrito');
const btnComprar=document.getElementById
('btn-comprar');
const facturaSection=document.getElementById
('factura');
const itemsFacturaDiv=document.getElementById
('items-factura');
const totalFacturaElement=document.getElementById
('total-factura');
const btnNuevaCompra=document.getElementById
('btn-nueva-compra');
const btnVolverComprar=document.getElementById
('btn-volver-comprar');

let carrito=[];
let totalcarrito =0;

//Funcion para agregan un producto al carrito
function agregarAlCarrito(id) {
const producto=productos.find(p=>p.id ===id);
if(producto){
carrito.push(producto);
actualizarCarrito();
   }
}

//Funcion para actualizar la visualizacion del carrito
function actualizarCarrito() {
listaCarrito.innerHTML='';
totalCarrito =0;

carrito.forEach(producto =>{
const li=document.createelement('li');
li.innerHTML=`
<span>${producto.nombre}</span>
<span>$${producto.precio.tolocalestring()}</span>
`;
listaCarrito.appendChild(li);
totalCarrito +=producto.precio;
});

totalcarritoElement.textcontent=`Total:$${totalcarrito.tolocalestrin()}`;

//Funcion para mostrar la factura
function mostrarfactura(){
itemsFacturaDiv.innerHTML='';
let totalfactura =0;

carrito.forEach(producto =>{
const itemDiv=document.createElement('div');
itemDiv.innerHTML =
span>$producto.nombre<span>
span>$$producto.precio.toLocalestring()<span>
`;

itemsfacturaDiv.appendChild(itemDiv);
totalfactura +=producto.precio;
});
totalfacturaElement.textContent=Total Factura:$${totalFactura.toLocalestring}`;
facturaSection.style.display='block';

//Funcion para limpiar el carrito
function limpiarCarrito(){
carrito =[];
totalCarrito =θ;
actualizarCarrito();
facturaSection.style.display ='none';
}

//Evento para agregar un producto al carrito
productoscontainer.addEventListener('click',(event)=>{
if(event.target.classlist.contains('btn-agregar')){
const id =parseInt(event.target.getAttribute('data-id'));
agregarAlCarrito(id);
}
});
//Evento para comprar y generar la factura
btnComprar.addEventListener('click',()=>{
if(carrito.length>0){
mostrarFactura();

}else{
alert("El carrito esta vacio.Por favor,agregue productos antes de comprar.");
}
});

//Evento para volver a comprar y limpiar el carrito btnNuevaCompra.addEventListener('click',()=>})
limpiarcarrito();
btnvolvercomprar.addEventListener('click',()=>{
limpiarcarrito();
});
});
