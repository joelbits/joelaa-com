(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{137:function(e,A,t){"use strict";t.r(A),t.d(A,"query",function(){return n});t(145);var a=t(0),s=t.n(a),i=t(147),o=t.n(i),l=t(156),r=t(160),d=t.n(r);A.default=function(e){var A=e.data.contentfulBlogPost;return s.a.createElement(l.a,null,s.a.createElement("div",{className:d.a.blogPost},s.a.createElement(o.a,{fluid:A.heroImage.fluid,srcSetWebp:A.heroImage.fluid.srcSetWebp}),s.a.createElement("div",{className:d.a.postWrapper},s.a.createElement("h1",null,A.title),s.a.createElement("h4",null,"By: ",A.author.name),s.a.createElement("h4",null,"Published: ",A.publishDate),s.a.createElement("div",{className:d.a.blogPostContent,dangerouslySetInnerHTML:{__html:A.body.childMarkdownRemark.html}}))))};var n="4074156701"},147:function(e,A,t){"use strict";var a=t(8);A.__esModule=!0,A.default=void 0;var s,i=a(t(7)),o=a(t(51)),l=a(t(150)),r=a(t(151)),d=a(t(0)),n=a(t(4)),c=function(e){var A=(0,r.default)({},e);return A.resolutions&&(A.fixed=A.resolutions,delete A.resolutions),A.sizes&&(A.fluid=A.sizes,delete A.sizes),A},f={},u=function(e){var A=c(e),t=A.fluid?A.fluid.src:A.fixed.src;return f[t]||!1},p=[];var g=function(e,A){(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(A){A[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(A[0]),A[1]())})})},{rootMargin:"200px"})),s).observe(e),p.push([e,A])},m=function(e){var A=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+t+"/>":"",s=e.srcSet?'<source srcSet="'+e.srcSet+'" '+t+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+a+s+"<img "+l+r+A+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},h=d.default.forwardRef(function(e,A){var t=e.style,a=e.onLoad,s=e.onError,i=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,r.default)({},i,{onLoad:a,onError:s,ref:A,style:(0,r.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))});h.propTypes={style:n.default.object,onError:n.default.func,onLoad:n.default.func};var b=function(e){function A(A){var t;t=e.call(this,A)||this;var a=!0,s=!1,i=A.fadeIn,l=u(A);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,s=!0),"undefined"==typeof window&&(a=!1),A.critical&&(a=!0,s=!1);var r=!(t.props.critical&&!t.props.fadeIn);return t.state={isVisible:a,imgLoaded:!1,IOSupported:s,fadeIn:i,hasNoScript:r,seenBefore:l},t.imageRef=d.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,o.default)((0,o.default)(t))),t.handleRef=t.handleRef.bind((0,o.default)((0,o.default)(t))),t}(0,i.default)(A,e);var t=A.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:u(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.handleRef=function(e){var A=this;this.state.IOSupported&&e&&g(e,function(){A.state.isVisible||"function"!=typeof A.props.onStartLoad||A.props.onStartLoad({wasCached:u(A.props)}),A.setState({isVisible:!0,imgLoaded:!1})})},t.handleImageLoaded=function(){var e,A,t;e=this.props,A=c(e),t=A.fluid?A.fluid.src:A.fixed.src,f[t]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=c(this.props),A=e.title,t=e.alt,a=e.className,s=e.style,i=void 0===s?{}:s,o=e.imgStyle,l=void 0===o?{}:o,n=e.placeholderStyle,f=void 0===n?{}:n,u=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,w=e.Tag,Q="boolean"==typeof b?"lightgray":b,B=(0,r.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),E=(0,r.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),I={title:A,alt:this.state.isVisible?"":t,style:B,className:u};if(p){var U=p;return d.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:(0,r.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(U.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/U.aspectRatio+"%"}}),U.base64&&d.default.createElement(h,(0,r.default)({src:U.base64},I)),U.tracedSVG&&d.default.createElement(h,(0,r.default)({src:U.tracedSVG},I)),Q&&d.default.createElement(w,{title:A,style:{backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,U.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:U.srcSetWebp,sizes:U.sizes}),d.default.createElement("source",{srcSet:U.srcSet,sizes:U.sizes}),d.default.createElement(h,{alt:t,title:A,src:U.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,r.default)({alt:t,title:A},U))}}))}if(g){var y=g,v=(0,r.default)({position:"relative",overflow:"hidden",display:"inline-block",width:y.width,height:y.height},i);return"inherit"===i.display&&delete v.display,d.default.createElement(w,{className:(a||"")+" gatsby-image-wrapper",style:v,ref:this.handleRef,key:"fixed-"+JSON.stringify(y.srcSet)},y.base64&&d.default.createElement(h,(0,r.default)({src:y.base64},I)),y.tracedSVG&&d.default.createElement(h,(0,r.default)({src:y.tracedSVG},I)),Q&&d.default.createElement(w,{title:A,style:{backgroundColor:Q,width:y.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:y.height}}),this.state.isVisible&&d.default.createElement("picture",null,y.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:y.srcSetWebp,sizes:y.sizes}),d.default.createElement("source",{srcSet:y.srcSet,sizes:y.sizes}),d.default.createElement(h,{alt:t,title:A,width:y.width,height:y.height,src:y.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,r.default)({alt:t,title:A,width:y.width,height:y.height},y))}}))}return null},A}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=n.default.shape({width:n.default.number.isRequired,height:n.default.number.isRequired,src:n.default.string.isRequired,srcSet:n.default.string.isRequired,base64:n.default.string,tracedSVG:n.default.string,srcWebp:n.default.string,srcSetWebp:n.default.string}),Q=n.default.shape({aspectRatio:n.default.number.isRequired,src:n.default.string.isRequired,srcSet:n.default.string.isRequired,sizes:n.default.string.isRequired,base64:n.default.string,tracedSVG:n.default.string,srcWebp:n.default.string,srcSetWebp:n.default.string});b.propTypes={resolutions:w,sizes:Q,fixed:w,fluid:Q,fadeIn:n.default.bool,title:n.default.string,alt:n.default.string,className:n.default.oneOfType([n.default.string,n.default.object]),critical:n.default.bool,style:n.default.object,imgStyle:n.default.object,placeholderStyle:n.default.object,placeholderClassName:n.default.string,backgroundColor:n.default.oneOfType([n.default.string,n.default.bool]),onLoad:n.default.func,onError:n.default.func,onStartLoad:n.default.func,Tag:n.default.string};var B=b;A.default=B},156:function(e,A,t){"use strict";var a=t(157),s=t(0),i=t.n(s),o=t(4),l=t.n(o),r=t(142),d=t(152),n=t(153),c=t(154),f=(t(155),t(158)),u=t.n(f),p=t(159),g=t.n(p),m=function(e){var A=e.children;return i.a.createElement(r.StaticQuery,{query:"3382715448",render:function(e){return i.a.createElement("div",{className:u.a.blogPage},i.a.createElement(d.a,{siteTitle:e.siteInfo.siteMetadata.title,siteSections:e.siteSections,css:u.a}),i.a.createElement(n.a,{siteTitle:e.siteInfo.siteMetadata.title,css:g.a}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},A),i.a.createElement(c.a,{data:e.me}))},data:a})};m.propTypes={children:l.a.node.isRequired},A.a=m},157:function(e){e.exports={data:{siteInfo:{siteMetadata:{title:"Joel Å"}},siteSections:{edges:[{node:{name:"Portfolio"}},{node:{name:"Education"}},{node:{name:"Experience"}},{node:{name:"Skills"}},{node:{name:"Blog"}}]},me:{contentful_id:"15jwOBqpxqSAOy2eOO4S0m",name:"Joel Å",title:"Computer Science student, Web & Software Developer",email:"info@joelaa.com",github:"joelbits",shortBio:{shortBio:"Swedish Computer Science student, Web & Software Developer",childMarkdownRemark:{html:"<p>Swedish Computer Science student, Web &#x26; Software Developer</p>"}},image:{fluid:{srcSetWebp:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=175&h=117&q=50&fm=webp 175w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=350&h=233&q=50&fm=webp 350w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&h=467&q=50&fm=webp 700w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1050&h=700&q=50&fm=webp 1050w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1400&h=933&q=50&fm=webp 1400w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=2100&h=1400&q=50&fm=webp 2100w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=3000&h=2000&q=50&fm=webp 3000w",tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3e%3cpath d='M0 66v67h94a570 570 0 0 0 97-4c1 0 1-3-1-3-2-1 0-3 2-3l2-1v-3l-7-2c-6-1-4-3 3-3l2-1-1-1c-2 1-3-4-2-6v-3l1-2v-5c-1-1-2-1-5 1-4 2-4 2-2 3l3 2c2 0 0 3-2 4l-4 2-2 3v-4l-2-1 2-2 2-2-2-2-2-2-2-5-2-3 2-3c2-3 3-4 2-5v-6l-1-4c0-4 3-4 7 1 3 5 4 8 3 8l-1 2c-1 2 1 4 3 4l3 2 3 2c2-1 4 0 4 1l1 1h1c2 0 1-2-1-2v-1l1-2c0-2-1-2-3-2h-3v1l-2 1-1-3c0-2 0-2 1-1h1l-1-3h-2l-2-1 2-1h5l5 1c2 0 2 0 0-1l-2-1h2c2 0 3-1 3-2 0-2 1-2 2-2 2 0 2 0 1-1v-2l2 1c1 2 2 1 1-1-2-3-1-4 2 0l2 1c0-2 0-2 2 0 2 1 2 1 2-1h1c1 2 2 0 1-4 0-4 0-4 2-4l2-1c1-1 1 0 1 2 0 4-1 5-2 2-1-1-1 0-1 2l2 2 1 2 1 2 1-1h3c1 2 2 1 3 0l2-1c2 1 2 1 0 3-2 3-3 5-1 3l1 1v1l2 3c0 2 0 2-3 2-2 0-2 0-1 1s1 1-1 2v1c1 0 1 4-1 6l-4 2c-2-1-2 0-2 7v3c0-3-1-4-2-3-2 0-2-1-2-3 0-1 0-2-1-1l-1 1-1-2h-2c-2 0-2 0-1-1 2-1 2-1 0-1-1-1-2 0-3 1-1 2-3 3-3 1v-2c-2 0-4 3-4 4h1c1-1 1-1 1 1s0 2-1 1h-2v-2l-1-3-1 3-1 1-1-5-1-1v-1l-1-1-1 3-2 2v3l2 2v2c-2 1-2 2-1 3l1 3c0 3 0 3 2 3s2 1 2 3l1 2c1-1 1 0 1 1l3 5 3 4 1 2c1 0 2 0 2-2l2-2 3-3c0-2 3-5 5-6 2-2 4-4 3-5l1-1h1c0 2 0 2 3 1 2-1 2-2 2-6 0-6 1-6 1-1l1 5 2 1c2 0 2 1 2 2l2 2c2 0 2 3 1 5v1l1 3v2h160v2c1 1 1-27 1-64V0H0v66m0 1' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",base64:"data:image/jpeg;base64,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",aspectRatio:1.5,src:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&q=50",srcSet:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=175&h=117&q=50 175w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=350&h=233&q=50 350w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&h=467&q=50 700w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1050&h=700&q=50 1050w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=1400&h=933&q=50 1400w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=2100&h=1400&q=50 2100w,\n//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=3000&h=2000&q=50 3000w",srcWebp:"//images.ctfassets.net/9j3tdrfq8k7p/7orLdboQQowIUs22KAW4U/fadf663ab8d28a88186e2eb90172d4f5/matt-palmer-254999.jpg?w=700&q=50&fm=webp",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},159:function(e,A,t){e.exports={appHeader:"blogHeader-module--appHeader--292tn",hero:"blogHeader-module--hero--2tbs4",appTitles:"blogHeader-module--appTitles--1cEwM",subTitle:"blogHeader-module--subTitle--1sMNh",mainTitle:"blogHeader-module--mainTitle--3jd9Z",btnContactMe:"blogHeader-module--btnContactMe--1PjB8",downArrow:"blogHeader-module--downArrow--19YlL"}},160:function(e,A,t){e.exports={blogPost:"blog-module--blogPost--ltlO3",postWrapper:"blog-module--postWrapper--33gzu",blogPostContent:"blog-module--blogPostContent--3bCPH",blogPage:"blog-module--blogPage--2u8jD",appLogo:"blog-module--appLogo--RT68d"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-94e0f023727134930402.js.map