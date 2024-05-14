import { decodeToken, isExpired } from "react-jwt";

import { LOCAL_STORAGE_TOKEN } from "../../config";
import { get } from "../apiCaller";
import { Token } from "@/types/core";

class LocalStorageUtils {
  getItem(key: string, defaultValue = "") {
    if (typeof localStorage === "undefined") return undefined;
    let item = localStorage.getItem(key);
    if (item === null) {
      item = defaultValue;
    }
    return item;
  }
  setItem(key: string, value = "") {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, value);
    }
  }
  removeItem(key: string) {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(key);
    }
  }
  getJWTUser() {
    if (typeof localStorage === "undefined") return undefined;
    const token = this.getItem(LOCAL_STORAGE_TOKEN);
    if (!token) return undefined;
    try {
      return decodeToken<Token>(token);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        this.deleteUser();
      }
    }
  }
  getCredentialUser() {
    if (typeof localStorage === "undefined") return undefined;
    const token = this.getItem("credential");
    if (!token) return token;
    try {
      return decodeToken(token);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        this.deleteCredential();
      }
    }
  }
  getUser() {
    if (typeof localStorage === "undefined") return undefined;
    const token = this.getItem(LOCAL_STORAGE_TOKEN);
    if (!token) return undefined;
    if (isExpired(token)) {
      this.deleteUser();
      return undefined;
    }
    try {
      const { sub } = decodeToken<Token>(token)!;
      const pattern2 = /(se)+\d+/;
      const resulted = sub.match(pattern2)!;
      const memberId = resulted[0].toUpperCase();
      const fetchedMember = get(
        `/member/studentId/${memberId}`,
        {},
        { authorization: token }
      ).then((res) => res.data);

      return fetchedMember;
    } catch (err) {
      if (err.response && err.response.status === 401) {
        this.deleteUser();
      }
    }
  }

  deleteUser() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN);
  }

  deleteAllLocal() {
    localStorage.removeItem("countdownFuture");
    localStorage.removeItem("authenticated(do not delete)");
    localStorage.removeItem("question");
    localStorage.removeItem("codeBE");
    localStorage.removeItem("language");
  }

  deleteCredential() {
    localStorage.removeItem("credential");
  }
  getToken() {
    return this.getItem(LOCAL_STORAGE_TOKEN);
  }
  getCredential() {
    return this.getItem("credential");
  }
  clear() {
    localStorage.clear();
  }
}

export default new LocalStorageUtils();
