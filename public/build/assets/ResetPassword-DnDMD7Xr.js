import{W as w,r as f,j as s,Y as x}from"./app-Bkgcnhfi.js";import{G as j}from"./GuestLayout-DtTpwqpl.js";import{T as t,I as m}from"./InputError-C_REGKCu.js";import{I as l}from"./InputLabel-CtzTLB64.js";import{P as v}from"./PrimaryButton-DopWHo_m.js";import"./ApplicationLogo-CS9rdPfx.js";function _({token:i,email:n}){const{data:e,setData:o,post:d,processing:p,errors:r,reset:c}=w({token:i,email:n,password:"",password_confirmation:""});f.useEffect(()=>()=>{c("password","password_confirmation")},[]);const u=a=>{a.preventDefault(),d(route("password.store"))};return s.jsxs(j,{children:[s.jsx(x,{title:"Reset Password"}),s.jsxs("form",{onSubmit:u,className:"space-y-4",children:[s.jsxs("div",{children:[s.jsx(l,{htmlFor:"email",value:"Email"}),s.jsx(t,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>o("email",a.target.value)}),s.jsx(m,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(l,{htmlFor:"password",value:"Password"}),s.jsx(t,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s.jsx(m,{message:r.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(l,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(t,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value)}),s.jsx(m,{message:r.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex ",children:s.jsx(v,{className:"w-full",disabled:p,children:"Reset Password"})})]})]})}export{_ as default};