(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[43],{104:function(e,c,t){"use strict";t(1);var s=t(4),a=t(16),l=t(0),n=function(){var e=Object(s.g)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-3",children:Object(l.jsx)("div",{className:"dashboard_tab_button",children:Object(l.jsxs)("ul",{role:"tablist",className:"nav flex-column dashboard-list",children:[Object(l.jsx)("li",{children:Object(l.jsxs)(a.b,{to:"/vendor-dashboard",className:"/vendor-dashboard"===e.pathname?"active":null,children:[Object(l.jsx)("i",{className:"fa fa-tachometer"}),"  Dashboard"]})}),Object(l.jsxs)("li",{children:[" ",Object(l.jsxs)(a.b,{to:"/vendor/all-product",className:"/vendor/all-product"===e.pathname?"active":null,children:[Object(l.jsx)("i",{className:"fa fa-shopping-cart"}),"Product"]})]}),Object(l.jsx)("li",{children:Object(l.jsxs)(a.b,{to:"/vendor/all-order",className:"/vendor/all-order"===e.pathname?"active":null,children:[Object(l.jsx)("i",{className:"fa fa-shopping-bag"}),"Order"]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(a.b,{to:"/vendor/vendor-profile",className:"/vendor/vendor-profile"===e.pathname?"active":null,children:[Object(l.jsx)("i",{className:"fa fa-id-badge"}),"Profile"]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(a.b,{to:"/vendor/add-products",className:"/vendor/add-products"===e.pathname?"active":null,children:[Object(l.jsx)("i",{className:"fa fa-user"}),"Add PRoduct"]})}),Object(l.jsx)("li",{children:Object(l.jsxs)(a.b,{to:"/vendor/vendor-setting",className:"/vendor/vendor-setting"===e.pathname?"active":null,children:[Object(l.jsx)("i",{className:"fa fa-user"}),"Settings"]})})]})})})})};c.a=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{id:"vendor_area",className:"ptb-100",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(n,{}),Object(l.jsx)("div",{className:"col-sm-12 col-md-12 col-lg-9",children:Object(l.jsx)("div",{className:"tab-content dashboard_content",children:Object(l.jsx)("div",{className:"tab-pane fade show active",children:e.children})})})]})})})})}},385:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t(64),l=t(104),n=t(106),i=t(66),r=t(23),d=t(16),j=t(0),o=function(){var e=Object(s.useState)(Object(r.c)((function(e){return e.products.products}))),c=Object(i.a)(e,2),t=c[0],a=c[1],l=Object(s.useState)(1),o=Object(i.a)(l,2),b=o[0],h=o[1],O=Object(n.a)(Object(r.c)((function(e){return e.products.products}))),x=function(e){if(e){var c=O.sort((function(e,c){return.5-Math.random()}));c=c.slice(0,9),a(c),h(e)}};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12",children:Object(j.jsxs)("div",{className:"vendor_order_boxed pt-4",children:[Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("h4",{children:"All Products"}),Object(j.jsx)(d.b,{to:"/vendor/add-products","data-toggle":"tab",className:"theme-btn-one bg-black btn_sm add_prod_button",children:"Add Product"})]}),Object(j.jsx)("div",{className:"table-responsive",children:Object(j.jsxs)("table",{className:"table pending_table",children:[Object(j.jsx)("thead",{className:"thead-light",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Image"}),Object(j.jsx)("th",{scope:"col",children:"Product Name"}),Object(j.jsx)("th",{scope:"col",children:"Category"}),Object(j.jsx)("th",{scope:"col",children:"Price"}),Object(j.jsx)("th",{scope:"col",children:"Stock"}),Object(j.jsx)("th",{scope:"col",children:"Sales"}),Object(j.jsx)("th",{scope:"col",children:"Edit/Delete"})]})}),Object(j.jsx)("tbody",{children:t.slice(0,5).map((function(e,c){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)(d.b,{to:"/product-details-one/".concat(e.id),children:Object(j.jsx)("img",{width:"70px",src:e.img,alt:"img"})})}),Object(j.jsx)("td",{children:Object(j.jsx)(d.b,{to:"/product-details-one/".concat(e.id),children:e.title})}),Object(j.jsx)("td",{children:e.category}),Object(j.jsxs)("td",{children:["$",e.price]}),Object(j.jsx)("td",{children:2*parseInt(e.price)}),Object(j.jsx)("td",{children:3*parseInt(e.price)}),Object(j.jsxs)("td",{children:[Object(j.jsx)(d.b,{to:"/vendor/add-products",children:Object(j.jsx)("i",{className:"fa fa-edit"})})," ",Object(j.jsx)("button",{style:{background:"Transparent"},children:Object(j.jsx)("i",{className:"fa fa-trash"})})]})]},c)}))})]})}),Object(j.jsx)("div",{className:"col-lg-12",children:Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:"page-item",onClick:function(e){x(b>1?b-1:0)},children:Object(j.jsx)("a",{className:"page-link",href:"#!","aria-label":"Previous",children:Object(j.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(j.jsx)("li",{className:"page-item "+(1===b?"active":null),onClick:function(e){x(1)},children:Object(j.jsx)("a",{className:"page-link",href:"#!",children:"1"})}),Object(j.jsx)("li",{className:"page-item "+(2===b?"active":null),onClick:function(e){x(2)},children:Object(j.jsx)("a",{className:"page-link",href:"#!",children:"2"})}),Object(j.jsx)("li",{className:"page-item "+(3===b?"active":null),onClick:function(e){x(3)},children:Object(j.jsx)("a",{className:"page-link",href:"#!",children:"3"})}),Object(j.jsx)("li",{className:"page-item",onClick:function(e){x(b<3?b+1:0)},children:Object(j.jsx)("a",{className:"page-link",href:"#!","aria-label":"Next",children:Object(j.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})]})})})})},b=t(63),h=t(65);c.default=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(a.a,{}),Object(j.jsx)(b.a,{title:"Vendor"}),Object(j.jsx)(l.a,{children:Object(j.jsx)(o,{})}),Object(j.jsx)(h.a,{})]})}},63:function(e,c,t){"use strict";t(1);var s=t(16),a=t(0);c.a=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{id:"common_banner_one",children:Object(a.jsx)("div",{className:"container ",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-lg-12",children:Object(a.jsxs)("div",{className:"common_banner_text",children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"slash",children:"/"}),Object(a.jsx)("li",{className:"active",children:e.title})]})]})})})})})})}}}]);
//# sourceMappingURL=43.fcaca672.chunk.js.map