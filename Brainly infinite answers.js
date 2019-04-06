// ==UserScript==
// @name Brainly - nieskoÅ„czone darmowe odpowiedzi
// @description:pl Darmowe nieskoÅ„czone wyÅ›wietlanie odpowiedzi w brainly.pl
// @namespace nullby
// @author KubaWojciechowski
// @match https://brainly.com/*
// @grant unsafeWindow
// @grant GM_addStyle
// @version 0.0.1.20190314202926
// ==/UserScript== 
unsafeWindow.localStorage["anonymous-free-previews"] = "[]";
// the "hack" ^ 
GM_addStyle(`
.brn-bottom-toplayer__content-box {
visibility: hidden !important;
}
`);
// remove anonymous-free-previews banner
