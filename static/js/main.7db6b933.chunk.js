(this["webpackJsonpreact-apollo"]=this["webpackJsonpreact-apollo"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(9),c=s.n(r),i=(s(15),s(2)),o=s(3),h=s(6),l=s(5),u=s(4),d=(s(16),s(17),s(18),s(0)),b=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).business=e.props.business,e}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Business",children:[Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("a",{href:this.business.url,rel:"noopener noreferrer",target:"_blank",children:Object(d.jsx)("img",{src:this.business.imageSrc,alt:this.business.category})})}),Object(d.jsx)("h2",{children:this.business.name}),Object(d.jsxs)("div",{className:"Business-information",children:[Object(d.jsxs)("div",{className:"Business-address",children:[Object(d.jsx)("p",{children:this.business.address}),Object(d.jsx)("p",{children:this.business.city}),Object(d.jsxs)("p",{children:[this.business.state," ",this.business.zipCode]})]}),Object(d.jsxs)("div",{className:"Business-reviews",children:[Object(d.jsx)("h3",{children:this.business.category}),Object(d.jsxs)("h3",{className:"rating",children:[this.business.rating," stars"]}),Object(d.jsxs)("p",{children:[this.business.reviewCount," reviews"]})]})]})]})}}]),s}(a.a.Component),j=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"BusinessList",children:this.props.businesses.map((function(e){return Object(d.jsx)(b,{business:e},e.id)}))})}}]),s}(a.a.Component),p=(s(20),function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).handleTermChange=function(e){n.setState({term:e.target.value})},n.state={term:"",location:"",sortBy:"best_match"},n.sortByOptions={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count",Closer:"distance"},n.handleTermChange=n.handleTermChange.bind(Object(h.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(h.a)(n)),n.handleSearch=n.handleSearch.bind(Object(h.a)(n)),n}return Object(o.a)(s,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var s=e.sortByOptions[t];return Object(d.jsx)("li",{className:e.getSortByClass(s),onClick:e.handleSortByChange.bind(e,s),children:t},s)}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"SearchBar",children:[Object(d.jsx)("div",{className:"SearchBar-sort-options",children:Object(d.jsx)("ul",{children:this.renderSortByOptions()})}),Object(d.jsxs)("div",{className:"SearchBar-fields",children:[Object(d.jsx)("input",{onChange:this.handleTermChange,placeholder:"Search Businesses"}),Object(d.jsx)("input",{onChange:this.handleLocationChange,placeholder:"Where?"})]}),Object(d.jsx)("div",{className:"SearchBar-submit",children:Object(d.jsx)("a",{onClick:this.handleSearch,href:"www.#.com",children:"Let's Go"})})]})}}]),s}(a.a.Component)),O=s(8),v=s.n(O),m=s(10),f={search:function(e,t,s){return Object(m.a)(v.a.mark((function n(){var a,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(s),{headers:{Authorization:"Bearer ".concat("h4Wlcne7eV9gHRIMaUBpOO8EhD9yOfJJxJ4t7bFrK2qtA-sxqiB9DwayY0GIj-_Kv-EkpAAZrFTDZ5jyvh46ta4hTFpbRKngPkopE6a0K7CmgNi9Vs5xObf7opeAYHYx")}});case 2:return a=n.sent,n.next=5,a.json();case 5:if(r=n.sent,n.prev=6,!r.businesses){n.next=11;break}return n.abrupt("return",r.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count,url:e.url}})));case 11:console.log("hello world");case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(6),console.error("Hello World ".concat(n.t0));case 17:case"end":return n.stop()}}),n,null,[[6,14]])})))()}},g=function(e){Object(l.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(h.a)(n)),n}return Object(o.a)(s,[{key:"searchYelp",value:function(e,t,s){var n=this;console.log('You are searching Yelp API for "'.concat(e,'" \ud83d\ude0b, at ').concat(t,', with the "').concat(s,'" sort by option...')),f.search(e,t,s).then((function(e){n.setState({businesses:e})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Apollo Yelp API Project"}),Object(d.jsx)(p,{searchYelp:this.searchYelp}),Object(d.jsx)(j,{businesses:this.state.businesses}),Object(d.jsx)("footer",{children:Object(d.jsx)("span",{children:"This project is reproduced from \xa9Codecademy project Ravenous Yelp clone application"})})]})}}]),s}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.7db6b933.chunk.js.map