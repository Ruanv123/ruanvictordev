---
pubDate: "September 23, 2023"
title: Typescrit basic guide for begginers
category: Typescript
description: tudo sobre o basico de typescritp
---

O typescript e uma ferramenta para agilizar e melhorar o desenvolvimento co javascript

# vamos começar com os tipos primitivos

Os tipos primitivos sao os tipos mais simples e mais usados no javascript

São eles:

- number
- string
- boolean

no typescript voce tem que tipar as variaveis

```ts
const age: number = 18;
const Name: string = "john";
const isDev: boolean = true;
```

## arrays

para trabalhar com variaveis de array

```ts
const ids: number[] = [1, 2, 3, 4, 5];
const nomes: string[] = ["john", "sarah", "matte"];
```

## tuplas

Temos tambem o tipo tupla onde voce pode atribuir dois objetos como um Record

```ts
const person: [number, string] = [21, "jefrrey"];
```

podemos ter um array de tuplas

```ts
const persons: [number, string][] = [
  [1, "jane"],
  [2, "john"],
];
```

## Interseções

uma interseção e uma atibuicao de mais de um tipo a uma variavel

```ts
const productId: string | null = 10;
```

## Enum

um enum é um tipo com um valor pré definido

```ts
enum StatusCode {
  Ok = 200,
  Error = 400,
  Server_Error = 500,
  Not_Found = 404,
}

if (response.status === StatusCode.Ok) {
  //... resto do código
}
```

## Type Assertions

um tipe assertion é um tipo any que pode ser reatribuido depois

```ts
const productName: any = "Crocs";

let itemId = <number>productName;
```

# agora vamos falar de funções

as funções tambem devem ser tipadas

```typescript
const sum = (x: number, y: number): number => {
  return x + y;
};

function somar(x: number, y: number): number {
  return x + y;
}

// tipagem de funcao atravez de interfaces

interface MathFunc {
  (x: number, y: number): number;
}

const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};
```

retorno do tipo void

```typescript
const message = (message: string): void => {
  console.log(message);
};
```

# Agora vamos falar de objetos e interfaces

vamos começar entendendo os tipos

```ts
type Order = {
  productId: string;
  price: number;
};

const order: Order = {
  productId: "10",
  price: 21,
};
```

para validar se uma variavel ou dado que pode ser nulo vai chegar coloque o sinal de !

```ts
const testte: string | null = "teste";

setDados(testte!);
```
