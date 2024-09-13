package Services;

import Entitys.FormEntity;
import ModelDto.FormDto;
import Repository.FormRepository;
import org.springframework.stereotype.Service;
@Service
// Esta clase contiene la lógica de negocio. En este caso, se encarga de procesar y guardar los datos
// que vienen del DTO (FormDto) en la base de datos utilizando el repositorio.
public class FormService {

    private final FormRepository formRepository;
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
    }
}

