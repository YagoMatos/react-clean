import React, { memo } from 'react'
import Styles from './login-header-styles.scss'
import Logo from '@/presentation/components/logo/logo'

type Props = React.HTMLAttributes<HTMLElement>

const LoginHeader: React.FC<Props> = (props: Props) => {
  return (
    <header className={Styles.headerWrap}>
      <Logo />
      <h1>4Dev - Enquete para Devs</h1>
    </header>
  )
}

export default memo(LoginHeader)
