# Portal de Auditoria Financeira — proposta institucional

Versão de avaliação na branch `design/portal-institucional-20261019`, baseada em `b86f150` da `origin/main`. Sessão: `auditfin-redesign-20261019`; responsável: Codex / Arthur Autis. Desenvolvimento em worktree própria, com estado e navegador em `.preview-session/` (ignorado pelo Git). Publicação exclusivamente como Preview pela integração existente do repositório com o projeto `app-auditfin`, equipe `autis-analytics-projects`.

## Direção de UI/UX

Página única com azul institucional, verde discreto, Public Sans, fotografia do acervo e hierarquia de leitura. A abertura explica o portal; uma lista orienta a consulta das três frentes; o índice lateral acompanha os documentos extensos. Menu móvel, atalhos, foco de teclado, alto contraste persistente e respeito à preferência de movimento reduzido.

Referências estudadas:

- [Design System gov.br](https://www.gov.br/ds) e [repositório SERPRO](https://github.com/serpro-brasil/GOVBR-DS): consistência, acessibilidade e navegação institucional.
- [Portal da Transparência / CGU](https://portaldatransparencia.gov.br/): consultas por assunto e separação entre contexto e dados.
- [Pró-Brumadinho / Governo de Minas Gerais](https://www.mg.gov.br/pro-brumadinho): organização do contexto do acordo, anexos e obrigações.
- [Dados Abertos da Câmara](https://dadosabertos.camara.leg.br/): apresentação orientada às tarefas do visitante.
- [Anti-slop design](https://github.com/Cuuper22/anti-slop-design) e [Unslop UI / catálogo](https://github.com/claudiusararu/unslop-ui-skill/blob/main/TELLS.md): revisão de padrões genéricos, repetição visual, contraste e linguagem. Consultados como referências; nenhum código ou pacote desses projetos foi incorporado.

A identidade é própria do portal. Textos jurídicos, ressalvas, nota de rodapé, oito perguntas frequentes, PDF e seis fontes Power BI foram preservados. Os painéis passam a carregar mediante solicitação e oferecem abertura externa. A lista de documentos continua respeitando `public/config.json` (`showDocuments: false`); documentos de teste não foram expostos. O português passa a ser o idioma padrão; as rotas de idioma existentes foram mantidas.

## Validação da proposta

Build de produção (`npm run build`), TypeScript, ESLint dos arquivos alterados e `git diff --check`. Inspeção visual em Chromium, desktop e celular; checagem de overflow entre 320 e 1920 px; menu móvel com transferência de foco; accordions; links internos; preferência de alto contraste; ativação do iframe Power BI com foco no painel. Axe WCAG 2 A/AA e 2.1 AA sem violações automáticas nas verificações desktop e móvel. Isso não substitui uma auditoria manual completa com tecnologias assistivas nem garante disponibilidade dos dados externos do Power BI.

O build ainda informa um aviso preexistente de variável não utilizada em `documents-panel.tsx`. A prévia recebe `noindex` no ambiente Vercel Preview. O `vercel.json` foi corrigido para Next.js, removendo o redirecionamento de todas as requisições para um `index.html` inexistente.

## Desenvolvimento

Aplicação [Next.js](https://nextjs.org) com App Router, TypeScript e Tailwind CSS.

## Getting Started

First, run the development server:

```bash.m
npm run dev.
# or
yarn dev 
# or
pnpm devd
# or
bun dev
```.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
