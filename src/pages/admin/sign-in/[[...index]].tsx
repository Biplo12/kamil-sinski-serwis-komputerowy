import { SignIn, useUser } from '@clerk/nextjs';
import * as React from 'react';

export default function AdminLogin() {
  const { isSignedIn } = useUser();
  return (
    <div className='bg-black-stalion flex h-screen w-full flex-col items-center justify-center'>
      {!isSignedIn && (
        <SignIn
          path='/admin/sign-in'
          routing='path'
          signUpUrl='/admin/sign-up'
          afterSignInUrl='/admin/dashboard'
        />
      )}
    </div>
  );
}
