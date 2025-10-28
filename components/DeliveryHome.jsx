/*
Delivery-style Home Page (React + TailwindCSS)
*/

import React, { useState } from 'react';

export default function DeliveryHome() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const categories = ['Promoções', 'Lanches', 'Bebidas', 'Acompanhamentos', 'Sobremesas'];

  const menu = [
    { id: 1, title: 'X-Burguer Tradicional', price: 19.9, img: '/images/produto1.jpg', desc: 'Carne, queijo, alface, molho especial.' },
    { id: 2, title: 'Batata Frita Grande', price: 12.0, img: '/images/produto2.jpg', desc: 'Crocrante por fora e macia por dentro.' },
    { id: 3, title: 'xsalada', price: 21.5, img: '/images/produto3.jpg', desc: 'Peito de frango empanado, tem gosto de amor.' },
    { id: 4, title: 'Refrigerante 600ml', price: 6.5, img: '/images/produto4.jpg', desc: 'Gela rapidinho.' },
    { id: 5, title: 'Combo Família', price: 59.9, img: '/images/produto5.jpg', desc: '4 sanduíches + 2 batatas + 2 refri.' },
  ];

  function addToCart(product) {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function total() {
    return cart.reduce((s, p) => s + p.price * p.qty, 0).toFixed(2);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="logo" className="h-10 w-10 object-contain" />
            <div>
              <h1 className="text-lg font-bold">GKB Burgers</h1>
              <p className="text-xs text-gray-500">Entrega rápida • Aberto até 23:00</p>
            </div>
