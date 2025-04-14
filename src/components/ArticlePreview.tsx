import Link from "next/link"
import Image from "next/image"
import type { Article } from "@/types"

interface ArticlePreviewProps {
    article: Article
}

export default function ArticlePreview({ article }: ArticlePreviewProps) {
    return (
        <Link href={`/articles/${article.id}`} className="hover:opacity-75">
            <div
                className="relative flex flex-col w-full transition-all duration-100 transform rounded-lg overflow-hidden bg-gray-500 bg-opacity-30 group hover:bg-opacity-40 col-span-1 md:col-span-2"
                style={{ cursor: "pointer" }}
            >
                {article.image ? (
                    <div className="flex flex-row w-full items-start">
                        {/* Image Container - Fixed to 600x400 */}
                        <div className="relative w-[600px] h-[200px]">
                            <Image
                                src={article.image || "/placeholder.svg"}
                                alt={article.title}
                                fill
                                sizes="600px"
                                style={{
                                    objectFit: "cover",
                                }}
                                className="w-[600px] h-[200px]"
                            />
                            {article.sponsor && (
                                <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2 z-10">
                                    Sponsored by {article.sponsor}
                                </div>
                            )}
                        </div>
                        {/* Text Container */}
                        <div className="flex-1 p-4 flex flex-col items-center">
                            <div className="w-9/12 flex flex-col gap-8">
                                <div className="w-full text-left">
                                    <span className="text-white sm:text-3xl text-xl font-semibold pointer-events-none">
                                        {article.title}
                                    </span>
                                </div>
                                <div className="w-full text-left">
                                    <span className="text-white text-xl italic font-normal pointer-events-none">
                                        Last Updated : {article.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center w-full pt-12 pb-20 transition-all duration-100">
                        <div className="w-9/12 flex flex-col gap-8">
                            <div className="w-full text-left">
                                <span className="text-white sm:text-4xl text-2xl font-semibold pointer-events-none">
                                    {article.title}
                                </span>
                            </div>
                            <div className="w-full text-left">
                                <span className="text-white text-xl italic font-normal pointer-events-none">
                                    Last Updated : {article.date}
                                </span>
                                {article.sponsor && <div className="mt-2 text-white text-xl">Sponsored by {article.sponsor}</div>}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Link>
    )
}