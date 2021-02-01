/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 

    //Location information
const Href = document.querySelector(".Href");
const Protocol = document.querySelector(".Protocol");
const Host = document.querySelector(".Host");
const Port = document.querySelector(".Port");
const HostName = document.querySelector(".HostName");


    //Browser Information
const AppName = document.querySelector(".AppName");
const AppVersion = document.querySelector(".AppVersion");
const Platform = document.querySelector(".Platform");
const Language = document.querySelector(".Language");
const CookieEnabled = document.querySelector(".CookieEnabled");

    //Screen Information
const Height = document.querySelector(".Height");
const Width = document.querySelector(".Width");
const PixelDepth = document.querySelector(".PixelDepth");

    //Browsing History Information
const Length=document.querySelector(".Length");
const State=document.querySelector(".State");


// Display the BOM Information on the innerHTML of the elements


Href.addEventListener("click",showHref);
Protocol.addEventListener("click",showProtocol);
Host.addEventListener("click",showHost);
Port.addEventListener("click",showPort);
HostName.addEventListener("click",showHostName);

AppName.addEventListener("click",showAppName);
AppVersion.addEventListener("click",showAppVersion);
Platform.addEventListener("click",showPlatform);
Language.addEventListener("click",showLanguage);
CookieEnabled.addEventListener("click",showCookieEnabled);

Height.addEventListener("click",showHeight);
Width.addEventListener("click",showWidth);
PixelDepth.addEventListener("click",showPixelDepth);

Length.addEventListener("click",showLength);
State.addEventListener("click",showState);


function showHref(){
    var href = document.getElementsByClassName("badge")[0];
    href.innerHTML = document.URL;
    return href;
    }
    
function showProtocol(){
    var protocol = document.getElementsByClassName("protocol-badge")[0];
    protocol.innerHTML = location.protocol;
    return protocol;
    }
    
    function showHost(){
        var host = document.getElementsByClassName("host-badge")[0];
        host.innerHTML = location.host;
        return host;
    }
    
    function showPort(){
        var port = document.getElementsByClassName("port-badge")[0];
        port.innerHTML = location.port;
        return port;
    }
    
    function showHostName(){
        var hostName = document.getElementsByClassName("hostName-badge")[0];
        hostName.innerHTML = location.hostname;
        return hostName;
    }

    function showAppName(){
        var appName = document.getElementsByClassName("appName-badge")[0]
        appName.innerHTML = window.navigator.appName;
        return appName;
    }
    
    function showAppVersion(){
        var appVersion = document.getElementsByClassName("appVersion-badge")[0]
        appVersion.innerHTML = window.navigator.appVersion;
        return appVersion;
    }
    
    function showPlatform(){
        var platform = document.getElementsByClassName("platform-badge")[0]
        platform.innerHTML = window.navigator.platform;
        return platform;
    }
    
    function showLanguage(){
        var language = document.getElementsByClassName("language-badge")[0]
        language.innerHTML = window.navigator.language;
        return language;
    }
    
    function showCookieEnabled(){
        var cookie = document.getElementsByClassName("cookieEnabled-badge")[0]
        cookie.innerHTML = window.navigator.cookieEnabled;
        return cookie;
    }

    function showHeight(){
        var height = document.getElementsByClassName("badge-height")[0];
        height.innerHTML = window.outerHeight;
        return height;
    }
    
    function showWidth(){
        var width = document.getElementsByClassName("badge-width")[0];
        width.innerHTML = window.outerWidth;
        return width;
    }
    
    function showPixelDepth(){
        var pixel = document.getElementsByClassName("badge-pixelDepth")[0];
        pixel.innerHTML = screen.pixelDepth;
        return pixel;
    }

    function showLength(){
        var length = document.getElementsByClassName("badge-length")[0];
        length.innerHTML = history.length;
        return length;
    }
    
    function showState(){
        var state = document.getElementsByClassName("badge-state")[0];
        state.innerHTML = history.state;
        return state;
    }


    