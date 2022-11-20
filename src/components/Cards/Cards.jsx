import React from "react";

import {
  CardsContainer,
  Cardslist,
  CardImg,
  CardOverlay,
  CardHeader,
  CardHeaderText,
  CardIcons,
  CardDescription,
  Card,
} from "./styles";

function Cards({ title, description, img, tags }) {
  return (
    <>
      <CardsContainer>
        <Cardslist>
          <Card>
            <CardImg>
              <img src="https://i.imgur.com/oYiTqum.jpg" alt="" />
              {/* {img} */}
            </CardImg>
            <CardOverlay>
              <CardHeader>
                <CardHeaderText>
                  <h3>{title}</h3>
                  <span>{tags}</span>
                </CardHeaderText>
                <CardIcons></CardIcons>
              </CardHeader>
              <CardDescription>
                <p> {description}</p>
              </CardDescription>
            </CardOverlay>
          </Card>
        </Cardslist>
      </CardsContainer>
    </>
  );
}

export default Cards;
