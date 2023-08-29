export const useTabs = () => {
  const tabsState = ref<boolean>(false);

  const setTabsState = (isOpen: boolean) => {
    tabsState.value = isOpen;
  };

  return {
    tabsState,
    setTabsState,
  };
};
