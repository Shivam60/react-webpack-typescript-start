import axios from "axios";
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
      <table>
        <tr>
          <td>Txn Date</td>
          <td>Value Date</td>
          <td>Description</td>
          <td>Ref No./Cheque No.</td>
          <td>Debit</td>
          <td>Credit</td>
          <td>Balance</td>
        </tr>
        {data?.map((obj, index) => {
          return (
            <tr>
              <td>{obj["Txn Date"]?.trim()}</td>
              <td>{obj["Value Date"]?.trim()}</td>
              <td>{obj["Description"]?.trim()}</td>
              <td>{obj["Ref No./Cheque No."]?.trim()}</td>
              <td>{obj["Debit"]?.trim()}</td>
              <td>{obj["Credit"]?.trim()}</td>
              <td>{obj["Balance"]?.trim()}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
