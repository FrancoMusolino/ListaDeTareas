import {
  DateContextProvider,
  TareasContextProvider,
  FormContextProvider,
} from "../../../../context";

export const MockedFormComponent = ({ children }) => {
  return (
    <DateContextProvider>
      <TareasContextProvider>
        <FormContextProvider>{children}</FormContextProvider>
      </TareasContextProvider>
    </DateContextProvider>
  );
};
