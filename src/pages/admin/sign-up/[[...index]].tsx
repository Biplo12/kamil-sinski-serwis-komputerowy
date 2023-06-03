import { SignUp, useUser } from '@clerk/nextjs';
import * as React from 'react';

export default function AdminLogin() {
  const { isSignedIn } = useUser();

  return (
    <div className='bg-black-stalion flex h-screen w-full flex-col items-center justify-center'>
      {!isSignedIn && (
        <SignUp
          path='/admin/sign-up'
          routing='path'
          signInUrl='/admin/sign-in'
          afterSignUpUrl='/admin/dashboard'
        />
      )}
    </div>
  );
}
