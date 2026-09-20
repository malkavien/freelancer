# Rafael de Almeida Rodrigues — Portfolio & Freelance Website

Website profissional de alta conversão e alto impacto técnico desenvolvido para promover os serviços, consultorias e perfil de **Rafael de Almeida Rodrigues** (Desenvolvedor Backend Pleno/Senior • Node.js • TypeScript • PHP • Mestre em Ciência da Computação).

O projeto é otimizado para deploy instantâneo na **Vercel** com suporte a SPA routing, estilização moderna com Tailwind CSS e componentes interativos.

---

## 🚀 Diferenciais do Site

- **Console & API Playground Interativo**: Permite a recrutadores e clientes testarem requisições simuladas (`GET /api/v1/profile`, `POST /api/v1/payments/pix/webhook`, `GET /api/v1/benchmarks/sql-optimizer`, `GET /api/v1/observability/elk-status`), inspecionando tempos de resposta, headers e comandos `cURL`.
- **Calculadora de Briefing para Freelance**: Os clientes selecionam o tipo de demanda (ex: integração PIX, criação de API, otimização de banco de dados, migração de monólito), o prazo desejado e o assistente monta um briefing pronto com 1 clique para o WhatsApp.
- **Linha do Tempo e Formação**: Detalhamento da atuação na Linkdesign, NovaCode, RCosta e do Mestrado na UFERSA/UERN (PPgCC - CNPq).
- **Matriz de Habilidades com Filtro**: Classificação por proficiência e tempo de experiência.
- **Canais Diretos de Conversão**: Botão flutuante/cards de WhatsApp, cópia de e-mail com 1 clique e formulário direto.

---

## 🛠️ Stack Tecnológica

- **Frontend**: React 18, TypeScript, Vite
- **Estilização**: Tailwind CSS (Dark Mode com paleta Emerald/Cyan Tech)
- **Ícones**: Lucide React
- **Hospedagem & CI/CD**: Vercel

---

## 💻 Como Rodar Localmente

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado (v18+).
2. Clone ou acerte o diretório do projeto:
   ```bash
   cd e:\Documentos\Freelancer
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra no navegador: [http://localhost:3000](http://localhost:3000)

---

## 🚀 Como Publicar na Vercel

O projeto já inclui o arquivo `vercel.json` configurado para roteamento SPA sem erros 404.

### Opção 1: Pelo GitHub (Recomendada - Deploy Automático a Cada Commit)

1. Crie um repositório no seu GitHub (ex: `portfolio-rafael`):
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio profissional e freelance de rafael rodrigues"
   git branch -M main
   git remote add origin https://github.com/malkavien/portfolio-rafael.git
   git push -u origin main
   ```
2. Acesse [vercel.com](https://vercel.com) e faça login com seu GitHub.
3. Clique em **"Add New..."** -> **"Project"**.
4. Importe o repositório `portfolio-rafael`.
5. A Vercel detectará automaticamente o framework como **Vite**.
6. Clique em **"Deploy"**! Em menos de 1 minuto seu site estará no ar com domínio grátis `.vercel.app` e SSL automático.

### Opção 2: Pela Linha de Comando (Vercel CLI)

Se preferir publicar direto pelo terminal:
```bash
npx vercel
```
Siga as perguntas rápidas do terminal para autorizar e publicar instantaneamente.

---

## ⚙️ Personalização de Conteúdo

Todos os dados do site estão desacoplados em arquivos TypeScript dentro da pasta `src/data/`:
- `src/data/profile.ts`: Dados pessoais, contatos, bio e redes sociais.
- `src/data/services.ts`: Lista de serviços freelance oferecidos e tecnologias.
- `src/data/experience.ts`: Histórico profissional e formação acadêmica.
- `src/data/skills.ts`: Matriz de competências técnicas.
- `src/data/mockApi.ts`: Endpoints e respostas do API Playground.
