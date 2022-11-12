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

function Cards({img, title, text}) {
  return (
    <>
      <CardsContainer>
        <Cardslist>
          <Card>
            <CardImg>
              <img src="https://i.imgur.com/oYiTqum.jpg" alt="" />
            </CardImg>
            <CardOverlay>
              <CardHeader>
                <CardHeaderText>
                  <h3>Todolist</h3>
                  <span>HTML | CSS | Javascript</span>
                </CardHeaderText>
                <CardIcons></CardIcons>
              </CardHeader>
              <CardDescription>
                <p> Simples Todolist para praticar HTML, CSS e Javascript.</p>
              </CardDescription>
            </CardOverlay>
          </Card>
        </Cardslist>
      </CardsContainer>
    </>
  );
}

export default Cards;
