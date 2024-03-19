---
pubDate: "Março 18, 2024"
title: "Mascaras de input com React"
category: React
description: Guia de uso de mascaras de input no React.js
---

O post de hoje é sobre um pacote do npm chamado [React number format](https://s-yadav.github.io/react-number-format/). Uma simples lib de mascara de input

## como usar

exemplo simples do uso do component de mascara sendo usado para mascara de cpf

```tsx
<PatternFormat format="###.###.###-##" mask="_" />
```

a propriedade de mask serve para mostrar na tela oq vai ficar visivel para o usuario

algumas outras propriedades interessantes

### Allow empty format

o ` allowEmptyFormatting` serve para deixar a mascara ser visivel mesmo se o input estiver vazio

### Custom inputs

para usar um input customizado passe essa propriedade `customInput={Input}` pode ser passado qualquer component jsx que tenha as propriedades de um input, e automaticamente o input

## caso de uso com shadcn ui

caso de uso com react-hook-form e shadcn-ui

```tsx
<FormField
  control={form.control}
  name="cpf"
  render={({ field }) => (
    <FormItem>
      <FormLabel>
        Cpf <RedText text="*" />
      </FormLabel>
      <FormControl>
        <PatternFormat
          format="###.###.###-##"
          mask="_"
          allowEmptyFormatting
          customInput={Input}
          {...field}
          disabled={isPending}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
```
