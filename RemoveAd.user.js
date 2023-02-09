// ==UserScript==
// @name         真·百度去除广告
// @namespace    https://github.com/ty-zyp/Tampermonkey
// @version      0.2
// @description  删除百度的垃圾广告
// @author       ty-zyp
// @match        *://*.baidu.com/*
// @supportURL   https://github.com/ty-zyp/Tampermonkey
// @updateURL    https://github.com/ty-zyp/Tampermonkey/RemoveAd.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    // 添加隐藏样式，防止页面闪烁
    function hide(element) {
        if (element != undefined) {
            element.style.position = "fixed";
            element.style.top = "-2000px";
            element.style.position = "-2000px";
        }
    }
    const number = 10;
    const arr = []
    
     function clear(){
        // 清除A类广告
        const Aadvert = document.querySelectorAll("a[data-click]")
        Aadvert.forEach(e=>{
            if(e.getAttribute('data-click')=='{"rsv_snapshot":"1"}'){
                hide($(e).parents('div.new-pmd')[0])
            }
        })
        //清除B类广告
        const Badvert = document.querySelectorAll("div[posid]")
        Badvert.forEach(e=>{
            hide($(e)[0])
        })
    }
    // 循环定时，防止后面插入
    const time = setInterval(()=>{
        clear()
    },100)
})();