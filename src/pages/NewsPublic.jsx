import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import FullScreenComponent from '../components/Home/FullScreenComponent';
import { useState } from 'react';

// Array de noticias de ejemplo
const noticias = [
  {
    id: 1,
    foto: 'https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Dentistas_deteccion_cancer-oral.jpg?alt=media&token=4ada8136-952d-42e0-a67d-005dc52fd25a',
    titulo: 'El nuevo escáner de laboratorio PS7 de Ivoclar: innovación...',
    descripcion: 'En el 29º Encuentro Anual del Sector de Tecnología Sanitaria los profesionales del sector destacan "la necesidad de adecuar la Ley de Contratos del...',
  },
  {
    id: 2,
    foto: 'https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/CEU_Posgrados_Odontologia.jpeg?alt=media&token=a6f32dbc-b7cb-405f-9722-65e71d9f9e62',
    titulo: '10 consejos para preparar y mantener la salud bucal...',
    descripcion: 'El curso se realizará los días 27 y 28 de octubre de 2023 en las modernas instalaciones de Ortoplus, ubicadas en Málaga. Este curso intensivo...',
  },
  {
    id: 3,
    foto: 'https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Ivoclar-escaner-PrograScan-PS7.png?alt=media&token=9d33ab3e-9a20-4b58-8485-c626aa188306',
    titulo: '¡Última semana para presentar tu candidatura a los Premios...',
    descripcion: 'Solo queda una semana para que finalice el plazo de envío de candidaturas a los 26 Premios Gaceta Dental. No dejes pasar esta increíble...',
  },
  
  // ... más noticias
];

const noticias2 = [
    {
      id: 1,
      foto: 'https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Dentistas_deteccion_cancer-oral.jpg?alt=media&token=4ada8136-952d-42e0-a67d-005dc52fd25a',
      titulo: 'Gestores públicos e industria, comprometidos con la tecnología sanitaria...',
      descripcion: 'En el 29º Encuentro Anual del Sector de Tecnología Sanitaria los profesionales del sector destacan "la necesidad de adecuar la Ley de Contratos del...',
    },
    {
      id: 2,
      foto: 'https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/CEU_Posgrados_Odontologia.jpeg?alt=media&token=a6f32dbc-b7cb-405f-9722-65e71d9f9e62',
      titulo: '10 consejos para preparar y mantener la salud bucal...',
      descripcion: 'Durante los períodos de vacaciones es común que se produzca un incremento de bacterias en la cavidad oral. Esta situación se debe principalmente a...',
    },
    
    // ... más noticias
  ];

const DivContainer= styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 50px;
  width: 70%;
`;

const NoticiaCard = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
`;

const Foto = styled.img`
  width: 100%;
  height: auto;
`;

const Titulo = styled.h3`
  margin-top: 10px;
`;

const Descripcion = styled.p`
  margin-top: 5px;
`;

const Paginador = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 30px;
`;

const PaginacionButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.isActive ? '#ccc' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const NewsPublic = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const noticiasPerPage = 3;
  const indexOfLastNoticia = currentPage * noticiasPerPage;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPerPage;
  const currentNoticias = noticias.slice(indexOfFirstNoticia, indexOfLastNoticia);
    return (
        <>
        <Navbar/>
        <FullScreenComponent/>
        <DivContainer>
            
            <Container>
         {noticias2.map((noticia) => (
           <NoticiaCard key={noticia.id}>
             <Foto src={noticia.foto} alt={noticia.titulo} />
             <Titulo>{noticia.titulo}</Titulo>
             <Descripcion>{noticia.descripcion}</Descripcion>
           </NoticiaCard>
         ))}
       </Container>
       <Container>
         {noticias.map((noticia) => (
           <NoticiaCard key={noticia.id}>
             <Foto src={noticia.foto} alt={noticia.titulo} />
             <Titulo>{noticia.titulo}</Titulo>
             <Descripcion>{noticia.descripcion}</Descripcion>
           </NoticiaCard>
         ))}
       </Container>
       <Container>
         {noticias.map((noticia) => (
           <NoticiaCard key={noticia.id}>
             <Foto src={noticia.foto} alt={noticia.titulo} />
             <Titulo>{noticia.titulo}</Titulo>
             <Descripcion>{noticia.descripcion}</Descripcion>
           </NoticiaCard>
         ))}
       </Container>
       </DivContainer>
       <Paginador>
        {Array.from({ length: Math.ceil(noticias.length / noticiasPerPage) }).map((_, index) => (
          <PaginacionButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </PaginacionButton>
        ))}
      </Paginador>
       <Footer/>
       
        </>
        
        
      );
};

export default NewsPublic;
