package Repository;

import Entitys.FormEntity;
import org.springframework.data.jpa.repository.JpaRepository;
// Esta interfaz extiende JpaRepository, lo que me permite realizar operaciones CRUD (crear, leer,
// actualizar y eliminar) sobre la entidad FormEntity sin tener que escribir código SQL manualmente.
public interface FormRepository extends JpaRepository<FormEntity, Long> {
}
