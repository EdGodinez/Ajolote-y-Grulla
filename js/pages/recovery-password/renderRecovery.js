import { solicitarRecuperacion } from "./logicalRecovery.js"

const recoveryEl = document.getElementById("recovery-div")

const renderRecovery = () => {
    recoveryEl.innerHTML = `
    <div class="card shadow p-4">
          <div class="d-flex flex-column align-items-center">
            <img
              src="./assets/images/Ajolote&Grulla-RecoveryPageIMG.png"
              alt=""
              style="max-height: 280px; object-fit: contain"
            />
            <p class="eyebrow d-flex align-items-center gap-2 m-2">
              <span></span> パスワードをお忘れですか？
            </p>
            <h1>¿Olvidaste tu contraseña?</h1>
            <p class="text-muted">Ingresa tu correo y se enviara un codigo para que restablescas tu contraseña.</p>
            <form method="post" class="w-75 d-grid gap-2" id="recovery-form">
              <div class="username">
                <label for="email" class="form-label m-0"
                  >Correo electrónico
                  <p class="eyebrow d-inline">*</p></label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  autocomplete="email"
                  placeholder="Ingresa tu correo"
                  required
                />
              </div>
              
              <!--==== Apartado contrasenia ====-->
              <!--
                <div class="password">
                  <label for="password" class="form-label m-0"
                    >Contraseña
                    <p class="eyebrow d-inline">*</p></label
                  >
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    autocomplete="current-password"
                    placeholder="Ingresa nueva contraseña"
                    required
                  />
                </div>
              -->

              <button
                type="submit"
                class="btn btn-primary w-100"
                id="btn-submit-recovery"
              >
                Restablecer
              </button>
            </form>
          </div>
        </div>
    `;

    const formulario = document.getElementById("recovery-form");
    
    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const emailInput = document.getElementById("email").value.trim();
        await solicitarRecuperacion(emailInput);
    });
}

renderRecovery()