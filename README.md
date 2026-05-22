# Análise do Supermercado Popular — Venturosa, PE

Este repositório contém a página institucional única (**Landing Page**) do **Supermercado Popular**, localizado em Venturosa, Pernambuco. O site foi construído utilizando tecnologias web puras (HTML5 e CSS3) focando em excelente desempenho, responsividade e uma identidade visual bem definida.

Abaixo, detalhamos a arquitetura do código, o design e o conteúdo presente na página [index.html](file:///Users/edivaldo/Library/CloudStorage/GoogleDrive-edivaldo414@gmail.com/My%20Drive/git_personal/site-supermercado-popular/index.html).

---

## 1. Identidade Visual e Design System (CSS)

A página utiliza variáveis CSS (`:root`) para consolidar sua paleta de cores institucional, facilitando a manutenção e garantindo consistência visual em todas as seções:

*   **Paleta de Cores:**
    *   `--vermelho` (`#C44133`): Cor principal de destaque (botões, elementos de ênfase).
    *   `--vermelho-escuro` (`#932D1F`): Usado para contraste de texto e fundos específicos (como a seção de contato).
    *   `--verde` (`#184F2F`): Representa a tradição e o setor de hortifrúti/frescos, usada no cabeçalho e na seção "Sobre".
    *   `--bege` (`#F4D0A0`): Cor de fundo principal da página, oferecendo uma leitura confortável e calorosa (afastando-se do branco puro).
    *   `--dourado` (`#CD974C`): Utilizado para detalhes e textos secundários de alta sofisticação.
    *   `--branco` (`#FFFFFF`): Usado em cartões de informação para máximo contraste.

*   **Tipografia:**
    *   O site consome duas famílias de fontes do *Google Fonts*:
        *   `Josefin Sans` (sans-serif): Fonte geométrica moderna usada para títulos, elementos estruturais, tags e botões.
        *   `Lora` (serif): Fonte clássica com serifa, usada em formato itálico nos textos de parágrafos para transmitir tradição e elegância.

*   **Responsividade:**
    *   Uma media query `@media (max-width: 768px)` garante que o layout se adapte perfeitamente a dispositivos móveis (smartphones e tablets), empilhando os elementos que originalmente ficam lado a lado em telas maiores (como cartões e seções divididas em duas colunas) e ajustando os espaçamentos (`padding`).

---

## 2. Estrutura do Documento HTML

A página está dividida em seções semânticas claras, facilitando tanto a leitura por humanos quanto a indexação por motores de busca (SEO):

### A. Cabeçalho (`<header>`)
*   **Logotipo em SVG:** O logotipo do mercadinho é renderizado de forma vetorial nativa (inline SVG), representando uma sacola de compras com detalhes vermelhos. Isso garante carregamento instantâneo e nitidez em qualquer tela.
*   **Texto Identificador:** Apresenta o nome "Mercadinho e Frigorífico Supermercado Popular".

### B. Seção Hero (`<section class="hero">`)
*   O topo da página traz o slogan: **"Tradição familiar no coração de Venturosa"**.
*   Inclui um parágrafo explicativo da atuação principal do supermercado.
*   Contém um distintivo de destaque com o ano de fundação (**"Desde 2015"**), reforçando a credibilidade e tempo de mercado da empresa.

### C. Seção de Informações (`<section class="info-section">`)
Organizada em um grid de duas colunas, apresenta cartões brancos com borda superior vermelha contendo os principais dados da empresa:
1.  **Dados Empresariais:**
    *   Razão Social: *Edivaldo Bezerra Alves*
    *   Nome Fantasia: *Mercadinho e Frigorífico Popular*
    *   CNPJ destacado em uma tag estilizada: `08.935.303/0001-08`
    *   Natureza Jurídica: *Empresário Individual — Microempresa*
    *   Atividade Principal (CNAE): *4712-1/00 (Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios)*
2.  **Endereço e Contato:**
    *   Endereço físico completo no Centro de Venturosa, PE.
    *   Telefone: `(87) 3833-1888`
    *   E-mail de contato e link do site.
    *   Situação Cadastral: Ativa desde 10/07/2015.

### D. Seção Sobre (`<section class="sobre-section">`)
*   Reforça o posicionamento da marca com o título **"Acolhedora, confiável e familiar"**.
*   Apresenta uma grade com os principais atributos/valores do negócio: *Acolhedora, Confiável, Familiar, Acessível, Sofisticada* e *Amigável*.

### E. Seção de Contato Rápido (`<section class="contato-section">`)
*   Uma seção com fundo vermelho escuro focada na conversão e contato rápido do cliente.
*   Repete de forma simplificada o Endereço, Telefone e E-mail.

### F. Rodapé (`<footer>`)
*   Exibe os direitos autorais com o intervalo de funcionamento e dados de registro (`© 2015–2025 Supermercado Popular — CNPJ 08.935.303/0001-08`).
*   Informa a localização: *Venturosa, Pernambuco — Brasil*.

---

## 3. SEO e Integrações Técnicas

*   **Verificação do Facebook:** Contém a tag `<meta name="facebook-domain-verification" content="..." />` necessária para verificar a propriedade do domínio no Gerenciador de Negócios do Facebook (Meta Business Suite), permitindo a veiculação de anúncios otimizados e postagens integradas.
*   **Tags Semânticas:** O site faz uso de tags semânticas da especificação HTML5 (`header`, `section`, `address`, `footer`) que ajudam o Google e outros buscadores a entenderem o contexto da página.
*   **Viewport:** A tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` garante que a escala inicial seja renderizada de forma correta em dispositivos mobile, evitando problemas de zoom indesejado.