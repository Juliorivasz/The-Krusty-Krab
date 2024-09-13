// Botón de Google - abre en una nueva pestaña
const googleBtn = document.getElementById('googleBtn');
googleBtn.addEventListener('click', function() {
    const link = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F%3Fhl%3Des&ec=GAZAmgQ&hl=es&ifkv=Ab5oB3rNqgmBBaVELSYRJRvMWEsL1WEv7N37wh_tIaMpoveQsnmBidVvRzOTs_TBIg5SJWpG8s11rg&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-853949076%3A1725888047433745&ddm=0';
    window.open(link, "_blank");
});

// Botón de Facebook - redirige a la misma ventana
const faceBtn = document.getElementById('faceBtn');
faceBtn.addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com';
});

// Mostrar formulario de registro
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('forgot-password-form').style.display = 'none';
}

// Mostrar el formulario de inicio de sesión
function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('forgot-password-form').style.display = 'none';
}

// Mostrar el formulario de recuperación de contraseña
function showForgotPasswordForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
}
