export const useCurrentRoute = () => {
  const route = useRoute();

  const currentRoute = ref(route.path);

  watch(
    route,
    (value) => {
      currentRoute.value = value.path;
    },
    { deep: true, immediate: true }
  );

  return {
    currentRoute,
  };
};
