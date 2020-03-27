import React from 'react';
import style from './style.css';

export default function View(props) {
  return (
    <div className={style.iconWrapper} style={{ height: `${props.size}px`, width: `${props.size}px` }}>
      <svg viewBox="0 -31 511.99896 511" xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink">
        <linearGradient id="linear0" gradientUnits="userSpaceOnUse" x1="-.001" x2="511.999479356" y1="225.491809678"
                        y2="225.491809678">
          <stop offset="0" stopColor="#00f2fe"/>
          <stop offset=".0208" stopColor="#03effe"/>
          <stop offset=".2931" stopColor="#24d2fe"/>
          <stop offset=".5538" stopColor="#3cbdfe"/>
          <stop offset=".7956" stopColor="#4ab0fe"/>
          <stop offset="1" stopColor="#4facfe"/>
        </linearGradient>
        <path d="m257.007812 217.492188c21.539063 0 39 17.460937 39 39 0 21.535156-17.460937 38.996093-39 38.996093-21.539062 0-39-17.460937-39-38.996093 0-21.539063 17.460938-39 39-39zm0-74.996094c62.855469 0 113.996094 51.136718 113.996094 113.996094 0 62.855468-51.140625 113.996093-113.996094 113.996093-62.855468 0-113.996093-51.140625-113.996093-113.996093 0-62.859376 51.140625-113.996094 113.996093-113.996094zm0 39.996094c-40.800781 0-73.996093 33.195312-73.996093 74 0 40.800781 33.195312 73.996093 73.996093 73.996093 40.800782 0 73.996094-33.195312 73.996094-73.996093 0-40.804688-33.195312-74-73.996094-74zm235.285157 20.429687c-6.390625-9.007813-18.875-11.132813-27.882813-4.742187-9.011718 6.390624-11.132812 18.875-4.746094 27.882812 2.070313 2.917969 4.042969 5.8125 5.859376 8.601562 8.632812 13.257813 8.632812 30.394532 0 43.652344-6.027344 9.253906-3.410157 21.644532 5.84375 27.671875 3.371093 2.195313 7.152343 3.242188 10.898437 3.242188 6.535156 0 12.941406-3.199219 16.777344-9.085938 17.269531-26.519531 17.269531-60.789062 0-87.304687-2.105469-3.234375-4.375-6.570313-6.75-9.917969zm-78.257813 136.035156c-34.777344 32.628907-90.347656 71.527344-157.589844 71.527344-97.101562 0-177.605468-83-209.863281-132.042969-8.769531-13.335937-8.769531-30.566406 0-43.902344 32.257813-49.042968 112.761719-132.042968 209.863281-132.042968 15.972657 0 32.210938 2.238281 48.265626 6.648437 10.644531 2.925781 21.65625-3.339843 24.582031-13.988281 2.925781-10.652344-3.339844-21.65625-13.988281-24.582031-19.503907-5.359375-39.308594-8.074219-58.859376-8.074219-52.171874 0-103.777343 18.691406-153.375 55.554688-48.988281 36.410156-79.191406 78.21875-89.902343 94.503906-17.558594 26.691406-17.558594 61.179687 0 87.867187 10.710937 16.285157 40.914062 58.09375 89.902343 94.503907 49.597657 36.863281 101.203126 55.554687 153.375 55.554687 80.324219 0 144.917969-44.785156 184.960938-82.359375 8.054688-7.558594 8.453125-20.214844.898438-28.269531-7.5625-8.054688-20.214844-8.457031-28.269532-.898438zm-25.722656-226.460937h40.175781l-26.871093 74.488281c-.417969.914063-.609376 1.75-.613282 2.507813-.015625 3.148437 2.714844 5.015624 6.207032 5 2.457031-.007813 5.050781-.996094 6.761718-2.699219l94.410156-108.007813c8.195313-9.472656 1.578126-24.289062-11-24.289062h-46.316406l36.59375-58.996094h-70.980468l-46.082032 82.164062c-7.53125 13.421876 2.246094 29.832032 17.714844 29.832032zm0 0"
              fill="url(#linear0)"/>
      </svg>
    </div>
  );
}