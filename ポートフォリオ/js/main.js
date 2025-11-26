'use strict';

const cartCount = document.getElementById('cart-count');
const addToCartButton = document.getElementById('add-to-cart');
const quantityInput = document.getElementById('quantity');

// カートに追加ボタンを押すとカートに商品情報を追加
const cart = JSON.parse(localStorage.getItem('cart')) || [];
cartCount.textContent = cart.length;

const products = {
  grape: { image: 'photo/fruit_budou_kyohou.png', name: 'ジューシーなぶどう', price: 2000 },
  apple: { image: 'photo/fruit_ringo.png', name: 'フレッシュなリンゴ', price: 1500 },
  orange: { image: 'photo/fruit_mikan_set.png', name: '甘いみかん', price: 1200 },
  peach: { image: 'photo/fruit_momo.png', name: 'みずみずしいもも', price: 2800 },
  melon: { image: 'photo/fruit_melon.png', name: '高級メロン', price: 6500 },
  watermelon: { image: 'photo/fruit_suika_kodama.png', name: '本当は野菜なスイカ', price: 2400 },
};

//cart.jsでaddToCartButtonを参照しないようifで囲んでいる
if (addToCartButton) {
  addToCartButton.addEventListener('click', () => {
    const id = addToCartButton.dataset.id;
    const product = products[id]; //元の商品情報を取得
    const quantity = parseInt(quantityInput.value, 10); //inputの値を数値化
    const item = {...product, quantity: quantity}; //productを複製＋quantityを追加
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    cartCount.textContent = cart.length;
  });
}

