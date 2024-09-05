import React from "react";
import { BuyMeACoffeeContainer, BuyMeACoffeeImage } from './buymeCoffee.styled';


export const BuyMeCoffee = () => {
    return (
      <BuyMeACoffeeContainer>
        <a href="https://www.buymeacoffee.com/beastaman" target="_blank" rel="noopener noreferrer">
          <BuyMeACoffeeImage src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" />
        </a>
      </BuyMeACoffeeContainer>
    );
  }

