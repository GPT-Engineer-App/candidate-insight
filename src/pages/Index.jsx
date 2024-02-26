import React from "react";
import { Box, Container, Flex, Heading, Text, SimpleGrid, Image, Stack, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { FaUserAlt, FaChartBar, FaInfoCircle } from "react-icons/fa";

const CandidateCard = ({ name, party, image, infoLink }) => {
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Box p={4} display={{ md: "flex" }} bg={bg} boxShadow={"xl"} rounded={"md"} overflow={"hidden"}>
      <Box flexShrink={0}>
        <Image borderRadius="lg" width={{ md: 40 }} src={image} alt={`Picture of ${name}`} />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text fontWeight="bold" textTransform="uppercase" fontSize="sm" letterSpacing="wide" color="teal.600">
          {party}
        </Text>
        <Heading fontWeight="extrabold" textTransform="uppercase" fontSize="2xl" letterSpacing="wide">
          {name}
        </Heading>
        <Link href={infoLink} isExternal>
          <Button mt={2} leftIcon={<FaInfoCircle />}>
            More Info
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <Heading as="h1" size="xl" mb={6}>
          Candidate Tracker
        </Heading>
        <Text fontSize="lg" mb={4}>
          Empower your vote with knowledge. Understand the leaders you support.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={6}>
          <CandidateCard name="Jane Doe" party="Liberal Party" image="https://images.unsplash.com/photo-1439778615639-28529f7628bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb2xpdGljYWwlMjBjYW5kaWRhdGV8ZW58MHx8fHwxNzA4OTcyMjMwfDA&ixlib=rb-4.0.3&q=80&w=1080" infoLink="https://www.example.com/candidate/janedoe" />
          <CandidateCard name="John Smith" party="Conservative Party" image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9saXRpY2FsJTIwY2FuZGlkYXRlfGVufDB8fHx8MTcwODk3MjIzMXww&ixlib=rb-4.0.3&q=80&w=1080" infoLink="https://www.example.com/candidate/johnsmith" />
          {/* Add more CandidateCards here */}
        </SimpleGrid>
        <Stack direction={"row"} spacing={4}>
          <Button leftIcon={<FaUserAlt />} colorScheme="teal" variant="solid">
            View All Candidates
          </Button>
          <Button leftIcon={<FaChartBar />} colorScheme="teal" variant="outline">
            Election Statistics
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
