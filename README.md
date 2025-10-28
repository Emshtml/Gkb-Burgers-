# 🍔 GKB Burgers — Site Oficial

Bem-vindo ao repositório do **GKB Burgers**, o seu ponto de encontro para saborear os melhores lanches artesanais de São Paulo.

---

## 🚀 Tecnologias utilizadas

- **Next.js 14**
- **React 18**
- **Tailwind CSS 3**
- **Vercel** para deploy automático

---

## 🧱 Estrutura de pastas
Gkb-Burgers-/
├── components/
│ ├── DeliveryHome.jsx # Página principal do delivery
│ └── ProductCard.jsx # Card de produto reutilizável
│
├── pages/
│ ├── _app.js # Importa estilos globais
│ └── index.js # Exibe a tela inicial com DeliveryHome
│public/
│ └── images/
│ ├── logo.png # Logotipo principal
│ ├── hero.jpg # Banner principal (hero section)
│ ├── produto1.jpg # X-Burguer Clássico
│ ├── produto2.jpg # X-Bacon
│ ├── produto3.jpg # X-Salada
│ └── produto4.jpg # Combo GKB (lanche + batata + refri)styles/
│ └── globals.css # Estilos base com Tailwind
│
├── tailwind.config.js # Configuração do Tailwind CSS
├── postcss.config.js # Configuração do PostCSS
├── package.json # Dependências e scripts
└── README.md # Este arquivo

---

## 💡 Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Emshtml/Gkb-Burgers-.git
   cd Gkb-Burgers-
Instale as dependências:npm install
Inicie o servidor local:
npm run dev
Acesse no navegador:http://localhost:3000
🌐 Deploy

O deploy é feito automaticamente na Vercel:
https://gkb-burgers.vercel.app/
Prévia do layout

O site foi redesenhado no estilo do Delivery Davis, com:

Hero section destacada

Grid de produtos modernos

Botões chamativos de pedido

Layout otimizado para mobile
👨‍💻 Autor
https://github.com/Emshtml
Desenvolvedor Frontend | Next.js | Tailwind | Vercel

---

### ⚙️ **Como aplicar o commit**

Se estiver local:
```bash
git add README.md
git commit -m "docs: update README with new folder structure and image assets"
git push
