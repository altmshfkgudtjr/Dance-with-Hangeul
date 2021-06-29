// components
import WordAnimeLayout from 'src/components/layout/WordAnime';
// 한글 템플릿 경로만 수정해서 테스트하면 됩니다.
import WordComponent from 'src/modules/wordAnime/component/Julug';

const LabPage = () => {
  return (
    <WordAnimeLayout>
      <WordComponent
        subBackgroundColor="#123456" />
    </WordAnimeLayout>
  );
};

export default LabPage;
