(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[51],{357:function(e,c,s){"use strict";s.r(c);s(1);var t=s(64),a=s(63),l=s(23),r=s(9),n=s.n(r),i=s(0),j=function(){var e=Object(l.b)(),c=Object(l.c)((function(e){return e.user.status})),s=Object(l.c)((function(e){return e.user.user}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"col-12",children:[Object(i.jsxs)("div",{className:"user-actions accordion",children:[Object(i.jsxs)("h3",{children:[Object(i.jsx)("i",{className:"fa fa-file mr-2"}),"Returning customer?",Object(i.jsx)("a",{className:"Returning  ml-2",href:"#!","data-toggle":"collapse","data-target":"#checkout_login","aria-expanded":"true",children:"Click here to login"})]}),Object(i.jsx)("div",{id:"checkout_login",className:"collapse","data-parent":"#checkout_login",children:Object(i.jsxs)("div",{className:"checkout_info",children:[Object(i.jsx)("p",{children:"If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section."}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(){if(c)n.a.fire({icon:"question",title:"Mr. "+s.name,html:"You are already loged in <br />"});else{e({type:"user/login"});var t=s.name||"Customer";console.log(typeof s.name),n.a.fire({icon:"success",title:"Login Sucessfull",text:"Welcome "+t})}}()},children:[Object(i.jsxs)("div",{className:"form_group default-form-box",children:[Object(i.jsxs)("label",{children:["Username or email ",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("input",{type:"text",className:"form-control"})]}),Object(i.jsxs)("div",{className:"form_group default-form-box",children:[Object(i.jsxs)("label",{children:["Password ",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("input",{type:"password",className:"form-control"})]}),Object(i.jsxs)("div",{className:"form_group group_3 default-form-box",children:[Object(i.jsx)("button",{className:"theme-btn-one btn-black-overlay btn_md",type:"submit",children:"Login"}),Object(i.jsxs)("label",{className:"checkbox-default",children:[Object(i.jsx)("input",{type:"checkbox"}),Object(i.jsx)("span",{children:"Remember me"})]})]}),Object(i.jsx)("a",{href:"#!",children:"Lost your password?"})]})]})})]}),Object(i.jsxs)("div",{className:"user-actions accordion",children:[Object(i.jsxs)("h3",{children:[Object(i.jsx)("i",{className:"fa fa-file mr-2"}),"Enter your voucher code",Object(i.jsx)("a",{className:"Returning ml-2",href:"#!","data-toggle":"collapse","data-target":"#checkout_coupon","aria-expanded":"true",children:"Click here to enter your code"})]}),Object(i.jsx)("div",{id:"checkout_coupon",className:"collapse checkout_coupon","data-parent":"#checkout_coupon",children:Object(i.jsx)("div",{className:"checkout_info",children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.a.fire("Error!!","Invalid Cuppon Code","error")},children:[Object(i.jsx)("input",{className:"mb-2",placeholder:"Coupon code",type:"text",required:!0}),Object(i.jsx)("button",{type:"submit",className:"theme-btn-one btn-black-overlay btn_sm",children:"Apply coupon"})]})})})]})]})})},d=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"col-lg-6 col-md-6",children:[Object(i.jsx)("h3",{children:"Your order"}),Object(i.jsx)("div",{className:"order_table table-responsive",children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Product"}),Object(i.jsx)("th",{children:"Total"})]})}),Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsxs)("td",{children:[" green Dress For Woman ",Object(i.jsx)("strong",{children:" \xd7 1"})]}),Object(i.jsx)("td",{children:" $100.00"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsxs)("td",{children:[" V-Neck Dress ",Object(i.jsx)("strong",{children:" \xd7 1"})]}),Object(i.jsx)("td",{children:" $50.00"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsxs)("td",{children:[" Boho Tops ",Object(i.jsx)("strong",{children:" \xd7 1"})]}),Object(i.jsx)("td",{children:" $40.00"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsxs)("td",{children:[" Tulip Dress  ",Object(i.jsx)("strong",{children:" \xd7 1"})]}),Object(i.jsx)("td",{children:" $60.00"})]})]}),Object(i.jsxs)("tfoot",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Cart Subtotal"}),Object(i.jsx)("td",{children:"$250.00"})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Shipping"}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"$5.00"})})]}),Object(i.jsxs)("tr",{className:"order_total",children:[Object(i.jsx)("th",{children:"Order Total"}),Object(i.jsx)("td",{children:Object(i.jsx)("strong",{children:"$255.00"})})]})]})]})}),Object(i.jsxs)("div",{className:"payment_method",children:[Object(i.jsx)("form",{children:Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"payment_area_wrappers",children:[Object(i.jsx)("div",{className:"heading_payment",id:"headingOne",children:Object(i.jsxs)("div",{className:"","data-toggle":"collapse","data-target":"#collapseOne",children:[Object(i.jsx)("input",{type:"radio",name:"payment",id:"html",value:"HTML",defaultChecked:!0}),Object(i.jsx)("label",{htmlFor:"html",children:"Direct Bank Transfer"})]})}),Object(i.jsx)("div",{id:"collapseOne",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"payment_body",children:Object(i.jsx)("p",{children:"Direct Bank Transfer"})})})]}),Object(i.jsxs)("div",{className:"payment_area_wrappers",children:[Object(i.jsx)("div",{className:"heading_payment",id:"headingTwo",children:Object(i.jsxs)("div",{className:"collapsed","data-toggle":"collapse","data-target":"#collapseTwo",children:[Object(i.jsx)("input",{type:"radio",name:"payment",id:"javascript",value:"JavaScript"}),Object(i.jsx)("label",{htmlFor:"javascript",children:"Mobile Banking"})]})}),Object(i.jsx)("div",{id:"collapseTwo",className:"collapse","data-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"payment_body",children:Object(i.jsx)("p",{children:"Direct Mobile Transfer"})})})]}),Object(i.jsxs)("div",{className:"payment_area_wrappers",children:[Object(i.jsx)("div",{className:"heading_payment",id:"headingThree",children:Object(i.jsxs)("div",{className:"collapsed","data-toggle":"collapse","data-target":"#collapseThree",children:[Object(i.jsx)("input",{type:"radio",name:"payment",id:"css",value:"JavaScript"}),Object(i.jsx)("label",{htmlFor:"css",children:"Paypal"})]})}),Object(i.jsx)("div",{id:"collapseThree",className:"collapse","data-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"payment_body",children:Object(i.jsx)("p",{children:"Some placeholder content for the second accordion panel. This panel is hidden by default."})})})]})]})}),Object(i.jsx)("div",{className:"order_button pt-3",children:Object(i.jsx)("button",{className:"theme-btn-one btn-black-overlay btn_sm",type:"submit",children:"Proceed to Pay"})})]})]})})},o=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{id:"checkout_two",className:"ptb-100",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)(j,{}),Object(i.jsx)("div",{className:"col-lg-12",children:Object(i.jsx)("div",{className:"checkout_area_two",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(i.jsxs)("div",{className:"checkout_form_area",children:[Object(i.jsx)("h3",{children:"Billing Details"}),Object(i.jsx)("form",{action:"#",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsxs)("div",{className:"default-form-box",children:[Object(i.jsxs)("label",{children:["First Name ",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("input",{type:"text",className:"form-control"})]})}),Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsxs)("div",{className:"default-form-box",children:[Object(i.jsxs)("label",{children:["Last Name ",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("input",{type:"text",className:"form-control"})]})}),Object(i.jsx)("div",{className:"col-12",children:Object(i.jsxs)("div",{className:"default-form-box",children:[Object(i.jsxs)("label",{children:["Company Name",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("input",{type:"text",className:"form-control"})]})}),Object(i.jsx)("div",{className:"col-12",children:Object(i.jsxs)("div",{className:"default-form-box",children:[Object(i.jsxs)("label",{htmlFor:"country",children:["country",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsxs)("select",{className:"country_option nice-select wide form-control",name:"country",id:"country",children:[Object(i.jsx)("option",{defaultValue:"2",children:"Bangladesh"}),Object(i.jsx)("option",{defaultValue:"3",children:"Algeria"}),Object(i.jsx)("option",{defaultValue:"4",children:"Afghanistan"}),Object(i.jsx)("option",{defaultValue:"5",children:"Ghana"}),Object(i.jsx)("option",{defaultValue:"6",children:"Albania"}),Object(i.jsx)("option",{defaultValue:"7",children:"Bahrain"}),Object(i.jsx)("option",{defaultValue:"8",children:"Colombia"}),Object(i.jsx)("option",{defaultValue:"9",children:"Dominican Republic"})]})]})}),Object(i.jsx)("div",{className:"col-12",children:Object(i.jsxs)("div",{className:"default-form-box",children:[Object(i.jsxs)("label",{children:["Street address",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("input",{placeholder:"House number and street name",type:"text",className:"form-control"})]})}),Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("div",{className:"default-form-box",children:Object(i.jsx)("input",{placeholder:"Apartment, suite, unit etc. (optional)",type:"text",className:"form-control"})})}),Object(i.jsx)("div",{className:"col-12",children:Object(i.jsxs)("div",{className:"default-form-box",children:[Object(i.jsxs)("label",{children:["Town / City",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("input",{type:"text",className:"form-control"})]})}),Object(i.jsx)("div",{className:"col-12",children:Object(i.jsxs)("div",{className:"default-form-box",children:[Object(i.jsxs)("label",{children:["State / County",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("input",{type:"text",className:"form-control"})]})}),Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsxs)("div",{className:"default-form-box",children:[Object(i.jsxs)("label",{children:["Phone ",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("input",{type:"text",className:"form-control"})]})}),Object(i.jsx)("div",{className:"col-lg-6",children:Object(i.jsxs)("div",{className:"default-form-box",children:[Object(i.jsxs)("label",{children:[" Email Address",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("input",{type:"text",className:"form-control"})]})}),Object(i.jsx)("div",{className:"col-12",children:Object(i.jsxs)("div",{className:"order-notes",children:[Object(i.jsxs)("label",{htmlFor:"order_note",children:["Order Notes",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)("textarea",{id:"order_note",placeholder:"Notes about your order, e.g. special notes for delivery.",className:"form-control",rows:"5"})]})})]})})]})}),Object(i.jsx)(d,{})]})})})]})})})})},b=s(65);c.default=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(t.a,{}),Object(i.jsx)(a.a,{title:"Checkout"}),Object(i.jsx)(o,{}),Object(i.jsx)(b.a,{})]})}},63:function(e,c,s){"use strict";s(1);var t=s(16),a=s(0);c.a=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{id:"common_banner_one",children:Object(a.jsx)("div",{className:"container ",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-lg-12",children:Object(a.jsxs)("div",{className:"common_banner_text",children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(t.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"slash",children:"/"}),Object(a.jsx)("li",{className:"active",children:e.title})]})]})})})})})})}}}]);
//# sourceMappingURL=51.25e4264e.chunk.js.map