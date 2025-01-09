import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';

const Chat = props => {
  const { sx = {}, width = 20, height = 23, ...rest } = props;
  return (
    <SvgIcon
      fontSize="small"
      sx={[{ width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      viewBox="0 0 87 87"
      {...rest}
    >
      <g filter="url(#filter0_d_1_2050)">
        <circle cx="43.5" cy="43.5" fill="#CECECE" r="36" />
        <circle cx="43.5" cy="43.5" r="36" stroke="#C5C5C5" strokeWidth="1.5" />
      </g>
      <g filter="url(#filter1_d_1_2050)">
        <path
          clipRule="evenodd"
          d="M43.2188 42.5625C48.3446 42.5625 52.5 38.4071 52.5 33.2812C52.5 28.1554 48.3446 24 43.2188 24C38.0929 24 33.9375 28.1554 33.9375 33.2812C33.9375 38.4071 38.0929 42.5625 43.2188 42.5625ZM60.9375 56.3834C57.3994 61.2312 50.8044 64.5 43.2188 64.5C35.6331 64.5 29.0381 61.2312 25.5 56.3834C27.5662 49.4025 34.699 44.25 43.2188 44.25C51.7385 44.25 58.8713 49.4025 60.9375 56.3834Z"
          fill="#486082"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="79.5"
          id="filter0_d_1_2050"
          width="79.5"
          x="3.75"
          y="6.75"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.136282 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_1_2050"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_2050"
            mode="normal"
            result="shape"
          />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="42"
          id="filter1_d_1_2050"
          width="35.4375"
          x="25.5"
          y="24"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.527398 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_1_2050"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_2050"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </SvgIcon>
  );
};

Chat.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default Chat;
