import React from 'react'


export default function Rolesaccess() {
  return {
    admin: ['/dashboard', '/dashboard/admin', '/dashboard/reports'],
    user: ['/dashboard/user'],
  };
}

