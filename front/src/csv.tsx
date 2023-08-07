import { createEffect, createSignal, on } from "solid-js";

enum SmokingHabitEnum {
  occasional,
  daily,
  never,
}

enum DiagnosisEnum {
  Normal,
  Altered,
}

enum AlcoholEnum {
  "once a week",
  "hardly ever or never",
  "several times a week",
}

enum SeasonEnum {
  spring,
  fall,
  winter,
  summer,
}

enum HighFevers {
  "more than 3 months ago",
  "less than 3 months ago",
  "no",
}

function getEnumList(enumObj: any) {
  let options = Object.keys(enumObj).map((key) => {
    if (!Number.isNaN(parseInt(key))) return;
    return {
      //@ts-ignore
      value: SeasonEnum[key],
      label: key.charAt(0).toUpperCase() + key.slice(1),
    };
  });
  options = options.filter((option) => option != undefined);
  return options;
}

interface InputsCSVInterface {
  Season: string;
  Age: number;
  "Childish diseases": boolean;
  "Accident or serious trauma": boolean;
  "Surgical intervention": boolean;
  "High fevers in the last year": string;
  "Frequency of alcohol consumption": string;
  "Smoking habit": string;
  "Number of hours spent sitting per day": number;
}

export default function CSVForm() {
  const [input, setInput] = createSignal<InputsCSVInterface>({
    Season: "Fall",
    Age: 0,
    "Childish diseases": false,
    "Accident or serious trauma": false,
    "Surgical intervention": false,
    "High fevers in the last year": "more than 3 months ago",
    "Frequency of alcohol consumption": "hardly ever or never",
    "Smoking habit": "never",
    "Number of hours spent sitting per day": 0,
  });

  const setAge = (age: number) => setInput((data) => ({ ...data, Age: age }));
  const setSeason = (season: string) =>
    setInput((data) => ({ ...data, Season: season }));
  const setChildish = (value: boolean) =>
    setInput((data) => ({ ...data, "Childish diseases": value }));
  const setAccident = (value: boolean) =>
    setInput((data) => ({ ...data, "Accident or serious trauma": value }));
  const setSurgical = (value: boolean) =>
    setInput((data) => ({ ...data, "Surgical intervention": value }));
  const setFrequency = (value: string) =>
    setInput((data) => ({
      ...data,
      "Frequency of alcohol consumption": value,
    }));

  const setAlcoholHabit = (value: string) =>
    setInput((data) => ({
      ...data,
      "Frequency of alcohol consumption": value,
    }));

  const setSmokingHabit = (value: string) =>
    setInput((data) => ({ ...data, "Smoking habit": value }));
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(input());
  };
  const setSittingHour = (value: number) =>
    setInput((data) => ({
      ...data,
      "Number of hours spent sitting per day": value,
    }));
  const setHightFever = (value: string) =>
    setInput((data) => ({
      ...data,
      "High fevers in the last year": value,
    }));

  const submit = () => {};
  return (
    <section>
      <label>
        Season:
        <select
          onInput={(e) => setSeason(e.target.value)}
          value={input().Season}
        >
          {getEnumList(SeasonEnum).map((option) => (
            <option value={option?.label}>{option?.label}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={input().Age}
          onInput={(e) => setAge(parseInt(e.currentTarget.value))}
        />
      </label>
      <br />
      <label>
        Childish diseases:
        <input
          type="checkbox"
          checked={input()["Childish diseases"]}
          onInput={(e) => setChildish(e.currentTarget.checked)}
        />
      </label>
      <br />
      <label>
        Accident or serious trauma:
        <input
          type="checkbox"
          checked={input()["Accident or serious trauma"]}
          onInput={(e) => setAccident(e.currentTarget.checked)}
        />
      </label>
      <br />
      <label>
        Surgical intervention:
        <input
          type="checkbox"
          checked={input()["Surgical intervention"]}
          onInput={(e) => setSurgical(e.currentTarget.checked)}
        />
      </label>
      <br />
      <label>
        High fevers in the last year:
        <select
          value={input()["High fevers in the last year"]}
          onInput={(e) => setHightFever(e.currentTarget.value)}
        >
          {getEnumList(HighFevers).map((option) => (
            <option value={option?.label}>{option?.label}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Frequency of alcohol consumption:
        <select
          value={input()["Frequency of alcohol consumption"]}
          onInput={(e) => setAlcoholHabit(e.currentTarget.value)}
        >
          {getEnumList(AlcoholEnum).map((option) => (
            <option value={option?.label}>{option?.label}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Smoking habit:
        <select
          value={input()["Smoking habit"]}
          onInput={(e) => setSmokingHabit(e.currentTarget.value)}
        >
          {getEnumList(SmokingHabitEnum).map((option) => (
            <option value={option?.label}>{option?.label}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Number of hours spent sitting per day:
        <input
          type="number"
          value={input()["Number of hours spent sitting per day"]}
          onInput={(e) => setSittingHour(parseInt(e.currentTarget.value))}
        />
      </label>
      <br />
      <button onClick={submit}>Envoyer</button>
    </section>
  );
}
