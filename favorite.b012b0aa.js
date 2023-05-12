!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequirecc13;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequirecc13=o),o.register("kfjQ8",(function(t,r){function n(e){var t=document.querySelectorAll(".header__link"),r=document.querySelector(".search-form"),n=document.querySelector(".search-button__mobile");switch(t.forEach((function(e){e.classList.remove("header__link--active")})),e){case 1:t[0].classList.add("header__link--active");break;case 2:t[1].classList.add("header__link--active"),r.remove(),n.remove();break;case 3:r.remove(),n.remove(),t[2].classList.add("header__link--active");break;default:console.log('error. value in function "setActiveLink(`HERE`)" is incorrect')}}e(t.exports,"setActiveLink",(function(){return n}))})),o.register("jzQFI",(function(t,r){function n(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Oops, something went wrong: ",e.message)}}e(t.exports,"save",(function(){return n})),e(t.exports,"load",(function(){return a}));var a=function(e){try{var t=localStorage.getItem(e);return null===t?[]:JSON.parse(t)}catch(e){console.error("Oops, something went wrong: ",e.message)}}})),o.register("1KhuP",(function(r,n){e(r.exports,"concatNewsAndWeather",(function(){return c})),e(r.exports,"createMarkUp",(function(){return s})),e(r.exports,"newsMarkUp",(function(){return u})),e(r.exports,"dateFormating",(function(){return d}));var a=o("dDDEV"),i=o("1t1Wn");function c(e,r,n,o){var i=[],c=function(e,r,n){for(var o=function(o){var c=t(a)({},e[o]),s=void 0;c.id?s=c.id:c._id?s=c._id:c.uri&&(s=c.uri);var u=r.find((function(e){return e.id===s}));u&&(c.favorite=!0);var d=n.find((function(t){return t.id===e[o].id}));d&&(c.read=!0),i.push(c)},i=[],c=0;c<e.length;c++)o(c);return i}(e,r,n);return c.forEach((function(e,t){window.innerWidth<767&&0===t&&"weather"===o.flag&&i.push(o),i.push(function(e){if(e.asset_id){var t=e.section,r=e.abstract,n=e.title,a=e.asset_id,o=e.url,i=e.published_date,c=e.media,s=e.flag,u=void 0===s?"news":s,d=e.favorite,l=void 0!==d&&d,f=e.read;return{category:t,lead_paragraph:r,id:a,published_date:i,title:n,url:o,media:c,flag:u,favorite:l,read:void 0!==f&&f}}if(e._id){var p=e.section_name,v=e.lead_paragraph,g=e._id,_=e.web_url,h=e.pub_date,w=e.headline.main,m=e.multimedia,y=e.flag,b=void 0===y?"news":y,x=e.favorite,k=void 0!==x&&x,O=e.read;return{category:p,lead_paragraph:v,id:g,published_date:h,url:_,title:w,media:m,flag:b,favorite:k,read:void 0!==O&&O}}if(e.slug_name){var S=e.section,P=e.abstract,j=e.uri,M=e.url,N=e.published_date,A=e.title,D=e.multimedia,q=e.flag,E=void 0===q?"news":q,I=e.favorite,C=void 0!==I&&I,L=e.read;return{category:S,lead_paragraph:P,id:j,published_date:N,url:M,title:A,media:D,flag:E,favorite:C,read:void 0!==L&&L}}}(e)),window.innerWidth>=1280?1===t&&"weather"===o.flag&&i.push(o):window.innerWidth>=768&&0===t&&"weather"===o.flag&&i.push(o)})),i}function s(e){return e.map((function(e){return"news"===e.flag?u(e):(r=(t=e).temp,n=t.descriptrion,a=t.city,o=t.icon,i=t.dayWeek,c=t.date,'<li class="weather__card">\n    <div class="weather__wrapper">\n      <p class="weather__temperature">'.concat(r,'°</p>\n      <div class="weather__box">\n        <p class="weather__description">').concat(n,'</p>\n        <div class="weather__city">\n            <svg class="weather__location-icon">\n              <path d="M16 2.001c-6.072 0.007-10.992 4.927-11 10.998v0.001c0 0.005 0 0.011 0 0.017 0 2.486 0.833 4.777 2.236 6.61l-0.019-0.026s0.3 0.395 0.348 0.45l8.435 9.95 8.439-9.953c0.044-0.053 0.345-0.447 0.345-0.447l0.001-0.004c1.383-1.806 2.216-4.098 2.216-6.583 0-0.005 0-0.009 0-0.014v0.001c-0.007-6.072-4.928-10.993-11-11h-0.001zM16 17c-2.209 0-4-1.791-4-4s1.791-4 4-4v0c2.209 0 4 1.791 4 4s-1.791 4-4 4v0z"></path>\n            </svg>\n            ').concat(a,'\n        </div>\n    </div>\n  </div>\n<img alt="Current weather"class="weather-picture" src="https://openweathermap.org/img/wn/').concat(o,'@2x.png"></img>\n  <p class="weather__day">').concat(i,'</p>\n  <p class="weather__date">').concat(c,"</p>\n</li>"));var t,r,n,a,o,i,c})).join("")}function u(e){var r=e.category,n=e.lead_paragraph,a=e.id,o=e.published_date,c=e.url,s=e.title,u=e.media,l=e.favorite,f=e.read,p=d(o),v="https://i.postimg.cc/vZrscCZ0/tablet-1x.jpg",g="";if(u)if(1===u.length){var _=u[0]["media-metadata"];g=t(i)(_,3)[2].url}else if(4===u.length){var h=u.find((function(e){return 440===e.width}));g=h?"".concat(h.url):v}else{var w=u.find((function(e){return"master495"===e.subtype}));g=w?"".concat("https://www.nytimes.com/").concat(w.url):v}else g=v;var m="";return m="true"===String(l)?"Remove from favorite":"Add to favorite",'<li data-read="'.concat(f,'" class="news-card">\n    <div class="news-card__image">\n     <div class="news-card__darkend" data-read="').concat(f,'"></div>\n      <img src="').concat(g,'" alt="News" loading="lazy" />\n      <span class="news-card__category">').concat(r,'</span>\n      <span class="news-card__status" data-read="').concat(f,'">Already read\n      <svg class="news-card__icon-tick" width="18px" height="18px">\n       <use xlink:href="#icon-tick"></use>\n       </svg>\n      </span>\n      <span class="news-card__status--have" data-read="').concat(f,'">Have read</span>\n      <button data-id="').concat(a,'" data-favorite="').concat(l,'" class="news-card__favorite">\n        <span>').concat(m,'</span>\n        <svg class="news-card__icon" data-favorite="').concat(l,'" width="16px" height="16px">\n      <use xlink:href="#icon-heart-empty"></use>\n         </svg>\n         <svg class="news-card__icon-full" data-favorite="').concat(l,'" width="16px" height="16px">\n              <use xlink:href="#icon-heart-full"></use>\n            </svg>\n      </button>\n    </div>\n    <div class="news-card__wrapper">\n    <h2 class="news-card__title">\n      ').concat(s,'\n    </h2>\n    <p class="news-card__text">\n      ').concat(n,'\n    </p>    \n      <div class="news-card__box">\n        <span class="news-card__date">').concat(p,'</span>\n        <a data-ida="').concat(a,'" target="_blank" data-read="').concat(f,'" class="news-card__read" href="').concat(c,'">Read more</a>\n      </div>\n    </div>\n  </li>')}function d(e){var t=new Date("".concat(e));return"".concat(l(t.getUTCDate()),"/").concat(l(t.getUTCMonth()+1),"/").concat(t.getUTCFullYear())}function l(e){return String(e).padStart(2,"0")}})),o.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n.default(e,t,r[t])}))}return e};var r,n=(r=o("hKHmD"))&&r.__esModule?r:{default:r}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r.default(e)||n.default(e,t)||i.default(e,t)||a.default()};var r=c(o("8slrw")),n=c(o("7AJDX")),a=c(o("ifqQW")),i=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("6QU98",(function(t,r){function n(){var e="theme",t=!0,r=document.querySelector("#theme-clicker"),n=document.querySelector("body");r.addEventListener("change",(function(){n.classList.toggle("dark"),t=!t,localStorage.setItem(e,t)})),null!==localStorage.getItem(e)&&(t=JSON.parse(localStorage.getItem(e))),t?r.checked=!1:(n.classList.add("dark"),r.checked=!0)}e(t.exports,"themeCheck",(function(){return n}))})),o.register("cpjrW",(function(t,r){e(t.exports,"showPageNotFound",(function(){return a})),e(t.exports,"hidePageNotFound",(function(){return o}));var n={noNewsPage:document.querySelector(".news-page"),noNewsPageTitle:document.querySelector(".news-page__title")};function a(e){n.noNewsPage.style.display="block",n.noNewsPageTitle.textContent=e}function o(){n.noNewsPage.style.display="none",n.noNewsPageTitle.textContent=""}}))}();
//# sourceMappingURL=favorite.b012b0aa.js.map
