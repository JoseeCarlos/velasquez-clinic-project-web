import React from "react";
import styled from "styled-components";

const ThreeSectionContainer = styled.div`
  max-width: 100%;
  margin: 10 auto;
  padding: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-right: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "#f8793c" : "#555")};
`;

const CardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const CardSpecialty = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #555;
`;

const services = [
  {
    id: 1,
    title: "Limpieza Dental",
    specialty: "Higiene Oral",
    image: "../assets/ort.jpg"
  },
  {
    id: 2,
    title: "Implantes Dentales",
    specialty: "Implantología",
    image: "../assets/implan.jpg"
  },
  {
    id: 3,
    title: "Odontopediatría",
    specialty: "Atención Dental Infantil",
    image: "../assets/pedi.jpg"
  },
  {
    id: 4,
    title: "Blanqueamiento Dental",
    specialty: "Estética Dental",
    image: "../assets/son.jpg"
  },
  {
    id: 5,
    title: "Ortodoncia",
    specialty: "Corrección de la Posición Dental",
    image: "../assets/ort.jpg"
  },
  {
    id: 6,
    title: "Endodoncia",
    specialty: "Tratamiento de Conducto",
    image: "../assets/implan.jpg"
  },
  {
    id: 7,
    title: "Prótesis Dental",
    specialty: "Reemplazo de Dientes Faltantes",
    image: "../assets/implan.jpg"
  },
  {
    id: 8,
    title: "Cirugía Oral",
    specialty: "Cirugía Maxilofacial",
    image: "../assets/implan.jpg"
  }
]


const ThreeSection = () => {
  const [selectedFilter, setSelectedFilter] = React.useState("Todos");

  const filteredServices =
    selectedFilter === "Todos"
      ? services
      : services.filter((service) => service.specialty === selectedFilter);

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <ThreeSectionContainer>
      <FilterContainer>
        <Menu>
          <MenuItem
            active={selectedFilter === "Todos"}
            onClick={() => handleFilter("Todos")}
          >
            Todos
          </MenuItem>
          <MenuItem
            active={selectedFilter === "Implantología"}
            onClick={() => handleFilter("Implantología")}
          >
            Implantología
          </MenuItem>
          <MenuItem
            active={selectedFilter === "Tratamiento de Conducto"}
            onClick={() => handleFilter("Tratamiento de Conducto")}
          >
            Tratamiento de Conducto
          </MenuItem>
          <MenuItem
            active={selectedFilter === "Estética Dental"}
            onClick={() => handleFilter("Estética Dental")}
          >
            Estética Dental
          </MenuItem>
        </Menu>
      </FilterContainer>
      <CardGroup>
        {filteredServices.map((service) => (
          <Card key={service.id}>
            <CardImage src={service.image} alt={service.title} />
            <CardTitle>{service.title}</CardTitle>
            <CardSpecialty>{service.specialty}</CardSpecialty>
          </Card>
        ))}
      </CardGroup>
    </ThreeSectionContainer>
  );
};

export default ThreeSection;
