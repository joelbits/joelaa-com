(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return f});a(35);var n=a(0),s=a.n(n),i=a(179),r=a(182),c=a.n(r),o=a(194),l=a(188),d=a(201),m=a.n(d);t.default=function(e){var t=e.data.blogposts;return s.a.createElement(o.a,null,s.a.createElement(l.a,{title:"Blog"}),s.a.createElement("h1",null,"Recent Blog Posts"),s.a.createElement("div",null,t.edges&&t.edges.map(function(e){var t=e.node;return s.a.createElement("div",{className:m.a.blogPost,key:t.contentful_id},s.a.createElement(i.a,{to:t.slug},s.a.createElement(c.a,{fluid:t.heroImage.fluid,srcSetWebp:t.heroImage.fluid.srcSetWebp})),s.a.createElement("div",{className:m.a.postWrapper},s.a.createElement(i.a,{to:t.slug},s.a.createElement("h1",null,t.title)),s.a.createElement("h4",null,"By: ",t.author.name),s.a.createElement("h4",null,"Published: ",t.publishDate),s.a.createElement("div",{className:m.a.blogPostContent,dangerouslySetInnerHTML:{__html:t.body.childMarkdownRemark.excerpt}})))})))};var f="3013280972"},179:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),s=a.n(n),i=a(12),r=a.n(i),c=a(57),o=a.n(c);a.d(t,"a",function(){return o.a});a(181);var l=s.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,r=a?a.data:t[n]&&t[n].data;return s.a.createElement(s.a.Fragment,null,r&&i(r),!r&&s.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return s.a.createElement(l.Consumer,null,function(e){return s.a.createElement(d,{data:t,query:a,render:n||i,staticQueryData:e})})};m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},181:function(e,t,a){var n;e.exports=(n=a(183))&&n.default||n},183:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),s=a.n(n),i=a(12),r=a.n(i),c=a(82),o=function(e){var t=e.location,a=e.pageResources;return a?s.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=o},184:function(e,t,a){"use strict";a(35);var n,s=a(58),i=a.n(s),r=a(7),c=a.n(r),o=a(0),l=a.n(o),d=a(179),m=a(178),f=a(180),u=a.n(f),p=a(187),b=a.n(p),g=a(190),w=a.n(g),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={width:1980,height:1024,wait:!1,scrollPos:0,isVisible:!1},a.isMobile=a.isMobile.bind(i()(a)),a.toggleMenu=a.toggleMenu.bind(i()(a)),a.updateWindowDimensions=a.updateWindowDimensions.bind(i()(a)),a}c()(t,e);var a=t.prototype;return a.isMobile=function(){return this.state.width<800},a.shouldDock=function(){return this.state.scrollPos>50},a.toggleClass=function(e,t){document.querySelector(e).classList.toggle(t),this.forceUpdate()},a.toggleMenu=function(){this.isMobile()&&(this.setState(function(e){return{isVisible:!e.isVisible}}),console.log(this.state.isVisible))},a.updateWindowDimensions=function(){var e=this;n&&window.clearTimeout(n),n=window.setTimeout(function(){e.setState({width:window.innerWidth,height:window.innerHeight,scrollPos:window.scrollY,wait:!1})},50)},a.componentDidMount=function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("scroll",this.updateWindowDimensions)},a.componentWillUnmount=function(){window.removeEventListener("resize",this.updateWindowDimensions),window.removeEventListener("scroll",this.updateWindowDimensions)},a.render=function(){var e=this,t=this.props,a=t.css,n=t.siteSections,s=t.siteTitle,i=this.state.isVisible,r=w.a.bind(a)({navBarMobile:this.isMobile(),navBar:!this.isMobile(),docked:this.shouldDock()});return l.a.createElement("nav",{className:r},l.a.createElement("div",{className:a.navBarLogoWrap},l.a.createElement(m.d,{id:"#menuBars",onClick:this.toggleMenu}),l.a.createElement(d.a,{to:"/"},this.props.children,l.a.createElement("h1",null,s))),l.a.createElement("ul",{className:a.menuList+" "+(i?"":"hidden"),id:"menuList"},n.edges.map(function(t){var n=t.node;return"Blog"===n.name?l.a.createElement("li",{key:n.name,onClick:e.toggleMenu},l.a.createElement(d.a,{to:"/"+n.name.toLowerCase(),activeClassName:a.activeLink},n.name)):l.a.createElement("li",{key:n.name,onClick:e.toggleMenu},l.a.createElement(d.a,{to:"/#"+n.name.toLowerCase(),activeClassName:a.activeLink},n.name))}),l.a.createElement("li",{className:a.socialLinks},l.a.createElement("a",{href:"//github.com/joelbits",className:a.githubLink,target:"_blank",rel:"noopener noreferrer",title:"View Github profile"},l.a.createElement(m.h,{className:a.githubLogo})))))},t}(l.a.Component);t.a=u()(b.a)(h)},185:function(e,t,a){"use strict";a(25);var n=a(12),s=a.n(n),i=a(0),r=a.n(i),c=a(178),o=a(180),l=a.n(o),d=a(191),m=a.n(d),f=a(182),u=a.n(f),p=function(e){e.siteTitle;var t,a,n=e.data,s=e.css,i=function(){window.scrollTo(0,document.body.scrollHeight)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:s.appHeader},r.a.createElement("div",{className:s.hero},r.a.createElement(u.a,{className:s.heroImage,srcSetWebp:n.image.fluid.srcSetWebp,fluid:n.image.fluid}),r.a.createElement("section",{className:s.appTitles},n&&n.shortBio&&r.a.createElement("p",{className:s.subTitle},(t=n.shortBio.shortBio,a=t.lastIndexOf(" "),t.substring(0,a))),n&&n.shortBio&&r.a.createElement("p",{className:s.mainTitle},function(e){var t=e.split(" ");return t[t.length-1]}(n.shortBio.shortBio)),r.a.createElement("button",{className:s.btnContactMe,title:"NOT currently available for projects!",onClick:i},"CONTACT ME")))),r.a.createElement(c.b,{className:s.downArrow,alt:"Scroll down",onClick:i,title:"Scroll to bottom"}))};p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""},t.a=l()(m.a)(p)},186:function(e,t,a){"use strict";a(35);var n=a(0),s=a.n(n),i=a(178),r=a(192),c=a.n(r);t.a=function(e){var t=e.data,a=t.name,n=t.email,r=t.github;return s.a.createElement("div",{className:c.a.footer},s.a.createElement("a",{href:"mailto:"+n},n),s.a.createElement("a",{href:"//github.com/"+r,className:c.a.githubLink,target:"_blank",rel:"noopener noreferrer",title:"View Github profile"},s.a.createElement(i.h,{className:c.a.githubLogo})),s.a.createElement("a",{href:"//github.com/"+r+"/joelaa-cms",className:c.a.githubProjectLink,target:"_blank",rel:"noopener noreferrer",title:"View site code"},"View site code"),s.a.createElement("p",null,"© ",(new Date).getFullYear()," ",a," @ ","undefined"!=typeof window&&new URL(window.location.href).hostname))}},188:function(e,t,a){"use strict";var n=a(189),s=a(0),i=a.n(s),r=a(12),c=a.n(r),o=a(198),l=a.n(o),d=a(179);function m(e){var t=e.description,a=e.lang,s=e.meta,r=e.keywords,c=e.title;return i.a.createElement(d.b,{query:f,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(s)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var f="1025518380"},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Joel Å",description:"Blog and website.",author:"me@joelaa.com"}}}}},194:function(e,t,a){"use strict";var n=a(195),s=a(0),i=a.n(s),r=a(12),c=a.n(r),o=a(179),l=a(184),d=a(185),m=a(186),f=(a(193),a(187)),u=a.n(f),p=a(200),b=a.n(p),g=function(e){var t=e.children;return i.a.createElement(o.b,{query:"3382715448",render:function(e){return i.a.createElement("div",{className:u.a.blogPage},i.a.createElement(l.a,{siteTitle:e.siteInfo.siteMetadata.title,siteSections:e.siteSections,css:u.a}),i.a.createElement(d.a,{data:e.me,siteTitle:e.siteInfo.siteMetadata.title,css:b.a}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0",paddingTop:0}},t),i.a.createElement(m.a,{data:e.me}))},data:n})};g.propTypes={children:c.a.node.isRequired},t.a=g},195:function(e){e.exports={data:{siteInfo:{siteMetadata:{title:"Joel Å"}},siteSections:{edges:[{node:{name:"Portfolio"}},{node:{name:"Education"}},{node:{name:"Experience"}},{node:{name:"Skills"}},{node:{name:"Blog"}}]},me:{contentful_id:"15jwOBqpxqSAOy2eOO4S0m",name:"Joel Å",title:"Systems Developer",email:"info@joelaa.com",github:"joelbits",shortBio:{shortBio:"Hi,\n\nI'm Joel - a Swedish working Systems Developer and Computer Science student. 💻🔬",childMarkdownRemark:{html:"<p>Hi,</p>\n<p>I'm Joel - a Swedish working Systems Developer and Computer Science student. 💻🔬</p>"}},image:{fluid:{srcSetWebp:"//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=175&h=175&q=50&fm=webp 175w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=350&h=350&q=50&fm=webp 350w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=700&h=700&q=50&fm=webp 700w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=1050&h=1050&q=50&fm=webp 1050w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=1400&h=1400&q=50&fm=webp 1400w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=2100&h=2100&q=50&fm=webp 2100w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=3024&h=3024&q=50&fm=webp 3024w",tracedSVG:"data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='400'%3e%3cpath%20d='M196%2029c-9%203-14%206-12%206l2%202-1%202c-2%200-3%206-1%207l2%203c0%202%203%206%204%206%203%200%204%203%203%205-2%202-2%203%201%206s3%2010%201%2011c-1%201-2%203-2%208%200%209-2%2011-10%2010-6%200-7%200-9%202s-2%202%201%202l2%201-3%203-4%203c0%201%206%202%208%200%200-1%201-1%202%202l2%203v6c-1%202-1%202%202%202%205-1%208-3%2011-8%205-8%209-8%207%202a543%20543%200%200%200-6%2023l-1%201-2%201h-3c-1%201-1%201%201%202%203%200%203%202%201%206v4c1%202-8%203-13%202-2%200-3%200-3%203s1%204%204%202c2-2%208-1%2012%201%202%203%202%203%201%204-3%201-3%208%200%2010%203%203%200%209-5%2011-2%201-2%201%202%205%205%205%205%205%204%209-1%209-1%209%203%208l4%201%202%203%201%202c-2%201-2%205-1%205l4-2%2018-14c6-6%207-6%204%200l-3%205-3%205-4%205%202%207c3%209%203%209-4%2024a509%20509%200%200%200-31%2098l-7-28a267771%20267771%200%200%200-17-129c-1%203-2%203-8%205h-5l-4%202c0%201-8%209-11%2010a449%20449%200%200%200-35%2013c-6%202-9%205-10%2014a265%20265%200%200%201-12%2038c-1%207-5%209-12%205l-7-3-22%203-3%202v12h3c2%200%204%201%205%203%202%204%205%205%2011%203%204%200%204-1%205-4%201-4%203-4%205%200%201%202%202%202%205%202%206%200%206%205%200%2026-8%2023-8%2024-3%2028l4%204%202-2%203-2c4%200%2031%2013%2030%2014l2%204%203%205%201%203%201%202c-1%202-1%203%201%204l4%203c2%202%206%202%207%201h10c4%202%204%201%203%204s-1%203%206%205a201%20201%200%200%200%20198-47l3-3v-39a364%20364%200%200%200-2-77c-2-3-3-10-1-34a29986%2029986%200%200%200%206-105l2-14v-7l-9-9-8-8-1%2023a94431%2094431%200%200%201-2%201l1-25-2-2-2-2-1%209-1%2026c0%2017-3%20102-5%20122%200%2011-1%2013-6%209-2-2-3-3-2-4l-1-2c-1%201-1%200-1-1s-2-4-3-3v-1c0-2%200-2-1-1-2%200-2%200-3-2%200-2-1-3-3-1h-1v1l-1%201h-1c0%202-5%202-8%200l-3-1-1-1v-1l-10-3c-9-3-15-8-18-13-2-3-5-4-4-1h-2c-2-2-2-2-4-1-1%201-1%201-1-12%201-20%203-28%206-27%205%201%2010-10%2011-24a19943%2019943%200%200%200%200-16c-2%200-2-2-2-11l-1-18c-8-29-35-46-61-38m164%2055l-1%2036a5339%205339%200%200%201-6%20197l-1%2013%203-4c6-7%2019-28%2025-38a200%20200%200%200%200-20-207v3M12%20135v2c-1%200-2%201-1%202l-1%201-1%201-1%204c-1%203%200%207%202%206l1-1%203-3c4-1%204-3%203-8-1-3-1-4-2-3h-1l-2-2v1m159%2058c1%204%204%2011%209%2017l5%207%203%202c3%201%203%202%205%209l3%207c2%200%203-3%203-7v-7c1-2%201-3-1-4l-2-3-7-7c-10-8-12-9-15-13s-3-4-3-1'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH5AkUCxYZ58yjewAABFRJREFUOMttlctPG1cUxr952EyMwWAaQLbqqKRpxENVm1Kpm0osUokFUlFVJNRFu0ZqdvwB3ZEFUhZRxaobFi0IoSKlVQniUZKwCKHhEUzTEAoYv4Jf+DGel8fTc68wipqMNJ65M/f+5jvfOfdYwFuO4+NjRZblIbfbPUjXXkEQAux5tVqNl8vlDcdx5izLmuno6ND/v1Z4fRAOh6EoyjCd43QGCQiCIfz0CZ7thvHetev46MYNEBCapsV0XR81TXOqu7v7giHVbra2tqS6urofPR7PbTob6R6kDtmTA2wv/4HNjSdYefAQ/hY/rn1wHZIkNRL468nJybZQKDS/s7PjMI7IftbX19mEu6RqhGCowZh8STvDFb8Pne/40OIGFhfm+Tumns0llSM9PT13x8bGcAEURXG4BnO5XGzMQ7VNHaWzDM7OclDqXOShjVIuA9u2mQDULPH5fCOrq6vDnLW4uMgSMF5TVoOxwyyr0PI5ZPJ5PI/GYRHIKeXBXrN5TCklioNp7fjAwIAiHx4eDlHmggxQKBT4l9lEZnwmnUIDHHR3dOCvrV34JBG+0FXE4wl4vV4+h5LC19AHgsQZkmkwyGA0QKVS4ZNY2KlUCqVSCa1qkRJzAoMWao6ND3s+5tXAICwSpvDcNjYelJuamnrb2tr4g/r6emYyisUi0uk0h9tKAxQP+SoJKJcMaLqGPFnwmjI+j13p7BXpRYAB+GLyiKnM5XIcmjzNoY6AtuhQUmS0XL6MmV/vYfXBGoqknmrxQuU5MCA3NzeD6ghMJYMxf1TdQfifBBKvMni3vRXusoXPb/Zj5cUhjjaXkEicYf8wie7Oq5DFKl9XC1um7MQpw6FsNovGxkYs/fkYC0uPoKoltPhbUYELn375LbK6hb17P0Bg3skuZDJpLC3H4NgagoFgLey4aBjGBksA84Ml48X+EU6TUR6+Tn6l0xl42wM4zRSQfJWHW/ZQFbhRMQ3yUeOeM/g5cEMmuXNHR0dfHRwcQBBlvPz3mApFILibfMojEo1SjV3CwuJD+ihLjoveKVCLOUiktGKUuY/nwDmRMjtDamKRSASP1zeRy6bgkMlO1YGulXESiaJQLOHpVpgWyARxo5BP8U3G5hGp5mGMwDNiX1+fTm1otL+/H8HgFVKj8CakGxosy0Q0FsXOs+dUkwX+XBBEWIZO2ffS1jTAOgJtW1ZGo7Ozszrfy/Rgivyb2N17CYN8MwwVFk22Kxbt4zyWVx6hQnCTQAap9ja0ENBDnYOXCkvmBPXQqYvm0NXVhWQicasz2DRx85P3Yao52JbFfWHh3J//HTaFZ1kE1Ito8rfxziewflR1Jvb29m5tb2+/2WBP7/8CR3EN3/lpenx67e8gWyTKIky9DE+Dn64qJUFDe6iTRRJTi+lRVc1MJWORt3fs2vH9d98onZ99MfTz9G+DhqH3SpIcYLuBwo673Jc2tHJhTjeNmf3w2ht/Af8B2jBTEzxBn4IAAAAASUVORK5CYII=",aspectRatio:1,src:"//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=700&q=50",srcSet:"//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=175&h=175&q=50 175w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=350&h=350&q=50 350w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=700&h=700&q=50 700w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=1050&h=1050&q=50 1050w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=1400&h=1400&q=50 1400w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=2100&h=2100&q=50 2100w,\n//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=3024&h=3024&q=50 3024w",srcWebp:"//images.ctfassets.net/9j3tdrfq8k7p/2jRAs1KsdKPmpLwCWvKtdy/b01ef9f5c4d6be13e6a30fcbfe9bceb6/20191123_141909.jpg.png?w=700&q=50&fm=webp",sizes:"(max-width: 700px) 100vw, 700px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-91dc59bee4cf709261ad.js.map