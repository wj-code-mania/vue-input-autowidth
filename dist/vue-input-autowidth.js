!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueInputAutowidth=e()}(this,function(){"use strict";function t(t,e){t.directive("autowidth",n)}var e=function(t,e){var n=document.querySelector(".vue-input-autosize-mirror"),o={maxWidth:"none",minWidth:"none",comfortZone:0},r=Object.assign({},o,e.value);t.style.maxWidth=r.maxWidth,t.style.minWidth=r.minWidth;var i=t.value;for(i||(i=t.placeholder||"");n.childNodes.length;)n.removeChild(n.childNodes[0]);n.appendChild(document.createTextNode(i));var a=n.getBoundingClientRect().width+r.comfortZone;a!=t.getBoundingClientRect().width&&(t.style.width=a+"px")},n={bind:function(t){if("INPUT"!==t.tagName.toLocaleUpperCase())throw new Error("v-input-autowidth can only be used on input elements.")},inserted:function(t,n){var o=document.createElement("span");o.classList.add("vue-input-autosize-mirror");var r=window.getComputedStyle(t);Object.assign(o.style,{position:"absolute",top:"-9999px",left:"-9999px",width:"auto",whiteSpace:"pre",opacity:0,border:r.getPropertyValue("border"),fontSize:r.getPropertyValue("font-size"),fontFamily:r.getPropertyValue("font-family"),fontWeight:r.getPropertyValue("font-weight"),fontStyle:r.getPropertyValue("font-style"),fontFeatureSettings:r.getPropertyValue("font-feature-settings"),fontKerning:r.getPropertyValue("font-kerning"),fontStretch:r.getPropertyValue("font-stretch"),fontVariant:r.getPropertyValue("font-variant"),fontVariantCaps:r.getPropertyValue("font-variant-caps"),fontVariantLigatures:r.getPropertyValue("font-variant-ligatures"),fontVariantNumeric:r.getPropertyValue("font-variant-numeric"),letterSpacing:r.getPropertyValue("letter-spacing"),padding:r.getPropertyValue("padding"),textTransform:r.getPropertyValue("text-transform"),ariaHidden:!0}),document.body.appendChild(o),e(t,n)},componentUpdated:function(t,n){e(t,n)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(t),t});
