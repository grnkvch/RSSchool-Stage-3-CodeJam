(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,t,n){"use strict";n.r(t);n(159),n(74),n(75);var a=n(7),r=n.n(a),i=n(51),c=n.n(i),o=n(0),l=n.n(o),u=n(154),s=n(145),d=(n(239),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return console.error(this.props),this.props.items?this.props.items.length?l.a.createElement("ul",{class:"arcitechList"},this.props.items.map(function(e){return l.a.createElement(s.Link,{key:e.node.id,to:e.node.frontmatter.path},l.a.createElement("li",null,e.node.frontmatter.name))})):l.a.createElement("li",null,this.props.t("srchAnotherLanguage")):l.a.createElement("li",null,this.props.t("srchNoResults"))},t}(l.a.Component)),m=n(158);n(178),n(240);n.d(t,"pageQuery",function(){return p});var h=function(e){function t(t){var n,a=t.data,r=t.t;return(n=e.call(this,{data:a,t:r})||this).t=r,n.data=a,n.state={text:""},n.data.allJavascriptFrontmatter?n.state.items=n.data.allJavascriptFrontmatter.edges:n.state.items=[],n.handleChange=n.handleChange.bind(c()(c()(n))),n}r()(t,e);var n=t.prototype;return n.render=function(){return l.a.createElement(m.a,null,l.a.createElement("h2",null,this.t("srchTitle")),l.a.createElement("input",{type:"search",placeholder:this.t("srchPlaceholder"),onChange:this.handleChange}),l.a.createElement(d,{items:this.state.items,t:this.t}))},n.handleChange=function(e){if(this.data.allJavascriptFrontmatter){var t=this.data.allJavascriptFrontmatter.edges.filter(function(t){return!e.target.value||t.node.frontmatter.name.concat(t.node.frontmatter.birthPlace).toLowerCase().includes(e.target.value.toLowerCase())});t.length||(t=null),this.setState({items:t})}},t}(l.a.Component),p=(t.default=Object(s.withI18next)()(Object(u.withNamespaces)()(h)),"1503326197")},146:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(143),l=n.n(o);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(146),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},153:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(53),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},155:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(154),l=n(145),u=(n(32),function(e){var t=e.changeLng,n=e.lng,a=e.availableLngs;return r.a.createElement("select",{onChange:function(e){return t(e.target.value)}},a.map(function(e){return r.a.createElement("option",{key:e,selected:n===e},e)}),";")}),s=function(e){return r.a.createElement(l.Language,null,function(t){return r.a.createElement(u,Object.assign({},e,t))})},d=(n(157),function(e){var t=e.t;return r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{className:"headLogo"},r.a.createElement(l.Link,{to:"/"},t("headTitle"))),r.a.createElement("nav",{className:"navHeader"},r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/"},t("headMain"))),r.a.createElement("div",null,r.a.createElement(l.Link,{to:"/search"},t("headToList")))),r.a.createElement("div",{style:{position:"absolute",top:0,left:0}},r.a.createElement(s,null))))}),m=(n(155),function(e){var t=e.children,n=(e.data,e.t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Head,{hreflang:!0},r.a.createElement("title",null,n("headTitle")),r.a.createElement("meta",{name:"description",content:"Architects of Belarus"}),r.a.createElement("meta",{name:"keywords",content:"Architects, Belarus"})),r.a.createElement(d,{t:n}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))});m.propTypes={children:c.a.node.isRequired};t.a=Object(o.withNamespaces)()(m)},159:function(e,t,n){var a=n(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},178:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-search-js-45f8456dfa117b9b42f4.js.map