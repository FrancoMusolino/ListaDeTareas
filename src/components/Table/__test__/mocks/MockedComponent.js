import {
  DateContextProvider,
  TareasContextProvider,
  FormContextProvider,
} from "../../../../context";

export const MockedTableComponent = ({ children }) => {
  return (
    <DateContextProvider>
      <TareasContextProvider>
        <FormContextProvider>{children}</FormContextProvider>
      </TareasContextProvider>
    </DateContextProvider>
  );
};
