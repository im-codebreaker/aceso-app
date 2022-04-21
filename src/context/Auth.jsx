import React from 'react';
import { supabase } from 'supabase';

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const session = supabase.auth.session();
    console.log(session);

    setUser(session?.user ?? null);
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
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
