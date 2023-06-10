export class ServicioListaUsuarios {
  obtenerUsuarios() {
    return fetch('http://localhost:8080/auth/user/lista',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(data => data);
  }

  nuevoUsuario(usuario) {
    return fetch('http://localhost:8080/auth/nuevo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    })
  }

  actualizarUsuario(usuario) {
    return fetch('http://localhost:8080/auth/user/actualizar/' + usuario.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    })
  }

  // eliminarUsuario(idUsuario) {
  //   return fetch('http://localhost:8080/auth/user/actualizar/' + idUsuario, {
  //     method: 'DELETE',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // }
}
