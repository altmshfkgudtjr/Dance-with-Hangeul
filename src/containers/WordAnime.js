import { lazy, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// components
import WordAnimeLayout from 'src/components/layout/WordAnime';
import CanvasLayout from 'src/components/layout/Canvas';
// hook
import useTransitionSuspense from 'src/lib/hooks/useTransitionSuspense';

const WordAnime = () => {
  const selectedTemplate = useSelector(state => state.template.selectedTemplate);
  const selectedTheme = useSelector(state => state.template.selectedTheme);

  const [CanvasComponent, setCanvasComponent] = useState(function () {
    return () => null;
  });
  const { isFullfilled, DelayedSuspense } = useTransitionSuspense({
    delay: 1000,
  });

  /** Canvas component init */
  useEffect(() => {
    if (!selectedTemplate.id) return;
    setCanvasComponent(templateLazyImport(selectedTemplate.id));
  }, [setCanvasComponent, selectedTemplate]);

  return (
    <WordAnimeLayout>
      <DelayedSuspense>
        <CanvasLayout isFullfilled={isFullfilled}>
          <CanvasComponent color={selectedTheme.fgColor} backgroundColor={selectedTheme.bgColor} />
        </CanvasLayout>
      </DelayedSuspense>
    </WordAnimeLayout>
  );
};

const templateLazyImport = name => {
  return lazy(() => import(`src/modules/wordAnime/component/${name}`));
};

export default WordAnime;
