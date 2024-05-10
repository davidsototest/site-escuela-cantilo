import Swal, { SweetAlertOptions } from 'sweetalert2';

export const AlertQuestion = () => {
  return Swal.fire({
    
        title: '¡Correo Inválido!',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonColor: "#006634",
        customClass: {
            confirmButton: 'button-seconary',
            title: 'sub-tittle',
            popup: 'paragraph'
          },
  });
};

export default AlertQuestion;