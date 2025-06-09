import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/Authcontext';
import Loadingspiner from '../common/loadingspiner';
import Rolesaccess from '../common/rolesacces';
import Rolesroutes from './Rolesroutes';

export default function Privateroutes() {
  let { user, loading } = useAuth();
  let location = useLocation(); 

  if (loading) {
    return <Loadingspiner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  let currentPath = location.pathname;
  let allowed = Rolesroutes()[user.rol] || [];

  // Verifica si el usuario tiene acceso a la ruta actual
  const hasAccess = allowed.some(route => currentPath.startsWith(route));
  if (!hasAccess) {
    return <Navigate to="*" replace />; 
  }

  return <Outlet />;
}

