if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/149.57d99fa1336f1034.js",revision:"57d99fa1336f1034"},{url:"/_next/static/chunks/2.1a5c566a00547558.js",revision:"1a5c566a00547558"},{url:"/_next/static/chunks/217.f5f7066604437a12.js",revision:"f5f7066604437a12"},{url:"/_next/static/chunks/237.62b44a90c07ac374.js",revision:"62b44a90c07ac374"},{url:"/_next/static/chunks/277-f7a2654278bfb78f.js",revision:"f7a2654278bfb78f"},{url:"/_next/static/chunks/293.c91ded635c127462.js",revision:"c91ded635c127462"},{url:"/_next/static/chunks/306.246b981872b78848.js",revision:"246b981872b78848"},{url:"/_next/static/chunks/373.8725a98deeb0700f.js",revision:"8725a98deeb0700f"},{url:"/_next/static/chunks/408.8e8d4224c09329ba.js",revision:"8e8d4224c09329ba"},{url:"/_next/static/chunks/410.c3f025875339be58.js",revision:"c3f025875339be58"},{url:"/_next/static/chunks/551.65c18975dc969f7a.js",revision:"65c18975dc969f7a"},{url:"/_next/static/chunks/597.926ceef5ca4b6b07.js",revision:"926ceef5ca4b6b07"},{url:"/_next/static/chunks/695.a21dc5a24253831d.js",revision:"a21dc5a24253831d"},{url:"/_next/static/chunks/739.629161277125401f.js",revision:"629161277125401f"},{url:"/_next/static/chunks/855-2a9977d6d519d155.js",revision:"2a9977d6d519d155"},{url:"/_next/static/chunks/framework-581f102fc68ef277.js",revision:"581f102fc68ef277"},{url:"/_next/static/chunks/main-b071bb8d2e345a05.js",revision:"b071bb8d2e345a05"},{url:"/_next/static/chunks/pages/_app-f627f8752df35760.js",revision:"f627f8752df35760"},{url:"/_next/static/chunks/pages/_error-20842ea6d58912cc.js",revision:"20842ea6d58912cc"},{url:"/_next/static/chunks/pages/home-211396912e77b6d2.js",revision:"211396912e77b6d2"},{url:"/_next/static/chunks/pages/index-736dac420d1d13df.js",revision:"736dac420d1d13df"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-43aa13dd386d8b40.js",revision:"43aa13dd386d8b40"},{url:"/_next/static/css/13dd63657e0b7074.css",revision:"13dd63657e0b7074"},{url:"/_next/static/css/360a8ed1b7bf388c.css",revision:"360a8ed1b7bf388c"},{url:"/_next/static/css/5f19d4c7c5f62887.css",revision:"5f19d4c7c5f62887"},{url:"/_next/static/css/83a4fbaee7ee6af2.css",revision:"83a4fbaee7ee6af2"},{url:"/_next/static/css/8615e63b0c97fa9a.css",revision:"8615e63b0c97fa9a"},{url:"/_next/static/css/8f6af4c357d63948.css",revision:"8f6af4c357d63948"},{url:"/_next/static/css/f7a0a376caad35b6.css",revision:"f7a0a376caad35b6"},{url:"/_next/static/g_AyxpIDaAsdddTIYRilC/_buildManifest.js",revision:"490d64a4a420936f15445087a2fc2343"},{url:"/_next/static/g_AyxpIDaAsdddTIYRilC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"fd97771d52a3b51f34f0495a5c9e2ba5"},{url:"/android-chrome-384x384.png",revision:"37662eac37a88b417b86996515e84339"},{url:"/android-chrome-512x512.png",revision:"fa4457a325e33c6429552a9d690458d6"},{url:"/apple-touch-icon.png",revision:"7746ead3ef46c1a91c2aef3642af8c42"},{url:"/browserconfig.xml",revision:"9d7ef97cd4ef776899be060c70c43b34"},{url:"/favicon-16x16.png",revision:"f7545fb004466f6c23924937a98b93bd"},{url:"/favicon-32x32.png",revision:"e937731d98bda438faf68e9cfe50830e"},{url:"/favicon.ico",revision:"cf8f8d59396c8a7610849ba5e9f459cb"},{url:"/fonts/GTAlpina-ThIt.woff2",revision:"ad2322e47dc69d2d552fe02a2a14b8bf"},{url:"/fonts/MessinaSansMono-Regular.woff2",revision:"43e1f4015ed1b56f34ec5c8ff53c59a7"},{url:"/fonts/MessinaSansMono-SemiBold.woff2",revision:"1c82dd18431d150bd4d4c6cf347e4dfd"},{url:"/fonts/NeueMontreal-Bold.woff2",revision:"da555f875fe852053e47f7eca13679fd"},{url:"/fonts/NeueMontreal-Light.woff2",revision:"6b97509c7a8f00aab0b9b9921d7b4a74"},{url:"/fonts/NeueMontreal-Regular.woff2",revision:"7b7a88d98848e2705c549b1dd0faa68a"},{url:"/manifest.json",revision:"8a51ddd0406d7b95528edb728253983a"},{url:"/mobile-temp-images/hamo-banner.png",revision:"dafc2f62415ddef95939b42f4a4e88da"},{url:"/mobile-temp-images/sf-game-boy.png",revision:"0ebe02eca824215f532da45f2a957759"},{url:"/mobile-temp-images/tetsuo.jpg",revision:"65e1ae3f0e3e6e054abad2db79e15dd8"},{url:"/mstile-150x150.png",revision:"e3069089c21858958c73275f63226d16"},{url:"/robots.txt",revision:"719f1635eb154a46ac3f8f133fa36366"},{url:"/sf-og.jpg",revision:"34f0818b519214c6738e01c0f2dcfd46"},{url:"/site.webmanifest",revision:"8a51ddd0406d7b95528edb728253983a"},{url:"/sitemap-0.xml",revision:"f9cf6cd2c7ba8bfa0dc56717a129b009"},{url:"/sitemap.xml",revision:"ae513a15508d498356ce871568ce1a8e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
