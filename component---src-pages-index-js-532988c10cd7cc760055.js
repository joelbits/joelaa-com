(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0f1q":function(e,a,t){e.exports={appEducation:"education-module--appEducation--cw2yZ",headerWrapper:"education-module--headerWrapper--PNrQJ",educationIcon:"education-module--educationIcon--2o1Zk",area:"education-module--area--2Zh_x",studyType:"education-module--studyType--2fX1n",education:"education-module--education--2nN38",dates:"education-module--dates--BzZvS",institution:"education-module--institution--3GxzO",course:"education-module--course--2Fk1H"}},"9O84":function(e,a,t){e.exports={appSkills:"skills-module--appSkills--39UmZ",headerWrapper:"skills-module--headerWrapper--tudXl",skillsIcon:"skills-module--skillsIcon--3g9Ge",skill:"skills-module--skill--Qv64A",changeColor:"skills-module--changeColor--1uH5A",skillsImg:"skills-module--skillsImg--1JuFb"}},Bl7J:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),r=t("Wbzz"),s=t("jYam"),c=t("LbRr"),o=t("W/9C"),i=(t("8ypT"),t("BdyY")),m=t.n(i),u=t("PAlx"),d=t.n(u);a.a=m()(d.a)((function(e){var a=e.children,t=e.css;return n.a.createElement(r.StaticQuery,{query:"3620613219",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{siteTitle:e.siteInfo.siteMetadata.title,siteSections:e.siteSections}),n.a.createElement(c.a,{data:e.me,siteTitle:e.siteInfo.siteMetadata.title}),n.a.createElement("div",{className:t.contentWrapper},a),n.a.createElement(o.a,{data:e.me}))}})}))},PAlx:function(e,a,t){e.exports={contentWrapper:"global-module--contentWrapper--1CP4E"}},PrBw:function(e,a,t){e.exports={aboutMe:"frontpage-module--aboutMe--3YEtv",meImage:"frontpage-module--meImage--3DGGn",latestBlogPosts:"frontpage-module--latestBlogPosts--12xyO",blogPost:"frontpage-module--blogPost--3OoUN"}},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return T}));var l=t("q1tI"),n=t.n(l),r=t("Wbzz"),s=t("Bl7J"),c=t("vrFN"),o=t("ma3e"),i=t("BdyY"),m=t.n(i),u=t("0f1q"),d=t.n(u);var p=m()(d.a)((function(e){var a=e.data,t=e.css,l=a;return n.a.createElement("div",{id:"education",className:t.appEducation},n.a.createElement("div",{className:t.headerWrapper},n.a.createElement("h2",null,"Education"),n.a.createElement(o.r,{className:t.educationIcon})),l&&l.map((function(e){return n.a.createElement("div",{key:e.startDate,className:t.education},(e.startDate||e.endDate)&&n.a.createElement("div",{className:t.dates},n.a.createElement("span",null,e.startDate),n.a.createElement("span",null,e.endDate)),e.institution&&n.a.createElement("span",{className:t.institution},e.institution),e.area&&n.a.createElement("span",{className:t.area},e.area),e.studyType&&n.a.createElement("span",{className:t.studyType},e.studyType),e.courses&&n.a.createElement("ul",null,e.courses.map((function(e){return n.a.createElement("li",{className:t.course,key:e},e)}))))})))})),E=t("pd7u"),f=t.n(E);var k=m()(f.a)((function(e){var a=e.data,t=e.css,l=a;return n.a.createElement("div",{id:"experience",className:t.appExperience},n.a.createElement("div",{className:t.headerWrapper},n.a.createElement("h2",null,"Experience"),n.a.createElement(o.h,{className:t.experienceIcon})),l&&l.map((function(e){return n.a.createElement("div",{key:e.position,className:t.work},(e.startDate||e.endDate)&&n.a.createElement("div",{className:t.dates},n.a.createElement("span",null,e.startDate),n.a.createElement("span",null,e.endDate)),e.position&&n.a.createElement("span",{className:t.position},e.position),e.company&&e.website&&n.a.createElement("span",{className:t.company},n.a.createElement("a",{href:e.website},e.company)),e.summary&&n.a.createElement("span",{className:t.summary},e.summary),e.highlights&&""!==e.highlights[0]&&e.highlights.map((function(e){return n.a.createElement("span",{className:t.highlight,key:Math.random()},"- ",e)})))})))})),h=t("9eSz"),g=t.n(h),b=t("ltYM"),N=t.n(b);var y=m()(N.a)((function(e){var a=e.data,t=e.css,l=a.resumeData.publications,r=a.images,s=function(e,a){var t=!1;return r.forEach((function(l){if(l.description.includes("Project:")&&l.description.includes(e))switch(a){case"fixed":t=l.fixed;break;case"fluid":t=l.fluid;break;case"url":t=l.file.url;break;default:t=l}})),t};return n.a.createElement("div",{id:"portfolio",className:t.appPortfolio},n.a.createElement("div",{className:t.headerWrapper},n.a.createElement("h2",null,"Portfolio "),n.a.createElement(o.d,{className:t.portfolioIcon})),n.a.createElement("div",{className:t.publicationList},l&&l.map((function(e){return n.a.createElement("div",{key:e.name+e.releaseDate,className:t.publication},r&&e.website&&!1!==s(e.name,"fixed")&&n.a.createElement("a",{href:s(e.name,"url"),title:"See Project Screenshot"},n.a.createElement(g.a,{fluid:s(e.name,"fluid"),alt:"Project Thumbnail"})),(e.startDate||e.endDate)&&n.a.createElement("div",{className:t.dates},n.a.createElement("span",null,e.startDate),n.a.createElement("span",null,e.endDate)),e.name&&n.a.createElement("span",{className:t.name},e.name),e.publisher&&n.a.createElement("span",{className:t.publisher},e.publisher),e.releaseDate&&n.a.createElement("span",{className:t.releaseDate},e.releaseDate),e.website&&n.a.createElement("span",{className:t.website},n.a.createElement("a",{href:"//"+e.website},e.website)),e.summary&&n.a.createElement("span",{className:t.summary},e.summary))}))))})),v=t("17x9"),x=t.n(v),D=t("9O84"),w=t.n(D);function I(e){var a,t=e.name,l=e.data,r=e.css;switch(t){case"FaHtml5":a=n.a.createElement(o.i,null);break;case"FaCss3":a=n.a.createElement(o.e,null);break;case"FaJsSquare":case"FaTsSquare":a=n.a.createElement(o.l,null);break;case"FaReact":a=n.a.createElement(o.p,null);break;case"FaNodeJs":a=n.a.createElement(o.n,null);break;case"FaAndroid":a=n.a.createElement(o.a,null);break;case"FaJava":a=n.a.createElement(o.j,null);break;case"FaPython":a=n.a.createElement(o.o,null);break;case"FaDocker":a=n.a.createElement(o.f,null);break;case"FaLinux":a=n.a.createElement(o.m,null);break;case"FaAws":a=n.a.createElement(o.c,null);break;case"FaJenkins":a=n.a.createElement(o.k,null);break;case"Kafka":a=n.a.createElement("span",null),l&&l.edges&&l.edges.forEach((function(e){e.node.file.fileName&&-1!==e.node.file.fileName.indexOf("kafka")&&e.node.file.url&&(a=n.a.createElement("img",{src:e.node.file.url,alt:"Apache Kafka logo",className:r.changeColor}))}));break;case"Spring":a=n.a.createElement("span",null),l&&l.edges&&l.edges.forEach((function(e){e.node.file.fileName&&-1!==e.node.file.fileName.indexOf("spring_logo_blue")&&e.node.file.url&&(a=n.a.createElement("img",{src:e.node.file.url,alt:"Spring Framework logo",className:r.skillsImg}))}));break;case"ElasticSearch":a=n.a.createElement("span",null),l&&l.edges&&l.edges.forEach((function(e){e.node.file.fileName&&-1!==e.node.file.fileName.indexOf("elastic_logo")&&e.node.file.url&&(a=n.a.createElement("img",{src:e.node.file.url,alt:"ElsaticSearch logo",className:r.skillsImg}))}));break;default:a=n.a.createElement("div",null," X ")}return a}I.propTypes={name:x.a.string.isRequired,data:x.a.object};var P=m()(w.a)(I);var F=m()(w.a)((function(e){var a=e.data,t=e.images,l=e.css,r=a;return n.a.createElement("div",{id:"skills",className:l.appSkills},n.a.createElement("div",{className:l.headerWrapper},n.a.createElement("h2",null,"Skills"),n.a.createElement(o.q,{className:l.skillsIcon})),n.a.createElement("div",{className:l.skillsList},r&&r.map((function(e){var a=e.logos;return 0===a.length?null:e.keywords.map((function(e){return n.a.createElement("div",{key:e,className:l.skill},n.a.createElement(P,{name:a[e],data:t}),n.a.createElement("span",null,e))}))}))))})),W=t("PrBw"),S=t.n(W),T=(a.default=function(e){var a=e.data,t=a.blogposts,l=a.images,o=a.resume;return n.a.createElement(s.a,null,n.a.createElement(c.a,{title:"Home",keywords:["joelaa","developer","joelaa.com"]}),n.a.createElement(k,{data:o.resumeData.work}),n.a.createElement(p,{data:o.resumeData.education}),n.a.createElement(F,{data:o.resumeData.skills,images:l}),n.a.createElement(y,{data:o}),n.a.createElement("div",{className:S.a.latestBlogPosts},n.a.createElement(r.Link,{to:"/blog"},n.a.createElement("h3",null,"Latest Posts")),t.edges.map((function(e){var a=e.node;return n.a.createElement("div",{key:a.contentful_id,className:S.a.blogPost},n.a.createElement(r.Link,{to:"/"+a.slug},n.a.createElement("h4",null,a.title," - ",a.publishDate),n.a.createElement("p",null,a.body.childMarkdownRemark.excerpt)))}))))},"1848572852")},ltYM:function(e,a,t){e.exports={appPortfolio:"portfolio-module--appPortfolio--1CMeT",headerWrapper:"portfolio-module--headerWrapper--3ApK-",portfolioIcon:"portfolio-module--portfolioIcon--oWLfu",publicationList:"portfolio-module--publicationList--2HVsu",publication:"portfolio-module--publication--3ImF9",publisher:"portfolio-module--publisher--YOFNH",name:"portfolio-module--name--mZcpH",releaseDate:"portfolio-module--releaseDate--S8fWD",summary:"portfolio-module--summary--3A_1Z"}},pd7u:function(e,a,t){e.exports={appExperience:"experience-module--appExperience--2D--b",headerWrapper:"experience-module--headerWrapper--eLAM7",experienceIcon:"experience-module--experienceIcon--1eRjX",work:"experience-module--work--1cOm6",position:"experience-module--position--xDPXU",company:"experience-module--company--km_x3",summary:"experience-module--summary--13-N5",highlight:"experience-module--highlight--11N1Q",dates:"experience-module--dates--YPV6z"}}}]);
//# sourceMappingURL=component---src-pages-index-js-532988c10cd7cc760055.js.map