import React, { useState, useEffect, useRef } from 'react'
import { classNames } from 'primereact/utils'
import { FilterMatchMode } from 'primereact/api'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { Button } from 'primereact/button'
import { TriStateCheckbox } from 'primereact/tristatecheckbox'
import { Toast } from 'primereact/toast'
import { Dialog } from 'primereact/dialog'
import { Calendar } from 'primereact/calendar';


import { ServicioListaUsuarios } from '../services/ServicioListaUsuarios'
import '../style/ListaUsuarios.css'

export function ListaUsuarios() {
  let usuarioVacio = {
    id: null,
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    fechaNacimiento: '',
    ci: '',
    genero: '',
    nombreUsuario: '',
    password: '',
    email: '',
    numeroTelefono: 0,
    estado: 0
  }

  const [usuario, setUsuario] = useState(usuarioVacio)
  const [usuarios, setUsuarios] = useState([])
  const [modalUsuario, setModalUsuario] = useState(false)
  const [modalEliminarUsuario, setModalEliminarUsuario] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [filtros, setFiltros] = useState(null);
  const [loading, setLoading] = useState(false);
  const [valorFiltroGlobal, setValorFiltroGlobal] = useState('')
  const toast = useRef(null);

  const servicioListaUsuarios = new ServicioListaUsuarios()

  useEffect(() => {
    servicioListaUsuarios.obtenerUsuarios().then((data) => {
      console.log(data)
      setUsuarios(data)
    })
    filtrosIniciales()
  }, []);

  const onCambioFiltroGlobal = (e) => {
    const value = e.target.value;
    let _filtros = { ...filtros };

    _filtros['global'].value = value;

    setFiltros(_filtros);
    setValorFiltroGlobal(value);
  };

  const filtrosIniciales = () => {
    setFiltros({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    setValorFiltroGlobal('');
  };

  const onInputChange = (e, campo) => {
    // Hacer IF en una linea
    const val = (e.target && e.target.value) || '';
    let _usuario = { ...usuario };
    _usuario[`${campo}`] = val;
    setUsuario(_usuario);
  }

  const ocultarModal = () => {
    setSubmitted(false);
    setModalUsuario(false);
  }

  const ocultarModalEliminarUsuario = () => {
    setModalEliminarUsuario(false);
  }

  const editarUsuario = (usuario) => {
    setUsuario({ ...usuario });
    setModalUsuario(true);
  }

  const confirmarEliminarUsuario = (usuario) => {
    setUsuario(usuario);
    setModalEliminarUsuario(true);
  }

  const eliminarUsuario = () => {
    setSubmitted(true);
    usuario.estado = 0
    servicioListaUsuarios.actualizarUsuario(usuario).then((datos) => {
      if (datos.status === 200) {
        toast.current.show({ severity: 'success', summary: 'Exito', detail: 'Usuario eliminado', life: 3000 });
        servicioListaUsuarios.obtenerUsuarios().then((datos) => {
          setUsuarios(datos);
        })
      } else {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el usuario', life: 3000 });
      }
    })
    setSubmitted(false);
    setModalEliminarUsuario(false);
  }

  const abrirNuevo = () => {
    setUsuario(usuarioVacio);
    setSubmitted(false);
    setModalUsuario(true);
  }

  const guardarUsuario = () => {
    setSubmitted(true);

    if (usuario.id) {
      servicioListaUsuarios.actualizarUsuario(usuario).then((datos) => {
        if (datos.status === 200) {
          toast.current.show({ severity: 'success', summary: 'Éxito', detail: 'Usuario actualizado.', life: 3000 });
          servicioListaUsuarios.obtenerUsuarios().then((datos) => {
            setUsuarios(datos);
          })
        } else {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar.', life: 3000 });
        }
        console.log(datos)
      })
    } else {
      usuario.password = '123123'
      usuario.nombreUsuario = usuario.nombre + usuario.ci
      usuario.genero = 'F'

      console.log(usuario)
      servicioListaUsuarios.nuevoUsuario(usuario).then((datos) => {
        if (datos.status === 201) {
          toast.current.show({ severity: 'success', summary: 'Exito', detail: 'Usuario creado.', life: 3000 });
          servicioListaUsuarios.obtenerUsuarios().then((datos) => {
            setUsuarios(datos);
          })
        } else {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'No se pudo crear al usuario', life: 3000 });
        }
      })
    }
    setSubmitted(false);
    setModalUsuario(false);
  }

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between">
        <div className="flex gap-2">
          <Button type="button" className='p-button-text' icon="pi pi-plus" outlined onClick={abrirNuevo} />
        </div>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={valorFiltroGlobal} onChange={onCambioFiltroGlobal} placeholder="Buscar palabra clave" />
        </span>
      </div>
    );
  };

  const formatoCeldaNombre = (rowData) => {
    const usuario = rowData;

    return (
      <div className="flex align-items-center gap-2">
        {/* <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" /> */}
        <span>{usuario.nombre} {usuario.primerApellido} {usuario.segundoApellido}</span>
      </div>
    );
  };

  const formatoCeldaUsuario = (rowData) => {
    const usuario = rowData;

    return (
      <div className="flex align-items-center gap-2">
        <span>{usuario.nombreUsuario}</span>
      </div>
    );
  };

  const formatoCeldaCorreo = (rowData) => {
    const usuario = rowData;

    return (
      <div className="flex align-items-center gap-2">
        <span>{usuario.email}</span>
      </div>
    );
  };

  const formatoCeldaCelular = (rowData) => {
    const usuario = rowData;

    return (
      <div className="flex align-items-center gap-2">
        <span>{usuario.numeroTelefono}</span>
      </div>
    );
  };

  const formatoCeldaEstado = (rowData) => {
    const usuario = rowData;

    return <span className={`estado ${usuario.estado === '1' ? 'activo' : 'inactivo'}`}>{usuario.estado === '1' ? 'ACTIVO' : 'INACTIVO'}</span>
  };

  const formatoCeldaAcciones = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        <Button icon="pi pi-pencil" className="p-button" onClick={() => editarUsuario(rowData)} />
        <Button icon="pi pi-trash" className='p-button-text' onClick={() => confirmarEliminarUsuario(rowData)} />
      </div>
    );
  };

  const footerModalUsuario = (
    <>
      <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={ocultarModal} />
      <Button label="Guardar" icon="pi pi-check" className="p-button-text" onClick={guardarUsuario} />
    </>
  );

  const footerModalEliminarUsuario = (
    <>
      <Button label="No" icon="pi pi-times" className="p-button-text" onClick={ocultarModalEliminarUsuario} />
      <Button label="Sí" icon="pi pi-check" className="p-button-text" onClick={eliminarUsuario} />
    </>
  );

  const header = renderHeader();
  return (
    <div class="user-list">

      <Toast ref={toast} />
      <DataTable value={usuarios} paginator showGridlines rows={7} loading={loading} dataKey="id"
        filters={filtros} globalFilterFields={['nombre', 'nombreUsuario', 'numeroTelefono', 'email', 'estado']} header={header}
        emptyMessage="No se encontraron usuarios.">
        <Column header="Nombre" filterField="nombre" style={{ minWidth: '14rem' }} body={formatoCeldaNombre} />
        <Column header="Usuario" filterField="nombreUsuario" style={{ minWidth: '10rem' }} body={formatoCeldaUsuario} />
        <Column header="Email" filterField="email" style={{ minWidth: '10rem' }} body={formatoCeldaCorreo} />
        <Column header="Número" filterField="numeroTelefono" style={{ minWidth: '10rem' }} body={formatoCeldaCelular} />
        <Column header="Estado" filterField='estado' style={{ textAlign: 'center' }} body={formatoCeldaEstado} />
        <Column header="Acciones" style={{ minWidth: '12rem' }} body={formatoCeldaAcciones} />
      </DataTable>

      <Dialog visible={modalUsuario} style={{ width: '480px' }} header="Información del Usuario" modal className="p-fluid" footer={footerModalUsuario} onHide={ocultarModal}>
        {/* {usuario.image && <img src={`assets/demo/images/usuario/${usuario.image}`} alt={usuario.image} width="150" className="mt-0 mx-auto mb-5 block shadow-2" />} */}
        <div className="field">
          <label htmlFor="nombre">Nombre</label>
          <InputText id="nombre" value={usuario.nombre} onChange={(e) => onInputChange(e, 'nombre')} required autoFocus />
          {submitted && !usuario.nombre && <small className="p-invalid">Nombre es requerido.</small>}
        </div>

        <div className="field">
          <div className="formgrid grid">

            <div className="field-row col-6">
              <label htmlFor="primerApellido">Apellido Paterno</label>
              <InputText id="primerApellido" value={usuario.primerApellido} onChange={(e) => onInputChange(e, 'primerApellido')} required autoFocus className={classNames({ 'p-invalid': submitted && !usuario.primerApellido })} />
              {submitted && !usuario.primerApellido && <small className="p-invalid">Apellido Paterno es requerido.</small>}
            </div>

            <div className="field-row col-6">
              <label htmlFor="segundoApellido">Apellido Materno</label>
              <InputText id="segundoApellido" value={usuario.segundoApellido} onChange={(e) => onInputChange(e, 'segundoApellido')} className={classNames({ 'p-invalid': submitted && !usuario.segundoApellido })} />
            </div>

          </div>
        </div>

        <div className="field">
          <div className="formgrid grid">

            <div className="field-row col-6">
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
              <Calendar id="fechaNacimiento" value={new Date(usuario.fechaNacimiento)} required autoFocus onChange={(e) => onInputChange(e, 'fechaNacimiento')} showIcon /> {/*  hacer algo con la fecha */}
              {submitted && !usuario.fechaNacimiento && <small className="p-invalid">Fecha de Nacimiento es requerida.</small>}
            </div>

            <div className="field-row col-6">
              <label htmlFor="ci">Carnet de identidad</label>
              <InputText id="ci" value={usuario.ci} onChange={(e) => onInputChange(e, 'ci')} required autoFocus className={classNames({ 'p-invalid': submitted && !usuario.ci })} />
            </div>

          </div>
        </div>

        <div className="field">
          <label htmlFor="email">Correo electrónico</label>
          <InputText id="email" value={usuario.email} onChange={(e) => onInputChange(e, 'email')} required autoFocus className={classNames({ 'p-invalid': submitted && !usuario.email })} />
          {submitted && !usuario.nombre && <small className="p-invalid">Correo es requerido.</small>}
        </div>

        <div className="field">
          <label htmlFor="numeroTelefono">Número de celular</label>
          <InputText id="numeroTelefono" value={usuario.numeroTelefono} onChange={(e) => onInputChange(e, 'numeroTelefono')} required autoFocus className={classNames({ 'p-invalid': submitted && !usuario.numeroTelefono })} />
          {submitted && !usuario.numeroTelefono && <small className="p-invalid">Número de celular es requerido.</small>}
        </div>

      </Dialog>

      <Dialog visible={modalEliminarUsuario} style={{ width: '450px' }} header="Confirm" modal footer={footerModalEliminarUsuario} onHide={ocultarModalEliminarUsuario}>
        <div className="flex align-items-center justify-content-center">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          {usuario && <span>Estás seguro de que deseas eliminar al usuario <b>{usuario.nombre}</b>?</span>}
        </div>
      </Dialog>
    </div>
  );
}