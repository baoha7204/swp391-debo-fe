import { PropsWithChildren, createContext, useRef, useState } from "react";
import { WEB_SOCKET_STATE } from "@/constant/core";
import { API_URL } from "@/config";

export type WebSocketContextType = {
  connectWs: () => void;
  closeWs: () => void;
  wsState: number;
  paymentStatus: string | null;
};

const WebSocketContext = createContext<WebSocketContextType>({
  connectWs: () => {},
  closeWs: () => {},
  wsState: WEB_SOCKET_STATE.NOTCONNECTED,
  paymentStatus: null,
});

function WebSocketProvider({ children }: PropsWithChildren) {
  const [wsState, setWsState] = useState(WEB_SOCKET_STATE.NOTCONNECTED);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const wsRef = useRef(new WebSocket(API_URL));

  // start web socket connection in this function
  const connectWs = () => {
    setWsState(WEB_SOCKET_STATE.CONNECTING);

    wsRef.current.onopen = () => {
      console.log("socket open");
      setWsState(WEB_SOCKET_STATE.OPEN);
    };

    wsRef.current.onmessage = (e) => {
      console.log("message");
      console.log(e.data);
      setPaymentStatus(JSON.parse(e.data));
    };

    wsRef.current.onclose = () => {
      console.log("socket closed by server");
      setWsState(WEB_SOCKET_STATE.CLOSED);
    };
  };

  const closeWs = () => {
    wsRef.current.close();
    console.log("socket closed by client");
    setWsState(WEB_SOCKET_STATE.CLOSED);
  };

  return (
    <WebSocketContext.Provider
      value={{ connectWs, closeWs, wsState, paymentStatus }}
    >
      {children}
    </WebSocketContext.Provider>
  );
}

export { WebSocketContext, WebSocketProvider };
