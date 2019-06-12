
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"105",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.dataLayer.filter(function(a){return\"unifiedPageview\"===a.event});return a.length})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"askoc"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null==",["escape",["macro",2],8,16],"?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)if(\/player\\.vimeo\\.com\/.test(a[b].src))return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)if(\/youtube\\.com\\\/embed\/.test(a[b].src))return!0;return!1})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"askid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"dqi"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"qsrc"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=encodeURIComponent(",["escape",["macro",6],8,16],"),b=\"pv\",c=encodeURIComponent(",["escape",["macro",7],8,16],"),d=encodeURIComponent(",["escape",["macro",8],8,16],"),e=encodeURIComponent(",["escape",["macro",2],8,16],"),f=encodeURIComponent(",["escape",["macro",9],8,16],");return a=[\"https:\/\/www.lifewire.com\/sp.gif?askid\\x3d\",encodeURIComponent(a),\"\\x26type\\x3d\",encodeURIComponent(b),\"\\x26qsrc\\x3d\",encodeURIComponent(d),\"\\x26o\\x3d\",encodeURIComponent(e),\"\\x26dqi\\x3d\",encodeURIComponent(c),\"\\x26useragent\\x3d\",encodeURIComponent(f)].join(\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){filteredKeys=[];for(var a in b)b[a]\u0026\u0026filteredKeys.push(a);arrayToJoin=[];for(a in filteredKeys)arrayToJoin.push(filteredKeys[a]+\": \"+b[filteredKeys[a]]);return arrayToJoin.join(\" | \")}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){a=a||0===a?a.toString():\"\";a=a.replace(\/([a-z])([A-Z])\/g,\"$1 $2\");a=a.replace(\/([A-Z])([a-z])\/g,\" $1$2\");a=a.replace(\/ +\/g,\" \");y=a.charAt(0).toUpperCase()+a.slice(1);return y.trim()}})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoUploadDate"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=864E5,c=Date.parse(",["escape",["macro",13],8,16],"),a=new Date;a=new Date(a.getFullYear(),a.getMonth(),a.getDate());b=Math.round(Math.abs((a-c)\/b));return 0\u003C=b?b:\"\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",15],8,16],"?",["escape",["macro",15],8,16],":\"Unknown Line\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],"?",["escape",["macro",17],8,16],":\"Unknown\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",19],8,16],"?",["escape",["macro",19],8,16],":\"Unknown Error URL\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(f,g,b,c){b=0\u003Eb?0:b;c=0\u003Ec?0:c;var a=4,d=f\/a,e=g\/a;d=parseInt(b\/d)+1;e=parseInt(c\/e)+1;b==f\u0026\u0026(d=a);c==g\u0026\u0026(e=a);return d\u003C=a\u0026\u0026e\u003C=a?(e-1)*a+d:null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"hitTimeOffset"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"Time\"===",["escape",["macro",22],8,16],"\u0026\u0026\"Time Engaged\"===",["escape",["macro",23],8,16],"||\"Error\"===",["escape",["macro",22],8,16],"\u0026\u0026\"Time Engaged\"===",["escape",["macro",23],8,16],"?0\u003E",["escape",["macro",24],8,16],"?0:",["escape",["macro",24],8,16],":0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"Time\"===",["escape",["macro",22],8,16],"\u0026\u0026\"Time Engaged\"===",["escape",["macro",23],8,16],"||\"Error\"===",["escape",["macro",22],8,16],"\u0026\u0026\"Time Engaged\"===",["escape",["macro",23],8,16],"?\"beacon\":null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"taxonomyNodes"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";\"object\"==typeof a\u0026\u00262\u003Ca.length?(a=a[2].shortName,a=a.replace(\/ \/g,\"_\")):a=\"none\";return a=\"https:\/\/d.turn.com\/r\/dd\/id\/L21rdC84MTYvY2lkLzI4NTg1NDMyL3QvMg\/kv\/SiteID\\x3d\"+a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"title"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",29],8,16],"?",["escape",["macro",29],8,16],":",["escape",["macro",30],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"pageviewType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"ajax\"==",["escape",["macro",32],8,16],")try{var b=window.dataLayer.filter(function(a){return\"unifiedPageview\"===a.event}).reverse()[1].fullUrl;return b}catch(a){}return document.referrer?document.referrer:null})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"true",
      "vtp_name":"nativeAdEnabled"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",34],8,16],"?\"Native Ad Enabled\":\"Not Native Ad Enabled\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"publishDate"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=864E5,c=Date.parse(",["escape",["macro",36],8,16],"),a=new Date;a=new Date(a.getFullYear(),a.getMonth(),a.getDate());b=Math.round(Math.abs((a-c)\/b));return 0\u003C=b?b:\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"updateDate"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=864E5,c=Date.parse(",["escape",["macro",38],8,16],"),a=new Date;a=new Date(a.getFullYear(),a.getMonth(),a.getDate());b=Math.round(Math.abs((a-c)\/b));return 0\u003C=b?b:\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"previousPageOrdinal"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"currentPageOrdinal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C",["escape",["macro",40],8,16],"?",["escape",["macro",41],8,16],"\u003E",["escape",["macro",40],8,16],"?\"Down\":\"Up\":\"\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoHostPlatform"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",44],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoLength"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",46],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoAutoplayEnabled"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",48],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPlayerWidth"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",50],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPlayerHeight"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",52],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPlayerColor"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",54],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoHostUser"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",56],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoSourceUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",58],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoTimestamp"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",60],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoTargetingType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",62],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"videoPreviousAction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",64],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"videoPreviousActionTimestamp"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",66],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPrerollAdEnabled"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",68],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPrerollAdLength"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",70],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPrerollAdSkipEnabled"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",72],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isErrorPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",74],8,16],"?",["escape",["macro",75],8,16],"?",["escape",["macro",75],8,16],"+\" Error\":\"Unknown Error\":\"Not Error Page\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/TMog=.[^;]*\/;return(matched=document.cookie.match(a))?(a=matched[0].split(\"\\x3d\"),a[1]):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";if(\"object\"==typeof a){if(a[0].constructor===Array){for(var c=[],b=0;b\u003Ca.length;b++)0\u003Ca[b].length\u0026\u0026(c[b]=a[b][0].shortName+\" (#\"+a[b][0].documentId+\")\");return a=c.join(\"|\")}if(0\u003Ca.length)return a[0].shortName+\" (#\"+a[0].documentId+\")\"}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";if(\"object\"==typeof a){if(a[0].constructor===Array){for(var c=[],b=0;b\u003Ca.length;b++)1\u003Ca[b].length\u0026\u0026(c[b]=a[b][1].shortName+\" (#\"+a[b][1].documentId+\")\");return a=c.join(\"|\")}if(1\u003Ca.length)return a[1].shortName+\" (#\"+a[1].documentId+\")\"}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";if(\"object\"==typeof a){if(a[0].constructor===Array){for(var c=[],b=0;b\u003Ca.length;b++)2\u003Ca[b].length\u0026\u0026(c[b]=a[b][2].shortName+\" (#\"+a[b][2].documentId+\")\");return a=c.join(\"|\")}if(2\u003Ca.length)return a[2].shortName+\" (#\"+a[2].documentId+\")\"}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";if(\"object\"==typeof a){if(a[0].constructor===Array){for(var c=[],b=0;b\u003Ca.length;b++)3\u003Ca[b].length\u0026\u0026(c[b]=a[b][3].shortName+\" (#\"+a[b][3].documentId+\")\");return a=c.join(\"|\")}if(3\u003Ca.length)return a[3].shortName+\" (#\"+a[3].documentId+\")\"}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],";if(\"object\"==typeof a){if(a[0].constructor===Array){for(var c=[],b=0;b\u003Ca.length;b++)4\u003Ca[b].length\u0026\u0026(c[b]=a[b][4].shortName+\" (#\"+a[b][4].documentId+\")\");return a=c.join(\"|\")}if(4\u003Ca.length)return a[4].shortName+\" (#\"+a[4].documentId+\")\"}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function g(a){a=a.slice(5);a=a.map(function(a){return a.shortName+\" (#\"+a.documentId+\")\"});return a.join(\", \")}function h(a){for(var c=[],e,b=e=0;b\u003Ca.length;b++)a[b].length\u003Ee\u0026\u0026(e=a[b].length);for(b=5;b\u003Ce;b++){for(var f=[],d=0;d\u003Ca.length;d++)a[d][b]?f.push(a[d][b].shortName+\" (#\"+a[d][b].documentId+\")\"):f.push(\"\");c.push(f.join(\"|\"))}return c.join(\"~\")}var c=",["escape",["macro",27],8,16],";if(\"object\"==typeof c){if(c[0].constructor===Array)return h(c);if(5\u003Cc.length)return g(c)}return\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"millisecondsEngaged"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"timeEngagedGAEvent\"===",["escape",["macro",43],8,16],"?",["escape",["macro",84],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoMillisecondsWatched"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",86],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"videoPercent1000Watched"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",88],8,16],":\"\"})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"utm_medium"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",90],8,16],"?",["escape",["macro",90],8,16],":",["escape",["macro",91],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null==",["escape",["macro",6],8,16],"?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=!!window.opr\u0026\u0026!!opr.addons||!!window.opera||0\u003C=navigator.userAgent.indexOf(\" OPR\/\"),c=\"undefined\"!==typeof InstallTrigger;\/constructor\/i.test(window.HTMLElement);var a=!!document.documentMode,d=!a\u0026\u0026!!window.StyleMedia,e=!!window.chrome\u0026\u0026!!window.chrome.webstore;return b?\"Opera\":c?\"Firefox\":a?\"Internet Explorer\":d?\"Microsoft Edge\":e?\"Chrome\":\"Other\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"Unknown",
      "vtp_name":"videoTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",95],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"Unknown",
      "vtp_name":"videoId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",97],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/TMog=.[^;]*\/;return(matched=document.cookie.match(a))?(a=matched[0].split(\"\\x3d\"),a[1]):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByTagName(\"meta\"),a=0;a\u003Cb.length;a++)if(\"lotame:tax2\"==b[a].getAttribute(\"name\"))return b[a].getAttribute(\"content\");return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByTagName(\"html\")[0].id;return a.substr(0,a.indexOf(\"_\"))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",13],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByName(\"lotame:tax1\")[0].getAttribute(\"content\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByName(\"lotame:tax2\")[0].getAttribute(\"content\")})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"contentGroup"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",111],
      "vtp_name":"fullUrl"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",112],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\"cr version loaded_cr cis pv inf chpg entryType\".split(\" \"),a=",["escape",["macro",113],8,16],";a=a.split(\"\\x26\");for(var d=[],e,b=0;b\u003Ca.length;b++)e=a[b].split(\"\\x3d\")[0],-1==c.indexOf(e)\u0026\u0026d.push(a[b]);return c=d.join(\"\\x26\")})();"]
    },{
      "function":"__u",
      "vtp_defaultPages":["list"],
      "vtp_component":"PATH",
      "vtp_customUrlSource":["macro",112],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",114],8,16],"?",["escape",["macro",115],8,16],"+\"?\"+",["escape",["macro",114],8,16],":",["escape",["macro",115],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"euTrafficFlag"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"characterCount"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"gs"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"ch"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"authorId"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"templateId"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"googleAdClient"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"googleAdChannel"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"zBT"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"zBsT"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"zBTr"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"cat0"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"cat1"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"cat2"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"cat3"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"cat4"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"socialTitle"
    },{
      "function":"__j",
      "vtp_name":"document.body.scrollHeight"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"am"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"q"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"an"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"proctorBucketDesc"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"proctorBucketID"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"proctorBucketName"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"proctorBucketValue"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"proctorTestName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.environment.environment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.environment.application"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.environment.dataCenter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.environment.serverName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.server.version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.server.vendor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.server.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.resources.version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.resources.loadStartTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.resources.loadTimeTaken"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"envData.client.serverUA"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"experienceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",33],8,16],";return a?a:\"Direct\"})();"]
    },{
      "function":"__u",
      "vtp_stripWww":true,
      "vtp_component":"HOST",
      "vtp_customUrlSource":["macro",33],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",157],8,16],";return a?a:\"Direct\"})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"experienceTypeName"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"numOfImages"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"numOfPages"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"recircDocIdsFooter"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"xDomainUserId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0==",["escape",["macro",1],8,16],"?1:",["escape",["macro",1],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isCommerceDocument"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"geoIpCountry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"fastlyCountry"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"templateVariation"
    },{
      "function":"__c",
      "vtp_value":"Unknown"
    },{
      "function":"__c",
      "vtp_value":"Unknown"
    },{
      "function":"__c",
      "vtp_value":"Unknown"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventOther"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\/.+(specials\\.about\\.com|\\\/sp\\\/[^\\\/\\.]+\\.html?)\/.test(",["escape",["macro",112],8,16],")\u0026\u0026-1==\"0 9 16 37 38 44 50 53 55 56 59 64\".split(\" \").indexOf(",["escape",["macro",122],8,16],")){if(-1\u003C",["escape",["macro",112],8,16],".indexOf(\".htm\")){var a=",["escape",["macro",112],8,16],".match(\/[^\/\\\\\u0026\\?]+\\.\\w{3,4}(?=([\\?\u0026].*$|$))\/i)[0];return a=a.split(\".\")[0]}return(a=",["escape",["macro",112],8,16],".match(\/[^\/]+(?=\\.specials)\/)[0])?a:\"\"}return\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",173],
      "vtp_name":"specialsAdCampaignID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Unknown",
      "vtp_name":"documentId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"specialsAdAdvertiser"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"specialsAdTemplate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"specialsAdIndustry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"specialsAdTargetedChannel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/specials\\.about\\.com|\\\/sp\\\/\/.test(",["escape",["macro",112],8,16],")?-1\u003C",["escape",["macro",31],8,16],".indexOf(\" - \")?",["escape",["macro",31],8,16],".match(\/.+(?= - )\/)[0]:0\u003C",["escape",["macro",31],8,16],".length?",["escape",["macro",31],8,16],":\"Unknown\":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",180],
      "vtp_name":"specialsAdTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adventureNavOrdinal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internalSessionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internalRequestId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"breakpointName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adventureNavDocIds"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"lastEditingAuthorId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"lastEditingUserId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"instartLogicDelivered"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ptax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.client.deviceType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.client.usStateCode"
    },{
      "function":"__c",
      "vtp_value":"Globe"
    },{
      "function":"__c",
      "vtp_value":"UA-44417706-3"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",109]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",110]],["map","fieldName","page","value",["macro",116]],["map","fieldName","\u0026qt","value",["macro",25]],["map","fieldName","transport","value",["macro",26]],["map","fieldName","title","value",["macro",31]],["map","fieldName","forceSSL","value","true"],["map","fieldName","allowLinker","value","true"],["map","fieldName","\u0026dr","value",["macro",33]],["map","fieldName","anonymizeIp","value",["macro",117]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",118]],["map","index","2","metric"," "],["map","index","3","metric"," "],["map","index","4","metric",["macro",85]],["map","index","5","metric",["macro",87]],["map","index","6","metric",["macro",89]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",119]],["map","index","2","dimension",["macro",120]],["map","index","3","dimension",["macro",121]],["map","index","4","dimension",["macro",122]],["map","index","5","dimension",["macro",123]],["map","index","6","dimension",["macro",124]],["map","index","7","dimension",["macro",125]],["map","index","8","dimension",["macro",126]],["map","index","9","dimension",["macro",127]],["map","index","10","dimension",["macro",128]],["map","index","11","dimension",["macro",129]],["map","index","12","dimension",["macro",130]],["map","index","13","dimension",["macro",131]],["map","index","14","dimension",["macro",132]],["map","index","15","dimension",["macro",133]],["map","index","16","dimension",["macro",134]],["map","index","17","dimension"," "],["map","index","18","dimension",["macro",118]],["map","index","19","dimension",["macro",6]],["map","index","20","dimension",["macro",2]],["map","index","21","dimension",["macro",135]],["map","index","22","dimension",["macro",136]],["map","index","23","dimension",["macro",137]],["map","index","24","dimension",["macro",8]],["map","index","25","dimension",["macro",7]],["map","index","26","dimension",["macro",35]],["map","index","27","dimension",["macro",138]],["map","index","28","dimension",["macro",139]],["map","index","29","dimension",["macro",140]],["map","index","30","dimension",["macro",141]],["map","index","31","dimension",["macro",142]],["map","index","32","dimension",["macro",143]],["map","index","33","dimension",["macro",144]],["map","index","34","dimension",["macro",145]],["map","index","35","dimension",["macro",146]],["map","index","36","dimension",["macro",147]],["map","index","37","dimension",["macro",148]],["map","index","38","dimension",["macro",149]],["map","index","39","dimension",["macro",150]],["map","index","40","dimension",["macro",151]],["map","index","41","dimension",["macro",152]],["map","index","42","dimension",["macro",153]],["map","index","43","dimension",["macro",154]],["map","index","44","dimension",["macro",155]],["map","index","45","dimension",["macro",41]],["map","index","46","dimension",["macro",40]],["map","index","47","dimension"," "],["map","index","48","dimension",["macro",156]],["map","index","49","dimension",["macro",158]],["map","index","50","dimension",["macro",32]],["map","index","51","dimension",["macro",159]],["map","index","52","dimension",["macro",36]],["map","index","53","dimension",["macro",37]],["map","index","54","dimension",["macro",38]],["map","index","55","dimension",["macro",39]],["map","index","56","dimension",["macro",160]],["map","index","57","dimension",["macro",161]],["map","index","58","dimension",["macro",162]],["map","index","59","dimension",["macro",163]],["map","index","60","dimension",["macro",164]],["map","index","61","dimension",["macro",42]],["map","index","62","dimension",["macro",165]],["map","index","63","dimension",["macro",45]],["map","index","64","dimension",["macro",117]],["map","index","65","dimension",["macro",47]],["map","index","66","dimension",["macro",49]],["map","index","67","dimension",["macro",166]],["map","index","68","dimension",["macro",167]],["map","index","69","dimension",["macro",51]],["map","index","70","dimension",["macro",53]],["map","index","71","dimension",["macro",55]],["map","index","72","dimension",["macro",57]],["map","index","73","dimension",["macro",59]],["map","index","74","dimension",["macro",61]],["map","index","75","dimension",["macro",63]],["map","index","76","dimension",["macro",65]],["map","index","77","dimension",["macro",67]],["map","index","78","dimension",["macro",69]],["map","index","79","dimension",["macro",71]],["map","index","80","dimension",["macro",73]],["map","index","81","dimension",["macro",76]],["map","index","82","dimension",["macro",168]],["map","index","83","dimension",["macro",77]],["map","index","84","dimension",["macro",169]],["map","index","85","dimension",["macro",170]],["map","index","86","dimension",["macro",171]],["map","index","87","dimension",["macro",172]],["map","index","88","dimension"," "],["map","index","89","dimension",["macro",174]],["map","index","90","dimension",["macro",175]],["map","index","91","dimension",["macro",176]],["map","index","92","dimension",["macro",177]],["map","index","93","dimension",["macro",178]],["map","index","94","dimension",["macro",179]],["map","index","95","dimension",["macro",181]],["map","index","96","dimension",["macro",78]],["map","index","97","dimension",["macro",79]],["map","index","98","dimension",["macro",80]],["map","index","99","dimension",["macro",81]],["map","index","100","dimension",["macro",82]],["map","index","101","dimension",["macro",83]],["map","index","102","dimension",["macro",182]],["map","index","103","dimension",["macro",183]],["map","index","104","dimension",["macro",184]],["map","index","105","dimension",["macro",185]],["map","index","106","dimension",["macro",186]],["map","index","107","dimension",["macro",187]],["map","index","108","dimension",["macro",188]],["map","index","112","dimension",["macro",189]],["map","index","109","dimension",["macro",190]],["map","index","110","dimension",["macro",191]],["map","index","113","dimension",["macro",192]],["map","index","114","dimension",["macro",94]],["map","index","115","dimension",["macro",193]],["map","index","116","dimension",["macro",194]],["map","index","117","dimension",["macro",195]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",196],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.elements.q.value"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":["macro",0],
      "vtp_name":"excludeFromComscore"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkText"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageWidth"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageHeight"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkTargetType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataOrdinal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataDocId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkContainerId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"domAncestorIds"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pixelsFromTopOfPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pixelsFromLeftOfPage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pixelsFromTopOfMainContainer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pixelsFromLeftOfMainContainer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkTargetURL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"dataHref"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataPinUrl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"alreadyTrackedImpressions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdCampaignID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdAdvertiser"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdTemplate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdIndustry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdTargetedChannel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataNetwork"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"abTests"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0===",["escape",["macro",103],8,16],"||void 0===",["escape",["macro",104],8,16],"?!0:!1})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-40872762-3"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"entryType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"numOfArticleWords"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"",
      "vtp_name":"numOfInlineLinks"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoPlayerGAEvent\"===",["escape",["macro",43],8,16],"||\"nativeAdGAEvent\"===",["escape",["macro",43],8,16],"\u0026\u0026\"Video\"===",["escape",["macro",22],8,16],"?",["escape",["macro",14],8,16],":\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"numOfMapLabels"
    },{
      "function":"__e"
    },{
      "function":"__ctv"
    },{
      "function":"__cid"
    }],
  "tags":[{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\" language=\"javascript\"\u003E1\u003E=",["escape",["macro",1],8,16],"?function(b,c){var a=b.createElement(c),d=b.getElementsByTagName(c)[0];a.type=\"text\/javascript\";a.src=\"\/\/tags.crwdcntrl.net\/c\/10692\/cc.js?ns\\x3d_cc10692\";a.id=\"LOTCC_10692\";a.onload=function(){_cc10692.bcpf()};d.parentNode.insertBefore(a,d)}(document,\"script\"):_cc10692.bcpf();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":46
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",107],
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",108],
      "vtp_eventCategory":["macro",22],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",197],
      "vtp_eventAction":["macro",23],
      "vtp_eventLabel":["macro",198],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: General Event - Channel"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"JavaScript Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",197],
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["template","Line ",["macro",16]," ",["macro",20]],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: JavaScript Error - Channel"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",107],
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",108],
      "vtp_eventCategory":"Email",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",197],
      "vtp_eventAction":"Newsletter Signup",
      "vtp_dimension":["list",["map","index","111","dimension","Tag name: Newsletter Event - Channel"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",107],
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",108],
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",197],
      "vtp_eventAction":"Internal Search",
      "vtp_eventLabel":["macro",199],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: Search Form - Channel"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__csm",
      "once_per_event":true,
      "vtp_clientId":"6036459",
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",197],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: Unified Pageview - Channel"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":50
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",107],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",108],
      "vtp_eventCategory":["macro",22],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",197],
      "vtp_eventAction":["macro",23],
      "vtp_eventLabel":["macro",198],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: eCommerce Enabled Event - Channel"]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_eventCategory":["template","Proctor | ",["macro",142]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",197],
      "vtp_eventAction":["template",["macro",139]," | ",["macro",140]],
      "vtp_eventLabel":["template",["macro",138]," | ",["macro",141]],
      "vtp_dimension":["list",["map","index","111","dimension","Tag Name: GA - Proctor Event - Channel"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2447799_30",
      "tag_id":72
    },{
      "function":"__jel",
      "tag_id":73
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2447799_36",
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar dataLayer=window.dataLayer||[];dataLayer.push({event:\"unifiedPageview\",fullUrl:",["escape",["macro",112],8,16],",title:",["escape",["macro",31],8,16],",pageviewType:\"standard\",excludeFromComscore:!1});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(dataLayer){var cleanVarName=",["escape",["macro",12],8,16],";var cleanJoin=",["escape",["macro",11],8,16],";var linkId=",["escape",["macro",201],8,16],";var linkText=",["escape",["macro",202],8,16],";var pageWidth=",["escape",["macro",203],8,16],";var pageHeight=",["escape",["macro",204],8,16],";var linkTargetType=",["escape",["macro",205],8,16],";var dataOrdinal=",["escape",["macro",206],8,16],";var dataDocId=",["escape",["macro",207],8,16],";var linkContainerId=",["escape",["macro",208],8,16],";var domAncestorIds=",["escape",["macro",209],8,16],";var pixelsFromTopOfPage=",["escape",["macro",210],8,16],";var pixelsFromLeftOfPage=\n",["escape",["macro",211],8,16],";var pixelsFromTopOfMainContainer=",["escape",["macro",212],8,16],";var pixelsFromLeftOfMainContainer=",["escape",["macro",213],8,16],";var linkTargetUrl=",["escape",["macro",214],8,16],"?",["escape",["macro",214],8,16],":",["escape",["macro",215],8,16],";if((!linkTargetUrl||linkTargetUrl==\"#\")\u0026\u0026",["escape",["macro",216],8,16],")linkTargetUrl=",["escape",["macro",216],8,16],";var alreadyTrackedImpressions=[];if(",["escape",["macro",217],8,16],"!==undefined)for(i=0;i\u003C",["escape",["macro",217],8,16],".length;i++)alreadyTrackedImpressions.push(",["escape",["macro",217],8,16],"[i]);var linkContainerQuadrant;\nfor(i=0;i\u003CalreadyTrackedImpressions.length;i++)if(alreadyTrackedImpressions[i].id==linkContainerId)linkContainerQuadrant=alreadyTrackedImpressions[i].quadrant;var cleanedLinkContainerId;if(linkContainerId.indexOf(\"_\")!==-1)cleanedLinkContainerId=linkContainerId.substr(0,linkContainerId.indexOf(\"_\"));else cleanedLinkContainerId=linkContainerId;var typeOfTarget;var urlNoParams;if(linkTargetType==\"onpage\")typeOfTarget=\"Intrapage\";else if(linkTargetType==\"offpage\"){if(linkTargetUrl.indexOf(\"?\")!==-1)urlNoParams=\nlinkTargetUrl.substr(0,linkTargetUrl.indexOf(\"?\"));else urlNoParams=linkTargetUrl;if(urlNoParams.toLowerCase().indexOf(\"about.com\")!==-1||urlNoParams.toLowerCase().indexOf(\"lifewire.com\")!==-1||urlNoParams.toLowerCase().indexOf(\"dotdash.com\")!==-1)typeOfTarget=\"Internal\";else typeOfTarget=\"External\"}var clickArray=[];clickArray.push({\"name\":cleanedLinkContainerId,\"list\":",["escape",["macro",122],8,16],",\"category\":linkContainerQuadrant});var unwantedButtonClick=false;if(unwantedButtonClick)dataLayer.push({\"event\":\"Non-Click Tracking Button Press\",\n\"eventCallback\":function(){var eventClick=document.createEvent(\"Event\");eventClick.initEvent(\"click-sent\",true,true);document.body.dispatchEvent(eventClick)}});else{var craftedEvent=\"linkClickGAEvent\";var eventCategory;var eventAction;var eventLabel;var nonInteraction=false;var eventOtherObject;if(cleanedLinkContainerId==\"native-ad\"){eventCategory=\"Advertisement\";var identifier;if(",["escape",["macro",218],8,16],")if(",["escape",["macro",219],8,16],")identifier=",["escape",["macro",218],8,16],"+\" (Native Ad Campaign ID: \"+",["escape",["macro",219],8,16],"+\n\")\";else identifier=",["escape",["macro",218],8,16],"+\" (Native Ad Campaign ID: Unknown)\";else if(",["escape",["macro",219],8,16],")identifier=\"Unknown (Native Ad Campaign ID: \"+",["escape",["macro",219],8,16],"+\")\";else identifier=\"Unidentified Campaign\";eventAction=identifier;eventLabel=linkId?linkId:linkText?linkText:\"No Text or ID\";eventOtherObject={\"Ad Type\":\"Native Ad\",\"Ad Title\":",["escape",["macro",218],8,16],",\"Ad Campaign ID\":",["escape",["macro",219],8,16],",\"Ad Advertiser\":",["escape",["macro",220],8,16],",\"Ad Template\":",["escape",["macro",221],8,16],",\"Ad Industry\":",["escape",["macro",222],8,16],",\n\"Ad Targeted Channel\":",["escape",["macro",223],8,16],",\"Text\":linkText,\"Target Type\":typeOfTarget,\"Ordinal\":dataOrdinal,\"Document ID\":dataDocId,\"Social Network\":cleanVarName(",["escape",["macro",224],8,16],"),\"ID\":linkId,\"Container ID\":linkContainerId,\"Pixels from Top of Page\":parseInt(pixelsFromTopOfPage),\"Pixels from Left of Page\":parseInt(pixelsFromLeftOfPage),\"Pixels from Top of Main Container\":parseInt(pixelsFromTopOfMainContainer),\"Pixels from Left of Main Container\":parseInt(pixelsFromLeftOfMainContainer),\"DOM Ancestor IDs\":domAncestorIds.join(\",\"),\n\"User Trigger\":\"Link Click\",\"Technical Trigger\":\"GTM Data Layer Push\",\"Interactive\":cleanVarName((!nonInteraction).toString())}}else{eventCategory=cleanedLinkContainerId?cleanedLinkContainerId+\" Click\":\"Link Click (No Tracked Container)\";eventAction=linkText?linkText:linkId?linkId:\"No Text or ID\";eventLabel=linkTargetUrl?linkTargetUrl:\"No Target URL\";eventOtherObject={\"Text\":linkText,\"Target Type\":typeOfTarget,\"Ordinal\":dataOrdinal,\"Document ID\":dataDocId,\"Social Network\":cleanVarName(",["escape",["macro",224],8,16],"),\n\"ID\":linkId,\"Container ID\":linkContainerId,\"Pixels from Top of Page\":parseInt(pixelsFromTopOfPage),\"Pixels from Left of Page\":parseInt(pixelsFromLeftOfPage),\"Pixels from Top of Main Container\":parseInt(pixelsFromTopOfMainContainer),\"Pixels from Left of Main Container\":parseInt(pixelsFromLeftOfMainContainer),\"DOM Ancestor IDs\":domAncestorIds.join(\",\"),\"User Trigger\":\"Link Click\",\"Technical Trigger\":\"GTM Data Layer Push\",\"Interactive\":cleanVarName((!nonInteraction).toString())}}var eventOther=cleanJoin(eventOtherObject);\nvar eventValue=\"\";dataLayer.push({\"event\":craftedEvent,\"eventCategory\":eventCategory,\"eventAction\":eventAction,\"eventLabel\":eventLabel,\"eventValue\":eventValue,\"eventOther\":eventOther,\"nonInteraction\":nonInteraction,\"ecommerce\":{\"click\":{\"products\":clickArray}},\"eventCallback\":function(){var eventClick=document.createEvent(\"Event\");eventClick.initEvent(\"click-sent\",true,true);document.body.dispatchEvent(eventClick)}})}})(window.dataLayer||[]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cleanVarName=",["escape",["macro",12],8,16],",cleanJoin=",["escape",["macro",11],8,16],",craftedEvent=\"nativeAdImpressionGAEvent\",eventCategory=\"Advertisement\",identifier,eventAction=identifier=",["escape",["macro",218],8,16],"?",["escape",["macro",219],8,16],"?",["escape",["macro",218],8,16],"+\" (Native Ad Campaign ID: \"+",["escape",["macro",219],8,16],"+\")\":",["escape",["macro",218],8,16],"+\" (Native Ad Campaign ID: Unknown)\":",["escape",["macro",219],8,16],"?\"Unknown (Native Ad Campaign ID: \"+",["escape",["macro",219],8,16],"+\")\":\"Unidentified Campaign\",eventLabel=\"Impression\",nonInteraction=!0,\neventOtherObject={\"Ad Type\":\"Native Ad\",\"Ad Title\":",["escape",["macro",218],8,16],",\"Ad Campaign ID\":",["escape",["macro",219],8,16],",\"Ad Advertiser\":",["escape",["macro",220],8,16],",\"Ad Template\":",["escape",["macro",221],8,16],",\"Ad Industry\":",["escape",["macro",222],8,16],",\"Targeted Channel\":",["escape",["macro",223],8,16],",\"Technical Trigger\":\"Development Data Layer Push\",Interactive:cleanVarName((!nonInteraction).toString())},eventOther=cleanJoin(eventOtherObject),eventValue=\"\";\ndataLayer.push({event:craftedEvent,eventCategory:eventCategory,eventAction:eventAction,eventLabel:eventLabel,eventValue:eventValue,eventOther:eventOther,nonInteraction:nonInteraction});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"786108458181251\");fbq(\"track\",\"PageView\");\nfbq(\"track\",\"ViewContent\",{content_type:",["escape",["macro",122],8,16],",content_name:",["escape",["macro",31],8,16],",content_category:",["escape",["macro",81],8,16],"});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=786108458181251\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"https:\/\/ak.sail-horizon.com\/spm\/spm.v1.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.init({customerId:\"8ae929af5ef7a9d7fee584d8f47d5bf1\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];\n(function(e,a){function t(b){for(var c=0;c\u003Cb.length;c++)e.addEventListener?e.addEventListener(b[c],f):e.attachEvent\u0026\u0026e.attachEvent(\"on\"+b[c],f);window.onbeforeunload=function(){a.events.push(\"pageunload\");n()}}function f(b){b=b.type;var c=Date.now();a.start\u0026\u0026(a.firstTime=c,a.start=!1);a.events[a.events.length-1]!==b\u0026\u0026a.events.push(b);a.lastTime=c}function h(){return{start:!0,firstTime:0,lastTime:0,events:[]}}function n(){if(0\u003Ca.events.length)if(gapMilliseconds=a.firstTime-k.lastTime,engagedTime=gapMilliseconds\u003C\ng?a.lastTime-k.lastTime:a.lastTime-a.firstTime,events=a.events.join(\", \"),0\u003CengagedTime\u0026\u0026engagedTime\u003C=2*g){var b=events,c=engagedTime;var d=Date.now();d-=a.lastTime;l(\"timeEngaged\",b,c,m+\" Second Interval\",d)}else 1\u003EengagedTime||(b=events,c=engagedTime,d=Date.now(),d-=a.lastTime,l(\"timeEngagedError\",b,c,m+\" Second Interval\",d));k=a;a=h()}function u(){a=h();t(v);f({type:\"pageload\"});setInterval(function(){n()},g)}function l(a,c,d,e,g){var b=window.dataLayer||[],f=",["escape",["macro",12],8,16],",k=",["escape",["macro",11],8,16],",\nn=\"timeEngagedGAEvent\",p=!0;if(\"timeEngaged\"==a){var h=\"Time\";var l=\"Time Engaged\";var m=e;var q=\"\";var r={\"Actions Taken\":c,\"Technical Trigger\":\"GTM Data Layer Push\",Interactive:f((!p).toString())}}else\"timeEngagedError\"==a\u0026\u0026(h=\"Error\",l=\"Time Engaged\",m=e,d=q=\"\",r={\"Actions Taken\":c,\"Error Milliseconds Engaged\":d,\"Technical Trigger\":\"GTM Data Layer Push\",Interactive:f((!p).toString())});b.push({event:n,eventCategory:h,eventAction:l,eventLabel:m,eventValue:q,eventOther:k(r),nonInteraction:p,millisecondsEngaged:d,\nhitTimeOffset:g})}var g=3E4,m=Math.round(g\/1E3),v=[\"mouseover\",\"touchstart\",\"keydown\"],k={lastTime:0};u()})(window.document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.snowplowKW(\"trackPageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"\/\/dc8xl0ndzn2cb.cloudfront.net\/js\/lifewirecom\/v0\/keywee.min.js\" type=\"text\/gtmscript\" async\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar AP={getRawCookieValue:function(a){var b=null,c=\"; \"+document.cookie;a=c.split(\"; \"+a+\"\\x3d\");2==a.length\u0026\u0026(b=a.pop().split(\";\").shift());return b},updateCookie:function(a,b){var c=new Date;c.setTime(c.getTime()+18E5);document.cookie=a+\"\\x3d\"+b+\"; path\\x3d\/; expires\\x3d\"+c.toUTCString()}};(function(){var a=\"utm_medium\",b=",["escape",["macro",90],8,16],";b?AP.updateCookie(a,b):(b=AP.getRawCookieValue(a))\u0026\u0026AP.updateCookie(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){for(var c=window.dataLayer=window.dataLayer||[],a=0;a\u003Cb.length;a++)\"99\"!==b[a].bucketTrackingId\u0026\u0026c.push({event:\"proctorBucket\",proctorTestName:b[a].testName||\"none\",proctorBucketID:b[a].bucketTrackingId||\"none\",proctorBucketName:b[a].bucketName||\"none\",proctorBucketDesc:b[a].bucketDescription||\"none\",proctorBucketValue:b[a].bucketValue||\"none\"})})(",["escape",["macro",225],8,16],"||[]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window.location.hostname.split(\".\").slice(-2).join(\".\");_UnifiedApiParams={appId:\"About_DS\",appVersion:document.documentElement.getAttribute(\"data-resource-version\").replace(\/\\.\/g,\"z\"),appDate:\"2017-01-01\",logPageView:!1,updateSession:!0,domain:\".\"+a,url:\"https:\/\/anx.ask.com\/log\/browser\/event\",backFillRequired:!0,suppressCookies:!1,cookieExpirationMinutes:129600,newSessionOnDomainChange:!1,cookieName:\"uc\"};Mntl.utilities.loadExternalJS({src:\"https:\/\/anx.ask.com\/static\/js\/unified-api.min.js\",\ncallback:function(){_UnifiedApi.logEvent(\"PageView\",{anuaapp:JSON.stringify({queryOrigination:\"semQuery\",metaInfo:{}}),anuaaf:\"AboutFramework\",anxp:a,anuaad:\"semD\",anuaptp:\"contentPage\",anualcl:\"us\",anuachl:\"web\",anuaadid:",["escape",["macro",6],8,16],",returnmsg:\"false\"},function(){})}})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=window.googletag||{};googletag.cmd=googletag.cmd||[];\n(function(){function a(){var c=0,b=0;window.RProfiler.addInfo(\"tracepoint\",\"ptax\",",["escape",["macro",100],8,16],");window.RProfiler.addInfo(\"tracepoint\",\"rid\",",["escape",["macro",184],8,16],");window.RProfiler.addInfo(\"tracepoint\",\"sid\",",["escape",["macro",183],8,16],");window.RProfiler.addInfo(\"tracepoint\",\"uid\",",["escape",["macro",99],8,16],");window.RProfiler.addInfo(\"pageGroup\",",["escape",["macro",101],8,16],");googletag.cmd.push(function(){googletag.pubads().addEventListener(\"slotRenderEnded\",function(b){c++;window.debug.log(\"ad: slot rendered \"+\nb.slot.getSlotElementId())});googletag.pubads().addEventListener(\"impressionViewable\",function(c){b++;window.debug.log(\"ad: slot viewable \"+c.slot.getSlotElementId())})});window.addEventListener(\"beforeunload\",function(a){window.RProfiler.addInfo(\"indicator\",\"adsrendered\",c);window.RProfiler.addInfo(\"indicator\",\"adsviewable\",b);window.RProfiler.addInfo(\"conversion\",b,c);window.debug.log(\"slots rendered: \"+c);window.debug.log(\"slots viewable: \"+b)})}window.RProfiler?a():window.addEventListener(\"GlimpseLoaded\",\na)})();var WindowEvent;(function(a){a.Load=\"load\";a.BeforeUnload=\"beforeunload\";a.Abort=\"abort\";a.Error=\"error\";a.Unload=\"unload\"})(WindowEvent||(WindowEvent={}));\nvar AjaxTiming=function(){function a(c,b,a,h){var d=this;this.getPerformanceTimings=function(b){d.connect=b.connectEnd-b.connectStart;d.dns=b.domainLookupEnd-b.domainLookupStart;d.duration=b.duration;d.load=b.responseEnd-b.responseStart;d.wait=b.responseStart-b.requestStart;d.start=b.startTime;d.redirect=b.redirectEnd-b.redirectStart;b.secureConnectionStart\u0026\u0026(d.ssl=b.connectEnd-b.secureConnectionStart)};this.url=c;this.method=b;this.isAsync=a;this.open=h}return a}(),ProfilerJsError=function(){function a(c,\nb,a){this.count=0;this.message=c;this.url=b;this.lineNumber=a}return a.createText=function(c,b,a){return[c,b,a].join(\":\")},a.prototype.getText=function(){return a.createText(this.message,this.url,this.lineNumber)},a}(),ProfilerEventManager=function(){function a(){this.events=[];this.hasAttachEvent=!!window.attachEvent}return a.prototype.add=function(c,b,a){this.events.push({type:c,target:b,func:a});this.hasAttachEvent?b.attachEvent(\"on\"+c,a):b.addEventListener(c,a,!1)},a.prototype.clear=function(){for(var c,\nb=0,a=this.events;b\u003Ca.length;b++)c=a[b],this.hasAttachEvent?c.target.detachEvent(c.type,c.func):c.target.removeEventListener(c.type,c.func,!1);this.events=[]},a}(),RProfiler=function(){function a(){function a(b){b=b.target||b.srcElement;return 3==b.nodeType\u0026\u0026(b=b.parentNode),h(\"N\/A\",b.src||b.URL,-1),!1}var b=this,g;this.restUrl=\"g.3gl.net\/jp\/552\/v3.1.4\/M\";this.startTime=(new Date).getTime();this.version=\"v3.1.4\";this.info={};this.hasInsight=!1;this.data={start:this.startTime,jsCount:0,jsErrors:[],\nloadTime:-1,loadFired:\"complete\"==window.document.readyState,ajax:[]};this.eventManager=new ProfilerEventManager;this.startAjaxCapture=function(){var a=XMLHttpRequest.prototype,c=a.open,d=a.send,f=[],m={},g=b.data.ajax,h=25,p=\"object\"==typeof performance\u0026\u0026\"function\"==typeof window.performance.now\u0026\u0026\"function\"==typeof window.performance.getEntriesByType;p\u0026\u0026\"function\"==typeof window.performance.setResourceTimingBufferSize\u0026\u0026window.performance.setResourceTimingBufferSize(300);var k=function(){return p?\nwindow.performance.now():(new Date).getTime()};a.open=function(b,a,d,e,g){void 0===d\u0026\u0026(d=!0);this.rpIndex=f.length;f.push(new AjaxTiming(a,b,d,k()));c.call(this,b,a,d,e,g)};a.send=function(b){var a=this,c=this.onreadystatechange,e;(this.onreadystatechange=function(b){var d=f[a.rpIndex];if(d){var e=a.readyState;switch(e){case 1:d.connectionEstablished=k();break;case 2:d.requestReceived=k();break;case 3:d.processingTime=k();break;case 4:d.complete=k();e=!(!a.response||null==a.response||void 0==a.response);\nswitch(a.responseType){case \"text\":case \"\":\"string\"==typeof a.responseText\u0026\u0026(d.responseSize=a.responseText.length);break;case \"json\":e\u0026\u0026\"function\"==typeof a.response.toString\u0026\u0026(d.responseSize=a.response.toString().length);break;case \"arraybuffer\":e\u0026\u0026\"number\"==typeof a.response.byteLength\u0026\u0026(d.responseSize=a.response.byteLength);break;case \"blob\":e\u0026\u0026\"number\"==typeof a.response.size\u0026\u0026(d.responseSize=a.response.size)}(function(b){setTimeout(function(){var a,d;if(p){var c=b.url,e=[];var f=performance.getEntriesByType(\"resource\");\nfor(a=0;a\u003Cf.length;a++){var l=f[a];l.name==c\u0026\u0026e.push(l)}if(g.push(b),0!=e.length)if(m[c]||(m[c]=[]),1==e.length)b.getPerformanceTimings(e[0]),m[c].push(0);else{a=m[c];for(d in e)if(-1==a.indexOf(d)){b.getPerformanceTimings(e[d]);a.push(d);return}b.getPerformanceTimings(e[0])}}},h)})(d,g)}\"function\"==typeof c\u0026\u0026c.call(a,b)}},e=f[this.rpIndex],e)\u0026\u0026(b\u0026\u0026!isNaN(b.length)\u0026\u0026(e.sendSize=b.length),e.send=k(),d.call(this,b))}};this.recordPageLoad=function(){b.data.loadTime=(new Date).getTime();b.data.loadFired=\n!0};this.addError=function(a,c,d){var e,f;b.data.jsCount++;var g=ProfilerJsError.createText(a,c,d);var l=b.data.jsErrors;var h=0;for(e=l;h\u003Ce.length;h++)if(f=e[h],f.getText()==g){f.count++;return}l.push(new ProfilerJsError(a,c,d))};this.addInfo=function(a,c,d){if(!b.isNullOrEmpty(a)){if(b.isNullOrEmpty(d))b.info[a]=c;else{if(b.isNullOrEmpty(c))return;b.isNullOrEmpty(b.info[a])\u0026\u0026(b.info[a]={});b.info[a][c]=d}b.hasInsight=!0}};this.clearInfo=function(){b.info={};b.hasInsight=!1};this.clearErrors=function(){b.data.jsCount=\n0;b.data.jsErrors=[]};this.clearAjax=function(){b.data.ajax=[]};this.getInfo=function(){return b.hasInsight?b.info:null};this.eventManager.add(WindowEvent.Load,window,this.recordPageLoad);var h=this.addError;this.startAjaxCapture();window.opera?this.eventManager.add(WindowEvent.Error,document,a):\"onerror\"in window\u0026\u0026(g=window.onerror,window.onerror=function(b,a,c){return(h(b,a,c),g)?g(b,a,c):!1});!window.__cpCdnPath||(this.restUrl=window.__cpCdnPath.trim());var d=document.createElement(\"iframe\");var f=\nd.style;f.position=\"absolute\";f.top=\"-10000px\";f.left=\"-1000px\";f=document.getElementsByTagName(\"script\")[0];f.parentNode.insertBefore(d,f);d=d.contentWindow.document.open(\"text\/html\",\"replace\");f=window.location.protocol+\"\/\/\";var n='\\x3cbody onload\\x3d\"';n+=\"function s(u){var d\\x3ddocument,s\\x3dd.createElement('script');s.type\\x3d'text\/javascript';s.src\\x3du;d.body.appendChild(s);}\";n+=\"s('\"+f+this.restUrl+\"');\";n+='\"\\x3e\\x3c\/body\\x3e';d.write(n);d.close()}return a.prototype.isNullOrEmpty=function(a){return void 0===\na||null===a?!0:\"string\"==typeof a?0==a.trim().length:!1},a.prototype.dispatchCustomEvent=function(a){(function(a){function b(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent(\"CustomEvent\");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}if(\"function\"==typeof a.CustomEvent)return!1;b.prototype=Event.prototype;a.CustomEvent=b})(window);a=new CustomEvent(a);window.dispatchEvent(a)},a}(),profiler=new RProfiler;window.RProfiler=profiler;window.WindowEvent=WindowEvent;\nprofiler.dispatchCustomEvent(\"GlimpseLoaded\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setUpAgknTag(a){a.setBpId(\"aboutinc\");a.setCat(",["escape",["macro",103],8,16],");a.addEchoKeyValue(\"cat2\",",["escape",["macro",104],8,16],")};\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/js.agkn.com\/prod\/v0\/tag.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":".+"
    },{
      "function":"_re",
      "arg0":["macro",23],
      "arg1":".+"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"analyticsEvent"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"nativeAdImpressionGAEvent"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"timeEngagedGAEvent"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"videoEvent"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":"About.*Crawler|KTXN|KTHE|Keynote|GomezAgent|AlertSite|Pingdom|YottaMonitor|google_partner_monitoring"
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":".+"
    },{
      "function":"_ew",
      "arg0":["macro",105],
      "arg1":"\/newsletter\/signup"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",106],
      "arg1":"(^$|((^|,)2447799_36($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"Unknown Line"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"Unknown Error URL"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"gtm.pageError"
    },{
      "function":"_ew",
      "arg0":["macro",105],
      "arg1":"\/search"
    },{
      "function":"_re",
      "arg0":["macro",106],
      "arg1":"(^$|((^|,)2447799_30($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"gtm.dom"
    },{
      "function":"_ge",
      "arg0":["macro",1],
      "arg1":"2"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"unifiedPageview"
    },{
      "function":"_eq",
      "arg0":["macro",200],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"impressionEvent"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"linkClickGAEvent"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"proctorBucket"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"linkClick"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"nativeAdImpression"
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",76],
      "arg1":"404 Error"
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"con"
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"gtm.dom|unifiedPageview"
    },{
      "function":"_eq",
      "arg0":["macro",93],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",226],
      "arg1":"true"
    }],
  "rules":[
    [["if",0,1,2],["add",1]],
    [["if",3],["add",1]],
    [["if",4],["add",1]],
    [["if",5],["add",1]],
    [["if",13],["unless",11,12],["add",2]],
    [["if",8,9,10],["add",3],["block",1]],
    [["if",9,14,15],["add",4]],
    [["if",16],["add",5,0,17,19,21]],
    [["if",17,18],["add",5,0,18,21]],
    [["if",18],["add",6,20]],
    [["if",20],["add",7]],
    [["if",21],["add",7]],
    [["if",22],["add",8]],
    [["if",23],["add",9,10,11]],
    [["if",23,24],["add",12]],
    [["if",25],["add",13]],
    [["if",26],["add",14]],
    [["if",27],["add",15,16,22,23]],
    [["if",6,7],["block",1,2,3,4,5,6,7,8,15,0,16,18,19,20,22,23]],
    [["if",7,19],["block",5]],
    [["if",7,28],["block",15,0,16,18,19,23]],
    [["if",7,29],["block",16]],
    [["if",31],["unless",30],["block",18,19]],
    [["if",7,32],["block",21]],
    [["if",7,33],["block",23]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,da=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},na=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ca=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ea=function(a){if(null==a)return String(a);var b=Da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ga=function(a){if(!a||"object"!=Ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fa(a,"constructor")&&!Fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fa(a,b)},Ha=function(a,b){var c=b||("array"==Ea(a)?[]:{}),d;for(d in a)if(Fa(a,d)){var e=a[d];"array"==Ea(e)?("array"!=Ea(c[d])&&(c[d]=[]),c[d]=Ha(e,c[d])):Ga(e)?(Ga(c[d])||(c[d]={}),c[d]=Ha(e,c[d])):c[d]=e}return c};var f=window,u=document,Ia=navigator,Ka=u.currentScript&&u.currentScript.src,La=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ma=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Na=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ma(d,b);c&&(d.onerror=c);var e;if(null===da)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){da=k;break b}}da=""}e=da;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Oa=function(){if(Ka){var a=Ka.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Pa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ma(c,b);void 0!==a&&(c.src=a);return c},Qa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ra=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Sa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},A=function(a){f.setTimeout(a,0)},Ta=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ua=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Va=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Xa=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Ya=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a={},ab=function(a,b){$a[a]=$a[a]||[];$a[a][b]=!0},bb=function(a){for(var b=[],c=$a[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},gb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eb(a.protocol)||eb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=eb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=fb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||ab("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},eb=function(a){return a?a.replace(":","").toLowerCase():""},fb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
hb=function(a){var b=u.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||ab("TAGGING",1),c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var ib=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},lb=function(a,b,c,d){var e=jb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=kb(e,function(g){return g.zb},b);if(1===e.length)return e[0].id;e=kb(e,function(g){return g.Sa},c);return e[0]?e[0].id:void 0}};
function mb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=ib(b,e).indexOf(c)}
var pb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var w=nb(),v=0;v<w.length;++v){var y="none"!=w[v]?w[v]:void 0;if(!ob(y,t)&&mb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!ob(p,t)&&mb(m,a,l)}return k};function kb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function jb(a,b){for(var c=[],d=ib(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),zb:1*k[0]||1,Sa:1*k[1]||1}))}}return c}
var qb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,sb=/(^|\.)doubleclick\.net$/i,ob=function(a,b){return sb.test(document.location.hostname)||"/"===b&&qb.test(a)},nb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var tb=[],ub={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},vb=function(a){return ub[a]},wb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Db=function(a){return Bb[a]};
tb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ab,Db)+"'"}};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};tb[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Wb,Xb,Yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Ub[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Ub[c](e):(void 0)(c,e,b)},ac=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$b(a[e],b,c));return d},
bc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ub[b];return c?c.priorityOverride||0:0},$b=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($b(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.sc(h))return;c[g]=!0;try{var k=ac(h,b,c);k.vtp_gtmEventId=b.id;d=Zb(k,b);Xb&&(d=Xb.kf(d,k))}catch(v){b.Ld&&b.Ld(v,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[$b(a[l],b,c)]=$b(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=$b(a[n],b,c);Wb&&(m=m||p===Wb.ob);d.push(p)}return Wb&&m?Wb.pf(d):d.join("");case "escape":d=$b(a[1],b,c);if(Wb&&ka(a[1])&&"macro"===a[1][0]&&Wb.Rf(a))return Wb.ag(d);d=String(d);for(var t=2;t<a.length;t++)tb[a[t]]&&(d=tb[a[t]](d));return d;case "tag":var q=a[1];if(!Sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={yd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var w=cc(r,b,c);a[4]&&(w=!w);return w;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},cc=function(a,b,c){try{return Vb(ac(a,b,c))}catch(d){JSON.stringify(a)}return null};var dc=function(){var a=function(b){return{toString:function(){return b}}};return{Wc:a("convert_case_to"),Xc:a("convert_false_to"),Yc:a("convert_null_to"),Zc:a("convert_true_to"),$c:a("convert_undefined_to"),qa:a("function"),Be:a("instance_name"),Ce:a("live_only"),De:a("malware_disabled"),Ee:a("metadata"),Kg:a("original_vendor_template_id"),Fe:a("once_per_event"),od:a("once_per_load"),pd:a("setup_tags"),qd:a("tag_id"),rd:a("teardown_tags")}}();var ec=null,hc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=gc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},gc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=ec(e[g]);if(null===h)return null;
if(h)return!1}return!0},fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=cc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ic,jc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Ve&&(l["fix_"+m]=!0),l.zd=l.zd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var w=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(w)return{tagName:q.tagName,D:q.D,content:w[1],length:w[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(w,v,y,x,z){var B=y||x||z||g.test(v)&&v||null,C=document.createElement("div");C.innerHTML=B;r[v]=C.textContent||C.innerText||B});return{tagName:q[1],D:r,Xa:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.zd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,w=[];w.Kd=function(){return this[this.length-1]};w.yc=function(C){var E=this.Kd();return E&&E.tagName&&E.tagName.toUpperCase()===C.toUpperCase()};w.jf=
function(C){for(var E=0,F;F=this[E];E++)if(F.tagName===C)return!0;return!1};var v=function(C){C&&"startTag"===C.type&&(C.Xa=q.test(C.tagName)||C.Xa);return C},y=t,x=function(){k="</"+w.pop().tagName+">"+k},z={startTag:function(C){var E=C.tagName;"TR"===E.toUpperCase()&&w.yc("TABLE")?(k="<TBODY>"+k,B()):l.Sg&&r.test(E)&&w.jf(E)?w.yc(E)?x():(k="</"+C.tagName+">"+k,B()):C.Xa||w.push(C)},endTag:function(C){w.Kd()?l.zf&&!w.yc(C.tagName)?x():w.pop():l.zf&&(y(),B())}},B=function(){var C=k,E=v(y());k=C;if(E&&
z[E.type])z[E.type](E)};t=function(){B();return v(y())}}();return{append:function(q){k+=q},jg:t,Yg:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},Zg:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.fh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.ah=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.gh=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.D){var t=m.D[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Xa?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Rg=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.$e=a.$e||!b[h]&&h;ic=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,w=p&&p.length||0;for(r=0;r<w;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Le:a,Me:a,Ne:a,Oe:a,We:a,Xe:function(p){return p},done:a,error:function(p){throw p;},ng:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,w){var v="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(v);return b(y)?String(y):y}b(w)&&""!==w?q.setAttribute(v,
w):q.removeAttribute(v)}function t(q,r){var w=q.ownerDocument;e(this,{root:q,options:r,Ya:w.defaultView||w.parentWindow,wa:w,Eb:ic("",{Ve:!0}),cc:[q],Gc:"",Hc:w.createElement(q.nodeName),Va:[],ka:[]});p(this.Hc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.ka,arguments);for(var q;!this.yb&&this.ka.length;)q=this.ka.shift(),"function"===typeof q?this.df(q):this.Sc(q)};t.prototype.df=function(q){var r={type:"function",value:q.name||q.toString()};this.Dc(r);q.call(this.Ya,this.wa);this.Pd(r)};
t.prototype.Sc=function(q){this.Eb.append(q);for(var r,w=[],v,y;(r=this.Eb.jg())&&!(v=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)w.push(r);this.Hg(w);v&&this.Ff(r);y&&this.Gf(r)};t.prototype.Hg=function(q){var r=this.af(q);r.td&&(r.oc=this.Gc+r.td,this.Gc+=r.fg,this.Hc.innerHTML=r.oc,this.Eg())};t.prototype.af=function(q){var r=this.cc.length,w=[],v=[],y=[];c(q,function(x){w.push(x.text);if(x.D){if(!/^noscript$/i.test(x.tagName)){var z=
r++;v.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.D.id&&"ps-style"!==x.D.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.Xa?" />":">"))}}else v.push(x.text),y.push("endTag"===x.type?x.text:"")});return{hh:q,raw:w.join(""),td:v.join(""),fg:y.join("")}};t.prototype.Eg=function(){for(var q,r=[this.Hc];b(q=r.shift());){var w=1===q.nodeType;if(!w||!p(q,"proxyof")){w&&(this.cc[p(q,"id")]=q,p(q,"id",null));var v=q.parentNode&&p(q.parentNode,"proxyof");
v&&this.cc[v].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Ff=function(q){var r=this.Eb.clear();r&&this.ka.unshift(r);q.src=q.D.src||q.D.Lg;q.src&&this.Va.length?this.yb=q:this.Dc(q);var w=this;this.Gg(q,function(){w.Pd(q)})};t.prototype.Gf=function(q){var r=this.Eb.clear();r&&this.ka.unshift(r);q.type=q.D.type||q.D.Mg||"text/css";this.Ig(q);r&&this.write()};t.prototype.Ig=function(q){var r=this.cf(q);this.Pf(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.wa.createTextNode(q.content)))};t.prototype.cf=function(q){var r=this.wa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.D,function(w,v){r.setAttribute(w,v)});return r};t.prototype.Pf=function(q){this.Sc('<span id="ps-style"/>');var r=this.wa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Dc=function(q){q.Xf=this.ka;this.ka=[];this.Va.unshift(q)};t.prototype.Pd=function(q){q!==this.Va[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Va.shift(),this.write.apply(this,q.Xf),!this.Va.length&&this.yb&&(this.Dc(this.yb),this.yb=null))};t.prototype.Gg=function(q,r){var w=this.bf(q),v=this.ug(w),y=this.options.Le;q.src&&(w.src=q.src,this.rg(w,v?y:function(){r();y()}));try{this.Of(w),q.src&&!v||r()}catch(x){this.options.error(x),r()}};t.prototype.bf=function(q){var r=this.wa.createElement(q.tagName);d(q.D,function(w,v){r.setAttribute(w,v)});q.content&&(r.text=q.content);return r};t.prototype.Of=function(q){this.Sc('<span id="ps-script"/>');
var r=this.wa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.rg=function(q,r){function w(){q=q.onload=q.onreadystatechange=q.onerror=null}var v=this.options.error;e(q,{onload:function(){w();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(w(),r())},onerror:function(){var y={message:"remote script failed "+q.src};w();v(y);r()}})};t.prototype.ug=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.ng&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var v=r.shift(),y;v&&(y=v[v.length-1],y.Me(),v.stream=t.apply(null,v),y.Ne())}function t(v,y,x){function z(F){F=x.Xe(F);w.write(F);x.Oe(F)}w=new n(v,x);w.id=q++;w.name=x.name||w.id;var B=v.ownerDocument,C={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=w.Ya.onerror||a;w.Ya.onerror=function(F,Q,W){x.error({Vg:F+
" - "+Q+":"+W});E.apply(w.Ya,arguments)};w.write(y,function(){e(B,C);w.Ya.onerror=E;x.done();w=null;p()});return w}var q=0,r=[],w=null;return e(function(v,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);v=/^#/.test(v)?l.document.getElementById(v.substr(1)):v.Tg?v[0]:v;var z=[v,y,x];v.$f={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.We(z);r.push(z);w||p();return v.$f},{streams:{},Xg:r,Ng:n})}();jc=l.postscribe}})();var yc={},zc=null,Ac=Math.random();yc.i="GTM-MHH3PJ";yc.sb="5t2";var Bc="www.googletagmanager.com/gtm.js";var Cc=Bc,Dc=null,Ec=null,Fc=null,Gc="//www.googletagmanager.com/a?id="+yc.i+"&cv=105",Hc={},Ic={},Jc=function(){var a=zc.sequence||0;zc.sequence=a+1;return a};var D=function(a,b,c,d){return(2===Kc()||d||"http:"!=f.location.protocol?a:b)+c},Kc=function(){var a=Oa(),b;if(1===a)a:{var c=Cc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Lc=!1;
var Pc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Yc=function(){Qc&&(f.clearTimeout(Qc),Qc=void 0);void 0===Rc||Sc[Rc]&&!Tc||(Uc[Rc]||Vc.Tf()||0>=Wc--?(ab("GTM",1),Uc[Rc]=!0):(Vc.lg(),Qa(Xc()),Sc[Rc]=!0,Tc=""))},Xc=function(){var a=Rc;if(void 0===a)return"";var b=bb("GTM"),c=bb("TAGGING");return[Zc,Sc[a]?"":"&es=1",$c[a],b?"&u="+b:"",c?"&ut="+c:"",Pc(),Tc,"&z=0"].join("")},ad=function(){return[Gc,"&v=3&t=t","&pid="+na(),"&rv="+yc.sb].join("")},bd="0.005000">
Math.random(),Zc=ad(),cd=function(){Zc=ad()},Sc={},Tc="",Rc=void 0,$c={},Uc={},Qc=void 0,Vc=function(a,b){var c=0,d=0;return{Tf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},lg:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Wc=1E3,dd=function(a,b){if(bd&&!Uc[a]&&Rc!==a){Yc();Rc=a;Tc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";$c[a]="&e="+c+"&eid="+a;Qc||(Qc=f.setTimeout(Yc,500))}},ed=function(a,b,c){if(bd&&!Uc[a]&&b){a!==Rc&&(Yc(),Rc=a);var d=String(b[dc.qa]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Tc=Tc?Tc+"."+e:"&tr="+e;Qc||(Qc=f.setTimeout(Yc,500));2022<=Xc().length&&Yc()}};var fd={},gd=new pa,hd={},id={},md={name:"dataLayer",set:function(a,b){Ha(jd(a,b),hd);kd()},get:function(a){return ld(a,2)},reset:function(){gd=new pa;hd={};kd()}},ld=function(a,b){if(2!=b){var c=gd.get(a);if(bd){var d=nd(a);c!==d&&ab("GTM",5)}return c}return nd(a)},nd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:pd(d)},pd=function(a){for(var b=hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var sd=function(a,b){id.hasOwnProperty(a)||(gd.set(a,b),Ha(jd(a,b),hd),kd())},jd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},kd=function(a){ra(id,function(b,c){gd.set(b,c);Ha(jd(b,void 0),hd);Ha(jd(b,c),hd);a&&delete id[b]})},td=function(a,b,c){fd[a]=fd[a]||{};var d=1!==c?nd(b):gd.get(b);"array"===Ea(d)||"object"===Ea(d)?fd[a][b]=Ha(d):fd[a][b]=d},ud=function(a,b){if(fd[a])return fd[a][b]};var vd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),wd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},xd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},yd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ad=function(a){var b=ld("gtm.whitelist");b&&ab("GTM",9);var c=b&&Ca(ua(b),wd),d=ld("gtm.blacklist");d||(d=ld("tagTypeBlacklist"))&&ab("GTM",3);
d?ab("GTM",8):d=[];zd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&ab("GTM",2);var e=d&&Ca(ua(d),xd),g={};return function(h){var k=h&&h[dc.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Ic[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){ab("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&ab("GTM",10);t=r}}var w=!m||t;w||!(0<=la(l,"sandboxedScripts"))||c&&-1!==la(c,"sandboxedScripts")||(w=qa(e,yd));return g[k]=w}},zd=function(){return vd.test(f.location&&f.location.hostname)};var Bd={kf:function(a,b){b[dc.Wc]&&"string"===typeof a&&(a=1==b[dc.Wc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(dc.Yc)&&null===a&&(a=b[dc.Yc]);b.hasOwnProperty(dc.$c)&&void 0===a&&(a=b[dc.$c]);b.hasOwnProperty(dc.Zc)&&!0===a&&(a=b[dc.Zc]);b.hasOwnProperty(dc.Xc)&&!1===a&&(a=b[dc.Xc]);return a}};var Cd={active:!0,isWhitelisted:function(){return!0}},Dd=function(a){var b=zc.zones;!b&&a&&(b=zc.zones=a());return b};var Ed=!1,Fd=0,Gd=[];function Hd(a){if(!Ed){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ed=!0;for(var e=0;e<Gd.length;e++)A(Gd[e])}Gd.push=function(){for(var g=0;g<arguments.length;g++)A(arguments[g]);return 0}}}function Id(){if(!Ed&&140>Fd){Fd++;try{u.documentElement.doScroll("left"),Hd()}catch(a){f.setTimeout(Id,50)}}}var Jd=function(a){Ed?a():Gd.push(a)};var Kd={},Ld={},Md=function(a,b,c){if(!Ld[a])return-1;var d={};Ga(c)&&(d=Ha(c,d));d.id=b;d.status="timeout";return Ld[a].tags.push(d)-1},Nd=function(a,b,c,d){if(Ld[a]){var e=Ld[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Od(a){for(var b=Kd[a]||[],c=0;c<b.length;c++)b[c]();Kd[a]={push:function(d){var e=!1;!e&&d(yc.i)}}}
var Rd=function(a,b,c){Ld[a]={tags:[]};ha(b)&&Pd(a,b);c&&f.setTimeout(function(){return Od(a)},Number(c));return Qd(a)},Pd=function(a,b){Kd[a]=Kd[a]||[];Kd[a].push(ya(function(){return A(function(){var c=!1;!c&&b(yc.i)})}))};function Qd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Od(a)})},Te:function(){d=!0;b>=c&&Od(a)}}};var Sd=function(){function a(d){return!ja(d)||0>d?0:d}if(!zc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(md.get("gtm.start"))?md.get("gtm.start"):0;zc._li={cst:a(c-b),cbt:a(Ec-b)}}};var Wd=!1,Xd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Yd=!1;
var Zd=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||ab("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Sd();return f[b]},$d=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Xd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var be=function(){},ae=function(){return f.GoogleAnalyticsObject||"ga"},ce=!1;var je=function(a){};function ie(a,b){a.containerId=yc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ke(a,b,c,d){var e=Sb[a],g=le(a,b,c,d);if(!g)return null;var h=$b(e[dc.pd],c,[]);if(h&&h.length){var k=h[0];g=ke(k.index,{J:g,O:1===k.yd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function le(a,b,c,d){function e(){if(g[dc.De])k();else{var v=ac(g,c,[]),y=Md(c.id,Number(g[dc.qd]),v[dc.Ee]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"5");Nd(c.id,y,"success",C);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"6");Nd(c.id,y,"failure",C);k()}};v.vtp_gtmTagId=g.tag_id;v.vtp_gtmEventId=
c.id;ed(c.id,g,"1");var z=function(C){var E=wa()-B;je(C);ed(c.id,g,"7");Nd(c.id,y,"exception",E);x||(x=!0,k())};var B=wa();try{Zb(v,c)}catch(C){z(C)}}}
var g=Sb[a],h=b.J,k=b.O,l=b.terminate;if(c.sc(g))return null;var m=$b(g[dc.rd],c,[]);if(m&&m.length){var n=m[0],p=ke(n.index,{J:h,O:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.yd?l:p}if(g[dc.od]||g[dc.Fe]){var t=g[dc.od]?Tb:c.wg,q=h,r=k;if(!t[a]){e=ya(e);var w=me(a,t,e);h=w.J;k=w.O}return function(){t[a](q,r)}}return e}function me(a,b,c){var d=[],e=[];b[a]=ne(d,e,c);return{J:function(){b[a]=oe;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=pe;for(var g=0;g<e.length;g++)e[g]()}}}
function ne(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function oe(a){a()}function pe(a,b){b()};var se=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ra[d]){var e=Sb[d];var g=b.add();try{var h=ke(d,{J:g,O:g,terminate:g},a,d);h?c.push({Zd:d,b:bc(e),xf:h}):(qe(d,a),g())}catch(l){g()}}b.Te();c.sort(re);for(var k=0;k<c.length;k++)c[k].xf();return 0<c.length};function re(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Zd,k=b.Zd;g=h>k?1:h<k?-1:0}return g}
function qe(a,b){if(!bd)return;var c=function(d){var e=b.sc(Sb[d])?"3":"4",g=$b(Sb[d][dc.pd],b,[]);g&&g.length&&c(g[0].index);ed(b.id,Sb[d],e);var h=$b(Sb[d][dc.rd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var te=!1,ue=function(a,b,c,d,e){if("gtm.js"==b){if(te)return!1;te=!0}dd(a,b);var g=Rd(a,d,e);td(a,"event");td(a,"ecommerce",1);td(a,"gtm");var h={id:a,name:b,sc:Ad(c),Ra:[],wg:[],Ld:function(p){ab("GTM",6);je(p)}};h.Ra=hc(h);var k=se(h,g);"gtm.js"!==b&&"gtm.sync"!==b||be();if(!k)return k;for(var l={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,
__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},m=0;m<h.Ra.length;m++)if(h.Ra[m]){var n=Sb[m];if(n&&!l[n[dc.qa]])return!0}return!1};var G={Pb:"event_callback",Rb:"event_timeout"};var we={};var xe=/[A-Z]+/,ye=/\s/,ze=function(a){if(ia(a)&&(a=va(a),!ye.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xe.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}},Ce=function(a){for(var b={},c=0;c<a.length;++c){var d=ze(a[c]);d&&(b[d.id]=d)}Be(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Be(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.da[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var De=null,Ee={},Fe={},Ge,He=function(a,b){var c={event:a};b&&(c.eventModel=Ha(b),b[G.Pb]&&(c.eventCallback=b[G.Pb]),b[G.Rb]&&(c.eventTimeout=b[G.Rb]));return c};
var Me={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Ga(a[2]))return;c=a[2]}var d=He(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];we[b]||(we[b]=[]);we[b].push(c)}},set:function(a){var b;2==a.length&&Ga(a[1])?b=Ha(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ha(b),b.event="gtag.set",b._clear=!0,b}},Ne={policy:!0};var Oe=function(){var a=!1;return a};var Qe=function(a){return Pe?u.querySelectorAll(a):null},Re=function(a,b){if(!Pe)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Se=!1;if(u.querySelectorAll)try{var Te=u.querySelectorAll(":root");Te&&1==Te.length&&Te[0]==u.documentElement&&(Se=!0)}catch(a){}var Pe=Se;var $e=function(a){if(Ze(a))return a;this.Dg=a};$e.prototype.Ef=function(){return this.Dg};var Ze=function(a){return!a||"object"!==Ea(a)||Ga(a)?!1:"getUntrustedUpdateValue"in a};$e.prototype.getUntrustedUpdateValue=$e.prototype.Ef;var af=!1,bf=[];function cf(){if(!af){af=!0;for(var a=0;a<bf.length;a++)A(bf[a])}}var df=function(a){af?A(a):bf.push(a)};var ef=[],ff=!1,gf=function(a){return f["dataLayer"].push(a)},hf=function(a){var b=zc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},kf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&sd(g,void 0),sd(g,h))});Dc||(Dc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Jc(),a["gtm.uniqueEventId"]=d,sd("gtm.uniqueEventId",d));Fc=c;var e=jf(a);
Fc=null;return e};function jf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=zc.zones;d=e?e.checkState(yc.i,c):Cd;return d.active?ue(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var lf=function(){for(var a=!1;!ff&&0<ef.length;){ff=!0;delete hd.eventModel;kd();var b=ef.shift();if(null!=b){var c=Ze(b);if(c){var d=b;b=Ze(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ld(h,1);if(ka(k)||Ga(k))k=Ha(k);id[h]=k}}try{if(ha(b))try{b.call(md)}catch(w){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=ld(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=Me[b[0]];if(r&&(!c||!Ne[b[0]])){b=r(b);break a}}b=void 0}if(!b){ff=!1;continue}}a=kf(b)||a}}finally{c&&kd(!0)}}ff=!1}
return!a},mf=function(){var a=lf();try{var b=yc.i,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},nf=function(){var a=La("dataLayer",[]),b=La("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Jd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});df(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<zc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new $e(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);ef.push.apply(ef,d);if(300<this.length)for(ab("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return lf()&&h};ef.push.apply(ef,a.slice(0));A(mf)};var of;var Kf={};Kf.ob=new String("undefined");
var Lf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Kf.ob?b:a[d]);return c.join("")}};Lf.prototype.toString=function(){return this.resolve("undefined")};Lf.prototype.valueOf=Lf.prototype.toString;Kf.Ge=Lf;Kf.ac={};Kf.pf=function(a){return new Lf(a)};var Mf={};Kf.mg=function(a,b){var c=Jc();Mf[c]=[a,b];return c};Kf.wd=function(a){var b=a?0:1;return function(c){var d=Mf[c];if(d&&"function"===typeof d[b])d[b]();Mf[c]=void 0}};Kf.Rf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Kf.ag=function(a){if(a===Kf.ob)return a;var b=Jc();Kf.ac[b]=a;return'google_tag_manager["'+yc.i+'"].macro('+b+")"};Kf.Vf=function(a,b,c){a instanceof Kf.Ge&&(a=a.resolve(Kf.mg(b,c)),b=fa);return{oc:a,J:b}};var Nf=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ta(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Of=function(a){zc.hasOwnProperty("autoEventsSettings")||(zc.autoEventsSettings={});var b=zc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Pf=function(a,b,c){Of(a)[b]=c},Qf=function(a,b,c,d){var e=Of(a),g=xa(e,b,d);e[b]=c(g)},Rf=function(a,b,c){var d=Of(a);return xa(d,b,c)};var Sf=function(){for(var a=Ia.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Vf=function(a,b,c,d){var e=Tf(b);return lb(a,e,Uf(c),d)},Tf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Uf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Wf(a,b){var c=""+Tf(a),d=Uf(b);1<d&&(c+="-"+d);return c};var Xf=["1"],Yf={},bg=function(a,b,c,d){var e=Zf(a);Yf[e]||$f(e,b,c)||(ag(e,Sf(),b,c,d),$f(e,b,c))};function ag(a,b,c,d,e){var g;g=["1",Wf(d,c),b].join(".");pb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function $f(a,b,c){var d=Vf(a,b,c,Xf);d&&(Yf[a]=d);return d}function Zf(a){return(a||"_gcl")+"_au"};var cg=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Oc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Oc]||(g[a[h].Oc]=[]),g[a[h].Oc].push({timestamp:k[1],Bf:k[2]}))}return g};function dg(){for(var a=eg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function fg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var eg,gg,hg=function(a){eg=eg||fg();gg=gg||dg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(eg[l],eg[m],eg[n],eg[p])}return b.join("")},ig=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=gg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}eg=eg||fg();gg=gg||
dg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jg;function kg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var og=function(){var a=lg,b=mg,c=ng(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Ra(u,"mousedown",d);Ra(u,"keyup",d);Ra(u,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},ng=function(){var a=La("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var pg=/(.*?)\*(.*?)\*(.*)/,qg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,rg=/^(?:www\.|m\.|amp\.)+/,sg=/([^?#]+)(\?[^#]*)?(#.*)?/,tg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,vg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(hg(String(d))))}var e=b.join("*");return["1",ug(e),e].join("*")},ug=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}jg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^jg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},xg=function(){return function(a){var b=hb(f.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=wg(d)||{};var e=gb(b,"fragment").match(tg);a.fragment=wg(e&&e[3]||
"")||{}}},wg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=pg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ug(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=ig(t[q+1]);return p}}}}catch(r){}};
function yg(a,b,c){function d(m){var n=m,p=tg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+l}c=void 0===c?!1:c;var e=sg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function zg(a,b,c){for(var d={},e={},g=ng().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&kg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=vg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var w=yg(l,a.action);Ya.test(w)&&(a.action=w)}}}else Ag(l,a,!1)}if(!c&&Aa(e)){var v=vg(e);Ag(v,a,!0)}}function Ag(a,b,c){if(b.href){var d=yg(a,b.href,void 0===c?!1:c);Ya.test(d)&&(b.href=d)}}
var lg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||zg(e,e.hostname,!1)}}catch(h){}},mg=function(a){try{if(a.action){var b=gb(hb(a.action),"host");zg(a,b,!0)}}catch(c){}},Bg=function(a,b,c,d){og();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};ng().decorators.push(e)},Cg=function(){var a=u.location.hostname,b=qg.exec(u.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(rg,"")===e.replace(rg,"")},Dg=function(a,b){return!1===a?!1:a||b||Cg()};var Eg={};var Fg=/^\w+$/,Gg=/^[\w-]+$/,Hg=/^~?[\w-]+$/,Ig={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Jg(a){return a&&"string"==typeof a&&a.match(Fg)?a:"_gcl"}var Lg=function(){var a=hb(f.location.href),b=gb(a,"query",!1,void 0,"gclid"),c=gb(a,"query",!1,void 0,"gclsrc"),d=gb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Kg(b,c,d)};
function Kg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Gg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Eg.gtm_3pds?0:Eg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Mg(a,b,c){function d(p,t){var q=Ng(p,e);q&&pb(q,t,h,g,l,!0)}b=b||{};var e=Jg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Md?7776E3:b.Md;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.jh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Ng=function(a,b){var c=Ig[a];if(void 0!==c)return b+c},Og=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Pg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Qg=function(a,b,c,d,e){if(ka(b)){var g=Jg(e);Bg(function(){for(var h={},k=0;k<a.length;++k){var l=Ng(a[k],g);if(l){var m=ib(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Rg=function(a){return a.filter(function(b){return Hg.test(b)})},Sg=function(a){for(var b=["aw","dc"],c=Jg(a&&a.prefix),d={},e=0;e<b.length;e++)Ig[b[e]]&&(d[b[e]]=Ig[b[e]]);ra(d,function(g,h){var k=ib(c+h,u.cookie);if(k.length){var l=k[0],m=Og(l),n={};n[g]=[Pg(l)];Mg(n,a,m)}})};var Tg=/^\d+\.fls\.doubleclick\.net$/;function Ug(a){var b=hb(f.location.href),c=gb(b,"host",!1);if(c&&c.match(Tg)){var d=gb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Vg(a,b){if("aw"==a||"dc"==a){var c=Ug("gcl"+a);if(c)return c.split(".")}var d=Jg(b);if("_gcl"==d){var e;e=Lg()[a]||[];if(0<e.length)return e}var g=Ng(a,d),h;if(g){var k=[];if(u.cookie){var l=ib(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Pg(l[m]);n&&-1===la(k,n)&&k.push(n)}h=Rg(k)}else h=k}else h=k}else h=[];return h}
var Wg=function(){var a=Ug("gac");if(a)return decodeURIComponent(a);var b=cg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Bf);g=Rg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Xg=function(a,b,c,d,e){bg(b,c,d,e);var g=Yf[Zf(b)],h=Lg().dc||[],k=!1;if(g&&0<h.length){var l=zc.joined_au=zc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Qa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Zf(b),r=Yf[q];r&&ag(q,r,c,d,e)}};var Yg;if(3===yc.sb.length)Yg="g";else{var Zg="G";Yg=Zg}
var $g={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Yg},ah=function(a){var b=yc.i.split("-"),c=b[0].toUpperCase(),d=$g[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===yc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+yc.sb+
e};var hh=!!f.MutationObserver,ih=void 0,jh=function(a){if(!ih){var b=function(){var c=u.body;if(c)if(hh)(new MutationObserver(function(){for(var e=0;e<ih.length;e++)A(ih[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ra(c,"DOMNodeInserted",function(){d||(d=!0,A(function(){d=!1;for(var e=0;e<ih.length;e++)A(ih[e])}))})}};ih=[];u.body?b():A(b)}ih.push(a)};var Bh=f.clearTimeout,Ch=f.setTimeout,H=function(a,b,c){if(Oe()){b&&A(b)}else return Na(a,b,c)},Dh=function(){return new Date},Eh=function(){return f.location.href},Fh=function(a){return gb(hb(a),"fragment")},Gh=function(a){return fb(hb(a))},Hh=null;
var Ih=function(a,b){return ld(a,b||2)},Jh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return gf(a)},Kh=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||c&&!f[a])&&(f[a]=b);return f[a]},Lh=function(a,b,c){return ib(a,b,void 0===c?!0:!!c)},Mh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Md:d},g=Lg();Mg(g,e);Sg(e)},Nh=function(a,b,c,d,e){var g=xg(),h=ng();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(za(k,l.query),za(k,l.fragment));for(var m=Jg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==Ig[p]){var t=Ng(p,m),q=k[t];if(q){var r=Math.min(Og(q),wa()),w;b:{for(var v=r,y=ib(t,u.cookie),x=0;x<y.length;++x)if(Og(y[x])>v){w=!0;break b}w=!1}w||pb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var z={prefix:b,path:c,domain:d};Mg(Kg(k.gclid,k.gclsrc),z);},Oh=function(a,b,c,d,e){Qg(a,b,c,d,e);},
Ph=function(a,b){if(Oe()){b&&A(b)}else Pa(a,b)},Qh=function(a){return!!Rf(a,"init",!1)},Rh=function(a){Pf(a,"init",!0)},Sh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Cc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});H(D("https://","http://",d))},Th=function(a,b){var c=a[b];return c};
var Vh=Kf.Vf;var Wh=new pa,Xh=function(a,b){function c(h){var k=hb(h),l=gb(k,"protocol"),m=gb(k,"host",!0),n=gb(k,"port"),p=gb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Yh=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Yh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Wh.get(q);r||(r=new RegExp(c,t),Wh.set(q,r));p=r.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Xh(b,c)}return!1};var $h=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ai={},bi=encodeURI,L=encodeURIComponent,ci=Qa;var di=function(a,b){if(!a)return!1;var c=gb(hb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var ei=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};ai.Sf=function(){var a=!1;return a};var fi=function(){var a=!1;return a};var Pi=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Qi=function(){this.c=1;this.e=[];this.p=null};function Ri(a){var b=zc,c=b.gss=b.gss||{};return c[a]=c[a]||new Qi}var Si=function(a,b){Ri(a).p=b},Ti=function(a){var b=Ri(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var Vi=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||na();return a.hid};var jj=window,kj=document,lj=function(a){var b=jj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===jj["ga-disable-"+a])return!0;try{var c=jj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=ib("AMP_TOKEN",kj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return kj.getElementById("__gaOptOutExtension")?!0:!1};var sj=function(a,b,c){rj(a);var d=Math.floor(wa()/1E3);Ri(a).e.push(new Pi(b,d,c,void 0));Ti(a)},tj=function(a,b,c){rj(a);var d=Math.floor(wa()/1E3);Ri(a).e.push(new Pi(b,d,c,!0))},rj=function(a){if(1===Ri(a).c&&(Ri(a).c=2,!Oe())){var b=encodeURIComponent(a);Na(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},vj=function(a,b){},uj=function(a,
b){};var Y={a:{}};
Y.a.ctv=["google"],function(){(function(a){Y.__ctv=a;Y.__ctv.g="ctv";Y.__ctv.h=!0;Y.__ctv.b=0})(function(){return"105"})}();
Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.g="c";Y.__c.h=!0;Y.__c.b=0})(function(a){return a.vtp_value})}();

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(a){return String(ud(a.vtp_gtmEventId,"event"))})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=K(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return Lh(a.vtp_name,Ih("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Ih("gtm.url",1))||Eh();var d=b[a("vtp_component")];if(!d||"URL"==d)return Gh(String(c));var e=hb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=gb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=gb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Ih(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;Ha(ei(m.vtp_fieldsToSet,"fieldName","value"),e);Ha(ei(m.vtp_contentGroup,"index","group"),g);Ha(ei(m.vtp_dimension,"index","dimension"),h);Ha(ei(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=Ha(m);c=Ha(c,n)}Ha(ei(c.vtp_fieldsToSet,"fieldName","value"),e);Ha(ei(c.vtp_contentGroup,
"index","group"),g);Ha(ei(c.vtp_dimension,"index","dimension"),h);Ha(ei(c.vtp_metric,"index","metric"),k);var p=Zd(c.vtp_functionName);if(ha(p)){var t="",q="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(q=c.vtp_trackerName,t=q+"."):(q="gtm"+Jc(),t=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(U){var N=[].slice.call(arguments,0);N[0]=t+N[0];p.apply(window,N)},y=function(U,N){return void 0===N?N:U(N)},x=function(U,N){if(N)for(var Z in N)N.hasOwnProperty(Z)&&v("set",U+Z,N[Z])},z=function(){
var U=function(Cb,rb,sc){if(!Ga(rb))return!1;for(var tc=xa(Object(rb),sc,[]),Ae=0;tc&&Ae<tc.length;Ae++)v(Cb,tc[Ae]);return!!tc&&0<tc.length},N;if(c.vtp_useEcommerceDataLayer){var Z=!1;Z||(N=Ih("ecommerce",1))}else c.vtp_ecommerceMacroData&&(N=c.vtp_ecommerceMacroData.ecommerce);if(!Ga(N))return;N=Object(N);var oa=xa(e,"currencyCode",N.currencyCode);
void 0!==oa&&v("set","&cu",oa);U("ec:addImpression",N,"impressions");if(U("ec:addPromo",N[N.promoClick?"promoClick":"promoView"],"promotions")&&N.promoClick){v("ec:setAction","promo_click",N.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Ja=0;Ja<Ba.length;Ja++){var Za=N[Ba[Ja]];if(Za){U("ec:addProduct",Za,"products");v("ec:setAction",Ba[Ja],Za.actionField);break}}},
B=function(U,N,Z){var oa=0;if(U)for(var Ba in U)if(U.hasOwnProperty(Ba)&&(Z&&r[Ba]||!Z&&void 0===r[Ba])){var Ja=w[Ba]?ta(U[Ba]):U[Ba];"anonymizeIp"!=Ba||Ja||(Ja=void 0);N[Ba]=Ja;oa++}return oa},C={name:q};B(e,C,!0);(function(){})();p("create",c.vtp_trackingId||d.trackingId,C);v("set","&gtm",ah(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(U,N){void 0!==
c[N]&&v("set",U,c[N])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};B(e,E,!1)&&v("set",E);var F;c.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var U=e&&e.hitCallback;ha(U)&&U();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){
c.vtp_enableEcommerce&&(v("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(sa,c.vtp_eventValue||d.value)};B(F,Q,!1);v("send",Q);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),z());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var S="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:S})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");v("require","adfeatures",{cookieName:X})}F?v("send","pageview",F):v("send","pageview");}if(!a){var V=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(V="internal/"+V);a=!0;var ea=D("https:","http:",
"//www.google-analytics.com/"+V,e&&e.forceSSL);H(ea,function(){var U=Xd();U&&U.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else A(c.vtp_gtmOnFailure)};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();

Y.a.jel=["google"],function(){(function(a){Y.__jel=a;Y.__jel.g="jel";Y.__jel.h=!0;Y.__jel.b=0})(function(a){if(!Qh("jel")){var b=K("self"),c=b.onerror;b.onerror=function(d,e,g,h,k){c&&c(d,e,g,h,k);Jh({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":g});return!1};Rh("jel")}A(a.vtp_gtmOnSuccess)})}();


Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.g="cid";Y.__cid.h=!0;Y.__cid.b=0})(function(){return yc.i})}();

Y.a.aev=["google"],function(){function a(l,m){var n=!1,p;var t=ud(l,"gtm");if(!t)return;n=!0;p=t[m];n||(p=Ih("gtm."+m,1));return p}function b(l,m,n){var p=a(l,k[m]);return void 0!==p?p:n}function c(l,m){if(!l)return!1;var n=d(Eh());ka(m)||(m=String(m||"").replace(/\s+/g,"").split(","));for(var p=[n],t=0;t<m.length;t++)if(m[t]instanceof RegExp){if(m[t].test(l))return!1}else{var q=m[t];if(0!=q.length){if(0<=
d(l).indexOf(q))return!1;p.push(d(q))}}return!di(l,p)}function d(l){e.test(l)||(l="http://"+l);return gb(hb(l),"HOST",!0)}var e=/^https?:\/\//i,g={},h=[],k={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(l){Y.__aev=l;Y.__aev.g=
"aev";Y.__aev.h=!0;Y.__aev.b=0})(function(l){var m=l.vtp_gtmEventId,n=l.vtp_defaultValue,p=l.vtp_varType;switch(p){case "TAG_NAME":var t=a(m,"element");return t&&t.tagName||n;case "TEXT":var q=m+"."+p,r;if(ia(g[q]))r=g[q];else{var w=a(m,"element");if(w&&(r=Ua(w),g[q]=r,h.push(q),25<h.length)){var v=h.shift();delete g[v]}}return r||n;case "URL":var y;a:{var x=String(a(m,"elementUrl")||n||""),z=hb(x),B=String(l.vtp_component||"URL");switch(B){case "URL":y=x;break a;case "IS_OUTBOUND":y=c(x,l.vtp_affiliatedDomains);
break a;default:y=gb(z,B,l.vtp_stripWww,l.vtp_defaultPages,l.vtp_queryKey)}}return y;case "ATTRIBUTE":var C;if(void 0===l.vtp_attribute)C=b(m,p,n);else{var E=l.vtp_attribute,F=a(m,"element");C=F&&Ta(F,E)||n||""}return C;default:return b(m,p,n)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.b=0})(function(a){var b=Ha(a),c=b;c[dc.qa]=null;c[dc.Be]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();


Y.a.fsl=[],function(){function a(){var e=K("document"),g=c(),h=HTMLFormElement.prototype.submit;Ra(e,"click",function(k){var l=k.target;if(l&&(l=Wa(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Ta(l,"value")){var m;(m=l.form?l.form.tagName?l.form:u.getElementById(l.form):Wa(l,["form"],100))&&g.store(m,l)}},!1);Ra(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,p=!0;if(d(l,function(){if(p){var t=g.get(l),
q;t&&(q=e.createElement("input"),q.type="hidden",q.name=t.name,q.value=t.value,l.appendChild(q));h.call(l);q&&l.removeChild(q)}},m,n))p=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return ma(e,function(k){return k.form===
h})};return{store:function(h,k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k){var l=Rf("fsl",h?"nv.mwt":"mwt",0),m;m=h?Rf("fsl","nv.ids",[]):Rf("fsl","ids",[]);if(!m.length)return!0;var n=Nf(e,"gtm.formSubmit",m),p=e.action;p&&p.tagName&&(p=e.cloneNode(!1).action);n["gtm.elementUrl"]=p;if(k&&l){if(!Jh(n,hf(g),l))return!1}else Jh(n,function(){},l||2E3);return!0}(function(e){Y.__fsl=e;Y.__fsl.g="fsl";Y.__fsl.h=!0;Y.__fsl.b=
0})(function(e){var g=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};Qf("fsl","mwt",m,0);h||Qf("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};Qf("fsl","ids",n,[]);h||Qf("fsl","nv.ids",n,[]);Qh("fsl")||(a(),Rh("fsl"));A(e.vtp_gtmOnSuccess)})}();





Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ma(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){A(h)}}}var b=function(d,e,g){Jd(function(){var h,k=zc;k.postscribe||(k.postscribe=jc);h=k.postscribe;var l={done:e},m=u.createElement("div");m.style.display="none";m.style.visibility="hidden";u.body.appendChild(m);try{h(m,d,l)}catch(n){A(g)}})};var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Vh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Va(h),k,e)()}else Ch(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();




Y.a.csm=["nonGoogleScripts"],function(){(function(a){Y.__csm=a;Y.__csm.g="csm";Y.__csm.h=!0;Y.__csm.b=0})(function(a){var b=K("document");ci(function(d){if(2048<d.length){var e=d.substring(0,2040).lastIndexOf("&");d=d.substring(0,e)+"&ns_cut="+L(d.substring(e+1));d=d.substring(0,2048)}return d}(function(d,e){var g=Dh(),h=(e||"").split("&");e="";for(var k=0;k<h.length;k++)if(h[k]){var l=h[k].match(/([^=]*)=?(.*)/);e+="&"+L(l[1])+"="+L(l[2])}return D("https://sb","http://b",".scorecardresearch.com/b?c1=2&c2="+
L(d)+"&ns__t="+g.valueOf()+"&ns_c="+(b.characterSet||b.defaultCharset||"")+"&c8="+L(b.title||"")+e+"&c7="+L(b.URL)+"&c9="+L(b.referrer))}(a.vtp_clientId,function(){var d="",e=b.cookie;if(0<=e.indexOf("comScore"))for(var g=e.split(";"),h=0;h<g.length;h++){var k=g[h].indexOf("comScore");0<=k&&(d=unescape(g[h].substring(k+8)))}return d}())));var c=function(){var d=D("https://sb","http://b",".scorecardresearch.com/c2/"+L(a.vtp_clientId)+"/cs.js");H(d,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)};"complete"===
b.readyState?c():Ra(K("self"),"load",c)})}();var wj={};wj.macro=function(a){if(Kf.ac.hasOwnProperty(a))return Kf.ac[a]},wj.onHtmlSuccess=Kf.wd(!0),wj.onHtmlFailure=Kf.wd(!1);wj.dataLayer=md;wj.callback=function(a){Hc.hasOwnProperty(a)&&ha(Hc[a])&&Hc[a]();delete Hc[a]};wj.Ye=function(){zc[yc.i]=wj;za(Ic,Y.a);Wb=Wb||Kf;Xb=Bd};
wj.Nf=function(){Eg.gtm_3pds=!0;zc=f.google_tag_manager=f.google_tag_manager||{};if(zc[yc.i]){var a=zc.zones;a&&a.unregisterChild(yc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(p)}Ub=Y;Vb=Yh;wj.Ye();nf();Ed=!1;Fd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Hd();else{Ra(u,"DOMContentLoaded",Hd);Ra(u,"readystatechange",Hd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&Id()}Ra(f,"load",Hd)}af=!1;"complete"===u.readyState?cf():
Ra(f,"load",cf);a:{if(!bd)break a;f.setInterval(cd,864E5);}
Ec=(new Date).getTime();}};(0,wj.Nf)();

})()
