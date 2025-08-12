import './App.css'
import { testConnection } from './lib/supabase.js'
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx'

function AppContent() {
  const { user, loading, signOut } = useAuth()

  // Show loading while checking authentication
  if (loading) {
    return <div>Loading...</div>
  }

  // Show different content based on authentication states
  if (user) {
    return (
      <div>
        <h1>Welcome, {user.email}!</h1>
        <button onClick={signOut}>Sign out</button>
        <p>You are logged in! Dashboard coming soon...</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Farsi Flashcards App</h1>
      <p>Please log in to continue</p>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
