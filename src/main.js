import { inject } from "@vercel/analytics";
import { processSubmit } from "./generate-block";
import "./style.css";

inject();

const form = document.getElementById("form");
form.addEventListener("submit", processSubmit);
