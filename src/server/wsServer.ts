import { WebSocketServer } from "ws";
import { applyWSSHandler } from "@trpc/server/adapters/ws";
import { appRouter } from "src/server/api/root";
import { createTRPCContext as createContext } from "./api/trpc";

export function startWebSocketServer() {
  const wss = new WebSocketServer({
    port: 3001,
  });

  const handler = applyWSSHandler({
    wss,
    router: appRouter,
    createContext,
    keepAlive: {
      enabled: true,
      pingMs: 30000,
      pongWaitMs: 5000,
    },
  });

  wss.on("connection", (socket) => {
    console.log(`➕➕ Connection (${wss.clients.size})`);

    socket.once("close", () => {
      console.log(`➖➖ Connection (${wss.clients.size})`);
    });
  });

  console.log("✅ WebSocket server on ws://localhost:3001");

  process.on("SIGTERM", () => {
    console.log("SIGTERM");
    handler.broadcastReconnectNotification();
    wss.close();
  });
}
