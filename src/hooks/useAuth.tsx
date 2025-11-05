/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useMutation } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";
// import { joiResolver } from "@hookform/resolvers/joi";
// import toast from "react-hot-toast";
// import { useParams, useRouter } from "next/navigation";
// import { loginUserSchema, userSchema } from "@/lib/schema.utils";
// import { LoginProp, RegisterProp } from "@/types/auth.types";
// import useApi from "./useApi";

// const useAuth = (
//   type: "login" | "signup",
//   user_type: "admin" | "employee" = "admin"
// ) => {
//   const router = useRouter();
//   const { JOL_BASE_URL } = useApi();
//   const isTypeLogin = type === "login";
//   const params = useParams();
//   const id = params?.id || params?.token;

//   const loginAdminControl = useForm<LoginProp>({
//     resolver: joiResolver(loginUserSchema),
//   });

//   const registerAdminControl = useForm<RegisterProp>({
//     resolver: joiResolver(userSchema),
//   });

//   const loginOrRegisterFunc = async (credentials: LoginProp | RegisterProp) => {
//     let endpoint = `/auth/${type}`;

//     if (user_type === "employee" && type === "signup" && id) {
//       endpoint = `/invites/${id}/use`;
//     }

//     const response = await JOL_BASE_URL.post(endpoint, credentials);
//     return response.data;
//   };

//   const loginOrRegisterMutation = useMutation({
//     mutationFn: loginOrRegisterFunc,
//     onSuccess: (data) => {
//       toast.success(`${type} successful`);
//       localStorage.setItem("auth-token", data?.token);

//       if (isTypeLogin) {
//         setTimeout(() => {
//           router.push(
//             user_type === "employee"
//               ? "/employee/dashboard"
//               : "/admin/dashboard"
//           );
//         }, 2000);
//       } else {
//         setTimeout(() => {
//           router.push(
//             user_type === "employee" ? "/employee/login" : "/admin/login"
//           );
//         }, 2000);
//       }
//     },
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     onError: (error: any) => {
//       const error_message = error?.response?.data?.message || "Login failed";
//       const control = isTypeLogin ? loginAdminControl : registerAdminControl;
//       control.setError("email", { message: error_message });
//       toast.error(error_message);
//     },
//   });

//   const handleSubmitForm = (data: LoginProp | RegisterProp) =>
//     loginOrRegisterMutation.mutate(data);

//   return {
//     loginAdminControl,
//     registerAdminControl,
//     handleSubmitForm,
//     loginOrRegisterMutation,
//   };
// };

// export default useAuth;

import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import {
  employeeRegisterSchema,
  loginUserSchema,
  userSchema,
} from "@/lib/schema.utils";
import {
  LoginProp,
  RegisterProp,
  EmployeeRegisterProp,
} from "@/types/auth.types";
import useApi from "./useApi";

const useAuth = (
  type: "login" | "signup",
  user_type: "admin" | "employee" = "admin"
) => {
  const router = useRouter();
  const { JOL_BASE_URL } = useApi();
  const isTypeLogin = type === "login";
  const params = useParams();
  const token = params?.id || params?.token;

  const [inviteEmail, setInviteEmail] = useState("");

  const loginAdminControl = useForm<LoginProp>({
    resolver: joiResolver(loginUserSchema),
  });
  const registerAdminControl = useForm<RegisterProp>({
    resolver: joiResolver(userSchema),
  });

  const registerEmployeeControl = useForm<EmployeeRegisterProp>({
    resolver: joiResolver(employeeRegisterSchema),
  });

  useEffect(() => {
    if (user_type === "employee" && type === "signup" && token) {
      JOL_BASE_URL.get(`/invites/${token}`)
        .then((res) => setInviteEmail(res.data?.invite?.email ?? ""))
        .catch(() => toast.error("Invalid or expired invite link"));
    }
  }, [token, type, user_type, JOL_BASE_URL]);

  const loginOrRegisterFunc = async (credentials: any) => {
    if (user_type === "employee" && type === "signup" && token) {
      const payload = {
        name: credentials.name,
        password: credentials.password,
      };
      const { data } = await JOL_BASE_URL.post(
        `/invites/${token}/use`,
        payload
      );
      return data;
    }

    const endpoint = `/auth/${type}`;
    const { data } = await JOL_BASE_URL.post(endpoint, credentials);
    return data;
  };

  const loginOrRegisterMutation = useMutation({
    mutationFn: loginOrRegisterFunc,
    onSuccess: (data) => {
      if (user_type === "employee" && !isTypeLogin) {
        toast.success("Account created successfully! You can now login.");
        return router.push("/employee/login");
      }

      toast.success(`${type} successful`);
      localStorage.setItem("auth-token", data?.token);

      if (isTypeLogin) {
        router.push(
          user_type === "employee" ? "/employee/dashboard" : "/admin/dashboard"
        );
      } else {
        router.push(
          user_type === "employee" ? "/employee/login" : "/admin/login"
        );
      }
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message || "Something went wrong";
      toast.error(message);

      const control = isTypeLogin ? loginAdminControl : registerAdminControl;
      control.setError("email", { message });
    },
  });

  const handleSubmitForm = (data: any) => {
    let filteredData = { ...data };
    delete filteredData.emailDisplay;

    if (user_type === "employee" && type === "signup") {
      filteredData = {
        name: data.name,
        password: data.password,
      };
    }

    loginOrRegisterMutation.mutate(filteredData);
  };

  return {
    loginAdminControl,
    registerAdminControl,
    registerEmployeeControl,
    inviteEmail,
    handleSubmitForm,
    loginOrRegisterMutation,
  };
};

export default useAuth;
