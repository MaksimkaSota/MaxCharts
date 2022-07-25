import { IChart } from "../IChart";

export const exampleValueFirst: IChart = {
  type: "bar",
  data: {
    labels: [
      "Китай",
      "Индия",
      "США",
      "Индонезия",
      "Пакистан",
      "Бразилия",
      "Нигерия",
      "Бангладеш",
      "Россия",
      "Мексика",
    ],
    datasets: [
      {
        label: "Численность населения в странах мира 2020",
        data: [
          1439324000, 1380004000, 331003000, 273524000, 220892000, 212559000,
          206140000, 164689000, 145934000, 128933000,
        ],
      },
    ],
  },
  imageURL: "",
};
