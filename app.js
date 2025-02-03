const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) =>
          console.log(
            "Service Worker registered successfully with scope:",
            registration.scope
          )
        )
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    } catch (error) {
      console.error(
        "Unexpected error during Service Worker registration:",
        error
      );
    }
  } else {
    console.log("Service Worker not supported in this browser.");
  }
};

registerServiceWorker();
