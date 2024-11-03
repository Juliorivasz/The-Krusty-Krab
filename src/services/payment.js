export async function sendCartDataToBackend() {
    const cart = JSON.parse(localStorage.getItem("cart"));

    // Calcular el monto total y crear los items para la preferencia
    const items = cart.map((item) => ({
        id: item.product.id,             // Obtener el ID del producto
        title: item.product.title,       // Obtener el título del producto
        quantity: item.units,            // Obtener la cantidad de unidades
        unit_price: item.product.price,  // Obtener el precio unitario
        category: item.product.category
    }));

    // Calcular el monto total
    const unit_price = items.reduce((total, item) => total + (item.quantity*item.unit_price), 0);
    const quantity = 1;
    const title = items.reduce((item) => item.category);
    const currency_id = "ARS"
    
    // Aquí asumes que tienes un método para obtener el correo del usuario. Asegúrate de reemplazarlo con el valor real.

    const body = {
        title, 
        quantity, 
        unit_price, 
        currency_id,
    };

    console.log("Cuerpo de la solicitud:", body);

    try {
        const response = await fetch("http://localhost:3000/api/create_preference", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body), // Enviar el cuerpo correcto
        });

        if (!response.ok) {
            throw new Error("Error al crear la preferencia de Mercado Pago");
        }

        const responseData = await response.json();
        console.log("Respuesta del backend:", responseData);
        return responseData.id; // Retornar el ID de la preferencia

    } catch (error) {
        console.error("Error en la solicitud:", error);
    }
}


