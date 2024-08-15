import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface AdminRedirectProps {
  isAdmin: boolean;
}

function AdminRedirect({ isAdmin }: AdminRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    if (isAdmin) {
      router.push('/admin');
    }
  }, [isAdmin, router]);

  return null;
}