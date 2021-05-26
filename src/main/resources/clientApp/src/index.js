import './styles/styles.css'
import axios from "axios";
import Post from "./models/Post";
import './styles/less.less'
import './babel'

axios
    .get("http://localhost:9000/greeting")
    .then(res => console.log(res.data))
    .catch()

let post = new Post("Title", "Some message in post")

console.log(post.toString())