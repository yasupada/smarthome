import axios from "axios";

const httpUrl = `${""}`;
const rootHttpUrl = "";

//modules
const getData = async () => {
  const config = {
    method: "post",
    url: `${httpUrl}/home-automation/auth/login`,
    headers: { "User-Agent": "Axios-Mobile-App" },
  };
  return await axios(config);
};

const getFormData = async (payload = {}) => {
  const form_data = new FormData();
  form_data.append("name", "John Doe");
  return await axios(`${httpUrl}/home-automation/auth/login`, form_data, {
    headers: form_data.getHeaders(),
  });
};

export const login = async (username, password) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let payload = { username, password };
  return await axios(`${httpUrl}/home-automation/auth/login`, payload, config);
};

export const profile = async (token = "") => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let payload = {};
  return await axios(
    `${httpUrl}/home-automation/auth/profile`,
    payload,
    config
  );
};

export const home = async (token = "") => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let payload = {};
  return await axios(`${httpUrl}/home-automation/home`, payload, config);
};

export const addHome = async (token, id, payload) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios(
    `${httpUrl}/home-automation/home/add/${id}`,
    payload,
    config
  );
};

const getHomeById = async (id) => {
  const config = {
    method: "get",
    url: `${httpUrl}/home-automation/home/${id}`,
    headers: { "User-Agent": "Axios-Mobile-App" },
  };
  return await axios(config);
};

const deleteHomeById = async (id) => {
  const config = {
    method: "delete",
    url: `${httpUrl}/home-automation/home/delete/${id}`,
    headers: { "User-Agent": "Axios-Mobile-App" },
  };
  return await axios(config);
};

//get all users

const getAllUsers = async (id) => {
  const config = {
    method: "get",
    url: `${httpUrl}/home-automation/user${id}`,
    headers: { "User-Agent": "Axios-Mobile-App" },
  };
  return await axios(config);
};

//get user by id
const getUserById = async (id) => {
  const config = {
    method: "get",
    url: `${httpUrl}/home-automation/user/${id}`,
    headers: { "User-Agent": "Axios-Mobile-App" },
  };
  return await axios(config);
};

export const createNewUser = async (token, payload) => {
  const config = {
    headers: {},
  };
  return await axios(`${httpUrl}/home-automation/home/add/`, payload, config);
};

export const forgetPassword = async (token, payload) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios(
    `${httpUrl}/home-automation/user/forgotpassword`,
    payload,
    config
  );
};

const deleteUserById = async (id = 0) => {
  const config = {
    method: "delete",
    url: `${httpUrl}/home-automation/user/delete/${id}`,
    headers: { "User-Agent": "Axios-Mobile-App" },
  };
  return await axios(config);
};

export const changePassword = async (token, payload = { email: "" }) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios(
    `${httpUrl}/home-automation/user/changepassword`,
    payload,
    config
  );
};

export const updateProfile = async (
  token,
  payload = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  }
) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return await axios(`${httpUrl}/home-automation/user/update`, payload, config);
};

const exportHttp = {};

module.exports = exportHttp;
