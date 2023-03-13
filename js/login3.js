let loginSubmit = document.getElementById("login-submit");
loginSubmit.addEventListener('click', login_submit);

function login_submit(e) {

  e.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      Accept: 'text/html, application/xhtml+xml, application/xml;q=0.9, image/webp'
    },
    body: new URLSearchParams({mail: document.getElementById("user_email").value, password: document.getElementById("user_password").value})
  };

  fetch('https://api.offer18.com/api/m/affiliate_login?mid=16319&api-key=16319PQSZRLABJKHGMCU&secret-key=37174A90862A8146AE3F441A1B9C0ECA', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      if (response.status == 200) {
        var x = document.getElementById("toastbox");   
        x.className = "show";
        x.querySelector("#t-header").innerHTML = "Success";
        x.querySelector("#t-text").innerHTML = "Successfully login";
        x.style.backgroundColor = "green";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      }   
      else
      {
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