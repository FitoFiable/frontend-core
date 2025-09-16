import type { EmailManagementPageLangType } from '../types/emailManagementPage';

export const emailManagementPage: EmailManagementPageLangType = {
  header: {
    title: 'Gestión de Correos',
    subtitle: 'Gestiona tus correos permitidos y confirmados',
    backToDashboard: 'Volver al Dashboard'
  },
  emailSync: {
    title: 'Cómo Funciona la Sincronización de Correos',
    step1: {
      title: 'Paso 1: Agregar Correos Permitidos',
      description: 'Estas son las direcciones de correo que quieres asociar con tu cuenta de Fito Fiable. Usa el formulario de gestión de correos para agregarlos.'
    },
    step2: {
      title: 'Paso 2: Confirmar Propiedad del Correo',
      description: 'Para activar un correo, debes enviar un correo de confirmación desde esa dirección a go@fitofiable.com con el asunto siendo tu número de teléfono:',
      subjectLabel: 'Asunto:',
      phoneLabel: 'Tu número de teléfono:',
      sendButton: 'Enviar Correo de Confirmación'
    },
    step3: {
      title: 'Paso 3: El Correo se Vuelve Activo',
      description: 'Una vez confirmado, el correo se vuelve "Activo" y Fito procesará automáticamente todos los correos recibidos de esa dirección, incluyéndolos en los análisis del dashboard y reportes financieros.'
    },
    status: {
      pending: 'Pendiente - Esperando correo de confirmación',
      active: 'Activo - Listo para recibir correos'
    }
  },
  gmailSetup: {
    title: 'Configurar Reenvío Automático de Correos Bancarios',
    description: 'Configura Gmail para reenviar automáticamente las notificaciones bancarias a Fito Fiable para un seguimiento financiero sin interrupciones.',
    step1: {
      title: 'Paso 1: Configurar Reenvío de Correos',
      steps: [
        'Abre Gmail en tu computador',
        'Haz clic en el ⚙️ (ajustes) arriba a la derecha',
        'Haz clic en "Ver toda la configuración"',
        'Haz clic en la pestaña "Reenvío y correo POP/IMAP"',
        'Haz clic en "Agregar una dirección de reenvío"',
        'Escribe: go@fitofiable.com',
        'Haz clic en "Siguiente" y confirma tu identidad',
        'Haz clic en "Aceptar"'
      ]
    },
    step2: {
      title: 'Paso 2: Crear el Filtro',
      steps: [
        'En la bandeja de entrada, haz clic en el 🔍 (buscar)',
        'Haz clic en el ícono de filtro (tres líneas horizontales) al lado de la lupa',
        'En el campo "De" crea un filtro con las direcciones de correo de tu banco'
      ],
      findEmails: {
        title: '💡 Cómo encontrar las direcciones de correo de tu banco:',
        tips: [
          'Revisa los correos de notificación de tu banco en tu bandeja de entrada',
          'Mira el campo "De" de los correos bancarios recientes',
          'Patrones comunes: notificaciones@[banco].com, alertas@[banco].com, transacciones@[banco].com',
          'Copia todas las direcciones de correo y pégalas juntas usando "OR" entre cada dirección'
        ],
        warning: '⚠️ Importante: Pega todas las direcciones de correo en el mismo campo, separadas por "OR" (no en campos separados)'
      },
      example: {
        title: 'Ejemplo para bancos colombianos (personaliza para tus bancos):',
        banks: 'notificaciones@bancolombia.com.co OR alertas@bancolombia.com.co OR transacciones@bancolombia.com.co OR notificaciones@bancodebogota.com.co OR alertas@bancodebogota.com.co OR transacciones@bancodebogota.com.co OR notificaciones@davivienda.com OR alertas@davivienda.com OR transacciones@davivienda.com OR notificaciones@bbva.com.co OR alertas@bbva.com.co OR transacciones@bbva.com.co OR notificaciones@bancopopular.com.co OR alertas@bancopopular.com.co OR notificaciones@avvillas.com.co OR alertas@avvillas.com.co OR notificaciones@bancajasocial.com.co OR alertas@bancajasocial.com.co OR notificaciones@scotiabankcolpatria.com OR alertas@scotiabankcolpatria.com OR notificaciones@bancoagrario.gov.co OR alertas@bancoagrario.gov.co OR notificaciones@nequi.com.co OR alertas@nequi.com.co'
      }
    },
    success: {
      title: '✅ ¡Listo!',
      description: 'Todos los correos de notificación bancaria ahora se reenviarán automáticamente a Fito Fiable.',
      time: 'Tiempo total de configuración: 3-5 minutos'
    }
  }
};
