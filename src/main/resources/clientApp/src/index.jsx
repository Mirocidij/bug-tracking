import './styles/styles'
import axios from "axios";
import Post from "./models/Post";
import './styles/less'
import './babel'
import './lol'
import React from "react";
import {render} from 'react-dom'

axios
    .get("http://localhost:9000/greeting")
    .then(res => console.log(res.data))
    .catch()

let post = new Post("Title", "Some message in post")

console.log(post.toString())

const App = () => (
    <div>
        <div className="logo"></div>
        <h1>Hello, Man</h1>
        <hr/>
        <div className="box">
            <h2>Less</h2>
        </div>
    </div>
)

render(<App/>, document.getElementById('root'))