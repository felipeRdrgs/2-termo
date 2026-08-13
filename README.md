# 2-termo

Material didático e exercícios em JavaScript usados nas aulas do 2º termo.

## Descrição

Repositório com exercícios e pequenos projetos em JavaScript e alguns arquivos estáticos (HTML) usados durante as aulas.

## Tecnologias utilizadas

- Node.js
- Biblioteca: `readline-sync` (para entrada via console)
- HTML/CSS (arquivos de projeto na pasta `PROJETO`)

## Estrutura de pastas

- `desafios/` - exercícios curtos em JavaScript (votação, desconto, combustível, etc.)
- `LAÇOS/` - exemplos e exercícios com laços e arrays
- `BCD/` - material organizado por aula (ex.: `BCD/AULA3`)
- `PROJETO/` - páginas HTML do projeto de aula
- `LIMA/` - (pasta vazia/sem arquivos JS analisados)
- `README.md` - este arquivo

## Resumo dos exercícios (por pasta)

- `desafios/`
	- `desafio1.js` — calcula idade a partir do ano de nascimento e verifica elegibilidade para votar.
	- `desafio2.js` — aplica desconto de 10% para contas >= 100 (exemplo de condição).
	- `desafio3.js` — compara preço do álcool com gasolina (relação álcool/gasolina).
	- `desafio4.js` — classifica categoria por faixa etária (infantil, juvenil, adulto, sênior).
	- `desafio5.js` — exemplo de checagem de renda para empréstimo (renda e status booleano).
	- `teste.js` — arquivo de teste/placeholder.

- `LAÇOS/`
	- `aray.js` — demonstração básica de arrays.
	- `aray2.js` — avaliação de pesos de peças e cálculo de média com validação de lote.
	- `ativ2.js` — soma de preços até sentinel (0) — contém pequenas inconsistências de nome de variável.
	- `atividade.js` — exemplo de laço `while` e contagem.

- `BCD/AULA3/`
	- `aula1.js` — sistema simples de análise de crédito (entrada de dados e validação de regras).

- `PROJETO/`
	- diversas páginas HTML: `index.html`, `cadastra-se.html`, `fidelidade.html`, `pedidos.html`, `vaga_emprego.html` (pequeno front-end de exemplo).

## Como executar os arquivos com Node.js

1. Instale o Node.js (se ainda não tiver): https://nodejs.org
2. No terminal, instale a dependência usada nos exemplos (se necessário):

```bash
npm install readline-sync
```

3. Execute um script com `node` a partir da raiz do repositório. Exemplos:

```bash
node desafios/desafio1.js
node "LAÇOS/aray2.js"
node BCD/AULA3/aula1.js
```

Observação: alguns arquivos usam acentos em nomes de pasta (`LAÇOS`). No Windows, caminhos com acentuação funcionam, mas evite espaços ou caracteres especiais quando possível.

## Instruções básicas de Git

```bash
git init                # inicializa repositório (se ainda não existir)
git add .
git commit -m "Adiciona material do 2º termo"
git branch -M main
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

## Observações e melhorias

- Alguns scripts apresentam pequenas inconsistências (nomes de variáveis com acento, typos). Recomenda-se revisar e padronizar nomes e mensagens antes de usar em avaliação automática.
- Agrupar exercícios por aula em pastas `AULA1`, `AULA2`, ... pode ajudar na organização futura.

## Autor

Prof. Celso Ricardo Carvalho

