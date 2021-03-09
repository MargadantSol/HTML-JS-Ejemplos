let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
let divCarrito = document.querySelector('#carrito');
let amount = document.getElementById('amount');
let carrito = [];
let total = 0;

let compras = [
    { nombre: 'harina', precio: 35 },
    { nombre: 'pan', precio: 25 },
    { nombre: 'papa', precio: 52 },
    { nombre: 'palta', precio: 55 },
    { nombre: 'fideos', precio: 85 },
    { nombre: 'aceite', precio: 350 },
    { nombre: 'sopa', precio: 86 },
    { nombre: 'mermelada', precio: 108 },
    { nombre: 'poroto', precio: 69 },
    { nombre: 'lentejas', precio: 85 },
    { nombre: 'mandarina', precio: 43 },
    { nombre: 'banana', precio: 79 },
    { nombre: 'leche de almendras', precio: 145 },
    { nombre: 'papel higiénico', precio: 147 },
    { nombre: 'lavandina', precio: 55 },
    { nombre: 'alcohol en gel', precio: 123 },
    { nombre: 'shampoo', precio: 400 },
    { nombre: 'arroz', precio: 66 },
    { nombre: 'harina', precio: 35 },
    { nombre: 'salsa de tomate', precio: 35 },
]

let headers = ['Producto', 'Precio'];

const dibujar = () => {

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);
    compras.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        row.addEventListener('click', agregarCarrito);
        table.appendChild(row);
    });

    myTable.appendChild(table);

};

const crearTr = (product) => {

    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    const tdNameTxt = document.createTextNode(product.nombre);
    tdName.appendChild(tdNameTxt);

    const tdPrice = document.createElement('td');
    const tdPriceTxt = document.createTextNode(product.precio);
    tdPrice.appendChild(tdPriceTxt);

    tr.appendChild(tdName);
    tr.appendChild(tdPrice);

    return tr;

}

const agregarCarrito = (event) => {
    //Busco el product del evento en array compras
    const index = compras.findIndex(pr => pr.nombre === event.target.parentNode.childNodes[0].innerHTML);

    if (index != -1) {
        // Encontramos el producto, buscamos si el producto esta en el carrito
        const exist = carrito.findIndex(pr => pr.nombre === event.target.parentNode.childNodes[0].innerHTML);

        if (exist == -1) {
            // No se encontró, agregamos el producto al carrito
            carrito.push(compras[index]);

            const tr = crearTr(compras[index], false);
            divCarrito.appendChild(tr);
            total += compras[index].precio;
        }
        else {
            alert("El producto ya esta en el carrito");
        }
    }
    else {
        alert("No se encontro el producto");
    }
}

const clickComprar = () => {
    amount.innerHTML = "Total de la compra: " + total;
}