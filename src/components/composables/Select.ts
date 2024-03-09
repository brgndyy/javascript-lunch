import { SelectPropsType, SelectElementPropsType, OptionElementPropsType } from '../../types';

const createSelectElement = ({ id, name, className }: SelectElementPropsType) =>
  Object.assign(document.createElement('select'), {
    id,
    name,
    className,
  });

const createOptionElements = ({ select, options, defaultValue }: OptionElementPropsType) => {
  options.forEach(({ value, text }) =>
    select.add(
      Object.assign(new Option(text, value), {
        selected: value === defaultValue,
      }),
    ),
  );
};

function Select({ id, name, className, options, defaultValue }: SelectPropsType) {
  const select = createSelectElement({ id, name, className });
  createOptionElements({ select, options, defaultValue });

  return select;
}

export default Select;
