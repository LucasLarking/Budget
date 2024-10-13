import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SignUp {
  username: string;
  password: string;
  email: string;
}
interface Token {
  access: string;
  refresh: string;
}

const useSignUp = () => {
    const navigate = useNavigate()
  const queryClient = useQueryClient();
  return useMutation<Token, Error, SignUp>({
    mutationFn: (SignUp: SignUp) =>
      axios
        .post("http://127.0.0.1:8000/auth/users/", SignUp, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => res.data),

    onSuccess: (token) => {
      console.log(token["refresh"], token["access"]);
      localStorage.setItem("access", token["access"]);
      localStorage.setItem("refresh", token["refresh"]);
    },

    onError(error, variables, context) {
      console.log("Hook error", error);
    },
  });
};

export default useSignUp;
