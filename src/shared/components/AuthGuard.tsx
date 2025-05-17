import { useState } from 'react';
import { useSetAtom } from 'jotai';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@remote/firebase';
import { userAtom } from '@atoms/user';

// 인증처리
function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState(false);
  const setUser = useSetAtom(userAtom);

  onAuthStateChanged(auth, user => {
    if (user != null) {
      setUser({
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? '',
        photoURL: user.photoURL ?? '',
      });
    } else {
      setUser(null);
    }

    setInitialize(true);
  });

  // splash가 보통 보여지는 시점
  if (initialize === false) {
    return null;
  }

  return <>{children}</>;
}

export default AuthGuard;
