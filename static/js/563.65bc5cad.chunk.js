"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[563],{1563:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t,i,a,o,s,c,l,u,d=r(5705),f=r(9434),p=r(8026),x=r(3634),m=r(6351),h=r(3329),b={name:"",number:""},g=function(){var n=(0,f.v9)(m.Af),e=(0,f.I0)(),r=function(r){0!==n.filter((function(n){return n.name.toLowerCase()===r.name.toLowerCase()})).length?alert("".concat(r.name," is already in contacts")):function(n){e((0,x.el)(n))}(r)};return(0,h.jsx)(d.J9,{initialValues:b,onSubmit:function(n,e){var t=n.name,i=n.number,a=e.resetForm;r({name:t,number:i}),a()},children:(0,h.jsxs)(d.l0,{autoComplete:"off",children:[(0,h.jsxs)("label",{children:["Name",(0,h.jsx)(p.I,{type:"text",name:"name"})]}),(0,h.jsxs)("label",{children:["Phone",(0,h.jsx)(p.I,{type:"tel",name:"number"})]}),(0,h.jsx)(p.z,{type:"submit",children:"Add contact"})]})})},j=r(168),v=r(6444),w=v.ZP.button(t||(t=(0,j.Z)(["\n  width: 80px;\n  font-size: 16px;\n  padding: 8px;\n  margin-left: 32px;\n  border: outset;\n  border-radius: 8px;\n  background-color: #f3f3f3ef;\n  cursor: pointer;\n  transition: background-color 250ms linear, border 200ms linear,\n    color 50ms linear;\n  &:hover {\n    background-color: #d3d3d3cc;\n  }\n  &:active {\n    border: inset;\n    color: #f3f3f3;\n    background-color: #75757597;\n  }\n"]))),y=v.ZP.li(i||(i=(0,j.Z)(["\n  width: auto;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 16px;\n  padding: 8px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px inset #d3d3d3cc;\n  background-color: #6f6f6f28;\n  border-radius: 8px;\n  gap: 8px;\n"]))),Z=v.ZP.p(a||(a=(0,j.Z)(["\n  font-weight: 600;\n"]))),k=v.ZP.span(o||(o=(0,j.Z)(["\n  margin-left: auto;\n  font-weight: 600;\n"]))),C=function(n){var e=n.contact,r=(0,f.I0)(),t=e.name.split(" ").map((function(n){return n[0].toUpperCase()+n.toLowerCase().slice(1)})).join(" ");return(0,h.jsxs)(y,{id:e.id,children:[(0,h.jsxs)(Z,{children:[t,":"]}),(0,h.jsx)(k,{children:e.number}),(0,h.jsx)(w,{type:"button",onClick:function(){return r((0,x.GK)(e.id))},children:"Delete"})]})},P=v.ZP.ul(s||(s=(0,j.Z)(["\n  width: 600px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  /* margin-left: auto;\n  margin-right: auto; */\n"]))),I=r(2791),S=function(){var n=(0,f.I0)(),e=(0,f.v9)(m.Af),r=(0,f.v9)(m.mj),t=(0,f.v9)(m.xU),i=(0,f.v9)(m.zh);(0,I.useEffect)((function(){n((0,x.yF)())}),[n]);return(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsx)("p",{children:"Loading contacts..."}),i&&(0,h.jsx)("p",{children:i}),(0,h.jsx)(P,{children:e.length>0&&function(){var n=r.toLowerCase().trim();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(n){return(0,h.jsx)(C,{contact:n},n.id)}))})," "]})},z=v.ZP.input(c||(c=(0,j.Z)(["\n  width: 600px;\n  display: flex;\n  justify-content: space-around;\n  gap: 32px;\n  padding: 8px 16px;\n  margin: 8px 0;\n  border: groove;\n  border-radius: 8px;\n  background-color: #f7f7f7c5;\n"]))),G=r(1634),L=function(){var n=(0,f.I0)(),e=(0,f.v9)(m.mj);return(0,h.jsxs)("label",{children:["Filter",(0,h.jsx)(z,{type:"text",onChange:function(e){n((0,G.p)(e.target.value))},value:e})]})},F=v.ZP.h1(l||(l=(0,j.Z)(["\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 32px;\n  margin: 0;\n"]))),T=v.ZP.h2(u||(u=(0,j.Z)(["\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 24px;\n  margin: 0;\n"])));function M(){var n=(0,f.I0)();return(0,I.useEffect)((function(){n((0,x.yF)())}),[n]),(0,h.jsxs)("div",{children:[(0,h.jsx)(F,{children:"Phonebook"}),(0,h.jsx)(g,{}),(0,h.jsx)(T,{children:"Contacts"}),(0,h.jsx)(L,{}),(0,h.jsx)(S,{})]})}}}]);
//# sourceMappingURL=563.65bc5cad.chunk.js.map