import clsx from 'clsx';
import * as React from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiDart,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGoogleanalytics,
  SiJavascript,
  SiLaravel,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

function TechIcons({ className, techs }) {
  return (
    <ul className={clsx(className, 'flex gap-2')}>
      {techs.map((tech) => {
        // if (!techList[tech]) return;
        const currentIcon = techList[tech];
        return (
          <li key={currentIcon.name}>
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
};
export default TechIcons;
