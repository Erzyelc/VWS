import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()
  // 0 0 225.79 77.7
  return (
    // <svg viewBox="0 0 202.91 77.69" aria-hidden="true" {...props}>
    <svg viewBox="0 0 909.51 354.28" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-full transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-full' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="2"
      />
      <defs>
        <path
          id={`${id}-path`}
          // d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
          // d="M31.57,74.96C29.92,72.11,2.65,6.12.12.46-.09-.05-.26.03,1.71.02h15.59c1.11.07,1.48-.17,1.99.17.61,1.43,9.13,23.73,14.53,37.75,2.57,6.43,4.17,11.38,4.42,11.17C41.82,39.82,56.51,1.5,57.04.22c.06-.09.13-.14.27-.17.24-.04.72-.03,1.56-.03,3.66,0,13.12,0,16.22,0,1.68,0,1.25-.01,1.04.64-3.46,8.26-29.42,70.03-31.12,74.08-.21.4-.35.18-1.21.26-2.72-.06-9.7.07-12.19-.03h-.05ZM140.77,74.94c-1.06-2.69-11.22-39.3-12.03-41.79-.26-.35-10.81,37.83-11.96,41.43-.09.28-.12.38-.49.4-1.39.03-12.67,0-16.84.01-1.18-.06-1.63.17-1.85-.21-1-3.5-20.15-70.69-21.25-74.53-.1-.28.04-.23,1.55-.24,3.82-.01,11.72,0,15.41,0,1.09.07,1.56-.17,1.98.16.45,1.62,9.94,40.11,12.81,51.08.19.25.44.1.53-.15.29-1,1.32-4.98,2.74-10.3,3.8-14.3,10.15-38.31,10.75-40.53.22-.42.49-.18,1.32-.26,2.45,0,9.31,0,10.95,0,.26-.02.62.01.74.16.72,2.35,10.22,38.8,13.6,51.05.18.26.41.18.54-.08.31-1.06,1.53-6.1,3.17-12.64,3.67-14.69,9.17-36.88,9.58-38.33.05-.08.11-.12.27-.14.25-.03.81-.02,1.7-.02,3.56,0,11.05,0,15,0,1.53.01,1.94-.04,1.9.13-.84,2.63-20.11,71.26-21.41,74.81-4.51.08-16.33.08-18.7,0h-.03ZM200.21.02c5.26-.04,10.69,1.15,15.68,3.02,2.7,1,5.18,2.11,7.07,3.81.26.31.31.61.17.99-.36.86-1.33,2.63-2.34,4.66-1.15,2.17-2.86,5.82-3.9,7.5-.48.62-1.27.06-1.82-.22-1.35-.79-2.76-1.46-4.83-2.23-5.73-2.65-18.63-3.84-17.6,5.61,1.22,4.45,9.05,6.9,13.24,8.98,14.49,5.83,24.46,15.9,17.79,32.04-5.51,12.41-21.41,14.78-33.56,12.99-7.37-1.14-15-4.19-20.65-9.04-.29-.42-.21-.88.04-1.32,1.41-2.37,5.96-9.97,7.39-12.33.78-1.43,2.1.28,2.98.79,5.15,3.48,11.83,7.14,18.04,6.5,4.71-.23,8.66-2.44,8.84-6.34.57-4.51-4.2-7.07-7.52-8.79-3.41-1.7-7.5-3.42-10.91-5.29-6.07-3.3-11.35-8.65-12.53-15.55C173.28,11.6,186.61-.2,200.02.02h.19Z"
          d="M274.55,337.31c-51.24,22.65-104.28,23.04-155-1.32-23.36-11.22-39.39-26.99-41.81-26.39-2.28.55-15.43,23.57-33.65,31.67-4.66,2.07-12.63,3.85-17.68,3.3-6.39-.7-16.72-7.75-20.39-12.87-23.37-32.54,28.77-62.65,29.23-66.65.2-1.79-8.57-15.1-13.6-33.65C-24.3,61.8,174.24-72.06,325.88,43.02c1.79.17,13.32-17.95,22.43-24.41,36.85-26.2,86.88,22.46,19.37,67.64,49.29,99.47,9.87,205.55-93.13,251.07h0ZM194.35,171.04c4.34,7.64-.46,11.48-6.12,18.15-9.75,11.48-78.26,73.27-99.93,95.02-11.84,11.88-38.56,46.49-52.01,48.5-18.3,2.73-37.21-14.91-15.98-40.58,15.31-18.52,117.24-106.4,143.78-131.64,3.64.66,10.01-.69,10.54-.66,6.3.37,16.67,5.87,19.71,11.22ZM333.7,105.71c-21.59,20.76-43.14,41.51-63.22,63.68-2.34,2.02-2.68,3.68-6.12,4.29-.82.15-14.89-.45-15.64-.66-2.84-.79-15.68-14.31-17-17.16-.39-.86-1.48-3.58-1.36-4.29,1.14-6.64,84.75-84.67,96.53-96.34,14.43-14.28,34.6-47.06,56.76-30.02,28.04,21.56-25.29,55.88-39.43,69.29-3.73,3.54-6.93,7.76-10.54,11.22h0ZM248.72,173.02c-41.8,40.91-83.61,81.82-125.43,122.73-6.68-4.28-13.37-8.57-20.05-12.87,44.22-41.11,85.13-85.18,128.49-127.02,1.32,2.85,14.15,16.36,17,17.16ZM194.35,171.04c-3.05-5.34-13.42-10.85-19.71-11.22,36.37-34.97,72.74-69.95,109.11-104.92l18.36,9.9-107.75,106.24ZM79.46,137.39c-2.24,7.1-3.09,10.36-4.08,17.82-2.69,20.36-1.39,40.73,2.04,61.04,9.08-9.11,17.4-18.98,26.51-28.04,1.16-1.15,2.91-2.15,4.08-3.3,12.35,1.57,2.6,9.21,9.18,11.22,4.19-3.74,8.38-7.48,12.58-11.22-20.44,19.62-39.91,40.24-61.18,59.06-17.88-45.98-19.18-84.77,5.44-128.34,0,0,5.44,21.78,5.44,21.78ZM133.84,180.92c6.49-5.25-.45-14.91-7.48-13.86,2.28-2.18,4.51-4.43,6.8-6.6,12.25-11.6,24.99-22.83,37.39-34.31,11.01-10.2,22.3-20.15,33.31-30.35-.22,2.51,1.88-.03,3.74,1.32,3.64,2.64,1.79,8.55,2.72,9.24,13.62-12.62,27.02-25.46,40.45-38.27,5.19-4.95,11.01-9.32,15.64-14.85-8.31-4.63-19.82-5.83-27.19-10.23,10.03,2.07,19.95,5.53,29.23,9.57-43.88,43.29-89.9,85.48-134.6,128.34ZM133.84,180.92c-1.36,1.31-2.71,2.64-4.08,3.96-4.19,3.74-8.38,7.48-12.58,11.22-6.58-2.01,3.17-9.65-9.18-11.22,6.09-6,12.16-11.92,18.36-17.82,7.03-1.06,13.96,8.6,7.48,13.86ZM85.58,121.55c-2.37,4.59-4.55,10.87-6.12,15.84l-5.44-21.78c3.49-6.19,6.64-10.8,10.88-16.5,3.77,8.47-2.07,13.32.68,22.44ZM250.76,68.1c-13.43,12.81-26.83,25.66-40.45,38.27-.92-.69.92-6.6-2.72-9.24-1.86-1.35-3.96,1.19-3.74-1.32,4.95-4.58,34.63-34.7,37.05-35.63.92-.36.99,1.57,5.44,0,.57.45-.56,4.33,4.42,7.92ZM239.2,43.02c7.37,4.39,18.89,5.6,27.19,10.23-4.62,5.53-10.44,9.9-15.64,14.85-4.98-3.59-3.85-7.47-4.42-7.92-4.45,1.57-4.51-.36-5.44,0-2.42.94-32.1,31.05-37.05,35.63-11.01,10.2-22.3,20.15-33.31,30.35-3.54,1.03-4.57,5.34-8.84,3.63,4.32-9.85-.9-12.56-1.36-14.52-2.42-10.1-3.22-20.28-5.44-30.35-.26-1.17-3.29-4.62-3.4-5.28-.19-1.12,1.43-5.64,1.36-5.94-.39-1.83-3.34-5.61-3.4-5.94-.56-3.26.15-5.62,0-8.58-.12-2.34-5.33-2.71,6.12-12.21,26.36-8.59,56.48-9.57,83.62-3.96ZM170.55,126.17c-12.4,11.48-25.14,22.71-37.39,34.31-1.56-.51-5.96,2.68-6.8.33-1.18-11.19-8.85-21.26-9.52-32.99-5.09-10.37-6.97-21.19-12.24-32,10.71-12.01,19.96-18.15,20.39-19.47,1.69-5.15-5.34-8.87-2.04-13.53,9.57-6.11,21.78-12.3,32.63-15.84-11.45,9.5-6.24,9.87-6.12,12.21.15,2.96-.56,5.32,0,8.58.05.33,3,4.1,3.4,5.94.07.3-1.55,4.82-1.36,5.94.11.66,3.14,4.1,3.4,5.28,2.22,10.07,3.02,20.24,5.44,30.35.46,1.95,5.68,4.67,1.36,14.52,4.27,1.72,5.3-2.6,8.84-3.63ZM104.61,95.81c-6.39,7.15-14.71,17.34-19.03,25.73-2.75-9.12,3.09-13.96-.68-22.44,11.34-15.24,21.7-25.85,38.07-36.29-3.3,4.66,3.73,8.38,2.04,13.53-.44,1.32-9.68,7.46-20.39,19.47ZM133.16,160.48c-2.28,2.15-4.51,4.42-6.8,6.6-6.2,5.9-12.26,11.81-18.36,17.82-1.17,1.15-2.92,2.15-4.08,3.3-11.16,3.67-19.66-23.83-28.55-32.99.99-7.46,1.84-10.72,4.08-17.82,1.56-4.96,3.75-11.24,6.12-15.84,4.32-8.39,12.64-18.58,19.03-25.73,5.26,10.81,7.15,21.63,12.24,32,.67,11.73,8.33,21.8,9.52,32.99.84,2.35,5.23-.84,6.8-.33ZM103.93,188.18c-9.11,9.07-17.43,18.94-26.51,28.04-3.43-20.31-4.73-40.67-2.04-61.04,8.89,9.16,17.39,36.66,28.55,32.99ZM333.7,105.71c30.7,69.68,14.11,135.43-49.63,179.48-.08-1.43,2.26-3.1,3.4-3.96,10.46-7.85,18.75-15.18,27.19-25.07,5-5.87,24.05-31.94,23.79-37.94-.01-.44-3.83-6.24-4.42-7.59l-4.42,1.98c5.89-14.46,8.89-31.03,9.52-46.52.76-18.82-3.09-36.03-2.04-37.61.61-.94,2.11.62,2.72-1.32.31-.99-6.15-17.01-7.14-19.47l-11.22,10.89c.24,7.56,5.6-4.63,6.12,2.64-18.87,27.17-43.55,49.81-66.62,73.57-.99-.58,2.73-4.96,2.72-6.27-.03-2.23-3.13-2.93-2.38-8.91l-9.86,8.58c4.17-3.95,13.85-13.2,12.92-14.52,3.44-.61,3.78-2.27,6.12-4.29,20.08-22.17,41.63-42.92,63.22-63.68ZM165.79,287.82c-3.33,3.25-8.09,6.36-7.14,7.92,25,4.96,55.21,5.08,79.88-1.98,9.07.42,11.41-1.57,9.18,9.24,4.87-1.54,9.74-3.08,14.62-4.62-32.39,15.6-70.08,19.82-105.03,9.9-3.06-.87-20.94-7.35-20.73-9.57,8.36-9.36,17.66-17.83,26.51-26.72.6,5.71,2.88,9.95,2.72,15.84ZM260.96,194.78c-10.01,10.31-19.7,20.86-29.91,31.01-4.46,4.43-9.1,8.78-13.6,13.2,4.39-11.59-.2-8.53-.68-9.57-.68-1.46.73-2.52.68-2.64-.2-.42-3-1.36-2.72-3.3.11-.75,9.33-9.24,10.88-10.89,8.2-8.71,17.17-16.22,25.83-24.41l9.86-8.58c-.75,5.98,2.35,6.68,2.38,8.91.01,1.31-3.71,5.69-2.72,6.27ZM225.62,212.6c-1.55,1.65-10.77,10.14-10.88,10.89-.29,1.94,2.52,2.88,2.72,3.3.05.12-1.36,1.17-.68,2.64.48,1.04,5.07-2.02.68,9.57-3.6,3.54-5.15,5.66-5.44,5.94-7.64,7.44-16.04,14.39-23.79,21.78,1.88-4.95-4.43-12.52-4.08-14.19.3-1.39,17.74-17.49,20.39-20.13,6.78-6.76,13.17-14.16,21.07-19.8ZM287.47,281.22c-1.14.86-3.48,2.53-3.4,3.96-7.15,4.95-13.85,9.4-21.75,13.2-4.87,1.54-9.74,3.08-14.62,4.62,2.23-10.81-.11-8.82-9.18-9.24,6.15-1.76,14.53-5.71,20.39-8.58,6.62-3.23,16.59-8.95,22.43-13.2.15,2.78.84-.03,1.02,0,4.05.59,4.31,6.08,5.1,9.24ZM188.23,266.71c-7.42,7.07-15.09,13.96-22.43,21.12.16-5.89-2.12-10.12-2.72-15.84,13.45-13.51,26.85-27.23,41.47-39.59-2.65,2.64-20.1,18.74-20.39,20.13-.35,1.66,5.96,9.22,4.08,14.19ZM329.62,212.6c-4.26,10.47-16.14,29.03-23.79,37.61-4.41,4.94-18.94,17.75-24.47,21.78-5.85,4.25-15.81,9.96-22.43,13.2-6.68,1.21-12.54,4.66-19.03,6.6-4.46-15.18-8.65-31.85-9.52-48.5-9.3-8.67-1.22-9.54.68-17.49,10.21-10.15,19.91-20.71,29.91-31.01,23.07-23.77,47.74-46.4,66.62-73.57-.52-7.27-5.87,4.92-6.12-2.64l11.22-10.89c.99,2.45,7.45,18.48,7.14,19.47-.61,1.94-2.11.38-2.72,1.32-1.05,1.58,2.8,18.78,2.04,37.61-.63,15.49-3.63,32.04-9.52,46.52ZM314.66,256.15c-4.58-6.4.98-7.03-8.84-5.94,7.65-8.57,19.52-27.13,23.79-37.61l4.42-1.98c.58,1.35,4.41,7.15,4.42,7.59.26,6-18.79,32.07-23.79,37.94ZM314.66,256.15c-8.44,9.9-16.74,17.22-27.19,25.07-.79-3.15-1.05-8.64-5.1-9.24-.18-.03-.87,2.78-1.02,0,5.53-4.03,20.07-16.84,24.47-21.78,9.82-1.1,4.26-.46,8.84,5.94ZM212.02,244.93c-3.24,19.47,8.12,29.97,6.8,48.5,6.57,3.75,14.18.41,21.07-1.65,6.5-1.94,12.36-5.38,19.03-6.6-5.86,2.86-14.25,6.82-20.39,8.58-24.66,7.06-54.87,6.94-79.88,1.98-.95-1.56,3.81-4.67,7.14-7.92,7.34-7.15,15.01-14.04,22.43-21.12,7.75-7.39,16.15-14.33,23.79-21.78ZM239.88,291.78c-6.88,2.06-14.51,5.4-21.07,1.65,1.32-18.53-10.03-29.03-6.8-48.5.29-.28,1.84-2.4,5.44-5.94,4.5-4.42,9.14-8.76,13.6-13.2-1.9,7.94-9.98,8.82-.68,17.49.87,16.65,5.06,33.32,9.52,48.5ZM430.34,98.26h39.71l31.41,67.91,31.41-67.91h39.71l-68.79,145.68h-4.67l-68.79-145.68ZM559.61,104.84h-19.73l-36.34,78.48h-3.89l-36.6-78.48h-19.73l58.14,122.89,58.14-122.89ZM447.22,107.42h14.02l.52,1.17h-13.76l-.78-1.17ZM449.29,112.12h14.02l.52,1.17h-13.76l-.78-1.17ZM451.63,116.82h14.02l.52,1.17h-13.76l-.78-1.17ZM453.7,121.52h14.02l.52,1.18h-13.76l-.78-1.18ZM456.04,126.22h14.02l.52,1.17h-13.76l-.78-1.17ZM458.38,130.92h13.76l.52,1.17h-13.5l-.78-1.17ZM460.45,135.62h14.02l.52,1.17h-13.76l-.78-1.17ZM462.79,140.32h13.76l.52,1.17h-13.5l-.78-1.17ZM465.13,145.02h13.76l.52,1.17h-13.5l-.78-1.17ZM467.2,149.72h13.76l.52,1.17h-13.5l-.78-1.17ZM469.54,154.42h13.76l.52,1.17h-13.5l-.78-1.17ZM471.61,159.12h13.76l.52,1.17h-13.5l-.78-1.17ZM473.95,163.82h13.76l.52,1.17h-13.5l-.78-1.17ZM476.03,168.52h13.76l.52,1.17h-13.5l-.78-1.17ZM478.36,173.22h13.5l.52,1.17h-13.24l-.78-1.17ZM480.7,177.91h13.24l.52,1.17h-12.98l-.78-1.17ZM482.78,182.61h13.5l.52,1.17h-13.24l-.78-1.17ZM485.11,187.31h13.24l.52,1.17h-12.98l-.78-1.17ZM487.19,192.01h13.5l.52,1.17h-13.24l-.78-1.17ZM489.52,196.71h13.24l.52,1.18h-12.98l-.78-1.18ZM491.86,201.41h12.98l.52,1.17h-12.72l-.78-1.17ZM506.92,206.11l.52,1.17h-12.72l-.78-1.17h12.98ZM506.66,210.81l-.78,1.17h-8.83l-.78-1.17h10.38ZM504.32,215.51l-.78,1.17h-4.15l-.78-1.17h5.71ZM502.24,220.21l-.52.94-.52-.94h1.04ZM577.78,98.26h39.97l31.41,66.5,18.95-44.17-9.86-22.32h39.45l31.15,66.26,28.55-66.26h39.71l-64.89,145.68h-5.19l-38.42-81.3-37.12,81.3h-4.93l-68.79-145.68ZM686.8,145.25h3.63l38.93,82.71,55.03-123.12h-19.73l-33.22,76.37h-4.15l-36.6-76.37h-19.47l6.75,15.51-25.44,60.39h-5.19l-36.6-75.9h-19.99l58.14,122.89,37.9-82.47ZM594.65,107.42h14.28l.52,1.17h-14.02l-.78-1.17ZM596.73,112.12h14.54l.52,1.17h-14.28l-.78-1.17ZM599.06,116.82h14.54l.52,1.17h-14.28l-.78-1.17ZM601.14,121.52h14.79l.52,1.18h-14.54l-.78-1.18ZM603.48,126.22h14.54l.52,1.17h-14.28l-.78-1.17ZM605.55,130.92h14.8l.52,1.17h-14.54l-.78-1.17ZM607.89,135.62h14.8l.52,1.17h-14.54l-.78-1.17ZM610.23,140.32h14.54l.52,1.17h-14.28l-.78-1.17ZM612.56,145.02h14.54l.52,1.17h-14.28l-.78-1.17ZM614.64,149.72h14.8l.52,1.17h-14.54l-.78-1.17ZM616.97,154.42h14.54l.52,1.17h-14.28l-.78-1.17ZM619.05,159.12h14.79l.52,1.17h-14.54l-.78-1.17ZM621.39,163.82h14.54l.52,1.17h-14.28l-.78-1.17ZM623.46,168.52h14.8l.52,1.17h-14.54l-.78-1.17ZM625.8,173.22h14.8l.52,1.17h-14.54l-.78-1.17ZM627.88,177.91h14.79l.52,1.17h-14.54l-.78-1.17ZM630.21,182.61h14.79l.52,1.17h-14.54l-.78-1.17ZM632.55,187.31h14.8l.52,1.17h-14.54l-.78-1.17ZM634.62,192.01h14.8l.52,1.17h-14.54l-.78-1.17ZM636.96,196.71h14.79l.52,1.18h-14.54l-.78-1.18ZM639.04,201.41h15.05l.52,1.17h-14.8l-.78-1.17ZM655.65,206.11l-.52,1.17h-12.98l-.78-1.17h14.28ZM653.57,210.81l-.52,1.17h-8.83l-.78-1.17h10.12ZM651.5,215.51l-.52,1.17h-4.41l-.78-1.17h5.71ZM649.42,220.21l-.52,1.41-.78-1.41h1.3ZM675.12,107.42h13.76l.52,1.17h-13.5l-.78-1.17ZM677.19,112.12h14.02l.52,1.17h-13.76l-.78-1.17ZM679.53,116.82h14.02l.52,1.17h-13.76l-.78-1.17ZM681.61,121.52h14.28l.52,1.18h-14.02l-.78-1.18ZM683.94,126.22h14.02l.52,1.17h-13.76l-.78-1.17ZM686.28,130.92h14.02l.52,1.17h-13.76l-.78-1.17ZM688.35,135.62h14.02l.52,1.17h-13.76l-.78-1.17ZM690.43,140.32h14.28l.52,1.17h-14.02l-.78-1.17ZM692.77,145.02h14.28l.52,1.17h-14.02l-.78-1.17ZM695.1,149.72h14.28l.52,1.17h-14.02l-.78-1.17ZM697.18,154.42h14.28l.52,1.17h-14.02l-.78-1.17ZM699.52,159.12h14.28l.52,1.17h-14.02l-.78-1.17ZM701.59,163.82h14.54l.52,1.17h-14.28l-.78-1.17ZM718.46,168.52l.52,1.17h-14.28l-.78-1.17h14.54ZM720.54,173.22l.52,1.17h-14.28l-.78-1.17h14.54ZM722.88,177.91l.52,1.17h-14.28l-.78-1.17h14.54ZM725.21,182.61l.52,1.17h-14.28l-.78-1.17h14.54ZM727.29,187.31l.52,1.17h-14.02l-.78-1.17h14.28ZM729.63,192.01l.52,1.17h-14.28l-.78-1.17h14.54ZM731.96,196.71l.52,1.18h-14.28l-.78-1.18h14.54ZM734.04,201.41l.52,1.17h-14.28l-.78-1.17h14.54ZM736.37,206.11l-.52,1.17h-13.24l-.78-1.17h14.54ZM734.3,210.81l-.78,1.17h-8.83l-.78-1.17h10.38ZM732.22,215.51l-.78,1.17h-4.41l-.78-1.17h5.97ZM730.14,220.21l-.78,1.41-.78-1.41h1.56ZM840.72,197.89c0,8.22,7.27,14.8,16.09,14.8,9.6,0,15.57-4.93,15.57-12.22,0-10.57-15.31-13.63-28.03-17.62-26.22-8.46-40.75-19.5-40.75-43.7s23.62-45.58,52.95-45.58c34.52,0,50.88,19.97,52.95,46.05h-35.82c0-7.99-5.45-14.57-16.09-14.57-8.31,0-16.35,4.46-16.35,13.63,0,10.57,14.28,12.45,27.51,15.98,27.77,7.52,40.75,21.62,40.75,43.7,0,24.91-23.36,45.58-52.69,45.58-34,0-53.21-20.68-53.21-46.05h37.12ZM856.81,237.36c24.14,0,43.87-17.62,43.87-39,0-23.73-15.57-32.43-39.45-38.54-15.31-3.99-28.55-7.28-28.55-21.15,0-12.22,10.12-20.21,24.14-20.21,16.09,0,21.54,8.69,23.88,14.57h19.47c-1.56-13.86-12.98-32.9-43.35-32.9-24.14,0-44.39,17.62-44.39,39.01,0,17.39,7.27,28.43,35.82,37.6,14.79,4.93,32.71,8.46,32.71,23.73,0,12.45-11.94,18.8-24.14,18.8-13.24-.23-21.54-7.05-23.88-14.8h-20.25c.52,17.62,19.47,32.9,44.13,32.9ZM815.02,136.56h15.05v1.18h-15.05v-1.18ZM815.02,141.26h15.05l.26,1.17h-15.31v-1.17ZM816.06,131.63h15.05l-.52,1.41h-15.05l.52-1.41ZM815.54,146.19h15.57l.52,1.17h-15.83l-.26-1.17ZM816.84,150.89h17.39l-.26-.23,1.56,1.41h-18.43l-.26-1.17ZM817.36,126.93h15.83l-.78,1.18h-15.31l.26-1.18ZM819.96,121.99h17.91l-1.82,1.41h-16.87l.78-1.41ZM819.44,155.83h21.03l2.08,1.17h-22.32l-.78-1.17ZM823.33,117.29h22.84l-2.86,1.18h-21.03l1.04-1.18ZM823.59,160.53h29.85l4.93,1.17h-33.48l-1.3-1.17ZM828.26,112.59h28.55v1.17h-30.11l1.56-1.17ZM829.56,165.23h40.75l3.89,1.41h-41.79l-2.85-1.41ZM836.05,107.66h20.77v1.17h-22.84l2.08-1.17ZM881.47,170.16l1.56,1.17h-41.27l-2.08-1.17h41.79ZM851.36,102.96h5.45v1.17h-11.68l6.23-1.17ZM888.48,174.86l1.3,1.41h-35.56l-3.89-1.41h38.16ZM856.81,223.03h29.59l-1.3,1.17h-28.29v-1.17ZM856.81,227.73h23.36l-1.82,1.17h-21.54v-1.17ZM856.81,232.66h13.24l-4.93,1.17h-8.31v-1.17ZM892.89,179.79l.52,1.17h-25.18l-2.85-1.17h27.51ZM872.65,218.09h18.43l-.78.94-.26.47h-20.51l3.12-1.41ZM895.23,184.49l.52,1.17h-18.95l-1.56-1.17h19.99ZM878.62,213.4h15.31l-.78,1.17h-15.83l1.3-1.17ZM879.92,189.43h17.13l.52,1.17h-16.87l-.78-1.17ZM881.99,208.46h14.28l-.52,1.41h-14.54l.78-1.41ZM882.51,194.13h15.31v1.17h-15.05l-.26-1.17ZM883.29,203.76h14.28l-.26,1.17h-14.28l.26-1.17ZM883.55,199.06h14.54l-.26,1.17h-14.28v-1.17Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    // 0 0 130 32
    // 0 0 98.03 38.05
    <svg
      viewBox=""
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        // d="M31.44,76.33L0,1.35h19.27l18.9,49.27L57.06,1.35h19.27l-31.44,74.98h-13.46ZM121.13,76.33l-12-42.08-12,42.08h-18.98L56.8,1.35h18.98l12.81,51.44h.46L102.67,1.35h12.92l13.63,51.44h.46L142.48,1.35h18.9l-21.35,74.98h-18.9ZM177.47,0c4.05,0,8.02.59,11.9,1.77,3.88,1.18,6.76,2.35,8.65,3.5l2.71,1.81-6.9,13.63c-.54-.36-1.3-.82-2.27-1.4-.97-.58-2.79-1.35-5.46-2.31-2.67-.97-5.16-1.46-7.46-1.46-2.85,0-5.04.6-6.58,1.81s-2.31,2.85-2.31,4.92c0,1.03.36,1.98,1.08,2.85.73.88,1.98,1.81,3.73,2.81,1.76,1,3.31,1.81,4.65,2.42,1.33.6,3.39,1.51,6.17,2.73,4.84,2.06,8.98,4.85,12.4,8.4,3.43,3.54,5.15,7.56,5.15,12.04s-.77,8.06-2.31,11.27-3.67,5.72-6.38,7.54c-2.7,1.82-5.68,3.17-8.96,4.04-3.27.88-6.8,1.31-10.6,1.31-3.28,0-6.49-.33-9.65-1-3.16-.67-5.79-1.49-7.92-2.48-2.11-1-4.02-1.98-5.71-2.96-1.7-.97-2.94-1.79-3.73-2.46l-1.19-1,8.54-14.35c.73.6,1.73,1.37,3,2.31,1.28.95,3.53,2.2,6.77,3.77,3.25,1.57,6.11,2.35,8.58,2.35,7.22,0,10.83-2.45,10.83-7.35,0-1.03-.27-1.98-.79-2.85-.52-.89-1.43-1.77-2.73-2.65-1.29-.88-2.44-1.57-3.44-2.08-1-.51-2.64-1.3-4.92-2.35-2.27-1.07-3.95-1.88-5.04-2.42-4.54-2.25-8.06-5.05-10.54-8.42-2.49-3.36-3.73-6.98-3.73-10.85,0-6.72,2.48-12.21,7.46-16.48,4.97-4.28,10.64-6.42,17-6.42Z"
      />
    </svg>
  )
}
