(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(143),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(163),c=n.n(u);n.d(t,"PageRenderer",function(){return c.a});var d=n(48);n.d(t,"parsePath",function(){return d.a});var m=o.a.createContext({}),h=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},148:function(e,t,n){"use strict";var a,o=n(7),i=n.n(o),r=n(51),l=n.n(r),s=n(0),u=n.n(s),c=n(142),d=n(144),m=n(145),h=n.n(m),p=n(168),f=n.n(p),w=n(169),g=n.n(w),b=function(e){function t(){var t;return(t=e.call(this)||this).state={width:1980,height:1024,wait:!1,scrollPos:0},t.isMobile=t.isMobile.bind(l()(l()(t))),t.updateWindowDimensions=t.updateWindowDimensions.bind(l()(l()(t))),t}i()(t,e);var n=t.prototype;return n.isMobile=function(){return this.state.width<800},n.shouldDock=function(){var e=this.state.scrollPos>50;return e&&console.log("Menu should DOCK! (scrolled >50 px)"),e},n.toggleClass=function(e,t){document.querySelector(e).classList.toggle(t),this.forceUpdate()},n.toggleMenu=function(){var e=document.querySelector("#menuList");"block"===e.style.display?e.style.display="none":e.style.display="block"},n.updateWindowDimensions=function(){var e=this;a&&window.clearTimeout(a),a=window.setTimeout(function(){e.setState({width:window.innerWidth,height:window.innerHeight,scrollPos:window.scrollY,wait:!1})},50)},n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("scroll",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions),window.removeEventListener("scroll",this.updateWindowDimensions)},n.render=function(){var e=this.props,t=e.css,n=e.siteSections,a=e.siteTitle,o=g.a.bind(t)({navBarMobile:this.isMobile(),navBar:!this.isMobile(),docked:this.shouldDock()});return u.a.createElement("nav",{className:o},u.a.createElement("div",{className:t.navBarLogoWrap},u.a.createElement(d.d,{id:"#menuBars",onClick:this.toggleMenu}),u.a.createElement(c.Link,{to:"/"},u.a.createElement("h1",null,a))),u.a.createElement("ul",{className:t.menuList,id:"menuList"},n.edges.map(function(e){var t=e.node;return"Blog"===t.name?u.a.createElement("li",{key:t.name},u.a.createElement(c.Link,{to:"/"+t.name.toLowerCase()},t.name)):u.a.createElement("li",{key:t.name},u.a.createElement(c.Link,{to:"#"+t.name.toLowerCase()},t.name))}),u.a.createElement("li",null,u.a.createElement("a",{href:"//github.com/joelbits",className:t.githubLink,target:"_blank",rel:"noopener noreferrer",title:"View Github profile"},u.a.createElement(d.h,{className:t.githubLogo})))))},t}(u.a.Component);t.a=h()(f.a)(b)},149:function(e,t,n){"use strict";var a=n(4),o=n.n(a),i=n(0),r=n.n(i),l=n(144),s=n(145),u=n.n(s),c=n(170),d=n.n(c),m=function(e){e.siteTitle;var t=e.css,n=function(){window.scrollTo(0,document.body.scrollHeight)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:t.appHeader},r.a.createElement("div",{className:t.hero},r.a.createElement("section",{className:t.appTitles},r.a.createElement("p",{className:t.subTitle},"Swedish Computer Science Student, Web & Software"),r.a.createElement("p",{className:t.mainTitle},"DEVELOPER."),r.a.createElement("button",{className:t.btnContactMe,title:"Available for hire and projects!",onClick:n},"CONTACT ME")))),r.a.createElement(l.b,{className:t.downArrow,alt:"Scroll down",onClick:n,title:"Scroll to bottom"}))};m.propTypes={siteTitle:o.a.string},m.defaultProps={siteTitle:""},t.a=u()(d.a)(m)},150:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(144),r=n(171),l=n.n(r);t.a=function(e){var t=e.data,n=t.name,a=t.email,r=t.github;return o.a.createElement("div",{className:l.a.footer},o.a.createElement("a",{href:"mailto:"+a},a),o.a.createElement("a",{href:"//github.com/"+r,className:l.a.githubLink,target:"_blank",rel:"noopener noreferrer",title:"View Github profile"},o.a.createElement(i.h,{className:l.a.githubLogo})),o.a.createElement("p",null,"© ",(new Date).getFullYear()," ",n," @ ","undefined"!=typeof window&&new URL(window.location.href).hostname))}},151:function(e,t,n){},163:function(e,t,n){var a;e.exports=(a=n(165))&&a.default||a},165:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),l=n(68),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=u},168:function(e,t,n){e.exports={navBar:"menu-module--navBar--3YL2l",navBarLogoWrap:"menu-module--navBarLogoWrap--3OoQ2",navBarMobile:"menu-module--navBarMobile--CMZlc",menuList:"menu-module--menuList--22FJH",docked:"menu-module--docked--24J8z",hidden:"menu-module--hidden--2vpgI",githubLink:"menu-module--githubLink--2Zi0Z",githubLogo:"menu-module--githubLogo--3zoc-"}},170:function(e,t,n){e.exports={appHeader:"header-module--appHeader--vIOnb",hero:"header-module--hero--1ZhjY",appTitles:"header-module--appTitles--3DcP7",subTitle:"header-module--subTitle--2M-W8",mainTitle:"header-module--mainTitle--1VP06",btnContactMe:"header-module--btnContactMe--zuvwr",downArrow:"header-module--downArrow--2GQX1"}},171:function(e,t,n){e.exports={footer:"footer-module--footer--1cRg_",githubLink:"footer-module--githubLink--2D40e",githubLogo:"footer-module--githubLogo--3oLR-"}}}]);
//# sourceMappingURL=0-1b9775782f1a2e443ff3.js.map