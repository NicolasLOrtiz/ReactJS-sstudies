import React, { useCallback } from "react";
import { useListUsers } from "../../state/hooks";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const users = useListUsers();
  const navigate = useNavigate();
  const buttonDisabled = users.length < 3;

  const handleSort = useCallback(() => {
    navigate("/sorteio");
  }, [navigate]);

  return (
    <footer role={`contentinfo`}>
      <button disabled={buttonDisabled} onClick={handleSort}>
        Sortear cliente
      </button>
    </footer>
  );
};

export default Footer;
