import {
  DateContextProvider,
  TareasContext,
  FormContextProvider,
} from "../../../../context";

import Table from "../../Table";
import Form from "../../../Form/Form";

export const MockedTableComponent = ({ data }) => {
  return (
    <DateContextProvider>
      <FormContextProvider>
        <TareasContext.Provider value={data}>
          <Table />
          <Form />
        </TareasContext.Provider>
      </FormContextProvider>
    </DateContextProvider>
  );
};
