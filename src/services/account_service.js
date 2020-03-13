import axios from 'axios';

export default {
  async login(email, password) {
    let response = await axios.post("users/sign_in", { user: { email: email, password: password } })
    return response.data;
  }
}
