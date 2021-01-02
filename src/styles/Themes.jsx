/* eslint-disable */
import { light, dark } from './Colors';
import { primaryFont } from './typography';

export const lightTheme = { 
    backgroundColor: light[100],
    textColor: dark[100],
    primaryFont,
}

export const darkTheme = { 
    backgroundColor: dark[100],
    textColor: light[100],
    primaryFont,
}