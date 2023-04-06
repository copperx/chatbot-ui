import { useRouter } from 'next/router';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useUser } from '../UserContext';
import styles from '../styles/signin.module.css';

function SignInPage() {
  const { user } = useUser();
  const router = useRouter();

  // Redirect if the user is already signed in.
  if (user) {
    router.push('/');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={signIn}>
        <h2 className={styles.title}>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
