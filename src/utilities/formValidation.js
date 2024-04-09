export function form_validations(formValues) {
  let errValid = [];

  // Nome
  if (!formValues.firstName) {
    errValid.push("Il campo 'Nome' è richiesto!");
  } else if (formValues.firstName.length < 2) {
    errValid.push("Il campo 'Nome' è troppo corto!");
  } else if (formValues.firstName.length > 50) {
    errValid.push("Il campo 'Nome' non può superare i 50 caratteri!");
  }

  // Cognome
  if (!formValues.lastName) {
    errValid.push("Il campo 'Cognome' è richiesto!");
  } else if (formValues.lastName.length < 2) {
    errValid.push("Il campo 'Cognome' è troppo corto!");
  } else if (formValues.lastName.length > 50) {
    errValid.push("Il campo 'Cognome' non può superare i 50 caratteri!");
  }

  // Email
  if (!formValues.email && formValues.reply == 1) {
    errValid.push("Il campo 'Email' è richiesto!");
  } else if (!formValues.email.includes("@")) {
    errValid.push("Il campo 'Email' deve includere '@'");
  } else if (
    !(formValues.email.endsWith(".com") || formValues.email.endsWith(".it"))
  ) {
    errValid.push("Il campo 'Email' deve terminare con '.com' o '.it'");
  } else if (formValues.email.length < 5) {
    errValid.push("Il campo 'Email' deve contenere almeno 5 caratteri");
  }

  // Telefono
  if (!formValues.phone && (formValues.reply == 2 || formValues.reply == 3)) {
    errValid.push("Il campo 'N° 'telefono' è richiesto!");
  } else if (formValues.phone.startsWith("+39")) {
    errValid.push("Il 'N° 'telefono' non deve contenere il prefisso '+39'");
  }

  return errValid;
}
