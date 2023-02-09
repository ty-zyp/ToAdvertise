// ==UserScript==
// @name         真·CSDN去除广告
// @namespace    https://github.com/ty-zyp/Tampermonkey
// @version      0.1
// @description  删除CSDN博客的垃圾广告
// @author       ty-zyp
// @match        *://*.csdn.net/*
// @supportURL   https://github.com/ty-zyp/Tampermonkey
// @updateURL    https://github.com/ty-zyp/Tampermonkey/RemoveAd.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
  'use strict';
  // 添加隐藏样式，防止页面闪烁
  function hide(element) {
      if (element != undefined) {
          element.style.display = "none";
          // element.style.position = "fixed";
          // element.style.top = "-2000px";
          // element.style.position = "-2000px";
      }
  }
   function clear(){
      const Cadvert = document.querySelectorAll("div[data-pid]")
      Cadvert.forEach(e=>{
          hide($(e)[0].parentNode)
      })
  }
  // 循环定时，防止后面插入
  const time = setInterval(()=>{
      clear()
  },100)
})();