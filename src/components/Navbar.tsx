'use client'

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { User } from 'next-auth';

function Navbar() {
  const { data: session } = useSession();
  const user : User = session?.user;

  return (
    <nav className="p-4 md:p-6 shadow-md bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <a href="#" className="text-xl font-bold mb-4 md:mb-0">
        MaskMyFeed
        </a>

        <div className='flex gap-5 '>
        {session ? (
          <>
            <span className="mr-4 mt-2">
              Welcome, {user.username || user.email}
            </span>
            
            <Button onClick={() => signOut()} className="w-full md:w-auto bg-slate-100 text-black" variant='outline'>
              Logout
            </Button>
          </>
        ) : (
          <Link href="/sign-in">
            <Button className="w-full md:w-auto bg-slate-100 text-black" variant={'outline'}>Login</Button>
          </Link>
        )}
        <Link href="/u/Abhishek">
            <Button className="w-full md:w-auto bg-slate-100 text-black" variant={'outline'}>Give feedback to Creater</Button>
          </Link>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
