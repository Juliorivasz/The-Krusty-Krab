package ModelDto;
// Esta clase actúa como un Data Transfer Object (DTO), y su función es transportar los datos
// del formulario desde el frontend hacia el backend, pero no está directamente relacionada con
// las entidades de la base de datos.
import lombok.Getter;
import lombok.Setter;
// Getters y setters para acceder y modificar los valores de los campos del formulario.
@Setter
@Getter
public class FormDto {
    // Getters y setters
    private String nombre;
    private String email;

}
