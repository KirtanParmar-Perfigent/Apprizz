let submit = document.getElementById("submit");
submit.addEventListener("click", registerdetails)
const toast = document.getElementById('toast');
function registerdetails() {
    const options = {
        method: 'POST',
        headers: { Accept: 'text/html, application/xhtml+xml, application/xml;q=0.9, image/webp' }
    };

    fetch('https://api.offer18.com/api/m/affiliate_create?first_name=bdk5&last_name=ffsfh&signup_ip=64654&email=pyyuvad@gmail.com&password=1745&mobile=15g246&company=peri&job_title=HR&address=science%20city12&city=ahmedabad12&state=gujarat12&state_code=12382480&zip=121234&country=india12&im_type=dffdg&im_value=ddfgd&status=approved&mid=16319&api-key=16319PQSZRLABJKHGMCU&secret-key=37174A90862A8146AE3F441A1B9C0ECA', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.status == 200) {
                var x = document.getElementById("toastbox");
                x.className = "show";
                x.querySelector("#t-header").innerHTML = "Success";
                x.querySelector("#t-text").innerHTML = "Kirtan" + " is Successfully registered";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
            else {
                var x = document.getElementById("toastbox");
                x.className = "show";
                x.querySelector("#t-header").innerHTML = "Failed";
                x.querySelector("#t-text").innerHTML = "User Already Registered";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
            }
        })
        .catch(err => console.error(err));
}



