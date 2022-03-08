const logoutBtn = document.getElementById("logout");
const signUpForm = document.getElementById("signUpForm");
const signInForm = document.getElementById("signInForm");

export function checkLoginStatus() {
  const emailAddr = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  if (window.location.pathname !== "/index.html") {
    if (emailAddr && password) {
      if (window.location.pathname !== "/components/product-listing.html") window.location.href = "/components/product-listing.html";
    } else {
      if (window.location.pathname !== "/components/signup.html") window.location.href = "/index.html";
    }
  }
}

//Logout
logoutBtn?.addEventListener("click", () => localStorage.clear());

//Signup
signUpForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputFields = Array.from(event.currentTarget);
  localStorage.clear();
  console.log(inputFields);
  inputFields.forEach((input) => {
    const { type, value } = input;
    if (value) {
      if (type === "email") localStorage.setItem(type, value);
      if (type === "password") localStorage.setItem(type, value);
    }
    input.value = "";
  });
  window.location.href = "/index.html";
});

//Signin
signInForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const authFailText = document.getElementById("auth-failed");
  const emailAddr = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const inputFields = Array.from(event.currentTarget);
  let isLogin = true;
  inputFields.forEach((input) => {
    const { type, value } = input;
    if (type === "email") {
      if (emailAddr !== value) isLogin = false;
    }

    if (type === "password") {
      if (password != value) isLogin = false;
    }
  });

  if (isLogin) {
    authFailText.style.display = "none";
    window.location.href = "/components/product-listing.html";
  } else {
    authFailText.style.display = "block";
  }
});
