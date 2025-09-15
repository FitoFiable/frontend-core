import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Iniciar Sesión',
  logoutText: 'Cerrar Sesión',
  setUserName: {
    title: 'Hola, ¿cómo te gustaría que te llame?',
    label: 'Tu nombre:',
    placeholder: 'Ingresa tu nombre',
    button: 'Guardar',
    setting: 'Guardando...',
    success: '¡Perfecto! ¡Mucho gusto conocerte!',
    error: '¡Ups! Algo salió mal. Por favor intenta de nuevo.'
  },
  userInfo: {
    title: 'Información del Usuario',
    userId: 'ID de Usuario',
    name: 'Nombre',
    userData: 'Datos del Usuario'
  },
  loading: 'Cargando panel de control...'
};
