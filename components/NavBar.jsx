"use client"

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import {useState, useEffect } from 'react';

import { CustomButton} from '@components';

const NavBar = () => {
  const  {data: session } = useSession();

  const isUserLoogedIn = false;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);      
    })();
  }, []);
  const handleClick = (provider) =>{
      console.log('Se Logeaza');
      signIn(provider.id);
  }

  return (
    <header className='w-full  absolute z-10'>
         <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
            <Link href='/' className='flex justify-center items-center'>
                <Image
                  src='/assets/logo.svg'
                  alt='logo'
                  width={118}
                  height={18}
                  className='object-contain'
                />
            </Link>
            {session?.user ? (
                <CustomButton
                title='Sign Out'
                btnType='button'
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                handleClick={signOut}
              />
            ) : (
              <>
                {providers && 
                    Object.values(providers).map((provider) => (
                        <CustomButton
                          key={provider.name}
                          title='Sign in'
                          btnType='button'
                          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                          handleClick={() => handleClick(provider)}
                      />
                  ))
                }
              </>
            )}
            
         </nav>
    </header>
  )
}

export default NavBar