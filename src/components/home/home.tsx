import axios from "axios";
import MaterialTable from "material-table";
import * as React from "react";
import { useHistory } from "react-router-dom";
import Papa = require("papaparse");

export default function Home(): React.ReactElement {
  const [data, setData] = React.useState<any[]>(null);
  const history = useHistory();
  React.useEffect(() => {
    axios.get("../../../july-2020.csv").then((result) => {
      const resultCSV = Papa.parse(result.data, {
        header: true,
        skipEmptyLines: true,
      });
      setData(resultCSV.data);
    });
  }, []);
  if (!data) {
    return null;
  }

  return (
    <div>
      <MaterialTable
        options={{
          pageSize: 10,
        }}
        columns={[
          { field: "Txn Date" },
          { field: "Value Date" },
          { field: "Description", type: "numeric" },
          { field: "Ref No./Cheque No.", type: "numeric" },
          { field: "Debit", type: "numeric" },
          { field: "Credit", type: "numeric" },
          { field: "Balance", type: "numeric" },
        ]}
        data={data}
        title="Transaction View SBI"
      />
    </div>
  );
}
