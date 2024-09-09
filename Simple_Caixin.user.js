// ==UserScript==
// @name               极简财新
// @name:en            Simple-Caixin
// @namespace          http://www.caixin.com/
// @version            0.6.20240806
// @description        清理页面无用元素（水印、分享按钮、导航栏、评论栏、网站地图等），调整板式，专注阅读
// @description:en     A script which removed some unuseful elements on caixin.com
// @author             EAK8T6Z
// @match              *://*.caixin.com/*
// @homepageURL        https://github.com/EAK8T6Z/Simple-Caixin
// @supportURL         https://github.com/EAK8T6Z/Simple-Caixin/issues
// @grant              GM_addStyle
// @run-at             document-start
// @license            MPL 2.0
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
        /* 格式调整 */
        /* 调整导航栏宽度 */
        .littlenav, .littlenavwarp, .littlenavmore, .Nav {
            width: 100% !important;
        }
        /* 设置导航栏布局 */
        .littlenavwarp {
            display: flex;
            justify-content: center;
            gap: 2rem;
            box-sizing: border-box;
            max-width: 970px;
        }
        /* 左侧导航项目布局 */
        .littlenavwarp > .left {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        /* 导航菜单布局 */
        .Nav > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        /* 调整主要内容区域宽度和边距 */
        .comMain {
            max-width: 990px !important;
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
        }
        /* 设置内容区域为全宽 */
        .conlf {
            width: 100% !important;
        }
        /* 调整图片边距 */
        .media.pip_none {
            padding: 20px;
        }

        /* 响应式图片处理 */
        /* 设置图片容器的基本样式 */
        .media, .media_pic, .media_pic dt {
            width: 100% !important;
            max-width: 480px !important;
            height: auto !important;
            position: relative;
        }
        /* 设置图片容器的布局和背景 */
        .media_pic {
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 3 / 2;
            background-color: #f0f0f0; /* 图片加载前的背景色 */
            min-height: unset !important;
        }
        /* 设置图片本身的样式 */
        .media_pic img {
            max-width: 100%;
            max-height: 100%;
            width: auto !important;
            height: auto !important;
            object-fit: contain !important;
        }
        /* 对不支持 aspect-ratio 的浏览器使用替代方案 */
        @supports not (aspect-ratio: 1 / 1) {
            .media_pic::before {
                content: "";
                display: block;
                padding-top: 66.6%; /* 3:2 的宽高比 */
            }
            .media_pic img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
        .media dd {
            width: min(100%, 480px);
            box-sizing: border-box;
        }

        /* 中等屏幕设备调整 */
        @media screen and (max-width: 998px) {
            .logimage {
                display: none; /* 隐藏财新 logo */
            }
            .Nav .navtabs {
                margin: 0;
            }
            .littlenavwarp > .searchbox {
                display: none; /* 隐藏搜索框 */
            }
        }

        /* 隐藏不需要的元素 */
        .sitenav, .vioce-box-cons, .icon_key, .subhead, .pip, .function01, .morelink,
        .greenBg, .redBg, .cx-wx-hb-tips, .conri, .f_ri, .fenghui_code, .comment,
        .hot_word_v2, .bottom_tong_ad, .copyright, .navBottom, .multimedia,
        .share_list, .pc-aivoice, .pc-aivoice.trial, .renewals {
            display: none !important;
        }

        /* 移除背景水印 */
        #Main_Content_Val {
            background: none !important;
        }
    `);
})();