"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8078],{6593:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(1644);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(1644),r=n(156);const l={tabItem:"tabItem_hFhF"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},6663:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(373),r=n(1644),l=n(156),o=n(1476),u=n(2824),i=n(9643),s=n(7190),c=n(6985);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,s]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var g=n(8810);const b={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function v(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==u&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":u===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},2843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var a=n(373),r=(n(1644),n(6593)),l=n(6663),o=n(7026);const u={id:"context",title:"Context Node",sidebar_label:"Context"},i=void 0,s={unversionedId:"node-reference/context",id:"node-reference/context",title:"Context Node",description:"Context Node Screenshot",source:"@site/docs/node-reference/context.mdx",sourceDirName:"node-reference",slug:"/node-reference/context",permalink:"/docs/node-reference/context",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/context.mdx",tags:[],version:"current",frontMatter:{id:"context",title:"Context Node",sidebar_label:"Context"},sidebar:"nodeReference",previous:{title:"Code",permalink:"/docs/node-reference/code"},next:{title:"Get Global",permalink:"/docs/node-reference/get-global"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Access a string context value",id:"example-1-access-a-string-context-value",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...u}=e;return(0,r.kt)(m,(0,a.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Context Node Screenshot",src:n(2004).Z,width:"252",height:"174"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'The "Context" in Rivet is a set of shared inputs that are accessible in any graph, no matter if they are the entry-point graph, or a subgraph called by another graph. The Context node is used to access these inputs.'),(0,r.kt)("p",null,'The Context Node allows you to access these values in your graph. It is useful for "global values" that every graph can access, without having to pipe the values in as graph inputs. Use the Context Node and ',(0,r.kt)("inlineCode",{parentName:"p"},"contextValues"),' to pass in "global context" to your projects, such as the current date.'),(0,r.kt)("p",null,"Context can currently only be set when Rivet is embedded in a host application. It is passed in using the ",(0,r.kt)("inlineCode",{parentName:"p"},"contextValues")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"runGraphInFile")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"createProcessor"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import * as Rivet from '@ironclad/rivet-node';\n\nconst contextValues = {\n  stringContext: 'str',\n  numberContext: 1,\n  booleanContext: true,\n};\n\nconst processor = Rivet.createProcessor({\n  ...etc,\n  contextValues,\n});\n")),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("p",null,"The context node has no inputs besides optional ones from the Editor Settings page.")),(0,r.kt)(o.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(Context ID)"),(0,r.kt)("td",{parentName:"tr",align:null},"(Configured in editor)"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the context value."),(0,r.kt)("td",{parentName:"tr",align:null},"The ID and data type are configured in the Editor Settings page of the Context node. If the context value is not set, then the default value configured in the editor settings, or via the input port, will be used."))))),(0,r.kt)(o.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the context that you are pulling in. Must match exactly to the ID passed in to ",(0,r.kt)("inlineCode",{parentName:"td"},"contextValues")," in the parent application."),(0,r.kt)("td",{parentName:"tr",align:null},"(required)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("td",{parentName:"tr",align:null},"The data type of the value passed in to ",(0,r.kt)("inlineCode",{parentName:"td"},"contextValues"),". The value will be coerced to this data type if it does not match."),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("td",{parentName:"tr",align:null},"The default value, if the context value is not set."),(0,r.kt)("td",{parentName:"tr",align:null},"(empty)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Same data type as the configured ",(0,r.kt)("inlineCode",{parentName:"td"},"Data Type")," above. Will be coerced into the data type configured.")))))),(0,r.kt)("h2",{id:"example-1-access-a-string-context-value"},"Example 1: Access a string context value"),(0,r.kt)("p",null,"In your parent application, pass a string value into ",(0,r.kt)("inlineCode",{parentName:"p"},"contextValues"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import * as Rivet from '@ironclad/rivet-node';\n\nconst contextValues = {\n  stringContext: 'str',\n};\n\nconst processor = Rivet.createProcessor({\n  ...etc,\n  contextValues,\n});\n")),(0,r.kt)("p",null,"In your graph, add a Context node. Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"stringContext"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),". Leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"Default Value")," empty."),(0,r.kt)("p",null,"Run your graph while the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/remote-debugging"},"Remote Debugger")," is attached. The output of the Context node should be ",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"."),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The context node cannot error in normal circumstances. If the context is not set via ",(0,r.kt)("inlineCode",{parentName:"p"},"contextValues"),", then the default value will be used."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Context node to pass in the current date and time?")),(0,r.kt)("p",null,"A: Yes, you can pass in the current date as a context value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const processor = Rivet.createProcessor({\n  ...etc,\n  contextValues: {\n    currentDate: new Date(),\n  },\n});\n")),(0,r.kt)("p",null,"Then, in your graph, add a Context node. Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"currentDate"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Date"),". Leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"Default Value")," empty."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Context node to pass in a function?")),(0,r.kt)("p",null,"A: No, you cannot pass in a function as a context value. You can only pass in ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/data-types"},"Data Values")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Context node to pass in a custom data type?")),(0,r.kt)("p",null,"A: No, you cannot pass in a custom data type as a context value. You can only pass in ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/data-types"},"Data Values")),(0,r.kt)("h2",{id:"see-also"},"See Also"))}h.isMDXComponent=!0},2004:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/context-node-e6d7d75f09ac1f9e1c8c4deb10d0483d.png"}}]);