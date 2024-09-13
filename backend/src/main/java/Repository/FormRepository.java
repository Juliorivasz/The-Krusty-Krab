package Repository;

import Entitys.FormEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// Esta interfaz extiende JpaRepository, lo que me permite realizar operaciones CRUD (crear, leer,
// actualizar y eliminar) sobre la entidad FormEntity sin tener que escribir código SQL manualmente.
public interface FormRepository extends JpaRepository<FormEntity, Long> {
    Optional<FormEntity> findByUsername(String username);// Método para buscar por nombre
    Optional<FormEntity> findByEmail(String email); // Método para buscar por email
}
