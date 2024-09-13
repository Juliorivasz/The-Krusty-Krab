package controllers;

import ModelDto.FormDto;
import Services.FormService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//Endpoint de formulario de inicio de sesion,
@RestController
@RequestMapping("/api/formulario")
public class FormController {

    private final FormService formService;
    // Inyecto el servicio FormService, que contiene la lógica para procesar los datos del formulario
    public FormController(FormService formService) {
        this.formService = formService;
    }
    // Este endpoint se encarga de recibir los datos del formulario enviados desde el frontend.
    // Los datos se reciben en formato JSON y se mapean al objeto FormDto.
    @PostMapping("/submit")
    public ResponseEntity<String> submitForm(@RequestBody FormDto formDto) {
        // Aquí llamo al servicio para guardar los datos del formulario en la base de datos.
        formService.saveForm(formDto);
        // Devuelvo una respuesta de éxito si el formulario fue procesado correctamente.
        return ResponseEntity.ok("Formulario enviado correctamente");
    }
}
