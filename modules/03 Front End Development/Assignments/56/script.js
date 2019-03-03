var images = ['1.jpg','2.jpg','3.jpg','4.jpg','1.jpg','2.jpg','3.jpg','4.jpg','1.jpg','2.jpg','3.jpg','4.jpg']
var index = 0;

if (localStorage.getItem("selectedImage")) {
    document.getElementById("main-picture").src =  localStorage.getItem("selectedImage") ;
}
else {
    document.getElementById("main-picture").src = images[0] ;
}


function back(){
    if (index == 0 ) {
        index = images.length-1 ;
        document.getElementById("main-picture").src = images[index] ;
    }
    else {
        index--;
        document.getElementById("main-picture").src = images[index] ;

    }
    localStorage.setItem("selectedImage", images[index]);
}
function next(){
    if (index == images.length-1 ) {
        index = 0 ;
        document.getElementById("main-picture").src = images[index] ;
    }
    else {
        index++;
        document.getElementById("main-picture").src = images[index] ;

    }
    localStorage.setItem("selectedImage", images[index]);
}
function imageList() {
    for (var i = 0; i < images.length; i++) {
        var thumb = document.createElement("img");
        thumb.setAttribute("src",images[i]);
        thumb.setAttribute("class","thumb");
        thumb.setAttribute("onclick","viewImage("+ i +")");
        document.getElementById("pictures-list").appendChild(thumb);
        
    }
}
imageList() ;

function viewImage(i) {
    index = i;
    document.getElementById("main-picture").src = images[index] ; 
    localStorage.setItem("selectedImage", images[index]);
}
