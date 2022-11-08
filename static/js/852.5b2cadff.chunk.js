"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[852],{1852:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,s,o,c=t(885),x=t(2791),d=t(5705),p=t(5264),l=t(7126),u=t(6251),m=t(168),h=t(3626),f=h.Z.label(r||(r=(0,m.Z)(["\n    margin-bottom: 30px;\n    border-radius: 5px;\n"]))),g=h.Z.span(a||(a=(0,m.Z)(["\n    font-weight: 700;\n    margin-right: 5px;\n    color: #33C1FF;\n    \n"]))),b=h.Z.h1(i||(i=(0,m.Z)(["\n    font-size: 26px;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    color: #33C1FF;\n    margin-bottom: 30px;\n"]))),j=h.Z.div(s||(s=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    \n"]))),Z=h.Z.div(o||(o=(0,m.Z)(["\n    width: 70%;\n    margin: 0 auto;\n    padding: 50px 10px 50px 10px;\n        \n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n"]))),w=t(9649),v=t(184);function y(){var n=(0,u.Tn)(),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,u.wY)().data;return(0,x.useEffect)((function(n){r.isSuccess&&p.Notify.success("The ".concat(n," has been added to your contact list."))}),[r.isSuccess]),(0,v.jsxs)(Z,{children:[r.isLoading&&(0,v.jsx)(w.a,{}),(0,v.jsx)(b,{children:"Contacts"}),(0,v.jsx)(d.J9,{initialValues:{name:"",number:""},onSubmit:function(n,e){var r=n.name,i=n.number,s=e.resetForm;a.some((function(n){return n.name.toLowerCase()===r.toLowerCase()}))?p.Notify.failure("".concat(r," is already in contacts.")):t({name:r,number:i})&&s()},children:(0,v.jsxs)(j,{children:[(0,v.jsxs)(f,{children:[(0,v.jsx)(g,{children:"Name"}),(0,v.jsx)(d.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,v.jsxs)(f,{children:[(0,v.jsx)(g,{children:" Number"}),(0,v.jsx)(d.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)(l.Z,{variant:"contained",color:"primary",size:"small",type:"submit",disabled:r.isLoading,children:"Add Contact"})]})})]})}var C,F,z,L,N,_=t(5048),k=h.Z.li(C||(C=(0,m.Z)(["\n    margin-top: 5px;\n    margin-bottom: 5px;\n"]))),A=t(7247),I=function(n){var e=n.name,t=n.number,r=n.id,a=(0,u.Nt)(),i=(0,c.Z)(a,2),s=i[0],o=i[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("p",{children:[e," : ",t," "]}),(0,v.jsx)(l.Z,{variant:"outlined",startIcon:(0,v.jsx)(A.Z,{}),color:"primary",size:"small",type:"button",onClick:function(){return s(r)},contactId:r,disabled:o.isLoading,children:"Delete"})]})},S=function(){var n=(0,u.wY)(),e=n.data,t=n.error,r=n.isLoading,a=n.refetch,i=(0,_.v9)((function(n){return n.filter}));(0,x.useEffect)((function(){a()}),[a]);return(0,v.jsxs)("ul",{children:[t&&(0,v.jsx)("p",{children:t.data}),r?(0,v.jsx)(w.a,{}):"",e&&(i?e.filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())})):e).map((function(n){var e=n.name,t=n.number,r=n.id;return(0,v.jsx)(k,{children:(0,v.jsx)(I,{name:e,number:t,id:r})},r)}))]})},Y=t(4808),q=h.Z.p(F||(F=(0,m.Z)(["\n    font-weight: 700;\n    color: #33C1FF;\n    text-align: center;\n    "]))),E=h.Z.div(z||(z=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 70%;\n    margin: 0 auto;\n    padding: 50px 10px 50px 10px;\n    align-items: center;\n    justify-content: center;\n        \n    "]))),J=function(){var n=(0,_.I0)(),e=(0,_.v9)((function(n){return n.filter}));return(0,v.jsxs)(E,{children:[(0,v.jsx)(q,{children:"Find contacts by name"}),(0,v.jsx)("input",{type:"text",value:e,onChange:function(e){var t=e.target.value;n((0,Y.M)(t))}})]})},M=h.Z.h1(L||(L=(0,m.Z)(["\n    font-size: 20px;\n    text-transform: uppercase;\n    text-align: center;\n    font-weight: 700;\n    color: #33C1FF;\n    margin-bottom: 30px;\n"]))),T=(h.Z.div(N||(N=(0,m.Z)(["\n    width: 70%;\n    margin: 0 auto;\n    padding: 50px 10px 50px 10px;\n        \n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n"]))),function(){var n=(0,u.wY)().data;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(y,{}),(0,v.jsx)(J,{}),n&&n.length>0?(0,v.jsx)(S,{}):(0,v.jsx)(M,{children:"Contact list is empty"})]})})}}]);
//# sourceMappingURL=852.5b2cadff.chunk.js.map