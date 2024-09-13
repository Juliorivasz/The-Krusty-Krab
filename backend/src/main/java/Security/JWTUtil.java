package Security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JWTUtil {

    private String secret = "mySecretKey";  // Clave secreta para firmar los tokens JWT (cambiar por algo más seguro en producción)

    // Método para generar un token JWT.
    // Se le pasa un username (identificación del usuario) y crea un token con esa información.
    public String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();  // Información adicional que podría incluirse en el token (vacía por ahora)
        return createToken(claims, username);  // Llama al método que crea el token con las "claims" y el username.
    }

    // Método para crear el token con los datos recibidos.
    // El token tiene una duración de 10 horas.
    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)  // Información adicional que podría agregarse (no se usa en este caso)
                .setSubject(subject)  // El "subject" del token es el username del usuario
                .setIssuedAt(new Date(System.currentTimeMillis()))  // Fecha y hora de creación del token
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))  // Duración del token (10 horas)
                .signWith(SignatureAlgorithm.HS256, secret)  // Firmar el token usando el algoritmo HS256 y la clave secreta
                .compact();  // Compactar el token en un string
    }

    // Método para extraer el username de un token JWT.
    // El "subject" del token es el nombre de usuario.
    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();  // Devuelve el "subject" del token
    }

    // Método para validar un token JWT.
    // Verifica que el username del token coincida con el esperado y que el token no haya expirado.
    public Boolean validateToken(String token, String username) {
        return (username.equals(extractUsername(token)) && !isTokenExpired(token));
    }

    // Extrae todos los datos ("claims") de un token JWT.
    // Las "claims" contienen información adicional dentro del token.
    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();  // Extrae el cuerpo del token (donde están las claims)
    }

    // Verifica si un token ha expirado comparando la fecha de expiración con la actual.
    private Boolean isTokenExpired(String token) {
        return extractAllClaims(token).getExpiration().before(new Date());
    }
}
