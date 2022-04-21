import expresss from 'express';
import {Application} from "express/ts4.0";
import {createServer} from 'http';
import {WebSocketServer} from "ws";
import socket from "./socket";

const app: Application = expresss();

const PORT: number = 8000 || parseInt(process.env.PORT as string, 10);
const httpServer = createServer(app);

const wss = new WebSocketServer ( {port:4000})

httpServer.listen((PORT), () => {
    console.log(`listening on Port: ${PORT}`);
    socket({wss});
});