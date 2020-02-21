function registerServiceworker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('Service worker registered. Scope: ', registration.scope);
      }, (error) => {
        console.log('Service worker failed, error: ', error);
      });
    });
  }
}

export default registerServiceworker;
