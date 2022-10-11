import React from "react";
import { Box, Badge, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
export const Page3 = () => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        boxSize="250px"
        src="https://bit.ly/2Z4KKcF"
        alt="Rear view of modern home with pool"
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" bg="aqua">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            3 beds &bull; 4 baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          Modern home in city center in the heart of historic Los Angeles
        </Box>

        <Box>
          $1,900.00
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            34 reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
