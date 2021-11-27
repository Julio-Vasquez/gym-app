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
          <Route path="/" element={<Login appName="APOLO GYM" />} />
          <Route path="/login" element={<Login appName="APOLO GYM" />} />
          <Route path="/setnewpassword/:token" element={<NewPassword />} />
          <Route
            path="reset-password"
            element={<ResetPassword appName="APOLO GYM" />}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Public
