  !function(e,n,t,r){
  function o(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var t=n.getElementsByTagName("script")[0],r=n.createElement("script");r.async=!0,r.src=e.url,t.parentNode.insertBefore(r,t)}}catch(e){}}var s,p,a,i=[],c=[];e[t]={init:function(){s=arguments;var e={then:function(n){return c.push({type:"t",next:n}),e},catch:function(n){return c.push({type:"c",next:n}),e}};return e},on:function(){i.push(arguments)},render:function(){p=arguments},destroy:function(){a=arguments}},        e.__onWebMessengerHostReady__=function(n){if(delete e.__onWebMessengerHostReady__,e[t]=n,s)for(var r=n.init.apply(n,s),o=0;o<c.length;o++){var u=c[o];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&n.render.apply(n,p),a&&n.destroy.apply(n,a);for(o=0;o<i.length;o++)n.on.apply(n,i[o])};var u=new XMLHttpRequest;u.addEventListener("load",o), u.addEventListener("load", s), u.open("GET", r+"/loader.json", !0),u.responseType = "json", u.send()
    }(window, document, "Bots", "https://soarbotsdkclient.herokuapp.com/client_sdk_js");

  var keys = Object.keys(localStorage);
  for(var i = 0; i < keys.length; i++){
    localStorage.removeItem(keys[i]);
  }
  Bots.destroy();

  Bots.init({ appId: '5beee04588adec0022306582',
        businessName: 'Oracle Digital Assistant',
		fixedIntroPane: true,
        introductionText: 'Mobile Cloud Enterprise',
        businessIconUrl: 'https://soarbotsdkclient.herokuapp.com/images/botFace.svg',
        customColors: {
              brandColor: '65758e',
			  conversationColor: '65758e',
              actionColor: '65758e',
        },
        customText: {
            headerText:'Easy Adopt',
			introductionText: 'Oracle Digital Assistant for SaaS'
        }
  });
