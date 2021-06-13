import storageWrapper from "../utils/storage";
import { STORAGE_KEY } from "../config";

const createStore = () => {
  const store = storageWrapper.get(STORAGE_KEY);
  if (!store) {
    storageWrapper.set(STORAGE_KEY, []);
  }
};

const configureStore = () => {
  return createStore();
};

export default configureStore;
