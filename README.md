# Plataforma Web para o Terceiro Setor: Instituto Conexão Solidária

> **Disciplina:** Desenvolvimento Front-End  
> **Atividade:** Experiência Prática I  
> **Estudante:** Mateus  
> **Padrões:** HTML5 Semântico, CSS3 Responsivo, Acessibilidade WCAG 2.1 (Nível AA), Validações Nativas e Máscaras de Entrada.

---

## 1. Visão Geral do Projeto

O terceiro setor brasileiro reúne mais de 820 mil organizações da sociedade civil e movimenta R$ 15 bilhões anuais, gerando cerca de 3 milhões de postos de trabalho. Contudo, menos de 30% dessas instituições possuem presença digital adequada.

Este projeto propõe uma plataforma web profissional, acessível e responsiva para o **Instituto Conexão Solidária**, viabilizando:
1. Apresentação institucional clara de sua missão, visão e impacto social;
2. Divulgação transparente das iniciativas solidárias e prestação de contas dos recursos arrecadados;
3. Engajamento ativo de novos apoiadores por meio de um formulário com rigorosa validação nativa de dados (CPF, Telefone, CEP, LGPD).

---

## 2. Estrutura de Diretórios

O projeto segue a padronização e boas práticas de arquitetura front-end:

```text
plataforma-ong/
├── index.html              # Página Inicial (Apresentação Institucional e Indicadores)
├── projetos.html           # Iniciativas Solidárias (Cards de Projetos e Tabela de Contas)
├── cadastro.html           # Ficha de Inscrição (Formulário Interativo e Validações)
├── css/
│   └── style.css           # Estilização responsiva, semântica e acessível (WCAG AA)
├── js/
│   └── masks.js            # Máscaras de formatação em tempo real (CPF, Celular e CEP)
├── assets/
│   └── images/             # Logotipo e ilustrações vetoriais em formato SVG
│       ├── logo.svg
│       ├── hero-ong.svg
│       ├── educacao.svg
│       ├── alimento.svg
│       └── oficina.svg
└── README.md               # Documentação técnica e guia de conformidade
```

---

## 3. Conformidade Semântica e Acessibilidade (HTML5 & WCAG)

### Elementos Semânticos Utilizados
- `<header>` e `<footer role="contentinfo">`: definição estrutural do cabeçalho e rodapé em todas as páginas.
- `<nav aria-label="...">`: navegação principal com links identificados e estado ativo via `aria-current="page"`.
- `<main id="conteudo-principal">`: área de conteúdo central associada ao mecanismo de acessibilidade *Skip Link* (`<a href="#conteudo-principal" class="skip-link">`).
- `<section>` e `<article>`: segmentação temática de blocos e cartões independentes de projetos sociais.
- `<figure>` e `<figcaption>`: marcação semântica de ilustrações e imagens contextuais com descrição acessível (`alt`).
- `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th scope="col/row">`: estruturação da prestação orçamentária para leitura linearizada por tecnologias assistivas.

### Formulário Avançado e Validações Nativas (`cadastro.html`)
- **Agrupamento Lógico**: uso de `<fieldset>` e `<legend>` para categorizar dados pessoais, localização, perfil de apoio e privacidade.
- **Validações Nativas do HTML5**:
  - `required`: campos essenciais que impedem o envio em branco.
  - `type="email"` e `type="tel"`: validação nativa do navegador para formato de correio eletrônico e teclado numérico em dispositivos móveis.
  - `type="date"` com restrições `min="1920-01-01"` e `max="2010-12-31"`: garantia de colaboradores com idade compatível.
  - Expressões Regulares (`pattern`):
    - **CPF:** `\d{3}\.\d{3}\.\d{3}-\d{2}`
    - **Telefone:** `\(\d{2}\)\s\d{4,5}-\d{4}`
    - **CEP:** `\d{5}-\d{3}`
  - Atributos `autocomplete` para preenchimento ágil e acessível (`name`, `email`, `tel`, `postal-code`, `street-address`).
- **Máscaras de Entrada (`js/masks.js`)**: formatação progressiva e não obstrutiva durante a digitação do usuário, impedindo caracteres alfabéticos em campos numéricos.

---

## 4. Como Executar e Validar

1. **Execução Local**: Abra qualquer um dos arquivos (`index.html`, `projetos.html`, `cadastro.html`) em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
2. **Validação W3C**: O código pode ser submetido diretamente no [W3C Markup Validation Service](https://validator.w3.org/), garantindo conformidade estrita aos padrões web sem avisos críticos.
3. **Navegação Acessível**: Pressione a tecla `Tab` para navegar por todos os elementos interativos, verificar o funcionamento do *Skip Link* e observar o contorno visível de foco (`:focus-visible`).
