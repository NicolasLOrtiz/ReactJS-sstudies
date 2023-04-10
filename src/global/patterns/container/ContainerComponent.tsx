import React, { useEffect } from "react";
import PresentationalComponent from "./PresentationalComponent";

const ContainerComponent = () => {
  const [dogs, setDogs] = React.useState<string[]>([]);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const res = await fetch(
          "https://dog.ceo/api/breed/labrador/images/random/6"
        );
        const data = await res.json();
        setDogs(data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDogs();
  }, []);

  return <PresentationalComponent images={dogs} />;
};

export default ContainerComponent;
