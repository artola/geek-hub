'use strict';

//#region 1: setup TL (jest-dom)
import '@testing-library/jest-dom/jest-globals';

//#endregion

//#region 2: setup for RTU (jest)
import {jest} from '@jest/globals';

global.jest = jest;
//#endregion
