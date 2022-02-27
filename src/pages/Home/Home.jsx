import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import NavTabs from '../../components/NavTabs/NavTabs';
import Loading from '../../components/Loading/Loading';
import { getArticles } from '../../services/articleApi';
import ArticleList from '../../components/ArticleList/ArticleList';
import { getTags } from '../../services/tagApi';
import TagList from '../../components/TagList/TagList';

const tabs = [
  {
    id: 1,
    name: 'Your Feed'
  },
  {
    id: 2,
    name: 'Global Feed'
  }
];

const Home = () => {

  const [activeTab, setActiveTab] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  const handleTabClick = id => {
    setActiveTab(id);
  }

  useEffect(() => {
    (async () => {
      const response = await getArticles();
      setArticles(response);
      setIsLoading(false);
    })();
    (async () => {
      const response = await getTags();
      setTags(response);
    })();
  }, []);

  return (
    <>
      <Banner />
      <div className='container mt-2'>
        <div className='row'>
          <div className='col-md-9'>
            <NavTabs tabs={tabs} handleTabClick={handleTabClick} activeTab={activeTab} />
            {isLoading &&
              <div className='text-center mt-5'>
                <Loading width={120} />
              </div>}
            {(articles.length > 0 && !isLoading) &&
              <div className='mb-4'>
                <ArticleList articles={articles} />
              </div>}
          </div>
          <div className='col-md-3'>
            <div className='card border-success mt-4'>
              <div className='card-body p-2'>
                <div className='card-title'>Popular Tags</div>
                <TagList tags={tags} justifyContent='start' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;