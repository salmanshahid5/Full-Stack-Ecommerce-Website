import React from 'react';
import styled from 'styled-components';
import { Badge } from '@mui/material';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-right:10px
  }
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Logo = styled.h1`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: space-around;
    width: 100%;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SALMAN.</Logo>
        </Center>
        <Right>
        <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem>REGISTER</MenuItem></Link>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem>SIGN IN</MenuItem></Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined style={{ color: 'black' }} />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
