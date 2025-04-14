// api/articles.ts
import path from 'path';
import { Article } from '../types';
import fs from 'fs';
import matter from 'gray-matter';

export async function getArticles(): Promise<Article[]> {
    // Simulation d'un appel API
    const articlesBaseDir = path.join(process.cwd(), 'public', 'articles');
    const articleIds = fs.readdirSync(articlesBaseDir);

    const articles = articleIds.map((id) => {
        const articleDir = path.join(articlesBaseDir, id);
        const mdFilePath = path.join(articleDir, 'index.md');
        const imagePath = path.join(articleDir, 'header.jpg');

        // Read the markdown file
        const fileContent = fs.readFileSync(mdFilePath, 'utf-8');
        const { data, content } = matter(fileContent);

        //Ensure date is a string
        const dateString = typeof data.date === 'string' ? data.date : data.date.toISOString().split('T')[0];

        // Check if image exists and set its public path
        const imagePublicPath = fs.existsSync(imagePath)
            ? `/articles/${id}/header.jpg`
            : undefined;

        return {
            id,
            title: data.title,
            body: content,
            date: dateString,
            authors: data.authors,
            image: imagePublicPath,
            sponsor: data.sponsor ? data.sponsor : undefined,
        };
    });

    return articles;
}

export async function getArticleById(id: string): Promise<Article | null> {
    const articles = await getArticles();
    return articles.find((article) => article.id === id) || null;
}