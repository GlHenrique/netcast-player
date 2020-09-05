import React from 'react';
import { SvgXml } from 'react-native-svg';

interface Props {
  width?: number | string;
  height?: number | string;
}

const xml = `
<svg width="372" height="372" viewBox="0 0 372 372" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M4 135.528C4 128.984 9.22544 123.679 15.6713 123.679H356.329C362.775 123.679 368 128.984 368 135.528V352.151C368 358.695 362.775 364 356.329 364H15.6713C9.22544 364 4 358.695 4 352.151V135.528Z" fill="#B9703B"/>
</g>
<g filter="url(#filter1_d)">
<path d="M9.09599 140.886C9.09599 134.644 14.1644 129.584 20.4165 129.584H350.834C357.086 129.584 362.154 134.644 362.154 140.886V347.495C362.154 353.737 357.086 358.797 350.834 358.797H20.4165C14.1644 358.797 9.09599 353.737 9.09599 347.495V140.886Z" fill="#173355"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M102.258 7.54401L186.522 125.668L185.489 127.627L101.225 9.50268L102.258 7.54401Z" fill="#BBBBBB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M270.583 11.1013L186.318 129.223L185.285 127.264L269.55 9.14262L270.583 11.1013Z" fill="#BBBBBB"/>
<ellipse cx="101.747" cy="5.55443" rx="5.47094" ry="5.55443" fill="#C4C4C4"/>
<ellipse cx="270.982" cy="5.55443" rx="5.47095" ry="5.55443" fill="#C4C4C4"/>
<path d="M147.398 193.16C146.664 192.427 146.078 191.913 145.638 191.62C145.198 191.327 144.684 191.18 144.098 191.18C143.511 191.18 142.924 191.4 142.338 191.84C141.751 192.28 141.458 192.94 141.458 193.82V310.2H143.658V194.26C143.658 194.113 143.658 193.967 143.658 193.82C143.804 193.673 143.951 193.6 144.098 193.6C144.244 193.6 144.391 193.673 144.538 193.82C144.831 193.967 145.051 194.113 145.198 194.26L228.358 287.54V310.2H230.558V191.4H228.358V284.24L147.398 193.16ZM159.278 330H126.278C123.491 330 121.438 329.413 120.118 328.24C118.944 326.92 118.358 324.867 118.358 322.08V179.52C118.358 176.733 118.944 174.753 120.118 173.58C121.438 172.26 123.491 171.6 126.278 171.6H149.158C151.944 171.6 154.291 172.04 156.198 172.92C158.251 173.8 160.231 175.34 162.138 177.54L204.818 226.38V179.52C204.818 176.733 205.404 174.753 206.578 173.58C207.898 172.26 209.951 171.6 212.738 171.6H245.738C248.524 171.6 250.504 172.26 251.678 173.58C252.998 174.753 253.658 176.733 253.658 179.52V322.08C253.658 324.867 252.998 326.92 251.678 328.24C250.504 329.413 248.524 330 245.738 330H212.738C209.951 330 207.898 329.413 206.578 328.24C205.404 326.92 204.818 324.867 204.818 322.08V295.02L167.198 249.48V322.08C167.198 324.867 166.538 326.92 165.218 328.24C164.044 329.413 162.064 330 159.278 330Z" fill="#FF932F"/>
<defs>
<filter id="filter0_d" x="0" y="123.679" width="372" height="248.321" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="5.09599" y="129.584" width="361.058" height="237.213" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
`;

const Logo: React.FC<Props> = ({ width, height }) => (
  <SvgXml xml={xml} width={width || '100%'} height={height || '100%'} />
);

export default Logo;
