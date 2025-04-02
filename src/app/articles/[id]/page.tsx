// app/articles/[id]/page.tsx
import { getArticles, getArticleById } from '../../../api/articles';
import { Article } from '../../../types';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

interface ArticlePageProps {
    params: { id: string };
}

export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((article) => ({
        id: article.id,
    }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const article = await getArticleById(params.id);

    if (!article) {
        return (
            <div>
                <Header />
                <div className="w-full flex flex-col justify-start items-center bg-dark-100 text-dark-500 md:mt-[70px]">
                    <div className="w-full max-w-[1400px] flex flex-col items-center py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base">
                        <p>Article not found</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="w-full flex flex-col justify-start items-center bg-dark-100 text-dark-500 md:mt-[70px]">
                <div className="w-full max-w-[1400px] flex flex-col items-center py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base">
                    <h1 className="max-w-[1100px] w-full font-bold text-4xl sm:text-5xl text-dark-500 indent-2 pb-8 xl:px-10">
                        {article.title}
                    </h1>
                    <p className="max-w-[1100px] w-full text-left xl:px-10 text-white text-sm italic">
                        Last Updated: {article.date}
                    </p>
                    <div className="max-w-[1100px] w-full text-left xl:px-10 text-white prose prose-invert">
                        <ReactMarkdown
                            components={{
                                img: ({ src, alt }) => {
                                    if (!src) {
                                        return <span>Image not available</span>; // Fallback if src is undefined
                                    }
                                    const imageName = src.split('/').pop(); // e.g., 'image.png'
                                    return (
                                        <Image
                                            src={`/articles/${params.id}/${imageName}`}
                                            alt={alt || 'Article image'}
                                            width={200}
                                            height={100}
                                            layout="responsive"
                                            className="rounded-lg"
                                        />
                                    );
                                },
                                h1: ({ children }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>,
                                h2: ({ children }) => <h2 className="text-2xl font-semibold text-white mt-6 mb-3">{children}</h2>,
                                p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                                ul: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">{children}</blockquote>
                                ),
                                pre: ({ children }) => (
                                    <pre className="mb-4 whitespace-pre-wrap break-words overflow-hidden">
                                        {children}
                                    </pre>
                                ),
                            }}
                        >
                            {article.body}
                        </ReactMarkdown>
                    </div>
                    <div className="max-w-[1100px] w-full text-left xl:px-10">
                        <span className="text-white font-semibold">Authors: </span>
                        <span className="text-white">{article.authors.join(', ')}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}