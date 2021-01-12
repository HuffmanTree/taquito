(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(104)),i={title:"Ledger",author:"Roxane Letourneau"},c={unversionedId:"ledger_integration_test",id:"ledger_integration_test",isDocsHomePage:!1,title:"Ledger",description:"The Ledger Signer's integration tests are disabled by default because they require having a Ledger Device connected to your computer.",source:"@site/../docs/ledger_integration_test.md",slug:"/ledger_integration_test",permalink:"/docs/ledger_integration_test",version:"current",sidebar:"docs",previous:{title:"Drain an account",permalink:"/docs/drain_account"},next:{title:"RPC nodes",permalink:"/docs/rpc_nodes_integration_test"}},l=[{value:"Steps to run the tests",id:"steps-to-run-the-tests",children:[]},{value:"Failing tests",id:"failing-tests",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Ledger Signer's integration tests are disabled by default because they require having a Ledger Device connected to your computer."),Object(a.b)("h2",{id:"steps-to-run-the-tests"},"Steps to run the tests"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Set up your Ledger device with this mnemonic phrase:",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"1-prefer\n2-wait\n3-flock\n4-brown\n5-volume\n6-recycle\n7-scrub\n8-elder\n9-rate\n10-pair\n11-twenty\n12-giant "))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open ",Object(a.b)("inlineCode",{parentName:"p"},"Tezos Wallet app")," on your Ledger device.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Remove ",Object(a.b)("inlineCode",{parentName:"p"},"./ledger-signer.spec.ts")," from ",Object(a.b)("inlineCode",{parentName:"p"},'"testPathIgnorePatterns"')," in the package.json.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If you only want to run Ledger integration tests, use this command: ",Object(a.b)("inlineCode",{parentName:"p"},"npm run test ledger-signer.spec.ts"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"As the tests include operation like transfer of token and contract origination, the tests will take some time to complete. You will be prompt on the Ledger to confirm the operations."))),Object(a.b)("h2",{id:"failing-tests"},"Failing tests"),Object(a.b)("p",null,"There is also a set of integration tests used to verify the behavior when the user declines the Ledger's prompt."),Object(a.b)("p",null,"To run these tests, you need to:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open ",Object(a.b)("inlineCode",{parentName:"li"},"Tezos Wallet app")," on your Ledger device."),Object(a.b)("li",{parentName:"ol"},"Remove ",Object(a.b)("inlineCode",{parentName:"li"},"./ledger-signer-failing-tests.spec.ts")," from ",Object(a.b)("inlineCode",{parentName:"li"},'"testPathIgnorePatterns"')," in the package.json."),Object(a.b)("li",{parentName:"ol"},"If you only want to run these tests, use this command: ",Object(a.b)("inlineCode",{parentName:"li"},"npm run test ledger-signer-failing-tests.spec.ts")),Object(a.b)("li",{parentName:"ol"},"You will need to decline all Ledger prompts.")))}p.isMDXComponent=!0}}]);