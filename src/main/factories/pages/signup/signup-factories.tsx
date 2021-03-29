import React from 'react'
import { Signup } from '@/presentation/pages'
import { makeSignupValidation } from './signup-validation-factory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/save-access-token/local-save-access-token-factory'
import { makeRemoteAddAccount } from '../../usecases/add-account/remote-add-account'

export const makeSignup: React.FC = () => {
  return (
    <Signup
      addAccount={makeRemoteAddAccount()}
      validation={makeSignupValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
