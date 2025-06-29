// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from "./components/Button";
import "./main.css";
import appleIcon from "./assets/apple.svg";
import googleIcon from "./assets/google.svg";

const arr: string[] = ["felipe", "takemi", "plague"];
const myVariable: boolean = false;


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>Hello World</h1>

    <Button onClick={() => console.log("Apple")} icon={appleIcon}>
      Apple
    </Button>

    <Button onClick={() => console.log("Google")} icon={googleIcon}>
      Google
    </Button>

    {myVariable && <p className="text-red-500">myVariable is true</p>}
    {!myVariable && <p className="text-green-500">myVariable is false</p>}

    {arr.map(item => <p key={item}>{item}</p>)}
  </StrictMode>
);
