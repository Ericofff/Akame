function showPassword() {
    const eye = document.querySelector(".uil-eye");
    const password = document.querySelector("#pass");
    if (password.type === "password") {
      password.type = "text";
      eye.classList.toggle("uil-eye-slash");
      //   eye.classList.add("uil-eye-slash");
      
    }else{   
        password.type = "password";
        eye.classList.toggle("uil-eye-slash");
        // eye.classList.remove("uil-eye-slash");
        // eye.classList.add("uil-eye");
    }
  }