//Pieter Venter u23896257
import React from "react";
import ReactDOM from "react-dom/client";
//import { App } from "./App";
import { Person } from "./components/person";
import api from "../../api";
import { StarWars } from "./components/starWars";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StarWars/>);