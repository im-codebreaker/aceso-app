import React from 'react';
import { supabase } from 'supabase';

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: (data) => supabase.auth.signOut(),
    user: user,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
