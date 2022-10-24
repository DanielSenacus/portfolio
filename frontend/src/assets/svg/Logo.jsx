import React from "react";

const Logo = ({ color }) => {
  const [fillColor, setFillColor] = React.useState(color);
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      version='1.1'
      viewBox='0 0 317 187'
      xmlSpace='preserve'
      width='100%'
      fill={fillColor}
    >
      <path
        fill={fillColor}
        d='M169.3 23.8c3.8 0 7.7.1 11.5.1 15.3.1 30.5.2 45.8.2 10.4.1 20.8.1 31.2.2h1.3c-.6 1-1.1 1.9-1.6 2.7-.3.5-.9.4-1.4.5-5.9.2-11.8.5-17.7.7-11.6.5-23.2.9-34.7 1.4-12.7.5-25.3 1-38 1.5-.8 0-1.6.1-2.4.4h7c11.3 0 22.6-.3 34 .1 16.5.5 32.9.1 49.4.2 1.1 0 .9.3.6 1-.7 1.6-1.8 2.2-3.6 2.3-14.8.5-29.6 1.1-44.3 1.7-14.8.6-29.5 1.2-44.3 1.8-.7 0-1.3.1-2 .3 30 .2 60.1.3 90.2.5-.6 2.4-1.4 3.1-3.6 3.2-10.3.4-20.6.9-30.9 1.3-13.9.6-27.7 1.1-41.6 1.7l-14.4.6c-.2.2-.4.2-.7.2-.7 0-1.5.1-2.2 0 .9.2 2-.1 3 .1h19c.4 0 .9-.1 1.3.1 3.6 0 7.3.1 10.9.1 6.4 0 12.7 0 19.1.1 10.6.1 21.3.1 31.9.2h4.1c-.8 1.3-1.4 2.4-2.1 3.5-.2.4-.7.4-1.1.5-.4.1-.9 0-1.3 0H127.2c-1.9 0-3-.6-3.9-2.3-5.6-10.4-11.3-20.7-16.9-31-.1-.2-.2-.3-.3-.5.1-.1-.1-.3.1-.2h157.4c-.8 2.4-2.5 3.1-5 3.2-11.7.3-23.4.9-35.1 1.4-16.8.7-33.7 1.4-50.5 2-1.2 0-2.3.1-3.5.2-.6.2-1.2 0-1.7.1.2-.1.9-.3 1.5-.1zM295 41.2c-.3.6-.7 1.1-1 1.7-.9.2-1.4.7-1 1.7-.3.7-.7 1.4-1.2 2-.2 0-.5-.3-.5-.1 0 .6-.6 1.1-.5 1.8-.4.9-.9 1.8-1.5 2.6-.1-.1-.2-.1-.3-.2.1.1.2.1.3.2-.3.7-.7 1.3-1.1 1.9-.3.2-.6.5-.6.9 0 .2-.1.3-.3.5-.3 0-.4-.3-.6-.4-.1.4.1.7.3 1-.1.4-.4.8-.7 1.2-.5.2-.7-.2-1-.4-.4-.1-.8-.2-1.2-.2h-19.3c-.3 0-.6 0-1 .1.2.2.5.1.8.1 6.3 0 12.7.1 19-.1.4 0 .8-.1 1 .4 0 .4-.3.6-.5.9-.4.4-1 .4-1.5.4h-18.5c-1.5 0-1.6-.1-2.1-1.6-.1-.5-.3-.9-.9-.4-1.9.2-3.9 0-5.8.1-.8.1-.8-.5-.9-1 0-.4-.3-.7-.5-1-.1-.3 0-.5.2-.8.6 0 .1-.6.4-.8.1-.2.3-.5.5-.6 0-.1.5 0 .2-.3-.1-.1-.1-.3 0-.4 0-.1.2-.1 0-.2-.1 0 .1 0 0 .1-.2.4-.4.8-.6 1.1-.2.3-.4.7-.6 1-3.6 6.4-7.3 12.6-11 18.9-4.9 8.4-9.8 16.9-14.8 25.3-.2.3-.3.7-.8.9-2.5 4.3-5.1 8.6-7.6 12.9-2.6 4.4-5.2 8.9-7.9 13.6-.7-1.3-1.4-2.5-2-3.7-.3-.5.1-.9.4-1.3 5.7-9.9 11.4-19.7 17.1-29.5 1.5-2.6 3.1-5.2 4.6-7.9.4-.1.3-.5.4-.7 2-3.5 4-7 6-10.6.9-1.7 1.9-3.3 2.8-5 .6-1.2 1.5-2.3 2.3-3.5.4-.6.7-1.3 1.1-2l4.2-7.5c.1-.7.4-1.3 1-1.7.1-.6.5-1 .9-1.5 1.5-2.6 3-5.2 4.6-7.8.8-1.3 1.6-2.7 2.4-4 .6-.1 1-.3 1-1.1.1-.8.8-1.4.9-2.2.1-.4.3-.7.5-.9.5-.2.5-.8.7-1.2.7-1.4 1.5-2.8 2.4-4.1.6.2.3-.2.2-.4.1-.5.4-.9.7-1.2.3 0 .2-.3.2-.4.4-.9.8-1.7 1.4-2.5.5-.3.7-.8.8-1.4.2-.5.5-1 .8-1.5.3-.2.7-.6.7.2 0 .4-.3.7.1 1.3.1-1 .1-1.7-.2-2.5.3-.8.7-1.6 1.4-2.2.3-.2.6-.1.9-.1.4.2-.2.5.1.8 1.2-1.7 1.9.5 2.9.4-1-.4-1.2-.6-.7-1.2 1.7.1 3.4-.1 5.2.1.6.2 1.2.3 1.8 0 .2 0 .5 0 .7.1.1.4 0 1 .7 1.1.6.1.9-.1 1.1-.6.1-.4.5-.5.9-.5.6 0 1.1-.1 1.7-.2 1.1.1 2.2-.2 3.3.2.1.1.1.2.2.3 0 .1 0 .1-.1.2-.2.2-.4 0-.5 0 .2.1.3.2.5.3.3.4.8.2 1 .2-.2 0-.7.2-1-.3 0-.1 0-.2.2-.3.6-.3 1.3-.1 1.9-.4 1.1-.1 2.2-.1 3.3 0 .5.2 1 .2 1.5 0 1.2-.1 2.4-.2 3.5.1.1.1.2.1.3.2.1.2.2.4.5.4-.1-.1-.3-.3-.1-.5.7-.5 1.4-.1 2.1.1.7.7 1.5.7 2.4.5 1.1-.2 2 0 2.7.9.3-.7-1.3-.6-.5-1.5.8-.2 1.6-.3 2.4.2v.5c-.7.5-.8 1.4-1.4 2-.3.1-.5.3-.3.6-.9 1.5-1.7 2.9-2.6 4.4-.2.2-.8.1-.4.7-.7 1.1-1.3 2.3-2 3.4-.3 0-.4.1-.2.4-.1.5-.4.9-.7 1.3-.4.1-.4.4-.3.6-1.1 1.9-2.2 3.7-3.3 5.6-.3.1-1.1-.5-.7.5.1.3-.1.5-.1.8 0 .1-.1.1-.2.1-.3.2-.6 0-1 .1-.8.1-.7.8-.8 1.3.1.1-.4.3 0 .4.6.3.8.5.8.8zM275.1 75.7c-2.2 3.9-4.4 7.8-6.6 11.6-7.6 13.3-15.3 26.5-23 39.8-3.3 5.7-6.7 11.5-10 17.2-.1.2-.2.5-.3.8-.1.8-.5 1.4-1.1 1.9-1.4 2.3-2.7 4.6-4.1 7h-.2c-1.8-2.1-1.2-4.1 0-6.3 2.5-4.3 4.7-8.9 7-13.3 1.3-3.2 2.9-6.2 4.7-9.1.5-.8.7-1.8 1.1-2.6 2.8-5.4 5.7-10.8 8.5-16.2 4.5-8.6 9-17.3 13.6-25.9.9-1.7 1.7-3.4 2.7-5 .4-.5.4-1.4 1.1-1.7.2.1.4.2.6.4 1.2 1 2.7.8 3.9.5 1.3-.5 1.6.2 2.1.9z'
      ></path>
      <path
        fill={fillColor}
        d='M284.9 56c0-.3-.1-.5-.4-.4-5.9.5-11.7.1-17.6.2h-3.7c.1-.7.5-1 1.2-1h21c.5 0 .9.1.8.7.1.5 0 1-.4 1.3-.3.3-.4.6-.4 1.1-.5.9-1 1.9-1.6 2.7-.2-.1-.3-.2-.4-.4-.1-.2-.3-.2-.4 0-.2.2-.1.3.2.4.4.1.2.4.3.7-.5.9-.9 1.8-1.6 2.7-.4.2-.7-.1-1-.1.4.2.5.6.5 1-.4.6-.6 1.4-1.1 1.9-.2.2-.4.4-.4.7-.3.7-.6 1.3-1.1 1.9-.2-.1-.2-.2-.4-.3-.3-.1-.5.1-.5.4.1-.2.2-.5.6-.3.3.4-.2.7-.1 1-.1.4-.3.7-.5.9-.4.2-.9.3-1.4.3-1.2.1-2.5 0-3.7 0-.6 0-1.1 0-1.5-.5-.5-.5.2-.9.1-1.5-.5.2-.5.6-.7.9-.1.2-.2.4-.4.5-.3.2-.5.5-.6.8-.1.1-.1.3-.2.4-.2.4-.5.6-.7 1-.1.2-.2.4-.5.4s-.6-.7-.9 0c-1.5-.3-2.9-.2-4.4-.2-.5 0-1.1.1-1.2-.5-.2-.6-.2-1.2.4-1.6.4.5.9.6 1.7.5.9-.2 1.9 0 2.8-.1-1-.4-1.9-.2-2.9-.1-.5.1-.9.1-1.4-.2-.4-.3-.1-.7-.2-1.1 0-.4.1-.8.6-.9.3 0 .4.1.6.3 0-.4-.5-.4-.6-.7 0-.5.3-.8.7-1.1.7-.3 1.2-.7 1-1.6v-.3c.1-.2.2-.5.3-.7.2-.3.3-.5.5-.8.1-.1.2-.1.3-.2.3-.2.8-.3.6-.8-.4 0-.4.3-.6.5-.1.2-.3.4-.4.6-.2.2-.3.5-.5.7-.1.2-.2.4-.3.5-.1.2-.1.4-.3.6-4.6 7.9-9.2 15.7-13.8 23.6-4.7 8.1-9.5 16.1-14.2 24.2-.2.4-.4.8-.9 1-3.5 5.9-6.9 11.8-10.4 17.7-1.1 2-2.3 3.9-3.5 6-.5-.8-.9-1.5-1.3-2.1-.4-.7-.4-1.3 0-2 4.1-7.8 8.2-15.5 12.2-23.3 1-1.9 2-3.8 2.9-5.7-.1-.4.1-.7.3-1 3-5.9 6.1-11.8 9.2-17.6 4.3-8.1 8.4-16.1 12.7-24.2.7-1 1.1-2.2 1.8-3.3.1-.1.2-.1.3-.2.5-.1.7-.4.5-.9 0-.4.3-.8.4-1.2.1-.3.3-.5.6-.6 1.2-.1 1.2-.2.8-1.6v-.2c0-.3-.3-.6-.2-1 .8.4 1.4.9 1.4 1.9 0 .5.3.8.9.8h20.1c.2 0 .3-.1.5-.2.3.1.5 0 .5-.3z'
      ></path>
      <path
        fill={fillColor}
        d='M255.2 53.9c.3.3.2.7.2 1 2.1 0 4.2-.3 6.3.2.1.6-.1 1-.8.9-.2 0-.3 0-.2.2 0 .1.1.1.1.2 0 .4-.3.7-.5 1-.1.1-.2.1-.3.1-.6-.1-.6.3-.7.7-.2.3-.2.9-.8.9-.2-.3 0-.6-.2-.9.1.3.1.6.2.9.1.1.3.2.4.3-.2 1.3-1 2.1-1.6 3.2-4 7-8.2 14-12.3 21-4.1 7-8.2 13.9-12.2 20.9-.2.4-.6.8-.9 1.1l-9 15.3c-2 3.4-4 6.9-6.1 10.4-.7-.8-1.1-1.6-1.5-2.5-.3-.6 0-1.2.3-1.8 4.8-9.1 9.5-18.1 14.3-27.2.1-.2.2-.5.3-.8.4-1.8 1.5-3.3 2.3-4.8 1.4-2.6 2.7-5.2 4-7.7 4.5-8.7 9.1-17.3 13.6-26 .8-1.5 1.5-2.9 2.3-4.3.3-.5.5-1.1 1-1.5.3-.2.5-.6.8-.8.4-.4.7-.5 1 0zM262.1 71.4c-.6.3-.4 1-.3 1.4.1.4.7.2 1 .2 1.2.1 2.4 0 3.5.1.4 0 .7.3 1 .4.3-.1.4.1.6.3.1.5-.2.9-.4 1.3-.9 1.6-1.8 3.3-2.8 4.9-4.9 8.4-9.8 16.8-14.7 25.1l-14.4 24.6c-.3.4-.5.9-1 1.2-2.3 3.8-4.5 7.7-6.8 11.5-.8 1.3-1.6 2.7-2.4 4-.3-.3-.5-.6-.7-.9-.4-.4-.9-.8-.9-1.5-.4-.6-.5-1.2.2-1.6 4.2-8.1 8.5-16.1 12.7-24.2.1-.2.2-.5.3-.8-.1-.3.1-.6.2-.9 3.1-6.1 6.3-12.1 9.5-18.2 4.7-9.1 9.5-18.1 14.3-27.2.2-.4.3-.9.9-.9.7.5.2.9.2 1.2z'
      ></path>
      <path d='M259.9 33.9c.8.5-.2.8-.2 1.2 0 .7-.6 1.1-.5 1.9.1.6-.7.4-1.2.3.6-1.2 1.2-2.3 1.9-3.4zM268.4 19.3c.3 0 .6.3.6.5-.3.8.1 1.3.4 2-1.4.1-1.4.1-1.1-1.2.2-.6-.2-.3-.4-.3 0-.4.2-.7.5-1zM267 21.7c.2.1.4.2.8.3-.6.2-1.2.4-.9 1.2.1.2.1.5-.2.6-.4 0-.3-.4-.4-.6 0-.6.3-1.1.7-1.5zM263.8 27.2c.5 0 .7.6.5.8-.3.3-.6-.1-.8-.4.1-.1.1-.3.3-.4zM261.2 31.8c0 .5.2 1.2-.7 1.2.1-.5.4-.9.7-1.2z'></path>
      <path
        fill={fillColor}
        d='M169.3 23.8c-.6.1-1.2.1-1.8-.1.6-.2 1.2-.1 1.8-.1v.2z'
      ></path>
      <path
        fill={fillColor}
        d='M232.9 80.8c.2.4.5.9-.4.7.1-.3.2-.5.4-.7z'
      ></path>
      <path d='M264.8 25.5c.2.2.2.6.1.8-.1.1-.3-.2-.3-.3-.1-.2 0-.4.2-.5z'></path>
      <path
        fill={fillColor}
        d='M275.1 75.7c-.3-.4-1-.1-1-.8 0-.2-.1-.3-.3-.2-1.2.7-2.5.1-3.8.3-.5.1-.8-.5-1.2-.7.6-.7 1.4-1.3 1.7-2.3 1.2-.4 2.5-.2 3.8-.2.8 0 1.5 0 2.2-.2.3 0 .5.1.7.3-.4.9-.9 1.8-1.5 2.6l-.1-.1c-.2-.2-.5-.3-.7-.5-1.3-.9-2.7-.4-4.1-.3 1.4.3 2.8-.1 4.1.4.1.1.2.2.3.4 0 .2 0 .5.1.7.1.2.1.4-.2.6z'
      ></path>
      <path
        fill={fillColor}
        d='M294.3 40.2c0-.8-.1-1.5 1-1.7 0 .1.1.4.2.3.4-.1.6.1.7.4-.2.6-.5 1-.9 1.5-.4 0-.7-.2-1-.5z'
      ></path>
      <path d='M293.1 44.5c-.3-.3-1-.5-.5-1 .3-.4.6-1.3 1.4-.6-.2.5-.5 1.1-.9 1.6zM291 48.1c-.7-.8.6-1.4.1-2.1.5-.1.6.2.8.5-.2.6-.5 1.1-.9 1.6zM283.4 61.3c-.1-.2-.2-.5-.2-.5-.6.2-.7-.4-.7-.6.1-.3.4-.5.9-.5.7 0 0 .5.3.7.1 0 .1.1.1.2-.1.3-.2.5-.4.7zM285.4 57.9c-.7-.4.2-.8 0-1.1.6-.2.5-.8.8-1.3.2.1.3.1.5.2-.5.8-.9 1.5-1.3 2.2zM296.5 38c-.2-.2-.4-.5-.7-.9.6 0 1.1-.5 1.4.2l-.3.6c-.2.3-.3.3-.4.1zM281.3 64.9c-.4-.2-.1-1.1-1.1-.8.7-.7 1.2-.5 1.6-.1 0 .3-.2.6-.5.9zM287.3 54.6c-1.4-.3-.3-1-.2-1.5.1.4.2.7.5 1-.1.2-.2.3-.3.5zM296.2 39.2c-.8-.6-1.1.1-1.4.9-.4-.9.4-1.1.5-1.6.4 0 .7.1 1 .3 0 .1-.1.3-.1.4zM303.8 26.1h-.8c.3-.5.5-1 1.2-.7-.1.2-.2.5-.4.7zM294.3 40.2c.4 0 .8.2 1 .5 0 .2-.1.3-.2.4-.3-.3-1.1-.2-.8-.9zM277.3 71.9c-.2-.1-.3-.2-.5-.3-.1-.2-.1-.3 0-.5.3-.1.6-.2 1 0-.1.3-.3.6-.5.8zM300.5 31.8c-.2-.2-.4-.5-.2-.8.2-.2.4-.1.5.1-.1.3-.2.5-.3.7z'></path>
      <path
        fill={fillColor}
        d='M275.4 75c-.3-.1-.7-.1-.3-.5.2-.3.4-.4.7-.1v.1c0 .2-.1.4-.4.5z'
      ></path>
      <path d='M306.7 21c-.3-.1-.5-.2-.3-.5.1-.2.3-.6.6-.2-.1.3-.2.5-.3.7zM287.8 53.6c-.4-.7.2-.7.6-.9-.1.4-.3.7-.6.9zM301.6 29.9c-.2 0-.4.2-.4-.1 0-.2.2-.8.7-.3-.2.1-.3.2-.3.4zM278.5 69.2c.1.1.2.1.2.2 0 .3-.2.6-.4.8-.4-.4.1-.6.2-1zM279.8 67.5c-.7-.7.2-.5.4-.7-.1.3-.2.5-.4.7z'></path>
      <path
        fill={fillColor}
        d='M296.5 38h.4c-.1.3-.2.5-.4.7-.2-.2-.1-.5 0-.7z'
      ></path>
      <path
        fill={fillColor}
        d='M159 46.2c0 .4.4.2.5.4H156c1-.7 2-.2 3-.4z'
      ></path>
      <path
        fill={fillColor}
        d='M114.9 32.6c-.2-.4 0-.6.2-.9.1 0 .2 0 .2.1.2.5 0 .7-.4.8z'
      ></path>
      <path d='M276.7 44.8c.3-.2.3-.3.4-.3.7-.3 1.4-.2 1.4-1.7-.1-1.4-.7-.8-1.2-.9-.4-.1-.5.1-.6.6 0 1-.7.7-1.1.3-1-1.1-2.4-1.2-3.7-1.6-.4-.1-1.4.1-.5-.8.3-.3.1-.5-.1-.7-.3-.4-.6-.8-.8-1.1-.7.6-3.1 1.1-4 .7-.1-.1-.3-.2-.3-.3.3-2.1-.4-4.2-.2-6.3.1-.7-.4-1.5.5-2 .1 0 .1-.2.1-.2-1.1-.8.2-1.9-.4-2.7-.1-.2 0-.4.2-.5.2-.1.4-.2.5-.3.8-2.8 3.3-3.4 5.6-4.4.4-.2 1 0 1.1-.8 0-.3 4-.3 4 0 .1.8.6.6 1.1.6h2.4c1.5 0 2.4.9 3.3 2 .9 1.1.7 2.2.8 3.3.1.8.2 1.5 1.2 1.4.2 0 .6.1.5.3-.4 1.5.4 2.9.1 4.4v.1c0 1.6 0 1.6-1.8 1.6h-1c-.3 0-.6.1-.5.3.3.7.2 1.6 1 2 .6.4 1.2.9 2.1.8.4 0 .3.5.4.6.6.6 1.2 1.2 2.2 1.1.2 0 .6.1.6.4 0 .4-.4.5-.6.5-1.9 0-1.9 1.7-2.5 2.8-.2.3-.2.7-.6.9-.5.4-1.3.7-1 1.7-1.2.3-1.1 1.8-2.1 2.3-.4.2-1.1.5-.8 1.3.1.3-.2.4-.5.4s-.5-.1-.4-.4c.1-.6-.3-.8-.6-1-.4-.3-.8-.5-.5-1.1 0-.1-.1-.4-.1-.4-1.3-.7-1.6-2.7-3.6-2.9zM301.5 17.9h4.3c1.2.7 1.5 1.2.8 1.8-.3.3-.5.3-.6-.1-.3-1.2-.8-1.4-2.1-1.2-.8.2-1.8.7-2.4-.5zM280.6 17.4h4.1c-.4.3-.9.2-1.4.2-.4 0-.8 0-.7.6.1.5-.4.5-.7.6-.6.1-1.1-.1-1.5-.5-.4-.4.2-.6.2-.9zM270.8 17.2c.6 0 1.1-.1 1.7-.1.1 0 .2.1.2.1.3.8 1 1 1.7 1-.9.2-1.6.2-2.2-.6-.2-.2-.2-.2-1.1.3-.2.1-.4.5-.7 0-.5-.7.3-.4.4-.7zM258.5 47.3c-.4 0-.7 0-.6-.5 0-.3 0-.8.4-.6.5.2.8.7 1.3.6-.2.6-.8.2-1.1.5zM275.1 18c.1-.5.5-.6.9-.6s.8 0 .8.4c0 .5-.5.3-.7.3-.4 0-.7.1-1-.1zM288.3 18.1h2c-.9.7-1.7.7-2 0zM298.3 17.9c-.9.6-1.5.3-2.1.3.5-.5 1.1-.3 2.1-.3zM253.6 54.8c.3-.5.6-1.1.9-1.6.4 0 .6.3.7.7-.4-.3-.7 0-.9.3-.2.3-.3.6-.7.6zM278.5 17.3c.5-.1 1-.1 1.5 0-.6.4-1.1.9-1.5 0zM256.6 48.8c0-.6.3-1.1.8-1.6.3.4-.1.6-.1.8-.1.4-.3.7-.7.8zM304.8 23.5c-.1.2-.2.3-.4.3s-.4-.2-.4-.4.3-.1.5-.2c.1 0 .3 0 .3.3zM301.1 28.9c-.2.5-.3.9-.5 1.5 0-.7-.2-1.2.5-1.5zM289.5 50.7c-.2 0-.4-.1-.5-.3-.1-.2-.4-.4 0-.6.3-.1.4.1.4.4 0 .3.1.4.1.5z'></path>
      <path d='M256.6 48.8c.2-.3.5-.5.7-.8.1.4-.1.8-.4 1-.3.3-.2-.1-.3-.2zM288.3 17.6c.6-.1 1.3-.1 1.9 0-.6.5-1.3.1-1.9.3v-.3zM255.6 51.2c.1-.2.2-.3.2-.5.2.1.6-.1.7.3-.3.1-.6.2-.9.2zM255.9 50.3l-.3-.3c.1-.3.2-.6.6-.7.2.5 0 .7-.3 1zM284.9 56c.2.1.2.3.1.5-.2.3-.4.1-.6 0 .1-.3.2-.5.5-.5zM272.1 18.6c-.3-.1-.6-.2-1-.4.5-.2.8-.1 1.1.2 0 0 0 .1-.1.2zM301.8 27.7c-.1-.2-.2-.3-.1-.3.1-.1.2-.2.4-.2.1 0 .2.1.1.2-.2.1-.3.2-.4.3zM288.3 18.1c-.3-.1-.6-.2-1-.3.4-.3.7 0 1 .1v.2zM298.9 17.8h.4c.1.1.6.2.3.4-.3.3-.6-.1-.7-.4zM284.8 17.9c.1.1.3.1.3.2.1.2-.1.3-.3.2-.1 0-.2-.1-.2-.2s.1-.1.2-.2z'></path>
      <path
        fill={fillColor}
        d='M256.5 47.4c0 .2-.1.4-.3.3-.1 0-.2-.2-.2-.3 0-.1.1-.3.2-.4.2.2.2.3.3.4z'
      ></path>
      <path
        fill={fillColor}
        d='M234.2 80.5c-.1.1-.1.4-.3.2-.1-.1-.1-.3-.1-.4 0-.1.2-.2.2-.2.1.1.2.2.2.4z'
      ></path>
      <path d='M260.5 34.5V34c0-.1.1-.2.2-.1s.1.3.1.4c0 .1-.2.2-.3.2zM293.8 17.7h1.2c-.4.3-.8.3-1.2 0zM270.5 72.1c.2 1.3-.7 1.8-1.7 2.2-.2-.1-.2-.3-.2-.5-.2-.1-.1-.3-.1-.4.1-.5.7-.7.6-1.2.1-.1.2-.2.2-.3.1-.2.3-.4.5-.4.5 0 .8.1.7.6z'></path>
      <path
        fill={fillColor}
        d='M237.8 134.6c-.1-.1-.2-.2-.2-.4-.1-.2.1-.3.2-.3s.2.2.3.3c0 .2-.1.3-.3.4z'
      ></path>
      <path
        fill={fillColor}
        d='M261.2 57.9c0-.2.1-.4.3-.4 7.2.3 14.4.1 21.6.2.6 0 1.3-.1 1.4 1h-23.1c.4-.4-.5-.4-.2-.8zM270.5 72.1c-.1-.3-.4-.5-.7-.5-.2-.3 0-.5.2-.7.1-.2.2-.4.3-.5.3-.1.5 0 .7.2.5.4 1 .5 1.6.5h4.1v.5c-.1.2-.3.4-.5.4-1.8.1-3.7.1-5.7.1zM264.8 72.1c-.6.3-1.5-.6-2 .5-.1.1-.3 0-.4-.1-.2-.3-.4-.6-.3-1 0-.2.2-.2.3-.2 1.1.2 2.2-.2 3.3-.1.4 0 .7 0 1 .2.2.1.3.2.3.5 0 .2-.2.3-.4.3-.5-.1-1.1-.1-1.8-.1zM260.7 56.5c-.1-.3-.7-.2-.5-.6 0-.1.3-.7.8-.1.4.4.4-.4.6-.6.9.4.6 1.2.4 1.8-.2.6-.8.1-1.2.1-.1-.3-.1-.4-.1-.6z'
      ></path>
      <path d='M271 70.7c-.2-.1-.5-.2-.7-.2 0-.1.1-.1.1-.2.2-.5.3-1.1 1-1.2.2 0 .3.1.3.3.1.5-.3.9-.7 1.3zM263.3 68c.2-.4.3-.8.5-1.2.2-.3.1-.7.5-.8.4 1.2.2 1.6-1 2zM265.9 63.2c.7.7.5 1.1-.8 1.4-.1-.2-.1-.3 0-.5.3-.3.4-.8.8-.9zM259.4 60.4c.7-.2 1.1-.7 1.3-1.6.2 1.3-.1 1.6-1.3 1.6zM262.6 69.4c0-.2 0-.3.1-.5.5.3 1.4.5.4 1.3-.2-.2-.2-.6-.5-.8zM260 58.7c.6.3.1.7 0 .9-.1.2-.3.3-.5 0-.3-.4-.1-.7.2-1 .1 0 .2 0 .3.1zM278.5 69.2c-.6 0-.6.9-1.5.7.5-.3.6-1.1 1.5-.7zM268.1 73.5c-.1.1-.1.2-.2.3l-.6-.3c.1-.3-.3-.7.1-1.1.3.5.4.9.7 1.1zM261.2 57.9c.1.2.5.4.2.7-.2-.1-.6-.2-.2-.7z'></path>
      <path
        fill={fillColor}
        d='M256.5 56.8h-2.4c-.3 0-.5.1-.5-.3 0-.3-.1-.7.4-.7h5c.3 0 .5.3.5.6 0 .5-.4.3-.6.3-.8.1-1.6 0-2.4.1zM259.5 58.4l-.3.3c-.2-.2-.1-.3 0-.5-.2-.3-.3-.6.1-.9.3-.3.5 0 .6.2-.1.3-.2.6-.4.9z'
      ></path>
      <path d='M258.5 59.1c-.2-.5-1.3-1 0-1.5v1.5zM253.4 58.5c-.2 0-.4-.2-.3-.3 0-.1.1-.3.2-.3.2-.1.3.1.3.3 0 .1-.1.2-.2.3z'></path>
      <path
        fill={fillColor}
        d='M275.1 74h-4.7c.6-1 .6-1 1.8-1h1.9c.6.1.9.4 1 1z'
      ></path>
      <path d='M275.8 74.4c-.2-.1-.5-.1-.7.1V74c.3.1.9-.4.7.4z'></path>
      <path
        fill={fillColor}
        d='M147.3 158.1c-3.8 0-7.7-.1-11.5-.1-15.3-.1-30.5-.2-45.8-.2-10.4-.1-20.8-.1-31.2-.2h-1.3c.6-1 1.1-1.9 1.6-2.7.3-.5.9-.4 1.4-.5 5.9-.2 11.8-.5 17.7-.7 11.6-.5 23.2-.9 34.7-1.4 12.7-.5 25.3-1 38-1.5.8 0 1.6-.1 2.4-.4h-7c-11.3 0-22.6.3-34-.1-16.5-.5-32.9-.1-49.4-.2-1.1 0-.9-.3-.6-1 .7-1.6 1.8-2.2 3.6-2.3 14.8-.5 29.6-1.1 44.3-1.7 14.8-.6 29.5-1.2 44.3-1.8.7 0 1.3-.1 2-.3-30-.2-60.1-.3-90.2-.5.6-2.4 1.4-3.1 3.6-3.2 10.3-.4 20.6-.9 30.9-1.3 13.9-.6 27.7-1.1 41.6-1.7l14.4-.6c.2-.2.4-.2.7-.2.7 0 1.5-.1 2.2 0-.9-.2-2 .1-3-.1h-19c-.4 0-.9.1-1.3-.1-3.6 0-7.3-.1-10.9-.1-6.4 0-12.7 0-19.1-.1-10.6-.1-21.3-.1-31.9-.2h-4.1c.8-1.3 1.4-2.4 2.1-3.5.2-.4.7-.4 1.1-.5.4-.1.9 0 1.3 0h114.5c1.9 0 3 .6 3.9 2.3 5.6 10.4 11.3 20.7 16.9 31 .1.2.2.3.3.5-.1.1.1.3-.1.2H53c.8-2.4 2.5-3.1 5-3.2 11.7-.3 23.4-.9 35.1-1.4 16.8-.7 33.7-1.4 50.5-2 1.2 0 2.3-.1 3.5-.2.6-.2 1.2 0 1.7-.1-.2.1-.9.3-1.5.1zM21.6 140.8c.3-.6.7-1.1 1-1.7.9-.2 1.4-.7 1-1.7.3-.7.7-1.4 1.2-2 .2 0 .5.3.5.1 0-.6.6-1.1.5-1.8.4-.9.9-1.8 1.5-2.6.1.1.2.1.3.2-.1-.1-.2-.1-.3-.2.3-.7.7-1.3 1.1-1.9.3-.2.6-.5.6-.9 0-.2.1-.3.3-.5.3 0 .4.3.6.4.1-.4-.1-.7-.3-1 .1-.4.4-.8.7-1.2.5-.2.7.2 1 .4.4.1.8.2 1.2.2h19.3c.3 0 .6 0 1-.1-.2-.2-.5-.1-.8-.1-6.3 0-12.7-.1-19 .1-.4 0-.8.1-1-.4 0-.4.3-.6.5-.9.4-.4 1-.4 1.5-.4h18.5c1.5 0 1.6.1 2.1 1.6.1.5.3.9.9.4 1.9-.2 3.9 0 5.8-.1.8-.1.8.5.9 1 0 .4.3.7.5 1 .1.3 0 .5-.2.8-.6 0-.1.6-.4.8-.1.2-.3.5-.5.6 0 .1-.5 0-.2.3.1.1.1.3 0 .4 0 .1-.2.1 0 .2.1 0-.1 0 0-.1.2-.4.4-.8.6-1.1.2-.3.4-.7.6-1 3.6-6.4 7.3-12.6 11-18.9 4.9-8.4 9.8-16.9 14.8-25.3.2-.3.3-.7.8-.9 2.5-4.3 5.1-8.6 7.6-12.9 2.6-4.4 5.2-8.9 7.9-13.6.7 1.3 1.4 2.5 2 3.7.3.5-.1.9-.4 1.3-5.7 9.9-11.4 19.7-17.1 29.5-1.5 2.6-3.1 5.2-4.6 7.9-.4.1-.3.5-.4.7-2 3.5-4 7-6 10.6-.9 1.7-1.9 3.3-2.8 5-.6 1.2-1.5 2.3-2.3 3.5-.4.6-.7 1.3-1.1 2l-4.2 7.5c-.1.7-.4 1.3-1 1.7-.1.6-.5 1-.9 1.5-1.5 2.6-3 5.2-4.6 7.8-.8 1.3-1.6 2.7-2.4 4-.6.1-1 .3-1 1.1-.1.8-.8 1.4-.9 2.2-.1.4-.3.7-.5.9-.5.2-.5.8-.7 1.2-.7 1.4-1.5 2.8-2.4 4.1-.6-.2-.3.2-.2.4-.1.5-.4.9-.7 1.2-.3 0-.2.3-.2.4-.4.9-.8 1.7-1.4 2.5-.5.3-.7.8-.8 1.4-.2.5-.5 1-.8 1.5-.3.2-.7.6-.7-.2 0-.4.3-.7-.1-1.3-.1 1-.1 1.7.2 2.5-.3.8-.7 1.6-1.4 2.2-.3.2-.6.1-.9.1-.4-.2.2-.5-.1-.8-1.2 1.7-1.9-.5-2.9-.4 1 .4 1.2.6.7 1.2-1.7-.1-3.4.1-5.2-.1-.6-.2-1.2-.3-1.8 0-.2 0-.5 0-.7-.1-.1-.4 0-1-.7-1.1-.6-.1-.9.1-1.1.6-.1.4-.5.5-.9.5-.6 0-1.1.1-1.7.2-1.1-.1-2.2.2-3.3-.2-.1-.1-.1-.2-.2-.3 0-.1 0-.1.1-.2.2-.2.4 0 .5 0-.2-.1-.3-.2-.5-.3-.3-.4-.8-.2-1-.2.2 0 .7-.2 1 .3 0 .1 0 .2-.2.3-.6.3-1.3.1-1.9.4-1.1.1-2.2.1-3.3 0-.5-.2-1-.2-1.5 0-1.2.1-2.4.2-3.5-.1-.1-.1-.2-.1-.3-.2-.1-.2-.2-.4-.5-.4.1.1.3.3.1.5-.7.5-1.4.1-2.1-.1-.7-.7-1.5-.7-2.4-.5-1.1.2-2 0-2.7-.9-.3.7 1.3.6.5 1.5-.8.2-1.6.3-2.4-.2v-.5c.7-.5.8-1.4 1.4-2 .3-.1.5-.3.3-.6.9-1.5 1.7-2.9 2.6-4.4.2-.2.8-.1.4-.7.7-1.1 1.3-2.3 2-3.4.3 0 .4-.1.2-.4.1-.5.4-.9.7-1.3.4-.1.4-.4.3-.6 1.1-1.9 2.2-3.7 3.3-5.6.3-.1 1.1.5.7-.5-.1-.3.1-.5.1-.8 0-.1.1-.1.2-.1.3-.2.6 0 1-.1.8-.1.7-.8.8-1.3-.1-.1.4-.3 0-.4-.6-.3-.8-.5-.8-.8zM41.5 106.3c2.2-3.9 4.4-7.8 6.6-11.6 7.6-13.3 15.3-26.5 23-39.8 3.3-5.7 6.7-11.5 10-17.2.1-.2.2-.5.3-.8.1-.8.5-1.4 1.1-1.9 1.4-2.3 2.7-4.6 4.1-7h.2c1.8 2.1 1.2 4.1 0 6.3-2.5 4.3-4.7 8.9-7 13.3-1.3 3.2-2.9 6.2-4.7 9.1-.5.8-.7 1.8-1.1 2.6-2.8 5.4-5.7 10.8-8.5 16.2-4.5 8.6-9 17.3-13.6 25.9-.9 1.7-1.7 3.4-2.7 5-.4.5-.4 1.4-1.1 1.7-.2-.1-.4-.2-.6-.4-1.2-1-2.7-.8-3.9-.5-1.3.4-1.6-.2-2.1-.9z'
      ></path>
      <path
        fill={fillColor}
        d='M44.2 165v-.2c.6-.2 1.1-.4 1.7-.1.3 0 .6 0 1 .1v.2h-2.7z'
      ></path>
      <path
        fill={fillColor}
        d='M31.7 125.9c0 .3.1.5.4.4 5.9-.5 11.7-.1 17.6-.2h3.7c-.1.7-.5 1-1.2 1h-21c-.5 0-.9-.1-.8-.7-.1-.5 0-1 .4-1.3.3-.3.4-.6.4-1.1.5-.9 1-1.9 1.6-2.7.2.1.3.2.4.4.1.2.3.2.4 0 .2-.2.1-.3-.2-.4-.4-.1-.2-.4-.3-.7.5-.9.9-1.8 1.6-2.7.4-.2.7.1 1 .1-.4-.2-.5-.6-.5-1 .4-.6.6-1.4 1.1-1.9.2-.2.4-.4.4-.7.3-.7.6-1.3 1.1-1.9.2.1.2.2.4.3.3.1.5-.1.5-.4-.1.2-.2.5-.6.3-.3-.4.2-.7.1-1 .1-.4.3-.7.5-.9.4-.2.9-.3 1.4-.3 1.2-.1 2.5 0 3.7 0 .6 0 1.1 0 1.5.5.5.5-.2.9-.1 1.5.5-.2.5-.6.7-.9.1-.2.2-.4.4-.5.3-.2.5-.5.6-.8.1-.1.1-.3.2-.4.2-.4.5-.6.7-1 .1-.2.2-.4.5-.4s.6.7.9 0c1.5.3 2.9.2 4.4.2.5 0 1.1-.1 1.2.5.2.6.2 1.2-.4 1.6-.4-.5-.9-.6-1.7-.5-.9.2-1.9 0-2.8.1 1 .4 1.9.2 2.9.1.5-.1.9-.1 1.4.2.4.3.1.7.2 1.1 0 .4-.1.8-.6.9-.3 0-.4-.1-.6-.3 0 .4.5.4.6.7 0 .5-.3.8-.7 1.1-.7.3-1.2.7-1 1.6v.3c-.1.2-.2.5-.3.7-.2.3-.3.5-.5.8-.1.1-.2.1-.3.2-.3.2-.8.3-.6.8.4 0 .4-.3.6-.5.1-.2.3-.4.4-.6.2-.2.3-.5.5-.7.1-.2.2-.4.3-.5.1-.2.1-.4.3-.6 4.6-7.9 9.2-15.7 13.8-23.6C71 84 75.8 76 80.5 67.9c.2-.4.4-.8.9-1 3.6-6.1 7-12 10.5-17.9 1.1-2 2.3-3.9 3.5-6 .5.8.9 1.5 1.3 2.1.4.7.4 1.3 0 2-4.1 7.8-8.2 15.5-12.2 23.3-1 1.9-2 3.8-2.9 5.7.1.4-.1.7-.3 1-3 5.9-6.1 11.8-9.2 17.6-4.3 8.1-8.4 16.1-12.7 24.2-.7 1-1.1 2.2-1.8 3.3-.1.1-.2.1-.3.2-.5.1-.7.4-.5.9 0 .4-.3.8-.4 1.2-.1.3-.3.5-.6.6-1.2.1-1.2.2-.8 1.6v.2c0 .3.3.6.2 1-.8-.4-1.4-.9-1.4-1.9 0-.5-.3-.8-.9-.8H32.8c-.2 0-.3.1-.5.2-.3.2-.6.3-.6.5z'
      ></path>
      <path
        fill={fillColor}
        d='M61.4 128.1c-.3-.3-.2-.7-.2-1-2.1 0-4.2.3-6.3-.2-.1-.6.1-1 .8-.9.2 0 .3 0 .2-.2 0-.1-.1-.1-.1-.2 0-.4.3-.7.5-1 .1-.1.2-.1.3-.1.6.1.6-.3.7-.7.2-.3.2-.9.8-.9.2.3 0 .6.2.9-.1-.3-.1-.6-.2-.9-.1-.1-.3-.2-.4-.3.2-1.3 1-2.1 1.6-3.2 4-7 8.2-14 12.3-21 4.1-7 8.2-13.9 12.2-20.9.2-.4.6-.8.9-1.1l9-15.3c2-3.4 4-6.9 6.1-10.4.7.8 1.1 1.6 1.5 2.5.3.6 0 1.2-.3 1.8-4.8 9.1-9.5 18.1-14.3 27.2-.1.2-.2.5-.3.8-.4 1.8-1.5 3.3-2.3 4.8-1.4 2.6-2.7 5.2-4 7.7-4.5 8.7-9.1 17.3-13.6 26-.8 1.5-1.5 2.9-2.3 4.3-.3.5-.5 1.1-1 1.5-.3.2-.5.6-.8.8-.4.3-.7.4-1 0zM54.5 110.6c.6-.3.4-1 .3-1.4-.1-.4-.7-.2-1-.2-1.2-.1-2.4 0-3.5-.1-.4 0-.7-.3-1-.4-.3.1-.4-.1-.6-.3-.1-.5.2-.9.4-1.3.9-1.6 1.8-3.3 2.8-4.9 4.9-8.4 9.8-16.8 14.7-25.1L81 52.3c.3-.4.5-.9 1-1.2 2.3-3.8 4.5-7.7 6.8-11.5.8-1.3 1.6-2.7 2.4-4 .3.3.5.6.7.9.4.4.9.8.9 1.5.4.6.5 1.2-.2 1.6-4.2 8.1-8.5 16.1-12.7 24.2-.1.2-.2.5-.3.8.1.3-.1.6-.2.9-3.1 6.1-6.3 12.1-9.5 18.2-4.7 9.1-9.5 18.1-14.3 27.2-.2.4-.3.9-.9.9-.7-.6-.1-.9-.2-1.2z'
      ></path>
      <path d='M56.7 148c-.8-.5.2-.8.2-1.2 0-.7.6-1.1.5-1.9-.1-.6.7-.4 1.2-.3-.5 1.2-1.2 2.4-1.9 3.4zM48.2 162.7c-.3 0-.6-.3-.6-.5.3-.8-.1-1.3-.4-2 1.4-.1 1.4-.1 1.1 1.2-.2.6.2.3.4.3 0 .4-.2.7-.5 1zM49.6 160.2c-.2-.1-.4-.2-.8-.3.6-.2 1.2-.4.9-1.2-.1-.2-.1-.5.2-.6.4 0 .3.4.4.6 0 .7-.3 1.1-.7 1.5zM52.8 154.7c-.5 0-.7-.6-.5-.8.3-.3.6.1.8.4 0 .2-.1.3-.3.4zM55.4 150.2c0-.5-.2-1.2.7-1.2-.1.4-.3.8-.7 1.2z'></path>
      <path
        fill={fillColor}
        d='M147.3 158.1c.6-.1 1.2-.1 1.8.1-.6.2-1.2.1-1.8.1.1-.1.1-.1 0-.2z'
      ></path>
      <path
        fill={fillColor}
        d='M83.7 101.2c-.2-.4-.5-.9.4-.7-.1.2-.2.5-.4.7z'
      ></path>
      <path d='M51.8 156.4c-.2-.2-.2-.6-.1-.8.1-.1.3.2.3.3.1.3 0 .4-.2.5z'></path>
      <path
        fill={fillColor}
        d='M41.5 106.3c.3.4 1 .1 1 .8 0 .2.1.3.3.2 1.2-.7 2.5-.1 3.8-.3.5-.1.8.5 1.2.7-.6.7-1.4 1.3-1.7 2.3-1.2.4-2.5.2-3.8.2-.8 0-1.5 0-2.2.2-.3 0-.5-.1-.7-.3.4-.9.9-1.8 1.5-2.6l.1.1c.2.2.5.3.7.5 1.3.9 2.7.4 4.1.3-1.4-.3-2.8.1-4.1-.4-.1-.1-.2-.2-.3-.4 0-.2 0-.5-.1-.7-.1-.2-.1-.5.2-.6z'
      ></path>
      <path
        fill={fillColor}
        d='M22.3 141.8c0 .8.1 1.5-1 1.7 0-.1-.1-.4-.2-.3-.4.1-.6-.1-.7-.4.2-.6.5-1 .9-1.5.4-.1.7.2 1 .5z'
      ></path>
      <path d='M23.5 137.5c.3.3 1 .5.5 1-.3.4-.6 1.3-1.4.6.2-.6.5-1.2.9-1.6zM25.6 133.8c.7.8-.6 1.4-.1 2.1-.5.1-.6-.2-.8-.5.2-.6.5-1.1.9-1.6zM33.2 120.7c.1.2.2.5.2.5.6-.2.7.4.7.6-.1.3-.4.5-.9.5-.7 0 0-.5-.3-.7-.1 0-.1-.1-.1-.2.2-.3.3-.5.4-.7zM31.2 124c.7.4-.2.8 0 1.1-.6.2-.5.8-.8 1.3-.2-.1-.3-.1-.5-.2.5-.7.9-1.5 1.3-2.2zM20.2 143.9c.2.2.4.5.7.9-.6 0-1.1.5-1.4-.2l.3-.6c.1-.2.2-.2.4-.1zM35.3 117.1c.4.2.1 1.1 1.1.8-.7.7-1.2.5-1.6.1 0-.4.2-.7.5-.9zM29.3 127.4c1.4.3.3 1 .2 1.5-.1-.4-.2-.7-.5-1 .1-.2.2-.4.3-.5zM20.4 142.7c.8.6 1.1-.1 1.4-.9.4.9-.4 1.1-.5 1.6-.4 0-.7-.1-1-.3.1-.1.1-.2.1-.4zM12.9 155.9h.8c-.3.5-.5 1-1.2.7 0-.3.1-.5.4-.7zM22.3 141.8c-.4 0-.8-.2-1-.5 0-.2.1-.3.2-.4.3.2 1.1.2.8.9zM39.3 110.1c.2.1.3.2.5.3.1.2.1.3 0 .5-.3.1-.6.2-.9 0 0-.4.2-.6.4-.8zM16.1 150.2c.2.2.4.5.2.8-.2.2-.4.1-.5-.1.1-.3.2-.5.3-.7z'></path>
      <path
        fill={fillColor}
        d='M41.2 107c.3.1.7.1.3.5-.2.3-.4.4-.7.1v-.1c0-.3.1-.5.4-.5z'
      ></path>
      <path d='M9.9 161c.3.1.5.2.3.5-.1.2-.3.6-.6.2.1-.3.2-.5.3-.7zM28.8 128.3c.4.7-.2.7-.6.9.1-.3.3-.6.6-.9zM15.1 152.1c.2 0 .4-.2.4.1 0 .2-.2.8-.7.3.1-.2.2-.3.3-.4zM38.2 112.7c-.1-.1-.2-.1-.2-.2 0-.3.2-.6.4-.8.3.5-.2.7-.2 1zM36.8 114.4c.7.7-.2.5-.4.7.1-.2.3-.5.4-.7z'></path>
      <path
        fill={fillColor}
        d='M20.2 143.9h-.4c.1-.3.2-.5.4-.7.2.3.1.5 0 .7z'
      ></path>
      <path
        fill={fillColor}
        d='M157.7 135.8c0-.4-.4-.2-.5-.4h3.5c-1 .6-2.1.2-3 .4z'
      ></path>
      <path
        fill={fillColor}
        d='M201.7 149.4c.2.4 0 .6-.2.9-.1 0-.2 0-.2-.1-.2-.5 0-.7.4-.8z'
      ></path>
      <path d='M39.9 137.1c-.3.2-.3.3-.4.3-.7.3-1.4.2-1.4 1.7.1 1.4.7.8 1.2.9.4.1.5-.1.6-.6 0-1 .7-.7 1.1-.3 1 1.1 2.4 1.2 3.7 1.6.4.1 1.4-.1.5.8-.3.3-.1.5.1.7.3.4.6.8.8 1.1.7-.6 3.1-1.1 4-.7.1.1.3.2.3.3-.3 2.1.4 4.2.2 6.3-.1.7.4 1.5-.5 2-.1 0-.1.2-.1.2 1.1.8-.2 1.9.4 2.7.1.2 0 .4-.2.5-.2.1-.4.2-.5.3-.8 2.8-3.3 3.4-5.6 4.4-.4.2-1 0-1.1.8 0 .3-4 .3-4 0-.1-.8-.6-.6-1.1-.6h-2.4c-1.5 0-2.4-.9-3.3-2-.9-1.1-.7-2.2-.8-3.3-.1-.8-.2-1.5-1.2-1.4-.2 0-.6-.1-.5-.3.4-1.5-.4-2.9-.1-4.4v-.1c0-1.6 0-1.6 1.8-1.6h1c.3 0 .6-.1.5-.3-.3-.7-.2-1.6-1-2-.6-.4-1.2-.9-2.1-.8-.4 0-.3-.5-.4-.6-.6-.6-1.2-1.2-2.2-1.1-.2 0-.6-.1-.6-.4 0-.4.4-.5.6-.5 1.9 0 1.9-1.7 2.5-2.8.2-.3.2-.7.6-.9.5-.4 1.3-.7 1-1.7 1.2-.3 1.1-1.8 2.1-2.3.4-.2 1.1-.5.8-1.3-.1-.3.2-.4.5-.4s.5.1.4.4c-.1.6.3.8.6 1 .4.3.8.5.5 1.1 0 .1.1.4.1.4 1.3.7 1.6 2.8 3.6 2.9zM15.1 164.1h-4.3c-1.2-.7-1.5-1.2-.8-1.8.3-.3.5-.3.6.1.3 1.2.8 1.4 2.1 1.2.8-.2 1.8-.7 2.4.5zM36 164.6h-4.1c.4-.3.9-.2 1.4-.2.4 0 .8 0 .7-.6-.1-.5.4-.5.7-.6.6-.1 1.1.1 1.5.5.5.4-.1.5-.2.9zM45.8 164.8c-.6 0-1.1.1-1.7.1-.1 0-.2-.1-.2-.1-.3-.8-1-1-1.7-1 .9-.2 1.6-.2 2.2.6.2.2.2.2 1.1-.3.2-.1.4-.5.7 0 .5.6-.3.4-.4.7zM58.1 134.7c.4 0 .7 0 .6.5 0 .3 0 .8-.4.6-.5-.2-.8-.7-1.3-.6.2-.6.9-.3 1.1-.5zM41.6 164c-.1.5-.5.6-.9.6s-.8 0-.8-.4c0-.5.5-.3.7-.3.3 0 .6-.2 1 .1zM28.3 163.9h-2c1-.7 1.8-.7 2 0zM18.3 164c.9-.6 1.5-.3 2.1-.3-.5.6-1.1.4-2.1.3zM63 127.2c-.3.5-.6 1.1-.9 1.6-.4 0-.6-.3-.7-.7.4.3.7 0 .9-.3.2-.3.3-.6.7-.6zM38.2 164.6c-.5.1-1 .1-1.5 0 .5-.3 1-.8 1.5 0z'></path>
      <path
        fill={fillColor}
        d='M60 133.2c0 .6-.3 1.1-.8 1.6-.3-.4.1-.6.1-.8.1-.4.3-.7.7-.8z'
      ></path>
      <path d='M11.8 158.5c.1-.2.2-.3.4-.3s.4.2.4.4-.3.1-.5.2c-.1 0-.3-.1-.3-.3zM15.5 153c.2-.5.3-.9.5-1.5.1.8.2 1.2-.5 1.5zM27.1 131.2c.2 0 .4.1.5.3.1.2.4.4 0 .6-.3.1-.4-.1-.4-.4 0-.2 0-.3-.1-.5zM60 133.2c-.2.3-.5.5-.7.8-.1-.4.1-.8.4-1 .3-.4.2.1.3.2zM28.3 164.4c-.6.1-1.3.1-1.9 0 .6-.5 1.3-.1 1.9-.3v.3zM31.7 125.9c-.2-.1-.2-.3-.1-.5.2-.3.4-.1.6 0-.1.4-.2.5-.5.5zM44.5 163.4c.3.1.6.2 1 .4-.5.2-.8.1-1.1-.2 0 0 0-.1.1-.2zM14.9 154.2c.1.2.2.3.1.3-.1.1-.2.2-.4.2-.1 0-.2-.1-.1-.2.1 0 .2-.1.4-.3zM28.3 163.8c.3.1.6.2 1 .3-.4.3-.7 0-1-.1v-.2c0 .1 0 0 0 0zM17.7 164.1h-.4c-.1-.1-.6-.2-.3-.4.4-.2.6.1.7.4zM31.8 164.1c-.1-.1-.3-.1-.3-.2-.1-.2.1-.3.3-.2.1 0 .2.1.2.2l-.2.2z'></path>
      <path
        fill={fillColor}
        d='M60.1 134.5c0-.2.1-.4.3-.3.1 0 .2.2.2.3 0 .1-.1.3-.2.4-.1-.1-.2-.3-.3-.4z'
      ></path>
      <path
        fill={fillColor}
        d='M82.5 101.4c.1-.1.1-.4.3-.2.1.1.1.3.1.4 0 .1-.2.2-.2.2-.2 0-.3-.2-.2-.4z'
      ></path>
      <path d='M56.1 147.4v.5c0 .1-.1.2-.2.1s-.1-.3-.1-.4c.1-.1.2-.1.3-.2zM22.8 164.3h-1.2c.4-.3.8-.3 1.2 0zM46.1 109.8c-.2-1.3.7-1.8 1.7-2.2.2.1.2.3.2.5.2.1.1.3.1.4-.1.5-.7.7-.6 1.2-.1.1-.2.2-.2.3-.1.2-.3.4-.5.4-.5.1-.8 0-.7-.6z'></path>
      <path
        fill={fillColor}
        d='M78.8 47.3c.1.1.2.2.2.4.1.2-.1.3-.2.3s-.2-.2-.3-.3c0-.2.1-.3.3-.4z'
      ></path>
      <path
        fill={fillColor}
        d='M55.4 124c0 .2-.1.4-.3.4-7.2-.3-14.4-.1-21.6-.2-.6 0-1.3.1-1.4-1h23.1c-.3.5.5.5.2.8zM46.1 109.8c.1.3.4.5.7.5.2.3 0 .5-.2.7-.1.2-.2.4-.3.5-.3.1-.5 0-.7-.2-.5-.4-1-.5-1.6-.5h-4.1v-.5c.1-.2.3-.4.5-.4 1.9 0 3.8 0 5.7-.1zM51.8 109.9c.6-.3 1.5.6 2-.5.1-.1.3 0 .4.1.2.3.4.6.3 1 0 .2-.2.2-.3.2-1.1-.2-2.2.2-3.3.1-.4 0-.7 0-1-.2-.2-.1-.3-.2-.3-.5 0-.2.2-.3.4-.3.5.1 1.1.1 1.8.1zM55.9 125.5c.1.3.7.2.5.6 0 .1-.3.7-.8.1-.4-.4-.4.4-.6.6-.9-.4-.6-1.2-.4-1.8.2-.6.8-.1 1.2-.1.1.2.1.4.1.6z'
      ></path>
      <path d='M45.6 111.3c.2.1.5.2.7.2 0 .1-.1.1-.1.2-.2.5-.3 1.1-1 1.2-.2 0-.3-.1-.3-.3-.1-.6.3-.9.7-1.3zM53.3 113.9c-.2.4-.3.8-.5 1.2-.2.3-.1.7-.5.8-.4-1.2-.2-1.5 1-2zM50.7 118.7c-.7-.7-.5-1.1.8-1.4.1.2.1.3 0 .5-.3.3-.3.8-.8.9zM57.2 121.6c-.7.2-1.1.7-1.3 1.6-.2-1.4.1-1.7 1.3-1.6zM54 112.5c0 .2 0 .3-.1.5-.5-.3-1.4-.5-.4-1.3.2.2.2.6.5.8zM56.6 123.3c-.6-.3-.1-.7 0-.9.1-.2.3-.3.5 0 .3.4.1.7-.2 1-.1 0-.2 0-.3-.1zM38.2 112.7c.6 0 .6-.9 1.5-.7-.6.4-.7 1.2-1.5.7zM48.5 108.4c.1-.1.1-.2.2-.3l.6.3c-.1.3.3.7-.1 1.1-.3-.4-.3-.8-.7-1.1zM55.4 124c-.1-.2-.5-.4-.2-.7.2.2.7.3.2.7z'></path>
      <path
        fill={fillColor}
        d='M60.1 125.2h2.4c.3 0 .5-.1.5.3 0 .3.1.7-.4.7h-5c-.3 0-.5-.3-.5-.6 0-.5.4-.3.6-.3.8-.1 1.6-.1 2.4-.1zM57.1 123.5l.3-.3c.2.2.1.3 0 .5.2.3.3.6-.1.9-.3.3-.5 0-.6-.2.1-.2.2-.6.4-.9z'
      ></path>
      <path d='M58.1 122.8c.2.5 1.3 1 0 1.5v-1.5z'></path>
      <path d='M57.4 123.8v-.5c.1-.2.2-.5.3-.7h.2l.3.3c-.5.2-.3.7-.8.9zM63.2 123.4c.2 0 .4.2.3.3 0 .1-.1.3-.2.3-.2.1-.3-.1-.3-.3 0 0 .1-.1.2-.3z'></path>
      <path
        fill={fillColor}
        d='M41.5 107.9h4.7c-.6 1-.6 1-1.8 1h-1.9c-.6 0-.9-.4-1-1z'
      ></path>
      <path d='M40.8 107.5c.2.1.5.1.7-.1v.5c-.3 0-.8.4-.7-.4zM186.9 76.5l.3.3c.2.2.5.3.6 0 .1-.2-.1-.5-.2-.8 0-.1-.3-.2-.4-.2-.6-.1-.6-.4-.6-.9.1-.5.4-.6.8-.6 1.4.1 2.4.9 3.1 1.9.7 1 1.1 2.2 1.3 3.5.3 1.6.3 3.1 0 4.7-.6 3.1-2.7 4.7-5.7 5.3-1.5.3-2.9 0-4.2-.6-1.8-.8-3.2-2-4.4-3.7-.9-1.3-1.9-2.5-2.8-3.7-.3-.4-.7-.6-1.2-1v.5h-4.7c-1.6 0-2.8.7-3.7 2-.5.6-.9 1.3-1.3 2-.1.1-.2.3-.3.5 0-.2-.1-.3-.1-.3.1-2.7.1-5.4.3-8 .2-2.2 1.2-3.9 3.4-4.7 2.3-.8 4.5-.6 6.3 1.1 1 1 1.9 2.1 2.7 3.2l4.2 6c1.5 2.2 3.7 3 6.3 2.8.4 0 .9-.4 1.2-.7.8-1 .5-2.7-.6-3.4-1-.7-1.4-1.7-1.6-2.9-.2-1.1.6-1.7 1.3-2.3zM173.7 105.5c0 .1 0 .2-.1.3h.2c.4-.2.8-.4 1.1-.7 1-1.2 2-2.5 2.9-3.8 1.6-2.2 3.7-3.8 6.4-4.2 3.8-.6 7.2 1.9 7.8 5.7.3 2.1.1 4.2-.6 6.1-.6 1.7-1.5 3-3.3 3.5-.3.1-.6.1-.8.1-.4 0-.6-.3-.6-.7 0-.4 0-.7.5-.8.2 0 .4-.1.5-.2.3-.2.3-.5.2-.8-.2-.3-.4-.1-.7 0-.1.1-.2.2-.4.3-.4-.4-.7-.8-1.1-1.2-.1-.1-.1-.2-.1-.3.1-1.6.4-3.1 2-4 .6-.4.9-1.7.6-2.7-.3-.8-.8-1.3-1.8-1.3-2.5-.1-4.6.8-6.1 3-1.8 2.6-3.6 5.2-5.5 7.8-1 1.3-2.1 2.4-3.8 2.8-3 .6-6.4-.4-7.1-4.6-.3-1.8-.3-3.7-.4-5.5V101c.2.3.3.4.3.5.5.7.9 1.4 1.4 2.1.9 1.2 2.1 1.9 3.6 1.9 1.1 0 2.1-.1 3.2-.1.6 0 1.1 0 1.7.1zM132.1 109.6c.5-.2.8.1 1.1.4.9 1.1 1.8 2.1 2.7 3.2.2.2.3.5.4.8l-.2.2c-.6-.2-1.1-.4-1.6-.7-.6-.3-1.2-.7-2-.4-.2-.5-.1-1.2-.9-1.3-.1.2-.2.5-.4.6-.2.1-.6.1-.8 0-1.2-.3-2-1.1-2.6-2.2-.8-1.4-1-3-1.2-4.6-.2-1.5 0-3 .4-4.4 1.1-3.5 5.1-5.2 8.4-3.6 1.8.9 3.2 2.2 4.2 3.9.8 1.3 1.7 2.5 2.6 3.7.2.3.6.5.9.7.2-.4.9-.6 1.5-.6.9.1 1.9.2 2.8.1 1.5 0 2.6-.7 3.4-2 .5-.8.9-1.6 1.4-2.4 0 .1.1.2.1.3-.1 2.6-.1 5.2-.3 7.8-.1 1.6-.6 3.1-1.9 4.2-2 1.6-5.2 1.7-7-.6-1.4-1.8-2.6-3.7-3.8-5.6-.8-1.2-1.5-2.4-2.3-3.6-1.3-1.9-3.1-2.7-5.3-2.6-1 0-1.7 1-1.6 2.2 0 .9.3 1.6 1 2.1.8.6 1.2 1.5 1.3 2.5v.5c.3.6.1 1.1-.3 1.4-.2.3-.4.5-.6.7-.2-.2-.2-.3-.4-.3-.1-.1-.3-.2-.4-.1-.1.1-.2.3-.2.4.1.2.2.4.4.6.2.2.5.2.8.3.1-.5.2-1.1.4-1.6zM132.2 76.5c.1 0 .1 0 .1.1.4.5 1 1 1 1.5.1 1.4-.2 2.7-1.4 3.7-1 .8-1.3 2.3-.7 3.4.3.6.8.8 1.4.9 2.3 0 4.1-.8 5.4-2.8 1.5-2.5 3.1-4.9 4.6-7.4.7-1.1 1.5-2 2.6-2.8 2.2-1.4 6.1-.7 7.2 2.5.4 1.2.6 2.4.7 3.7.1 2.1.1 4.2.1 6.2 0 .1 0 .2-.1.3-.4-.6-.8-1.3-1.1-1.9-1-1.9-2.5-2.7-4.6-2.5-.7.1-1.3.2-2 .1-.5 0-1.1.1-1.4-.6-.4.3-.8.5-1 .9-.9 1.2-1.8 2.5-2.6 3.8-1 1.6-2.3 2.7-3.9 3.6-3.4 1.8-7.9-.3-8.7-4-.6-2.6-.4-5.2.4-7.7.3-1 .9-2 1.8-2.6.4-.3 1-.5 1.5-.6.4-.1.8.1.9.5.1.4.1.8-.5 1-.2.1-.5.4-.6.6-.1.1.1.4.2.5.1.1.3-.1.4-.2.1 0 .2-.1.3-.2zM187.9 93.7c-1.3.3-2.5.7-3.8.9-3.7.8-7.4 1.6-11 2.3-1.8.4-3.6.3-5.3-.6-.1 0-.2-.1-.2-.1-.9-.6-1.7-1.3-1.7-2.5s.8-2 1.8-2.5c1.7-.9 3.5-1.1 5.3-.7 4.9 1 9.7 2.1 14.6 3.1-.1-.1 0 0 .3.1zM158.8 65.1c.7 4 1.4 8 2.1 11.9.2 1.1.4 2.3.5 3.4.2 2-.1 4-1.5 5.6-1.3 1.5-3 1.5-4.2-.1-1.1-1.5-1.4-3.2-1.1-5 .6-3.2 1.4-6.4 2.2-9.6.5-1.9 1-3.7 1.5-5.5.1-.2.1-.5.2-.7h.3zM130.3 93.6c2-.5 3.9-1 5.9-1.4 3.2-.7 6.5-1.3 9.7-1.9 1.9-.3 3.8.1 5.3 1.4 1.3 1.1 1.3 2.8 0 3.9-.2.2-.4.4-.7.5-1.5.9-3.1 1.2-4.8.9-3-.5-6-1.1-9-1.8-2-.4-4.1-.9-6.1-1.4-.1 0-.3-.1-.4-.1l.1-.1zM157.3 121.5c-.7-3.7-1.3-7.5-2-11.2-.2-1.3-.5-2.7-.6-4.1-.2-1.9.1-3.7 1.2-5.3.7-.9 1.5-1.5 2.7-1.3.8.2 1.4.7 1.8 1.4 1.1 1.7 1.2 3.5.9 5.4-.9 5.1-2.4 10-3.8 14.9 0 .1-.1.2-.1.2h-.1z'></path>
      <path d='M181.7 72.7c.4.1.8.2 1.2.4.5.2.9.5 1.4.6.4.1.8.1 1.3.2.1.2.1.4.2.7-.2.1-.4.1-.6.2v.1h.7c.4 0 .7.1.6.6-.1.5-.2.9-.4 1.3s-.6.5-.9.1c-1.1-1.2-2.3-2.4-3.4-3.6-.1-.1-.2-.3-.3-.5.1 0 .1 0 .2-.1zM185.6 113c-.9-.3-1.6.2-2.4.5l-1.5.6c0-.1-.1-.1-.1-.2l.3-.6c1.1-1.2 2.2-2.3 3.3-3.5.4-.4.8-.3 1 .2.1.3.2.7.3 1 .1.6 0 .8-.7.8-.2 0-.4 0-.6-.1v.1c.2.1.4.1.6.2 0 .4-.1.7-.2 1zM137 72.9c-.1.2-.2.5-.4.6-.9 1.1-1.9 2.2-2.8 3.3-.5.5-.8.5-1.1-.2-.1-.2-.1-.3-.1-.5-.3-1.2-.3-1.2.9-1.2 0 0 .1 0 .2-.1-.3-.1-.4-.1-.6-.2.1-.3.1-.5.2-.8.8.2 1.4-.2 2.1-.5l1.5-.6s0 .1.1.2zM153.3 93.8c.1-2.2 1-3.7 2.7-4.7 2.4-1.3 5.4-.8 7.2 1.2 1.9 2.1 1.7 5.3-.4 7.2-3.1 2.8-8.2 1.5-9.4-2.4.1-.5 0-1-.1-1.3zm.3-.1c0 .2 0 .6.1.9.8 3.6 5.1 5.3 8.3 3.3 2.8-1.8 3.2-5.5.7-7.8-1.8-1.6-4.6-1.9-6.6-.7-1.5.9-2.4 2.3-2.5 4.3z'></path>
      <path d='M153.6 93.7c.1-2 .9-3.4 2.5-4.3 2-1.3 4.9-.9 6.6.7 2.5 2.3 2.1 6-.7 7.8-3.1 2-7.5.3-8.3-3.3-.1-.4-.1-.7-.1-.9z'></path>
    </svg>
  );
};

export default Logo;
