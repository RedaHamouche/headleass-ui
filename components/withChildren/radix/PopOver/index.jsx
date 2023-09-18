'use client';
import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import './styles.scss';

const PopoverRadix = ({label, children}) => (
  <Popover.Root forceMount>
    <Popover.Trigger className="PopoverTrigger">{label}</Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
            {children}
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverRadix;