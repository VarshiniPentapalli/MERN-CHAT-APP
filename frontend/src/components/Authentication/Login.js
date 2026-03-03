// import React, { useState } from "react";
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   VStack,
//   useToast,
// } from "@chakra-ui/react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import { ChatState } from "../../Context/ChatProvider";

// const Login = () => {
//   const [show, setShow] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const history = useHistory();
//   const toast = useToast();

//   // CONTEXT
//   const chat = ChatState();
//   const setUser = chat?.setUser;

//   const handleClick = () => setShow(!show);

//   const submitHandler = async () => {
//     if (!email || !password) {
//       toast({
//         title: "Please fill all the fields",
//         status: "warning",
//         duration: 3000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }

//     try {
//       setLoading(true);

//       const { data } = await axios.post(
//         "http://localhost:5000/api/user/login",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       localStorage.setItem("userInfo", JSON.stringify(data));
//       setUser(data); 

//       toast({
//         title: "Login Successful",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//         position: "bottom",
//       });

//       history.push("/chats");
//     } catch (error) {
//       toast({
//         title: "Login failed",
//         description:
//           error.response?.data?.message || "Something went wrong",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//         position: "bottom",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <VStack spacing="10px">
//       <FormControl isRequired>
//         <FormLabel>Email</FormLabel>
//         <Input value={email} onChange={(e) => setEmail(e.target.value)} />
//       </FormControl>

//       <FormControl isRequired>
//         <FormLabel>Password</FormLabel>
//         <InputGroup>
//           <Input
//             type={show ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//             <Button size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>

//       <Button
//         colorScheme="blue"
//         width="100%"
//         isLoading={loading}
//         onClick={submitHandler}
//       >
//         Login
//       </Button>
//     </VStack>
//   );
// };

// export default Login;


import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ChatState } from "../../Context/ChatProvider";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const toast = useToast();
  const { setUser } = ChatState();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      setLoading(true);

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      setUser(data);

      toast({
        title: "Login Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });

      history.push("/chats");   // ✅ v5 correct
    } catch (error) {
      toast({
        title: "Login failed",
        description:
          error.response?.data?.message || "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <VStack spacing="10px">
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        isLoading={loading}
        onClick={submitHandler}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;