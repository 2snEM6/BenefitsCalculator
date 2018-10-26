import { calculateYearlyBenefits, initBenefitsActions } from './BenefitsActions';
import { initWebsocketActions, emit } from './WebsocketsActions';
import { Store } from 'redux';

function initActions(store: Store) {
  initWebsocketActions(store);
  initBenefitsActions(store);
}

export { calculateYearlyBenefits, emit, initActions };
