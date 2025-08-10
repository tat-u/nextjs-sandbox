"use client";
import { useEffect, useState } from "react";
import z from "zod";

const responseSchema = z.object({
  message: z.string(),
});

export default function Page() {
  const [message, setMessage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api-route/api");
      const data = await response.json();

      setMessage(responseSchema.parse(data).message);
    };

    fetchData();
  }, []);

  return <>{message}</>;
}
