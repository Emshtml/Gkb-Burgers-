import React from "react";
import Image from "next/image";

/**
 * ProductCard
 * Props:
 *  - item: { id, title, price, img, desc }
 *  - onAdd: function(item)
 *  - onDetails: function(item)
 */
export default function ProductCard({ item, onAdd, onDetails }) {
  const fallbackImg = "/images/placeholder.png"; // imagem padrão caso a original falhe

  return (
    <article className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:scale-[1.02]">
      <div className="relative w-full aspect-square">
        <Image
          src={item.img || fallbackImg}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={item.id <= 4} // prioriza os primeiros produtos
        />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.desc}</p>
          </div>
          <div className="text-sm font-bold">R$ {item.price.toFixed(2)}</div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => onAdd && onAdd(item)}
            className="bg-green-600 text-white px-3 py-2 rounded-md shadow-sm hover:bg-green-700 transition"
          >
            Adicionar
          </button>

          <button
            onClick={() => onDetails && onDetails(item)}
            className="text-sm text-gray-500 hover:underline"
          >
            Detalhes ▸
          </button>
        </div>
      </div>
    </article>
  );
}

