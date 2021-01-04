(this["webpackJsonp8bit-todo-list"]=this["webpackJsonp8bit-todo-list"]||[]).push([[0],{27:function(e,t,s){},29:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(1),r=s(20),a=s.n(r),c=(s(27),s(28),s(4)),l=s(15),o=s(3),d=s(5),j=s(6),u=s(8),b=s(7),h=s(21),f=s(12),O=s(14),m=(s(29),function(e){var t=e.todos,s=e.listID,i=e.onToggleTodo,r=e.onDeleteTodo;return Object(n.jsx)("ul",{className:"nes-list is-disc todos-list",children:t.map((function(e){var t=e.id,a=e.name,c=e.isDone;return Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"nes-text is-error nes-pointer",onClick:function(){return r(s,t)},children:"[x]"})," "+a+" ",Object(n.jsx)("span",{className:"nes-text nes-pointer ".concat(c?"is-success":"is-error"),onClick:function(){return i(s,t)},children:c?"[\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e]":"[\u043d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043e]"})]},t)}))})}),p=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).handleChange=function(e){e.preventDefault(),n.setState({name:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.name;""!==t?(n.props.onAddTodo(n.props.listID,t),n.setState({name:"",isError:!1})):n.setState({isError:!0})},n.state={name:"",isError:!1},n}return Object(j.a)(s,[{key:"render",value:function(){var e=this.state.isError;return Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:"nes-field is-inline",children:[Object(n.jsx)("input",{type:"text",id:"inline_field",className:e?"nes-input is-error":"nes-input",placeholder:e?"\u041f\u0443\u0441\u0442\u043e!":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443",value:this.state.name,onChange:this.handleChange,autoComplete:"off"}),Object(n.jsx)("button",{type:"submit",className:"nes-btn is-primary",children:"+"})]})}}]),s}(i.Component),x=function(e){var t=e.todos,s=t.length,r=t.filter((function(e){return e.isDone})).length;return Object(n.jsxs)(i.Fragment,{children:[Object(n.jsx)("p",{className:"progress-bar-label",children:"\u0412\u0430\u0448 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441:"}),Object(n.jsx)("progress",{className:"nes-progress is-success",value:r,max:s})]})},g=function(e){var t=e.onFilterTodo,s=e.filter;return Object(n.jsxs)("div",{className:"form_part",children:[Object(n.jsx)("label",{htmlFor:"filter_select",className:"filter_select",children:"\u0424\u0438\u043b\u044c\u0442\u0440:"}),Object(n.jsx)("div",{className:"nes-select is-dark",children:Object(n.jsxs)("select",{required:!0,id:"filter_select",className:"filter_select",onChange:function(e){return t(e.target.value)},value:s,children:[Object(n.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"}),Object(n.jsx)("option",{value:"undone",className:"nes-pointer",children:"\u041d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"}),Object(n.jsx)("option",{value:"done",className:"nes-pointer",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"}),Object(n.jsx)("option",{value:"all",className:"nes-pointer",children:"\u0412\u0441\u0435"})]})})]})},v=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).handleFilterTodo=function(e){n.setState({filter:e})},n.state={filter:""},n}return Object(j.a)(s,[{key:"render",value:function(){var e=this.props.list,t=e.title,s=e.description,i=e.todos,r=this.props,a=r.onAddTodo,c=r.onDeleteList,l=r.onToggleTodo,d=r.onDeleteTodo,j=i.length>0,u=function(e){var t=[];switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all"){case"all":t=Object(o.a)(e);break;case"done":t=e.filter((function(e){return e.isDone}));break;case"undone":t=e.filter((function(e){return!e.isDone}));break;default:t=Object(o.a)(e)}return t}(i,this.state.filter);return Object(n.jsxs)("div",{className:"nes-container is-dark with-title",style:{marginTop:"10px"},children:[Object(n.jsx)("p",{className:"title",children:t}),Object(n.jsx)("p",{children:s}),j?Object(n.jsx)(m,{todos:u,listID:e.id,onDeleteTodo:d,onToggleTodo:l}):Object(n.jsx)("p",{children:"\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442!"}),Object(n.jsx)(p,{onAddTodo:a,listID:e.id}),j&&Object(n.jsx)(x,{todos:i}),j&&Object(n.jsx)(g,{onFilterTodo:this.handleFilterTodo,filter:this.state.filter}),Object(n.jsx)("button",{className:"nes-btn is-error col-12",onClick:function(){return c(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"})]})}}]),s}(i.Component),N=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state,s=t.title,i=t.description;""!==s?(n.props.onSubmit(s,i),n.setState({title:"",description:"",isError:!1})):n.setState({isError:!0})},n.handleChangeTitle=function(e){n.setState({title:e.target.value})},n.handleChangeDescription=function(e){n.setState({description:e.target.value})},n.state={title:"",description:"",isError:!1},n}return Object(j.a)(s,[{key:"render",value:function(){var e=this.state,t=e.title,s=e.description,i=e.isError;return Object(n.jsxs)("div",{className:"nes-container with-title",children:[Object(n.jsx)("p",{className:"title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{className:"nes-field",children:[Object(n.jsx)("label",{htmlFor:"name_field",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430:"}),Object(n.jsx)("input",{type:"text",id:"name_field",className:i?"nes-input is-error":"nes-input",value:t,onChange:this.handleChangeTitle,autoComplete:"off",placeholder:i?"\u0418\u043c\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"})]}),Object(n.jsx)("label",{htmlFor:"list-description",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430:"}),Object(n.jsx)("textarea",{id:"list-description",className:"nes-textarea",value:s,onChange:this.handleChangeDescription}),Object(n.jsx)("button",{type:"submit",className:"nes-btn is-primary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),s}(i.Component),S=function(){return Object(n.jsxs)("div",{className:"nes-container with-title",style:{margin:"1rem 0"},children:[Object(n.jsx)("p",{className:"title",children:"\u042d\u0431\u0430\u0443\u0442"}),Object(n.jsxs)(f.a,{children:[Object(n.jsx)(O.a,{md:6,children:Object(n.jsxs)("ul",{className:"nes-list is-disc",children:[Object(n.jsxs)("li",{children:["\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e"," ",Object(n.jsx)("a",{href:"https://reactjs.org/",target:"_blank",rel:"noreferrer noopener",children:"React"})]}),Object(n.jsxs)("li",{children:["\u0421\u0442\u0438\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e"," ",Object(n.jsx)("a",{href:"https://nostalgic-css.github.io/NES.css/",target:"_blank",rel:"noreferrer noopener",children:"NES.css"})]}),Object(n.jsxs)("li",{children:["\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e"," ",Object(n.jsx)("a",{href:"https://frwellmonalisa.github.io/",target:"_blank",rel:"noreferrer noopener",children:"frwellmonalisa"})]}),Object(n.jsxs)("li",{children:["\u041a\u043e\u0434 \u043d\u0430"," ",Object(n.jsx)("a",{href:"https://github.com/frwellmonalisa/8bit-todo-list",target:"_blank",rel:"noreferrer noopener",children:"GitHub"})]})]})}),Object(n.jsx)(O.a,{md:6,className:"d-flex align-items-center justify-content-center ",children:Object(n.jsx)("i",{className:"nes-octocat animate"})})]})]})},T=function(e,t,s){return[].concat(Object(o.a)(e.slice(0,t)),[s],Object(o.a)(e.slice(t+1)))},D=s(18),y=s.n(D),k=function(e,t){return[e.find((function(e){return e.id===t})),e.findIndex((function(e){return e.id===t}))]},C=function(e){localStorage.setItem("lists",e)},_=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var n;return Object(d.a)(this,s),(n=t.call(this,e)).handleAddList=function(e,t){var s=function(e,t){return{id:y()(),title:e,description:t,todos:[]}}(e,t);n.setState({lists:[].concat(Object(o.a)(n.state.lists),[s])},(function(){return C(JSON.stringify(n.state.lists))}))},n.handleDeleteList=function(e){var t=n.state.lists.filter((function(t){return t.id!==e}));n.setState({lists:t},(function(){return C(JSON.stringify(n.state.lists))}))},n.handleAddTodo=function(e,t){var s=function(e){return{id:y()(),name:e,isDone:!1}}(t),i=k(n.state.lists,e),r=Object(l.a)(i,2),a=r[0],d=r[1],j=Object(c.a)(Object(c.a)({},a),{},{todos:[].concat(Object(o.a)(a.todos),[s])});n.setState({lists:T(n.state.lists,d,j)},(function(){return C(JSON.stringify(n.state.lists))}))},n.handleToggleTodo=function(e,t){var s,i,r=k(n.state.lists,e),a=Object(l.a)(r,2),o=a[0],d=a[1],j=(s=o.todos,i=t,[s.find((function(e){return e.id===i})),s.findIndex((function(e){return e.id===i}))]),u=Object(l.a)(j,2),b=u[0],h=u[1],f=Object(c.a)(Object(c.a)({},b),{},{isDone:!b.isDone}),O=Object(c.a)(Object(c.a)({},o),{},{todos:T(o.todos,h,f)});n.setState({lists:T(n.state.lists,d,O)},(function(){return C(JSON.stringify(n.state.lists))}))},n.handleDeleteTodo=function(e,t){var s=k(n.state.lists,e),i=Object(l.a)(s,2),r=i[0],a=i[1],o=Object(c.a)(Object(c.a)({},r),{},{todos:r.todos.filter((function(e){return e.id!==t}))});n.setState({lists:T(n.state.lists,a,o)},(function(){return C(JSON.stringify(n.state.lists))}))},n.state={lists:[]},n}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("lists"),t=e?JSON.parse(e):[];this.setState({lists:t})}},{key:"render",value:function(){var e=this,t=this.state.lists.map((function(t){return Object(n.jsx)(O.a,{lg:6,children:Object(n.jsx)(v,{list:t,onAddTodo:e.handleAddTodo,onDeleteList:e.handleDeleteList,onToggleTodo:e.handleToggleTodo,onDeleteTodo:e.handleDeleteTodo})},t.id)}));return Object(n.jsxs)(h.a,{children:[Object(n.jsx)(f.a,{className:"my-4",children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("h1",{className:"text-center",children:"8Bit ToDo List"}),Object(n.jsx)("div",{className:"nes-container is-dark is-centered",children:Object(n.jsx)("p",{children:"\u041f\u0440\u0438\u0432\u0435\u0442! \u042d\u0442\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0442\u0443\u0434\u0443 \u043b\u0438\u0441\u0442. \u041e\u043d \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439, \u0447\u0442\u043e \u0434\u0430\u0436\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0443 \u043d\u0435\u0433\u043e \u0432 \u0434\u0443\u0445\u0435 \u0438\u0433\u0440 8-\u0431\u0438\u0442\u043d\u043e\u0439 \u044d\u043f\u043e\u0445\u0438. \u0417\u0430\u0432\u0435\u0434\u0438 \u0441\u0432\u043e\u0438 \u0441\u043f\u0438\u0441\u043a\u0438 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441! \u0414\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0441\u044f \u0432 \u0442\u0432\u043e\u0435\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u043f\u043e\u043a\u0430 \u0442\u044b \u043d\u0435 \u043f\u043e\u0447\u0438\u0441\u0442\u0438\u0448\u044c \u043a\u044d\u0448."})})]})}),Object(n.jsxs)(f.a,{className:"my-4",children:[Object(n.jsxs)(O.a,{md:4,children:[Object(n.jsx)("div",{className:"nes-balloon from-left",children:Object(n.jsx)("p",{children:"\u0412\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0441\u044f \u0444\u043e\u0440\u043c\u043e\u0439 \u0440\u044f\u0434\u043e\u043c \u0441\u043e \u043c\u043d\u043e\u0439, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a!"})}),Object(n.jsx)("i",{className:"nes-mario"})]}),Object(n.jsx)(O.a,{md:8,children:Object(n.jsx)(N,{onSubmit:this.handleAddList})})]}),Object(n.jsx)(f.a,{children:t}),Object(n.jsx)(S,{})]})}}]),s}(i.Component);a.a.render(Object(n.jsx)(_,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.679c3fac.chunk.js.map