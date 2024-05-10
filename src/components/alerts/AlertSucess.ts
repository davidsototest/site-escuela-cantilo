import Swal, { SweetAlertOptions } from 'sweetalert2';

export const AlertSucess = () => {
  return Swal.fire({
    
        title: '¡Suscripción Exitosa!',
        text: 'A partir de ahora, recibirás información de la escuela "Padre Rafael Cantilo" directamente en tu bandeja de entrada de correo electrónico.',
        icon: 'success',
        confirmButtonText: 'Entendido',
        confirmButtonColor: "#006634",
        customClass: {
            confirmButton: 'button-seconary',
            title: 'sub-tittle',
            popup: 'paragraph'
          },
  });
};

export default AlertSucess;