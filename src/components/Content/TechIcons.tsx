import clsx from 'clsx';
import React from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiAndroid,
  SiDart,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiJetpackcompose,
  SiKotlin,
  SiLaravel,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPrettier,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from 'react-icons/si';

export type TechListType = keyof typeof techList;
export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex list-none ')}>
      {techs.map((tech) => {
        if (!techList[tech]) return;
        const currentIcon = techList[tech];
        return (
          <li key={currentIcon.name} className='px-1'>
            <currentIcon.icon />
          </li>
        );
      })}
    </ul>
  );
}

const techList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  scss: {
    icon: SiSass,
    name: 'SCSS',
  },
  javascript: {
    icon: SiJavascript,
    name: 'JavaScript',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  prettier: {
    icon: SiPrettier,
    name: 'Prettier',
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: 'Google Analytics',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion API',
  },
  figma: {
    icon: SiFigma,
    name: 'Figma',
  },
  flutter: {
    icon: SiFlutter,
    name: 'Flutter',
  },
  laravel: {
    icon: SiLaravel,
    name: 'Laravel',
  },
  php: {
    icon: SiPhp,
    name: 'Php',
  },
  dart: {
    icon: SiDart,
    name: 'Dart',
  },
  express: {
    icon: SiExpress,
    name: 'Express',
  },
  android: {
    icon: SiAndroid,
    name: 'Andorid',
  },
  kotlin: {
    icon: SiKotlin,
    name: 'Kotlin',
  },
  tensorflow: {
    icon: SiTensorflow,
    name: 'Tensorflow',
  },
  python: {
    icon: SiPython,
    name: 'Python',
  },
  jetpackCompose: {
    icon: SiJetpackcompose,
    name: 'Jetpack Compose',
  },
};
export default TechIcons;
