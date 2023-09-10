---
pubDate: "September 9, 2023"
title: Perfect Input Component
category: React
description: Perfect input component react typescript
---

O post de hoje vai ser sobre um component pronto com toda a tipagem de um input html mas um component personalizado e compatibilidade com react hook form

```tsx
import { InputHTMLAttributes, forwardRef, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type = "text", name = "", label = "", helperText = "", ...props },
    ref
  ) => {
    const inputId = useId();
    const hasError = helperText.length > 0;
    return (
      <div className="flex w-full flex-col">
        <label htmlFor={inputId}>{label}</label>
        <input
          id={inputId}
          type={type}
          name={name}
          {...props}
          ref={ref}
          className={`mt-1 rounded-lg border border-gray-300 px-3 py-2 outline-none placeholder:text-slate-500 focus:border-blue-400 ${
            hasError ? "border-red-500" : ""
          }`}
        />
        {hasError && <p className="mt-1 text-red-500">{helperText}</p>}
      </div>
    );
  }
);
```
