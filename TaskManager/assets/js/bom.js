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
        var answer = document.getElementsByClassName("port-badge")[0];
        answer.innerHTML = location.port;
        return answer;
    }
    
    function showHostName(){
        var hostName = document.getElementsByClassName("hostName-badge")[0];
        hostName.innerText = location.hostname;
        return hostName;
    }

    