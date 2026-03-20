import { useState } from "react";
import Landing from "./Landing";
import ResumeApp from "./ResumeApp";

export default function App() {
  const [page, setPage] = useState("landing");
  return page === "landing"
    ? <Landing onStart={() => setPage("app")} />
    : <ResumeApp onBack={() => setPage("landing")} />;
}
