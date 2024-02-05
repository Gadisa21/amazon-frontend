import axios from "axios"

const instance = axios.create({
  baseURL: "https://amazon-backen.onrender.com/",
});
export default instance
