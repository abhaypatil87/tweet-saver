const storageWrapper = {
  get: function (k) {
    try {
      return JSON.parse(localStorage.getItem(k));
    } catch (e) {
      return null;
    }
  },
  set: function (k, v) {
    localStorage.setItem(k, JSON.stringify(v));
  },
  remove: function (k) {
    localStorage.removeItem(k);
  },
};

export default storageWrapper;
