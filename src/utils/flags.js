import Rox from 'rox-browser'

export const Flags = {
  sidebar: new Rox.Flag(false),
  flagEnabled: new Rox.Flag(false)
};
/*Can comment out for Lab 1
export const configurationFetchedHandler = fetcherResults => {
  if (fetcherResults.hasChanges && fetcherResults.fetcherStatus === 'APPLIED_FROM_NETWORK') {
    window.location.reload(false)
  }
};
*/
const options = {
  /*configurationFetchedHandler: configurationFetchedHandler*/
};

Rox.register('default', Flags);
Rox.setup(process.env.VUE_APP_ROLLOUT_KEY, options);
