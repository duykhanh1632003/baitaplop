import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-ui/core";
import Bai1 from "./Bai1";
import { useState } from "react";
import User from "./User";

const App = () => {
  const [data, setData] = useState([
    {
      firstName: "Khanh",
      lastName: "Nguyen",
      select: { value: "apple", label: "apple" },
    },
  ]);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      select: {},
    },
  });
  const onSubmit = (data) => {
    setData((prev) => [...prev, data]);
  };

  console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <p>firstName</p>
        <Controller
          name="firstName"
          control={control}
          placeHolder="firstName"
          render={({ field }) => <Input {...field} />}
        />
        <p>lastName</p>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        <Controller
          name="select"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          )}
        />
        <input type="submit" />
      </form>
      <User data={data} />
      <Bai1 />
    </div>
  );
};
export default App;
