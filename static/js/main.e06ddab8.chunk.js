(this["webpackJsonpelectric-bill-calculator"]=this["webpackJsonpelectric-bill-calculator"]||[]).push([[0],{39:function(e,a,t){e.exports=t(54)},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},51:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(17),c=t.n(r),i=(t(44),t(34)),u=t(6),o=(t(45),t(9)),m=t(76),s=(t(46),t(29));var p=function(){var e=Object(s.a)(),a=e.register,t=e.handleSubmit,r=e.errors,c=Object(l.useState)(0),i=Object(o.a)(c,2),u=i[0],m=i[1],p=Object(l.useState)(0),E=Object(o.a)(p,2),d=E[0],h=E[1];return n.a.createElement("div",{className:"container"},n.a.createElement("div",null,n.a.createElement("form",{onSubmit:t((function(e){var a=e.drive_miles,t=e.current_pay;m((parseFloat(9003.714027)+.3*parseFloat(a))*parseFloat(t)),h(.15*(parseFloat(9003.714027)+.3*parseFloat(a)))}))},n.a.createElement("h1",null,"Rate A Calculation"),n.a.createElement("label",null,"What is your current $/kWh rate?"),n.a.createElement("input",{type:"number",step:"any",placeholder:"(Between $0.00 - $1.00)",name:"current_pay",ref:a({required:!0,min:0,max:1})}),r.current_pay&&n.a.createElement("p",null,"Please enter a value between $0.00 - $1.00"),n.a.createElement("label",null,"How many miles do you drive per year?"),n.a.createElement("input",{type:"number",step:"any",placeholder:"On avg. 17,000 miles/year",name:"drive_miles",ref:a({required:!0})}),r.drive_miles&&n.a.createElement("p",null,"Miles you drive per year is required"),n.a.createElement("input",{type:"submit"}))),n.a.createElement("div",{className:"display-result"},n.a.createElement("h1",null,"Final Bill"),n.a.createElement("div",{className:"parent-div"},n.a.createElement("div",{className:"current-pay"},n.a.createElement("h2",null,"Total bill with current pay"),n.a.createElement("h2",null," $",u.toFixed(2))),n.a.createElement("div",null,n.a.createElement("h2",null,"Total bill with Rate A ($0.15/kWh)"),n.a.createElement("h2",null,"$",d.toFixed(2)))),n.a.createElement("h2",null,"Result "),u&&d?u>d?"Rate A is cheaper than what you pay currently ":"Currently you pay cheaper than Rate A":""))},E=t(77),d=t(78),h=t(79);var y=function(){var e=Object(s.a)(),a=e.register,t=e.handleSubmit,r=e.errors,c=Object(l.useState)(0),i=Object(o.a)(c,2),u=i[0],m=i[1],p=Object(l.useState)(0),y=Object(o.a)(p,2),v=y[0],b=y[1],f=n.a.useState("1"),w=Object(o.a)(f,2),F=w[0],$=w[1];return n.a.createElement("div",{className:"container"},n.a.createElement("div",null,n.a.createElement("form",{onSubmit:t((function(e){var a=e.drive_miles,t=e.current_pay;if(1===parseFloat(F)){b(.2*(parseFloat(2605.8635994650062)+.3*parseFloat(a))),m((parseFloat(2605.8635994650062)+.3*parseFloat(a))*parseFloat(t))}else{b(.08*(parseFloat(6397.850427506976)+.3*parseFloat(a))),m((parseFloat(6397.850427506976)+.3*parseFloat(a))*parseFloat(t))}}))},n.a.createElement("h1",null," Rate B Calculation "),n.a.createElement("label",null," What is your current $/kWh rate? "),n.a.createElement("input",{type:"number",step:"any",placeholder:"(Between $0.00 - $1.00)",name:"current_pay",ref:a({required:!0,min:0,max:1})})," ",r.current_pay&&n.a.createElement("p",null," Please enter a value between $0 .00 - $1 .00 ")," ",n.a.createElement("label",null," How many miles do you drive per year? ")," ",n.a.createElement("input",{type:"number",step:"any",placeholder:"On avg.17,000 miles/year",name:"drive_miles",ref:a({required:!0,max:17e3})})," ",r.drive_miles&&n.a.createElement("p",null," On avg.17,000 miles / year "),n.a.createElement("label",{className:"period"}," What hours of day will you charge your car? "),n.a.createElement(d.a,{"aria-label":"period",name:"period",value:F,onChange:function(e){$(e.target.value)}},n.a.createElement(h.a,{value:"1",control:n.a.createElement(E.a,null),label:"12:00 pm - 6:00 pm"}),n.a.createElement(h.a,{value:"2",control:n.a.createElement(E.a,null),label:"6:00 pm - 11:59 am"}))," "," "," "," "," "," ",n.a.createElement("input",{type:"submit"}))," "),n.a.createElement("div",{className:"display-result"},n.a.createElement("h1",null," Final Bill "),n.a.createElement("div",{className:"parent-div"},n.a.createElement("div",{className:"current-pay"},n.a.createElement("h2",null," Total bill with current pay ")," ",n.a.createElement("h2",null," $ ",u.toFixed(2)," ")," ")," ",n.a.createElement("div",null,n.a.createElement("h2",null," Total bill with Rate B ")," ",n.a.createElement("h2",null," $ ",v.toFixed(2)," ")," ")," ")," ",n.a.createElement("h2",null," Result ")," ",u&&v?u>v?"Rate B is cheaper than what you pay currently ":"Currently you pay cheaper than Rate B":""," ")," "," "," "," "," ")};t(51);var v=function(){var e=Object(l.useState)(0),a=Object(o.a)(e,2),t=a[0],r=a[1];function c(e){r(e)}return n.a.createElement("div",null,n.a.createElement("div",{className:"common-area"},n.a.createElement(m.a,{onClick:function(e){return c("a")},className:"rate active",variant:"contained",color:"primary"},"Rate A"),n.a.createElement("label",null,"Rate A is a flat $0.15/kWh "),n.a.createElement(m.a,{onClick:function(e){return c("b")},className:"rate",variant:"contained",color:"secondary"},"Rate B"),n.a.createElement("label",null,"Rate B is a TOU rate of $0.20/kWh between noon and 6pm, and $0.08/kWh otherwise  ")),"a"===t?n.a.createElement(p,null):"","b"===t?n.a.createElement(y,null):"")};var b=function(){return n.a.createElement(i.a,null,n.a.createElement("div",null,n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/"},n.a.createElement(v,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.e06ddab8.chunk.js.map