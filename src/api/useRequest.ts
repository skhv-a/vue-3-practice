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

const useRequest = <res>() => {
  const state = ref<State<res | null>>(initialState);

  const call = async (config: RequestInfo) => {
    try {
      state.value = { ...state.value, isLoading: true };

      const response = await fetch(config);
      const data = await response.json();

      state.value = { ...state.value, response: data };
    } catch (error) {
      state.value = { ...state.value, error };
    } finally {
      state.value = { ...state.value, isLoading: false };
    }
  };

  return { state, call };
};

export default useRequest;
