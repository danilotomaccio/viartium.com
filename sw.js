if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const o=e=>r(e,d),s={module:{uri:d},exports:n,require:o};i[d]=Promise.all(a.map((e=>s[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CRtzTg_-.css",revision:null},{url:"assets/index-XVcfl2Dz.js",revision:null},{url:"draco/draco_decoder.js",revision:"69b56a1d86b226ea41399f572eccc9ce"},{url:"draco/draco_encoder.js",revision:"19ec7d67f4a209ec8b5fa0a7e0055226"},{url:"draco/draco_wasm_wrapper.js",revision:"5900efaec20d6859eb66417fedb1acb4"},{url:"draco/gltf/draco_decoder.js",revision:"5fcad04db3893d9fbb79418b1f8e44a1"},{url:"draco/gltf/draco_encoder.js",revision:"b3c687f18f58015e032d5d4b5c5c33e8"},{url:"draco/gltf/draco_wasm_wrapper.js",revision:"7a48a3fdc5785631621f4b20cd0937dc"},{url:"index.html",revision:"7a1f3f75c8f14fe4f2469ca1890b0892"},{url:"registerSW.js",revision:"fe5192da9b9c623fe124bccdcd5abadd"},{url:"favicon.ico",revision:"cfec37016e68b20add0c2ea3e54e7bdd"},{url:"pwa/pwa-192x192.png",revision:"b4aea92bf18f12f9543fc22442287952"},{url:"pwa/pwa-512x512.png",revision:"db393c833f29cc1354d4f06a70d65b0c"},{url:"img/carmine-1.jpg",revision:"80257a7be2d2c5b3a1c1d3ae4e3a3ea1"},{url:"img/carmine-10.jpg",revision:"c7842af5f4df9fef090d6cacbd452948"},{url:"img/carmine-11.jpg",revision:"31a74ab35450af9cd060a0de71a90818"},{url:"img/carmine-12.jpg",revision:"40bdeb9a7d371afb386e5f6a4ba38942"},{url:"img/carmine-2.jpg",revision:"883440ae83e7c98ba8940ad0e6447a7e"},{url:"img/carmine-3.jpg",revision:"8e66602c507a11123469dad8cf7514fd"},{url:"img/carmine-6.jpg",revision:"df59a6585a4cac0fe2f39efac73da796"},{url:"img/carmine-8.jpg",revision:"0d1b0e56e5eb846f698c0d7b2e318070"},{url:"img/carmine-9.jpg",revision:"be0a205a437c3716d81303b75323c8c8"},{url:"img/favicon.ico",revision:"70e96e871ed98b7bfa3a9a2a07bb1c43"},{url:"img/favicon.svg",revision:"98d53d6e188f5e06d61a29aca32777bd"},{url:"img/piantaChiesa.png",revision:"0888bd552cc93e80557a303805596efd"},{url:"manifest.webmanifest",revision:"7bb41757c2c6d370d12499cf13b9a937"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
