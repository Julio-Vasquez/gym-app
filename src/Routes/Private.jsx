import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from '../components/Loading'
import Layout from '../views/Private/Layout'

const Check = lazy(() => import('../views/Private/Check'))
const Clients = lazy(() => import('../views/Private/Clients'))
const Trainers = lazy(() => import('../views/Private/Trainers'))
const Dashboard = lazy(() => import('../views/Private/Dashboard'))
const Pays = lazy(() => import('../views/Private/Pays'))

const Private = () => {
  return (
    <Layout appName="APOLO GYM">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/login" element={<Dashboard />} />
            <Route exact path="/clients" element={<Clients />} />
            <Route exact path="/check" element={<Check />} />
            <Route exact path="/trainers" element={<Trainers />} />
            <Route exact path="/pays" element={<Pays />} />
            <Route path="/login" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Layout>
  )
}

export default Private
