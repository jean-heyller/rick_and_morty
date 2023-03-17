function validate(userData) {
    let errors = {};
  
    // Validar el nombre de usuario
    if (!userData.username) {
      errors.username = 'El nombre de usuario es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(userData.username)) {
      errors.username = 'El nombre de usuario debe ser un email válido.';
    } else if (userData.username.length > 35) {
      errors.username = 'El nombre de usuario no puede tener más de 35 caracteres.';
    }
  
    // Validar la contraseña
    if (!userData.password) {
      errors.password = 'La contraseña es requerida.';
    } else if (!/\d/.test(userData.password)) {
      errors.password = 'La contraseña debe contener al menos un número.';
    } else if (userData.password.length < 6 || userData.password.length > 10) {
      errors.password = 'La contraseña debe tener entre 6 y 10 caracteres.';
    }
  
    return errors;
  }
  
  export default validate;
  