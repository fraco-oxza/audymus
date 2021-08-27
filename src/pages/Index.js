import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <span>Hello</span>
      <br />
      <Link to="/app">Home</Link>
    </div>
  );
}

export default Index;
