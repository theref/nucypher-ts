"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[793],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={slug:"Revocation.md",sidebar_position:30},i=void 0,c={unversionedId:"Revocation",id:"Revocation",title:"Revocation",description:"Revocation is under active development and is not currently considered stable.",source:"@site/docs/Revocation.md",sourceDirName:".",slug:"/Revocation.md",permalink:"/nucypher-ts/Revocation.md",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{slug:"Revocation.md",sidebar_position:30}},s={},l=[{value:"Custom Revocation Contract",id:"custom-revocation-contract",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Revocation is under active development and is not currently considered stable.\nIf you need Revocation immediately, we suggest using a ",(0,o.kt)("a",{parentName:"p",href:"#custom-revocation-contract"},"Custom Revocation Contract"),".")),(0,o.kt)("h2",{id:"custom-revocation-contract"},"Custom Revocation Contract"),(0,o.kt)("p",null,"It is possible to implement Revocation using ",(0,o.kt)("a",{parentName:"p",href:"/nucypher-ts/conditions"},"Conditions")," that rely on a function call to a ",(0,o.kt)("a",{parentName:"p",href:"/nucypher-ts/conditions#function-call-of-non-standard-contract"},"Custom Smart Contract"),".\nThis allows the handling of revocation to be decentralized and transparent.\nHere is an example of the smart contract (not suitable for production):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"pragma solidity 0.8.7;\n\ncontract Revocation {\n\n    mapping(address => bool) public isRevoked;\n\n    function revoke(address user) public {\n        isRevoked[user] = true;\n    }\n\n    function unRevoke(address user) public {\n        isRevoked[user] = false;\n    }\n}\n")),(0,o.kt)("p",null,"And the associated Condition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const revocationCondition = {\n  contractAddress: 'DEPLOYED_CONTRACT_ADDRESS',\n  functionName: 'isRevoked',\n  functionParams: [':userAddress'],\n  functionAbi: {\n    inputs: [\n      {\n        internalType: 'address',\n        name: '',\n        type: 'address',\n      },\n    ],\n    name: 'isRevoked',\n    outputs: [\n      {\n        internalType: 'bool',\n        name: '',\n        type: 'bool',\n      },\n    ],\n    stateMutability: 'view',\n    type: 'function',\n  },\n  chain: 'ethereum',\n  returnValueTest: {\n    key: '',\n    comparator: '==',\n    value: false,\n  },\n};\n")),(0,o.kt)("p",null,"The condition we have defined calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"isRevoked")," function of the smart contract and passes the user's address.\nIf the call returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," (",(0,o.kt)("strong",{parentName:"p"},"not")," revoked, ie granted), then decryption will occur.\nIf the call returns ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (",(0,o.kt)("strong",{parentName:"p"},"is")," revoked), then decryption will fail."))}p.isMDXComponent=!0}}]);