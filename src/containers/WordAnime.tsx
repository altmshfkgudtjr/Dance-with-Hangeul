import { lazy, useState, useEffect } from 'react';
// components
import WordAnimeLayout from 'src/components/layout/WordAnime';
import CanvasLayout from 'src/components/layout/Canvas';
import TemplateLoading from 'src/components/common/TemplateLoading';
// hook
import { useSelector, useDispatch } from 'src/lib/hooks/useStore';
import useTransitionSuspense from 'src/lib/hooks/useTransitionSuspense';
// slices
import { selectTheme } from 'src/slices/theme';

const WordAnime = ({ isShow }: Props) => {
  const TransitionTime = 400;

  const dispatch = useDispatch();
  const selectedTemplate = useSelector(state => state.template.selectedTemplate);
  const selectedTheme = useSelector(state => state.theme.selectedTheme);

  const [isAnime, setIsAnime] = useState<boolean>(false);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const [CanvasComponent, setCanvasComponent] = useState<any>(function () {
    return () => null;
  });
  const { isPending, isFullfilled, DelayedSuspense } = useTransitionSuspense({
    delay: 1000,
  });

  /** Canvas component init */
  useEffect(() => {
    if (!selectedTemplate.id) return;
    // setCanvasComponent(templateLazyImport(selectedTemplate.id));
    // dispatch(selectTheme(selectedTemplate.themes[0]));
  }, [dispatch, setCanvasComponent, selectedTemplate]);

  useEffect(() => {
    if (!isShow) setIsAnime(true);
    else setIsDisplay(true);

    const timer = window.setTimeout(() => {
      setIsAnime(false);
      setIsDisplay(isShow);
    }, TransitionTime);
    return () => window.clearTimeout(timer);
  }, [isShow, setIsAnime, setIsDisplay]);

  return (
    <>
      {isDisplay && (
        <>
          <TemplateLoading isShow={isShow} isClose={!isPending} />
          <WordAnimeLayout time={TransitionTime} isAnime={isAnime}>
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
        </>
      )}
    </>
  );
};

const templateLazyImport = (name: string) => {
  return lazy(() => import(`src/modules/wordAnime/component/${name}`));
};

interface Props {
  isShow: boolean;
}

export default WordAnime;
