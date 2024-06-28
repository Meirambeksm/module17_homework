export function tempConverter(number) {
  let tempFahrenheit = (number * 9) / 5 + 32;

  return `${number} градусов по Цельсию равны ${tempFahrenheit} градусам по Фаренгейту`;
}

console.log(tempConverter(10));
