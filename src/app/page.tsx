"use client"

import Home from '@/components/Home/Home'
import HomeAuth from '@/components/Home/HomeAuth';
import { useAuthContext } from '@/context/AuthProvider';
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react';

export default function HomeScreen() {
  const authcontext = useAuthContext();

  useEffect(() => {
    console.log(authcontext)
  }, [authcontext])
  return (
    authcontext.user.auth ? 
    <HomeAuth />
    : 
    <Home />
  )
}
