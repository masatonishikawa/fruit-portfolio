'use strict';

const cartCount = document.getElementById('cart-count');
const totalPrice = document.getElementById('total-price');
const cartList = document.getElementById('item');


function renderCart() {

  cartList.innerHTML = '';
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  //カート内合計金額を出力
  const priceSummaryArray = cart.map(item => item.price * item.quantity);
  let priceSummary = priceSummaryArray.reduce((sum, current) => sum + current, 0);
  totalPrice.textContent = `${priceSummary.toLocaleString()}円`;

  //カート内に商品を追加
  cart.forEach((product, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product. name;
    img.width = 80;

    const text = document.createElement('span');
    text.classList.add('desc');
    text.textContent = `${product.name} _ ${product.price.toLocaleString()}円 × ${product.quantity}個`;
    li.dataset.index = index; //indexを記録
    li.classList.add('cart-row');

    //削除ボタン
    const removeBtn = document.createElement('button');
    removeBtn.id = 'removebtn';
    removeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
    
    removeBtn.addEventListener('click', () => {
      const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
      const removeIndex = parseInt(li.dataset.index, 10);
      currentCart.splice(removeIndex, 1); //datasetのindexを使う
      localStorage.setItem('cart', JSON.stringify(currentCart));
      renderCart(); //再描画してズレを解消
    });

    li.appendChild(img);
    li.appendChild(text);
    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });

}
  renderCart();