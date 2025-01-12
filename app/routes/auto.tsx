import AutoPage from "~/components/AutoPage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "This is Auto Router App" },
    { name: "description", content: "Welcome to auto page" },
  ];
}

export default function Auto() {
  return <AutoPage />;
}
