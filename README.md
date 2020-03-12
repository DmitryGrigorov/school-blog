# ДЗ №1
### самостоятельно сделать страницу регистрации

1. Создать в `src/pages/sign-up` три файла: `index.jsx`, `actions.js`, `reducer.js`
2. Подключить `reducer.js` в стор `src/store.js`
3. Подключить компонент `src/pages/sign-up/index.jsx` через `connect()()`
4. Подключить страницу `<SignUp />` заместо странины `<SignIn />` в компоненте `<App />`
5. На странице должно быть 4 поля ввода: `login, email, firstName, password`
6. Данные введенные в поля нужно хранить в сторе.
7. Обратите внимание что `action.type` не должен совпадать с другими экшенами (иначе ваш экшен будет обрабатываться несколькими редьюсерами и как результат - менять стейт несколько раз)
