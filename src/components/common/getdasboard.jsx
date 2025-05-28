import React from 'react'

export default function getdasboard(rol) {
    if (rol === 'admin') {
    return '/dashboard';
  } else if (rol === 'user') {
    return '/dashboard/user';
  } else {
    return '/login'; // en caso de rol no reconocido
  }
}
  
  

