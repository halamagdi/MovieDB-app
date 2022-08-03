"use strict"

let allMovies = [];
let wordSearch = document.getElementById("wordSearch"),
    apiSearch = document.getElementById('apiSearch'),
    userName = document.getElementById('userName'),
    userEmail = document.getElementById('userEmail'),
    userPhone = document.getElementById('userPhone'),
    userAge = document.getElementById('userAge'),
    userPassword = document.getElementById('userPass'),
    userRePassword = document.getElementById('userRePass'),
    submitButton = document.getElementById('submitBtn'),
    emailInputAlert = document.getElementById('emailInputAlert'),
    nameInputAlert = document.getElementById('nameInputAlert'),
    phoneInputAlert = document.getElementById('phoneInputAlert'),
    ageInputAlert = document.getElementById('ageInputAlert'),
    passwordInputAlert = document.getElementById('passInputAlert'),
    rePasswordInputAlert =document.getElementById('rePassInputAlert');



async function getMovies(term) {
    let apiResponse = await fetch(`https://api.themoviedb.org/3/${term}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`);
    let finalResult = await apiResponse.json();
    allMovies = finalResult.results;
    console.log(finalResult);
    displayMovies();
    //    searchValue = term;
};
getMovies('movie/now_playing');

$(".tab-menu ul li a").click(function (e) {
    let currentValue = e.target.getAttribute("valueKey");
    console.log(currentValue);
    getMovies(currentValue);
});

function displayMovies() {
    let cartoona = ``;
    for (let i = 0; i < allMovies.length; i++) {
        cartoona += `  <div class="col-md-4 my-3 ">
        <div class="movies">
        <img class="w-100" src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" alt="">
           <div class="layer d-flex align-items-center">
               <div class="info p-0">
                   <h2>${allMovies[i].title}</h2>
                   <p>${allMovies[i].overview}</p>
                   <p>rate: ${allMovies[i].vote_average}</p>
                   <p>${allMovies[i].release_date}</p>

               </div>
           </div>
        </div>

    </div>`;
    }
    document.getElementById('postRow').innerHTML = cartoona;

}
function searchByWord(term) {
    let cartoona = ``;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title.toLowerCase().includes(term.toLowerCase()) == true) {
            cartoona += `  <div class="col-md-4 my-3 ">
                    <div class="movies">
                     <img class="w-100" src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" alt="">
                        <div class="layer d-flex align-items-center">
                            <div class="info p-0">
                                <h2>${allMovies[i].title}</h2>
                                <p>${allMovies[i].overview}</p>
                                <p>rate: ${allMovies[i].vote_average}</p>
                                <p>${allMovies[i].release_date}</p>
            
                            </div>
                        </div>
                     </div>
            
                </div>`;
        }
    }
    document.getElementById("postRow").innerHTML = cartoona;


}

wordSearch.addEventListener('keyup', function () {
    searchByWord(wordSearch.value);

});

async function searchByApi(searchResult) {
    let apiSearch = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&language=en-US&query=${searchResult}&page=1&include_adult=false`);
    let finalResult = await apiSearch.json();
    allMovies = finalResult.results;
    console.log(finalResult);
    displayMovies();

};
// searchByApi('Free')


apiSearch.addEventListener('keyup', function () {
    // console.log(apiSearch.value);
    searchByApi(apiSearch.value);


});




$(document).ready(function () {
    let sideWidth = $(".tab-menu").outerWidth();
    $("#sideMenu").animate({ left: `-${sideWidth}` }, 0);
})

$("#toggleBtn").click(function () {
    let sideWidth = $(".tab-menu").outerWidth();

    if ($("#sideMenu").css("left") == "0px") {
        $("#sideMenu").animate({ left: `-${sideWidth}` }, 0);
        $("i.fa-times").replaceWith("<i class='fa fa-align-justify fs-3'></i> ");
        $(".tab-menu .item1 , .tab-menu .item2 ,.tab-menu .item3 , .tab-menu .item4 ,.tab-menu .item5 , .tab-menu .item6").animate({ opacity: "0", paddingTop: "250px" });

    }
    else {

        $("#sideMenu").animate({ left: `0px` }, 0);

        $("i.fa-align-justify").replaceWith("<i class='fa fa-align-justify fa-times fs-3'></i> ");
        $(".tab-menu .item1 , .tab-menu .item2 ,.tab-menu .item3 , .tab-menu .item4 ,.tab-menu .item5 , .tab-menu .item6").animate({ opacity: "1", paddingTop: "10px" }, 1000);

    }

});

function validateName() {
    let regex = /^([a-zA-Z ]){2,30}$/;
            
                if(regex.test(userName.value) == true)
                {
                    nameInputAlert.classList.add("d-none");
                    nameInputAlert.classList.remove("d-block");

                    
                
                } else {
            
                    nameInputAlert.classList.add("d-block");
                    nameInputAlert.classList.remove("d-none");

                   
                };
}

userName.addEventListener("keyup", validateName);




function validateEmail() {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{3,}$/;
            
                if(regex.test(userEmail.value) == true)
                {
                    emailInputAlert.classList.add("d-none");
                    emailInputAlert.classList.remove("d-block");

                    
                
                } else {
            
                    emailInputAlert.classList.add("d-block");
                    emailInputAlert.classList.remove("d-none");

                   
                };
}

userEmail.addEventListener("keyup", validateEmail);




function validatePhone() {
    let regex =  /^01[0-2,5]{1}[0-9]{8}$/;
            
                if(regex.test(userPhone.value) == true)
                {
                    phoneInputAlert.classList.add("d-none");
                    phoneInputAlert.classList.remove("d-block");

                    
                
                } else {
            
                    phoneInputAlert.classList.add("d-block");
                    phoneInputAlert.classList.remove("d-none");

                   
                };
}

userPhone.addEventListener("keyup", validatePhone);

function validateAge() {
    let regex =  /^\S[0-9]{0,3}$/;
            
                if(regex.test(userAge.value) == true)
                {
                    ageInputAlert.classList.add("d-none");
                    ageInputAlert.classList.remove("d-block");

                    
                
                } else {
            
                    ageInputAlert.classList.add("d-block");
                    ageInputAlert.classList.remove("d-none");

                   
                };
}

userAge.addEventListener("keyup", validateAge);

function validatePassword() {
    let regex =  /^[a-zA-Z0-9!@#$%^&*]{10,30}$/;
            userPassword.type="password";
                if(regex.test(userPassword.value) == true )
                {
                    passwordInputAlert.classList.add("d-none");
                    passwordInputAlert.classList.remove("d-block");

                    
                
                } else {
            
                    passwordInputAlert.classList.add("d-block");
                    passwordInputAlert.classList.remove("d-none");

                   
                };
}

userPassword.addEventListener("keyup", validatePassword);

function validatePassword() {
    let regex =  /^[a-zA-Z0-9!@#$%^&*]{10,30}$/;
            userPassword.type="password";
                if(regex.test(userPassword.value) == true )
                {
                    passwordInputAlert.classList.add("d-none");
                    passwordInputAlert.classList.remove("d-block");

                    
                
                } else {
            
                    passwordInputAlert.classList.add("d-block");
                    passwordInputAlert.classList.remove("d-none");

                   
                };
}

userPassword.addEventListener("keyup", validatePassword);

function validateRePassword() {
    let regex =  /^[a-zA-Z0-9!@#$%^&*]{10,30}$/;
            userRePassword.type="password";
                if(regex.test(userRePassword.value) == true && userRePassword.value == userPassword.value )
                {
                    rePasswordInputAlert.classList.add("d-none");
                    rePasswordInputAlert.classList.remove("d-block");

                    
                
                } else {
            
                    rePasswordInputAlert.classList.add("d-block");
                    rePasswordInputAlert.classList.remove("d-none");

                   
                };
}

userRePassword.addEventListener("keyup", validateRePassword);