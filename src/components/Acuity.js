import React, { useEffect } from "react";

const Acuity = () => {
  useEffect(() => {
    const st = document.createElement("script");
    st.src = "https://embed.acuityscheduling.com/js/embed.js";
    st.async = true;

    document.body.appendChild(st);
  }, []);
  return (
    <iframe
      id="scheduler"
      title="Acuity Scheduling"
      src="https://app.acuityscheduling.com/schedule.php?owner=18908206"
      width="100%"
      height="800"
      frameBorder="0"
    ></iframe>
  );
};

export default Acuity;
