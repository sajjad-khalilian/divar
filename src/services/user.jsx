import api from "configs/api"
import { getCookie } from "utils/cookie"

getCookie("accessToken")


const getProfile = () => api.get("user/whoami").then(res => res || false)


const getPosts = () => api.get("post/my")


const getAllPosts = () => api.get("")

export {getProfile , getPosts , getAllPosts}