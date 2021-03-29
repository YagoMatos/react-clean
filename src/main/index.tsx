import React from 'react'
import ReactDom from 'react-dom'
import { Router } from '@/presentation/components'
import { makeLogin } from './factories/pages/login/login-factories'
import { makeSignup } from './factories/pages/signup/signup-factories'
import '@/presentation/styles/global.scss'

ReactDom.render(
  <Router
    makeLogin={makeLogin}
    makeSignup={makeSignup}
  />,
  document.getElementById('main')
)
