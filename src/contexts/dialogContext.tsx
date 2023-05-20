import { ReactNode, createContext, useState } from 'react'
import { Dialog } from '../components/dialog'

export interface DialogProps {
  title: string;
  message: string;
  isQuestion?: boolean;
  accept?: () => void;
  refuse?: () => void;
  finally: () => void;
}

interface AlertProps { title: string, message: string }

interface QuestionProps extends AlertProps {
  accept: () => void;
  refuse: () => void;
}

interface DialogContextProps {
  alert: (props: AlertProps) => void;
  question: (props: QuestionProps) => void;
}

export const DialogContext = createContext({} as DialogContextProps)
const { Provider } = DialogContext

export function DialogProvider({ children }: { children: ReactNode }) {

  const [show, setShow] = useState(false)
  const [dialogPorps, setDialogProps] = useState<DialogProps>({} as DialogProps)

  function alert({ message, title }: AlertProps) {
    setShow(true)
    setDialogProps({
      title,
      message,
      finally: () => setShow(false)
    })
  }

  function question({ message, title, accept, refuse }: QuestionProps) {
    setShow(true)
    setDialogProps({
      isQuestion: true,
      title,
      message,
      accept,
      refuse,
      finally: () => setShow(false)
    })
  }

  return (
    <Provider
      value={{
        alert, question
      }}
    >
      {show && <Dialog {...dialogPorps} />}
      {children}
    </Provider>
  )
}
