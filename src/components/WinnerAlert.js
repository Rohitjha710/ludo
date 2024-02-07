import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const WinnerAlert = ({ winner,color }) => {
  useEffect(() => {
    if (winner) {
      Swal.fire({
        title: `Player ${winner} (${color}) has won!!`,
        icon: 'success',
        confirmButtonText: 'Ok',
        showConfirmButton: true, // Remove the checkbox
      });
    }
  }, [winner]);

  return null; // This component doesn't render anything directly
};

export default WinnerAlert;
