# GamesCommerce

É um pseudo-ecommerce feito com o framework React Native para um processo de uma empresa.

O objetivo foi renderizar de fora dinâmica os items do arquivo json em uma lista onde é possível filtrar por: preço, hipe ou alfabeticamente. Existe a possibilidade de adiciona-los ao carrinho e remove-los também. Essa aplicação possui um checkout mostrando o subtotal, frete e o total. E cada game custa 10 reais de frete mas caso o valor parcial seja acima de $250 o frete é gratuito.

Download do apk [Clicando Aqui](https://drive.google.com/file/d/1v7L9tUYg1CbHwK1rOSNhh14JIw60g_NO/view?usp=sharing).

## Instalação

Dê um clone nesse repositório

Depois navegue até a pasta do projeto e rode o comando:

**lembrando que é necessário ter o expo-cli instalado**

```
npm install
```

```
expo start
```

## Props

Component **Header**:
| Props | Type | Descrição |
|--------|------------|--------|
| **onPress** | function | Quando pressionar o icon do cart vai fazer alguma coisa |
| **showCart** | boolean | Se for true ele vai mostrar o icon do cart, se for false não vai aparecer na tela |
| **showArrow** | boolean | Se for true vai mostrar uma flexa, se for false vai mostrar o logo da aplicação |
| **backToHome** | function | Quando pressionar o icon da flexa, poderá executar uma função de callback |


Component **Filters**:

| Props | Type | Descrição |
|--------|------------|--------|
| **onPressAlpha** | function | Quando pressionado, poderá executar uma função de callback |
| **onPressPrice** | function | Quando pressionado, poderá executar uma função de callback |
| **onPressPopularity** | function | Quando pressionado, poderá executar uma função de callback |

Component **Games**:

| Props | Type | Descrição |
|--------|------------|--------|
| **rate** | number | Representa o nível de popularidade do jogo |
| **cover** | string | Nome e extenção da imagem do jogo |
| **name** | string | Nome do jogo |
| **price** | number | Preço do jogo |
| **onPress** | function | Quando apertar no botão 'add to card' ele executa uma função |

Component **CartItems**:

| Props | Type | Descrição |
|--------|------------|--------|
| **cover** | string | Nome e extenção da imagem do jogo |
| **name** | string | Nome do jogo |
| **price** | number | Preço do jogo |
| **removeItem** | function | Quando apertar no botão 'add to card' ele executa uma função |

Component **CheckOut**:

| Props | Type | Descrição |
|--------|------------|--------|
| **name** | string | Nome do checkout verificado |
| **value** | number | Valor do checkout |

Component **Swipe** não possui props.

<!-- <p align="center">
  <img src="https://www.gov.br/dnocs/pt-br/conteudo-migrado/cartaz-coronavrus-png" />
</p> -->
