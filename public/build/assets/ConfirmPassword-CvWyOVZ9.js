import{W as d,r as p,j as s,Y as l}from"./app-2-nbgIXB.js";import{G as c}from"./GuestLayout-Df7qt1yI.js";import{T as u,I as f}from"./InputError-Bz1JaDdo.js";import{I as x}from"./InputLabel-BOEoPHxE.js";import{P as w}from"./PrimaryButton-EnS3u6pJ.js";import"./ApplicationLogo-Dqu6h2GT.js";function P(){const{data:e,setData:a,post:t,processing:o,errors:i,reset:m}=d({password:""});p.useEffect(()=>()=>{m("password")},[]);const n=r=>{r.preventDefault(),t(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-foreground",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(x,{htmlFor:"password",value:"Password"}),s.jsx(u,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(f,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(w,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{P as default};
