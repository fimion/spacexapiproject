import { roadsterFetch } from "./fetch.js";

roadsterFetch();

    let name = document.getElementById("name");
    let launchDate = document.getElementById("launchDate");
    let launchmasskg = document.getElementById("launchmasskg");
    let launchmasslbs = document.getElementById("launchmasslbs");
    let earth_distancekm = document.getElementById("earth_distancekm");
    let earth_distancemi = document.getElementById("earth_distancemi");
    let mars_distancekm = document.getElementById("mars_distancekm");
    let mars_distancemi = document.getElementById("mars_distancemi");
    let speedkm = document.getElementById("speedkm");
    let speedmi = document.getElementById("speedmi");

    name.innerHTML += roadsterResponse.name;