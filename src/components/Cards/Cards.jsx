import React from "react";
import { FaLink } from "react-icons/fa";

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
  ExternalLink,
  GitLink,
} from "./styles";

function Cards({ title, description, img, tags, link }) {
  return (
    <>
      <CardsContainer>
        <Cardslist>
          <Card>
            <CardImg>
              <img src={img} alt={title} />
            </CardImg>
            <CardOverlay>
              <CardHeader>
                <CardHeaderText>
                  <h3>{title}</h3>
                  <span>{tags}</span>
                  <CardIcons>
                    <ExternalLink>
                      <a href={link} target="_blank" rel="noreferrer">
                        <FaLink />
                      </a>
                    </ExternalLink>
                    {/* <GitLink>
                      <ExternalLink>
                        <a href={link} target="_blank" rel="noreferrer">
                          <FaLink />
                        </a>
                      </ExternalLink>
                    </GitLink> */}
                  </CardIcons>
                </CardHeaderText>
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
