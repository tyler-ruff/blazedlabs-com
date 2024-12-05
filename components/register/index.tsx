'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthContext } from '@/context/AuthContext';

export default function Register(){
    const { user } = useAuthContext() as { user: any };
    return (
        <p>
            Register
        </p>
    )
}