import { toggleToLogin, toggleToRegister } from "./responsiveToggle.js";

const colLogin = document.getElementById("col-login");
const colRegister = document.getElementById("col-register");
const colOverlay = document.getElementById("col-overlay");

const renderColLogin = () => {
  colLogin.innerHTML += `
    
  <div class="formularios">
    <p class="eyebrow d-flex align-items-center gap-2 m-2">
      <span></span> BIENVENIDO(A)
    </p>
    <h1>Iniciar Sesión</h1>
    <p class="text-muted">
      Ingresa a tu cuenta para continuar comprando, ver tus pedidos y mucho más.
    </p>
    <form method="post" class="d-grid gap-2" id="login-form">
      <div class="username">
        <label id="emailLabel" for="login-email" class="form-label m-0" >
          Correo electrónico
          <p class="eyebrow d-inline">*</p> 
        </label>
                  
        <input type="email" id="login-email" name="login-email" class="form-control" autocomplete="email" placeholder="Ingresa tu correo" required>
      </div>
      <div class="password">
        <label id="passwordLabel" for="login-password" class="form-label m-0">
          Contraseña
          <p class="eyebrow d-inline">*</p>
        </label>
        <input type="password" id="login-password" name="login-password" class="form-control" autocomplete="current-password" placeholder="Ingresa tu contraseña" required>
      </div>
      <div class="recordar text-end py-2">
        <a href="./recoveryPassword.html" class="eyebrow">¿Olvidaste tu contraseña?</a>
      </div>
      <button type="submit" class="btn btn-primary w-100" id="btn-submit-login" >
        Iniciar sesión
      </button>
      
      <div class=" text-muted d-flex justify-content-between align-items-center eyebrow-gray" >
        <span class="w-100"></span>            
        <p class="text-nowrap px-2 m-0">¿Aun no tienes una cuenta?</p>
        <span class="w-100"></span>
      </div>
      <div class="registrarse">
        <button class="btn btn-secondary w-100" id="btn-toggle-login" type="button">
          Regístrate
        </button>
      </div>
    </form>
  </div>
`;};

const renderColRegister = () => {
  colRegister.innerHTML += `
    <div class="formularios">
              <p class="eyebrow d-flex align-items-center gap-2 m-2">
                <span></span> BIENVENIDO(A)
              </p>
              <h1>Registrate</h1>
              <p class="text-muted">
                Crea una cuenta para continuar comprando, ver tus pedidos y
                mucho más.
              </p>

              <form method="post" id="register-form">
                <div class="d-grid gap-2">
                  <div class="">
                    <label for="fullname" class="form-label m-0">
                    Nombre Completo
                      <p class="eyebrow d-inline">*</p>
                    </label>
                    <input
                      class="form-control"
                      type="text"
                      id="fullname"
                      name="fullname"
                      autocomplete="name"
                      required
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div class="">
                    <label for="register-email" class="form-label m-0"
                      >Correo electrónico
                      <p class="eyebrow d-inline">*</p></label
                    >
                    <input
                      class="form-control"
                      type="email"
                      id="register-email"
                      name="email"
                      autocomplete="email"
                      required
                      placeholder="correo@ejemplo.com"
                    />
                  </div>

                  <div class="">
                    <label for="register-password" class="form-label m-0"
                      >Contraseña
                      <p class="eyebrow d-inline">*</p></label
                    >
                    <input
                      class="form-control"
                      type="password"
                      id="register-password"
                      name="password"
                      autocomplete="new-password"
                      required
                      placeholder="Crea una contraseña"
                    />
                  </div>

                  <div class="">
                    <label for="confirm-password" class="form-label m-0"
                      >Confirmar contraseña
                      <p class="eyebrow d-inline">*</p></label
                    >
                    <input
                      class="form-control"
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      autocomplete="new-password"
                      required
                      placeholder="Confirma tu contraseña"
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary w-100"
                    id="btn-submit-register"
                  >
                    Registrate
                  </button>

                  <div
                    class="text-center text-muted d-flex justify-content-between align-items-center eyebrow-gray"
                  >
                    <span class="w-100"></span>
                    <p p class="text-nowrap px-4 m-0">¿Ya tienes cuenta?</p>
                    <span class="w-100"></span>
                  </div>
                  <div class="registrarse">
                    <button
                      class="btn btn-secondary w-100"
                      id="btn-toggle-register"
                      type="button"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </div>
              </form>
            </div>
    `;
};

renderColLogin();
renderColRegister();
toggleToLogin(colLogin, colRegister, colOverlay);
toggleToRegister(colLogin, colRegister, colOverlay);

// Inicializar funcionalidad de registro
import("./registro.js");
import("./login.js");