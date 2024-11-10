// Function that directs the user to the corresponding web page based on the index number that it is sent.
// The program automatically sends the correct index number based on the button that is pressed.
function buttons(index) {
    let pageNum = index;
    if(pageNum == 2)
        window.location.href = "/mywebpage/hobbies/hobbies.html";
    else if(pageNum == 3)
        window.location.href = "/mywebpage/events/events.html";
    else if(pageNum == 4)
        window.location.href = "/mywebpage/photos/photos.html";
    else if(pageNum == 5)
        window.location.href = "/mywebpage/places/places.html";
    else if(pageNum == 6)
        window.location.href = "/mywebpage/christian/christian.html";
    else if(pageNum == 7)
        window.location.href = "/mywebpage/contact/contact.html";
    else
        window.location.href = "/mywebpage/index/index.html";
}
// Function that makes the info boxes appear and changes text boxes in the pages.html web page.
// Program automatically determines what the index number is based on which hover element is hovered over.
function appear(index) {
    let infoBoxNum = index;
    if(infoBoxNum == 1)
    {
        document.getElementById("infoBox1").style.display = 'flex';
        document.getElementById("hover1").innerHTML = "Hover to Remove";
    }
    else if(infoBoxNum == 2)
    {
        document.getElementById("infoBox2").style.display = 'flex';
        document.getElementById("hover2").innerHTML = "Hover to Remove";
    }
    else if(infoBoxNum == 3)
    {
        document.getElementById("infoBox3").style.display = 'flex';
        document.getElementById("hover3").innerHTML = "Hover to Remove";
    }
    else if(infoBoxNum == 4)
        {
            document.getElementById("infoBox4").style.display = 'flex';
            document.getElementById("hover4").innerHTML = "Hover to Remove";
        }
    else if(infoBoxNum == 5)
        {
           document.getElementById("infoBox5").style.display = 'flex';
           document.getElementById("hover5").innerHTML = "Hover to Remove";
        }
    else if(infoBoxNum == 6)
        {
            document.getElementById("infoBox6").style.display = 'flex';
            document.getElementById("hover6").innerHTML = "Hover to Remove";
        }
}
// Function that makes info boxes disappear and changes text boxes in the pages.html web page.
// Program automatically determines what the index number is based on which hover element is hovered over.
function disappear(index) {
    let infoBoxNum = index;
    if(infoBoxNum == 1)
    {
        document.getElementById("infoBox1").style.display = 'none';
        document.getElementById("img1").style.display = 'none';
        document.getElementById("img2").style.display = 'none';
        document.getElementById("hover1").innerHTML = "Hover to see info!";
        document.getElementById("image1").innerHTML = "Click for Images";
    }
    else if(infoBoxNum == 2)
    {
        document.getElementById("infoBox2").style.display = 'none';
        document.getElementById("img3").style.display = 'none';
        document.getElementById("img4").style.display = 'none';
        document.getElementById("hover2").innerHTML = "Hover to see info!";
        document.getElementById("image2").innerHTML = "Click for Images";
    }
    else if(infoBoxNum == 3)
    {
        document.getElementById("infoBox3").style.display = 'none';
        document.getElementById("img5").style.display = 'none';
        document.getElementById("img6").style.display = 'none';
        document.getElementById("hover3").innerHTML = "Hover to see info!";
        document.getElementById("image3").innerHTML = "Click for Images";
    }
    else if(infoBoxNum == 4)
    {
        document.getElementById("infoBox4").style.display = 'none';
        document.getElementById("img7").style.display = 'none';
        document.getElementById("img8").style.display = 'none';
        document.getElementById("hover4").innerHTML = "Hover to see info!";
        document.getElementById("image4").innerHTML = "Click for Images";
    }
    else if(infoBoxNum == 5)
    {
        document.getElementById("infoBox5").style.display = 'none';
        document.getElementById("img9").style.display = 'none';
        document.getElementById("img10").style.display = 'none';
        document.getElementById("hover5").innerHTML = "Hover to see info!";
        document.getElementById("image5").innerHTML = "Click for Images";
    }
    else if(infoBoxNum == 6)
    {
        document.getElementById("infoBox6").style.display = 'none';
        document.getElementById("img11").style.display = 'none';
        document.getElementById("img12").style.display = 'none';
        document.getElementById("hover6").innerHTML = "Hover to see info!";
        document.getElementById("image6").innerHTML = "Click for Images";
    }
}
// Function that makes images appear and changes text boxes in the pages.html web page.
// Program automatically determines what the index number is based on which button is pressed.
function imageAppear(index) {
    let elementNum = index;
    if(elementNum == 1)
    {
        document.getElementById("img1").style.display = 'flex';
        document.getElementById("img2").style.display = 'flex';
        document.getElementById("image1").innerHTML = "Click to Remove";
    }
    else if(elementNum == 2)
    {
        document.getElementById("img3").style.display = 'flex';
        document.getElementById("img4").style.display = 'flex';
        document.getElementById("image2").innerHTML = "Click to Remove";
    }
    else if(elementNum == 3)
    {
        document.getElementById("img5").style.display = 'flex';
        document.getElementById("img6").style.display = 'flex';
        document.getElementById("image3").innerHTML = "Click to Remove";
    }
    else if(elementNum == 4)
    {
        document.getElementById("img7").style.display = 'flex';
        document.getElementById("img8").style.display = 'flex';
        document.getElementById("image4").innerHTML = "Click to Remove";
    }
    else if(elementNum == 5)
    {
        document.getElementById("img9").style.display = 'flex';
        document.getElementById("img10").style.display = 'flex';
        document.getElementById("image5").innerHTML = "Click to Remove";
    }
    else if(elementNum == 6)
    {
        document.getElementById("img11").style.display = 'flex';
        document.getElementById("img12").style.display = 'flex';
        document.getElementById("image6").innerHTML = "Click to Remove";
    }
}
// Function that makes images disappear and changes text boxes in the pages.html web page.
// Program automatically determines what the index number is based on which button is pressed.
function imageDisappear(index) {
    let elementNum = index;
    if(elementNum == 1)
    {
        document.getElementById("img1").style.display = 'none';
        document.getElementById("img2").style.display = 'none';
        document.getElementById("image1").innerHTML = "Click for Images";
    }
    else if(elementNum == 2)
    {
        document.getElementById("img3").style.display = 'none';
        document.getElementById("img4").style.display = 'none';
        document.getElementById("image2").innerHTML = "Click for Images";
    }
    else if(elementNum == 3)
    {
        document.getElementById("img5").style.display = 'none';
        document.getElementById("img6").style.display = 'none';
        document.getElementById("image3").innerHTML = "Click for Images";
    }
    else if(elementNum == 4)
    {
        document.getElementById("img7").style.display = 'none';
        document.getElementById("img8").style.display = 'none';
        document.getElementById("image4").innerHTML = "Click for Images";
    }
    else if(elementNum == 5)
    {
        document.getElementById("img9").style.display = 'none';
        document.getElementById("img10").style.display = 'none';
        document.getElementById("image5").innerHTML = "Click for Images";
    }
    else if(elementNum == 6)
    {
        document.getElementById("img11").style.display = 'none';
        document.getElementById("img12").style.display = 'none';
        document.getElementById("image6").innerHTML = "Click for Images";
    }
}