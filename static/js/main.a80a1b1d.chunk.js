(this.webpackJsonpywitter=this.webpackJsonpywitter||[]).push([[0],{69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),s=c(46),i=c.n(s),r=c(11),o=c(28),l=c(16),j=c(0),u=c.n(j),d=c(1),b=c(47),O=c(51),h=c(48),f=c(52);b.a({apiKey:"AIzaSyDjsY4CxSNlT7by_bS-fF4862Ehbq5fqBo",authDomain:"yweeter-ae7ef.firebaseapp.com",projectId:"yweeter-ae7ef",storageBucket:"yweeter-ae7ef.appspot.com",messagingSenderId:"89780038175",appId:"1:89780038175:web:5eb38006978b5b050d832a"});var m=O,p=h,x=f,g=c(14),v=c(31),y=c(5),w=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(n.useState)(!1),b=Object(r.a)(j,2),O=b[0],h=b[1],f=Object(n.useState)(""),p=Object(r.a)(f,2),x=p[0],w=p[1],N=function(e){var t=e.target,c=t.name,n=t.value;"email"===c&&a(n),"password"===c&&l(n)},k=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!O){e.next=6;break}return e.next=4,m.createUserWithEmailAndPassword(m.getAuth(),c,o).catch((function(e){w(e.message)})).then((function(e){m.updateProfile(m.getAuth().currentUser,{displayName:c.split("@")[0]})}));case 4:e.next=8;break;case 6:return e.next=8,m.signInWithEmailAndPassword(m.getAuth(),c,o).catch((function(e){w(e.message)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(c=t.target.name)?n=new m.GoogleAuthProvider:"github"===c&&(n=new m.GithubAuthProvider),e.next=4,m.signInWithPopup(m.getAuth(),n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"auth-wrapper",children:[Object(y.jsx)("div",{className:"auth-container-left",children:Object(y.jsx)(g.a,{icon:v.c,className:"twitter-icon"})}),Object(y.jsx)("div",{className:"auth-container-right",children:Object(y.jsxs)("div",{className:"auth-container-right-element",children:[Object(y.jsxs)("div",{className:"auth-title",children:["Let's get in Ywitter"," ",Object(y.jsx)(g.a,{icon:v.c,className:"title-twitter-icon",style:{color:"RGB(45, 155, 240)"}})]}),Object(y.jsx)("div",{className:"auth-login-form",children:Object(y.jsxs)("form",{onSubmit:k,children:[Object(y.jsx)("input",{className:"auth-email-input",name:"email",type:"email",placeholder:"email",required:!0,value:c,onChange:N}),Object(y.jsx)("input",{className:"auth-password-input submit",name:"password",type:"password",placeholder:"password",required:!0,value:o,onChange:N}),Object(y.jsx)("br",{}),Object(y.jsx)("input",{className:"auth-submit",type:"submit",value:O?"Create Account":"Sign in",required:!0}),Object(y.jsx)("br",{}),x,Object(y.jsx)("div",{className:"auth-toggle",onClick:function(){h((function(e){return!e})),w(""),a(""),l("")},children:O?"Sign in":"Create Account"}),Object(y.jsx)("br",{})]})}),Object(y.jsxs)("div",{className:"auth-login-social",children:[Object(y.jsxs)("button",{className:"social-login-google",onClick:S,name:"google",children:[Object(y.jsx)(g.a,{icon:v.b})," continue with Google"]}),Object(y.jsxs)("button",{className:"social-login-google",onClick:S,name:"github",children:[Object(y.jsx)(g.a,{icon:v.a})," continue with Github"]})]})]})}),Object(y.jsxs)("div",{className:"auth-footer",children:["Nomad's course (Twitter clone coding) || Lyekwang \xa9"," ",(new Date).getFullYear()]})]})})},N=c(30),k=c(25),S=c(79),D=function(e){var t=e.userObj,c=Object(n.useState)(""),a=Object(r.a)(c,2),s=a[0],i=a[1],o=Object(n.useState)(null),l=Object(r.a)(o,2),j=l[0],b=l[1],O=Object(n.useRef)(null),h=function(){var e=Object(d.a)(u.a.mark((function e(c){var n,a,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n="",null===j){e.next=10;break}return a=x.ref(x.getStorage(),"".concat(t.uid,"/").concat(Object(S.a)())),e.next=6,x.uploadString(a,j,"data_url");case 6:return r=e.sent,e.next=9,x.getDownloadURL(r.ref);case 9:n=e.sent;case 10:o={text:s,createdAt:Date.now(),creator:{uid:t.uid,displayName:t.displayName,photoURL:t.photoURL||"",parent:""},like:0,attachmentUrl:n},p.addDoc(p.collection(p.getFirestore(),"yweet"),o),i(""),m();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){if(e){var t=e.target.files[0],c=new FileReader;c.onloadend=function(e){var t=e.target.result;b(t)},c.readAsDataURL(t)}else console.log(O.current.value="")},m=function(){b(null),f(null)};return Object(y.jsxs)("div",{className:"factory-wrapper",children:[Object(y.jsx)("div",{className:"factory-title",children:"Home"}),Object(y.jsxs)("form",{className:"factory-form",onSubmit:h,children:[Object(y.jsxs)("div",{className:"factory-form-top",children:[Object(y.jsx)("img",{className:"user-img",src:t.photoURL?t.photoURL:"http://placehold.it/50x50"}),Object(y.jsx)("textarea",{placeholder:"what's happening?",className:"factory-input-text",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",maxLength:500})]}),Object(y.jsxs)("div",{className:"factory-form-bottom",children:[Object(y.jsx)("input",{className:"factory-input-file",ref:O,type:"file",accept:"image/*",onChange:f,display:"none"}),j&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("img",{className:"attachment-img",src:j,alt:""}),Object(y.jsx)("button",{className:"factory-input-button",onClick:m,children:Object(y.jsx)(g.a,{icon:k.d})})]}),Object(y.jsx)("input",{className:"factory-input-submit",type:"submit",value:"Yweet"}),Object(y.jsx)("button",{type:"button",className:"factory-button-image",onClick:function(e){O.current.click()},children:Object(y.jsx)(g.a,{style:{color:"rgb(45, 155, 240)"},icon:k.b})})]})]})]})},C=c(36),F=function(e){var t=e.yweetObj,c=e.isOwner,a=e.userObj,s=Object(n.useState)(!1),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(n.useState)(t.text),b=Object(r.a)(j,2),O=b[0],h=b[1],f=Object(n.useState)(!1),m=Object(r.a)(f,2),v=m[0],w=m[1],S=Object(n.useState)(!1),D=Object(r.a)(S,2),F=D[0],U=D[1],A=Object(n.useState)(),L=Object(r.a)(A,2),I=L[0],R=L[1],q=Object(n.useState)(),E=Object(r.a)(q,2),P=E[0],z=E[1],B=function(){var e=Object(d.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("are you sure?")){e.next=7;break}return p.deleteDoc(p.doc(p.getFirestore(),"yweet",t.id)),c=x.ref(x.getStorage(),t.attachmentUrl),e.next=6,x.deleteObject(c);case 6:e.sent;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){return l((function(e){return!e}))},G=function(){var e=p.doc(p.getFirestore(),"yweet",t.id);if(v){var c=p.doc(p.getFirestore(),"like",I.id);w(!1),p.deleteDoc(c),p.updateDoc(e,{like:t.like-1})}else w(!0),p.addDoc(p.collection(p.getFirestore(),"like"),{uid:a.uid,yweetId:t.id,regDate:Date.now()}).then((function(c){R({id:c.id,uid:a.uid,yweetId:t.id}),p.updateDoc(e,{like:t.like+1})}))},W=function(){if(F){var e=p.doc(p.getFirestore(),"reyweet",P.id);p.deleteDoc(e),U(!1)}else p.addDoc(p.collection(p.getFirestore(),"reyweet"),{uid:a.uid,yweetId:t.id,regDate:Date.now()}).then((function(e){z({id:e.id,yweetId:t.id,uid:a.uid})})),U(!0)};return Object(n.useEffect)((function(){!function(){var e=p.collection(p.getFirestore(),"like"),c=p.query(e,p.where("uid","==",a.uid),p.where("yweetId","==",t.id));p.getDocs(c).then((function(e){e.docs.length>0&&(w(!0),R(Object(N.a)({id:e.docs[0].id},e.docs[0])))}))}(),function(){var e=p.collection(p.getFirestore(),"reyweet"),c=p.query(e,p.where("uid","==",a.uid),p.where("yweetId","==",t.id));p.getDocs(c).then((function(e){e.docs.length>0&&(U(!0),z(Object(N.a)({id:e.docs[0].id},e.docs[0])))}))}()}),[]),Object(y.jsx)("div",{children:o?c&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p.updateDoc(p.doc(p.getFirestore(),"yweet",t.id),{text:O}),p.toggleEdit()},children:[Object(y.jsx)("input",{onChange:function(e){var t=e.target.value;h(t)},type:"text",value:O,required:!0}),Object(y.jsx)("input",{type:"submit",value:"edit",onClick:function(){}})]}),Object(y.jsx)("button",{onClick:Y,children:"Cancel"})]}):Object(y.jsxs)("div",{className:"yweet-wrapper",children:[Object(y.jsx)("img",{src:t.creator.photoURL?t.creator.photoURL:"http://placehold.it/50x50",className:"yweet-profile-img"}),Object(y.jsxs)("div",{className:"yweet-title",children:[t.creator.displayName," ",Object(y.jsx)("span",{style:{color:"gray",fontWeight:"400",fontSize:"12px"},children:new Date(t.createdAt).toLocaleTimeString()})]}),c&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("button",{className:"yweet-button-delete",onClick:B,children:Object(y.jsx)(g.a,{style:{fontSize:"14px"},icon:C.d})}),Object(y.jsx)("button",{className:"yweet-button-edit",onClick:Y,children:Object(y.jsx)(g.a,{icon:C.a,style:{fontSize:"14px"}})})]}),Object(y.jsx)("div",{className:"yweet-text",children:t.text}),t.attachmentUrl&&Object(y.jsx)("img",{className:"yweet-attachment",src:t.attachmentUrl,alt:""}),Object(y.jsxs)("div",{className:"yweet-bottom-bar",children:[Object(y.jsx)("div",{className:"yweet-bottom-element",children:v?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(g.a,{onClick:G,className:"yweet-like-button-filled",icon:k.g}),Object(y.jsxs)("span",{style:{fontSize:"9px"},children:[" ",t.like]})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(g.a,{onClick:G,className:"yweet-like-button",icon:C.c}),Object(y.jsxs)("span",{style:{fontSize:"9px"},children:[" ",t.like]})]})}),Object(y.jsx)("div",{className:"yweet-bottom-element",children:F?Object(y.jsx)(g.a,{onClick:W,className:"yweet-reyweet-button reyweeted",icon:k.e}):Object(y.jsx)(g.a,{onClick:W,className:"yweet-reyweet-button",icon:k.e})})]})]})})},U=function(e){var t=e.yweets,c=e.userObj;return Object(y.jsx)("div",{className:"yweet-list",children:t.map((function(e){return Object(y.jsx)(F,{yweetObj:e,isOwner:e.creator.uid===c.uid,userObj:c},e.id)}))})},A=function(e){var t=e.userObj,c=Object(n.useState)([]),a=Object(r.a)(c,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){var e=p.collection(p.getFirestore(),"yweet"),t=p.query(e,p.orderBy("createdAt","desc"));p.onSnapshot(t,(function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"align-center",children:[Object(y.jsx)(D,{userObj:t}),Object(y.jsx)(U,{yweets:s,userObj:t})]})})},L=function(){return Object(y.jsxs)("div",{className:"profile-navigation-wrapper",children:[Object(y.jsx)(o.b,{to:"/profile",children:Object(y.jsx)("div",{className:"profile-nav-element",children:"My Yweets"})}),Object(y.jsx)(o.b,{to:"/profile/reyweets",children:Object(y.jsx)("div",{className:"profile-nav-element",children:"Reyweets"})}),Object(y.jsx)(o.b,{to:"/profile/likes",children:Object(y.jsx)("div",{className:"profile-nav-element",children:"Likes"})})]})},I=function(e){var t=e.userObj,c=e.refreshUser,a=Object(l.f)(),s=Object(n.useState)([]),i=Object(r.a)(s,2),j=i[0],b=i[1],O=Object(n.useState)(t.displayName),h=Object(r.a)(O,2),f=h[0],x=h[1],v=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getAuth().signOut();case 2:a.push("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){!function(){var e=p.collection(p.getFirestore(),"yweet"),c=p.query(e,p.where("creator.uid","==",t.uid),p.orderBy("createdAt","desc"));p.onSnapshot(c,(function(e){var t=e.docs.map((function(e){return Object(N.a)({id:e.id},e.data())}));b(t)}))}()}),[]);return Object(y.jsxs)("div",{className:"profile-wrapper align-center",children:[Object(y.jsxs)("div",{className:"profile-header",children:[Object(y.jsx)("button",{className:"backward-button",children:Object(y.jsx)(g.a,{icon:k.a})}),Object(y.jsxs)("div",{className:"profile-header-title",children:[Object(y.jsx)("div",{className:"profile-header-username",children:t.displayName}),Object(y.jsxs)("div",{className:"profile-header-yweet",children:[j.length," yweet"]})]})]}),Object(y.jsx)("div",{className:"profile-background"}),Object(y.jsxs)("div",{className:"profile-userInfo",children:[Object(y.jsx)("img",{className:"profile-user-img",src:t.photoURL?t.photoURL:"http://placehold.it/150x150"}),Object(y.jsxs)("form",{className:"profile-edit-form",onSubmit:function(e){e.preventDefault(),m.updateProfile(t,{displayName:e.target.inputDisplayName.value}).then((function(e){c()}))},children:[Object(y.jsx)("label",{className:"profile-edit-form-label",children:"name"}),Object(y.jsx)("input",{className:"profile-edit-form-text",name:"inputDisplayName",type:"text",onChange:function(e){var t=e.target.value;x(t)},value:f}),Object(y.jsx)("button",{className:"profile-edit-form-submit",type:"submit",children:Object(y.jsx)(g.a,{icon:C.b})}),Object(y.jsx)("button",{className:"profile-edit-form-logout",type:"button",onClick:v,children:Object(y.jsx)(g.a,{icon:k.f})})]})]}),Object(y.jsx)(L,{}),Object(y.jsx)(o.a,{children:Object(y.jsxs)(l.c,{children:[Object(y.jsx)(l.a,{exact:!0,path:"/profile",children:Object(y.jsx)(U,{yweets:j,userObj:t})}),Object(y.jsx)(l.a,{exact:!0,path:"/profile/reYeets"})]})})]})},R=function(e){e.userObj;return Object(y.jsx)("nav",{className:"nav align-left",children:Object(y.jsxs)("ul",{className:"nav-list",children:[Object(y.jsx)("li",{className:"nav-top",children:Object(y.jsx)(g.a,{icon:v.c})}),Object(y.jsx)(o.b,{to:"/",children:Object(y.jsx)("li",{className:"nav-list-element",children:Object(y.jsxs)("div",{className:"nav-element-title nav-link",children:[Object(y.jsx)(g.a,{icon:k.c})," Home"]})})}),Object(y.jsx)(o.b,{to:"/profile",children:Object(y.jsx)("li",{className:"nav-list-element",children:Object(y.jsxs)("div",{className:"nav-element-title nav-link",children:[Object(y.jsx)(g.a,{icon:k.h})," My Profile"]})})})]})})},q=function(e){var t=e.isLoggedIn,c=e.userObj,a=e.refreshUser;return Object(y.jsx)(o.a,{children:Object(y.jsx)(l.c,{children:t?Object(y.jsxs)("div",{className:"home-wrapper",children:[Object(y.jsx)(R,{userObj:c}),Object(y.jsxs)(n.Fragment,{children:[Object(y.jsx)(l.a,{exact:!0,path:"/",children:Object(y.jsx)(A,{userObj:c})}),Object(y.jsx)(l.a,{path:"/profile",children:Object(y.jsx)(I,{refreshUser:a,userObj:c})})]}),Object(y.jsx)("div",{className:"align-right",children:"Pull-Right content"})]}):Object(y.jsx)(l.a,{exact:!0,path:"/",children:Object(y.jsx)(w,{})})})})},E=(c(69),c(70),c(71),c(72),c(73),c(74),c(75),c(76),function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),i=Object(r.a)(s,2),o=i[0],l=i[1];Object(n.useEffect)((function(){m.onAuthStateChanged(m.getAuth(),(function(e){l(e||null),a(!0)}))}),[]);return Object(y.jsx)(y.Fragment,{children:c?Object(y.jsx)(q,{refreshUser:function(){var e=m.getAuth().currentUser;l(Object.assign({},e)),l(e)},isLoggedIn:Boolean(o),userObj:o}):"initializing"})});i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(E,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.a80a1b1d.chunk.js.map