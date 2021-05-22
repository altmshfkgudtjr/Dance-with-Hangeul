import { lazy, useState, useEffect } from 'react';
// components
import WordAnimeLayout from 'src/components/layout/WordAnime';
import CanvasLayout from 'src/components/layout/Canvas';
// hook
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
import useTransitionSuspense from 'src/lib/hooks/useTransitionSuspense';
// slices
import { selectTheme } from 'src/slices/theme';

const WordAnime = () => {
  const dispatch = useDispatch();
  const selectedTemplate = useSelector(state => state.template.selectedTemplate);
  const selectedTheme = useSelector(state => state.theme.selectedTheme);

  const [CanvasComponent, setCanvasComponent] = useState<any>(function () {
    return () => null;
  });
  const { isFullfilled, DelayedSuspense } = useTransitionSuspense({
    delay: 1000,
  });

  /** Canvas component init */
  useEffect(() => {
    if (!selectedTemplate.id) return;
    setCanvasComponent(templateLazyImport(selectedTemplate.id));
    dispatch(selectTheme(selectedTemplate.themes[0]));
  }, [dispatch, setCanvasComponent, selectedTemplate]);

  return (
    <WordAnimeLayout>
      <DelayedSuspense>
        <CanvasLayout isFullfilled={isFullfilled}>
          <CanvasComponent
            fontFamily={'Nanum Myeongjo'}
            color={selectedTheme.fgColor}
            backgroundColor={selectedTheme.bgColor}
          />
        </CanvasLayout>
      </DelayedSuspense>
    </WordAnimeLayout>
  );
};

const templateLazyImport = name => {
  return lazy(() => import(`src/modules/wordAnime/component/${name}`));
};

export default WordAnime;
