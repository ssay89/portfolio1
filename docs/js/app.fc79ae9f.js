(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);p&&p(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/portfolio1/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"13c7":function(e,t,a){},2886:function(e,t,a){},"2eb7":function(e,t,a){"use strict";var s=a("13c7"),i=a.n(s);i.a},"32a8":function(e,t,a){"use strict";var s=a("2886"),i=a.n(s);i.a},"34d0":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"app-phone"},[a("div",{staticClass:"phone-header"},[a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",alt:"logo"}}),2===e.step||3===e.step?a("a",{staticClass:"cancel-cta",on:{click:e.goToHome}},[e._v("Cancel")]):e._e(),2===e.step?a("a",{staticClass:"next-cta",on:{click:function(t){e.step++}}},[e._v("Next")]):e._e(),3===e.step?a("a",{staticClass:"next-cta",on:{click:e.sharePost}},[e._v("Share")]):e._e()]),a("phone-body",{attrs:{step:e.step,posts:e.posts,filters:e.filters,image:e.image,selectedFilter:e.selectedFilter},model:{value:e.caption,callback:function(t){e.caption=t},expression:"caption"}}),a("div",{staticClass:"phone-footer"},[a("div",{staticClass:"home-cta",on:{click:e.goToHome}},[a("i",{staticClass:"fas fa-home"})]),a("div",{staticClass:"upload-cta"},[a("input",{staticClass:"inputfile",attrs:{type:"file",name:"file",id:"file",disabled:1!==e.step},on:{change:e.uploadImage}}),e._m(0)])])],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"file"}},[a("i",{staticClass:"fas fa-plus-square fa-lg"})])}],r=(a("4de4"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"phone-body"},[1===e.step?a("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll.y",modifiers:{y:!0}}],staticClass:"feed"},e._l(e.posts,(function(e,t){return a("vuegram-post",{key:t,attrs:{post:e}})})),1):e._e(),2===e.step?a("div",[a("div",{staticClass:"selected-image",class:e.selectedFilter,style:{backgroundImage:"url("+e.image+")"}}),a("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll.x",modifiers:{x:!0}}],staticClass:"filter-container"},e._l(e.filters,(function(t,s){return a("filter-type",{key:s,attrs:{filter:t,image:e.image}})})),1)]):e._e(),3===e.step?a("div",[a("div",{staticClass:"selected-image",class:e.selectedFilter,style:{backgroundImage:"url("+e.image+")"}}),a("div",{staticClass:"caption-container"},[a("textarea",{staticClass:"caption-input",attrs:{placeholder:"White a caption....",type:"text"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])]):e._e()])}),o=[],l=(a("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vuegram-post"},[a("div",{staticClass:"header level"},[a("div",{staticClass:"level-left"},[a("figure",{staticClass:"image is-32x32"},[a("img",{attrs:{src:e.post.userImage}})]),a("span",{staticClass:"username"},[e._v(e._s(e.post.username))])])]),a("div",{staticClass:"image-container",class:e.post.filter,style:{backgroundImage:"url("+e.post.postImage+")"},on:{dblclick:e.like}}),a("div",{staticClass:"content"},[a("div",{staticClass:"heart"},[a("i",{staticClass:"far fa-heart fa-lg",class:{fas:this.post.hasBeenLiked},on:{click:e.like}})]),a("p",{staticClass:"likes"},[e._v(e._s(e.post.likes))]),a("p",{staticClass:"caption"},[a("span",[e._v(e._s(e.post.username))]),e._v(" "+e._s(e.post.caption)+" ")])])])}),c=[],p={name:"VuegramPost",props:{post:Object},methods:{like:function(){this.post.hasBeenLiked?this.post.likes--:this.post.likes++,this.post.hasBeenLiked=!this.post.hasBeenLiked}}},u=p,m=(a("a2a1"),a("2877")),d=Object(m["a"])(u,l,c,!1,null,null,null),f=d.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filter-type"},[a("p",[e._v(e._s(e.filter.name))]),a("div",{staticClass:"img",class:e.filter.name,style:{backgroundImage:"url("+e.image+")"},on:{click:e.selectFilter}})])},h=[],v=(a("b0c0"),new s["a"]),b=v,_={name:"filterType",props:{filter:Object,image:String},methods:{selectFilter:function(){b.$emit("filter-selected",{filter:this.filter.name})}}},y=_,k=(a("bf76"),Object(m["a"])(y,g,h,!1,null,null,null)),C=k.exports,j={name:"PhoneBody",props:{step:Number,posts:Array,selectedFilter:String,image:String,filters:Array,value:String},components:{"vuegram-post":f,"filter-type":C}},w=j,x=(a("2eb7"),Object(m["a"])(w,r,o,!1,null,null,null)),O=x.exports,I=[{username:"BlueSky",userImage:"https://pm1.narvii.com/6666/442c867dba99fb6c3bc1f9217487f04d63ddb329_128.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",likes:36,hasBeenLiked:!1,caption:"Pulvinar neque laoreet suspendisse interdum.",filter:"perpetua"},{username:"Lovely",userImage:"https://c-sf.smule.com/rs-s78/arr/19/b7/b1803a56-404d-4ea7-9100-b9edabacd866.jpg",postImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Oia%2C_Santorini_HDR_sunset.jpg/1024px-Oia%2C_Santorini_HDR_sunset.jpg",likes:20,hasBeenLiked:!1,caption:"Ornare aenean euismod elementum nisi.",filter:"clarendon"},{username:"Jennie",userImage:"https://c-sf.smule.com/rs-s79/arr/b1/12/810db16f-1f83-459f-93f6-0a820eb59dbb.jpg",postImage:"https://media.timeout.com/images/105395976/630/472/image.jpg",likes:49,hasBeenLiked:!1,caption:"Contrary to popular belief, Lorem Ipsum is not simply random text.",filter:"lofi"}],S=[{name:"normal"},{name:"clarendon"},{name:"gingham"},{name:"moon"},{name:"lark"},{name:"reyea"},{name:"juno"},{name:"slumber"},{name:"aden"},{name:"oeroetua"},{name:"mayfair"},{name:"rise"},{name:"hudson"},{name:"valencia"},{name:"xpro2"},{name:"willow"},{name:"lofi"},{name:"inkwell"},{name:"nashville"}],P={name:"App",data:function(){return{step:1,posts:I,filters:S,image:"",selectedFilter:"",caption:""}},created:function(){var e=this;b.$on("filter-selected",(function(t){e.selectedFilter=t.filter}))},methods:{goToHome:function(){this.image="",this.selectedFilter="",this.caption="",this.step=1},sharePost:function(){var e={username:"Blossom",userImage:"https://i.pinimg.com/474x/bc/e4/dd/bce4ddc99f5dd9d0ee6b2530dca5b276.jpg",postImage:this.image,likes:0,caption:this.caption,filter:this.selectedFilter};this.posts.unshift(e),this.goToHome()},uploadImage:function(e){var t=this,a=e.target.files;if(a.length){var s=new FileReader;s.readAsDataURL(a[0]),s.onload=function(e){t.image=e.target.result,t.step=2},document.querySelector("#file").value=""}}},components:{"phone-body":O}},F=P,B=(a("32a8"),Object(m["a"])(F,i,n,!1,null,null,null)),L=B.exports,$=a("5b6c"),T=a.n($);s["a"].use(T.a),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(L)}}).$mount("#app")},5923:function(e,t,a){},a2a1:function(e,t,a){"use strict";var s=a("5923"),i=a.n(s);i.a},bf76:function(e,t,a){"use strict";var s=a("34d0"),i=a.n(s);i.a}});
//# sourceMappingURL=app.fc79ae9f.js.map