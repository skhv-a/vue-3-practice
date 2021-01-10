import { ref } from "vue";

interface State<res> {
  isLoading: boolean;
  response: res | null;
  error: any | null;
}

const initialState: State<null> = {
  isLoading: false,
  response: null,
  error: null,
};

const useRequest = () => {
  const state = ref(initialState);

  const call = async (config: RequestInfo) => {
    try {
      state.value.isLoading = true;

      const response = await fetch(config);

      state.value.response = await response.json();
    } catch (error) {
      state.value.error = error.message;
    } finally {
      state.value.isLoading = false;
    }
  };

  return { state, call };
};

export default useRequest;
