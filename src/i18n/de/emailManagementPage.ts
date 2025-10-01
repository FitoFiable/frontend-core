import type { EmailManagementPageLangType } from '../types/emailManagementPage';

export const emailManagementPage: EmailManagementPageLangType = {
  header: {
    title: 'E-Mail-Verwaltung',
    subtitle: 'Verwalten Sie Ihre erlaubten und bestätigten E-Mails',
    backToDashboard: 'Zurück zum Dashboard'
  },
  emailSync: {
    title: 'Wie E-Mail-Synchronisation funktioniert',
    step1: {
      title: 'Schritt 1: Erlaubte E-Mails hinzufügen',
      description: 'Dies sind E-Mail-Adressen, die Sie mit IhremFito-Konto verknüpfen möchten. Verwenden Sie das E-Mail-Verwaltungsformular, um sie hinzuzufügen.'
    },
    step2: {
      title: 'Schritt 2: E-Mail-Eigentum bestätigen',
      description: 'Um eine E-Mail zu aktivieren, müssen Sie eine Bestätigungs-E-Mail von dieser Adresse an go@fitofiable.com mit Ihrer Telefonnummer als Betreff senden:',
      subjectLabel: 'Betreff:',
      phoneLabel: 'Ihre Telefonnummer:',
      sendButton: 'Bestätigungs-E-Mail senden'
    },
    step3: {
      title: 'Schritt 3: E-Mail wird aktiv',
      description: 'Nach der Bestätigung wird die E-Mail "Aktiv" und Fito verarbeitet automatisch alle von dieser Adresse empfangenen E-Mails und bezieht sie in Dashboard-Analysen und Finanzberichte ein.'
    },
    status: {
      pending: 'Ausstehend - Warten auf Bestätigungs-E-Mail',
      active: 'Aktiv - Bereit zum Empfangen von E-Mails'
    }
  },
  gmailSetup: {
    title: 'Automatische Bank-E-Mail-Weiterleitung einrichten',
    description: 'Konfigurieren Sie Gmail, um Bank-Benachrichtigungen automatisch anFito weiterzuleiten für nahtlose Finanzverfolgung.',
    step1: {
      title: 'Schritt 1: E-Mail-Weiterleitung konfigurieren',
      steps: [
        'Öffnen Sie Gmail auf Ihrem Computer',
        'Klicken Sie auf das ⚙️ (Einstellungen) Symbol oben rechts',
        'Klicken Sie auf "Alle Einstellungen anzeigen"',
        'Klicken Sie auf den Tab "Weiterleitung und POP/IMAP"',
        'Klicken Sie auf "Weiterleitungsadresse hinzufügen"',
        'Geben Sie ein: go@fitofiable.com',
        'Klicken Sie auf "Weiter" und bestätigen Sie Ihre Identität',
        'Klicken Sie auf "Fortfahren" zur Bestätigung'
      ]
    },
    step2: {
      title: 'Schritt 2: E-Mail-Filter erstellen',
      steps: [
        'In Ihrem Posteingang klicken Sie auf das 🔍 (Suchen) Symbol',
        'Klicken Sie auf das Filter-Symbol (drei horizontale Linien) neben der Lupe',
        'Im Feld "Von" erstellen Sie einen Filter mit den E-Mail-Adressen Ihrer Bank'
      ],
      findEmails: {
        title: '💡 So finden Sie die E-Mail-Adressen Ihrer Bank:',
        tips: [
          'Überprüfen Sie die Benachrichtigungs-E-Mails Ihrer Bank in Ihrem Posteingang',
          'Schauen Sie sich das "Von"-Feld der letzten Bank-E-Mails an',
          'Häufige Muster: benachrichtigungen@[bank].de, alerts@[bank].de, transaktionen@[bank].de',
          'Kopieren Sie alle E-Mail-Adressen und fügen Sie sie zusammen mit "OR" zwischen jeder Adresse ein'
        ],
        warning: '⚠️ Wichtig: Fügen Sie alle E-Mail-Adressen in dasselbe Feld ein, getrennt durch "OR" (nicht in separate Felder)'
      },
      example: {
        title: 'Beispiel für deutsche Banken (anpassen für Ihre Banken):',
        banks: 'benachrichtigungen@deutsche-bank.de OR alerts@deutsche-bank.de OR transaktionen@deutsche-bank.de OR benachrichtigungen@commerzbank.de OR alerts@commerzbank.de OR transaktionen@commerzbank.de OR benachrichtigungen@sparkasse.de OR alerts@sparkasse.de OR transaktionen@sparkasse.de OR benachrichtigungen@volksbank.de OR alerts@volksbank.de OR transaktionen@volksbank.de OR benachrichtigungen@postbank.de OR alerts@postbank.de OR transaktionen@postbank.de'
      }
    },
    success: {
      title: '✅ Alles bereit!',
      description: 'Alle Bank-Benachrichtigungen werden jetzt automatisch anFito weitergeleitet.',
      time: 'Gesamte Einrichtungszeit: 3-5 Minuten'
    }
  }
};
