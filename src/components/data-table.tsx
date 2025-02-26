import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    Description: "CPI y/y",
    Instrument: "AUD",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "2.5%",
    Actual: "2.6%",
  },
  {
    Description: "Construction Work Done q/q",
    Instrument: "AUD",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "1.6%",
    Actual: "1.0%",
  },
  {
    Description: "BOJ Core CPI y/y",
    Instrument: "JPY",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "1.9%",
    Actual: "2.0%",
  },
  {
    Description: "German GfK Consumer Climate",
    Instrument: "EUR",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "-22.4",
    Actual: "-21.6",
  },
  {
    Description: "UBS Economic Expectations",
    Instrument: "CHF",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "17.7",
    Actual: "Pas de prévision",
  },
  {
    Description: "FOMC Member Barkin Speaks",
    Instrument: "USD",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "Pas de valeur précédente",
    Actual: "Pas de prévision",
  },
  {
    Description: "CB Leading Index m/m",
    Instrument: "CNY",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "-0.1%",
    Actual: "Pas de prévision",
  },
  {
    Description: "New Home Sales",
    Instrument: "USD",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "698K",
    Actual: "677K",
  },
  {
    Description: "Crude Oil Inventories",
    Instrument: "OIL",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "4.6M",
    Actual: "Pas de prévision",
  },
  {
    Description: "MPC Member Dhingra Speaks",
    Instrument: "GBP",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "Pas de valeur précédente",
    Actual: "Pas de prévision",
  },
  {
    Description: "FOMC Member Bostic Speaks",
    Instrument: "USD",
    Date: "26 févr. 2025",
    Prévision: "Réalisée",
    Précédent: "Pas de valeur précédente",
    Actual: "Pas de prévision",
  },
];

export function CurrenctyTable() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Description</TableHead>
          <TableHead>Instrument</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Prévision</TableHead>
          <TableHead className="text-right">Précédent</TableHead>
          <TableHead className="text-right">Actual</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <TableRow key={data.Description}>
            <TableCell className="font-medium">{data.Description}</TableCell>
            <TableCell>{data.Instrument}</TableCell>
            <TableCell>{data.Date}</TableCell>
            <TableCell className="text-right">{data.Prévision}</TableCell>
            <TableCell className="text-right">{data.Précédent}</TableCell>
            <TableCell className="text-right">{data.Actual}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
