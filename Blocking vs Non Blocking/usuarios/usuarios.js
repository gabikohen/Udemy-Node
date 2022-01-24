const getUsuarioSync = (id) => {
  const startPoint = new Date().getDate();
  while (new date().getTime() - startPoint <= 3000) {}
  return {
    id,
    nombre: `Usuario ${id}`,
  };
};


const getUsuario = (id,callback) =>{
const usuaario = {
    id,
    nombre:`Usuario ${id}`
};
setTimeout (() =>{
    callback(usuario);

},3000)

}

module.exports = {
    getUsuario,
    getUsuarioSync
}