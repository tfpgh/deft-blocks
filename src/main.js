import { processSubmit } from "./generate-block";
import "./style.css";

const form = document.getElementById("form");
form.addEventListener("submit", processSubmit);
