let loginSubmit = document.getElementById("login-submit");
loginSubmit.addEventListener('click', login_submit);

let msgdiv = document.getElementById("msgdiv");

function login_submit(e) {

  e.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      Accept: 'text/html, application/xhtml+xml, application/xml;q=0.9, image/webp'
    },
    body: new URLSearchParams({ mail: document.getElementById("user_email").value, password: document.getElementById("user_password").value })
  };

  fetch('https://api.offer18.com/api/m/affiliate_login?mid=16319&api-key=16319PQSZRLABJKHGMCU&secret-key=37174A90862A8146AE3F441A1B9C0ECA', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      if (response.status == 200) {
        msgdiv.className = "alert alert-success";
        msgdiv.role = "alert";
        msgdiv.innerHTML = "Successfully login";
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