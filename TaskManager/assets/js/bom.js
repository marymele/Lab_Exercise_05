/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the children[0].innerText property to display the result on each element 
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
const Cookie = document.querySelector(".CookieEnabled");

    //Screen Information
const Height = document.querySelector(".Height");
const Width = document.querySelector(".Width");
const Pixel = document.querySelector(".PixelDepth");

    //Browsing History Information
const Length=document.querySelector(".Length");
const State=document.querySelector(".State");


// Display the BOM Information on the children[0].innerText of the elements


Href.addEventListener("click",showHref);
Protocol.addEventListener("click",showProtocol);
Host.addEventListener("click",showHost);
Port.addEventListener("click",showPort);
HostName.addEventListener("click",showHostName);

AppName.addEventListener("click",showAppName);
AppVersion.addEventListener("click",showAppVersion);
Platform.addEventListener("click",showPlatform);
Language.addEventListener("click",showLanguage);
Cookie.addEventListener("click",showCookieEnabled);

Height.addEventListener("click",showHeight);
Width.addEventListener("click",showWidth);
Pixel.addEventListener("click",showPixelDepth);

Length.addEventListener("click",showLength);
State.addEventListener("click",showState);


function showHref(){
    
    Href.children[0].innerHTML = document.URL;
    
    }
    
function showProtocol(){
   
    Protocol.children[0].innerText  = location.protocol;
    
    }
    
    function showHost(){
        
        Host.children[0].innerText = location.host;
       
    }
    
    function showPort(){
        Port.children[0].innerText = location.port;
    }
    
    function showHostName(){
        HostName.children[0].innerText = location.hostname;
    }

    function showAppName(){
        AppName.children[0].innerText = window.navigator.appName;
    }
    
    function showAppVersion(){
        AppVersion.children[0].innerText = window.navigator.appVersion;
    }
    
    function showPlatform(){
        Platform.children[0].innerText = window.navigator.platform;
    }
    
    function showLanguage(){
        Language.children[0].innerText = window.navigator.language;
    }
    
    function showCookieEnabled(){
        Cookie.children[0].innerText = window.navigator.cookieEnabled;
    }

    function showHeight(){
        Height.children[0].innerText = window.outerHeight;
    }
    
    function showWidth(){
        Width.children[0].innerText = window.outerWidth;
    }
    
    function showPixelDepth(){
        Pixel.children[0].innerText = screen.pixelDepth;
    }

    function showLength(){
        Length.children[0].innerText = history.length;
    }
    
    function showState(){
        State.children[0].innerText = history.state;
    }


    