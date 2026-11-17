const toggleToLogin = (colLogin, colRegister, colOverlay) => {
  const btnToggleRegister = document.getElementById("btn-toggle-register");

  btnToggleRegister.addEventListener("click", () => {
    if (window.innerWidth >= 768) {
      colOverlay.style.transform = "translateX(0)";
    } else {
      colRegister.classList.replace("d-block", "d-none");
      colLogin.classList.replace("d-none", "d-block");
      colLogin.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
};

const toggleToRegister = (colLogin, colRegister, colOverlay) => {
  const btnToggleLogin = document.getElementById("btn-toggle-login");

  btnToggleLogin.addEventListener("click", () => {
    if (window.innerWidth >= 768) {
      console.log("click para ir a register");
      colOverlay.style.transform = "translateX(-100%)";
    } else {
      colLogin.classList.replace("d-block", "d-none");
      colRegister.classList.replace("d-none", "d-block");
      colRegister.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
};

export { toggleToLogin, toggleToRegister };
