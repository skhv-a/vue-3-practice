import { User } from "../api/models/user";
import useRequest from "../api/useRequest";

const useGetUser = () => {
  const { state, call } = useRequest<User>();

  const getUser = async (userID: number) => {
    await call(`https://jsonplaceholder.typicode.com/users/${userID}`);
  };

  return {
    userState: state,
    getUser,
  };
};

export default useGetUser;
