if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>n(e,a),l={module:{uri:a},exports:t,require:r};s[a]=Promise.all(c.map((e=>l[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/MeshDark.svg",revision:"aeb41d6a878995a7266c1a23f93b277f"},{url:"/MeshLight.svg",revision:"592c37bf82512ec9b14ce79846b6cd5a"},{url:"/_next/app-build-manifest.json",revision:"a1fcb58aa85f491594f64636b58e404f"},{url:"/_next/static/chunks/14-96bcc0ab4fac009c.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/232-275e5890b98c40b4.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/344-b83c17d799796b9f.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/406-14f08539b2ba63e1.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/438-8438c19572f20fdc.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/447-cfeb2b15cd9f7575.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/472-5b0a8431bd383508.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/493-8aba81db015a05e6.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/56.57dff42a40e93d45.js",revision:"57dff42a40e93d45"},{url:"/_next/static/chunks/622-797ce8cc0294723f.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/627.463009dba964afa4.js",revision:"463009dba964afa4"},{url:"/_next/static/chunks/656.29b1375d5b1b1bac.js",revision:"29b1375d5b1b1bac"},{url:"/_next/static/chunks/705-b3e118b739b213f2.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/720-405a41e4cb712567.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/76-e6bde94b6eacc75c.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/802-57bcccf6d2cdb6dc.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/894-2cb9221a3eaf8ad0.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/91eadce7-f26356e33e67e686.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/app/%5Blng%5D/create/page-e6d216449152577e.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/app/%5Blng%5D/generations/page-b4026f8d0a5bfcfc.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/app/%5Blng%5D/generations/view/page-2945adefd0d33cda.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/app/%5Blng%5D/layout-b28be193657a7de8.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/app/%5Blng%5D/login/page-ddc1817305aa38d3.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/app/%5Blng%5D/me/page-5ba08fd93a80c0b1.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/app/%5Blng%5D/page-9f3d724459e55668.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/app/%5Blng%5D/pricing/page-f7e631b719cb2a03.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/app/%5Blng%5D/settings/page-33964bab7cacf7e7.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/app/_not-found-1fad7f705aab81ea.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/d7c7f2d2-37963cfb76722bed.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/fd9d1056-00cd6cd6b6bd3cff.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/main-556a86f3f496243e.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/main-app-02d82736d6371302.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-9bbfd8e135421f87.js",revision:"eftWlYmAUHMuCL6ck5bl8"},{url:"/_next/static/css/c9ef119e0bb3ce30.css",revision:"c9ef119e0bb3ce30"},{url:"/_next/static/eftWlYmAUHMuCL6ck5bl8/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/eftWlYmAUHMuCL6ck5bl8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/3e3cf2ee9aa3f174-s.p.woff2",revision:"65aa2c0484ef8245fe5725ce982ff8cc"},{url:"/_next/static/media/adde053269573569-s.woff2",revision:"25b8e4b434883340145fc5e12b7a8eb0"},{url:"/images/app-dark.png",revision:"da913afcc153038e1361f9b77fc4f7a5"},{url:"/images/app.png",revision:"64297cda75d1606b58bd12302292f8ab"},{url:"/images/icons/icon-128x128.png",revision:"a94a15dda1505132d95383b9f6b9e05f"},{url:"/images/icons/icon-144x144.png",revision:"7fe2fa88a78943e1bff8fc23419bd65b"},{url:"/images/icons/icon-152x152.png",revision:"cc58cee10909fbdfd194895d03ad66dc"},{url:"/images/icons/icon-192x192.png",revision:"6dd4fe9d4c9b4e41374a92fab362e8ea"},{url:"/images/icons/icon-384x384.png",revision:"7356769c6b6dbb233390c49ea82446fe"},{url:"/images/icons/icon-512x512.png",revision:"b753778b62d0b7256bff2e91d7cfab8a"},{url:"/images/icons/icon-72x72.png",revision:"e1fe757392f2a472ee450909130c1819"},{url:"/images/icons/icon-96x96.png",revision:"eef749763fd9cfd56486c7191131923a"},{url:"/images/screens/1.png",revision:"e9618ae8fb5f280e4a72001082736873"},{url:"/images/screens/2.png",revision:"9ef00f2a43107ab5e9c654e807e629f8"},{url:"/images/screens/3.png",revision:"d2262d4813e94c89ba129f06c65576bb"},{url:"/images/screens/4.png",revision:"f4e633203b7fc6a87008b3d64d377386"},{url:"/images/screens/5.png",revision:"bbd0b7b4872b9a014f759eaa212d5a04"},{url:"/images/screens/6.png",revision:"452f9be3a48370f534f6fd36215f2f2a"},{url:"/images/screens/7.png",revision:"63a47150b0204dc6a72579e508a39543"},{url:"/logo.png",revision:"e9adcc25af72a1a6fab1d45c6c132dd6"},{url:"/logo.svg",revision:"9a1f9fc02874ee41463582491901c1b8"},{url:"/logodark.svg",revision:"fdb81eaea613e5b2fd1a6a73f6059fb8"},{url:"/logolight.svg",revision:"dd9e73e4ef773b72202dcee2765ab560"},{url:"/manifest.json",revision:"83f2bd674c55fcfcbb8e213f3bc7b428"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
