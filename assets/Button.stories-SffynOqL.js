import{j as e,I as y}from"./Icon.component-INKR7txH.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const r=({className:a,children:c,appearance:i,icon:n,...l})=>{const u="px-3 text-sm font-press-start-2p",d={primary:"bg-app-card text-white hover:bg-app-accent",secondary:"border-app-card outline-app-accent outline-2 outline -outline-offset-2 text-black hover:bg-app-accent hover:text-white",transparent:"hover:bg-app-accent hover:text-white"},m=n?"py-1 inline-flex items-center gap-2":"py-2";return e.jsx(e.Fragment,{children:e.jsxs("button",{className:`${a} ${u} ${d[i]} group box-border ${m}`,...l,children:[n?e.jsx(y,{icon:n,size:"xl"}):"",c]})})};try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"transparent"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Button",component:r},t={args:{children:"Button"},argTypes:{appearance:{options:["primary","secondary","transparent"],control:{type:"select"}},icon:{options:[void 0,"login","thumb_up","person"],control:{type:"select"}}}};var o,s,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'transparent'],
      control: {
        type: 'select'
      }
    },
    icon: {
      options: [undefined, 'login', 'thumb_up', 'person'],
      control: {
        type: 'select'
      }
    }
  }
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const _=["Default"];export{t as Default,_ as __namedExportsOrder,f as default};
