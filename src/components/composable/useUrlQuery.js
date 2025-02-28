export function useUrlQuery() {
  const getQueryParam = (key) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  };

  const setQueryParam = (key, value) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
  };

  const removeQueryParam = (key) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(key);
    window.history.pushState({}, '', url);
  };

  return { getQueryParam, setQueryParam, removeQueryParam };
}