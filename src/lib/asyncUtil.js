export default async (store, { apiCall, mutationTypes }) => {
  store.commit(mutationTypes.PENDING);
  try {
    const response = await apiCall();
    store.commit(mutationTypes.SUCCESS, response.data);
  } catch (e) {
    store.commit(mutationTypes.FAILURE, e);
  }
};
