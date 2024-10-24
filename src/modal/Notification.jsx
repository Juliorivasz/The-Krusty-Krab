import closeModal from '../assets/img/icons/close-circle-outline.svg'; 

export const Notification = ({ notifications, handleShowNotifications, showNotifications }) => {

const toggleNotifications = () => {
    handleShowNotifications(!showNotifications);
};

return (
    <div style={{
        position: "absolute",
        backgroundColor: "#005478", 
        top: "20%",
        right: "5%",
        width: "320px",
        padding: "0",
        height: showNotifications ? "400px" : "0", // despliegue
        overflow: "hidden",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        transition: "height 1s ease-in-out",
        zIndex: 1000
    }}>
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        backgroundColor: "#0e7891",
        color: "white",
        fontSize: "18px"
    }} onClick={toggleNotifications}>
        <h3 style={{ margin: 0 }}>Notificaciones</h3>
        <div style={{ width: "30px", cursor: "pointer" }}>
            <img src={closeModal} alt="Cerrar modal" />
        </div>
    </div>
    <div style={{
        padding: "16px",
        maxHeight: "300px",
        overflowY: "auto"
    }}>
        {notifications.length > 0 ? (
        notifications.map((notification, index) => (
            <div key={index} style={{
                padding: "12px",
                backgroundColor: "#e0f7fa",
                borderRadius: "6px",
                marginBottom: "8px"
            }}>
                <p style={{ margin: 0, fontSize: "14px" }}>{notification.message}</p>
            <small style={{
                display: "block",
                marginTop: "4px",
                fontSize: "12px",
                color: "#607d8b"
            }}>{notification.date} • {notification.time}</small>
            </div>
        ))
        ) : (
            <p>No tienes notificaciones</p>
        )}
    </div>
    </div>
);
};