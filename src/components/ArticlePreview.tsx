// components/ArticlePreview.tsx
import Link from 'next/link';
import { Article } from '@/types';

interface ArticlePreviewProps {
    article: Article;
}

export default function ArticlePreview({ article }: ArticlePreviewProps) {
    return (
        <Link href={`/articles/${article.id}`} className='hover:opacity-75'>
            <div
                className="relative flex flex-col w-full transition-all duration-100 transform rounded-lg overflow-hidden bg-dark-900 bg-opacity-10 group hover:bg-opacity-75 col-span-1 md:col-span-2"
                style={{ cursor: 'pointer' }}
            >
                <div className="flex flex-col items-center w-full pt-12 pb-20 transition-all duration-100 bg-dark-900">
                    <div className="w-9/12 flex flex-col gap-8">
                        <div className="w-full text-left">
                            <span className="text-white sm:text-base text-sm font-semibold pointer-events-none">
                                {article.title}
                            </span>
                        </div>
                        <div className="w-full text-left">
                            <span className="text-white text-sm italic font-normal pointer-events-none">
                                Last Updated : {article.date}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}