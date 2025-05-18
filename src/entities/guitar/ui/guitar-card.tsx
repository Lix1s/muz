import React, { useContext } from "react";

import { CartContext, useAppContext } from "#/widgets/context";

import { Item } from "#/types";
import Link from "next/link";

interface GuitarCardProps extends Item {}

export function GuitarCard({
  id,
  imageUrl,
  category,
  title,
  price,
}: GuitarCardProps) {
  const { onAddToCart, isItemInCart } = useAppContext(); // Получаем функции из контекста

  const isAdded = isItemInCart(title); // Проверяем, добавлен ли товар в корзину по title

  const onAdd = () => {
    onAddToCart({ id, imageUrl, category, title, price }); // Добавляем товар в корзину
  };

  // Форматируем цену с разделением тысяч
  const formattedPrice = price.toLocaleString("ru-RU");

  return (
    <div className="card" key={id}>
      <Link href={`/tovar/${encodeURIComponent(title)}`}>
        <button className="img">
          <img src={imageUrl} alt="products" />
        </button>
      </Link>
      <p>{category}</p>
      <a>{title}</a>
      <b>{formattedPrice} ₽.</b> {/* Отображаем цену с разделением тысяч */}
      <button className="add">
        {!isAdded ? (
          <button onClick={onAdd}>
            <img
              className="img2"
              src="/pictures/toCart.svg"
              alt="Add to Cart"
            />
          </button>
        ) : (
          <Link href="/cart">
            <img className="img2" src="/pictures/inCart.svg" alt="In Cart" />
          </Link>
        )}
      </button>
    </div>
  );
}
