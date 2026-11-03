# Supermercado Popular · site

Landing page do Supermercado Popular, supermercado e açougue no Centro de Venturosa, PE. Site estático, sem build.

```bash
PORT=4321 npm start   # http://localhost:4321
```

## Estrutura

| Caminho | O que é |
|---|---|
| `index.html` | Página única. Inclui a meta de verificação do Facebook e os dados estruturados `GroceryStore` (horário, endereço, WhatsApp). |
| `assets/css/site.css` | Layout da página. Usa só os tokens `--sp-*` do design system. |
| `assets/js/site.js` | Selo "Aberto agora / Fechado" e destaque do dia no horário, no fuso `America/Recife`. |
| `assets/ds/` | Cópia do design system v1 (tokens, `sp.css`, `sp.js`, logos usadas). Veja `assets/ds/VERSION.txt`. |
| `assets/img/` | Fotos em WebP (640 e 1100 px) com fallback JPEG, e `og.jpg` (1200×630) para compartilhamento. |

## Atualizar o design system

Os arquivos de `assets/ds/` não devem ser editados aqui. Altere no repo `ds-supermercado-popular`, copie de novo e atualize o commit em `VERSION.txt`.

## Mudou o horário?

Atualize em três lugares: `HORARIO` em `assets/js/site.js`, a lista `.horario` e a faixa rolante em `index.html`, e `openingHoursSpecification` no JSON-LD do `index.html`.

## Fotos pendentes

Há dois `TODO foto` no `index.html`: balcão do açougue e fachada.
