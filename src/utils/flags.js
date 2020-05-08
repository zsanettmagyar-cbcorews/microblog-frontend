import Rox from 'rox-browser'
import store from '../store'

export const Flags = {
  sidebar: new Rox.Flag(false),
  title: new Rox.Flag(false)
};

export const configurationFetchedHandler = fetcherResults => {
  if (fetcherResults.hasChanges && fetcherResults.fetcherStatus === 'APPLIED_FROM_NETWORK') {
    window.location.reload(false)
  }
};

const options = {
  configurationFetchedHandler: configurationFetchedHandler
};

Rox.setCustomBooleanProperty('isLoggedIn', store.getters.isLoggedIn);

Rox.register('default', Flags);
Rox.setup(process.env.VUE_APP_ROLLOUT_KEY, options);
