import React, { useState } from 'react'
import Styles from './signup-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const Signup: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    nameError: 'Campo Obrigatório',
    emailError: 'Campo Obrigatório',
    passwordError: 'Campo Obrigatório',
    passwordConfirmationError: 'Campo Obrigatório',
    mainError: ''
  })

  return (
    <div className={Styles.signup}>
      <LoginHeader />
      <Context.Provider value={{ state }}>
        <form className={Styles.form}>
          <h2>Signup</h2>
          <Input type="text" name="name" placeholder="Digite seu Nome" />
          <Input type="email" name="email" placeholder="Digite seu Email" />
          <Input type="password" name="password" placeholder="Digite seu Password"/>
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua Password"/>
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Cadastrar</button>
          <span className={Styles.link}>Voltar para Login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Signup
