import axios from "axios";

const api = "https://test-dandan.herokuapp.com/";

const state = {
  auth: [],
};

const mutations = {
  getLoginAuth(state, value) {
    state.auth = value;
  },
  barang(state, value) {
    state.auth = value;
  },
};

const actions = {
  LOGIN: async ({ commit }, { data }) => {
    try {
      const resp = await axios.post(api + "auth/login", data);
      commit("getLoginAuth", resp);
      return resp;
    } catch (error) {
      return false;
    }
  },
  REGISTER: async ({ commit }, { data }) => {
    try {
      const resp = await axios.post(api + "auth/register", data);
      commit("getLoginAuth", resp);
      return resp;
    } catch (error) {
      return false;
    }
  },
  GET_BARANG: ({ commit }, { success, failed }) => {
    axios.get(api + "order").then(
      (response) => {
        success && success(response);
        commit("barang", response);
      },
      (response) => {
        failed && failed(response);
      }
    );
  },
  POST_BARANG: async ({commit}, {data, success, failed}) => {
    await axios.post(api + 'order', data).then(
      (response) => {
        success && success(response);
        commit("barang", response);
      },
      (response) => {
        failed && failed(response);
      }
    )
  },
  DELETE_BARANG: async ({commit}, {id, success, failed}) => {
    await axios.delete(api + "order/" + id).then(
      (response) => {
        success && success(response);
        commit("barang", response);
      },
      (response) => {
        failed && failed(response);
      }
    )
  },
  EDIT_BARANG: async ({commit}, {data, success, failed}) => {
    try {
      const response = await axios.put(`${api}order/${data.id}`, data.body)
      success && success(response);
      commit("barang", response);
    } catch(error) {
      failed && failed(error)
    }
  }
};

const getters = {};

export default {
  actions,
  mutations,
  state,
  getters,
};
