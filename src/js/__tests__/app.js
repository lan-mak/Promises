import GameSavingLoader from '../GameSavingLoader';

test('Проверка класса и наличия метода ', () => {
  expect(GameSavingLoader).toBeDefined();
  expect(GameSavingLoader.load).toBeDefined();
});

test('Проверка что создается объект', async () => {
  const testData = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };

  const obj = await GameSavingLoader.load();
  expect(obj).toEqual(testData);
});
