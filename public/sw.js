if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/MeshDark.svg",revision:"aeb41d6a878995a7266c1a23f93b277f"},{url:"/MeshLight.svg",revision:"592c37bf82512ec9b14ce79846b6cd5a"},{url:"/_next/app-build-manifest.json",revision:"0b715149b7dd7573306a82ad9786a92d"},{url:"/_next/static/LvaLGPrBnS46g8St71siQ/_buildManifest.js",revision:"15e671aaf852983909bd2fe1385b56f4"},{url:"/_next/static/LvaLGPrBnS46g8St71siQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/136-7a03ddacbe60aa35.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/155-92d920f73054aa9c.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/37-f6cf4f263d9e266a.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/447-cc6dc2ea0adca633.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/449-a0be803258db389a.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/453-783454b31b8491e6.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/455-8c5962e021e4d54c.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/472-e862a0046646640a.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/475-6168d573e67990f7.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/505-3df91509aa42d82d.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/54a60aa6-703757ebb4574286.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/56.14cfdc9c444b7742.js",revision:"14cfdc9c444b7742"},{url:"/_next/static/chunks/575-9bbb37722c40f5c5.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/584-1c516df0574fcff9.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/627.e184ea109cfbe72f.js",revision:"e184ea109cfbe72f"},{url:"/_next/static/chunks/637-7fbdf018f62f533e.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/656.d83a505a3566d0de.js",revision:"d83a505a3566d0de"},{url:"/_next/static/chunks/672-e403adc6f0a2b8e8.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/70e0d97a-db457ff0fb8524cc.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/711-55abd23a6a19b107.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/713-04a5c094b0556ba8.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/729-b423165203346649.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/757-5d6763f81ab097d7.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/76-5a9686e9bfccf3cf.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/802-78ca60d986ec3daf.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/839-2b0570943b4d25c5.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/91eadce7-318dfde71726a98a.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/%5Blng%5D/create/page-2e54cf16b7b29f38.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/%5Blng%5D/generations/edit/page-e32950357c7677c7.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/%5Blng%5D/generations/page-c05f739d82150bc9.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/%5Blng%5D/generations/view/page-67dcc9bd394ae802.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/%5Blng%5D/layout-be9ccec1dcd212e8.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/%5Blng%5D/login/page-268ed3bbe84c409d.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/%5Blng%5D/me/page-9b5574a25c9dd18a.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/%5Blng%5D/page-e71f094a5458ac24.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/%5Blng%5D/pricing/page-313844fef3174972.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/%5Blng%5D/settings/page-a6f08c640fea49cd.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/app/_not-found-6b204af1bdb7f119.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/d7c7f2d2-37963cfb76722bed.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/fd9d1056-d6b0199d09dbaec7.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/main-104c013caeff1aca.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/main-app-0eb968dafd20324f.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/pages/_app-451d704a741dc8a8.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/pages/_error-d6885ef27f2c5e3d.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-304955d8457e45a1.js",revision:"LvaLGPrBnS46g8St71siQ"},{url:"/_next/static/css/fdcbf2b4001333eb.css",revision:"fdcbf2b4001333eb"},{url:"/_next/static/media/3e3cf2ee9aa3f174-s.p.woff2",revision:"65aa2c0484ef8245fe5725ce982ff8cc"},{url:"/_next/static/media/adde053269573569-s.woff2",revision:"25b8e4b434883340145fc5e12b7a8eb0"},{url:"/images/app-dark.png",revision:"da913afcc153038e1361f9b77fc4f7a5"},{url:"/images/app.png",revision:"64297cda75d1606b58bd12302292f8ab"},{url:"/images/icons/icon-128x128.png",revision:"a94a15dda1505132d95383b9f6b9e05f"},{url:"/images/icons/icon-144x144.png",revision:"7fe2fa88a78943e1bff8fc23419bd65b"},{url:"/images/icons/icon-152x152.png",revision:"cc58cee10909fbdfd194895d03ad66dc"},{url:"/images/icons/icon-192x192.png",revision:"6dd4fe9d4c9b4e41374a92fab362e8ea"},{url:"/images/icons/icon-384x384.png",revision:"7356769c6b6dbb233390c49ea82446fe"},{url:"/images/icons/icon-512x512.png",revision:"b753778b62d0b7256bff2e91d7cfab8a"},{url:"/images/icons/icon-72x72.png",revision:"e1fe757392f2a472ee450909130c1819"},{url:"/images/icons/icon-96x96.png",revision:"eef749763fd9cfd56486c7191131923a"},{url:"/images/screens/1.png",revision:"e9618ae8fb5f280e4a72001082736873"},{url:"/images/screens/2.png",revision:"9ef00f2a43107ab5e9c654e807e629f8"},{url:"/images/screens/3.png",revision:"d2262d4813e94c89ba129f06c65576bb"},{url:"/images/screens/4.png",revision:"f4e633203b7fc6a87008b3d64d377386"},{url:"/images/screens/5.png",revision:"bbd0b7b4872b9a014f759eaa212d5a04"},{url:"/images/screens/6.png",revision:"452f9be3a48370f534f6fd36215f2f2a"},{url:"/images/screens/7.png",revision:"63a47150b0204dc6a72579e508a39543"},{url:"/logo.png",revision:"e9adcc25af72a1a6fab1d45c6c132dd6"},{url:"/logo.svg",revision:"9a1f9fc02874ee41463582491901c1b8"},{url:"/logodark.svg",revision:"fdb81eaea613e5b2fd1a6a73f6059fb8"},{url:"/logolight.svg",revision:"dd9e73e4ef773b72202dcee2765ab560"},{url:"/manifest.json",revision:"83f2bd674c55fcfcbb8e213f3bc7b428"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
