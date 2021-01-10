export const debounce = (fn: Function, ms: number) => {
  let timer: any;

  return (...args: any[]) => {
    const later = () => {
      clearTimeout(timer);
      fn(...args);
    };

    clearTimeout(timer);
    timer = setTimeout(later, ms);
  };
};
