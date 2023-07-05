import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledApp } from "styled";

function App() {
  return (
    <StyledApp>
      <ToastContainer position="top-right" />
    </StyledApp>
  );
}

export default App;
