import React from 'react';
import { supabase } from 'supabase';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState();

  const navigate = useNavigate();

  React.useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'PASSWORD_RECOVERY') {
          navigate('/reset-password', { replace: true });
        }
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, [navigate]);

  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    updateUser: (data) => supabase.auth.update(data),
    resetPassword: (data) => supabase.auth.api.resetPasswordForEmail(data),
    user: user,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
