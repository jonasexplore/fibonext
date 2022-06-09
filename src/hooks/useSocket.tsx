import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";

type query = {
  [key: string]: any;
};

export function useSocket(url: string, query?: query) {
  const [socket, setSocket] =
    useState<Socket<DefaultEventsMap, DefaultEventsMap>>();

  useEffect(() => {
    const socketIo = io(url, {
      query,
    });

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;
  }, []);

  return socket as Socket<DefaultEventsMap, DefaultEventsMap>;
}
