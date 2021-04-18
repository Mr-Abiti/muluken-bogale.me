import ReactGA from 'react-ga';

const trackingId = process.env.NEXT_PUBLIC_TRACKING_ID;
export const initGA = () => {
  console.log(`GA init`);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ReactGA.initialize(trackingId);
};
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logEvent = (category = ``, action = ``) => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = ``, fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};