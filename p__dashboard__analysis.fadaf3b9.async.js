(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"14J3":function(v,l,a){"use strict";var i=a("cIOH"),m=a.n(i),E=a("1GLa")},BMrR:function(v,l,a){"use strict";var i=a("qrJ5");l.a=i.a},DnfT:function(v,l,a){v.exports={"ant-pro-grid-content":"ant-pro-grid-content",wide:"wide"}},FRQA:function(v,l,a){"use strict";var i=a("GNNt"),m=a("wEI+"),E=a("DnfT"),x=a.n(E),j=a("q1tI"),p=a.n(j),t=a("TSYQ"),b=a.n(t),C=a("jYQm"),M=function(O){var A=Object(j.useContext)(C.a),R=O.children,u=O.contentWidth,g=O.className,I=O.style,K=Object(j.useContext)(m.b.ConfigContext),N=K.getPrefixCls,T=O.prefixCls||N("pro"),W=u||A.contentWidth,U="".concat(T,"-grid-content");return p.a.createElement("div",{className:b()(U,g,{wide:W==="Fixed"}),style:I},p.a.createElement("div",{className:"".concat(T,"-grid-content-children")},R))};l.a=M},UXoT:function(v,l,a){v.exports={iconGroup:"antd-pro-pages-dashboard-analysis-style-iconGroup",anticon:"antd-pro-pages-dashboard-analysis-style-anticon",rankingList:"antd-pro-pages-dashboard-analysis-style-rankingList",rankingItemNumber:"antd-pro-pages-dashboard-analysis-style-rankingItemNumber",active:"antd-pro-pages-dashboard-analysis-style-active",rankingItemTitle:"antd-pro-pages-dashboard-analysis-style-rankingItemTitle",salesExtra:"antd-pro-pages-dashboard-analysis-style-salesExtra",currentDate:"antd-pro-pages-dashboard-analysis-style-currentDate",salesCard:"antd-pro-pages-dashboard-analysis-style-salesCard",salesBar:"antd-pro-pages-dashboard-analysis-style-salesBar",salesRank:"antd-pro-pages-dashboard-analysis-style-salesRank",salesCardExtra:"antd-pro-pages-dashboard-analysis-style-salesCardExtra",salesTypeRadio:"antd-pro-pages-dashboard-analysis-style-salesTypeRadio",offlineCard:"antd-pro-pages-dashboard-analysis-style-offlineCard",trendText:"antd-pro-pages-dashboard-analysis-style-trendText",rankingTitle:"antd-pro-pages-dashboard-analysis-style-rankingTitle",salesExtraWrap:"antd-pro-pages-dashboard-analysis-style-salesExtraWrap"}},jCWc:function(v,l,a){"use strict";var i=a("cIOH"),m=a.n(i),E=a("1GLa")},jXcd:function(v,l,a){"use strict";a.r(l);var i=a("14J3"),m=a("BMrR"),E=a("jCWc"),x=a("kPKH"),j=a("qVdP"),p=a("jsC+"),t=a("nKUr"),b=a("lUTK"),C=a("BvKs"),M=a("1OyB"),G=a("vuIU"),O=a("Ji7U"),A=a("LK+K"),R=a("GZ0F"),u=a("q1tI"),g=a.n(u),I=a("FRQA"),K=a("9kvl"),N=a("T2oS"),T=a("W9HT"),W=function(){return Object(t.jsx)("div",{style:{paddingTop:100,textAlign:"center"},children:Object(t.jsx)(T.a,{size:"large"})})},U=a("wd/R"),y=a.n(U);function F(c){return c*1<10?"0".concat(c):c}function B(c){var n=new Date,h=1e3*60*60*24;if(c==="today")return n.setHours(0),n.setMinutes(0),n.setSeconds(0),[y()(n),y()(n.getTime()+(h-1e3))];if(c==="week"){var s=n.getDay();n.setHours(0),n.setMinutes(0),n.setSeconds(0),s===0?s=6:s-=1;var d=n.getTime()-s*h;return[y()(d),y()(d+(7*h-1e3))]}var D=n.getFullYear();if(c==="month"){var f=n.getMonth(),r=y()(n).add(1,"months"),o=r.year(),e=r.month();return[y()("".concat(D,"-").concat(F(f+1),"-01 00:00:00")),y()(y()("".concat(o,"-").concat(F(e+1),"-01 00:00:00")).valueOf()-1e3)]}return[y()("".concat(D,"-01-01 00:00:00")),y()("".concat(D,"-12-31 23:59:59"))]}var z=a("UXoT"),V=a.n(z),J=g.a.lazy(function(){return Promise.all([a.e(0),a.e(4),a.e(5),a.e(8),a.e(50)]).then(a.bind(null,"CqmX"))}),Q=g.a.lazy(function(){return Promise.all([a.e(0),a.e(4),a.e(5),a.e(49),a.e(48)]).then(a.bind(null,"qpEo"))}),X=g.a.lazy(function(){return Promise.all([a.e(0),a.e(2),a.e(4),a.e(5),a.e(46)]).then(a.bind(null,"ceP7"))}),Y=g.a.lazy(function(){return Promise.all([a.e(0),a.e(4),a.e(5),a.e(52),a.e(47)]).then(a.bind(null,"8gNO"))}),Z=g.a.lazy(function(){return Promise.all([a.e(0),a.e(4),a.e(5),a.e(8),a.e(51)]).then(a.bind(null,"vvVX"))}),$=function(c){Object(O.a)(h,c);var n=Object(A.a)(h);function h(){var s;Object(M.a)(this,h);for(var d=arguments.length,D=new Array(d),f=0;f<d;f++)D[f]=arguments[f];return s=n.call.apply(n,[this].concat(D)),s.state={salesType:"all",currentTabKey:"",rangePickerValue:B("year")},s.reqRef=0,s.timeoutId=0,s.handleChangeSalesType=function(r){s.setState({salesType:r.target.value})},s.handleTabChange=function(r){s.setState({currentTabKey:r})},s.handleRangePickerChange=function(r){var o=s.props.dispatch;s.setState({rangePickerValue:r}),o({type:"dashboardAndanalysis/fetchSalesData"})},s.selectDate=function(r){var o=s.props.dispatch;s.setState({rangePickerValue:B(r)}),o({type:"dashboardAndanalysis/fetchSalesData"})},s.isActive=function(r){var o=s.state.rangePickerValue;if(!o)return"";var e=B(r);return!e||!o[0]||!o[1]?"":o[0].isSame(e[0],"day")&&o[1].isSame(e[1],"day")?V.a.currentDate:""},s}return Object(G.a)(h,[{key:"componentDidMount",value:function(){var d=this.props.dispatch;this.reqRef=requestAnimationFrame(function(){d({type:"dashboardAndanalysis/fetch"})})}},{key:"componentWillUnmount",value:function(){var d=this.props.dispatch;d({type:"dashboardAndanalysis/clear"}),cancelAnimationFrame(this.reqRef),clearTimeout(this.timeoutId)}},{key:"render",value:function(){var d=this.state,D=d.rangePickerValue,f=d.salesType,r=d.currentTabKey,o=this.props,e=o.dashboardAndanalysis,P=o.loading,k=e.visitData,w=e.visitData2,q=e.salesData,_=e.searchData,L=e.offlineData,aa=e.offlineChartData,ta=e.salesTypeData,sa=e.salesTypeDataOnline,na=e.salesTypeDataOffline,S;f==="all"?S=ta:S=f==="online"?sa:na;var ea=Object(t.jsxs)(C.a,{children:[Object(t.jsx)(C.a.Item,{children:"\u64CD\u4F5C\u4E00"}),Object(t.jsx)(C.a.Item,{children:"\u64CD\u4F5C\u4E8C"})]}),H=Object(t.jsx)("span",{className:V.a.iconGroup,children:Object(t.jsx)(p.a,{overlay:ea,placement:"bottomRight",children:Object(t.jsx)(R.a,{})})}),la=r||L[0]&&L[0].name;return Object(t.jsx)(I.a,{children:Object(t.jsxs)(g.a.Fragment,{children:[Object(t.jsx)(u.Suspense,{fallback:Object(t.jsx)(W,{}),children:Object(t.jsx)(J,{loading:P,visitData:k})}),Object(t.jsx)(u.Suspense,{fallback:null,children:Object(t.jsx)(Q,{rangePickerValue:D,salesData:q,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:P,selectDate:this.selectDate})}),Object(t.jsxs)(m.a,{gutter:24,style:{marginTop:24},children:[Object(t.jsx)(x.a,{xl:12,lg:24,md:24,sm:24,xs:24,children:Object(t.jsx)(u.Suspense,{fallback:null,children:Object(t.jsx)(X,{loading:P,visitData2:w,searchData:_,dropdownGroup:H})})}),Object(t.jsx)(x.a,{xl:12,lg:24,md:24,sm:24,xs:24,children:Object(t.jsx)(u.Suspense,{fallback:null,children:Object(t.jsx)(Y,{dropdownGroup:H,salesType:f,loading:P,salesPieData:S,handleChangeSalesType:this.handleChangeSalesType})})})]}),Object(t.jsx)(u.Suspense,{fallback:null,children:Object(t.jsx)(Z,{activeKey:la,loading:P,offlineData:L,offlineChartData:aa,handleTabChange:this.handleTabChange})})]})})}}]),h}(u.Component),ra=l.default=Object(K.c)(function(c){var n=c.dashboardAndanalysis,h=c.loading;return{dashboardAndanalysis:n,loading:h.effects["dashboardAndanalysis/fetch"]}})($)},jYQm:function(v,l,a){"use strict";var i=a("q1tI"),m=a.n(i),E=Object(i.createContext)({});l.a=E},kPKH:function(v,l,a){"use strict";var i=a("/kpp");l.a=i.a}}]);
