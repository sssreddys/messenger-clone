import{r as l,j as e}from"./app-Bkgcnhfi.js";import{c as x}from"./index-C3I8beMU.js";import{u as i,o as f,p as u,d as m}from"./SidebarMini-hF9Jvw3Z.js";import{a as p}from"./index-BLvTfnCN.js";import{C as g}from"./ChatList-EsS3GKAS.js";import{c as j}from"./clsx-B-dksMZM.js";function b({search:t,setSearch:r}){const{setChats:s,setPaginate:n}=i(),[o,d]=l.useState(!0),[c]=f(t,300);l.useEffect(()=>{d(!1),o||u(c).then(a=>{s(a.data.data.data),n(a.data.data)})},[c]);const h=a=>{r(a.target.value)};return e.jsxs("div",{className:"relative flex items-center px-2 py-0",children:[e.jsx("span",{className:"absolute left-5",children:e.jsx(p,{className:"text-2xl text-secondary-foreground"})}),e.jsx("input",{type:"text",placeholder:"Search Messenger",className:"w-full rounded-lg border-secondary bg-background pl-10 focus:border-secondary focus:ring-transparent",value:t,onChange:h})]})}function E(){const{chats:t}=i(),{openModal:r}=m(),[s,n]=l.useState(""),o=()=>{r({view:"ADD_NEW_GROUP",size:"lg"})};return e.jsxs("div",{className:j("order-1 flex-1 shrink-0 flex-col gap-2 sm:order-2 sm:flex sm:w-[320px] sm:flex-initial sm:border-l sm:border-secondary lg:w-[360px]",route().current("chats.show")?"hidden":"flex"),children:[e.jsxs("div",{className:"flex items-center justify-between px-2 pt-2 sm:pb-0",children:[e.jsx("h3",{className:"text-2xl font-semibold",children:"Chats"}),e.jsx("button",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white",onClick:o,children:e.jsx(x,{})})]}),e.jsx(b,{search:s,setSearch:n}),e.jsx(g,{search:s,href:"chats.show"}),t.length===0&&s.length>0&&e.jsx("p",{className:"flex h-full flex-1 items-center justify-center",children:"User not found"}),t.length===0&&s.length===0&&e.jsx("p",{className:"flex h-full flex-1 items-center justify-center",children:"No chat yet"})]})}export{E as S};