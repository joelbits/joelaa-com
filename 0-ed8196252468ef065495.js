(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=n(144),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(163),c=n.n(u);n.d(t,"PageRenderer",function(){return c.a});var d=n(48);n.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),h=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},151:function(e,t,n){"use strict";var a,i=n(7),o=n.n(i),r=n(51),s=n.n(r),l=n(0),u=n.n(l),c=n(142),d=n(143),m=n(145),h=n.n(m),p=n(157),f=n.n(p),g=n(168),w=n.n(g),b=function(e){function t(){var t;return(t=e.call(this)||this).state={width:1980,height:1024,wait:!1,scrollPos:0},t.isMobile=t.isMobile.bind(s()(s()(t))),t.toggleMenu=t.toggleMenu.bind(s()(s()(t))),t.updateWindowDimensions=t.updateWindowDimensions.bind(s()(s()(t))),t}o()(t,e);var n=t.prototype;return n.isMobile=function(){return this.state.width<800},n.shouldDock=function(){return this.state.scrollPos>50},n.toggleClass=function(e,t){document.querySelector(e).classList.toggle(t),this.forceUpdate()},n.toggleMenu=function(){if(this.isMobile()){var e=document.querySelector("#menuList");"block"===e.style.display?e.style.display="none":e.style.display="block"}},n.updateWindowDimensions=function(){var e=this;a&&window.clearTimeout(a),a=window.setTimeout(function(){e.setState({width:window.innerWidth,height:window.innerHeight,scrollPos:window.scrollY,wait:!1})},50)},n.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("scroll",this.updateWindowDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions),window.removeEventListener("scroll",this.updateWindowDimensions)},n.render=function(){var e=this,t=this.props,n=t.css,a=t.siteSections,i=t.siteTitle,o=w.a.bind(n)({navBarMobile:this.isMobile(),navBar:!this.isMobile(),docked:this.shouldDock()});return u.a.createElement("nav",{className:o},u.a.createElement("div",{className:n.navBarLogoWrap},u.a.createElement(d.d,{id:"#menuBars",onClick:this.toggleMenu}),u.a.createElement(c.Link,{to:"/"},u.a.createElement("h1",null,i))),u.a.createElement("ul",{className:n.menuList,id:"menuList"},a.edges.map(function(t){var a=t.node;return"Blog"===a.name?u.a.createElement("li",{key:a.name,onClick:e.toggleMenu},u.a.createElement(c.Link,{to:"/"+a.name.toLowerCase(),activeClassName:n.activeLink},a.name)):u.a.createElement("li",{key:a.name,onClick:e.toggleMenu},u.a.createElement(c.Link,{to:"#"+a.name.toLowerCase(),activeClassName:n.activeLink},a.name))}),u.a.createElement("li",{className:n.socialLinks},u.a.createElement("a",{href:"//github.com/joelbits",className:n.githubLink,target:"_blank",rel:"noopener noreferrer",title:"View Github profile"},u.a.createElement(d.h,{className:n.githubLogo})))))},t}(u.a.Component);t.a=h()(f.a)(b)},152:function(e,t,n){"use strict";n(76);var a=n(4),i=n.n(a),o=n(0),r=n.n(o),s=n(143),l=n(145),u=n.n(l),c=n(169),d=n.n(c),m=function(e){e.siteTitle;var t,n,a=e.data,i=e.css,o=function(){window.scrollTo(0,document.body.scrollHeight)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:i.appHeader},r.a.createElement("div",{className:i.hero},r.a.createElement("section",{className:i.appTitles},r.a.createElement("p",{className:i.subTitle},(t=a.shortBio.shortBio,n=t.lastIndexOf(" "),t.substring(0,n))),r.a.createElement("p",{className:i.mainTitle},function(e){var t=e.split(" ");return t[t.length-1]}(a.shortBio.shortBio)),r.a.createElement("button",{className:i.btnContactMe,title:"Available for hire and projects!",onClick:o},"CONTACT ME")))),r.a.createElement(s.b,{className:i.downArrow,alt:"Scroll down",onClick:o,title:"Scroll to bottom"}))};m.propTypes={siteTitle:i.a.string},m.defaultProps={siteTitle:""},t.a=u()(d.a)(m)},153:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(143),r=n(170),s=n.n(r);t.a=function(e){var t=e.data,n=t.name,a=t.email,r=t.github;return i.a.createElement("div",{className:s.a.footer},i.a.createElement("a",{href:"mailto:"+a},a),i.a.createElement("a",{href:"//github.com/"+r,className:s.a.githubLink,target:"_blank",rel:"noopener noreferrer",title:"View Github profile"},i.a.createElement(o.h,{className:s.a.githubLogo})),i.a.createElement("p",null,"© ",(new Date).getFullYear()," ",n," @ ","undefined"!=typeof window&&new URL(window.location.href).hostname))}},154:function(e,t,n){},157:function(e,t,n){e.exports={navBar:"menu-module--navBar--3YL2l",navBarLogoWrap:"menu-module--navBarLogoWrap--3OoQ2",menuList:"menu-module--menuList--22FJH",navBarMobile:"menu-module--navBarMobile--CMZlc",socialLinks:"menu-module--socialLinks--2DGz3",docked:"menu-module--docked--24J8z",hidden:"menu-module--hidden--2vpgI",githubLink:"menu-module--githubLink--2Zi0Z",githubLogo:"menu-module--githubLogo--3zoc-",activeLink:"menu-module--activeLink--bP7pJ"}},163:function(e,t,n){var a;e.exports=(a=n(165))&&a.default||a},165:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=n(68),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=u},169:function(e,t,n){e.exports={appHeader:"header-module--appHeader--vIOnb",hero:"header-module--hero--1ZhjY",appTitles:"header-module--appTitles--3DcP7",subTitle:"header-module--subTitle--2M-W8",mainTitle:"header-module--mainTitle--1VP06",btnContactMe:"header-module--btnContactMe--zuvwr",downArrow:"header-module--downArrow--2GQX1"}},170:function(e,t,n){e.exports={footer:"footer-module--footer--1cRg_",githubLink:"footer-module--githubLink--2D40e",githubLogo:"footer-module--githubLogo--3oLR-"}}}]);
//# sourceMappingURL=0-ed8196252468ef065495.js.map