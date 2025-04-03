import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MemberView from '@/components/views/members/MemberView'; // Assurez-vous que le chemin est correct
import { Member } from '../../types';
import { getMembers } from '../../api/members';

export default async function ArticlesPage() {
    const members: Member[] = await getMembers(); // Récupération des articles

    return (
        <div>
            <Header />
            <div>
                <MemberView members={members} />
            </div>
            <Footer />
        </div>
    );
}