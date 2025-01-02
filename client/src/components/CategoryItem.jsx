import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
  overflow: hidden;
  border-radius: 10px; /* Rounded corners for a smooth look */
  transition: transform 0.3s ease-in-out; /* Adds smooth hover transition */
  
  &:hover {
    transform: scale(1.05); /* Scales up the category on hover */
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease; /* Adds fade effect */
  
  ${Container}:hover & {
    opacity: 0.7; /* Image fades on hover */
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5); /* Darkens the background */
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Container}:hover & {
    opacity: 1; /* Shows the info on hover */
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
