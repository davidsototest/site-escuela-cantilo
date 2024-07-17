// src/components/WhatsAppButton.tsx

import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SxProps, Theme } from '@mui/material/styles';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const buttonStyle: SxProps<Theme> = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || '')}`;

  return (
    <Fab
      color="primary"
      aria-label="whatsapp"
      sx={buttonStyle}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppButton;
