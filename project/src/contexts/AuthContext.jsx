import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem('user')
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a successful login
      const user = {
        id: '1',
        email,
        name: 'Admin User',
        role: email.includes('admin') ? 'admin' : 'user'
      }
      
      setCurrentUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      return { success: true, user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const register = async (name, email, password) => {
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a successful registration
      const user = {
        id: '2',
        email,
        name,
        role: 'user'
      }
      
      setCurrentUser(user)
      localStorage.setItem('user', JSON.stringify(user))
      return { success: true, user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    currentUser,
    login,
    register,
    logout,
    isAdmin: currentUser?.role === 'admin'
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}