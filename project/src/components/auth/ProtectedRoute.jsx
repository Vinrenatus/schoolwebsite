import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function ProtectedRoute({ children, role }) {
  const { currentUser, isAdmin } = useAuth()

  if (!currentUser) {
    return <Navigate to="/login" />
  }

  if (role === 'admin' && !isAdmin) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute