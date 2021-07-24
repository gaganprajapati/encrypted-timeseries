import { io } from "socket.io-client";

let socket = io("http://localhost:3000");
socket.on("connect", () => {
  console.log("You are connected to ", socket.id);
});