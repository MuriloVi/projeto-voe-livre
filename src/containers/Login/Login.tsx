import React from 'react'
import './Login.scss'

//code use
import api from '../../services/api'
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';



function Login() {

  let history = useHistory()

  //Yup Schemas ( validação de forms)
  const validatelog = yup.object().shape({
    email: yup.string().email("Insira um email válido").required("Insira seu email"),
    password: yup.string().min(6, "Sua senha deve ter ao menos 6 caracteres").required("Insira uma senha")
  })
  //Forms utilizando Formik e Yup
  return (
    <div className="login-box">
      <h2>Qual é o seu email?</h2>
      <div className="form-login" >
        <Formik
          validationSchema={validatelog}
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={values => {
            api.get(`/account/authenticate?lgn=${values.email}&sna=${values.password}&lat=0&lon=0&v=WEB&lct=2021-02-15%2018:05`).then(response => {
              if (response.data.msr.stu === "SUCCESS") {
                history.push('/booking')
              } else {
                return alert(response.data.msr.msg)
              }
            })
          }}

        >
          <Form>
            <Field
              placeholder="Digite seu e-mail"
              name="email"
            >
            </Field>
            <ErrorMessage
              className="err-form"
              component="span"
              name="email"
            />
            <Field
              placeholder="Digite sua senha"
              name="password"
              type="password"
            >
            </Field>
            <ErrorMessage
              className="err-form"
              component="span"
              name="password"
            />
            <button type="submit">Entrar</button>
          </Form>
        </Formik>
      </div>
    </div>

  )
}


export default Login;