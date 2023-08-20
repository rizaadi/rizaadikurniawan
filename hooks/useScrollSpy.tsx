import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

export default function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const throttleMs = 100;

  const actionSectionScrollSpy = throttle(() => {
    const sections = document.getElementsByClassName('anchor');

    let prevBBox = null;
    let currentSectionId = activeSection;

    for (let index = 0; index < sections.length; index++) {
      const section = sections[index];

      if (!currentSectionId) {
        currentSectionId = section.getAttribute('href')?.split('#')[1] ?? null;
      }

      const bbox = section.getBoundingClientRect();
      const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0;
      const offset = Math.max(200, prevHeight / 4);

      // GetBoundingClientRect returns values relative to viewport
      if (bbox.top - offset < 0) {
        currentSectionId = section.getAttribute('href')?.split('#')[1] ?? null;
        prevBBox = bbox;
        continue;
      }

      // No need to continue loop, if last element has been detected
      break;
    }
    setActiveSection(currentSectionId);
  }, throttleMs);
  useEffect(() => {
    window.addEventListener('scroll', actionSectionScrollSpy);
    actionSectionScrollSpy();
    return () => {
      window.removeEventListener('scroll', actionSectionScrollSpy);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return activeSection;
}
