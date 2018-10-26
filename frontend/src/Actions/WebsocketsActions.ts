const socketClusterClient = require('socketcluster-client');
const socket = socketClusterClient.create({
  port: 3001,
});

socket.on('connect', () => {
  console.log('Web sockets connected');
});

import { Store } from 'redux';
import { BenefitsActionTypes, WebsocketsEvents } from '../Types';

const receive = (store: Store) => {
  socket.on(WebsocketsEvents.RECEIVED.YEARLY_SAVINGS,
            (payload: WebsocketsEvents.RECEIVED.YEARLY_SAVINGS_PAYLOAD) => {

              localStorage.setItem(
                `${payload.gross_salary};${payload.monthly_spending}`,
                (~~payload.yearly_savings).toString(),
              );

              return store.dispatch(
                {
                  type: BenefitsActionTypes.SET_YEARLY_BENEFIT,
                  payload: ~~payload.yearly_savings,
                },
              );
            });
};

export const emit = (type: WebsocketsEvents.EMITTED.ALL, payload: any) => {
  return socket.emit(type, payload);
};

export const initWebsocketActions = (store: Store) => {
  receive(store);
};
