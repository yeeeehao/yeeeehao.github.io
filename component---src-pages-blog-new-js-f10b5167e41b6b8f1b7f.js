"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[687],{7254:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),r=n(1883),l=n(682),o=n(4051),c=n(7833),s=n(1945);function u(){const e=a.useRef({}),[t,n]=a.useState([]),[u,p]=a.useState([]),[i,f]=a.useState(!0);a.useState((()=>{}),[]);return a.createElement(l.Z,null,a.createElement("h1",null,"New Blog"),a.createElement(r.Link,{to:"/blog"},"Blog Home"),a.createElement(o.Z,null,a.createElement(c.Z,{ref:e},a.createElement(c.Z.Group,{controlId:"topic"},a.createElement(c.Z.Label,null,"Topic"),a.createElement(c.Z.Control,{type:"text",placeholder:"Enter topic"})),a.createElement(c.Z.Group,{controlId:"content"},a.createElement(c.Z.Label,null,"Content"),a.createElement(c.Z.Control,{as:"textarea",rows:3})),a.createElement(c.Z.Group,{controlId:"author"},a.createElement(c.Z.Label,null,"Author"),a.createElement(c.Z.Control,{type:"text",placeholder:"Enter author"})),a.createElement(s.Z,{variant:"dark",onClick:t=>{t.preventDefault();const n={topic:e.current.topic.value,content:e.current.content.value,author:e.current.author.value};console.log(n),fetch("https://sample-blog-express-78qzajv5h-mchayapol.vercel.app/api/blogs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((e=>e.json())).then((e=>{console.log("Created",e),alert("Created")}))}},"Save"))))}},682:function(e,t,n){var a=n(4184),r=n.n(a),l=n(7294),o=n(6792),c=n(5893);const s=l.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:a,...l},s)=>{const u=(0,o.vE)(e,"container"),p="string"==typeof t?`-${t}`:"-fluid";return(0,c.jsx)(n,{ref:s,...l,className:r()(a,t?`${u}${p}`:u)})}));s.displayName="Container",s.defaultProps={fluid:!1},t.Z=s},4051:function(e,t,n){var a=n(4184),r=n.n(a),l=n(7294),o=n(6792),c=n(5893);const s=l.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},l)=>{const s=(0,o.vE)(e,"row"),u=(0,o.pi)(),p=(0,o.zG)(),i=`${s}-cols`,f=[];return u.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const r=e!==p?`-${e}`:"";null!=n&&f.push(`${i}${r}-${n}`)})),(0,c.jsx)(n,{ref:l,...a,className:r()(t,s,...f)})}));s.displayName="Row",t.Z=s}}]);
//# sourceMappingURL=component---src-pages-blog-new-js-f10b5167e41b6b8f1b7f.js.map