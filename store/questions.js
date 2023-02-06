export const state = () => ({
  counter: 0,
  questions: [
    {
      text: `Что такое HTML ?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Утка',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Краб',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Гусь',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Язык гипертекстовой разметки',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Язык гипертекстовой разметки`,
      selectedAnswer: {},
      course: 1,
      module: 1
    },
    {
      text: `Что такое CSS ?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Крем',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Торт',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Пряник',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Каскадная таблица стилей',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Каскадная таблица стилей`,
      selectedAnswer: {},
      course: 1,
      module: 1
    },
    {
      text: `Что такое Python ?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Крем',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Торт',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Пряник',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Многоуровневый язык программирования',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Многоуровневый язык программирования`,
      selectedAnswer: {},
      course: 2,
      module: 2
    },
    {
      text: `Что такое База данных ?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Крем',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Торт',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Пряник',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'База данных',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `База данных`,
      selectedAnswer: {},
      course: 2,
      module: 2
    },
    {
      text: `Что такое Пк?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Персональный компьютер',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Простой компьютер',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Первый компьютер',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Переносной компьютер',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Персональный компьютер`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Наименьшее по размеру устройство`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Нетбук',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Ноутбук',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Моноблок',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Смартфон',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Смартфон`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    // 
    {
      text: `Какая часть компьютера организовывает работу устройств между собой?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Процессор',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Материнская плата',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Видеокарта',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Оперативная память',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Материнская плата`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какая часть компьютера называется «Мозгом» компьютера?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Процессор',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Оперативная память',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Видеокарта',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Материнская плата',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Процессор`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какая часть компьютера отвечает за долгосрочное хранение информации?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Процессор',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Жесткий Диск',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Материнская плата',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Оперативная память',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Жесткий Диск`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какая часть компьютера отвечает за сохранения данных здесь и сейчас`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Оперативная память',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Жесткий Диск',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Материнская плата',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Процессор',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Оперативная память`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какая часть компьютера отвечает за обработку видеоинформации?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Жесткий Диск',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Материнская плата',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Видеокарта',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Блок питания',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Видеокарта`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какая часть компьютера отвечает за снабжать компьютер электричеством.`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Материнская плата',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Жесткий диск',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Система охлаждения ',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Блок питания',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Блок питания`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое IT?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Информационые технологии',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Информативные технологии',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Инвестиционные технологии ',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Инверсивные технологии',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Информационые технологии`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое Компьютерные Технологии?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это технологии, которые отвечают за компьютер',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-обобщенное название технологий, отвечающих за хранение, передачу, обработку, защиту и воспроизведение информации с использованием компьютеров ',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это технологии, отвечающие только за хранение и передачу информации',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это технологии, отвечающие только за создвние и воспроиведение информации',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это-обобщенное название технологий, отвечающих за хранение, передачу, обработку, защиту и воспроизведение информации с использованием компьютеров `,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое игровой движок?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это-движок, в который мы играем',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это объединенный в единое целое комплекс прикладных программ',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это целая и единая информация игры',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это прикладная программа отвечащая только за движение персонажа',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это объединенный в единое целое комплекс прикладных программ`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое нейросеть?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это метод в искусственном интеллекте, который учит компьютеры обрабатывать данные',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это метод в искусственном интеллекте, который улучшает структуру сети',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это сеть, которая соединяет все компьютеры',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это структура помощи внутри сети Интернет',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это метод в искусственном интеллекте, который учит компьютеры обрабатывать данные`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое компьютерная мышь?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это новый вид животного',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-манипулятор, при помощи которого происходит трансформация движений в управляющий сигнал',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-приспособление для ввода данных в электронно-вычислительную машину и управления ею',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это- приспособление для игр',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это-манипулятор, при помощи которого происходит трансформация движений в управляющий сигнал`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое компьютерная клавиатура?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это -манипулятор, при помощи которого происходит трансформация движений в управляющий сигнал',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это- место на котором расположенны буковки',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-приспособление для ввода данных в электронно-вычислительную машину и управления ею',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-музыкальный инструмент',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это-приспособление для ввода данных в электронно-вычислительную машину и управления ею`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Для чего нужна комбинация клавиш Ctrl + Х`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Копировать текст или файл',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Отмена действия',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Вставка вырезанного или скопированного текста или файла',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Вырезать файл или текст для перемещения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Вырезать файл или текст для перемещения`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Для чего нужна комбинация клавиш Ctrl + C`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Скопировать текст или файл',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Вырезать файл или текст для перемещения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Отмена действия',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Закрыть окно',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Скопировать текст или файл`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Для чего нужна комбинация клавиш   Ctrl + V`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Закрыть окно',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Скопировать текст или файл',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Вставка вырезанного или скопированного текста или файла',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Смена языка на клавиатуре',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Вставка вырезанного или скопированного текста или файла`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Для чего нужна комбинация клавиш   Сtrl + Z`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Закрыть окно',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Отмена действия',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Скопировать текст или файл',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Сворачивание всех окон',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Отмена действия`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Для чего нужна комбинация клавиш Ctrl +Shift + N`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Создание папки',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Открывает проводник',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Блокировка компьютера',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Переключение между окнами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Создание папки`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Для чего нужна комбинация клавиш Win + E`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Открывает проводник',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Создание папки',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Переключение между окнами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Закрыть окно',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Открывает проводник`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Для чего нужна комбинация клавиш   Alt+ F4`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Закрыть окно',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Создание папки',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Переключение между окнами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Отмена действия',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Закрыть окно`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Для чего нужна комбинация клавиш Win + D`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Блокировка компьютера',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Создание папки',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Сворачивание всех окон',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Отмена действия',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Сворачивание всех окон`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Для чего нужна комбинация клавиш Win + L`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Блокировка компьютера',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Открывает проводник',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Переключение между окнами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Отмена действия',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Блокировка компьютера`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Для чего нужна комбинация клавиш Win + Пробел`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Смена языка на клавиатуре',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Закрыть окно',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Отмена действия',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Сворачивание всех окон',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Смена языка на клавиатуре`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое программа?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это- совокупность команд и данных',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это- совокупность игр и скриптов',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-только игры на компьютере',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это- все, кроме игр',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это- совокупность команд и данных`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое Программное обеспечение?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это-программа или множество программ, используемых для управления компьютером.',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-программа для удаления программ',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-программа для обеспечения охлаждения внутрь компьютера',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это- программа для создания программ',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это-программа или множество программ, используемых для управления компьютером.`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какие бывают программы?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Прокладные, кастомные',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Перекладные, системные',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Прикладные, системные',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Программные',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Прикладные, системные`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое Архиваторы?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это-корзина',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-программа, предназначенная для упаковки без потерь одного и более файлов в единый файл',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-программа для создания папок',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-программа для Microsoft Office',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это-программа, предназначенная для упаковки без потерь одного и более файлов в единый файл`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое мессенджер?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это-программа для долгосрочного обмена текстом',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-программа для мгновенного обмена текстовыми сообщениями, аудиозаписями, фотографиями и другими мультимедиа',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это программа для написания сообщений',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это программа для создания музыки',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это-программа для мгновенного обмена текстовыми сообщениями, аудиозаписями, фотографиями и другими мультимедиа`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое Операционная система?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это-система, отвечающая за систему холодильника',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-программа для создания музыки',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это- система управляющее аппаратным обеспечением, предоставляющее абстрактный программный интерфейс для взаимодействия с ним',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-система программ для создания игр',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это- система управляющее аппаратным обеспечением, предоставляющее абстрактный программный интерфейс для взаимодействия с ним`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое Драйвер?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это-программное обеспечение, с помощью которого операционная система получает доступ к аппаратному обеспечению ',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это- программное обеспечение, которое управляет пикселям.',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-программа для создания программ',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это- система управляющее аппаратным обеспечением, предоставляющее абстрактный программный интерфейс для взаимодействия с ним',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это-программное обеспечение, с помощью которого операционная система получает доступ к аппаратному обеспечению '`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Зачем нужна комбинация клавиш Win+Pause/break.`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Возможность получить информацию о компьютере и системе.',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Открытие вкладки панели поиска',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Удаление объекта без режима возможности восстановления',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Отрытие корзине',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Возможность получить информацию о компьютере и системе.`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Зачем нужна комбинация клавиш Ctrl+N`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Закрыть окно',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Создание папки',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Открывает проводник',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Открытие вкладки нового окна',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Открытие вкладки нового окна`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Зачем нужна комбинация клавиш Ctrl+E`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Открытие вкладки нового окна',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Открытие вкладки панели поиска.',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Закрыть окно',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Переключение между окнами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Открытие вкладки панели поиска.`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Зачем нужна комбинация клавиш Shift+F10`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Нажатие этого сочетания клавиш на активном файле или папке открывает режим меню',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Удаление объекта без режима возможности восстановления',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Закрыть окно',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Создание папки',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Нажатие этого сочетания клавиш на активном файле или папке открывает режим меню'`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Зачем нужна комбинация клавиш Alt+Shift+Tab`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Удаление объекта без режима возможности восстановления',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Переход между режимами окон',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Переход между окнами в том порядке, в котором они были запущены.',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Нажатие этого сочетания клавиш на активном файле или папке открывает режим меню',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Переход между режимами окон`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Зачем нужна комбинация клавиш Shift+Delete`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Удаление объекта без режима возможности восстановления',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Просто удаление',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Закрытие окна',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Переход между режимами окон',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Удаление объекта без режима возможности восстановления`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое Браузер?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это-Прикладное программное обеспечение для просмотра страниц, содержания веб-документов, компьютерных файлов и их каталогов',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-программа для мгновенного обмена текстовыми сообщениями, аудиозаписями, фотографиями и другими мультимедиа',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это- система управляющее аппаратным обеспечением, предоставляющее абстрактный программный интерфейс для взаимодействия с ним',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-система программ для создания игр',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это-Прикладное программное обеспечение для просмотра страниц, содержания веб-документов, компьютерных файлов и их каталогов`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое Файл?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это-именованная область данных на носителе информации, используемая как базовый объект взаимодействия с данными в операционных системах',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-Прикладное программное обеспечение для просмотра страниц, содержания веб-документов, компьютерных файлов и их каталогов',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это- система управляющее аппаратным обеспечением, предоставляющее абстрактный программный интерфейс для взаимодействия с ним',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-программа для мгновенного обмена текстовыми сообщениями, аудиозаписями, фотографиями и другими мультимедиа',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это-именованная область данных на носителе информации, используемая как базовый объект взаимодействия с данными в операционных системах`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Что такое расширение имя файла?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это-именованная область данных на носителе информации, используемая как базовый объект взаимодействия с данными в операционных системах',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-последовательность символов, добавляемых к имени файла и предназначенных для идентификации типа (формата) файла',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-Прикладное программное обеспечение для просмотра страниц, содержания веб-документов, компьютерных файлов и их каталогов',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это-система программ для создания игр',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это-последовательность символов, добавляемых к имени файла и предназначенных для идентификации типа (формата) файла`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какова функция «Сумм» на MS Excel`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Это математическая функция MS Excel, позволяющая складывать отдельные значения.',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Рассчитать среднее арифметическое ячеек с числами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для определения максимального значения ',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: ' Для определения минимального значения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Это математическая функция MS Excel, позволяющая складывать отдельные значения.`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какова функция «Срзнач» на MS Excel`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Для определения максимального значения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для определения минимального значения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это математическая функция MS Excel, позволяющая складывать отдельные значения.',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Рассчитать среднее арифметическое ячеек с числами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Рассчитать среднее арифметическое ячеек с числами`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какова функция «Счет» на MS Excel?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Для определения количества числовых ячеек в диапазоне массовых чисел',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для определения минимального значения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это математическая функция MS Excel, позволяющая складывать отдельные значения.',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Рассчитать среднее арифметическое ячеек с числами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Для определения количества числовых ячеек в диапазоне массовых чисел'`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какова функция «Мин» на MS Excel?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Для определения количества числовых ячеек в диапазоне массовых чисел',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Рассчитать среднее арифметическое ячеек с числами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это математическая функция MS Excel, позволяющая складывать отдельные значения.',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для определения минимального значения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Для определения минимального значения`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какова функция «Макс» на MS Excel?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Для определения количества числовых ячеек в диапазоне массовых чисел',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Рассчитать среднее арифметическое ячеек с числами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для определения максимального значения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это математическая функция MS Excel, позволяющая складывать отдельные значения.',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Для определения максимального значения`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какова функция «ПИ» на MS Excel?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Для вставки числа ПИ на страницу',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для определения максимального значения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Рассчитать среднее арифметическое ячеек с числами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Это математическая функция MS Excel, позволяющая складывать отдельные значения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Для вставки числа ПИ на страницу`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какова функция «Если» на MS Excel?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Для проверки, выполняется ли заданные, условия в выбранном диапазоне таблицы',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для вставки числа ПИ на страницу',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Рассчитать среднее арифметическое ячеек с числами',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для определения максимального значения',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Для проверки, выполняется ли заданные, условия в выбранном диапазоне таблицы`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какова функция «Сумм Если» на MS Excel?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Для того чтобы просуммировать диапазон со значением, соответствующие указанному критерию',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для вычисление среднего арифметического по заданному диапазону и критерию',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для подсчета количества ячеек в указанном диапазоне, которые соответствуют определённому условию ',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для проверки, выполняется ли заданные, условия в выбранном диапазоне таблицы',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Для того чтобы просуммировать диапазон со значением, соответствующие указанному критерию`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какова функция «Срзнач Если» на MS Excel?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Для подсчета количества ячеек в указанном диапазоне, которые соответствуют определённому условию',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для проверки, выполняется ли заданные, условия в выбранном диапазоне таблицы',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для того чтобы просуммировать диапазон со значением, соответствующие указанному критерию',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для вычисление среднего арифметического по заданному диапазону и критерию',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Для вычисление среднего арифметического по заданному диапазону и критерию`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
    {
      text: `Какова функция «Счёт Если» на MS Excel?`,
      id: Math.random().toString().substr(2, 10),
      answers: [
        {
          text: 'Для проверки, выполняется ли заданные, условия в выбранном диапазоне таблицы',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для подсчета количества ячеек в указанном диапазоне, которые соответствуют определённому условию',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для того чтобы просуммировать диапазон со значением, соответствующие указанному критерию',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
        {
          text: 'Для вычисление среднего арифметического по заданному диапазону и критерию',
          selected: false,
          id: Math.random().toString().substr(2, 10),
        },
      ],
      correctAnswer: `Для подсчета количества ячеек в указанном диапазоне, которые соответствуют определённому условию`,
      selectedAnswer: {},
      course: 3,
      module: 1
    },
  ],
})

export const mutations = {
  toggle(state, [question, answer]) {
    question.selectedAnswer = answer
    for (let item of question.answers) {
      item.selected = false
      if (question.selectedAnswer == answer) {
        answer.selected = true
      }
    }
  },
  nextQuestion(state) {
    return state.counter++
  },
  previousQuestion(state) {
    return state.counter--
  },
  checkAnswers(state) {
    let correctAnswersCounter = 0
    for (let item of state.questions) {
      if (item.selectedAnswer.text == item.correctAnswer) {
        correctAnswersCounter++
        localStorage.setItem('correctAnswers', correctAnswersCounter);
      } else {
        localStorage.setItem('correctAnswers', correctAnswersCounter);
      }
    }
  },
  selectAnswer(state, [id,index]) {
    for(let item of state.questions) {
      if (id == item.id) {
        return state.counter = index - 1
      }
    }
  }
}