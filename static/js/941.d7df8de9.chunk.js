"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[941],{3941:function(n,e,r){r.r(e),r.d(e,{default:function(){return V}});var t,o,a,i,c,s,l,d,u,f,p=r(1614),x=r(5705),m=r(9434),g=r(3634),b=r(6351),h=r(971),j=r(4554),Z=r(3736),v=r(168),k=r(7691),w=(k.ZP.button(t||(t=(0,v.Z)(["\n  width: 160px;\n  font-size: 16px;\n  padding: 8px 16px;\n\n  border: outset;\n  border-radius: 8px;\n  background-color: #f3f3f3ef;\n  cursor: pointer;\n  transition: background-color 250ms linear, border 200ms linear,\n    color 50ms linear;\n  &:hover {\n    background-color: #d3d3d3cc;\n  }\n  &:active {\n    border: inset;\n    color: #f3f3f3;\n    background-color: #75757597;\n  }\n"]))),(0,k.ZP)(x.gN)(o||(o=(0,v.Z)(["\n  width: 600px;\n  display: flex;\n  justify-content: space-around;\n  gap: 32px;\n  padding: 8px 16px;\n  margin: 8px 0;\n  border: groove;\n  border-radius: 8px;\n  background-color: #f7f7f7c5;\n"]))),(0,k.ZP)(x.l0)(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n"])))),y=r(3329),C={name:"",number:""},P=function(){var n=(0,m.v9)(b.Af),e=(0,m.I0)(),r=function(r){0!==n.filter((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})).length?alert("".concat(r.name," is already in contacts")):function(n){e((0,g.el)(n))}(r)};return(0,y.jsx)(j.Z,{sx:{maxWidth:600},children:(0,y.jsx)(x.J9,{initialValues:C,onSubmit:function(n,e){var t=n.name,o=n.number,a=e.resetForm;r({name:t,number:o}),a()},children:(0,y.jsxs)(w,{autoComplete:"off",children:[(0,y.jsx)(x.gN,{component:h.n,type:"text",name:"name",label:"Name"}),(0,y.jsx)(x.gN,{component:h.n,type:"tel",name:"number",label:"Phone"}),(0,y.jsx)(Z.Z,{type:"submit",variant:"contained",children:"Add contact"})]})})})},S=k.ZP.button(i||(i=(0,v.Z)(["\n  width: 80px;\n  font-size: 16px;\n  padding: 8px;\n  margin-left: 32px;\n  border: outset;\n  border-radius: 8px;\n  background-color: #f3f3f3ef;\n  cursor: pointer;\n  transition: background-color 250ms linear, border 200ms linear,\n    color 50ms linear;\n  &:hover {\n    background-color: #d3d3d3cc;\n  }\n  &:active {\n    border: inset;\n    color: #f3f3f3;\n    background-color: #75757597;\n  }\n"]))),T=k.ZP.li(c||(c=(0,v.Z)(["\n  width: auto;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n  padding: 8px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px inset #d3d3d3cc;\n  background-color: #6f6f6f28;\n  border-radius: 8px;\n  gap: 8px;\n"]))),z=k.ZP.p(s||(s=(0,v.Z)(["\n  font-weight: 600;\n"]))),G=k.ZP.span(l||(l=(0,v.Z)(["\n  margin-left: auto;\n  font-weight: 600;\n"]))),I=function(n){var e=n.contact,r=(0,m.I0)(),t=e.name.split(" ").map((function(n){return n[0].toUpperCase()+n.toLowerCase().slice(1)})).join(" ");return(0,y.jsxs)(T,{id:e.id,children:[(0,y.jsxs)(z,{children:[t,":"]}),(0,y.jsx)(G,{children:e.number}),(0,y.jsx)(S,{type:"button",onClick:function(){return r((0,g.GK)(e.id))},children:"Delete"})]})},L=k.ZP.ul(d||(d=(0,v.Z)(["\n  width: 600px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  /* margin-left: auto;\n  margin-right: auto; */\n"]))),F=r(2791),M=function(){var n=(0,m.I0)(),e=(0,m.v9)(b.Af),r=(0,m.v9)(b.mj),t=(0,m.v9)(b.xU),o=(0,m.v9)(b.zh);(0,F.useEffect)((function(){n((0,g.yF)())}),[n]);return(0,y.jsxs)(y.Fragment,{children:[t&&(0,y.jsx)("p",{children:"Loading contacts..."}),o&&(0,y.jsx)("p",{children:o}),(0,y.jsx)(L,{children:e.length>0&&function(){var n=r.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(n){return(0,y.jsx)(I,{contact:n},n.id)}))})," "]})},N=r(1634),_=r(1214),A=function(){var n=(0,m.I0)(),e=(0,m.v9)(b.mj);return(0,y.jsx)(_.Z,{sx:{marginTop:4,marginBottom:1},label:"Filter",name:"filter",type:"text",autoComplete:"current-password",onChange:function(e){n((0,N.p)(e.target.value))},value:e})},U=k.ZP.h1(u||(u=(0,v.Z)(["\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 32px;\n  margin: 0;\n"]))),E=k.ZP.h2(f||(f=(0,v.Z)(["\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  margin: 0;\n"])));function V(){var n=(0,m.I0)();return(0,F.useEffect)((function(){n((0,g.yF)())}),[n]),(0,y.jsxs)(p.Z,{sx:{marginTop:4},children:[(0,y.jsx)(U,{children:"Phonebook"}),(0,y.jsx)(P,{}),(0,y.jsx)(E,{children:"Contacts"}),(0,y.jsx)(A,{}),(0,y.jsx)(M,{})]})}}}]);
//# sourceMappingURL=941.d7df8de9.chunk.js.map