# SaaS Onboarding Portal

Um portal de onboarding moderno e animado para novos colaboradores, construído com **React** e **Vite**.

## Funcionalidades
- **Profile Card Interativo**: Exibição de dados do colaborador com toggle de privacidade para o salário.
- **Guia de Segurança**: Passo a passo para alteração de senha Microsoft.
- **Ecossistema Microsoft 365**: Introdução aos produtos com destaque para o OneNote.
- **Central de Ferramentas**: Links rápidos para CRM, Despesas e contato de Suporte.
- **Galeria de Downloads**: Papéis de parede, fundos para Teams e capas para LinkedIn.

## Tecnologias
- React + Vite
- CSS3 (Variáveis, Flexbox, Grid, Glassmorphism)
- Animações CSS Keyframes + IntersectionObserver
- Lucide React (Ícones)

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse `http://localhost:5173`.

## Personalização
- Edite `src/App.jsx` para alterar os dados do colaborador (objeto `MOCK_EMPLOYEE`).
- Edite `src/components/DownloadsSection.jsx` para adicionar links reais de download.
