import { useRef } from 'react'
import { useEffect } from 'react'

import { Form, Label, FieldError, Submit, EmailField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <Metadata title="Signup" />

      <HeaderWithRulers className="mb-8 text-white" heading="SIGNUP" />
      <Form onSubmit={onSubmit} className="mb-10">
        <div className="relative mb-4">
          <Label name="email" errorClassName="error">
            Email
          </Label>
          <EmailField
            name="email"
            errorClassName="error"
            placeholder=""
            ref={emailRef}
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
            placeholder=""
            errorClassName="rw-input rw-input-error"
            autoComplete="current-password"
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />
          <FieldError name="password" className="error-message" />
        </div>

        <Submit>Sign Up</Submit>
      </Form>
      <div className="auth-links">
        <Link to={routes.login()}>Ready to Login</Link>
      </div>
    </>
  )
}

export default SignupPage
