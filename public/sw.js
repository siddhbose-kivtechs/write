if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/MeshDark.svg",revision:"aeb41d6a878995a7266c1a23f93b277f"},{url:"/MeshLight.svg",revision:"592c37bf82512ec9b14ce79846b6cd5a"},{url:"/_next/app-build-manifest.json",revision:"41434e8a1322945f10eab23d0abee038"},{url:"/_next/static/P-v7Opvep47lshmNsqTNe/_buildManifest.js",revision:"50654c4134ba6f71b423498e9447ee91"},{url:"/_next/static/P-v7Opvep47lshmNsqTNe/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/110-ae93138e0a09c427.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/14-c5720cb806900c2c.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/249-87641d2fd56700c8.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/406-47f3d88c243c407b.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/447-cfeb2b15cd9f7575.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/472-5b0a8431bd383508.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/56.b6e7f82b442b511a.js",revision:"b6e7f82b442b511a"},{url:"/_next/static/chunks/622-18f0011e37b3d522.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/627.86631b17347dda6f.js",revision:"86631b17347dda6f"},{url:"/_next/static/chunks/656.29b1375d5b1b1bac.js",revision:"29b1375d5b1b1bac"},{url:"/_next/static/chunks/705-d5ef91dcf2d61c54.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/76-9f1e7d38bea5ca58.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/802-fa81a5357ee4a279.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/853-a4849f1a09060e0d.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/915-5d7231c4b790d38b.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/91eadce7-f26356e33e67e686.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/974-a5adf9b3761e9899.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/app/%5Blng%5D/create/page-a35f7be1acc9e195.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/app/%5Blng%5D/generations/page-730c8ac6c5a3876c.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/app/%5Blng%5D/generations/view/page-9f545cfc117e9b4d.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/app/%5Blng%5D/layout-d697772ce96b7ab4.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/app/%5Blng%5D/login/page-2c37d32599cd5c42.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/app/%5Blng%5D/me/page-0bba7729e29bb0a2.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/app/%5Blng%5D/page-7499b038291c6df7.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/app/%5Blng%5D/settings/page-f305618f940b883a.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/app/_not-found-1fad7f705aab81ea.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/d7c7f2d2-37963cfb76722bed.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/fd9d1056-00cd6cd6b6bd3cff.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/main-556a86f3f496243e.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/main-app-02d82736d6371302.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/pages/_app-1534f180665c857f.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/pages/_error-b646007f40c4f0a8.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e67897e2e8f98ac9.js",revision:"P-v7Opvep47lshmNsqTNe"},{url:"/_next/static/css/5d55ee3b1adf66e3.css",revision:"5d55ee3b1adf66e3"},{url:"/_next/static/media/3e3cf2ee9aa3f174-s.p.woff2",revision:"65aa2c0484ef8245fe5725ce982ff8cc"},{url:"/_next/static/media/adde053269573569-s.woff2",revision:"25b8e4b434883340145fc5e12b7a8eb0"},{url:"/images/icons/icon-128x128.png",revision:"a94a15dda1505132d95383b9f6b9e05f"},{url:"/images/icons/icon-144x144.png",revision:"7fe2fa88a78943e1bff8fc23419bd65b"},{url:"/images/icons/icon-152x152.png",revision:"cc58cee10909fbdfd194895d03ad66dc"},{url:"/images/icons/icon-192x192.png",revision:"6dd4fe9d4c9b4e41374a92fab362e8ea"},{url:"/images/icons/icon-384x384.png",revision:"7356769c6b6dbb233390c49ea82446fe"},{url:"/images/icons/icon-512x512.png",revision:"b753778b62d0b7256bff2e91d7cfab8a"},{url:"/images/icons/icon-72x72.png",revision:"e1fe757392f2a472ee450909130c1819"},{url:"/images/icons/icon-96x96.png",revision:"eef749763fd9cfd56486c7191131923a"},{url:"/images/screens/1.png",revision:"e9618ae8fb5f280e4a72001082736873"},{url:"/images/screens/2.png",revision:"9ef00f2a43107ab5e9c654e807e629f8"},{url:"/images/screens/3.png",revision:"d2262d4813e94c89ba129f06c65576bb"},{url:"/images/screens/4.png",revision:"f4e633203b7fc6a87008b3d64d377386"},{url:"/images/screens/5.png",revision:"bbd0b7b4872b9a014f759eaa212d5a04"},{url:"/images/screens/6.png",revision:"452f9be3a48370f534f6fd36215f2f2a"},{url:"/images/screens/7.png",revision:"63a47150b0204dc6a72579e508a39543"},{url:"/logo.png",revision:"e9adcc25af72a1a6fab1d45c6c132dd6"},{url:"/logo.svg",revision:"9a1f9fc02874ee41463582491901c1b8"},{url:"/logodark.svg",revision:"fdb81eaea613e5b2fd1a6a73f6059fb8"},{url:"/logolight.svg",revision:"dd9e73e4ef773b72202dcee2765ab560"},{url:"/manifest.json",revision:"83f2bd674c55fcfcbb8e213f3bc7b428"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
