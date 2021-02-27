Nota primero tienen que hacer esta intalación de jest: https://github.com/rennypetit/cosas-linux/blob/master/test%20with%20jest%20into%20Next.js
Documentación de enzyme: https://enzymejs.github.io/enzyme/   
nota: si enzyme esta en la version 16 y ustedes usan react 17 usar esto: https://github.com/wojtekmaj/enzyme-adapter-react-17

instalar: npm install --save-dev @wojtekmaj/enzyme-adapter-react-17  (en tal caso que tengan las 17 y enzyme la 16) esto es para que te permita usar react 17
instalar enzyme: npm i --save-dev enzyme enzyme-adapter-react-16             documentación:  https://enzymejs.github.io/enzyme/
instalar para el __snapshots__: npm install --save-dev enzyme-to-json  documentación:https://www.npmjs.com/package/enzyme-to-json

archivos:

Insertar dentro de setupTests.js
  import '@testing-library/jest-dom';
  import Enzyme from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';
  import {createSerializer} from 'enzyme-to-json';
  Enzyme.configure({ adapter: new Adapter() });
  expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

ejemplo de un archivo .test para validar un componente

import React from 'react';
import { shallow } from 'enzyme'
import PrimeraApp from '../base/PrimeraApp'; //componente


describe('Pruebas en <PrimeraApp />', () => {
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const wrapper = shallow(<PrimeraApp name="Renny" />);
        expect(wrapper).toMatchSnapshot();
    });
})
