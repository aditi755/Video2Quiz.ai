

import React from 'react';
import { Button } from './button';
import { useRouter } from 'next/navigation';
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs'; // Import Clerk hooks and components
import { toast } from 'react-hot-toast';
const GetStartedButton = () => {
  const router = useRouter();
  const { isSignedIn } = useUser(); // Check if the user is signed in

  const handleClick = () => {
    if (isSignedIn) {
      // Redirect to the dashboard if the user is already signed in
      router.push('/dashboard');
      toast.success('Welcome to dashboard')
    }
  };

  return (
    <div className='flex gap-4'>
      {isSignedIn ? (
        <>
          <Button onClick={handleClick}>
            Dashboard
          </Button>
          <SignOutButton>
            <Button>
              Log Out
            </Button>
          </SignOutButton>
        </>
      ) : (
        <SignInButton mode="modal" redirectUrl="/dashboard">
          <Button>
           Log In
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default GetStartedButton;
