import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Fragment, useEffect, useState } from 'react';

const ComboboxComp = (props) => {
  const [selected, setSelected] = useState(
    props.defaultValue ?? { id: null, name: null }
  );
  const [query, setQuery] = useState('');
  const filteredItem =
    query === ''
      ? props.items
      : props.items.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  useEffect(() => {
    const e = {
      target: {
        value: selected.id,
        name: props.name,
      },
    };
    if (
      selected.id != null &&
      (!props.defaultValue || selected.id != props.defaultValue.id)
    ) {
      props.handleChange(e);
    }
  }, [selected]);

  return (
    <Combobox value={props.defaultValue ?? selected} onChange={setSelected}>
      <div className='relative mt-1'>
        <div className='relative w-full cursor-default overflow-hidden rounded-lg bg-teal-200 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
          <Combobox.Input
            autoComplete='off'
            placeholder='Select one'
            required
            name={props.name}
            id={props.name}
            className='w-full border-none bg-gray-200 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0'
            displayValue={(item) => item.name}
            // name={(item) => item.id}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
            <SelectorIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {filteredItem.length === 0 && query !== '' ? (
              <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                Nothing found.
              </div>
            ) : (
              filteredItem.map((item) => (
                <Combobox.Option
                  key={item.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-main-orange text-gray-900' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-main-orange'
                          }`}
                        >
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default ComboboxComp;
