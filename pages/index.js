import { useState } from "react";

export default function Home() {
  const [lanches] = useState([
    { nome: "X-Burguer", preco: "R$ 22,00", imagem: "/imagem/xburguer.jpeg" },
    { nome: "X-Salada", preco: "R$ 22,00", imagem: "/imagem/Xsalada.png" },
    { nome: "X-Bacon", preco: "R$ 29,90", imagem: "/imagem/xbacon.png" },
    { nome: "X-Tudo", preco: "R$ 30,00", imagem: "/imagem/xtudo.png" },
    { nome: "Batata Frita", preco: "R$ 10,00", imagem: "/imagem/batata_friita.jpeg" },
    { nome: "Guaraná 600ml", preco: "R$ 15,00", imagem: "/imagem/guarana-600ml.jpeg" },
    { nome: "Milkshake Chocolate", preco: "R$ 18,00", imagem: "/imagem/milkshake-chocolate.jpeg" },
    { nome: "Milkshake Morango", preco: "R$ 18,00", imagem: "/imagem/milkshake-morango.jpeg" }
  ]);

  const numeroWhatsApp = "5511976794749"; 

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      {/* Cabeçalho */}
      <header className="bg-zinc-950 text-yellow-400 py-5 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wide">🍔 Burger House</h1>
        <p className="text-zinc-300 mt-1">O sabor que chega até você!</p>
      </header>

      {/* Seção de Apresentação */}
      <section className="text-center py-12 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          Sabor autêntico, ingredientes frescos e muita crocância!
        </h2>
        <p className="max-w-3xl mx-auto text-zinc-300 text-lg leading-relaxed">
          No <strong>Burger House</strong>, cada lanche é preparado com paixão e ingredientes
          selecionados. Crocância, sabor e qualidade em cada mordida 🍟.
          Faça seu pedido direto pelo <strong>WhatsApp</strong> e receba rapidinho!
        </p>
        <a
          href={`https://wa.me/${numeroWhatsApp}?text=Olá! Quero fazer um pedido 🍔`}
          target="_blank"
          className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition"
        >
          Pedir Agora
        </a>
      </section>

      {/* Cardápio */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-400">
          Nosso Cardápio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {lanches.map((lanche, i) => (
            <div
              key={i}
              className="bg-zinc-800 rounded-2xl shadow-xl overflow-hidden border border-zinc-700 hover:border-yellow-500 hover:scale-105 transition-transform"
            >
              <img
                src={lanche.imagem}
                alt={lanche.nome}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-yellow-400 mb-1">
                  {lanche.nome}
                </h3>
                <p className="text-zinc-300 font-bold">{lanche.preco}</p>
                <a
                  href={`https://wa.me/${numeroWhatsApp}?text=Olá! Quero pedir um ${lanche.nome} 🍔`}
                  target="_blank"
                  className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


