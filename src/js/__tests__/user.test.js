import showSpecialAttack from '../user';

test('Вщзвращаем массив объектов с четырьмя полями', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  const received = showSpecialAttack(character);

  const expected = [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
    },
  ];

  expect(received).toEqual(expected);
});