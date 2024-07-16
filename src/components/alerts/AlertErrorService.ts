import Swal from 'sweetalert2';

export const AlertErrorService = () => {
  return Swal.fire({
    
        title: '¡Algo salió mal!',
        text: 'Ocurrió un error en los servicios para almacenar el correo, en los próximos días se estará corrigiendo.',
        icon: 'error',
        confirmButtonText: 'Salir',
        confirmButtonColor: "#006634",
        customClass: {
            confirmButton: 'button-seconary',
            title: 'sub-tittle',
            popup: 'paragraph'
          },
  });
};

export default AlertErrorService;