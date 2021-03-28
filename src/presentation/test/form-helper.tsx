import { fireEvent, RenderResult } from '@testing-library/react'
import faker from 'faker'

export const testChildCount = (sut: RenderResult, fieldName: string, count: number): void => {
  const el = sut.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

export const testButtonIsDisabled = (sut: RenderResult, fieldName: string, isDisabled: boolean): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}

export const testStatusForField = (sut: RenderResult, fieldName: string, validationError?: string): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || 'Tudo Certo!')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

export const populateField = (sut: RenderResult, fiedlName: string, value = faker.internet.email()): void => {
  const input = sut.getByTestId(fiedlName)
  fireEvent.input(input, { target: { value } })
}

export const testElementExist = (sut: RenderResult, fieldname: string): void => {
  const el = sut.getByTestId(fieldname)
  expect(el).toBeTruthy()
}

export const testElementText = (sut: RenderResult, fieldname: string, text: string): void => {
  const el = sut.getByTestId(fieldname)
  expect(el.textContent).toBe(text)
}
