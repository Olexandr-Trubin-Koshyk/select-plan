parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IOwx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.changePriceByBillingPeriod=exports.createPlanCards=exports.generatePricingPlanElement=void 0;var e=function(e){var n=e.name,t=e.id,a=e.monthPrice,c=e.features,r=document.createElement("div");r.className="card",r.id=t;var o=document.createElement("h2");o.className="card__title",o.textContent=n;var i=document.createElement("p");i.className="card__price",i.innerHTML="$".concat(a,"<span>/month</span>");var l=document.createElement("ul");l.className="card__features",c.forEach(function(e){var n=document.createElement("li");n.className="card__feature-item";var t=document.createElement("span");t.className="card__feature-status\n      ".concat(e.isAvialible?"checkmark":"cross");var a=document.createTextNode(e.featureName);n.appendChild(t),n.appendChild(a),l.appendChild(n)});var d=document.createElement("div");return d.className="button",d.textContent="Sign Up",d.onclick=function(){console.log("Selected plan info: ",e),console.log("Selected period: month")},r.appendChild(o),r.appendChild(i),r.appendChild(l),r.appendChild(d),r};exports.generatePricingPlanElement=e;var n=function(n){var t=document.getElementById("plansContainer");n.map(function(n){var a=e(n);t.appendChild(a)})};exports.createPlanCards=n;var t=function(e,n){document.querySelectorAll(".card").forEach(function(t){var a=t.id;if(a&&n.find(function(e){return e.id===a})){var c=n.find(function(e){return e.id===a});t.querySelector(".card__price").innerHTML="".concat("month"===e?"$".concat(c.monthPrice,"<span>/month</span>"):"$".concat(c.yearPrice,"<span>/year</span>")),t.querySelector(".button").onclick=function(){console.log("Selected plan info: ",c),console.log("Selected period: ".concat(e))}}})};exports.changePriceByBillingPeriod=t;
},{}],"alqX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.avialiblePlans=void 0;var e=[{id:"dummy-test-id-0",name:"Basic",monthPrice:1.99,yearPrice:11.99,features:[{featureName:"Feature 1",isAvialible:!0},{featureName:"Feature 2",isAvialible:!1},{featureName:"Feature 3",isAvialible:!1}]},{id:"dummy-test-id-1",name:"Standart",monthPrice:5.99,yearPrice:55.99,features:[{featureName:"Feature 1",isAvialible:!0},{featureName:"Feature 2",isAvialible:!0},{featureName:"Feature 3",isAvialible:!1}]},{id:"dummy-test-id-2",name:"Premium",monthPrice:9.99,yearPrice:99.99,features:[{featureName:"Feature 1",isAvialible:!0},{featureName:"Feature 2",isAvialible:!0},{featureName:"Feature 3",isAvialible:!0}]}];exports.avialiblePlans=e;
},{}],"KIzB":[function(require,module,exports) {
"use strict";var e=require("./utils"),l=require("./data/avialiblePlans");document.addEventListener("DOMContentLoaded",function(){(0,e.createPlanCards)(l.avialiblePlans);var i=document.getElementById("billingToggle");i.addEventListener("change",function(){var a=document.getElementById("selectBillingPeriod");i.checked?(a.classList.remove("select-plan__billing-selected-period--monthly"),a.classList.add("select-plan__billing-selected-period--yearly"),(0,e.changePriceByBillingPeriod)("year",l.avialiblePlans)):(a.classList.remove("select-plan__billing-selected-period--yearly"),a.classList.add("select-plan__billing-selected-period--monthly"),(0,e.changePriceByBillingPeriod)("month",l.avialiblePlans))})});
},{"./utils":"IOwx","./data/avialiblePlans":"alqX"}]},{},["KIzB"], null)
//# sourceMappingURL=main.b6632591.js.map