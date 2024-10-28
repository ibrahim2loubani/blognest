import { ReactNode } from 'react'
import './globals.css'

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props): ReactNode {
  return children
}
