// ESG Module = An external file that containes reusable code
//              that can be imported into other JavaScriptfiles..
//              write reusable code or many different apps.
//              can contain variables , classes , functions .. and more
//              introduced as part of ECMAScript 2015 update.

import { PI, getArea, getCircumference, getSurfaceVolume } from "./mathUtil.js";

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getSurfaceVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^`);
