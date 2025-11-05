import { useMutation, useQuery } from "@tanstack/react-query";
import useApi from "./useApi";

const useAdmin = () => {
  const { JOL_BASE_URL } = useApi();

  const fetchEmployeesQuery = useQuery({
    queryKey: ["admins"],
    queryFn: async () => {
      const { data } = await JOL_BASE_URL.get("/employees");
      return data;
    },
  });

  const fetchInvitesQuery = useQuery({
    queryKey: ["invites"],
    queryFn: async () => {
      const { data } = await JOL_BASE_URL.get("/invites");
      return data;
    },
  });

  const generateInviteMutation = useMutation<
    { token: string },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    string
  >({
    mutationFn: async (email: string) => {
      const { data } = await JOL_BASE_URL.post("/invites", { email });
      return data;
    },
  });

  return { fetchEmployeesQuery, fetchInvitesQuery, generateInviteMutation };
};

export default useAdmin;
