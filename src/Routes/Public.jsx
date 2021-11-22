import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from '../components/Loading'

const Login = lazy(() => import('../views/Public/Login'))
const ResetPassword = lazy(() => import('../views/Public/ResetPassword'))
const NewPassword = lazy(() => import('../views/Public/NewPassword'))

const Public = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" exact element={<Login appName="APOLO GYM" />} />
          <Route
            exact
            path="/reset-password"
            element={<ResetPassword appName="APOLO GYM" />}
          />
          <Route
            exact
            path="/setnewpassword/:token"
            element={<NewPassword />}
          />
          <Route exact path="/setnewpassword/" element={<NewPassword />} />
          <Route path="/" exact element={<Login appName="APOLO GYM" />} />
          <Route from="/*" element={<Navigate replace to="/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Public
