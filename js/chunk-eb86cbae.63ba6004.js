(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb86cbae"],{"29ee":function(t,e,a){t.exports=a.p+"img/blue-bg.dd21c568.png"},"345b":function(t,e,a){t.exports=a.p+"img/car-t-cell.15fb19eb.png"},3530:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"admin"}},[a("div",{staticClass:"inner-wrapper"},[t._m(0),a("div",{staticClass:"selection-container"},t._l(t.areas,function(e,s){return a("AdminSelection",{key:s,attrs:{area:e,therapy:t.therapy}})}),1),a("button",{staticClass:"btn-start",attrs:{disabled:0===t.state.myeloma.length&&0===t.state.lymphoma.length},on:{click:t.startApp}},[t._v("\n      Start\n      "),a("span",{staticClass:"icon-triangle"})])]),a("Logo"),a("ProjectCode"),a("FooterDisclaimer"),a("LandingBg"),a("div",{directives:[{name:"longpress",rawName:"v-longpress",value:function(){return t.toggleModal("confirm")},expression:"() => toggleModal('confirm')"}],staticClass:"quit-hotspot"}),a("Modal",{directives:[{name:"show",rawName:"v-show",value:t.state.modalIsOpen&&"confirm"===t.state.showModal,expression:"state.modalIsOpen && state.showModal === 'confirm'"}],attrs:{name:"confirm"},on:{"toggle-modal":t.toggleModal}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"admin-header"},[a("h1",[t._v("\n        Administrator\n        "),a("span",{staticClass:"thin-text"},[t._v("Settings")])])])}],r=a("41cb"),n=a("4e57"),c=a("c0d6"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"selection-box"},[a("h3",{staticClass:"area-title"},[t._v(t._s(t.area.title))]),a("div",{staticClass:"selections-container"},t._l(t.area.therapies,function(e,s){return a("div",{key:s,staticClass:"selection-item"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.state[t.area.id],expression:"state[area.id]"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"check-"+e},domProps:{value:e,checked:Array.isArray(t.state[t.area.id])?t._i(t.state[t.area.id],e)>-1:t.state[t.area.id]},on:{change:function(a){var s=t.state[t.area.id],i=a.target,r=!!i.checked;if(Array.isArray(s)){var n=e,c=t._i(s,n);i.checked?c<0&&t.$set(t.state,t.area.id,s.concat([n])):c>-1&&t.$set(t.state,t.area.id,s.slice(0,c).concat(s.slice(c+1)))}else t.$set(t.state,t.area.id,r)}}}),a("label",{attrs:{for:"check-"+e},domProps:{innerHTML:t._s(t.therapy[e].checkboxLabel)}})])}),0)])},l=[],d={name:"AdminSelection",props:["area","therapy"],data:function(){return{state:c["a"].state}},methods:{}},u=d,m=(a("abde"),a("2877")),h=Object(m["a"])(u,o,l,!1,null,"35960b9b",null),p=h.exports,f=a("2241"),g=a("c3c1"),v=a("5936"),b=a("09a5"),_=a("714b"),y=a("e3e1"),C={name:"Admin",components:{AdminSelection:p,LandingBg:v["a"],ProjectCode:g["a"],Logo:f["a"],LongpressDirective:b["a"],Modal:_["a"],FooterDisclaimer:y["a"]},data:function(){return{router:r["a"],therapy:n.therapy,areas:n.areas,state:c["a"].state}},watch:{},methods:{startApp:function(){this.$router.push("/home")},toggleModal:function(t){this.state.modalIsOpen=!this.state.modalIsOpen,this.state.showModal=t||""}}},w=C,x=(a("9171"),Object(m["a"])(w,s,i,!1,null,"441452c1",null));e["default"]=x.exports},"58b0":function(t,e,a){},5936:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-image"},[s("img",{staticClass:"circles-right circle-spin",attrs:{src:a("7a25"),alt:""}}),s("div",{staticClass:"circle-mask"}),s("img",{staticClass:"circles circle-spin",attrs:{src:a("7a25"),alt:""}}),s("img",{staticClass:"blue-part",attrs:{src:a("29ee"),alt:""}}),s("img",{staticClass:"white-part",attrs:{src:a("a50e"),alt:""}}),s("img",{staticClass:"cart-cell sassy-cart-t-top top",attrs:{src:a("345b"),alt:""}}),s("img",{staticClass:"cart-cell sassy-cart-t-left left",attrs:{src:a("345b"),alt:""}}),s("img",{staticClass:"cart-cell sassy-cart-t-right right",attrs:{src:a("345b"),alt:""}})])}],r={name:"LandingBg"},n=r,c=(a("d96a"),a("2877")),o=Object(c["a"])(n,s,i,!1,null,"d7092720",null);e["a"]=o.exports},"7a25":function(t,e,a){t.exports=a.p+"img/circles.9ea52cf7.svg"},9171:function(t,e,a){"use strict";var s=a("c2b1"),i=a.n(s);i.a},"98a0":function(t,e,a){"use strict";var s=a("58b0"),i=a.n(s);i.a},a50e:function(t,e,a){t.exports=a.p+"img/home-white-bg.378d2583.png"},abde:function(t,e,a){"use strict";var s=a("efc5"),i=a.n(s);i.a},c2b1:function(t,e,a){},c355:function(t,e,a){},d96a:function(t,e,a){"use strict";var s=a("c355"),i=a.n(s);i.a},e3e1:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"disclaimer"},[a("h4",[t._v("The safety and efficacy of the agents and/or uses under investigation have not been established. There is no guarantee that the"),a("br"),t._v("agents will receive health authority approval or become commercially available in any country for the uses being investigated.")])])}],r=(a("98a0"),a("2877")),n={},c=Object(r["a"])(n,s,i,!1,null,"2f9494c3",null);e["a"]=c.exports},efc5:function(t,e,a){}}]);
//# sourceMappingURL=chunk-eb86cbae.63ba6004.js.map