import { lazy } from 'react';
// components
import WordAnimeLayout from 'src/components/layout/WordAnime';
// hook
import useTransitionSuspense from 'src/lib/hooks/useTransitionSuspense';

const WordAnime = () => {
  const name = 'Tong'; // Example Template Name

  const templates = templateLazyImport(
    () => import(`src/modules/wordAnime/component/${name}`),
    name,
  );
  const CanvasComponent = templates[name];

  const { isPending, DelayedSuspense } = useTransitionSuspense({
    delay: 1000,
  });

  return (
    <WordAnimeLayout>
      {isPending && <div>Template Loading...</div>}

      <DelayedSuspense>
        <CanvasComponent colorSet="#12b886" />
      </DelayedSuspense>
    </WordAnimeLayout>
  );
};

const templateLazyImport = (factory, name) => {
  return {
    [name]: lazy(() => factory().then(module => ({ default: module[name] }))),
  };
};

export default WordAnime;
