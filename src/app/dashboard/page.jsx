"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { isAuthenticated } from '@/client/utils/auth';
import Dashboard from '@/client/components/Dashboard';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, [router]);

  return <Dashboard /> ;
}
