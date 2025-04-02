import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticlesPreviewView from '@/components/views/articles/ArticlesPreviewView'; // Assurez-vous que le chemin est correct
import { Article } from '../../types';
import { getArticles } from '../../api/articles';

export default async function ArticlesPage() {
    const articles: Article[] = await getArticles(); // Récupération des articles

    return (
        <div>
            <Header />
            <div>
                <ArticlesPreviewView articles={articles} />
            </div>
            <Footer />
        </div>
    );
}