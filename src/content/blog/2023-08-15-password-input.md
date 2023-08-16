---
pubDate: "August 15, 2023"
title: Input de senha com função de mostrar senha
category: React
description: Script de component de input de senha com opcao de visualizar senha
heroImage: /input_password.png
---

O post de hoje é sobre um script pronto para criar um component de senha com o olho de mostrar a senha
com react mas sem estilizacao

```tsx
  import { useRef, useState } from 'react'
  import { IconEyeOff, IconEye } from '@tabler/icons-react'

  export const PasswordInput = () => {
    const inputRef = useRef(null)
    const [eyeIsClosed, setEyeState] = useState(false)

    const togglePassword = () => {
      if (inputRef.current.type === "password"){
        setEyeState(true)
        inputRef.current.type = "text"
      } else {
        setEyeState(false)
        inputRef.current.type = "password"
      }
    }

    return (
      <div>
        <input ref={inputRef} type="password" placeholder="******">
        <button type="button" onClick={togglePassword}>{eyeIsClosed ? <IconEyeOff /> : <IconEye /> }</button>
      </div>
    )
  }
```
