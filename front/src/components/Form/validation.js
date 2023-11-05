function validate(userData) {
  let errors = {};

  // Validar el nombre de usuario
  if (!userData.email) {
    errors.email = 'El nombre de usuario es requerido.';
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = 'El nombre de usuario debe ser un email válido.';
  } else if (userData.email.length > 35) {
    errors.email = 'El nombre de usuario no puede tener más de 35 caracteres.';
  }

  // Validar la contraseña
  if (!userData.password) {
    errors.password = 'La contraseña es requerida.';
  } else if (!/\d/.test(userData.password)) {
    errors.password = 'La contraseña debe contener al menos un número.';
  } else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = 'La contraseña debe tener entre 6 y 10 caracteres.';
  }

  if(!userData.email && !userData.password){
    errors = {};
  }

  return errors;
}

export default validate;