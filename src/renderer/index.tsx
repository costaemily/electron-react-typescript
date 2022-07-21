import React from "react"
import ReactDOM from "react-dom"
import { createCollection } from "../models/listaTarefas"

import "./index.scss"
import { App } from "./ui/App"

createCollection()

ReactDOM.render(<App />, document.getElementById("root"))