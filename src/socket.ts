import {WebSocketServer, WebSocket} from "ws";

export enum SocketType {
    CONNECTION ='connection',
    MESSAGE = 'message'
}
export interface ChatData {
    username: string;
    message: string;
    date: string;
}

export  default function ({wss}: {wss:WebSocketServer}){
     console.log('Socket')
    wss.on(SocketType.CONNECTION, ( ws: WebSocket)=>{
        console.log('its nice');
        ws.on(SocketType.MESSAGE, (message: string) =>{
            const data = JSON.parse(message) as ChatData;
            data.date = new Date().toISOString();
            ws.send(JSON.stringify(data));
        });
    });
}