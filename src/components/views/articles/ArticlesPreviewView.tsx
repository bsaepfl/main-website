import { Article } from '@/types';
import ArticlePreview from '@/components/ArticlePreview';

interface ArticlesPreviewViewProps {
    articles: Article[];
}

export default function ArticlesPreviewView({ articles }: ArticlesPreviewViewProps) {
    return (
        <div className="w-full flex flex-col justify-start items-center bg-dark-100 text-dark-500 md:mt-[70px]">
            <div className="w-full max-w-[1400px] flex flex-col items-center py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base">
                <h2 className="max-w-[1100px] w-full font-bold text-3xl sm:text-4xl text-dark-500 indent-2 pb-8 xl:px-10">
                    Articles <span className="text-dark-200">Preview</span>
                </h2>
                <p className="max-w-[1100px] text-left w-full xl:px-10">
                    Discover our latest articles on various exciting topics!
                </p>
                <div className="w-full space-y-6">
                    {articles.map((article, index) => (
                        <div
                            key={article.id}
                            className="w-full bg-dark-100"
                        >
                            <ArticlePreview article={article} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}