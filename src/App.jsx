import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Tables from './pages/Tables'
import Kitchen from './pages/Kitchen'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="tables" element={<Tables />} />
        <Route path="kitchen" element={<Kitchen />} />
        <Route path="*" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
