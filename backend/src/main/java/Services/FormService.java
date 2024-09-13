package Services;

import Entitys.FormEntity;
import Repository.FormRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class FormService {

    private final FormRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // Constructor que inyecta dependencias
    public FormService(FormRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // Método para registrar un usuario. Ahora incluye el parámetro 'email'.
    public void registerUser(String username, String email, String password, FormEntity.Role role) {
        // Verificar si el email ya está registrado
        if (userRepository.findByEmail(email).isPresent()) {
            throw new IllegalArgumentException("El correo electrónico ya está registrado");
        }

        FormEntity user = new FormEntity();
        user.setNombre(username);
        user.setEmail(email);  // Guardar el email
        user.setPassword(passwordEncoder.encode(password));  // Codificar la contraseña
        user.setRole(role);

        userRepository.save(user);  // Guardar en la base de datos
    }

    // Método para buscar usuario por email
    public FormEntity findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}

/*
// Inyecto el repositorio que me permite realizar operaciones con la base de datos.
public FormService(FormRepository formRepository) {
    this.formRepository = formRepository;
}
// Este método recibe un FormDto, convierte los datos en una entidad y luego guarda esos
// datos en la base de datos mediante el repositorio.
public void saveForm(FormDto formDto) {
    FormEntity formEntity = new FormEntity();
    formEntity.setNombre(formDto.getNombre());
    formEntity.setEmail(formDto.getEmail());
    // Llamo al repositorio para guardar la entidad en la base de datos.
    formRepository.save(formEntity);
}*/