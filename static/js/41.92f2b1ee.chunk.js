(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[41],{104:function(e,c,s){"use strict";s(1);var l=s(4),t=s(22),a=s(0),r=function(){var e=Object(l.g)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-3",children:Object(a.jsx)("div",{className:"dashboard_tab_button",children:Object(a.jsxs)("ul",{role:"tablist",className:"nav flex-column dashboard-list",children:[Object(a.jsx)("li",{children:Object(a.jsxs)(t.b,{to:"/vendor-dashboard",className:"/vendor-dashboard"===e.pathname?"active":null,children:[Object(a.jsx)("i",{className:"fa fa-tachometer"}),"  Dashboard"]})}),Object(a.jsxs)("li",{children:[" ",Object(a.jsxs)(t.b,{to:"/vendor/all-product",className:"/vendor/all-product"===e.pathname?"active":null,children:[Object(a.jsx)("i",{className:"fa fa-shopping-cart"}),"Product"]})]}),Object(a.jsx)("li",{children:Object(a.jsxs)(t.b,{to:"/vendor/all-order",className:"/vendor/all-order"===e.pathname?"active":null,children:[Object(a.jsx)("i",{className:"fa fa-shopping-bag"}),"Order"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(t.b,{to:"/vendor/vendor-profile",className:"/vendor/vendor-profile"===e.pathname?"active":null,children:[Object(a.jsx)("i",{className:"fa fa-id-badge"}),"Profile"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(t.b,{to:"/vendor/add-products",className:"/vendor/add-products"===e.pathname?"active":null,children:[Object(a.jsx)("i",{className:"fa fa-user"}),"Add PRoduct"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(t.b,{to:"/vendor/vendor-setting",className:"/vendor/vendor-setting"===e.pathname?"active":null,children:[Object(a.jsx)("i",{className:"fa fa-user"}),"Settings"]})})]})})})})};c.a=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{id:"vendor_area",className:"ptb-100",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)(r,{}),Object(a.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-9",children:Object(a.jsx)("div",{className:"tab-content dashboard_content",children:Object(a.jsx)("div",{className:"tab-pane fade show active",children:e.children})})})]})})})})}},388:function(e,c,s){"use strict";s.r(c);s(1);var l=s(64),t=s(104),a=s(63),r=s(4),i=s(9),d=s.n(i),n=s(13),j=s(0),o=function(){var e=Object(r.f)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{id:"add_product_area",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-12",children:Object(j.jsxs)("div",{className:"add_product_wrapper",children:[Object(j.jsx)("h4",{children:"Add Product"}),Object(j.jsx)("form",{className:"add_product_form",onSubmit:function(c){c.preventDefault(),d.a.fire("Success","Product Successfully Added","success"),e.push("/shop")},children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-lg-12",children:Object(j.jsxs)("div",{className:"image-input",children:[Object(j.jsx)("img",{src:n.a,className:"image-preview",alt:"img"}),Object(j.jsx)("input",{type:"file",accept:"image/*",id:"imageInput"}),Object(j.jsxs)("label",{htmlFor:"imageInput",className:"image-button",children:[Object(j.jsx)("i",{className:"fa fa-image"}),"Choose image"]})]})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("div",{className:"fotm-group",children:[Object(j.jsxs)("label",{htmlFor:"product_name",children:["Product Name",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)("input",{type:"text",id:"product_name",className:"form-control",placeholder:"Product Title here",required:!0})]})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("div",{className:"fotm-group",children:[Object(j.jsxs)("label",{htmlFor:"product_price",children:["Product Price",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)("input",{type:"number",id:"product_price",className:"form-control",placeholder:"Product Price",required:!0})]})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("div",{className:"fotm-group",children:[Object(j.jsxs)("label",{htmlFor:"product_unit",children:["Product Unit",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsxs)("select",{name:"product",id:"product_unit",required:!0,children:[Object(j.jsx)("option",{value:"Filter",children:"Filter"}),Object(j.jsx)("option",{value:"volvo",children:"Most Popular"}),Object(j.jsx)("option",{value:"saab",children:"Best Seller"}),Object(j.jsx)("option",{value:"mercedes",children:"Trending"}),Object(j.jsx)("option",{value:"audi",children:"Featured"})]})]})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("div",{className:"fotm-group",children:[Object(j.jsxs)("label",{htmlFor:"product_available",children:["Product Available From",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)("input",{type:"date",id:"product_available",className:"form-control",required:!0})]})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("div",{className:"fotm-group",children:[Object(j.jsxs)("label",{htmlFor:"estimate_available",children:["Estimate Available For Days",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)("input",{type:"number",id:"estimate_available",className:"form-control",placeholder:"12",required:!0})]})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("div",{className:"fotm-group",children:[Object(j.jsxs)("label",{htmlFor:"available_stock",children:["Available Stock (Quantity)",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsx)("input",{type:"number",id:"available_stock",className:"form-control",placeholder:"45",required:!0})]})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("div",{className:"fotm-group",children:[Object(j.jsxs)("label",{htmlFor:"whole_sale",children:["Whole Sale Support",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsxs)("select",{name:"product",id:"whole_sale",required:!0,children:[Object(j.jsx)("option",{value:"yes",children:"Yes"}),Object(j.jsx)("option",{value:"no",children:"No"})]})]})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("div",{className:"fotm-group",children:[Object(j.jsxs)("label",{htmlFor:"flash_sale",children:["Flash Sale Support",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsxs)("select",{name:"product",id:"flash_sale",required:!0,children:[Object(j.jsx)("option",{value:"yes",children:"Yes"}),Object(j.jsx)("option",{value:"no",children:"No"})]})]})}),Object(j.jsx)("div",{className:"col-lg-6",children:Object(j.jsxs)("div",{className:"fotm-group",children:[Object(j.jsxs)("label",{htmlFor:"frequency_support",children:["Frequency Support",Object(j.jsx)("span",{className:"text-danger",children:"*"})]}),Object(j.jsxs)("select",{name:"product",id:"frequency_support",required:!0,children:[Object(j.jsx)("option",{value:"yes",children:"Yes"}),Object(j.jsx)("option",{value:"no",children:"No"})]})]})}),Object(j.jsx)("div",{className:"col-lg-12",children:Object(j.jsx)("div",{className:"btn_right_table",children:Object(j.jsx)("button",{className:"theme-btn-one bg-black btn_sm",children:"Add Product"})})})]})})]})})})})})})},b=s(65);c.default=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{}),Object(j.jsx)(a.a,{title:"Vendor"}),Object(j.jsx)(t.a,{children:Object(j.jsx)(o,{})}),Object(j.jsx)(b.a,{})]})}},63:function(e,c,s){"use strict";s(1);var l=s(22),t=s(0);c.a=function(e){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)("section",{id:"common_banner_one",children:Object(t.jsx)("div",{className:"container ",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col-lg-12",children:Object(t.jsxs)("div",{className:"common_banner_text",children:[Object(t.jsx)("h2",{children:e.title}),Object(t.jsxs)("ul",{children:[Object(t.jsx)("li",{children:Object(t.jsx)(l.b,{to:"/",children:"Home"})}),Object(t.jsx)("li",{className:"slash",children:"/"}),Object(t.jsx)("li",{className:"active",children:e.title})]})]})})})})})})}}}]);
//# sourceMappingURL=41.92f2b1ee.chunk.js.map