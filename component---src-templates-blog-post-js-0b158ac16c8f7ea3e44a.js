(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return u});var i=a(0),o=a.n(i),r=a(152),s=a.n(r),l=a(155),n=a(159),d=a.n(n);t.default=function(e){var t=e.data.contentfulBlogPost;return o.a.createElement(l.a,null,o.a.createElement("div",{className:d.a.blogPost},o.a.createElement(s.a,{fluid:t.heroImage.fluid,srcSetWebp:t.heroImage.fluid.srcSetWebp}),o.a.createElement("div",{className:d.a.postWrapper},o.a.createElement("h1",null,t.title),o.a.createElement("h4",null,"By: ",t.author.name),o.a.createElement("h4",null,"Published: ",t.publishDate),o.a.createElement("div",{className:d.a.blogPostContent,dangerouslySetInnerHTML:{__html:t.body.childMarkdownRemark.html}}))))};var u="1207875689"},152:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var o,r=i(a(7)),s=i(a(51)),l=i(a(153)),n=i(a(154)),d=i(a(0)),u=i(a(4)),c=function(e){var t=(0,n.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var g=function(e,t){(void 0===o&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),o).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",o=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",n=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+o+"<img "+l+n+t+s+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,o=e.onError,r=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,n.default)({},r,{onLoad:i,onError:o,ref:t,style:(0,n.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,o=!1,r=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,o=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,o=!1);var n=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:o,fadeIn:r,hasNoScript:n,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,o=e.style,r=void 0===o?{}:o,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,S=e.Tag,v="boolean"==typeof y?"lightgray":y,w=(0,n.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),E=(0,n.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),L={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(h){var I=h;return d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,n.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&d.default.createElement(b,(0,n.default)({src:I.base64},L)),I.tracedSVG&&d.default.createElement(b,(0,n.default)({src:I.tracedSVG},L)),v&&d.default.createElement(S,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(b,{alt:a,title:t,src:I.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,n.default)({alt:a,title:t},I))}}))}if(g){var R=g,M=(0,n.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},r);return"inherit"===r.display&&delete M.display,d.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(b,(0,n.default)({src:R.base64},L)),R.tracedSVG&&d.default.createElement(b,(0,n.default)({src:R.tracedSVG},L)),v&&d.default.createElement(S,{title:t,style:{backgroundColor:v,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,n.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var S=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),v=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:S,sizes:v,fixed:S,fluid:v,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string};var w=y;t.default=w},155:function(e,t,a){"use strict";var i=a(156),o=a(0),r=a.n(o),s=a(4),l=a.n(s),n=a(142),d=a(148),u=a(149),c=a(150),f=(a(151),a(157)),p=a.n(f),h=a(158),g=a.n(h),m=function(e){var t=e.children;return r.a.createElement(n.StaticQuery,{query:"2210892740",render:function(e){return r.a.createElement("div",{className:p.a.blogPage},r.a.createElement(d.a,{siteTitle:e.siteInfo.siteMetadata.title,siteSections:e.siteSections,css:p.a}),r.a.createElement(u.a,{siteTitle:e.siteInfo.siteMetadata.title,css:g.a}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),r.a.createElement(c.a,{data:e.me}))},data:i})};m.propTypes={children:l.a.node.isRequired},t.a=m},156:function(e){e.exports={data:{siteInfo:{siteMetadata:{title:"Joel AA"}},siteSections:{edges:[{node:{name:"Portfolio"}},{node:{name:"Education"}},{node:{name:"Experience"}},{node:{name:"Skills"}},{node:{name:"Blog"}}]},me:null}}},157:function(e,t,a){e.exports={navBar:"blogMenu-module--navBar--2L4We",navBarLogoWrap:"blogMenu-module--navBarLogoWrap--1iGwf",navBarMobile:"blogMenu-module--navBarMobile--3c5pZ",menuList:"blogMenu-module--menuList--l9gqf",docked:"blogMenu-module--docked--BwDjc",hidden:"blogMenu-module--hidden--2Yn7f",githubLink:"blogMenu-module--githubLink--nX3n5",githubLogo:"blogMenu-module--githubLogo--1uPZm"}},158:function(e,t,a){e.exports={appHeader:"blogHeader-module--appHeader--292tn",hero:"blogHeader-module--hero--2tbs4",appTitles:"blogHeader-module--appTitles--1cEwM",subTitle:"blogHeader-module--subTitle--1sMNh",mainTitle:"blogHeader-module--mainTitle--3jd9Z",btnContactMe:"blogHeader-module--btnContactMe--1PjB8",downArrow:"blogHeader-module--downArrow--19YlL"}},159:function(e,t,a){e.exports={blogPost:"blog-module--blogPost--ltlO3",postWrapper:"blog-module--postWrapper--33gzu",blogPostContent:"blog-module--blogPostContent--3bCPH",blogPage:"blog-module--blogPage--2u8jD",appLogo:"blog-module--appLogo--RT68d"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0b158ac16c8f7ea3e44a.js.map