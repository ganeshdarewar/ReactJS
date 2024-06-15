import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (e) {
      throw e;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (e) {
      throw e;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (e) {
      console.log("appwrite service :: getCurrentUser ::error", e);
    }
    return null;
  }
  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (e) {
      console.log("logout error", e);
    }
  }
}
const authService = new AuthService();
export default authService;
