import Swal from 'sweetalert2';

export function errorAlert(text:string){
    Swal.fire({
        title: 'Error!',
        text: text,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
}
