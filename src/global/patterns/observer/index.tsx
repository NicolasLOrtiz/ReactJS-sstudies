/*
import { toast, ToastContainer } from "react-toastify";
import observable from "./observable";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

const ObserverPattern = () => {
  function handleClick() {
    observable.notify("User clicked button!");
  }

  function handleToggle() {
    observable.notify("User toggled switch!");
  }

  return (
    <div>
      <button onClick={handleClick}>Event 1</button>
      <button onChange={handleToggle}>Event 2</button>
      <ToastContainer />
    </div>
  );
};
*/
const ObserverPattern = () => {};
export default ObserverPattern;
