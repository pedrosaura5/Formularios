// Función para mostrar u ocultar la contraseña
function mostrarContraseña(id) {
    const passwordField = document.getElementById(id);
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}

// Función para registrar usuario
async function registrarUsuario(email, password) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        alert("Usuario registrado exitosamente");
    } catch (error) {
        console.error("Error en el registro:", error);
        alert("Error al registrar: " + error.message);
    }
}

// Escuchar el evento de envío del formulario de registro
const formRegistro = document.getElementById('registro');
if (formRegistro) {
    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        registrarUsuario(email, password);
    });
}

// Función para iniciar sesión
async function iniciarSesion(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        alert("Inicio de sesión exitoso");
        const userId = userCredential.user.uid;
        guardarHoraInicioSesion(userId);
    } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        alert("Error al iniciar sesión: " + error.message);
    }
}

// Guardar hora de inicio de sesión en Firestore
async function guardarHoraInicioSesion(uid) {
    try {
        const timestamp = new Date();
        await db.collection("usuarios").doc(uid).set({
            ultimaEntrada: timestamp
        }, { merge: true });
    } catch (error) {
        console.error("Error al guardar la fecha de inicio de sesión:", error);
    }
}

// Escuchar el evento de envío del formulario de login
con
