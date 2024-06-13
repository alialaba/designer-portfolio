// Check if window and document are available
if(typeof window !== "undefined" && typeof document !== "undefined"){

    // Get all elements with the class 'nav__link'
    const navLinks  = document.querySelectorAll(".nav__link");
    
    
    //Iterate over each link
    navLinks.forEach((link)=>{
    // Check if the href of the link matches the current window location
    if(link.href == window.location.href){
        // Set the 'aria-current' attribute to 'page'
          link.setAttribute("aria-current", "page")
    }
    })
    }