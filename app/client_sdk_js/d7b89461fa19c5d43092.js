webpackJsonp([16,98,99,100,101,102],{833:function(e,a,t){"use strict";function n(e,a,t){t=t||{};var n;return n="string"==typeof o[e]?o[e]:1===a?o[e].one:o[e].other.replace("{{count}}",a),t.addSuffix?t.comparison>0?"over "+n:n+" geleden":n}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var o={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}};e.exports=a.default},834:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(194),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=(0,o.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});a.default=r,e.exports=a.default},835:function(e,a,t){"use strict";function n(e,a,t,n){return o[e]}Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var o={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=a.default},836:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return Number(e)+"e"}Object.defineProperty(a,"__esModule",{value:!0});var r=t(196),u=n(r),d=t(195),s=n(d),i={narrow:["zo","ma","di","wo","do","vr","za"],short:["zon","maa","din","woe","don","vri","zat"],long:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},l={short:["jan","feb","mar","apr","mei","jun","jul","aug","sep","okt","nov","dec"],long:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},f={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},m={ordinalNumber:o,weekday:(0,u.default)(i,"long"),weekdays:(0,s.default)(i,"long"),month:(0,u.default)(l,"long"),months:(0,s.default)(l,"long"),timeOfDay:(0,u.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,s.default)(f,"long")};a.default=m,e.exports=a.default},837:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var o=t(197),r=n(o),u=t(199),d=n(u),s=t(198),i=n(s),l=t(200),f=n(l),m=/^(\d+)(th|st|nd|rd)?/i,c={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},h={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},y={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},g={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},p={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},j={any:[/^a/i,/^p/i]},M={ordinalNumbers:(0,i.default)(m),ordinalNumber:f.default,weekdays:(0,r.default)(c,"long"),weekday:(0,d.default)(h,"any"),months:(0,r.default)(y,"long"),month:(0,d.default)(g,"any"),timesOfDay:(0,r.default)(p,"long"),timeOfDay:(0,d.default)(j,"any")};a.default=M,e.exports=a.default},923:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var o=t(833),r=n(o),u=t(834),d=n(u),s=t(835),i=n(s),l=t(836),f=n(l),m=t(837),c=n(m),h={formatDistance:r.default,formatLong:d.default,formatRelative:i.default,localize:f.default,match:c.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=h,e.exports=a.default}});
//# sourceMappingURL=d7b89461fa19c5d43092.js.map