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
  border-radius: 10px;
  padding: 20px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
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
    title: "Servicio 1",
    specialty: "Especialidad 1",
    image: "../assets/ort.jpg",
  },
  {
    id: 2,
    title: "Servicio 2",
    specialty: "Especialidad 2",
    image: "../assets/implan.jpg",
  },
  {
    id: 3,
    title: "Servicio 3",
    specialty: "Especialidad 3",
    image: "../assets/pedi.jpg",
  },
  {
    id: 4,
    title: "Servicio 4",
    specialty: "Especialidad 4",
    image: "../assets/son.jpg",
  },
  {
    id: 5,
    title: "Servicio 5",
    specialty: "Especialidad 5",
    image: "../assets/peri.jpg",
  },{
    id: 3,
    title: "Servicio 3",
    specialty: "Especialidad 3",
    image: "../assets/pedi.jpg",
  },
  {
    id: 4,
    title: "Servicio 4",
    specialty: "Especialidad 4",
    image: "../assets/son.jpg",
  },
  {
    id: 6,
    title: "Servicio 5",
    specialty: "Especialidad 5",
    image: "../assets/peri.jpg",
  },
];

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
            active={selectedFilter === "Especialidad 1"}
            onClick={() => handleFilter("Especialidad 1")}
          >
            Especialidad 1
          </MenuItem>
          <MenuItem
            active={selectedFilter === "Especialidad 2"}
            onClick={() => handleFilter("Especialidad 2")}
          >
            Especialidad 2
          </MenuItem>
          <MenuItem
            active={selectedFilter === "Especialidad 3"}
            onClick={() => handleFilter("Especialidad 3")}
          >
            Especialidad 3
          </MenuItem>
          {/* Agrega más opciones de filtro aquí */}
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
