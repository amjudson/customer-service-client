// noinspection JSUnusedGlobalSymbols

import {Theme, StylesConfig} from 'react-select'
import {ColorOption, FlavourOption, SelectOption} from '@/data'
import chroma from 'chroma-js'

export const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
})

export const colorStylesConfig: StylesConfig<ColorOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    borderRadius: '30px',
  }),
  option: (styles, {data, isDisabled, isFocused, isSelected}) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    }
  },
  input: (styles) => ({...styles, ...dot()}),
  placeholder: (styles) => ({...styles, ...dot('#ccc')}),
  singleValue: (styles, {data}) => ({...styles, ...dot(data.color)}),
}

export const baseStylesConfig: StylesConfig<SelectOption> = {
  control: (styles) => ({
    ...styles,
    borderRadius: '7px',
    background: '#D5E7F2',
    marginBottom: '10px',
  }),
  option: (styles, {isDisabled}) => {
    return {
      ...styles,
      label: 'base style',
      cursor: isDisabled ? 'not-allowed' : 'default',
      color: 'black',
      fontWeight: 'bold',
    }
  },
  input: (styles) => ({
    ...styles,
    color: 'black',
    minHeight: '22px',
    height: '22px',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: 'blue',
  }),
  singleValue: (styles) => ({
    ...styles,
    color: 'black',
    fontWeight: 'bold',
  }),
  multiValue: (styles ) => ({
    ...styles,
    backgroundColor: 'lightcyan',
    color: 'black',
  }),
  clearIndicator: (styles ) => ({
    ...styles,
    color: 'red',
  }),
  dropdownIndicator: (styles ) => ({
    ...styles,
    color: 'green',
  }),
  menuList: (styles) => ({
    ...styles,
  }),
  menu:(styles) => ({
    ...styles,
  }),
  valueContainer: (styles) => ({
    ...styles,
  }),
}

export const menuStyles: StylesConfig<SelectOption | ColorOption> = {
  control: (styles) => ({
    ...styles,
    borderRadius: '30px',
  }),
  menuList: styles => ({
    ...styles,
    background: 'white',
    color: 'black',
    fontWeight: 'bold',
  }),
}

export const groupMenuStyles: StylesConfig<ColorOption | FlavourOption> = {
  control: (styles) => ({
    ...styles,
    borderRadius: '30px',
  }),
  group: styles => ({
    ...styles,
    background: 'white',
    color: 'black',
    fontWeight: 'bold',
  }),
}

export const selectTheme = (theme: Theme) => ({
  ...theme,
  borderRadius: 10,
  colors: {
    ...theme.colors,
    text: 'black',
    primary: 'blue', // selected item in list
    // primary75: 'red',
    // primary50: 'red',
    primary25: 'lightgreen', // hover over in list
    neutral0: 'lightgray', // background
    // neutral5: 'red',
    neutral10: 'lightblue', // background for multi select item
    neutral20: 'green', // border and clear and dropdown arrow
    neutral30: 'green', // hover border
    // neutral40: 'red',
    // neutral50: 'red',
    // neutral60: 'red',
    // neutral70: 'red',
    neutral80: 'black', // color in selection box
    // neutral90: 'red',
  },
})

export const colourStyles: StylesConfig<ColorOption | FlavourOption> = {
  menuList: styles  => ({
    ...styles,
    background: 'white',
    color: 'black',
  }),
  option: (styles, {isFocused, isSelected}) => ({
    ...styles,
    background: isFocused
      ? 'lightblue'
      : isSelected
        ? 'blue'
        : undefined,
    zIndex: 1,
  }),
  menu: base => ({
    ...base,
    zIndex: 100,
  }),
}
