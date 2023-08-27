import { createContext } from "react";
import { useIndividual } from "@hooks/useIndividual";

export const IndividualContext = createContext<
  ReturnType<typeof useIndividual>
>({} as ReturnType<typeof useIndividual>);
