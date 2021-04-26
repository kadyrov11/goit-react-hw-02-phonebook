(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={contact:"ContactListItem_contact__3lDQ8",text:"ContactListItem_text__3Zziy",deleteBtn:"ContactListItem_deleteBtn__1drze"}},13:function(e,t,n){e.exports={heading:"Section_heading__23KKj"}},14:function(e,t,n){e.exports={title:"Filter_title__2vg2s",input:"Filter_input__mu-zb"}},16:function(e,t,n){e.exports={list:"ContactList_list__196Op"}},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(15),i=n.n(r),s=n(5),o=n(7),l=n(8),u=n(10),b=n(9),m=n(13),d=n.n(m),j=n(0),h=function(e){var t=e.title,n=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:d.a.heading,children:t}),Object(j.jsx)("div",{className:d.a.container,children:n})]})},O=n(3),p=n(4),x=n.n(p),f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(O.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this.handleSubmit,n=this.handleChange;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{id:"form",onSubmit:t,children:[Object(j.jsx)("label",{htmlFor:"name",className:x.a.label,required:!0,children:"Name"}),Object(j.jsx)("input",{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:n,value:this.state.name,name:"name",type:"text",id:"name",className:x.a.input,required:!0}),Object(j.jsx)("label",{htmlFor:"number",className:x.a.label,children:"Number"}),Object(j.jsx)("input",(e={value:this.state.number,name:"number",onChange:n,className:x.a.input,type:"tel"},Object(O.a)(e,"name","number"),Object(O.a)(e,"id","number"),Object(O.a)(e,"pattern","\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"),Object(O.a)(e,"title","\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"),Object(O.a)(e,"required",!0),e)),Object(j.jsx)("button",{className:x.a.btn,children:"Add contact"})]})})}}]),n}(a.Component),g=n(11),v=n.n(g),_=function(e){var t=e.name,n=e.onDelete,a=e.number;return Object(j.jsxs)("li",{className:v.a.contact,children:[Object(j.jsxs)("p",{className:v.a.text,children:[t,": ",a]}),Object(j.jsx)("button",{className:v.a.deleteBtn,onClick:n,children:"delete"})]})},C=n(16),F=n.n(C),N=function(e){var t=e.contacts,n=e.onClick,a=Object(s.a)(t).map((function(e,t){var a=e.id,c=e.name,r=e.number;return Object(j.jsx)(_,{name:c,number:r,onDelete:function(){return n(t)}},a)}));return Object(j.jsx)("ul",{className:F.a.list,children:a})},y=n(14),S=n.n(y),k=n(2),w=n.n(k),A=function(e){var t=e.label,n=e.value,a=e.onChange,c=w.a.generate();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{htmlFor:c,className:S.a.title,children:t}),Object(j.jsx)("input",{type:"text",id:c,value:n,onChange:a,className:S.a.input})]})},L=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:w.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:w.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:w.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:w.a.generate(),name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){var n=t.name,a=t.number,c={id:w.a.generate(),name:n,number:a};e.setState((function(e){var t=e.contacts;return t.find((function(e){return e.name.toLowerCase()===c.name.toLowerCase()}))?(alert("".concat(c.name," is already in contacts")),{contacts:t}):{contacts:[].concat(Object(s.a)(t),[c])}}))},e.changeFilter=function(t){var n=t.target;e.setState({filter:n.value})},e.onDelete=function(t){e.setState((function(e){var n=e.contacts,a=Object(s.a)(n);return a.splice(t,1),{contacts:a}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.addContact,c=this.changeFilter,r=this.onDelete,i=n.toLowerCase(),s=t.filter((function(e){var t=e.name,n=e.number;return t.toLowerCase().includes(i)||n.includes(i)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{title:"PhoneBook",children:Object(j.jsx)(f,{onSubmit:a})}),Object(j.jsx)(h,{title:"Contacts",children:t.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(A,{label:"Find contact by name or number :",value:n,onChange:c}),Object(j.jsx)(N,{contacts:s,onClick:r})]}):Object(j.jsx)("p",{style:{fontSize:"25px",textAlign:"center",color:"orange"},children:"There is no contact"})})]})}}]),n}(a.Component);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={label:"Form_label__7BVHP",input:"Form_input__3mNgL",btn:"Form_btn__D-sqx"}}},[[30,1,2]]]);
//# sourceMappingURL=main.44483e21.chunk.js.map