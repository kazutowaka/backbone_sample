var probeDetails = '';
probe = {};
probe.createIdent = function() {
    var ident;
    ident = '';
    ident += screen.width;
    ident += screen.height;
    ident += screen.availWidth;
    ident += screen.availHeight;
    ident += screen.colorDepth;
    ident += navigator.language;
    ident += navigator.platform;
    ident += navigator.userAgent;
    ident += navigator.plugins.length;
    ident += navigator.javaEnabled();
    ident += '211';
    ident = hex_md5(ident);
    this.ident = ident.substr(0, this.identLength);

}
probe.setIdentLength = function(len) {
    this.identLength = len;
}
probe.getIdent = function() {
    return this.ident;
}

