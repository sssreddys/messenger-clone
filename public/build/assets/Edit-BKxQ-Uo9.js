import{j as e,a as o,Y as n}from"./app-Bkgcnhfi.js";import{A as i}from"./ApplicationLogo-CS9rdPfx.js";import{p as d}from"./index-B5sfGEyg.js";import l from"./DeleteUserForm-DOMj5pa9.js";import m from"./UpdatePasswordForm-D1BizzNU.js";import c from"./UpdateProfileInformationForm-Cu5mLk45.js";import"./InputError-C_REGKCu.js";import"./InputLabel-CtzTLB64.js";import"./Modal-CWkS4AuN.js";import"./transition-DGGfQbD4.js";import"./PrimaryButton-DopWHo_m.js";function x({active:a=!1,className:s="",children:r,...t}){return e.jsx(o,{...t,className:"inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(a?"border-primary text-foreground focus:border-primary ":"border-transparent text-foreground hover:border-secondary hover:text-secondary-foreground focus:border-secondary focus:text-secondary-foreground ")+s,children:r})}function p({user:a,header:s,children:r}){return e.jsxs("div",{className:"min-h-screen bg-secondary",children:[e.jsx("nav",{className:"border-b border-secondary bg-background",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsxs("div",{className:"flex w-full gap-4",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx(o,{href:"/",children:e.jsx(i,{className:"block h-9 w-auto"})})}),e.jsx(x,{href:route("chats.index"),active:!1,children:"Chats"})]}),e.jsx("div",{className:"ml-auto flex items-center",children:e.jsxs(o,{href:route("logout"),as:"button",method:"post",className:"btn btn-secondary flex items-center gap-2 whitespace-nowrap border-none",children:[e.jsx(d,{}),"Log out"]})})]})})}),s&&e.jsx("header",{className:"bg-background shadow",children:e.jsx("div",{className:"mx-auto max-w-7xl p-4 sm:p-6",children:s})}),e.jsx("main",{children:r})]})}function A({auth:a,mustVerifyEmail:s,status:r}){return e.jsxs(p,{user:a,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-foreground",children:"Profile"}),children:[e.jsx(n,{title:"Profile"}),e.jsx("div",{className:"py-4 sm:py-6",children:e.jsxs("div",{className:"mx-auto max-w-7xl space-y-4 px-4 sm:space-y-6 sm:px-6",children:[e.jsx("div",{className:"rounded-lg bg-background p-4 shadow sm:p-8",children:e.jsx(c,{mustVerifyEmail:s,status:r,className:"max-w-xl"})}),e.jsx("div",{className:"rounded-lg bg-background p-4 shadow sm:p-8",children:e.jsx(m,{className:"max-w-xl"})}),e.jsx("div",{className:"rounded-lg bg-background p-4 shadow sm:p-8",children:e.jsx(l,{className:"max-w-xl"})})]})})]})}export{A as default};