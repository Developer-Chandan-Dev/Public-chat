import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${VITE_API_URL}/api/users`);
        const data = await res.json();
        console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;