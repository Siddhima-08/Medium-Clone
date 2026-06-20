const title = document.getElementById("title");

const story = document.getElementById("story");

const publishBtn = document.getElementById("publish-btn");

function checkContent(){

    if(
        title.value.trim() !== "" &&
        story.value.trim() !== ""
    ){

        publishBtn.classList.add("active");

        publishBtn.disabled = false;

    }

    else{

        publishBtn.classList.remove("active");

        publishBtn.disabled = true;

    }

}

title.addEventListener("input", checkContent);

story.addEventListener("input", checkContent);