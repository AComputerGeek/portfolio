import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import '../index.css';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack className="card">
      <Image borderRadius= "10px" src={imageSrc}></Image>
      <VStack padding="20px" alignItems="left">
        <Heading fontSize="1.3rem" margin="0px">{title}</Heading>
        <Text className="description">{description}</Text>
        <a href="#">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
      </VStack>
    </VStack>
  );
};

export default Card;
