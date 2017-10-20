//#######################################################
// Header
//#######################################################

function get_gravatar(email, size = 80) {
    const MD5 = function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
    return 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size;
}

document.querySelector(".avatar").src = get_gravatar('hugodeiro@gmail.com', 220);

//TypeWritting
((selector, type, interval) => {
    let el = document.querySelectorAll(selector);
    let i = 0;
    let len = el.length; // Length of element on the page
    let list = []; // List of elements on the page in the DOM
    let a;
    let all;
    let text;
    let start;
    let end;
    let nextText;
    let style;
    let clear;

    for (; i < len; i++)
        list.push(el[i]); // Pushing the element in the list array

    for (a in list) {
        all = list[a]; // List of all element
        text = all.innerHTML += " <span id='cursor'>|</span>"; // InnerHTML of the elements 
        start = 0; // Start index of the text in the elements 
        end = 0; // End index of the text in the elements
        style = document.createElement("style");
        document.head.appendChild(style);

        //Setting the default interval to 100 when interval is not set by the user
        if (typeof interval === "undefined") {
            interval = 100;
        }

        if (el) {
            clear = setInterval(function () { // Animation start
                var newText = text.substr(start, end);
                all.innerHTML = newText += " <span id='cursor'>|</span>";

                end = end + 1; //loops through the text in the element

                // Insert stylesheet to the document to animate cursor 
                style.sheet.insertRule("@-webkit-keyframes cursor {0% { opacity : 1;}100% { opacity : 0;}}", 0);
                style.sheet.insertRule("@keyframes cursor {0% { opacity : 1;}100% { opacity : 0;}}", 0);
                cursor.style.fontSize = "1em";
                cursor.style.fontWeight = "bold";
                cursor.style.webkitAnimation = "cursor 0.5s infinite";
                cursor.style.animation = "cursor 0.5s infinite";

                if (newText === text) {
                    clearInterval(clear); // Animation end
                }
            }, interval);
        }

        return all;
    }
})(".typing","true", 30);
    
//#######################################################
// Skills
//#######################################################

const techskills = [
    {name: "HTML5", color: "white", bg: "#E34F26"},
    {name: "CSS3", color: "white", bg: "#1E90FF"},
    {name: "SASS", color: "white", bg: "#C6538C"},
    {name: "JavaScript", color: "white", bg: "#DAA520"},
    {name: "AngularJS", color: "white", bg: "#B52E31"},
    {name: "TypeScript", color: "white", bg: "#294E80"},
    {name: "Ionic", color: "white", bg: "#296AD4"},
    {name: "Phonegap", color: "white", bg: "#999999"},
    {name: "Cordova", color: "white", bg: "#BFBFBF"},
    {name: "Grunt", color: "white", bg: "#FBA919"},
    {name: "Gulp", color: "white", bg: "#E84B4B"},
    {name: "Bower", color: "white", bg: "#EF5734"},
    {name: "NPM", color: "white", bg: "#CB3837"},
    {name: "PHP", color: "white", bg: "#617CBE"},
    {name: "Laravel", color: "white", bg: "#F4645F"},
    {name: "SQL", color: "white", bg: "#E48D07"},
    {name: "Design Patterns", color: "white", bg: "#A71A3A"},
    {name: "UML", color: "white", bg: "#29006A"},
    {name: "SCRUM", color: "white", bg: "#F89826"},
    {name: "Kanban", color: "white", bg: "#5C2A04"},
    {name: "Git", color: "white", bg: "#F44D27"},
    {name: "Subversion (SVN)", color: "white", bg: "#809CC8"},
];

document.querySelector(".techskillsset").innerHTML = techskills.reduce((sum, skill) => {
    let delay = Math.floor(Math.random() * 5) + 1;
    
    return sum + `<span class="skill" style="color:${skill.color}; background-color:${skill.bg}; animation-delay:${300 * delay}ms;">${skill.name}</span>`;
    // return sum + `<span class="skill" style="color:${skill.color}; background-color:${skill.bg}; animation-delay:${300 * delay}ms;">${skill.name}</span>`;
}, '');

const otherskills = [
    {name: "Inglês (C1)", color: "white", bg: "#875346"},
    {name: "CorelDRAW", color: "white", bg: "#61A706"},
    {name: "Interpessoalidade", color: "white", bg: "#9317C1"},
    {name: "Curiosidade", color: "white", bg: "#FCB525"},
    {name: "Oralidade", color: "white", bg: "#3382C7"},
    {name: "Escrita", color: "white", bg: "#003E06"},
    {name: "Organização", color: "white", bg: "#DF651B"},
    {name: "Criatividade", color: "white", bg: "#EF02BB"},
    {name: "Good Player!", color: "white", bg: "#C80432"},
];

document.querySelector(".otherskillset").innerHTML = otherskills.reduce((sum, skill) => {
    let delay = Math.floor(Math.random() * 4) + 1;
    
    return sum + `<span class="skill" style="color:${skill.color}; background-color:${skill.bg}; animation-delay:${300 * delay}ms;">${skill.name}</span>`;
}, '');








