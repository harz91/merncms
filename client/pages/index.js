import ToggleTheme from "../components/ToggleTheme";
import { Button } from "antd";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button type="primary">Click Me</Button>
      <br />
      <ToggleTheme />
    </div>
  );
}

export default Home;
