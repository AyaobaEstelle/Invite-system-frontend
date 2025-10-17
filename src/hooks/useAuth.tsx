import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { loginUserSchema, userSchema } from "@/lib/schema.utils";
import { LoginProp } from "@/types/auth.types";
import useApi from "./useApi";

const useAuth = (type: string, user_type: "admin" | "employee" = "admin") => {
  const router = useRouter();
  const loginAdminControl = useForm<LoginProp>({
    resolver: joiResolver(loginUserSchema),
  });
  const registerAdminControl = useForm<LoginProp>({
    resolver: joiResolver(userSchema),
  });
  const { JOL_BASE_URL } = useApi();
  const isTypeLogin = type === "login";
  const params = useParams();
  const id = params?.id || params?.token;

  const loginOrRegisterFunc = async (credentials: LoginProp) => {
    let endpoint = `/auth/${type}`;

    if (user_type === "employee" && type === "signup" && id) {
      endpoint = `/invites/${id}/use`;
    }

    const response = await JOL_BASE_URL.post(endpoint, credentials);
    return response.data;
  };

  const loginOrRegisterMutation = useMutation({
    mutationFn: loginOrRegisterFunc,
    onSuccess: (data) => {
      toast.success(`${type} successful`);
      localStorage.setItem("auth-token", data?.token);

      if (isTypeLogin) {
        if (user_type === "employee") {
          setTimeout(() => router.push("/employee/dashboard"), 2000);
        } else {
          setTimeout(() => router.push("/admin/dashboard"), 2000);
        }
      } else {
        if (user_type === "employee") {
          setTimeout(() => router.push("/employee/login"), 2000);
        } else {
          setTimeout(() => router.push("/admin/login"), 2000);
        }
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      const error_message = error?.response?.data?.message || "Login failed";
      const control = isTypeLogin ? loginAdminControl : registerAdminControl;

      control.setError("email", { message: error_message });
      toast.error(error_message);
    },
  });

  const handleSubmitForm = (data: LoginProp) =>
    loginOrRegisterMutation.mutate(data);

  return {
    loginAdminControl,
    registerAdminControl,
    handleSubmitForm,
    loginOrRegisterMutation,
  };
};

export default useAuth;
