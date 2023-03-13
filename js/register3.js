let submit = document.getElementById("submit");
submit.addEventListener("click", registerdetails)

let msgdiv = document.getElementById("msgdiv");

let result = true;
let arr = [];

function checkedvalue() {
    let div_checkbox = document.getElementById("div_checkbox");
    let checklist = div_checkbox.querySelectorAll("input[type='checkbox']:checked");

    for (let i = 0; i < checklist.length; i++) {
        arr.push(checklist[i].value);
    }
    if (checklist.length == 0) {
        result = false;
        msgdiv.className = "alert alert-warning alert-dismissible fade show with-icon";
        msgdiv.role = "alert";
        msgdiv.innerHTML = "Please select atleast one vertical";
        let btn = document.createElement("button");
        btn.type = "button";
        btn.className = "close";
        btn.setAttribute("data-dismiss", "alert");
        btn.ariaLabel = "Close";
        let btnspan = document.createElement("span");
        btnspan.ariaHidden = true;
        btn.innerText = "\u00D7";
        btn.append(btnspan);
        msgdiv.append(btn);
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

    let email = document.getElementById("inputEmail4");

    if (!ValidateEmail(email.value)) {
        result = false;
        msgdiv.className = "alert alert-warning alert-dismissible fade show with-icon";
        msgdiv.role = "alert";
        msgdiv.innerHTML = "Please enter valid e-mail id";
        let btn = document.createElement("button");
        btn.type = "button";
        btn.className = "close";
        btn.setAttribute("data-dismiss", "alert");
        btn.ariaLabel = "Close";
        let btnspan = document.createElement("span");
        btnspan.ariaHidden = true;
        btn.innerText = "\u00D7";
        btn.append(btnspan);
        msgdiv.append(btn);
    }
    let pass = document.getElementById("Password4");
    let confirmpass = document.getElementById("confirmPassword4");

    if (pass.value != confirmpass.value) {
        result = false;
        msgdiv.className = "alert alert-warning alert-dismissible fade show with-icon";
        msgdiv.role = "alert";
        msgdiv.innerHTML = "Passwords doesn't match";
        let btn = document.createElement("button");
        btn.type = "button";
        btn.className = "close";
        btn.setAttribute("data-dismiss", "alert");
        btn.ariaLabel = "Close";
        let btnspan = document.createElement("span");
        btnspan.ariaHidden = true;
        btn.innerText = "\u00D7";
        btn.append(btnspan);
        msgdiv.append(btn);
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

    if (Validation() && checkedvalue()) {
        let queryParams = getQueryParams("company", document.getElementById("inputco-name").value, true)
        queryParams = queryParams + getQueryParams("first_name", document.getElementById("inputfull-name").value)
        queryParams = queryParams + getQueryParams("last_name", arr.toString())
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
        queryParams = queryParams + getQueryParams("status", "Pending")
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
                    msgdiv.className = "alert alert-success";
                    msgdiv.role = "alert";
                    msgdiv.innerHTML = document.getElementById("inputfull-name").value + "is successfully registered";
                    let btn = document.createElement("button");
                    btn.type = "button";
                    btn.className = "close";
                    btn.setAttribute("data-dismiss", "alert");
                    btn.ariaLabel = "Close";
                    let btnspan = document.createElement("span");
                    btnspan.ariaHidden = true;
                    btn.innerText = "\u00D7";
                    btn.append(btnspan);
                    msgdiv.append(btn);
                    redirectPage();
                }
                else {
                    msgdiv.className = "alert alert-danger";
                    msgdiv.role = "alert";
                    msgdiv.innerHTML = response.error;
                    let btn = document.createElement("button");
                    btn.type = "button";
                    btn.className = "close";
                    btn.setAttribute("data-dismiss", "alert");
                    btn.ariaLabel = "Close";
                    let btnspan = document.createElement("span");
                    btnspan.ariaHidden = true;
                    btn.innerText = "\u00D7";
                    btn.append(btnspan);
                    msgdiv.append(btn);
                }
            })
            .catch(err => console.error(err));
    }
}

function redirectPage() {
    let redirectUrl = "http://127.0.0.1:5501/login3.html";
    window.location.href = redirectUrl;
}