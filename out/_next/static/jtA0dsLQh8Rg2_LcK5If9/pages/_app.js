(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{123:function(e,t,n){e.exports=n(228)},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SocialProfileJsonLd=t.ProductJsonLd=t.LogoJsonLd=t.LocalBusinessJsonLd=t.CourseJsonLd=t.BreadcrumbJsonLd=t.BlogJsonLd=t.ArticleJsonLd=void 0;var r=c(n(230)),a=c(n(244)),o=c(n(245)),i=c(n(246)),u=c(n(247)),l=c(n(248)),s=c(n(249)),d=c(n(250)),p=c(n(251));function c(e){return e&&e.__esModule?e:{default:e}}t.default=r.default,t.ArticleJsonLd=a.default,t.BlogJsonLd=i.default,t.BreadcrumbJsonLd=o.default,t.CourseJsonLd=u.default,t.LocalBusinessJsonLd=l.default,t.LogoJsonLd=s.default,t.ProductJsonLd=d.default,t.SocialProfileJsonLd=p.default},18:function(e,t,n){e.exports=n(122)},227:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(270),{page:e.exports.default}})},228:function(e,t,n){"use strict";var r=n(25),a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=k,t.Container=t.default=void 0;var o=a(n(51)),i=a(n(52)),u=a(n(229)),l=a(n(10)),s=a(n(11)),d=a(n(21)),p=a(n(22)),c=a(n(23)),f=a(n(17)),g=r(n(0)),m=a(n(2)),h=n(30),y=n(44),b=function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,(0,p.default)(t).apply(this,arguments))}var n;return(0,c.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,y.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=k(t);return g.default.createElement(v,null,g.default.createElement(n,(0,u.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:(n=(0,i.default)(o.default.mark(function e(t){var n,r,a;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,h.loadGetInitialProps)(n,r);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(g.Component);t.default=b,(0,f.default)(b,"childContextTypes",{headManager:m.default.object,router:m.default.object});var v=function(e){function t(){return(0,l.default)(this,t),(0,d.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(g.Component);t.Container=v;var _=(0,h.execOnce)(function(){0});function k(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return _(),r},get pathname(){return _(),t},get asPath(){return _(),n},back:function(){_(),e.back()},push:function(t,n){return _(),e.push(t,n)},pushTo:function(t,n){_();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return _(),e.replace(t,n)},replaceTo:function(t,n){_();var r=n?t:null,a=n||t;return e.replace(r,a)}}}},229:function(e,t,n){var r=n(87);function a(){return e.exports=a=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}e.exports=a},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=l(n(18)),o=l(n(2)),i=l(n(0)),u=l(n(243));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));if(!e.config)throw new Error("[next-seo] You must supply an SEO configuration");return n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"render",value:function(){var e=this.props.config;return i.default.createElement(a.default,null,(0,u.default)(e))}}]),t}();s.propTypes={config:o.default.object.isRequired},t.default=s},24:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return{__html:e}}},243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};var i={templateTitle:null,openGraph:{defaultImageHeight:null,defaultImageWidth:null}};t.default=function(e){var t=[];if(e.titleTemplate&&(i.templateTitle=e.titleTemplate),e.title){var n=e.title;i.templateTitle&&(n=i.templateTitle.replace(/%s/g,function(){return n})),t.push(o.default.createElement("title",{key:"title"},n))}if(e.noindex?(t.push(o.default.createElement("meta",{key:"robots",name:"robots",content:"noindex,nofollow"})),t.push(o.default.createElement("meta",{key:"googlebot",name:"googlebot",content:"noindex,nofollow"}))):(t.push(o.default.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(o.default.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(o.default.createElement("meta",{key:"description",name:"description",content:e.description})),e.hasOwnProperty("twitter")&&(e.twitter.cardType&&t.push(o.default.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(o.default.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(o.default.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.hasOwnProperty("openGraph")){if(e.openGraph.url&&t.push(o.default.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url})),e.openGraph.type){var r=e.openGraph.type.toLowerCase();t.push(o.default.createElement("meta",{key:"og:type",property:"og:type",content:r})),"profile"===r&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(o.default.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(o.default.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(o.default.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(o.default.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===r&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,n){t.push(o.default.createElement("meta",{key:"book:author:0"+n,property:"book:author",content:e}))}),e.openGraph.book.isbn&&t.push(o.default.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(o.default.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,n){t.push(o.default.createElement("meta",{key:"book:tag:0"+n,property:"book:tag",content:e}))})):"article"===r&&e.openGraph.article&&(e.openGraph.article.publishedTime&&t.push(o.default.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(o.default.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(o.default.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,n){t.push(o.default.createElement("meta",{key:"article:author:0"+n,property:"article:author",content:e}))}),e.openGraph.article.section&&t.push(o.default.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,n){t.push(o.default.createElement("meta",{key:"article:tag:0"+n,property:"article:tag",content:e}))}))}e.openGraph.title&&t.push(o.default.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title})),e.openGraph.description&&t.push(o.default.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description})),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach(function(n,r){t.push(o.default.createElement("meta",{key:"og:image:0"+r,property:"og:image",content:n.url})),n.alt&&t.push(o.default.createElement("meta",{key:"og:image:alt0"+r,property:"og:image:alt",content:n.alt})),n.width?t.push(o.default.createElement("meta",{key:"og:image:width0"+r,property:"og:image:width",content:n.width})):(i.openGraph.defaultImageWidth||e.openGraph.defaultImageWidth)&&(e.openGraph.defaultImageWidth&&(i.openGraph.defaultImageWidth=e.openGraph.defaultImageWidth),t.push(o.default.createElement("meta",{key:"og:image:width0"+r,property:"og:image:width",content:i.openGraph.defaultImageWidth}))),n.height?t.push(o.default.createElement("meta",{key:"og:image:height"+r,property:"og:image:height",content:n.height})):(i.openGraph.defaultImageHeight||e.openGraph.defaultImageHeight)&&(e.openGraph.defaultImageHeight&&(i.openGraph.defaultImageHeight=e.openGraph.defaultImageHeight),t.push(o.default.createElement("meta",{key:"og:image:height"+r,property:"og:image:height",content:i.openGraph.defaultImageHeight})))}),e.openGraph.locale&&t.push(o.default.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(o.default.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(o.default.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),t}},244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(2)),o=u(n(18)),i=u(n(24));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.url,n=e.title,a=e.images,u=void 0===a?[]:a,l=e.datePublished,s=e.dateModified,d=void 0===s?null:s,p=e.authorName,c=e.description,f=e.publisherName,g=e.publisherLogo,m='{\n    "@context": "http://schema.org",\n    "@type": "Article",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'+t+'"\n    },\n    "headline": "'+n+'",\n    "image": [\n      '+u.map(function(e){return'"'+e+'"'})+'\n     ],\n    "datePublished": "'+l+'",\n    "dateModified": "'+(d||l)+'",\n    "author": {\n      "@type": "Person",\n      "name": "'+p+'"\n    },\n    "publisher": {\n      "@type": "Organization",\n      "name": "'+f+'",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "'+g+'"\n      }\n    },\n    "description": "'+c+'"\n  }';return r.default.createElement(o.default,null,r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(m),key:"jsonld-article"}))};l.defaultProps={dateModified:null},l.propTypes={url:a.default.string.isRequired,title:a.default.string.isRequired,images:a.default.array.isRequired,datePublished:a.default.string.isRequired,dateModified:a.default.string,authorName:a.default.string.isRequired,publisherName:a.default.string.isRequired,publisherLogo:a.default.string.isRequired,description:a.default.string.isRequired},t.default=l},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(2)),o=u(n(18)),i=u(n(24));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.itemListElements,n='{\n    "@context": "http://schema.org",\n    "@type": "BreadcrumbList",\n    "itemListElement": [\n      '+(void 0===t?[]:t).map(function(e){return'{\n        "@type": "ListItem",\n        "position": '+e.position+',\n        "name": "'+e.name+'",\n        "item": "'+e.item+'"\n      }'})+"\n     ]\n  }";return r.default.createElement(o.default,null,r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(n),key:"jsonld-breadcrumb"}))};l.propTypes={itemListElements:a.default.arrayOf(a.default.shape({position:a.default.number.isRequired,name:a.default.string.isRequired,item:a.default.string.isRequired})).isRequired},t.default=l},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(2)),o=u(n(18)),i=u(n(24));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.url,n=e.title,a=e.images,u=void 0===a?[]:a,l=e.datePublished,s=e.dateModified,d=void 0===s?null:s,p=e.authorName,c=e.description,f='{\n    "@context": "http://schema.org",\n    "@type": "Blog",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'+t+'"\n    },\n    "headline": "'+n+'",\n    "image": [\n      '+u.map(function(e){return'"'+e+'"'})+'\n     ],\n    "datePublished": "'+l+'",\n    "dateModified": "'+(d||l)+'",\n    "author": {\n      "@type": "Person",\n      "name": "'+p+'"\n    },\n    "description": "'+c+'"\n  }';return r.default.createElement(o.default,null,r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(f),key:"jsonld-blog"}))};l.defaultProps={dateModified:null},l.propTypes={url:a.default.string.isRequired,title:a.default.string.isRequired,images:a.default.array.isRequired,datePublished:a.default.string.isRequired,dateModified:a.default.string,authorName:a.default.string.isRequired,description:a.default.string.isRequired},t.default=l},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(2)),o=u(n(18)),i=u(n(24));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.courseName,n=e.description,a=e.providerName,u=e.providerUrl,l='{\n    "@context": "http://schema.org",\n    "@type": "Course",\n    "name": "'+t+'",\n    "description": "'+n+'",\n    "provider": {\n      "@type": "Organization",\n      "name": "'+a+'"'+(u?',\n      "sameAs": "'+u+'"':"")+"\n    }\n  }";return r.default.createElement(o.default,null,r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(l),key:"jsonld-course"}))};l.defaultProps={providerUrl:null},l.propTypes={courseName:a.default.string.isRequired,providerName:a.default.string.isRequired,providerUrl:a.default.string,description:a.default.string.isRequired},t.default=l},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(2)),o=u(n(18)),i=u(n(24));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.type,n=e.id,a=e.name,u=e.description,l=e.url,s=e.telephone,d=e.address,p=e.geo,c=e.images,f='{\n    "@context": "http://schema.org",\n    "@type": "'+t+'",\n    "@id": "'+n+'",\n    '+(u?'"description": "'+u+'",':"")+"\n    "+(l?'"url": "'+l+'",':"")+"\n    "+(s?'"telephone": "'+s+'",':"")+"\n    "+function(e){return'\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "'+e.streetAddress+'",\n    "addressLocality": "'+e.addressLocality+'",\n    '+(e.addressRegion?'"addressRegion": "'+e.addressRegion+'",':"")+'\n    "postalCode": "'+e.postalCode+'",\n    "addressCountry": "'+e.addressCountry+'"\n  },\n'}(d)+"\n    "+(p?""+function(e){return'\n  "geo": {\n    "@type": "GeoCoordinates",\n    "latitude": "'+e.latitude+'",\n    "longitude": "'+e.longitude+'"\n  },\n'}(p):"")+"\n    "+function(e){return e.length?'"image": ['+e.map(function(e){return'"'+e+'"'})+"],":""}(c)+'\n    "name": "'+a+'"\n  }';return r.default.createElement(o.default,null,r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(f),key:"jsonld-local-business"}))};l.defaultProps={type:"LocalBusiness",description:null,url:null,telephone:null,images:[],geo:null},l.propTypes={type:a.default.string,id:a.default.string.isRequired,name:a.default.string.isRequired,description:a.default.string,url:a.default.string,telephone:a.default.string,address:a.default.shape({streetAddress:a.default.string.isRequired,addressLocality:a.default.string.isRequired,addressRegion:a.default.string,postalCode:a.default.string.isRequired,addressCountry:a.default.string.isRequired}).isRequired,geo:a.default.shape({latitude:a.default.string.isRequired,longitude:a.default.string.isRequired}),images:a.default.arrayOf(a.default.string)},t.default=l},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(2)),o=u(n(18)),i=u(n(24));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t='{\n    "@context": "http://schema.org",\n    "@type": "Organization",\n    "url": "'+e.url+'",\n    "logo": "'+e.logo+'"\n  }';return r.default.createElement(o.default,null,r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(t),key:"jsonld-logo"}))};l.propTypes={url:a.default.string.isRequired,logo:a.default.string.isRequired},t.default=l},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(2)),o=u(n(18)),i=u(n(24));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.productName,n=e.images,a=void 0===n?[]:n,u=e.description,l=e.sku,s=e.gtin8,d=e.gtin13,p=e.gtin14,c=e.mpn,f=e.brand,g=e.reviews,m=void 0===g?[]:g,h=e.aggregateRating,y=e.offers,b='{\n    "@context": "http://schema.org/",\n    "@type": "Product",\n    '+function(e){return e.length?'"image": ['+e.map(function(e){return'"'+e+'"'})+"],":""}(a)+"\n    "+(u?'"description": "'+u+'",':"")+"\n    "+(c?'"mpn": "'+c+'",':"")+"\n    "+(l?'"sku": "'+l+'",':"")+"\n    "+(s?'"gtin8": "'+s+'",':"")+"\n    "+(d?'"gtin13": "'+d+'",':"")+"\n    "+(p?'"gtin14": "'+p+'",':"")+"\n    "+(f?function(e){return'\n  "brand": {\n      "@type": "Thing",\n      "name": "'+e+'"\n    },\n'}(f):"")+"\n    "+(m.length?function(e){return'\n"review": [\n  '+e.map(function(e){return'{\n      "@type": "Review",\n      '+(e.datePublished?'"datePublished": "'+e.datePublished+'",':"")+"\n      "+(e.reviewBody?'"reviewBody": "'+e.reviewBody+'",':"")+"\n      "+(e.name?'"name": "'+e.name+'",':"")+"\n      "+((t=e.reviewRating)?'"reviewRating": {\n          "@type": "Rating",\n          '+(t.bestRating?'"bestRating": "'+t.bestRating+'",':"")+"\n          "+(t.worstRating?'"worstRating": "'+t.worstRating+'",':"")+'\n          "ratingValue": "'+t.ratingValue+'"\n        },':"")+'\n      "author": "'+e.author+'"\n  }';var t})+"],"}(m):"")+"\n    "+(h?function(e){return'\n  "aggregateRating": {\n      "@type": "AggregateRating",\n      "ratingValue": "'+e.ratingValue+'",\n      "reviewCount": "'+e.reviewCount+'"\n    },\n'}(h):"")+"\n    "+(y?function(e){return'\n  "offers": {\n    "@type": "Offer",\n    "priceCurrency": "'+e.priceCurrency+'",\n    '+(e.priceValidUntil?'"priceValidUntil": "'+e.priceValidUntil+'",':"")+"\n    "+(e.itemCondition?'"itemCondition": "'+e.itemCondition+'",':"")+"\n    "+(e.availability?'"availability": "'+e.availability+'",':"")+"\n    "+(e.seller?'\n      "seller": {\n      "@type": "Organization",\n      "name": "'+e.seller.name+'"\n    },\n    ':"")+'\n    "price": "'+e.price+'"\n  },\n'}(y):"")+'\n    "name": "'+t+'"\n  }';return r.default.createElement(o.default,null,r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(b),key:"jsonld-product"}))};l.defaultProps={images:[],description:null,brand:null,reviews:[],aggregateRating:null,offers:null,sku:null,gtin8:null,gtin13:null,gtin14:null,mpn:null},l.propTypes={productName:a.default.string.isRequired,images:a.default.arrayOf(a.default.string),description:a.default.string,brand:a.default.string,reviews:a.default.arrayOf(a.default.shape({author:a.default.string.isRequired,datePublished:a.default.string,reviewBody:a.default.string,name:a.default.string,reviewRating:a.default.shape({bestRating:a.default.string,ratingValue:a.default.string.isRequired,worstRating:a.default.string})})),aggregateRating:a.default.shape({ratingValue:a.default.string.isRequired,reviewCount:a.default.string.isRequired}),offers:a.default.shape({price:a.default.string.isRequired,priceCurrency:a.default.string.isRequired,priceValidUntil:a.default.string,itemCondition:a.default.string,availability:a.default.string,seller:a.default.shape({name:a.default.string.isRequired})}),sku:a.default.string,gtin8:a.default.string,gtin13:a.default.string,gtin14:a.default.string,mpn:a.default.string},t.default=l},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(0)),a=u(n(2)),o=u(n(18)),i=u(n(24));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.type,n=e.name,a=e.url,u=e.sameAs,l='{\n    "@context": "http://schema.org",\n    "@type": "'+t+'",\n    "name": "'+n+'",\n    "url": "'+a+'",\n    "sameAs": [\n      '+(void 0===u?[]:u).map(function(e){return'"'+e+'"'})+"\n     ]\n  }";return r.default.createElement(o.default,null,r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:(0,i.default)(l),key:"jsonld-social"}))};l.propTypes={type:a.default.string.isRequired,name:a.default.string.isRequired,url:a.default.string.isRequired,sameAs:a.default.array.isRequired},t.default=l},270:function(e,t,n){"use strict";n.r(t);var r=n(123),a=n.n(r),o=n(124),i=n.n(o),u=n(0),l=n.n(u),s={title:"Crossword | The Chicago Maroon",description:"Play The Chicago Maroon's Crossword online, free of charge.",openGraph:{type:"website",locale:"en_US",url:"https://games.chicagomaroon.com/",title:"Crossword | The Chicago Maroon",description:"Play The Chicago Maroon's Crossword online, free of charge.",defaultImageWidth:1200,defaultImageHeight:1200,images:[{url:"https://www.example.ie/og-image-01.jpg",width:800,height:600,alt:"Og Image Alt"}],site_name:"MaroonCrossword"},twitter:{handle:"@chicagomaroon",site:"@chicagomaroon",cardType:"summary_large_image"}},d=n(15),p=n(1);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return y});var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,m(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a.a),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{theme:d.c},l.a.createElement(t,n)),l.a.createElement(d.a,null),l.a.createElement(i.a,{config:s}))}}])&&f(n.prototype,r),o&&f(n,o),t}()}},[[227,1,0]]]);