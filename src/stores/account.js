import AccountService from '../services/account_service';

export default {
  state: {
    account: ""
  },

  mutations: {
    performLogin(state, user) {
      state.account = user;
      localStorage.setItem('account', JSON.stringify(user));
    },
    loadLocalStorageAccount(state) {
      let account = localStorage.getItem('account');
      if(account) {
        state.account = JSON.parse(account);
      } else {
        state.account = "";
      }
    }
  },

  actions: {
    login(context, { email, password }) {
      AccountService.login(email, password).then(user => {
        context.commit("performLogin", user)
      })
    },
    loadLocalAccount(context) {
      context.commit("loadLocalStorageAccount");
    }
  },

  getters: {
    isLoggedIn(state) {
      return state.account != ""
    }
  }
}
