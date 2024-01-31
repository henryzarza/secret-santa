import { useEffect, useState } from "react"
import { Form, Label, InputField, FieldError, Submit, EmailField } from "@redwoodjs/forms"
import ShowHidePassword from "../ShowHidePassword"
import Upload from "../Upload"
import RadioButton from "../RadioButton"

const MyAccount = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>()

  useEffect(() => {
    if (!localStorage.theme) {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } else {
      setTheme(localStorage.theme)
    }
  }, [])

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('class', theme)
    }
  }, [theme])

  const handleThemeChange = (value: 'light' | 'dark' | 'system') => {
    if (value === 'system') {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      localStorage.removeItem('theme')
    } else {
      setTheme(value)
      localStorage.setItem('theme', value)
    }
  }

  const onSubmit = async (data: Record<string, string>) => {
    console.log('Send data 📩', data)
  }

  return (
    <>
      <h2 className="font-condensed text-7xl leading-[0.8] lg:text-[116px] uppercase text-white font-normal mb-10">
        My Account
      </h2>
      <Form onSubmit={onSubmit} className="mb-10">
        {!!theme && (
          <div className="flex gap-3 flex-wrap justify-between">
            <RadioButton
              label="Light"
              name="theme"
              id="light"
              value="light"
              onChange={() => handleThemeChange('light')}
              defaultChecked={theme === 'light'}
            />
            <RadioButton
              label="Dark"
              name="theme"
              id="dark"
              value="dark"
              onChange={() => handleThemeChange('dark')}
              defaultChecked={theme === 'dark'}
            />
            <RadioButton
              label="System"
              name="theme"
              id="system"
              value="system"
              onChange={() => handleThemeChange('system')}
              defaultChecked={theme === 'system'}
            />
          </div>
        )}
        <div className="relative mb-4">
          <Label name="name" errorClassName="error">
            Name
          </Label>
          <InputField
            name="name"
            errorClassName="error"
            placeholder=""
            type="text"
            autoComplete="name"
            validation={{
              required: {
                value: true,
                message: 'Name is required',
              },
            }}
          />
          <FieldError name="name" className="error-message" />
        </div>
        <div className="relative mb-4">
          <Label name="email" errorClassName="error">
            Email
          </Label>
          <EmailField
            name="email"
            errorClassName="error"
            placeholder=""
            autoComplete="email"
            validation={{
              required: {
                value: true,
                message: 'Email is required',
              },
            }}
          />
          <FieldError name="email" className="error-message" />
        </div>
        <div className="relative mb-4">
          <ShowHidePassword
            label="Password"
            name="password"
            autoComplete="current-password"
            placeholder=""
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />
          <FieldError name="password" className="error-message" />
        </div>
        <div className="mb-4">
          <Upload />
        </div>
        <Submit>Update</Submit>
      </Form>
    </>
  )
}

export default MyAccount
