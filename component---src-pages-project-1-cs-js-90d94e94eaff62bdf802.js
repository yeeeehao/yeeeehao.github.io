"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[864],{1604:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(5785),o=n(7294),i=JSON.parse('{"x":{"p":[{"groupName":"Language Courses","subjects":[{"code":"BG 1001","name":"English I"},{"code":"BG 1002","name":"English II"},{"code":"BG 2000","name":"English III"},{"code":"BG 2001","name":"English IV"}]},{"groupName":"Humanities Courses","subjects":[{"code":"BG 1400","name":"Business Law I"}]},{"groupName":"Social Science Courses","subjects":[{"code":"GE 2202","name":"Ethics"},{"code":"MGT1101","name":"Introduction to Business"}]},{"groupName":"Science and Mathemetics Courses","subjects":[{"code":"ACT 1601","name":"Fundamentals of Financial Accounting"},{"code":"CSX 1001","name":"Basic Mathematics and Statistics"}]},{"groupName":"General Education Courses","subjects":[{"code":"GE 1101","name":"Thai Civilization"},{"code":"GE 1102","name":"Introduction to Philosophy"},{"code":"GE 2101","name":"World Civilization"},{"code":"GE 2103","name":"Art of Reasoning"},{"code":"GE 2104","name":"Thai Buddhism"},{"code":"GE 2105","name":"Introduction to World Religion"},{"code":"GE 2106","name":"Logical Thinking and Application"},{"code":"GE 2107","name":"Applied Philosophy in Social Sciences and Humanities"},{"code":"MGT 2404","name":"Managerial Psychology"},{"code":"GE 1207","name":"Fundamental Psychology"},{"code":"GE 1203","name":"Society, Politics and Economics"},{"code":"GE 1205","name":"ASEAN Ways"},{"code":"GE 1206","name":"Philosophy of Sufficiency Economy"},{"code":"GE 2203","name":"Art of Living"},{"code":"GE 2205","name":"Communication and Multicultural society"},{"code":"GE 2206","name":"Personality Development"},{"code":"GE 2207","name":"Sport, Health and Wellness Development"},{"code":"GE 2208","name":"Thai Politics and Government"},{"code":"ECO 2200","name":"Introduction to Economics"},{"code":"GE 1301","name":"Environmental Science"},{"code":"GE 2301","name":"Lifestyles in Dynamic World"},{"code":"GE 2302","name":"Climate Change and Human Life"},{"code":"GE 2303","name":"Building Brilliant Brain"},{"code":"MA 1200","name":"Mathematics for Business"},{"code":"GE 1403","name":"Communication in Thai"},{"code":"GE 1405","name":"Thai Language and Culture"},{"code":"GE 1406","name":"Burmese Language"},{"code":"GE 1407","name":"Russian Language"},{"code":"GE 3401","name":"Public Speaking in Thai"}]},{"groupName":"Core Courses","subjects":[{"code":"CSX 2002","name":"Calculus"},{"code":"CSX 2003","name":"Principles of Statistics"},{"code":"CSX 2004","name":"UI/UX Design and Prototyping"},{"code":"CSX 2005","name":"Design Thinking"},{"code":"CSX 2006","name":"Mathematics and Statistics for Data Science"},{"code":"CSX 2007","name":"Data Science"},{"code":"CSX 2008","name":"Mathematics Foundation for Computer Science"},{"code":"CSX 2009","name":"Cloud Computing"}]},{"groupName":"Major Courses","subjects":[{"code":"CSX 2001","name":"Introduction to Information Technology"},{"code":"CSX 3001","name":"Fundamentals of Computer Programming"},{"code":"CSX 3002","name":"Object-Oriented Concepts and Programming"},{"code":"CSX 3003","name":"Data Structure and Algorithms"},{"code":"CSX 3004","name":"Programming Languages"},{"code":"CSX 3005","name":"Computer Networks"},{"code":"CSX 3006","name":"Database Systems"},{"code":"CSX 3007","name":"Computer Architecture"},{"code":"CSX 3008","name":"Operating Systems"},{"code":"CSX 3009","name":"Algorithm Design"},{"code":"CSX 3010","name":"Senior Project I"},{"code":"CSX 3011","name":"Senior Project II"}]},{"groupName":"Major Elective Courses Group 1","subjects":[{"code":"CSX 4101","name":"Information System Analysis and Design"},{"code":"CSX 4102","name":"Software Engineering"},{"code":"CSX 4103","name":"Requirement Engineering"},{"code":"CSX 4104","name":"Software Testing"},{"code":"CSX 4105","name":"IT Project Management"},{"code":"CSX 4106","name":"Enterprise Architecture"},{"code":"CSX 4107","name":"Web Application Development"},{"code":"CSX 4108","name":"iOS Application Development"},{"code":"CSX 4109","name":"Android Application Development"},{"code":"CSX 4201","name":"Artificial Intelligence Concepts"},{"code":"CSX 4202","name":"Data Mining"},{"code":"CSX 4203","name":"Machine Learning"},{"code":"CSX 4204","name":"Biometrics"},{"code":"CSX 4205","name":"Big Data Analytics"},{"code":"CSX 4206","name":"Data Warehousing and Business Intelligence"},{"code":"CSX 4207","name":"Decision Support and Recommender Systems"},{"code":"CSX 4208","name":"Deep Learning"},{"code":"CSX 4209","name":"Intelligent System Development"},{"code":"CSX 4210","name":"Natural Language Processing and Social Interactions"},{"code":"CSX 4301","name":"Network Design"},{"code":"CSX 4302","name":"Cisco Networking Workshop"},{"code":"CSX 4303","name":"Network Security"},{"code":"CSX 4304","name":"Network Management"},{"code":"CSX 4305","name":"Heterogeneous Wireless Networks"},{"code":"CSX 4306","name":"Internet of Things"},{"code":"CSX 4307","name":"Business Continuity Planning and Management"},{"code":"CSX 4401","name":"Business Systems"},{"code":"CSX 4402","name":"Sales and Distribution Management System"},{"code":"CSX 4403","name":"Manufacturing Management System"},{"code":"CSX 4404","name":"Supply Chain Management System"},{"code":"CSX 4405","name":"Finance and Accounting Information System"},{"code":"CSX 4406","name":"Customer Relationship Management System"},{"code":"CSX 4407","name":"Enterprise Application Development"},{"code":"CSX 4408","name":"Enterprise Database System"},{"code":"CSX 4409","name":"Blockchain Technology"}]},{"groupName":"Major Elective Courses Group 2","subjects":[{"code":"CSX 4501","name":"Theory of Computation"},{"code":"CSX 4502","name":"Tech Startup"},{"code":"CSX 4503","name":"Information Systems Security"},{"code":"CSX 4504","name":"Digital Marketing"},{"code":"CSX 4505","name":"Digital Transformation"},{"code":"CSX 4506","name":"Image Processing"},{"code":"CSX 4507","name":"Information Retrieval and Search Engines"},{"code":"CSX 4508","name":"Quantitative Research for Digital Business"}]}]}}'),c=n(1945),r=n(5147),m=n(4337),l=n(7833),s=n(30),d=n(3148),u=n(6495);function g(){let[e,t]=o.useState([]),[n,d]=(0,s.Z)("semester",[]),[g,S]=o.useState(""),[p,C]=o.useState("1"),[E,h]=o.useState("4"),[X,f]=(0,s.Z)("gradeList",[]),[y,b]=(0,s.Z)("gpaList",[]),[G,v]=(0,s.Z)("totalGpa",0),[A,D]=(0,s.Z)("totalCourse",0);const[B,x]=o.useState(!1),I=()=>x(!1),k=e=>{x(!0),S(e.target.value)};const Z={labels:n,datasets:[{label:"GPA",data:y,borderColor:"rgb(255, 193, 7)",backgroundColor:"rgba(255, 193, 7, 0.5)"}]};return o.useEffect((async()=>{let e=[],r=0;for(let t=0;t<i.x.p.length;t++){e.push(o.createElement("h3",{key:i.x.p[t].groupName,style:{marginTop:"2.5rem",fontSize:"larger",fontWeight:"bold"}},i.x.p[t].groupName));for(let n=0;n<i.x.p[t].subjects.length;n++){var m=i.x.p[t].subjects[n].code+" "+i.x.p[t].subjects[n].name;e.push(o.createElement(c.Z,{id:r,variant:"warning",style:{height:"100px",width:"200px",margin:"1rem 1rem 0 0"},value:m,onClick:k},i.x.p[t].subjects[n].code,o.createElement("br",null),i.x.p[t].subjects[n].name)),r++}}t(e);let l=0,s=0;for(let t=1;t<=n.length;t++){let e=0,n=0;X.filter((e=>e.semester==t)).map((t=>{"W"==t.rating||(e+=1*t.grade,l+=1*t.grade,n++,s++)})),e/=n,y[t-1]=e.toFixed(2),b((0,a.Z)(y)),v(l),D(s)}}),[]),o.createElement(o.Fragment,null,o.createElement("div",{style:{float:"left",height:"100%",width:"62%",padding:"0 2rem",left:"0",borderRight:"5px solid black"}},o.createElement("h1",{style:{textAlign:"center",margin:"3rem",fontWeight:"bold"}},"Grade Tracker for CS student"),o.createElement("h2",{style:{fontWeight:"bold"}},"Course List"),o.createElement("div",null,e)),o.createElement("div",{style:{float:"left",height:"100%",width:"38%",padding:"0 2rem",right:"0"}},o.createElement("h2",{style:{textAlign:"center",margin:"3rem 0 0 0",fontWeight:"bold"}},"GPA"),o.createElement(c.Z,{onClick:()=>{0==n.length?n.push(1):n.push(n[n.length-1]+1),console.table(n),d((0,a.Z)(n))},style:{marginLeft:"1%",marginTop:"1rem",marginBottom:"1rem"},variant:"warning"},"Add a Semester"),o.createElement("p",{style:{textAlign:"right",marginTop:"2rem",fontWeight:"bold"},className:"p-3 mb-2 bg-warning text-dark"},"Total GPA: ",(G/A).toFixed(2)),n.map((e=>{let t=[],n=[];return n.push(o.createElement("th",{colSpan:3},"Semester ",e)),X.filter((t=>t.semester==e)).map((e=>{t.push(o.createElement("tr",null,o.createElement("td",{colSpan:2},e.course),o.createElement("td",{style:{textAlign:"right"}},e.rating)))})),o.createElement(r.Z,{striped:!0},o.createElement("thead",null,o.createElement("tr",null,n)),o.createElement("tbody",null,t,o.createElement("tr",null,o.createElement("td",{colSpan:3,style:{textAlign:"right"}},y[e-1]))))})),o.createElement("div",{style:{width:"500px"}},o.createElement(u.x1,{options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"GPA per Semester"}}},data:Z}))),o.createElement(m.Z,{show:B,onHide:I},o.createElement(m.Z.Header,{closeButton:!0},o.createElement(m.Z.Title,null,g)),o.createElement(m.Z.Body,null,o.createElement(l.Z,null,o.createElement(l.Z.Group,{className:"mb-3"},o.createElement(l.Z.Label,null,"Semester"),o.createElement(l.Z.Select,{"aria-label":"Default select example",id:"semester",onChange:e=>C(e.target.value)},o.createElement("option",{selected:!0,disabled:!0},"Select..."),n.map((e=>o.createElement("option",{value:e},"Semester ",e))))),o.createElement(l.Z.Group,{className:"mb-3"},o.createElement(l.Z.Label,null,"Grade"),o.createElement(l.Z.Select,{"aria-label":"Default select example",id:"grade",onChange:e=>h(e.target.value)},o.createElement("option",{selected:!0,disabled:!0},"Select..."),o.createElement("option",{value:"4"},"A"),o.createElement("option",{value:"3.75"},"A-"),o.createElement("option",{value:"3.25"},"B+"),o.createElement("option",{value:"3"},"B"),o.createElement("option",{value:"2.75"},"B-"),o.createElement("option",{value:"2.25"},"C+"),o.createElement("option",{value:"2"},"C"),o.createElement("option",{value:"1.75"},"C-"),o.createElement("option",{value:"1"},"D"),o.createElement("option",{value:"0"},"F"),o.createElement("option",{value:"excluded"},"W"))))),o.createElement(m.Z.Footer,null,o.createElement(c.Z,{variant:"secondary",onClick:I},"Close"),o.createElement(c.Z,{variant:"primary",onClick:function(){let e="";"4"==E&&(e="A"),"3.75"==E&&(e="A-"),"3.25"==E&&(e="B+"),"3"==E&&(e="B"),"2.75"==E&&(e="B-"),"2.25"==E&&(e="C+"),"2"==E&&(e="C"),"1.75"==E&&(e="C-"),"1"==E&&(e="D"),"0"==E&&(e="F"),"excluded"==E&&(e="W"),X.push({semester:p,course:g,rating:e,grade:E}),f((0,a.Z)(X)),x(!1);let t=0,o=0;for(let i=1;i<=n.length;i++){let e=0,n=0;X.filter((e=>e.semester==i)).map((a=>{"W"==a.rating||(e+=1*a.grade,t+=1*a.grade,n++,o++)})),e/=n,y[i-1]=e.toFixed(2),b((0,a.Z)(y)),v(t),D(o)}}},"Add"))))}d.kL.register(d.uw,d.f$,d.od,d.jn,d.Dx,d.u,d.De)}}]);
//# sourceMappingURL=component---src-pages-project-1-cs-js-90d94e94eaff62bdf802.js.map