import { useEffect, useState } from "react";
import { DialogProps } from "../../contexts/dialogContext";
import { Content, Overlay, PromptInput } from "./style";


export function Prompt(props: DialogProps) {

  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setError(false)
  }, [value])

  function handleSubmit() {
    if (value != '') {
      props.finally()
      props.accept ? props.accept(value) : null
      return
    }
    setError(true)
  }

  return (
    <>
      <Overlay
        onClick={() => props.finally()}
      />

      <Content
        error={false}
      >

        <h4>{props.title}</h4>
        <p >{props.message}</p>

        <PromptInput
          error={error}
          type={props.type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div>
          <button
            onClick={() => {
              props.refuse ? props.refuse() : null
              props.finally()
            }}
          >Cancelar</button>
          <button
            onClick={() => handleSubmit()}
          >Concluir</button>
        </div>

      </Content>

    </>
  )
}
