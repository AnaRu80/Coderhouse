const productosForm = document.getElementById('productos-form');

const socket = io();

socket.on('mensaje', (mensaje) => {
  console.log('hola', mensaje);
});
socket.on('products', (prod) => {
  console.log('desde sock prodc', prod);
  document.querySelector('.wrapper').innerHTML = '';

  outputProduct(prod);
});

// Products Submit

productosForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get Products from form
  const product = {
    name: e.target.elements.name.value,
    price: e.target.elements.price.value,
    thumbnail: e.target.elements.thumbnail.value,
  };

  // Emit product obejct
  socket.emit('productForm', product);
});

function outputProduct(products) {
  const div = document.createElement('div');
  div.classList.add('list-group-item');
  console.log('ldnth', products, products.length);
  div.innerHTML = products.map(
    (product) => `<div
  id='product-list'
  class='media align-items-lg-center flex-column flex-lg-row p-3'
>
  <div class='media-body order-2 order-lg-1'>
    <h2 class='mt-0 font-weight-bold mb-2'>${product.name}</h2>
    <div
      class='d-flex align-items-center justify-content-between mt-1'
    >
      <h3 class='font-weight-bold my-2 text-center'>$${product.price} </h3>
      <ul class='list-inline small'>
        <li class='list-inline-item m-0'><i
            class='fa fa-star text-success'
          ></i></li>
        <li class='list-inline-item m-0'><i
            class='fa fa-star text-success'
          ></i></li>
        <li class='list-inline-item m-0'><i
            class='fa fa-star text-success'
          ></i></li>
        <li class='list-inline-item m-0'><i
            class='fa fa-star text-success'
          ></i></li>
        <li class='list-inline-item m-0'><i
            class='fa fa-star-o text-gray'
          ></i></li>
      </ul>
    </div>
  </div><img
    src='${product.thumbnail}'
    alt='Generic placeholder image'
    width='200'
    class='ml-lg-5 order-1 order-lg-2'
  />
</div>`
  );

  document.querySelector('.wrapper').appendChild(div);
}
