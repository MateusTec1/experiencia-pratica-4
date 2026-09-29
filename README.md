# Projeto Front-End - ONG Conexão Solidária (Experiência Prática IV)

Este projeto foi desenvolvido para a disciplina de **Desenvolvimento Front-End (Experiência Prática IV)** do curso de Análise e Desenvolvimento de Sistemas.

Trata-se do site de uma ONG fictícia voltada para apoio social e comunitário, desenvolvido com HTML5 semântico, CSS3 responsivo, acessibilidade (WCAG 2.1 AA) e boas práticas de versionamento com GitFlow no GitHub.

---

## 📌 O que foi feito nesta etapa

Nesta quarta etapa, o foco foi estruturar o fluxo de desenvolvimento profissional e garantir que a aplicação esteja acessível e pronta para deploy:

1. **Versionamento com GitFlow:** criação das branches `main`, `develop` e `feature/*`, com commits semânticos e tag de release (`v1.0.0`).
2. **Acessibilidade (WCAG 2.1 AA):** inclusão de atalho para pular direto para o conteúdo principal (*skip link*), navegação por teclado com foco visível, bom contraste de cores e formulários acessíveis com `<label>` associado.
3. **Otimização e Build:** criação de um script simples em Node.js (`scripts/build.js`) para minificar CSS e JavaScript gerando a pasta `dist/` para produção.

---

## 🌳 Estrutura do GitFlow

O repositório foi organizado da seguinte forma:

- `main`: código estável e pronto para publicação (produção / releases).
- `develop`: branch onde as funcionalidades foram reunidas e testadas.
- `feature/documentacao-readme`: branch onde este README foi estruturado.
- `feature/acessibilidade-wcag`: implementação dos skip links e melhorias de acessibilidade.
- `feature/otimizacao-deploy`: criação do script de build e configuração do projeto para produção.

### Padrão de Commits Utilizado

Para organizar as mensagens de commit, utilizei a convenção do Conventional Commits:

- `feat:` quando uma funcionalidade nova é criada
- `fix:` para correções de código ou layout
- `docs:` para alterações nesta documentação
- `perf:` para melhorias de desempenho e minificação
- `chore:` para configurações iniciais do projeto

---

## 📁 Estrutura de Pastas

```text
experiencia-pratica-4/
├── index.html           # Página inicial da ONG
├── projetos.html        # Página de projetos e prestação de contas
├── cadastro.html        # Formulário de voluntários e doadores
├── css/
│   ├── style.css        # Estilos gerais do site
│   └── design-system.css# Cores, espaçamentos e componentes
├── js/
│   ├── script.js        # Interações de tela e menu
│   └── masks.js         # Máscaras de CPF, telefone e CEP
├── assets/images/       # Imagens e ícones em SVG
├── scripts/
│   └── build.js         # Script que minifica CSS/JS e gera a pasta dist/
├── package.json         # Scripts de automação do projeto
└── README.md            # Documentação do projeto
```

---

## ♿ Acessibilidade Implementada (WCAG 2.1 AA)

- **Skip Link:** atalho no início da página que permite ao usuário de teclado ir direto para `#conteudo-principal`.
- **Navegação por Teclado:** foco visível (`:focus-visible`) em todos os botões, links e campos ao usar a tecla `Tab`.
- **Semântica HTML5:** uso de tags estruturais (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Formulários:** campos com `<label>` associados via `id`/`for`, agrupamentos com `<fieldset>` e avisos claros de validação.
- **Imagens:** todas as imagens com atributo `alt` preenchido.
- **Contraste:** cores escolhidas para garantir boa leitura tanto em textos normais quanto em títulos.

---

## 🚀 Como Executar

### 1. Testar no navegador
Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox).

### 2. Rodar o build de produção (opcional)
Se tiver o Node.js instalado no computador:
```bash
npm run build
```
Os arquivos minificados serão gerados automaticamente na pasta `dist/`.

---

## 👤 Autor

- **Nome:** Mateus Pereira Ruas
- **Usuário GitHub:** [@MateusTec1](https://github.com/MateusTec1)
- **Curso:** CST em Análise e Desenvolvimento de Sistemas
