// ==UserScript==
// @name               极简财新
// @name:en            Simple-Caixin
// @namespace          http://www.caixin.com/
// @version            0.4.20200705
// @description        清理页面无用元素（水印、分享按钮、导航栏、评论栏、网站地图等），调整板式，专注阅读
// @description:en  A script which removed some unuseful elements on caixin.com
// @author             EAK8T6Z
// @match              *://*.caixin.com/*
// @homepageURL        https://github.com/EAK8T6Z/Simple-Caixin
// @supportURL         https://github.com/EAK8T6Z/Simple-Caixin/issues
// @run-at             document-start
// @license            MPL 2.0
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function (event) {

    //格式调整
    document.getElementsByClassName("conlf")[0].style.width = "990px" //宽屏模式
    if(document.getElementsByClassName("media pip_none").length>0){document.getElementsByClassName("media pip_none")[0].style.padding = "20px"}//图片padding

    //顶部清理
    if(document.getElementsByClassName("sitenav").length>0){document.getElementsByClassName("sitenav")[0].remove()}//去导航栏
    if(document.getElementsByClassName("vioce-box-cons").length>0){document.getElementsByClassName("vioce-box-cons")[0].remove()}//去听新闻图标
    if(document.getElementsByClassName("icon_key").length>0){document.getElementsByClassName("icon_key")[0].remove()}//去标题图标

    //正文清理
    if(document.getElementsByClassName("subhead").length>0){document.getElementsByClassName("subhead")[0].remove()}
    document.getElementById('Main_Content_Val').style = "" //去背景水印
    document.getElementsByClassName("pip")[0].remove()//去相关推荐
    document.getElementsByClassName("function01")[0].remove()//去社交网络按钮、去划线分享
    if(document.getElementsByClassName("morelink").length>0){document.getElementsByClassName("morelink")[0].remove()}//去更多链接
    if(document.getElementsByClassName("greenBg").length>0){document.getElementsByClassName("greenBg")[0].remove()}//去微信分享
    if(document.getElementsByClassName("redBg").length>0){document.getElementsByClassName("redBg")[0].remove()}//去微博分享
    if(document.getElementsByClassName("cx-wx-hb-tips").length>0){document.getElementsByClassName("cx-wx-hb-tips")[0].remove()}//我朋友不看财新


    //右侧清理
    document.getElementsByClassName("conri")[0].remove()//去右侧栏
    document.getElementsByClassName("f_ri")[0].remove() //去漂浮按钮
    document.getElementsByClassName("fenghui_code")[0].remove() //去二维码

    //底部清理
    document.getElementsByClassName("comment")[0].remove()//去评论
    document.getElementsByClassName("map")[0].remove()//去底部网页地图
    if(document.getElementsByClassName("hot_word_v2").length>0){document.getElementsByClassName("hot_word_v2")[0].remove()}//去底部热词
    if(document.getElementsByClassName("bottom_tong_ad").length>0){document.getElementsByClassName("bottom_tong_ad")[0].remove()}//去底部广告
    document.getElementsByClassName("copyright")[0].remove()//去copyright
    document.getElementsByClassName("navBottom")[0].remove()//去navBottom

    document.getElementsByClassName("multimedia")[0].remove()
    document.getElementsByClassName("multimedia")[0].remove()//去图片、视听推荐

    setTimeout(function () { //5秒后再次清除，避免屏蔽元素重新加载
            if(document.getElementById('Main_Content_Val').style.background.length>0){document.getElementById('Main_Content_Val').style = ""}
            if(document.getElementsByClassName("cx-wx-hb-tips").length>0){document.getElementsByClassName("cx-wx-hb-tips")[0].remove()}
            if(document.getElementsByClassName("renewals").length>0){document.getElementsByClassName("renewals")[0].remove()} //去除财新通续费提醒
        }, 5000);

},true);


