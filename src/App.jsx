import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button, Heading, Center } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Center
        w="100vw"
        h="100vh"
        bgGradient="linear(to-b, white, white, gray) animation"
      >
        <Heading
          as="h1"
          fontSize="4rem"
          fontFamily="helvetica"
          color="#242424"
          transition="all ease-in-out .2s"
        >
          Coming Soon
        </Heading>
      </Center>
    </>
  );
}

export default App;
