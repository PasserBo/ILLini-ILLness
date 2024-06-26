import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import {IconMoonFilled, IconSunFilled} from "@tabler/icons-react";

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(IconMoonFilled, IconSunFilled);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
