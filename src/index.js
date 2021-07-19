import { pascalCase } from "pascal-case";
import themessage from "./message.js";

import './css/coffee.css';
import './css/colors.css';
import './css/main.css';
import Icon from './icon.png';

const title = document.getElementById("title");

title.innerHTML = pascalCase(themessage);

// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = Icon;

element.appendChild(myIcon);