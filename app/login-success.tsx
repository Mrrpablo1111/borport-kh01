// pages/login-success.tsx
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const LoginSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    // Fetch user data and determine redirection
    async function fetchUserData() {
      const response = await fetch("/api/login"); // Call your API route
      const data = await response.json();

      if (data.redirectUrl) {
        router.push(data.redirectUrl);
      }
    }

    fetchUserData();
  }, [router]);

  return <div>Loading...</div>; // Or any loading spinner
};

export default LoginSuccess;
