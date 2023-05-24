import { title } from "process";
import { Content, Overlay } from "./style";
import { DialogProps } from "../../contexts/dialogContext";



export function Dialog(props: DialogProps) {

  return (
    <>
      <Overlay
        onClick={() => props.finally()}
      />
      <Content
        error={props.error ?? false}
      >
        <h4>{props.title}</h4>
        <p >{props.message}</p>
        {props.isQuestion ?
          <div>
            <button
              onClick={() => {
                props.refuse ? props.refuse() : null
                props.finally()
              }}
            >não</button>
            <button
              onClick={() => {
                props.finally()
                props.accept ? props.accept() : null
              }}
            >sim</button>
          </div> :
          <div>
            <button
              onClick={() => props.finally()}
            >ok</button>
          </div>
        }
      </Content>
    </>
  )
}
