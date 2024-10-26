import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  console.log(VITE_API_URL);
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmpassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(`${VITE_API_URL}/api/auth/signup`, {
        method: "POST",
        credentials: "include", // Ensure cookies are sent with the request
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // localStorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      // context
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmpassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Passwords don't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
