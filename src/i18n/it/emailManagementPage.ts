import type { EmailManagementPageLangType } from '../types/emailManagementPage';

export const emailManagementPage: EmailManagementPageLangType = {
  header: {
    title: 'Gestione E-mail',
    subtitle: 'Gestisci le tue e-mail autorizzate e confermate',
    backToDashboard: 'Torna alla Dashboard'
  },
  emailSync: {
    title: 'Come Funziona la Sincronizzazione E-mail',
    step1: {
      title: 'Passo 1: Aggiungi E-mail Autorizzate',
      description: 'Queste sono le indirizzi e-mail che vuoi associare al tuo account Fito Fiable. Usa il modulo di gestione e-mail per aggiungerli.'
    },
    step2: {
      title: 'Passo 2: Conferma la Proprietà dell\'E-mail',
      description: 'Per attivare un\'e-mail, devi inviare un\'e-mail di conferma da quell\'indirizzo a go@fitofiable.com con il numero di telefono come oggetto:',
      subjectLabel: 'Oggetto:',
      phoneLabel: 'Il tuo numero di telefono:',
      sendButton: 'Invia E-mail di Conferma'
    },
    step3: {
      title: 'Passo 3: L\'E-mail Diventa Attiva',
      description: 'Una volta confermata, l\'e-mail diventa "Attiva" e Fito elaborerà automaticamente tutte le e-mail ricevute da quell\'indirizzo, includendole nelle analisi della dashboard e nei report finanziari.'
    },
    status: {
      pending: 'In attesa - In attesa dell\'e-mail di conferma',
      active: 'Attiva - Pronta a ricevere e-mail'
    }
  },
  gmailSetup: {
    title: 'Configura l\'Inoltro Automatico delle E-mail Bancarie',
    description: 'Configura Gmail per inoltrare automaticamente le notifiche bancarie a Fito Fiable per un monitoraggio finanziario senza interruzioni.',
    step1: {
      title: 'Passo 1: Configura l\'Inoltro E-mail',
      steps: [
        'Apri Gmail sul tuo computer',
        'Clicca sull\'icona ⚙️ (impostazioni) in alto a destra',
        'Clicca su "Visualizza tutte le impostazioni"',
        'Clicca sulla scheda "Inoltro e POP/IMAP"',
        'Clicca su "Aggiungi un indirizzo di inoltro"',
        'Inserisci: go@fitofiable.com',
        'Clicca su "Avanti" e verifica la tua identità',
        'Clicca su "Procedi" per confermare'
      ]
    },
    step2: {
      title: 'Passo 2: Crea Filtro E-mail',
      steps: [
        'Nella tua casella di posta, clicca sull\'icona 🔍 (cerca)',
        'Clicca sull\'icona del filtro (tre linee orizzontali) accanto alla lente d\'ingrandimento',
        'Nel campo "Da", crea un filtro con gli indirizzi e-mail della tua banca'
      ],
      findEmails: {
        title: '💡 Come trovare gli indirizzi e-mail della tua banca:',
        tips: [
          'Controlla le e-mail di notifica della tua banca nella tua casella di posta',
          'Guarda il campo "Da" delle e-mail bancarie recenti',
          'Modelli comuni: notifiche@[banca].it, avvisi@[banca].it, transazioni@[banca].it',
          'Copia tutti gli indirizzi e-mail e incollali insieme usando "OR" tra ogni indirizzo'
        ],
        warning: '⚠️ Importante: Incolla tutti gli indirizzi e-mail nello stesso campo, separati da "OR" (non in campi separati)'
      },
      example: {
        title: 'Esempio per banche italiane (personalizza per le tue banche):',
        banks: 'notifiche@intesasanpaolo.com OR avvisi@intesasanpaolo.com OR transazioni@intesasanpaolo.com OR notifiche@unicredit.it OR avvisi@unicredit.it OR transazioni@unicredit.it OR notifiche@bancopopolare.it OR avvisi@bancopopolare.it OR transazioni@bancopopolare.it OR notifiche@bper.it OR avvisi@bper.it OR transazioni@bper.it OR notifiche@mps.it OR avvisi@mps.it OR transazioni@mps.it'
      }
    },
    success: {
      title: '✅ Tutto Pronto!',
      description: 'Tutte le notifiche bancarie verranno ora inoltrate automaticamente a Fito Fiable.',
      time: 'Tempo totale di configurazione: 3-5 minuti'
    }
  }
};
