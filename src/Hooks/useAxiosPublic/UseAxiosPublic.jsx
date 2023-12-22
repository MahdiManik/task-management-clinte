import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "http://localhost:7000",
  //withCredentials: true,
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;