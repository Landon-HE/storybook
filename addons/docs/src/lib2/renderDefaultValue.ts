import { ReactNode } from 'react';
import { isNil } from 'lodash';
import { createPropText } from './createComponents';

const BLACKLIST = ['null', 'undefined'];

interface DefaultValue {
  value: string;
}

// interface PropType {
//   name: string;
// }

// interface ValueDef {
//   caption: string;
//   value: string;
// }

function isBlacklisted(value: string) {
  return BLACKLIST.some(x => x === value);
}

export function renderDefaultValue(defaultValue: DefaultValue): ReactNode {
  if (!isNil(defaultValue)) {
    const { value } = defaultValue;

    if (!isBlacklisted(value)) {
      return createPropText(value.toString());
    }
  }

  return createPropText();
}
