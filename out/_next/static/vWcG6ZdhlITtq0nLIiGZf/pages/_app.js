(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{120:function(e,t,n){e.exports=n(226)},129:function(e,t,n){e.exports=n(244)},224:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(270),{page:e.exports.default}})},225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{__html:e}};t.default=a},226:function(e,t,n){"use strict";var a=n(23),r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=k,t.Container=t.default=void 0;var o=r(n(49)),i=r(n(50)),u=r(n(227)),l=r(n(10)),c=r(n(11)),d=r(n(20)),s=r(n(21)),p=r(n(22)),f=r(n(17)),g=a(n(0)),m=r(n(3)),h=n(28),y=n(42),b=function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,(0,s.default)(t).apply(this,arguments))}var n;return(0,p.default)(t,e),(0,c.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,y.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,a=e.pageProps,r=k(t);return g.default.createElement(v,null,g.default.createElement(n,(0,u.default)({},a,{url:r})))}}],[{key:"getInitialProps",value:(n=(0,i.default)(o.default.mark(function e(t){var n,a,r;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,a=t.ctx,e.next=3,(0,h.loadGetInitialProps)(n,a);case 3:return r=e.sent,e.abrupt("return",{pageProps:r});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(g.Component);t.default=b,(0,f.default)(b,"childContextTypes",{headManager:m.default.object,router:m.default.object});var v=function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,(0,s.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(g.Component);t.Container=v;var _=(0,h.execOnce)(function(){0});function k(e){var t=e.pathname,n=e.asPath,a=e.query;return{get query(){return _(),a},get pathname(){return _(),t},get asPath(){return _(),n},back:function(){_(),e.back()},push:function(t,n){return _(),e.push(t,n)},pushTo:function(t,n){_();var a=n?t:null,r=n||t;return e.push(a,r)},replace:function(t,n){return _(),e.replace(t,n)},replaceTo:function(t,n){_();var a=n?t:null,r=n||t;return e.replace(a,r)}}}},227:function(e,t,n){var a=n(85);function r(){return e.exports=r=a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}e.exports=r},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ArticleJsonLd",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"BreadcrumbJsonLd",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"BlogJsonLd",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"CourseJsonLd",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"LocalBusinessJsonLd",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"LogoJsonLd",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ProductJsonLd",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"SocialProfileJsonLd",{enumerable:!0,get:function(){return s.default}}),t.default=void 0;var a=p(n(260)),r=p(n(262)),o=p(n(263)),i=p(n(264)),u=p(n(265)),l=p(n(266)),c=p(n(267)),d=p(n(268)),s=p(n(269));function p(e){return e&&e.__esModule?e:{default:e}}var f=a.default;t.default=f},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(129)),r=u(n(3)),o=u(n(0)),i=u(n(261));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=d(this,s(t).call(this,e)),!e.config)throw new Error("[next-seo] You must supply an SEO configuration");return n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.default.Component),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(t,[{key:"render",value:function(){var e=this.props.config;return o.default.createElement(a.default,null,(0,i.default)(e))}}]),t}();f.propTypes={config:r.default.object.isRequired};var g=f;t.default=g},261:function(e,t,n){"use strict";var a,r=(a=n(0))&&a.__esModule?a:{default:a};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={templateTitle:null,noindex:!1,openGraph:{defaultImageHeight:null,defaultImageWidth:null}},i=function(e){var t=[];if(e.titleTemplate&&(o.templateTitle=e.titleTemplate),e.title){var n=e.title;o.templateTitle&&(n=o.templateTitle.replace(/%s/g,function(){return n})),t.push(r.default.createElement("title",{key:"title"},n))}if(!1===e.noindex?(t.push(r.default.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(r.default.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))):e.noindex||o.noindex||e.dangerouslySetAllPagesToNoIndex?(e.dangerouslySetAllPagesToNoIndex&&(o.noindex=!0),t.push(r.default.createElement("meta",{key:"robots",name:"robots",content:"noindex,nofollow"})),t.push(r.default.createElement("meta",{key:"googlebot",name:"googlebot",content:"noindex,nofollow"}))):(t.push(r.default.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(r.default.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(r.default.createElement("meta",{key:"description",name:"description",content:e.description})),e.hasOwnProperty("twitter")&&(e.twitter.cardType&&t.push(r.default.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(r.default.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(r.default.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.hasOwnProperty("facebook")&&e.facebook.appId&&t.push(r.default.createElement("meta",{key:"fb:app_id",name:"fb:app_id",content:e.facebook.appId})),e.hasOwnProperty("openGraph")){if(e.openGraph.url&&t.push(r.default.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url})),e.openGraph.type){var a=e.openGraph.type.toLowerCase();t.push(r.default.createElement("meta",{key:"og:type",property:"og:type",content:a})),"profile"===a&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(r.default.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(r.default.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(r.default.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(r.default.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===a&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,n){t.push(r.default.createElement("meta",{key:"book:author:0".concat(n),property:"book:author",content:e}))}),e.openGraph.book.isbn&&t.push(r.default.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(r.default.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,n){t.push(r.default.createElement("meta",{key:"book:tag:0".concat(n),property:"book:tag",content:e}))})):"article"===a&&e.openGraph.article&&(e.openGraph.article.publishedTime&&t.push(r.default.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(r.default.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(r.default.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,n){t.push(r.default.createElement("meta",{key:"article:author:0".concat(n),property:"article:author",content:e}))}),e.openGraph.article.section&&t.push(r.default.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,n){t.push(r.default.createElement("meta",{key:"article:tag:0".concat(n),property:"article:tag",content:e}))}))}e.openGraph.title&&t.push(r.default.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title})),e.openGraph.description&&t.push(r.default.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description})),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach(function(n,a){t.push(r.default.createElement("meta",{key:"og:image:0".concat(a),property:"og:image",content:n.url})),n.alt&&t.push(r.default.createElement("meta",{key:"og:image:alt0".concat(a),property:"og:image:alt",content:n.alt})),n.width?t.push(r.default.createElement("meta",{key:"og:image:width0".concat(a),property:"og:image:width",content:n.width})):(o.openGraph.defaultImageWidth||e.openGraph.defaultImageWidth)&&(e.openGraph.defaultImageWidth&&(o.openGraph.defaultImageWidth=e.openGraph.defaultImageWidth),t.push(r.default.createElement("meta",{key:"og:image:width0".concat(a),property:"og:image:width",content:o.openGraph.defaultImageWidth}))),n.height?t.push(r.default.createElement("meta",{key:"og:image:height".concat(a),property:"og:image:height",content:n.height})):(o.openGraph.defaultImageHeight||e.openGraph.defaultImageHeight)&&(e.openGraph.defaultImageHeight&&(o.openGraph.defaultImageHeight=e.openGraph.defaultImageHeight),t.push(r.default.createElement("meta",{key:"og:image:height".concat(a),property:"og:image:height",content:o.openGraph.defaultImageHeight})))}),e.openGraph.locale&&t.push(r.default.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(r.default.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(r.default.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),t};t.default=i},262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(3)),o=u(n(129)),i=u(n(225));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.url,n=e.title,r=e.images,u=void 0===r?[]:r,l=e.datePublished,c=e.dateModified,d=void 0===c?null:c,s=e.authorName,p=e.description,f=e.publisherName,g=e.publisherLogo,m='{\n    "@context": "http://schema.org",\n    "@type": "Article",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'.concat(t,'"\n    },\n    "headline": "').concat(n,'",\n    "image": [\n      ').concat(u.map(function(e){return'"'.concat(e,'"')}),'\n     ],\n    "datePublished": "').concat(l,'",\n    "dateModified": "').concat(d||l,'",\n    "author": {\n      "@type": "Person",\n      "name": "').concat(s,'"\n    },\n    "publisher": {\n      "@type": "Organization",\n      "name": "').concat(f,'",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "').concat(g,'"\n      }\n    },\n    "description": "').concat(p,'"\n  }');return a.default.createElement(o.default,null,a.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(m),key:"jsonld-article"}))};l.defaultProps={dateModified:null},l.propTypes={url:r.default.string.isRequired,title:r.default.string.isRequired,images:r.default.array.isRequired,datePublished:r.default.string.isRequired,dateModified:r.default.string,authorName:r.default.string.isRequired,publisherName:r.default.string.isRequired,publisherLogo:r.default.string.isRequired,description:r.default.string.isRequired};var c=l;t.default=c},263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(3)),o=u(n(129)),i=u(n(225));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.itemListElements,n='{\n    "@context": "http://schema.org",\n    "@type": "BreadcrumbList",\n    "itemListElement": [\n      '.concat((void 0===t?[]:t).map(function(e){return'{\n        "@type": "ListItem",\n        "position": '.concat(e.position,',\n        "name": "').concat(e.name,'",\n        "item": "').concat(e.item,'"\n      }')}),"\n     ]\n  }");return a.default.createElement(o.default,null,a.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(n),key:"jsonld-breadcrumb"}))};l.propTypes={itemListElements:r.default.arrayOf(r.default.shape({position:r.default.number.isRequired,name:r.default.string.isRequired,item:r.default.string.isRequired})).isRequired};var c=l;t.default=c},264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(3)),o=u(n(129)),i=u(n(225));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.url,n=e.title,r=e.images,u=void 0===r?[]:r,l=e.datePublished,c=e.dateModified,d=void 0===c?null:c,s=e.authorName,p=e.description,f='{\n    "@context": "http://schema.org",\n    "@type": "Blog",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'.concat(t,'"\n    },\n    "headline": "').concat(n,'",\n    "image": [\n      ').concat(u.map(function(e){return'"'.concat(e,'"')}),'\n     ],\n    "datePublished": "').concat(l,'",\n    "dateModified": "').concat(d||l,'",\n    "author": {\n      "@type": "Person",\n      "name": "').concat(s,'"\n    },\n    "description": "').concat(p,'"\n  }');return a.default.createElement(o.default,null,a.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(f),key:"jsonld-blog"}))};l.defaultProps={dateModified:null},l.propTypes={url:r.default.string.isRequired,title:r.default.string.isRequired,images:r.default.array.isRequired,datePublished:r.default.string.isRequired,dateModified:r.default.string,authorName:r.default.string.isRequired,description:r.default.string.isRequired};var c=l;t.default=c},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(3)),o=u(n(129)),i=u(n(225));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.courseName,n=e.description,r=e.providerName,u=e.providerUrl,l='{\n    "@context": "http://schema.org",\n    "@type": "Course",\n    "name": "'.concat(t,'",\n    "description": "').concat(n,'",\n    "provider": {\n      "@type": "Organization",\n      "name": "').concat(r,'"').concat(u?',\n      "sameAs": "'.concat(u,'"'):"","\n    }\n  }");return a.default.createElement(o.default,null,a.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(l),key:"jsonld-course"}))};l.defaultProps={providerUrl:null},l.propTypes={courseName:r.default.string.isRequired,providerName:r.default.string.isRequired,providerUrl:r.default.string,description:r.default.string.isRequired};var c=l;t.default=c},266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(3)),o=u(n(129)),i=u(n(225));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.type,n=e.id,r=e.name,u=e.description,l=e.url,c=e.telephone,d=e.address,s=e.geo,p=e.images,f='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "@id": "').concat(n,'",\n    ').concat(u?'"description": "'.concat(u,'",'):"","\n    ").concat(l?'"url": "'.concat(l,'",'):"","\n    ").concat(c?'"telephone": "'.concat(c,'",'):"","\n    ").concat(function(e){return'\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "'.concat(e.streetAddress,'",\n    "addressLocality": "').concat(e.addressLocality,'",\n    ').concat(e.addressRegion?'"addressRegion": "'.concat(e.addressRegion,'",'):"",'\n    "postalCode": "').concat(e.postalCode,'",\n    "addressCountry": "').concat(e.addressCountry,'"\n  },\n')}(d),"\n    ").concat(s?"".concat(function(e){return'\n  "geo": {\n    "@type": "GeoCoordinates",\n    "latitude": "'.concat(e.latitude,'",\n    "longitude": "').concat(e.longitude,'"\n  },\n')}(s)):"","\n    ").concat(function(e){return e.length?'"image": ['.concat(e.map(function(e){return'"'.concat(e,'"')}),"],"):""}(p),'\n    "name": "').concat(r,'"\n  }');return a.default.createElement(o.default,null,a.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(f),key:"jsonld-local-business"}))};l.defaultProps={type:"LocalBusiness",description:null,url:null,telephone:null,images:[],geo:null},l.propTypes={type:r.default.string,id:r.default.string.isRequired,name:r.default.string.isRequired,description:r.default.string,url:r.default.string,telephone:r.default.string,address:r.default.shape({streetAddress:r.default.string.isRequired,addressLocality:r.default.string.isRequired,addressRegion:r.default.string,postalCode:r.default.string.isRequired,addressCountry:r.default.string.isRequired}).isRequired,geo:r.default.shape({latitude:r.default.string.isRequired,longitude:r.default.string.isRequired}),images:r.default.arrayOf(r.default.string)};var c=l;t.default=c},267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(3)),o=u(n(129)),i=u(n(225));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.url,n=e.logo,r='{\n    "@context": "http://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    "logo": "').concat(n,'"\n  }');return a.default.createElement(o.default,null,a.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(r),key:"jsonld-logo"}))};l.propTypes={url:r.default.string.isRequired,logo:r.default.string.isRequired};var c=l;t.default=c},268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(3)),o=u(n(129)),i=u(n(225));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.productName,n=e.images,r=void 0===n?[]:n,u=e.description,l=e.sku,c=e.gtin8,d=e.gtin13,s=e.gtin14,p=e.mpn,f=e.brand,g=e.reviews,m=void 0===g?[]:g,h=e.aggregateRating,y=e.offers,b='{\n    "@context": "http://schema.org/",\n    "@type": "Product",\n    '.concat(function(e){return e.length?'"image": ['.concat(e.map(function(e){return'"'.concat(e,'"')}),"],"):""}(r),"\n    ").concat(u?'"description": "'.concat(u,'",'):"","\n    ").concat(p?'"mpn": "'.concat(p,'",'):"","\n    ").concat(l?'"sku": "'.concat(l,'",'):"","\n    ").concat(c?'"gtin8": "'.concat(c,'",'):"","\n    ").concat(d?'"gtin13": "'.concat(d,'",'):"","\n    ").concat(s?'"gtin14": "'.concat(s,'",'):"","\n    ").concat(f?function(e){return'\n  "brand": {\n      "@type": "Thing",\n      "name": "'.concat(e,'"\n    },\n')}(f):"","\n    ").concat(m.length?function(e){return'\n"review": [\n  '.concat(e.map(function(e){return'{\n      "@type": "Review",\n      '.concat(e.datePublished?'"datePublished": "'.concat(e.datePublished,'",'):"","\n      ").concat(e.reviewBody?'"reviewBody": "'.concat(e.reviewBody,'",'):"","\n      ").concat(e.name?'"name": "'.concat(e.name,'",'):"","\n      ").concat(function(e){return e?'"reviewRating": {\n          "@type": "Rating",\n          '.concat(e.bestRating?'"bestRating": "'.concat(e.bestRating,'",'):"","\n          ").concat(e.worstRating?'"worstRating": "'.concat(e.worstRating,'",'):"",'\n          "ratingValue": "').concat(e.ratingValue,'"\n        },'):""}(e.reviewRating),'\n      "author": "').concat(e.author,'"\n  }')}),"],")}(m):"","\n    ").concat(h?function(e){return'\n  "aggregateRating": {\n      "@type": "AggregateRating",\n      "ratingValue": "'.concat(e.ratingValue,'",\n      "reviewCount": "').concat(e.reviewCount,'"\n    },\n')}(h):"","\n    ").concat(y?function(e){return'\n  "offers": {\n    "@type": "Offer",\n    "priceCurrency": "'.concat(e.priceCurrency,'",\n    ').concat(e.priceValidUntil?'"priceValidUntil": "'.concat(e.priceValidUntil,'",'):"","\n    ").concat(e.itemCondition?'"itemCondition": "'.concat(e.itemCondition,'",'):"","\n    ").concat(e.availability?'"availability": "'.concat(e.availability,'",'):"","\n    ").concat(e.seller?'\n      "seller": {\n      "@type": "Organization",\n      "name": "'.concat(e.seller.name,'"\n    },\n    '):"",'\n    "price": "').concat(e.price,'"\n  },\n')}(y):"",'\n    "name": "').concat(t,'"\n  }');return a.default.createElement(o.default,null,a.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(b),key:"jsonld-product"}))};l.defaultProps={images:[],description:null,brand:null,reviews:[],aggregateRating:null,offers:null,sku:null,gtin8:null,gtin13:null,gtin14:null,mpn:null},l.propTypes={productName:r.default.string.isRequired,images:r.default.arrayOf(r.default.string),description:r.default.string,brand:r.default.string,reviews:r.default.arrayOf(r.default.shape({author:r.default.string.isRequired,datePublished:r.default.string,reviewBody:r.default.string,name:r.default.string,reviewRating:r.default.shape({bestRating:r.default.string,ratingValue:r.default.string.isRequired,worstRating:r.default.string})})),aggregateRating:r.default.shape({ratingValue:r.default.string.isRequired,reviewCount:r.default.string.isRequired}),offers:r.default.shape({price:r.default.string.isRequired,priceCurrency:r.default.string.isRequired,priceValidUntil:r.default.string,itemCondition:r.default.string,availability:r.default.string,seller:r.default.shape({name:r.default.string.isRequired})}),sku:r.default.string,gtin8:r.default.string,gtin13:r.default.string,gtin14:r.default.string,mpn:r.default.string};var c=l;t.default=c},269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(3)),o=u(n(129)),i=u(n(225));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.type,n=e.name,r=e.url,u=e.sameAs,l=void 0===u?[]:u,c='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "name": "').concat(n,'",\n    "url": "').concat(r,'",\n    "sameAs": [\n      ').concat(l.map(function(e){return'"'.concat(e,'"')}),"\n     ]\n  }");return a.default.createElement(o.default,null,a.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(c),key:"jsonld-social"}))};l.propTypes={type:r.default.string.isRequired,name:r.default.string.isRequired,url:r.default.string.isRequired,sameAs:r.default.array.isRequired};var c=l;t.default=c},270:function(e,t,n){"use strict";n.r(t);var a=n(120),r=n.n(a),o=n(259),i=n.n(o),u=n(0),l=n.n(u),c={title:"Crossword | The Chicago Maroon",description:"Play The Chicago Maroon's Crossword online, free of charge.",openGraph:{type:"website",locale:"en_US",url:"https://games.chicagomaroon.com/",title:"Crossword | The Chicago Maroon",description:"Play The Chicago Maroon's Crossword online, free of charge.",defaultImageWidth:1200,defaultImageHeight:628,images:[{url:"https://games.chicagomaroon.com/static/crossword_social.png",width:1200,height:628,alt:"Og Image Alt"}],site_name:"MaroonCrossword"},twitter:{handle:"@chicagomaroon",site:"@chicagomaroon",cardType:"summary_large_image"}},d=n(15),s=n(1);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return y});var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,m(t).apply(this,arguments))}var n,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.a),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{theme:d.c},l.a.createElement(t,n)),l.a.createElement(d.a,null),l.a.createElement(i.a,{config:c}))}}])&&f(n.prototype,a),o&&f(n,o),t}()}},[[224,1,0]]]);