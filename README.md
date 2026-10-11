# Portfólio de Adair Marques

Portfólio em React, Vite, Tailwind CSS e Motion. Inclui projetos, apresentação profissional, competências e contato pelo LinkedIn.

## Desenvolvimento

Use Node.js compatível com o Vite instalado (20.19+ ou 22.12+).

```sh
npm ci
npm run dev
```

O terminal informa a URL local. Se a porta estiver ocupada, o Vite escolhe outra.

## Verificações e produção

```sh
npm run lint
npm run build
npm run preview
```

## Conteúdo

- `src/data/projects.js`: descrições, tecnologias, links e disponibilidade. O delivery está pausado; ao voltar, altere `unavailable` para `false` e remova `status`.
- `src/components/AxionShowcase.jsx`: marca Axion Gestão e apresentação do Axion ERP, com acesso ao site `http://erpaxion.com.br/`. O card ERP AXION aponta à aplicação `http://app.erpaxion.com.br/`.
- `src/components/ContactSection.jsx`: contato profissional. Adicione e-mail ou WhatsApp apenas com dados confirmados.
- `src/pages/Home.jsx`: competências e redes sociais.

As descrições usam as informações disponíveis. Acrescente capturas de tela, sua participação e resultados reais quando esses materiais estiverem disponíveis. Não há currículo ou links de repositórios privados no site.

A logo do Axion usa WebP sem perdas. Para atualizar a marca ou gerar novamente a imagem de compartilhamento: `npm run assets -- "C:/caminho/Logo.png"`. Sem argumento, o comando gera apenas a capa de compartilhamento.

## Publicação

Publique o diretório `dist`. A rota `/projetos` precisa servir `index.html` quando acessada diretamente. O arquivo `public/_redirects` configura isso em serviços compatíveis, como Netlify e Cloudflare Pages; outros provedores precisam de uma regra equivalente. Não há publicação automática neste projeto.

Antes de publicar, substitua `/social-cover.png` nos metadados de `index.html` pela URL absoluta da imagem no domínio final, e adicione a URL canônica e `og:url` com o endereço confirmado do portfólio.

## Conferência manual

- Abrir `/projetos` diretamente e atualizar a página.
- Na home, acessar contato e depois Projetos: conferir topo, URL e foco no conteúdo.
- Usar voltar e avançar do navegador.
- Alternar tema e atualizar: a preferência deve permanecer.
- Navegar com Tab, incluindo o link para pular ao conteúdo.
- Verificar as páginas em celular e desktop, também com preferência por movimento reduzido.

## Dependências

As versões diretas são explícitas e o lockfile deve ser versionado. As correções compatíveis de dependências foram aplicadas. A auditoria ainda aponta alertas na cadeia de ferramentas do Tailwind 3; a correção sugerida pelo npm envolve migração para Tailwind 4 e precisa de validação própria. Evite `npm audit fix --force` sem revisar essa migração.
