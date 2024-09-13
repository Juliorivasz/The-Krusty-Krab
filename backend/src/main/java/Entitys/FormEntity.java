package Entitys;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "form_data")
// Esta clase representa una entidad de la base de datos. Cada instancia de esta clase
// se corresponde con una fila en la tabla "form_data" en MySQL.
public class FormEntity {

    // Getters y setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // Este campo es la clave primaria de la tabla en la base de datos. Se generará automáticamente.
    private Long id;
    // Este campo almacena el nombre recibido del formulario.
    private String nombre;
    @Column(unique = true)  // Los emails deben ser únicos. Aca se almacena el email recibido del formulario.
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)  // Para roles de usuarios
    private Role role;

    // Enum para los roles
    public enum Role {
        ADMIN, CLIENTE
    }
}

