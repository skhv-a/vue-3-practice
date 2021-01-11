import { Post } from "../api/models/post";
import useRequest from "../api/useRequest";

const useGetPost = () => {
  const { state, call } = useRequest<Post>();

  const getPost = async (postID: number) => {
    await call(`https://jsonplaceholder.typicode.com/posts/${postID}`);
  };

  return {
    postState: state,
    getPost,
  };
};

export default useGetPost;
