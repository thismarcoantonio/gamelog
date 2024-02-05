import { useContext } from "react";
import { DataContext } from "../components/DataProvider";

export function useData() {
  return useContext(DataContext);
}
