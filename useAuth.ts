import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUser } from './UserContext';

export function useAuth(redirectPath = '/signin') {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace(redirectPath);
    }
  }, [user, loading, router, redirectPath]);
}
