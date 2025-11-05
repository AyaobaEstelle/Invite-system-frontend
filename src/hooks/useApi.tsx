"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { BASE_API_URL } from "@/lib/utils";

const useApi = () => {
  const JOL_BASE_URL = axios.create({ baseURL: BASE_API_URL + "/api" });

  JOL_BASE_URL.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("auth-token");
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  JOL_BASE_URL.interceptors.response.use(
    (res) => res,
    (error) => {
      const status = error.response?.status;
      const role =
        typeof window !== "undefined"
          ? localStorage.getItem("sleeky_user_role") || "admin"
          : "admin";

      switch (status) {
        case 401:
          toast.error("Unauthorized. Please log in again.");
          setTimeout(() => (window.location.href = `/${role}/login`), 1000);
          break;
        case 403:
          toast.error("Forbidden. Contact admin.");
          break;
        case 404:
          toast.error("Page not found.");
          break;
        case 429:
          toast.error("Too many requests. Try again later.");
          break;
        case 500:
          toast.error("Server error. Try again later.");
          break;
        default:
          console.error("API error:", error);
      }
      return Promise.reject(error);
    }
  );

  return { JOL_BASE_URL };
};

export default useApi;
