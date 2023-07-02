import { useState } from "react";

const useShowModeComponent = () => {
  const [showMode, setShowMode] = useState(false);

  const handleShowModeComponent = () => {
    setShowMode((prev) => !prev);
  };

  return { showMode, handleShowModeComponent };
};

export default useShowModeComponent;
