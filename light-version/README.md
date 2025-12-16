# 🚀 Portal de Onboarding - Davos Consulting

Portal moderno e interativo de onboarding para novos colaboradores da Davos Consulting. Desenvolvido com React, Vite, Framer Motion e design state-of-the-art.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff.svg)

## ✨ Características

### 🎨 Design Moderno
- **Tema Dark Premium** com glassmorphism e efeitos neon
- **Animações Fluidas** com Framer Motion
- **Partículas Interativas** na Hero section com física realista
- **Totalmente Responsivo** para desktop, tablet e mobile

### 🎯 Funcionalidades Principais

#### 1. **Hero Section Imersiva**
- Canvas com milhares de partículas interativas
- Detecção automática de conta corporativa (@davosbr.com)
- Efeito de repulsão ao movimento do mouse
- Gradiente radial pulsante

#### 2. **Header Dinâmico Expansível**
- Informações do colaborador sempre visíveis
- Painel expansível com dashboard completo:
  - Contexto atual (projeto e mentor)
  - Cronograma visual com timeline
  - Performance (chargeability com gráfico circular)
  - Dados financeiros (com toggle de privacidade)
- Copy-to-clipboard para e-mail
- Logo da empresa integrado

#### 3. **Citações Inspiracionais**
- Rotação automática de frases motivacionais
- Animações suaves de fade in/out
- Barra de progresso visual

#### 4. **Configurações de Segurança**
- Guia para alteração de senha Microsoft
- Instruções claras e diretas

#### 5. **Universo Microsoft 365**
- Cards para Outlook, Teams, OneDrive, Word/Excel, PowerPoint
- Destaque especial para OneNote com dicas de produtividade

#### 6. **Manual do Teams**
- Abas: Configurações Iniciais e Melhores Práticas
- Ícones decorativos para associação visual
- Cards interativos com hover effects

#### 7. **Setup do Outlook Mobile**
- Guia passo-a-passo para iOS e Android
- 6 etapas detalhadas para cada plataforma
- Dicas profissionais de uso
- Ícones decorativos temáticos

#### 8. **Downloads Organizados**
- **Wallpapers**: 4 opções de papel de parede
- **Fundos Teams**: 4 backgrounds profissionais
- **Capas LinkedIn**: 2 opções de capa
- **Identidade Visual**: 10 variações do logo Davos

#### 9. **Ferramentas e Suporte**
- Links diretos para CRM e sistema de despesas
- Informações de suporte e dia de pagamento
- Cards com gradientes e ícones

## 🛠️ Tecnologias

- **React** 19.2.0 - Biblioteca UI
- **Vite** 7.2.4 - Build tool e dev server
- **Framer Motion** 12.23.26 - Animações avançadas
- **Lucide React** 0.561.0 - Ícones modernos
- **CSS Modules** - Estilização modular

## 📦 Instalação

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre na pasta
cd SaaS\ -\ Onboarding

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 🚀 Deploy

### Vercel (Recomendado)

1. **Via Interface Web:**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte seu repositório GitHub
   - Clique em "Deploy"

2. **Via CLI:**
   ```bash
   npm install -g vercel
   vercel login
   vercel --prod
   ```

O arquivo `vercel.json` já está configurado com as settings corretas.

## 📁 Estrutura do Projeto

```
SaaS - Onboarding/
├── public/
│   ├── davos-favicon.ico
│   └── davos-logo-hero1.png
├── src/
│   ├── assets/
│   │   ├── linkedin/
│   │   ├── logos/
│   │   ├── teams/
│   │   └── wallpapers/
│   ├── components/
│   │   ├── DynamicHeader.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── InspirationalQuotes.jsx/css
│   │   ├── SecuritySection.jsx
│   │   ├── MicrosoftIntro.jsx/css
│   │   ├── TeamsManual.jsx/css
│   │   ├── OutlookSetup.jsx/css
│   │   ├── DownloadsSection.jsx/css
│   │   ├── ToolsAndSupport.jsx/css
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── DEPLOY.md
└── README.md
```

## 🎨 Paleta de Cores

```css
--primary: #7000ff;    /* Purple */
--secondary: #00c6ff;  /* Cyan */
--background: #030014; /* Deep Blue */
--text: #ffffff;       /* White */
--text-muted: rgba(255, 255, 255, 0.6);
```

## 📊 Performance

- **HTML**: 0.64 kB (gzipped: 0.37 kB)
- **CSS**: 21.37 kB (gzipped: 4.90 kB)
- **JavaScript**: 356.76 kB (gzipped: 115.01 kB)
- **Assets**: ~3.5 MB (imagens otimizadas)

## 🔧 Customização

### Dados do Colaborador

Edite `src/components/DynamicHeader.jsx`:

```javascript
const employee = {
  name: "Nome do Colaborador",
  role: "Cargo",
  email: "email@davosbr.com",
  // ... outros dados
};
```

### Citações

Edite `src/components/InspirationalQuotes.jsx`:

```javascript
const quotes = [
  { text: "Sua citação aqui", author: "Autor" },
  // ... adicione mais
];
```

## 📝 Licença

Propriedade da Davos Consulting. Todos os direitos reservados.

## 👥 Contato

- **Website**: [davosbr.com](https://davosbr.com)
- **Email**: contato@davosbr.com

---

Desenvolvido com ❤️ para a equipe Davos Consulting
