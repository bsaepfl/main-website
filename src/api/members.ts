import fs from 'fs';
import path from 'path';
import { Member } from '../types';

// Fetch all members
export async function getMembers(): Promise<Member[]> {
    const membersBaseDir = path.join(process.cwd(), 'public', 'members');
    const memberIds = fs.readdirSync(membersBaseDir);

    const members = memberIds.map((id) => {
        const memberDir = path.join(membersBaseDir, id);
        const infoFilePath = path.join(memberDir, 'info.json');
        const fileContent = fs.readFileSync(infoFilePath, 'utf-8');
        const info = JSON.parse(fileContent);

        const imagePath = `/members/${id}/image.jpg`;
        // Check if image exists else set to undefined
        const imageExists = fs.existsSync(path.join(memberDir, 'image.jpg'));
        const imagePublicPath = imageExists ? imagePath : undefined;

        return {
            id,
            name: info.name,
            section: info.section,
            image: imagePublicPath,
            twitter: info.twitter,
            github: info.github,
            linkedin: info.linkedin,
        };
    });

    return members;
}

// Fetch a member by ID
export async function getMemberById(id: string): Promise<Member | null> {
    const members = await getMembers();
    return members.find((member) => member.id === id) || null;
}

// Fetch all members in a specific section
export async function getMembersInSection(section: string): Promise<Member[]> {
    const members = await getMembers();
    return members.filter((member) => member.section === section);
}

// Fetch all unique sections
export async function getSections(): Promise<string[]> {
    const members = await getMembers();
    const sections = new Set<string>();
    members.forEach((member) => sections.add(member.section));
    return Array.from(sections);
}