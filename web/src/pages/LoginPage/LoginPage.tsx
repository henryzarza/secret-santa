import { useRef } from 'react'
import { useEffect } from 'react'

import { Form, Label, Submit, FieldError, EmailField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <Metadata title="Login" />

      <HeaderWithRulers className="mb-8 text-white" heading="LOGIN" />
      <Form onSubmit={onSubmit} className="mb-10">
        <div className="relative mb-4">
          <Label name="email" errorClassName="error">
            Email
          </Label>
          <EmailField
            name="email"
            errorClassName="error"
            ref={emailRef}
            placeholder=""
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

        <Submit>Login</Submit>
      </Form>
      <div className="auth-links">
        <Link to={routes.forgotPassword()}>Forgot Password?</Link> •{' '}
        <Link to={routes.signup()}>Need an account?</Link>
      </div>
    </>
  )
}

export default LoginPage
