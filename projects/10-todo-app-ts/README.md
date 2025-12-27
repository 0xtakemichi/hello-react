## Crear un TodoMVC con TypeScript

- [x] Inicializar proyecto con Vite
- [x] Añadir linter para TypeScript + React
- [x] Añadir estilos del TodoMVC
- [x] Listar todos los TODOs
- [x] Poder borrar un TODO
- [x] Marcar TODO como completado
- [x] Añadir forma de filtrar TODOs (Footer)
- [x] Mostrar número de TODOs pendientes (Footer)
- [x] Añadir forma de borrar todos los TODOs completados
- [x] Crear Header con input (Header)
- [x] Crear un TODO (Header)
- [ ] Poder editar el texto de un TODO (Doble click)
- [ ] Añadir animaciones con AutoAnimate
- [ ] Pasar a Reducer
- [ ] Sincronizar con el backend

## Inicializar proyecto

`$ npm create vite@latest`
TypeScript + SWC

## Añadir linter para TypeScript + React

```
$ npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JSON
```

## Añadir estilos del TodoMVC

```sh
npm install todomvc-app-css
```

En el main.tsx:

```tsx
import "todomvc-app-css/index.css";
```

```css
html {
  filter: invert(1);
}
```
