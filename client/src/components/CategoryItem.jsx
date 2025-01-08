import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 50vh; /* Adjust height for smaller screens */
  }

  @media (max-width: 480px) {
    height: 40vh; /* Further adjust height for very small screens */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;

  ${Container}:hover & {
    opacity: 0.7;
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
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Container}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust text size for smaller screens */
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px; /* Adjust font size */
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Further reduce font size */
  }
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

  @media (max-width: 768px) {
    padding: 8px 16px; /* Adjust button size */
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px; /* Further adjust button size */
    font-size: 12px;
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
