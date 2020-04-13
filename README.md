# ДЗ №1
### самостоятельно сделать страницу регистрации

1. Создать в `src/pages/sign-up` три файла: `index.jsx`, `actions.js`, `reducer.js`
2. Подключить `reducer.js` в стор `src/store.js`
3. Подключить компонент `src/pages/sign-up/index.jsx` через `connect()()`
4. Подключить страницу `<SignUp />` заместо странины `<SignIn />` в компоненте `<App />`
5. На странице должно быть 4 поля ввода: `login, email, firstName, password`
6. Данные введенные в поля нужно хранить в сторе.
7. Обратите внимание что `action.type` не должен совпадать с другими экшенами (иначе ваш экшен будет обрабатываться несколькими редьюсерами и как результат - менять стейт несколько раз)


# ДЗ №2: React Router v5

### самостоятельно сделать страницу about
1. Cоздать в `src/pages/` папку `about`;
2. В папке `about` добавить файл `index.tsx`;
3. Вывести на странице текст `about this page`;
4. Подключить страницу `about` в `app/index.js` с помощью компонента `Route`.

### самостоятельно сделать страницу "создать пост"

1. Cоздать в `src/pages/` папку `new-post`;
2. В папке `new-post` три файла: `index.jsx`, `actions.js`, `reducer.js`;
3. Подключить `reducer.js` в стор `src/store.js`
4. На странице создать форму с двумя полями: **Title** и **Body**;
5. Подключить компонент `src/pages/new-post/index.jsx` через `connect()()`;
6. Данные введенные в поля нужно хранить в сторе подбно тому, как мы это делаем для компонентов **SignIn** и **SignUp**';
7. Подключить страницу `new-post` в `app/index.js` с помощью компонента `Route`. 

# ДЗ №3
### 1) Сделать все то, что мы делали на занятии
### 2) Доделать регистрацию (добавить запрос на сервер)

1. Написать запрос на сервер для регистрации пользователя в файле `src/api/user.js`
2. Написать асинхронный экшен для отправки данных на сервер в файле `src/pages/sign-up/actions.js`
3. Добавить `case` в файле `src/app/reducer.js` который будет обрабатывать успешное прохождение регистрации
4. Добавить кнопку "Отправить" на форму регистрации
5. Вызвать асинхронный экшен по клику на кнопке "Отправить" на форме регистрации

В результате у вас должен быть реализован следующий функционал: вход, выход, аутентификация и регистрация.
