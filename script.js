const employers = ['АртеМ', 'максим', 'Владимир',
  'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];

employers.forEach(item => {
  if (item.trim() !== '') {
    item = item.toLowerCase().trim();
    item = item[0].toUpperCase() + item.slice(1);
    command.push(item);
  }
});

const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase']
};

const { cash, react, add } = data;

const calcCash = (own) => {
  const reducer = own.reduce((previousValue, currentValue) => previousValue + currentValue);
  return reducer;
}

const lesson = calcCash(cash);
console.log('asd');

const makeBusiness = ([director, teacher, allModule, gang, course]) => {
  teacher = teacher || 'Максим';
  const sumTech = react.concat(add, 'и другие');

  console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель:
${teacher}. Всего уроков: ${allModule}.
Команда Академии:
${gang}`);
  console.log('Первое что изучим будет ' + react[0] + ". Он очень похож на HTML!");
  console.log('Технологии которые мы изучим: ');
  console.log(...sumTech);

}

makeBusiness(['Артем', null, lesson, command, nameCourse]);