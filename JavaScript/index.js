// Add List Colors To Local Soragelist
let maincolor = localStorage.getItem("color_list");

// Check In Local Storage Not Ematy
if(maincolor !== null) {
    // Save Color In Document
    document.documentElement.style.setProperty('--main-color', maincolor);
        // Remove Class Active Of All Elements
        document.querySelectorAll(".color-list li").forEach((element) => {
            element.classList.remove("active")
            // Check On Element In Local Storage
            if(element.dataset.color === maincolor) {
                // Add Class Active
                element.classList.add("active")
            }
            
        })
    
}

// Create Two Toggle In Setting Box
document.querySelector(".setting-box .icon").onclick = function () {
    // Add And Remove Class Spin On Icon 
    this.classList.toggle("fa-spin")
    // Add And Remove Class Open On Element Setting Box
    document.querySelector(".setting-box").classList.toggle("open")
}

// Create Change On Element Li Of main Colors
let listColor = document.querySelectorAll(".color-list li");
// Loop On Elements Li
listColor.forEach(li => {
// Add Event Onclick 
    li.addEventListener("click", (el) => {
        // Change Color Of Property Main Color
        document.documentElement.style.setProperty('--main-color', el.target.dataset.color);
        // Create Set Item For Local Storge
        localStorage.setItem('color_list', el.target.dataset.color)

        handelActive(el)
    })
})
// Ceate Background Option 
let backgroundOption = true;
// Ceate Background Intrval 
let backgroundIntrval ;

// Create Local Sotrage For Random Background
let backgroundLocalStorage = localStorage.getItem("random_background");

// Check If In Local Storage Is Not Empty
if( backgroundLocalStorage !== null) {
    if(backgroundLocalStorage === "true") {
        
        backgroundOption = true;

    } else {

        backgroundOption = false;
    }
    // Remove All Active Class From Spans
    document.querySelectorAll(".random-background span").forEach((element) => {
        element.classList.remove("active")
    })
    // Add Class Active
    if(backgroundLocalStorage === 'true') {
        document.querySelector(".random-background .yes").classList.add("active");
    } else {
        document.querySelector(".random-background .no").classList.add("active");
    }
}

// Show And HIde Bullets
let bulletSpan = document.querySelectorAll(".option-bullets span");
let bulletBox = document.querySelector(".nav-bullets");

let bulletsLocalStorage = localStorage.getItem("bullets");


if( bulletsLocalStorage !== null) {
    bulletSpan.forEach(span => {
        span.classList.remove("active")
    })
    if(bulletsLocalStorage === "block") {
        
        bulletBox.style.display = "block"
        document.querySelector(".option-bullets .show").classList.add("active")

    } else {

        bulletBox.style.display = "none"
        document.querySelector(".option-bullets .hide").classList.add("active")

    }
}
bulletSpan.forEach(span => {
    span.addEventListener("click", (e) => {
        if(span.dataset.display === 'show') {
            bulletBox.style.display = "block"
            localStorage.setItem("bullets", "block")

        } else {
            bulletBox.style.display = "none"
            localStorage.setItem("bullets", "none")

        }
        handelActive(e)
    })
})

// Create Change On Element Span .active
let randomBackground = document.querySelectorAll(".random-background span");
// Loop On Elements Span
randomBackground.forEach(span => {
// Add Event Onclick 
    span.addEventListener("click", (el) => {

        handelActive(el)
        
        if(el.target.dataset.background === "yes") {
            backgroundOption = true;

            randomIntrval()
            localStorage.setItem("random_background", true);
        }else {
            backgroundOption = false;
            clearInterval(backgroundIntrval)
            localStorage.setItem("random_background", false);
        }
        
    })
})
// Cearte SetTimeOut For Landing Page Of Background Images
function randomIntrval(){
    if ( backgroundOption === true ) {
        backgroundIntrval = setInterval(() => {
            // Select Element Perant
            let landingPage = document.querySelector(".landing-page");
            // Cteate Array of Images
            let arrImages = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
            // Create Random Of Number For Length
            let random = Math.floor(Math.random() * arrImages.length)
            // Change Image Of Array arrImages
            landingPage.style.backgroundImage = "url('images/" + arrImages[random] +"')"
        
        }, 1000)
    }

}
randomIntrval()

// Select Skills 
let ourSkills = document.querySelector(".skills")

window.onscroll = function() {

    let skillsOffset = ourSkills.offsetTop;

    let skillsOute = ourSkills.offsetHeight;

    let WindowHeight = this.innerHeight;

    let WindowScroll = this.pageYOffset;

    if (WindowScroll >= (skillsOffset + skillsOute - WindowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span")
        // Add Data Progress To Width
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress
        })
    }
}
// Create Popup Of Images
let ourGallrey = document.querySelectorAll(".gallrey img");

ourGallrey.forEach( img => {
    img.addEventListener( "click", (e) => {
        // Create Overlay 
        let overley = document.createElement("div");
        // Add Class To Overlay
        overley.className = "overlay-box"
        // Add Overlay In Body
         document.body.appendChild(overley)
         //  Create Div For Images
         let popupox = document.createElement("div")
         //  Check The Alt Is Not Empty 
         if(img.alt !== null) {
             // Create Heading 
             let  imgHeading = document.createElement("h3")
            //  Create Text For Heading 
            let imgText = document.createTextNode(img.alt)
            // Append Text In H3
            imgHeading.appendChild(imgText);
            // Add Heading In Popup Box
            popupox.appendChild(imgHeading)
         }
        // Create Class To Image Box 
        popupox.className = "Image-box"
        //  Create Image
        let popupImg= document.createElement("img")
        // Add Src In mag Popup
        popupImg.src = img.src
        popupox.appendChild(popupImg)
        // Add Image In Overlay
        document.body.appendChild(popupox)
        // Create Close Span
        let closeSpan = document.createElement("span");
        // Add Class For Span
        closeSpan.className = "close-button"
        // Create Close Text 
        let closeText = document.createTextNode("X")
        // Append Text In Span
        closeSpan.appendChild(closeText)
        // Add Close In Popup
        popupox.appendChild(closeSpan)
    })
})
// Close Popup
document.addEventListener("click", (e) => {
    if(e.target.className === "close-button") {
            // Remove Popup 
    e.target.parentNode.remove()
    // Remove OverLay
    document.querySelector(".overlay-box").remove()
    }
})
// Select All Bullets 
let allBullets = document.querySelectorAll(".nav-bullets .bullet");
// Select All Links 
let allLinks = document.querySelectorAll(".links a");

function callELements(AllElement) {
    AllElement.forEach((ele) => {
    ele.addEventListener("click", (bullet) => {
        document.querySelector(bullet.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        })
        
    })
})
}
callELements(allBullets)
callELements(allLinks)
// Handel Active Class
function handelActive(event) {
    // Remove Class Active Of Element
    event.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active")
    })
    // Add Class Active On Element
    event.target.classList.add("active")
}
// Reset OPtion
document.querySelector(".reset-option").onclick = function() {
    localStorage.removeItem("color_list")
    localStorage.removeItem("random_background")
    localStorage.removeItem("bullets")

    window.location.reload()
}

// toggle tLinks
let tMenu = document.querySelector(".toggle")
let tLinks = document.querySelector(".links")
tMenu.onclick = function(e) {
    e.stopPropagation();

    tMenu.classList.toggle("menu-active")
    tLinks.classList.toggle("open");
}

document.addEventListener("click", (e) => {

    if(e.target !== tMenu && e.target !== tLinks ) {
        if (tLinks.classList.contains("open")) {
            tMenu.classList.toggle("menu-active");
            tLinks.classList.toggle("open");
        }
    }

    
})

tLinks.onclick = (e) => {
    e.stopPropagation()
}






