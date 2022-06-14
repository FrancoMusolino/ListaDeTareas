import { DateProvider } from "../../../../context/Date";
import { TareasReducerProvider } from "../../../../context/TareasReducer";

export const MockedFormComponent = ({ children }) => {
  return (
    <DateProvider>
      <TareasReducerProvider>{children}</TareasReducerProvider>
    </DateProvider>
  );
};
