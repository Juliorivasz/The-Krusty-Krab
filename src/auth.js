
window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


//    El primer paso al cargar tu página web es determinar si una persona ya inició sesión en tu aplicación con el inicio de sesión con Facebook
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

// El objeto response que se proporciona a la devolución de llamada puede contener uno o varios campos:
// {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }
// En status se especifica el estado de inicio de sesión de la persona que usa la aplicación. El estado puede ser uno de los siguientes:
// connected: la persona inició sesión en Facebook y en tu aplicación.
// not_authorized: la persona inició sesión en Facebook, pero no en tu aplicación.
// unknown: la persona no inició sesión en Facebook y no sabes si lo hizo en tu aplicación o si se llamó antes al método FB.logout(), por lo que no puede conectarse a Facebook.
// authResponse: se incluye si el estado es connected, y consta de los siguientes elementos:
// accessToken: contiene un token de acceso para la persona que usa la aplicación.
// expiresIn: indica la hora UNIX en que el token caduca y se debe renovar.
// signedRequest: un parámetro firmado que contiene información sobre la persona que usa la aplicación.
// userID: es el identificador de la persona que usa la aplicación.
// Una vez que la aplicación conoce el estado de inicio de sesión de la persona que la usa, puedes realizar una de estas acciones:
// Si la persona inició sesión en Facebook y en la aplicación, redirígela a la experiencia de sesión iniciada de la aplicación.
// Si la persona no inició sesión en la aplicación o en Facebook, abre el cuadro de diálogo de inicio de sesión con FB.login() o muéstrale el botón "Iniciar sesión".

// Incluir el botón "Iniciar sesión" en una página es fácil. Consulta la documentación sobre el botón "Iniciar sesión" y configúralo como quieras. Después, haz clic en Obtener código. Verás el código que necesitas para mostrar el botón en tu página.
// El atributo onlogin del botón para configurar una devolución de llamada de JavaScript, que comprueba el estado de inicio de sesión y determina si la persona completó el proceso correctamente:
// <fb:login-button 
//   scope="public_profile,email"
//   onlogin="checkLoginState();">
// </fb:login-button>

// Esta es la devolución de llamada. Llama a FB.getLoginStatus() para obtener el estado de inicio de sesión más reciente. (statusChangeCallback() es una función que forma parte del ejemplo que procesa la respuesta).
// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }