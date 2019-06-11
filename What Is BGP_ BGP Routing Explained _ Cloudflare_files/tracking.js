(function(w, d, n) {
    var version = "1.5";
    var blackList = {
        cids: [],
        agents: [],
        paths: [],
        pathPrefixes: [
            'https://zoom.us',
            'https://www.zoom.us',
            'https://www.cloudflarestatus.com/',
            'https://1.1.1.1/',
            'https://support.cloudflare.com/hc/en-us/articles/200171936-Error-520',
            'https://support.cloudflare.com/hc/en-us/articles/200171906-Error-522',
            'https://support.cloudflare.com/hc/en-us',
            'https://support.cloudflare.com/hc/en-us/requests/new',
            'https://www.cloudflarestatus.com/?_ga=2.35996259.2108316469.1554333761-13370612.1552956708',
            'https://www.cloudflarestatus.com/?_ga=2.206399059.190221946.1556053151-1076456093.1556053151',
            'https://support.cloudflare.com/hc/en-us/articles/200171916-Error-521',
            'https://1.1.1.1/pt-BR/dns/',
            'https://support.cloudflare.com/hc/en-us/articles/217720788-Why-doesn-t-my-site-display-correctly-when-sharing-to-Facebook-',
            'https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack',
            'https://www.cloudflare.com/learning/cdn/what-is-a-cdn',
            'https://www.cloudflare.com/learning/dns/what-is-dns'
        ]
    };

    if (!Array.prototype.indexOf)  Array.prototype.indexOf = (function(Object, max, min) {
        "use strict";
        return function indexOf(member, fromIndex) {
          if (this===null || this===undefined) throw TypeError("Array.prototype.indexOf called on null or undefined");

          var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len);
          if (i < 0) i = max(0, Len+i); else if (i >= Len) return -1;

          if (member===void 0) { for (; i !== Len; ++i) if (that[i]===void 0 && i in that) return i; // undefined
          } else if(member !== member) { for (; i !== Len; ++i) if (that[i] !== that[i]) return i; // NaN
          } else for (; i !== Len; ++i) if (that[i] === member) return i; // all else

          return -1; // if the value was not found, then return -1
        };
    })(Object, Math.max, Math.min);

    var trackingName = 'techtargetic';
    w[trackingName] = w[trackingName] || {};
    if (w[trackingName].client && w[trackingName].client !== '') {
        var cid = w[trackingName].client;

        var agent = n && n.userAgent ? n.userAgent : null;
        if (blackList.cids.indexOf(cid) === -1) {
            var blocked = false;
            var referrer = w.location.protocol + '//' + w.location.hostname + w.location.pathname + w.location.search;

            for (var x = 0; x < blackList.agents.length; x++) {
                // if (agent.toLowerCase().indexOf(blackList.agents[x].toLowerCase()) !== -1) {
                if (agent.indexOf(blackList.agents[x]) !== -1) {
                    blocked = true;
                    break;
                }
            }

            if (!blocked && blackList.pathPrefixes.length) {
                for (var x = 0; x < blackList.pathPrefixes.length; x++) {
                    if (referrer.indexOf(blackList.pathPrefixes[x]) === 0) {
                        blocked = true;
                        break;
                    }
                }
            }

            if (!blocked && blackList.paths.length) {
                for (var x = 0; x < blackList.paths.length; x++) {
                    if (referrer.indexOf(blackList.paths[x]) !== -1) {
                        blocked = true;
                        break;
                    }
                }
            }

            if (!blocked) {
                referrer = encodeURIComponent(referrer);
                var i = d.createElement("img");
                i.width = '1';
                i.height = '1';
                i.style = 'display: none'
                i.setAttribute('aria-hidden', true);
                i.src = 'https://go.techtarget.com/activity/activity.gif?activityTypeId=31&cid=' + w[trackingName].client + '&version=' + version + '&ref=' + referrer + '&r=' + Date.now();
                w.addEventListener('load', function() {
                    d.body.appendChild(i);
                }, false)
            }
        }
    }
})(window, document, navigator);