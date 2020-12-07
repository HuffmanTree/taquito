(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,n,t){"use strict";function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}},139:function(e,n,t){"use strict";var i=t(0),r=t(140);n.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},140:function(e,n,t){"use strict";var i=t(0),r=Object(i.createContext)(void 0);n.a=r},241:function(e,n,t){"use strict";var i=t(0),r=t.n(i),o=t(139),a=t(110),c=t(49),l=t.n(c),s=37,u=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,p=e.values,g=e.groupId,b=e.className,d=Object(o.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,O=Object(i.useState)(c),h=O[0],j=O[1],v=Object(i.useState)(!1),w=v[0],T=v[1];if(null!=g){var y=f[g];null!=y&&y!==h&&p.some((function(e){return e.value===y}))&&j(y)}var N=function(e){j(e),null!=g&&m(g,e)},P=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||T(!0)},I=function(){T(!1)};return Object(i.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",I),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",I)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===n,className:Object(a.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===n}),style:w?{}:{outline:"none"},key:n,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(P,e.target,e),x(e)},onFocus:function(){return N(n)},onClick:function(){N(n),T(!1)},onPointerDown:function(){return T(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(t).filter((function(e){return e.props.value===h}))[0]))}},242:function(e,n,t){"use strict";var i=t(0),r=t.n(i);n.a=function(e){return r.a.createElement("div",null,e.children)}},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return g}));var i=t(2),r=t(6),o=(t(0),t(96)),a=t(241),c=t(242),l={title:"Originating (Deploying) Contracts",author:"Simon Boissonneault-Robert"},s={unversionedId:"originate",id:"originate",isDocsHomePage:!1,title:"Originating (Deploying) Contracts",description:"Taquito can originate (create or deploy) Smart Contracts to the Tezos Blockchain.",source:"@site/../docs/originate.md",slug:"/originate",permalink:"/docs/originate",version:"current",sidebar:"docs",previous:{title:"Making Transfers",permalink:"/docs/making_transfers"},next:{title:"Set delegate",permalink:"/docs/set_delegate"}},u=[{value:"Example demonstrating origination of a contract",id:"example-demonstrating-origination-of-a-contract",children:[]},{value:"Originate the contract using Taquito",id:"originate-the-contract-using-taquito",children:[{value:"a. Initializing storage using a Plain Old JavaScript Object",id:"a-initializing-storage-using-a-plain-old-javascript-object",children:[]},{value:"b. Initializing storage using a plain Michelson Expression for initial storage",id:"b-initializing-storage-using-a-plain-michelson-expression-for-initial-storage",children:[]},{value:"c. Initializing storage using a JSON encoded Michelson Expression for initial storage",id:"c-initializing-storage-using-a-json-encoded-michelson-expression-for-initial-storage",children:[]}]}],p={rightToc:u};function g(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Taquito can ",Object(o.b)("em",{parentName:"p"},"originate")," (create or deploy) Smart Contracts to the Tezos Blockchain."),Object(o.b)("h2",{id:"example-demonstrating-origination-of-a-contract"},"Example demonstrating origination of a contract"),Object(o.b)("p",null,"In this example, we will originate the popular mutli-sig contract that is available ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/murbard/smart-contracts/blob/master/multisig/michelson/generic.tz"}),"here"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Since version ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/ecadlabs/taquito/releases/tag/6.3.2-beta.0"}),"6.3.2"),', Taquito allows encoding and decoding between "plain" Michelson and JSON Michelson. The origination of Smart Contracts is now easier because it is no longer required to do the tezos-client command-line to convert & expand "plain" Michelson to JSON Michelson. You can now pass JSON Michelson as well as "plain" Michelson using the ',Object(o.b)("inlineCode",{parentName:"p"},"code")," parameter of the ",Object(o.b)("inlineCode",{parentName:"p"},"originate")," method.")),Object(o.b)("h2",{id:"originate-the-contract-using-taquito"},"Originate the contract using Taquito"),Object(o.b)("p",null,"Here are three examples of originating a contract using Taquito. The first example initializes the storage of the contract using a familiar-looking javascript object. The second and third demonstrates the use of plain Michelson and JSON Michelson. The first method is preferred, but if you have a reason to circumvent the convenient storage API, this allows you to do so."),Object(o.b)("p",null,"These three examples will be shown using the ",Object(o.b)("inlineCode",{parentName:"p"},"Contract API")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"Wallet API"),". The new Taquito Wallet API is designed to interact with wallets, and it supports Beacon, the TZIP-10 standard."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note : To run the ",Object(o.b)("inlineCode",{parentName:"p"},"Wallet API")," examples, you can install a wallet extension to your browser. For example, the Beacon Extension can be download ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.walletbeacon.io/"}),"here"),".")),Object(o.b)(a.a,{defaultValue:"contractAPI",values:[{label:"Contract API",value:"contractAPI"},{label:"Wallet API",value:"walletAPI"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"contractAPI",mdxType:"TabItem"},Object(o.b)("p",null,"This requires a signer to be configured, ie: "),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"import { importKey } from '@taquito/taquito-signer';\nimportKey(\"p2sk2obfVMEuPUnadAConLWk7Tf4Dt3n4svSgJwrgpamRqJXvaYcg1\")\n"))),Object(o.b)(c.a,{value:"walletAPI",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"import {  BeaconWallet } from '@taquito/beacon-wallet';\nimport { TezosToolkit } from '@taquito/taquito';\nconst Tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');\nconst option = { name: \"nameOfWallet\" }\nconst wallet = new BeaconWallet(option)\nconst network = { type: \"carthagenet\" }\nawait wallet.requestPermissions({ network })\nTezos.setWalletProvider(wallet)\n")))),Object(o.b)("h3",{id:"a-initializing-storage-using-a-plain-old-javascript-object"},"a. Initializing storage using a Plain Old JavaScript Object"),Object(o.b)("p",null,"You can pass your initial storage as a JavaScript object to the ",Object(o.b)("inlineCode",{parentName:"p"},"storage:")," property. Taquito will encode your JavaScript object into a Michelson expression."),Object(o.b)("p",null,"This JavaScript object :"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"{ stored_counter: 0,\n  threshold: 1,\n  keys: ['edpkuLxx9PQD8fZ45eUzrK3BhfDZJHhBuK4Zi49DcEGANwd2rpX82t'] }\n")),Object(o.b)("p",null,"Is equivilent to this Michelson expression :"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'(Pair 0 (Pair 1 { "edpkuLxx9PQD8fZ45eUzrK3BhfDZJHhBuK4Zi49DcEGANwd2rpX82t" }))\n')),Object(o.b)("p",null,"As you can see, the property names are discarded. The order of your properties is crucial!"),Object(o.b)(a.a,{defaultValue:"contractAPI",values:[{label:"Contract API",value:"contractAPI"},{label:"Wallet API",value:"walletAPI"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"contractAPI",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// import { TezosToolkit } from '@taquito/taquito';\n// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');\n\n// const genericMultisigJSONfile = require('./generic.json')\n// generic.json is referring to Michelson source code in JSON representation\n\nTezos.contract.originate({\n  code: genericMultisigJSONfile,\n  storage: {\n    stored_counter: 0,\n    threshold: 1,\n    keys: ['edpkuLxx9PQD8fZ45eUzrK3BhfDZJHhBuK4Zi49DcEGANwd2rpX82t']\n  }\n}).then(originationOp => {\n  println(`Waiting for confirmation of origination for ${originationOp.contractAddress}...`);\n  return originationOp.contract()\n}).then (contract => {\n  println(`Origination completed.`);\n}).catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n\n"))),Object(o.b)(c.a,{value:"walletAPI",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline wallet",live:!0,noInline:!0,wallet:!0}),"// import { TezosToolkit } from '@taquito/taquito';\n// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');\n\n// const genericMultisigJSONfile = require('./generic.json')\n// generic.json is referring to Michelson source code in JSON representation\n\nTezos.wallet.originate({\n  code: genericMultisigJSONfile,\n  storage: {\n    stored_counter: 0,\n    threshold: 1,\n    keys: ['edpkuLxx9PQD8fZ45eUzrK3BhfDZJHhBuK4Zi49DcEGANwd2rpX82t']\n  }\n}).send()\n.then(originationOp => {\n  println(`Waiting for confirmation of origination...`);\n  return originationOp.contract()\n}).then (contract => {\n  println(`Origination completed for ${contract.address}.`);\n}).catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n\n")))),Object(o.b)("h3",{id:"b-initializing-storage-using-a-plain-michelson-expression-for-initial-storage"},"b. Initializing storage using a plain Michelson Expression for initial storage"),Object(o.b)("p",null,"When using Michelson expression for initial storage, we need to use the ",Object(o.b)("inlineCode",{parentName:"p"},"init")," parameter instead of the ",Object(o.b)("inlineCode",{parentName:"p"},"storage")," object."),Object(o.b)(a.a,{defaultValue:"contractAPI",values:[{label:"Contract API",value:"contractAPI"},{label:"Wallet API",value:"walletAPI"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"contractAPI",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),"// import { TezosToolkit } from '@taquito/taquito';\n// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');\n\n// const genericMultisigJSONfile = require('./generic.json')\n// generic.json is referring to Michelson source code in JSON representation\n\nTezos.contract.originate({\n  code: genericMultisigJSONfile,\n  init: `(Pair 0 (Pair 1 { \"edpkuLxx9PQD8fZ45eUzrK3BhfDZJHhBuK4Zi49DcEGANwd2rpX82t\" }))`\n}).then(originationOp => {\n  println(`Waiting for confirmation of origination for ${originationOp.contractAddress}...`);\n  return originationOp.contract()\n}).then (contract => {\n  println(`Origination completed.`);\n}).catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n\n"))),Object(o.b)(c.a,{value:"walletAPI",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline wallet",live:!0,noInline:!0,wallet:!0}),"// import { TezosToolkit } from '@taquito/taquito';\n// const Tezos = new TezosToolkit('https://api.tez.ie/rpc/carthagenet');\n\n// const genericMultisigJSONfile = require('./generic.json')\n// generic.json is referring to Michelson source code in JSON representation\n\nTezos.wallet.originate({\n  code: genericMultisigJSONfile,\n  init: `(Pair 0 (Pair 1 { \"edpkuLxx9PQD8fZ45eUzrK3BhfDZJHhBuK4Zi49DcEGANwd2rpX82t\" }))`\n}).send()\n.then(originationOp => {\n  println(`Waiting for confirmation of origination...`);\n  return originationOp.contract()\n}).then (contract => {\n  println(`Origination completed for ${contract.address}.`);\n}).catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n\n")))),Object(o.b)("h3",{id:"c-initializing-storage-using-a-json-encoded-michelson-expression-for-initial-storage"},"c. Initializing storage using a JSON encoded Michelson Expression for initial storage"),Object(o.b)(a.a,{defaultValue:"contractAPI",values:[{label:"Contract API",value:"contractAPI"},{label:"Wallet API",value:"walletAPI"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"contractAPI",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline",live:!0,noInline:!0}),'// import { TezosToolkit } from \'@taquito/taquito\';\n// const Tezos = new TezosToolkit(\'https://api.tez.ie/rpc/carthagenet\');\n\n// const genericMultisigJSONfile = require(\'./generic.json\')\n// generic.json is referring to Michelson source code in JSON representation\n\nTezos.contract.originate({\n  code: genericMultisigJSONfile,\n  init: { "prim": "Pair",\n                        "args":\n                          [ { "int": "0" },\n                            { "prim": "Pair",\n                              "args":\n                                [ { "int": "1" },\n                                  [ { "string":\n                                        "edpkuLxx9PQD8fZ45eUzrK3BhfDZJHhBuK4Zi49DcEGANwd2rpX82t" } ] ] } ] }\n}).then(originationOp => {\n  println(`Waiting for confirmation of origination for ${originationOp.contractAddress}...`);\n  return originationOp.contract()\n}).then (contract => {\n  println(`Origination completed.`);\n}).catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n\n'))),Object(o.b)(c.a,{value:"walletAPI",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js",metastring:"live noInline wallet",live:!0,noInline:!0,wallet:!0}),'// import { TezosToolkit } from \'@taquito/taquito\';\n// const Tezos = new TezosToolkit(\'https://api.tez.ie/rpc/carthagenet\');\n\n// const genericMultisigJSONfile = require(\'./generic.json\')\n// generic.json is referring to Michelson source code in JSON representation\n\nTezos.wallet.originate({\n  code: genericMultisigJSONfile,\n  init: { "prim": "Pair",\n                        "args":\n                          [ { "int": "0" },\n                            { "prim": "Pair",\n                              "args":\n                                [ { "int": "1" },\n                                  [ { "string":\n                                        "edpkuLxx9PQD8fZ45eUzrK3BhfDZJHhBuK4Zi49DcEGANwd2rpX82t" } ] ] } ] }\n}).send()\n.then(originationOp => {\n  println(`Waiting for confirmation of origination...`);\n  return originationOp.contract()\n}).then (contract => {\n  println(`Origination completed for ${contract.address}.`);\n}).catch(error => println(`Error: ${JSON.stringify(error, null, 2)}`));\n\n')))))}g.isMDXComponent=!0},96:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=i,d=p["".concat(a,".").concat(b)]||p[b]||g[b]||o;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);