import GameSavingLoader from '../GameSavingLoader';

test('Проверка загрузки из файла сохранения', async () => {
  const data = await GameSavingLoader.load();

  const testData = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };

  expect(data).toEqual(testData);
});
