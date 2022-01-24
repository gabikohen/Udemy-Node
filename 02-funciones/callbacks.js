/*etTimeout(() => {
  console.log("Hola mundo");
});*/

const getUsuarioByID = (id,cab) => {
  //informacion de la base de datos 
    const user = {
    id,
    nombre: "Gabriel",
  };

  setTimeout(() => {
    cab(user);
  }, 1500);
};

getUsuarioByID(10,(usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});
