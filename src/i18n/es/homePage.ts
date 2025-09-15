import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Iniciar Sesión',
  logoutText: 'Cerrar Sesión',
  common: {
    saving: 'Guardando...',
    checking: 'Verificando...'
  },
  setUserName: {
    title: 'Hola, ¿cómo te gustaría que te llame?',
    label: 'Tu nombre:',
    placeholder: 'Ingresa tu nombre',
    button: 'Guardar',
    setting: 'Guardando...',
    success: '¡Perfecto! ¡Mucho gusto conocerte!',
    error: '¡Ups! Algo salió mal. Por favor intenta de nuevo.'
  },
  phone: {
    syncCodeSent: 'Te enviamos un código de sincronización.',
    title: 'Conectemos tu teléfono',
    subtitle: 'Fito usará tu número para mantener tu experiencia sincronizada.',
    countryCodePlaceholder: '+57',
    numberPlaceholder: '300 123 4567',
    countryCodeError: 'El indicativo debe ser como +1, +44, +57.',
    numberError: 'El número debe tener entre 6 y 14 dígitos.',
    save: 'Guardar teléfono y generar código',
    cancelChange: 'Cancelar cambio',
    changePhone: 'Cambiar teléfono',
    verifyTitle: 'Por favor, envíame este código por WhatsApp',
    verifyHelp: "Puedes usar el botón 'Enviar en WhatsApp' abajo o enviarlo directamente al +57 310 810 8201",
    openWhatsapp: 'Enviar en WhatsApp',
    codeValidTime: 'Este código es válido por 5 minutos.',
    veryfyConfirmHelp: 'Después de enviar el código por WhatsApp, haz clic en el botón de abajo para confirmar.',
    notVerifiedYet: 'Aún no detectamos la verificación. Por favor, inténtalo de nuevo.',
    whatsappMessageTemplate: 'Hola Fito, este es mi código de sincronización: {code}',
    alreadySynced: 'Ya sincronizé'
  },
  userInfo: {
    title: 'Información del Usuario',
    userId: 'ID de Usuario',
    name: 'Nombre',
    userData: 'Datos del Usuario'
  },
  loading: 'Cargando panel de control...'
};
