import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }, []);

  const showNotification = () => {
    var options = {
      body: "Stand Up",
      // icon: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      dir: "ltr",
    };
    let notification = new Notification("Stand Up", options);
  };

  const startNotifications = () => {
    new Notification("started!");
    setInterval(() => {
      showNotification();
    }, 60 * 60 * 1000);
  };

  return (
    <div>
      <button onClick={() => startNotifications()}>Start Notifications</button>
    </div>
  );
};

export default App;
