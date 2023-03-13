let submit = document.getElementById("submit");
submit.addEventListener("click", registerdetails)
const toast = document.getElementById('toast');

function checkedvalue() {
    let arr = [];
    let div_checkbox = document.getElementById("div_checkbox");
    let checklist = div_checkbox.querySelectorAll("input[type='checkbox']:checked");

    for (let i = 0; i < checklist.length; i++) {
        arr.push(checklist[i].value);
    }
    if (checklist.length == 0) {
        alert("Please Select Atleast one Vertical");
    }
    else {
        return (arr.toString());
    }
}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}

function Validation() {
    let result = true;

    let pass = document.getElementById("Password4");
    let confirmpass = document.getElementById("confirmPassword4");

    if (pass.value != confirmpass.value) {
        result = false;
        confirmpass.setCustomValidity("Passwords Don't Match");
    }
    else {
        confirmpass.setCustomValidity("");
    }

    let email = document.getElementById("inputEmail4");

    if (ValidateEmail(email.value)) {
        email.setCustomValidity("");
    }
    else {
        result = false;
        email.setCustomValidity("Please enter valid E-mail id");
    }
    return result;
}

function getQueryParams(key, value, isFirst = false) {
    if (isFirst)
        return key + "=" + value
    else
        return "&" + key + "=" + value
}

function registerdetails(e) {

    e.preventDefault();

    if (Validation()) {
        let queryParams = getQueryParams("company", document.getElementById("inputco-name").value, true)
        queryParams = queryParams + getQueryParams("first_name", document.getElementById("inputfull-name").value)
        queryParams = queryParams + getQueryParams("last_name", checkedvalue())
        queryParams = queryParams + getQueryParams("signup_ip", "1234")
        queryParams = queryParams + getQueryParams("email", document.getElementById("inputEmail4").value)
        queryParams = queryParams + getQueryParams("password", document.getElementById("Password4").value)
        queryParams = queryParams + getQueryParams("mobile", "")
        queryParams = queryParams + getQueryParams("job_title", "")
        queryParams = queryParams + getQueryParams("address", document.getElementById("inputAddress").value)
        queryParams = queryParams + getQueryParams("city", document.getElementById("inputCity").value)
        queryParams = queryParams + getQueryParams("state", document.getElementById("inputState").value)
        queryParams = queryParams + getQueryParams("state_code", "")
        queryParams = queryParams + getQueryParams("zip", document.getElementById("inputZip").value)
        queryParams = queryParams + getQueryParams("country", document.getElementById("inputCountry").value)
        queryParams = queryParams + getQueryParams("im_value", document.getElementById("inputSkype").value)
        queryParams = queryParams + getQueryParams("im_type", "")
        queryParams = queryParams + getQueryParams("status", "pending")
        queryParams = queryParams + getQueryParams("mid", "16319")
        queryParams = queryParams + getQueryParams("api-key", "16319PQSZRLABJKHGMCU")
        queryParams = queryParams + getQueryParams("secret-key", "37174A90862A8146AE3F441A1B9C0ECA")

        let url = `https://api.offer18.com/api/m/affiliate_create?${queryParams}`;

        const options = {
            method: 'POST',
            headers: { Accept: 'text/html, application/xhtml+xml, application/xml;q=0.9, image/webp' }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.status == 200) {
                    var x = document.getElementById("toastbox");
                    x.className = "show";
                    x.querySelector("#t-header").innerHTML = "Success";
                    x.querySelector("#t-text").innerHTML = document.getElementById("inputfull-name").value + " is Successfully registered";
                    x.style.backgroundColor = "#1481e7";
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                    redirectPage();
                }
                else {
                    var x = document.getElementById("toastbox");

                    x.className = "show";
                    x.querySelector("#t-header").innerHTML = "Failed";
                    x.querySelector("#t-text").innerHTML = response.error;
                    x.style.backgroundColor = "red";
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                }
            })
            .catch(err => console.error(err));
    }
}

function redirectPage() {
    let redirectUrl = "http://127.0.0.1:5500/login3.html";
    window.location.href = redirectUrl;
}