// buymeCoffee.styled.js
import styled from 'styled-components';

export const BuyMeACoffeeContainer = styled.div`
  position: fixed;
  bottom: 20px; /* Adjust as needed */
  right: 20px;  /* Adjust as needed */
  z-index: 1000; /* Ensure it's on top of other elements */
`;

export const BuyMeACoffeeImage = styled.img`
  height: 41px;
  width: 174px;
  box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5);
  -webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5);
`;
