/**
 * https://swr.vercel.app/docs/api#options
 *
 * revalidateOnFocus = true: automatically revalidate when window gets focused
 * revalidateOnMount: enable or disable automatic revalidation when component is mounted
 * revalidateOnReconnect = true: automatically revalidate when the browser regains a network connection (via navigator.onLine)
 * refreshWhenOffline = false: polling when the browser is offline (determined  by navigator.onLine)
 * refreshWhenHidden = false: polling when the window is invisible (if refreshInterval is enabled)
 * refreshInterval (details):
 *      Disabled by default: refreshInterval = 0
 *      If set to a number, polling interval in milliseconds
 *      If set to a function, the function will receive the latest data and should return the interval in milliseconds
 */
export const cacheOnly = {
  revalidateOnFocus: false,
  revalidateOnMount: false,
  revalidateOnReconnect: false,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0,
};
