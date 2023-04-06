import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';

type FirebaseUser = User | null;

type UserContextValueType = {
  user: FirebaseUser;
  loading: boolean;
};

const UserContext = createContext<UserContextValueType>({
  user: null,
  loading: true,
});

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<FirebaseUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = { user, loading };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
