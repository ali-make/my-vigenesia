import axios from "axios";
import querystring from "querystring";

const API = axios.create({
  baseURL: "https://vigenesia.org/api",
});
// const API = axios.create({ baseURL: "http://localhost:8000/vigenesia/api" });

export const fetchPosts = () => API.get("/Get_motivasi");
export const fetchUsers = () => API.get("/user");
export const createPost = (newPost) =>
  API.post(
    "/dev/POSTmotivasi/",
    querystring.stringify({
      iduser: newPost.iduser,
      isi_motivasi: newPost.isi_motivasi,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
export const updatePost = (updatedPost) =>
  API.put("/dev/PUTmotivasi", updatedPost);
export const deletePost = (id) => API.delete(`/dev/DELETEmotivasi/${id}`);
export const signUp = (formData) => API.post("/registrasi", formData);
export const signIn = (formData) => API.post("/login", formData);
export const editProfile = (formDataProfile) =>
  API.put("/PUTprofile", formDataProfile);
