import { BrowserRouter, Routes, Route } from "react-router-dom"

/* IMPORTACIONES DE LAS PÁGINAS */
import { Analitica } from '../pages/Analitica'
import { ListaUsuarios } from '../pages/ListaUsuarios'
import { ListaEmprendimientos } from '../pages/assignments'
import { Reportes } from '../pages/Reportes'
import { Mensajes } from '../pages/Mensajes'
import { Configuraciones } from '../pages/settings'
import { ListDoctor } from "../pages/Doctor"
import { Quotes } from "../pages/Quotes"
import CalendarScreen from "../pages/pendingAppointments"
import UserProfileEdit from "../pages/UserProfileEdit"
import Assignment from "../pages/Assignment"
import News from "../pages/News"
/* --- FIN DE LAS IMPORTACIONES DE LAS PÁGINAS --- */

export function Rutas() {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/" element={<Analitica />} />
      <Route path="/reportes" element={<Analitica />} />
      <Route path="/listaUsuarios" element={<ListaUsuarios />} />
      <Route path="/listaEmprendimientos" element={<ListaEmprendimientos />} />
      <Route path="/reporte" element={<Reportes />} />
      <Route path="/mensajes" element={<Mensajes />} />
      <Route path="/configuraciones" element={<Configuraciones />} />
      <Route path="/doctor" element={<ListDoctor />} />
      <Route path="/Citas" element={<Quotes />} />
      <Route path="/asignaciones" element={<Assignment />} />
      <Route path="/citas_pendientes" element={<CalendarScreen />} />
      <Route path="/editar_perfil" element={<UserProfileEdit />} />
      <Route path="/noticias" element={<News />} />



    </Routes>
  )
}