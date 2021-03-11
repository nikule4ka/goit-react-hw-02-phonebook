(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{13:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__4TvGi",ContactList__item:"ContactList_ContactList__item__2ZVsZ",ContactList__btn:"ContactList_ContactList__btn__2sZgO"}},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(19),n(14)),s=n(4),u=n(5),l=n(7),m=n(6),b=(n(20),n(11)),d=n.n(b),h=n(12),j=n(9),f=n.n(j),C=n(0),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.hanldeChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form,children:[Object(C.jsxs)("label",{children:["Name",Object(C.jsx)("input",{type:"text",name:"name",value:e,onChange:this.hanldeChange,placeholder:"Name...",required:!0})]}),Object(C.jsxs)("label",{children:["Number",Object(C.jsx)("input",{type:"phone",name:"number",value:n,onChange:this.hanldeChange,placeholder:"Phone...",required:!0})]}),Object(C.jsx)("button",{type:"submit",className:f.a.btnForm,children:"Add contact"})]})}}]),n}(a.Component),O=n(2),_=n.n(O),v=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(C.jsx)("ul",{className:_.a.ContactList,children:e.length?e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsxs)("li",{id:e,className:_.a.ContactList__item,children:[Object(C.jsxs)("p",{className:_.a.ContactList__text,children:[a,":"]}),Object(C.jsx)("p",{className:_.a.ContactList__text,children:c}),Object(C.jsx)("button",{className:_.a.ContactList__btn,onClick:function(){return n(e)},children:"Delete"})]},e)})):Object(C.jsx)("p",{children:"No contacts found"})})},x=n(13),g=n.n(x),L=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("label",{htmlFor:"",className:g.a.filter__label,children:["Find contacts by name",Object(C.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,required:!0})]})};L.defaultProps={value:""};var y=L,N=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addContacts=function(e){var n=e.name,a=e.number,c={id:d.a.generate(),name:n,number:a},r=t.state.contacts.find((function(t){return t.name===c.name}));if(r)return alert("".concat(r.name," is already in contacts"));t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return n.trim()?a.filter((function(t){var e=t.name,n=t.number;return e.toLowerCase().includes(c)||n.includes(c)})):a},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(p,{onSubmit:this.addContacts}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(y,{value:t,onChange:this.changeFilter}),Object(C.jsx)(v,{contacts:e,onDeleteContacts:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(N,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",btnForm:"ContactForm_btnForm__RrRV0"}}},[[30,1,2]]]);
//# sourceMappingURL=main.b37cbbcf.chunk.js.map