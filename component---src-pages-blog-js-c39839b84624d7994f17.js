(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,A){"use strict";A.r(t),A.d(t,"query",function(){return f});A(145);var a=A(0),s=A.n(a),i=A(142),o=A(147),r=A.n(o),l=A(156),d=A(148),n=A(160),c=A.n(n);t.default=function(e){var t=e.data.blogposts;return s.a.createElement(l.a,null,s.a.createElement(d.a,{title:"Blog"}),s.a.createElement("h1",null,"Recent Blog Posts"),s.a.createElement("div",null,t.edges&&t.edges.map(function(e){var t=e.node;return s.a.createElement("div",{className:c.a.blogPost,key:t.contentful_id},s.a.createElement(i.Link,{to:t.slug},s.a.createElement(r.a,{fluid:t.heroImage.fluid,srcSetWebp:t.heroImage.fluid.srcSetWebp})),s.a.createElement("div",{className:c.a.postWrapper},s.a.createElement(i.Link,{to:t.slug},s.a.createElement("h1",null,t.title)),s.a.createElement("h4",null,"By: ",t.author.name),s.a.createElement("h4",null,"Published: ",t.publishDate),s.a.createElement("div",{className:c.a.blogPostContent,dangerouslySetInnerHTML:{__html:t.body.childMarkdownRemark.excerpt}})))})))};var f="3013280972"},147:function(e,t,A){"use strict";var a=A(8);t.__esModule=!0,t.default=void 0;var s,i=a(A(7)),o=a(A(51)),r=a(A(150)),l=a(A(151)),d=a(A(0)),n=a(A(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=c(e),A=t.fluid?t.fluid.src:t.fixed.src;return f[A]||!1},u=[];var g=function(e,t){(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){u.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),s).observe(e),u.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',A=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+A+"/>":"",s=e.srcSet?'<source srcSet="'+e.srcSet+'" '+A+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+a+s+"<img "+r+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},h=d.default.forwardRef(function(e,t){var A=e.style,a=e.onLoad,s=e.onError,i=(0,r.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:a,onError:s,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},A)}))});h.propTypes={style:n.default.object,onError:n.default.func,onLoad:n.default.func};var b=function(e){function t(t){var A;A=e.call(this,t)||this;var a=!0,s=!1,i=t.fadeIn,r=p(t);!r&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,s=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,s=!1);var l=!(A.props.critical&&!A.props.fadeIn);return A.state={isVisible:a,imgLoaded:!1,IOSupported:s,fadeIn:i,hasNoScript:l,seenBefore:r},A.imageRef=d.default.createRef(),A.handleImageLoaded=A.handleImageLoaded.bind((0,o.default)((0,o.default)(A))),A.handleRef=A.handleRef.bind((0,o.default)((0,o.default)(A))),A}(0,i.default)(t,e);var A=t.prototype;return A.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},A.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},A.handleImageLoaded=function(){var e,t,A;e=this.props,t=c(e),A=t.fluid?t.fluid.src:t.fixed.src,f[A]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},A.render=function(){var e=c(this.props),t=e.title,A=e.alt,a=e.className,s=e.style,i=void 0===s?{}:s,o=e.imgStyle,r=void 0===o?{}:o,n=e.placeholderStyle,f=void 0===n?{}:n,p=e.placeholderClassName,u=e.fluid,g=e.fixed,b=e.backgroundColor,w=e.Tag,Q="boolean"==typeof b?"lightgray":b,B=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},r,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},r),I={title:t,alt:this.state.isVisible?"":A,style:B,className:p};if(u){var y=u;return d.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(y.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/y.aspectRatio+"%"}}),y.base64&&d.default.createElement(h,(0,l.default)({src:y.base64},I)),y.tracedSVG&&d.default.createElement(h,(0,l.default)({src:y.tracedSVG},I)),Q&&d.default.createElement(w,{title:t,style:{backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,y.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:y.srcSetWebp,sizes:y.sizes}),d.default.createElement("source",{srcSet:y.srcSet,sizes:y.sizes}),d.default.createElement(h,{alt:A,title:t,src:y.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:A,title:t},y))}}))}if(g){var U=g,v=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},i);return"inherit"===i.display&&delete v.display,d.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:v,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},U.base64&&d.default.createElement(h,(0,l.default)({src:U.base64},I)),U.tracedSVG&&d.default.createElement(h,(0,l.default)({src:U.tracedSVG},I)),Q&&d.default.createElement(w,{title:t,style:{backgroundColor:Q,width:U.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:U.height}}),this.state.isVisible&&d.default.createElement("picture",null,U.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:U.srcSetWebp,sizes:U.sizes}),d.default.createElement("source",{srcSet:U.srcSet,sizes:U.sizes}),d.default.createElement(h,{alt:A,title:t,width:U.width,height:U.height,src:U.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:A,title:t,width:U.width,height:U.height},U))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=n.default.shape({width:n.default.number.isRequired,height:n.default.number.isRequired,src:n.default.string.isRequired,srcSet:n.default.string.isRequired,base64:n.default.string,tracedSVG:n.default.string,srcWebp:n.default.string,srcSetWebp:n.default.string}),Q=n.default.shape({aspectRatio:n.default.number.isRequired,src:n.default.string.isRequired,srcSet:n.default.string.isRequired,sizes:n.default.string.isRequired,base64:n.default.string,tracedSVG:n.default.string,srcWebp:n.default.string,srcSetWebp:n.default.string});b.propTypes={resolutions:w,sizes:Q,fixed:w,fluid:Q,fadeIn:n.default.bool,title:n.default.string,alt:n.default.string,className:n.default.oneOfType([n.default.string,n.default.object]),critical:n.default.bool,style:n.default.object,imgStyle:n.default.object,placeholderStyle:n.default.object,placeholderClassName:n.default.string,backgroundColor:n.default.oneOfType([n.default.string,n.default.bool]),onLoad:n.default.func,onError:n.default.func,onStartLoad:n.default.func,Tag:n.default.string};var B=b;t.default=B},148:function(e,t,A){"use strict";var a=A(149),s=A(0),i=A.n(s),o=A(4),r=A.n(o),l=A(163),d=A.n(l),n=A(142);function c(e){var t=e.description,A=e.lang,s=e.meta,o=e.keywords,r=e.title;return i.a.createElement(n.StaticQuery,{query:f,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:A},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:r},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(s)})},data:a})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.array,keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},t.a=c;var f="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Joel Å",description:"Blog and website.",author:"me@joelaa.com"}}}}},156:function(e,t,A){"use strict";var a=A(157),s=A(0),i=A.n(s),o=A(4),r=A.n(o),l=A(142),d=A(152),n=A(153),c=A(154),f=(A(155),A(158)),p=A.n(f),u=A(159),g=A.n(u),m=function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"3382715448",render:function(e){return i.a.createElement("div",{className:p.a.blogPage},i.a.createElement(d.a,{siteTitle:e.siteInfo.siteMetadata.title,siteSections:e.siteSections,css:p.a}),i.a.createElement(n.a,{siteTitle:e.siteInfo.siteMetadata.title,css:g.a}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement(c.a,{data:e.me}))},data:a})};m.propTypes={children:r.a.node.isRequired},t.a=m},157:function(e){e.exports={data:{siteInfo:{siteMetadata:{title:"Joel Å"}},siteSections:{edges:[{node:{name:"Portfolio"}},{node:{name:"Education"}},{node:{name:"Experience"}},{node:{name:"Skills"}},{node:{name:"Blog"}}]},me:{contentful_id:"15jwOBqpxqSAOy2eOO4S0m",name:"Joel Å",title:"Computer Science student, Web & Software Developer",email:"info@joelaa.com",github:"joelbits",shortBio:{shortBio:"Swedish Computer Science student, Web & Software Developer",childMarkdownRemark:{html:"<p>Swedish Computer Science student, Web &#x26; Software Developer</p>"}},image:{fluid:{srcSetWebp:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=175&h=117&q=50&fm=webp 175w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=350&h=233&q=50&fm=webp 350w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&h=467&q=50&fm=webp 700w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1050&h=700&q=50&fm=webp 1050w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1400&h=933&q=50&fm=webp 1400w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=2100&h=1400&q=50&fm=webp 2100w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=3000&h=2000&q=50&fm=webp 3000w",tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3e%3cpath d='M0 134v133h401V0H0v134m222-73l-2 1c-2 0-2 0-2 3 0 2 0 2-1 1 0-2-1-2-2 0-2 1-2 1-1 3 3 2 3 5 0 3-1-2-2-2-2-1-1 1-1 1-3-1-3-4-4-3-1 0v3l-3-4-2-5v2l-1 7c0 5 0 5-3 5h-8l-1 1h-3c-2 1-2 1-2-1l-1-2-1-1-3-4c-2-3-3-3-4-2l-2 2-2 2c-3 1-3 3 1 3l4 2-1 1v5l-2 3c-2 3-2 3 0 6l2 4 2 2c1 2 1 2-1 3l-1 1v4l2 1c-1 1 1 1 5-1s5-5 3-5-4-3-3-4l2-1 2-1c1-2 4 0 4 2l-1 2-1 2-1 4v3c-1 1 0 3 3 4 1 1 0 1-2 1-4 0-7 1-6 3h2l5 1c4 1 5 2 4 3l-2 2c0-1-2 0-3 2l-4 2-1 1h4l3-2 1 2-1 1c-2 0-4 2-2 3v9l1-3h14v5c0 8 2 3 2-6s0-9-2-11l-3-5-1-2-1-2c0-1 0-2-2-2-1 0-2-1-2-3l-1-4c-1 0 0-2 3-4l4-2-1 1-1 1v4l2-3c1-2 1-3 2-2 1 2 2 1 2-2 1-3 2-5 2-3 0 1 1 2 4 1 4 0 5 1 7 3l3 2c2-1 2 0 2 3v-3c0-8 0-8 2-7 2 2 2 2 2 0l2-1 1-1v-7l2-1c-1-2 0-2 1-2 2 0 3-3 1-5v-1l-1-1h-2l4-4 1-1 1-3v-3l-3 3-2 2-2 1h-5c-1 2-2 0-2-7l-1-5m7 39c2 9 1 16-3 13-2-1-4 0-3 2l-3 3c-4 4-6 5-8 13 0 4-2 8-3 9-2 4-1 5 2 5l3-3 3-4c1-1 1-2-1-2-3 0-3 0-2-5l2-4v1l1 4c1 2 1 2 3 0l1-1 2-1 3-2 2-1c1-2 7-6 7-4l-4 5-5 5c0 2 3 1 6-3l5-3-1 2c-1 2-1 3 1 2l-1 5c-2 4-3 7-1 6l5-12v-3c1-1 0-2-1-3v-2c2 0 1-4 0-5l-2-2-2-2-3-2-1-4-1-7c-2-2-2-2-1 0' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",base64:"data:image/jpeg;base64,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",aspectRatio:1.5,src:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&q=50",srcSet:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=175&h=117&q=50 175w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=350&h=233&q=50 350w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&h=467&q=50 700w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1050&h=700&q=50 1050w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1400&h=933&q=50 1400w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=2100&h=1400&q=50 2100w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=3000&h=2000&q=50 3000w",srcWebp:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&q=50&fm=webp",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},159:function(e,t,A){e.exports={appHeader:"blogHeader-module--appHeader--292tn",hero:"blogHeader-module--hero--2tbs4",appTitles:"blogHeader-module--appTitles--1cEwM",subTitle:"blogHeader-module--subTitle--1sMNh",mainTitle:"blogHeader-module--mainTitle--3jd9Z",btnContactMe:"blogHeader-module--btnContactMe--1PjB8",downArrow:"blogHeader-module--downArrow--19YlL"}},160:function(e,t,A){e.exports={blogPost:"blog-module--blogPost--ltlO3",postWrapper:"blog-module--postWrapper--33gzu",blogPostContent:"blog-module--blogPostContent--3bCPH",blogPage:"blog-module--blogPage--2u8jD",appLogo:"blog-module--appLogo--RT68d"}}}]);
//# sourceMappingURL=component---src-pages-blog-js-c39839b84624d7994f17.js.map