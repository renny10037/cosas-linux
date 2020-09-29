Para hacer testing en next.js con jest de tiene que realizar lo siguiente:

instalar paquetes
     npm i -D jest jest-dom @testing-library/react @testing-library/jest-dom @testing-library/dom babel-jest
     npm install identity-obj-proxy --save-dev "sino se instala este paque ta problema con sass en el import"
     
Crear un archivo setupTests.js en la raiz del proyecto(si esta usando docker en la carpeta donde este .package.json)con el siguiente contenido:
     import "@testing-library/jest-dom/extend-expect";
     
Crear un archivo .babelrc en la raiz del proyecto(si esta usando docker en la carpeta donde este .package.json)con el siguiente contenido:
     {"presets": ["next/babel"]}
     
Crear un archivo jest.config.js en la raiz del proyecto(si esta usando docker en la carpeta donde este .package.json)con el siguiente contenido:
     module.exports = {
       testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
       setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
       transform: {
         "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
       },
       moduleNameMapper: {
         "^.+\\.(css|less|scss)$": "identity-obj-proxy" //para evitar error en la importación con sass
       }
     };

Dentro del package.json
     en el scripts insertar:
       "test": "jest --watch"

Crear un una carpeta test en la raiz del proyecto(si esta usando docker en la carpeta donde este .package.json)
dentro de esta carpeta un archivo index.test.js con el siguiente contenido:
     import React from "react";
     import { render, screen } from "@testing-library/react";
     import App from "../src/components/Navbar";  //aqui debe colocar los ratas de los componentes y/o paginas a testear

     describe("App", () => {
       it("renders without crashing", () => {
         render(<App />);
       });
     });
     
     
 Una vez finalizado colocar en la terminal npm run test: debe salir algo un poco similar

$ jest
 PASS  src/tests/index.test.js
  App
    ✓ renders without crashing (697 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.766 s
