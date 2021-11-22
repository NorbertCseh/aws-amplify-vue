import { Auth } from "aws-amplify";

export const auth = {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
    setUser(state: any, payload: any): void {
      state.user = payload;
    },
  },
  actions: {
    async logout({ commit }: any): Promise<any> {
      commit("setUser", null);
      return await Auth.signOut();
    },
    async login({ commit }: any, { username, password }: any): Promise<string> {
      try {
        await Auth.signIn({ username, password });
        const userInfo = await Auth.currentUserInfo();
        commit("setUser", userInfo);
        return Promise.resolve("Success");
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    },
    async confirmSignUp(_: any, { username, code }: any) {
      try {
        await Auth.confirmSignUp(username, code);
        return Promise.resolve();
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    },
    async signUp(_: any, { username, password, email }: any) {
      try {
        await Auth.signUp({
          username,
          password,
          attributes: {
            email,
          },
        });
        return Promise.resolve();
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    },
    async authAction({ commit }: any) {
      const userInfo = await Auth.currentUserInfo();
      commit("setUser", userInfo);
    },
  },
  getters: {
    user(state: any) {
      return state.user;
    },
  },
};
