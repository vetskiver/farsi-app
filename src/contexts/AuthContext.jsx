import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from '../lib/supabase.js'

// Create the context
const AuthContext = createContext({})

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Provider component 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in when app loads
  useEffect(() => {
    // Get current user session
    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)
      } catch (error) {
        console.error('Error getting user:', error)
      } finally {
        setLoading(false)
      }
    }
    getUser()

  // Listen for auth changes 
  const { data: { subscription} } = supabase.auth.onAuthStateChange(
    async (event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    }
  )

  return () => subscription.unsubscribe()

}, [])
  

  // Sign up function
  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) {
        throw error
      }
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // Sign in function 
  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email, 
        password,
      }) 
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error}
    }
  } 

  // Sign out function
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const value = {
    user, 
    loading, 
    signUp, 
    signIn, 
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}