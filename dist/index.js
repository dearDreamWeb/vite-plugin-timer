"use strict";const e=require("colors-console");module.exports=function(t={}){const{color:o,text:n}=t;let l=+new Date;return{name:"timer",buildStart(){l=+new Date},buildEnd(){const t=(+new Date-l)/1e3,c=t%1?t.toFixed(2):t;console.log(e(o||"blue",`${n||"build complete:"} ${c}s`))}}};
