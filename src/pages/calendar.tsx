import { CurrenctyTable } from "@/components/data-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const filterCheckBoxes = ["Faible", "Moyen", "Fort", "Ferie"];
const daysOfTheWeek = [
  {
    day: "Lundi",
    value: 24,
    month: "Fevrier",
  },
  {
    day: "Mardi",
    value: 25,
    month: "Fevrier",
  },
  {
    day: "Mercredi",
    value: 26,
    month: "Fevrier",
  },
  {
    day: "Jeudi",
    value: 27,
    month: "Fevrier",
  },
];
const Calendar = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Impact</h1>
      {/* checkboxes + select dropdown */}
      <div className="flex justify-between items-center">
        {/* checkboxes */}
        <div className="flex gap-x-8">
          {filterCheckBoxes.map((filter) => (
            <div key={filter} className="flex items-center space-x-2">
              <Checkbox id={filter} />
              <label
                htmlFor="terms"
                className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {filter}
              </label>
            </div>
          ))}
        </div>
        {/* select dropdown */}
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Utc+1">Utc+1</SelectItem>
              <SelectItem value="Utc+2">Utc+2</SelectItem>
              <SelectItem value="Utc+3">Utc+3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* days of the week */}
      <div className="grid grid-cols-4 w-full">
        {daysOfTheWeek.map((day) => (
          <div
            key={day.day}
            className="flex border-2 py-8 hover:cursor-pointer hover:border-t-4 hover:border-t-blue-700 bg-gray-800 border-gray-300 text-4xl text-white flex-col justify-center items-center gap-y-3"
          >
            <p>{day.day}</p>
            <p>{day.value}</p>
            <p>{day.month}</p>
          </div>
        ))}
      </div>
      {/* data table */}
      <div>
        <CurrenctyTable />
      </div>
    </div>
  );
};

export default Calendar;
