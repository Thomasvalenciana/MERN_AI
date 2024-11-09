import { Box, Avatar, Typography, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";
type ChatMessage = {
  content: string;
  role: "user" | "assistant";
};

const chatMessages : ChatMessage[] = [
  {"role": "user", "content": "Hello, can you tell me the weather forecast?"},
  {"role": "assistant", "content": "Sure! I can help with that. Please provide your location."},
  {"role": "user", "content": "I'm in New York City."},
  {"role": "assistant", "content": "Great! Give me a moment to fetch the weather forecast."},
  {"role": "assistant", "content": "The weather forecast for New York City is sunny with a high of 75°F."},
  {"role": "user", "content": "That sounds perfect! Thanks for the information."},
  {"role": "assistant", "content": "You're welcome! If you have any more questions, feel free to ask!"}
];

const Chat = () => {
  const auth = useAuth();

  return (
    <Box 
      sx={{
        display: "flex", 
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none" }, flex: 0.2, flexDirection: "column" }}>
        <Box 
          sx={{
            display: "flex", 
            width: "100%", 
            height: "60vh", 
            bgcolor: "rgb(17,29,39)", 
            borderRadius: 5, 
            flexDirection: "column", 
            mx: 3,
          }}
        >
          <Avatar 
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white", 
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]}{auth?.user?.name.split(" ")[1][0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to Unicom the chatBot
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You can ask questions related to knowledge, Business, Advice, etc.
          </Typography>
          <Button sx={{
            width: "200px",
            my: 'auto',
            color: 'white',
            fontWeight: "700",
            borderRadius: 3,
            mx: "auto",
            bgcolor: red[300],
            ":hover": {
              bgcolor: red.A400,
            },
          }}>
            Clear Conversation
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flex: { md: 0.8, xs: 1, sm: 1 }, flexDirection: 'column', px: 3 }}>
        <Typography sx={{
          textAlign: "center",
          fontSize: "40px",
          color: "white",
          mb: 2,
          mx: "auto",
          fontWeight: "600",
        }}>
          Unicom GPT 3.5 Turbo
        </Typography>
        <Box sx={{
          width: "100%",
          height: "60vh",
          borderRadius: 3,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
          overflowX: "hidden",
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}>
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content}  role={chat.role} key={index}/>
            
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
