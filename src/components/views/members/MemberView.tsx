import React from 'react';
import Member from '@/components/Member';

interface MemberViewProps {
    members: Member[];
}

const MemberView: React.FC<MemberViewProps> = ({ members }) => {

    // Step 1: Group members by section, preserving original order
    const groupedMembers = members.reduce((acc, member) => {
        if (!acc[member.section]) {
            acc[member.section] = [];
        }
        acc[member.section].push(member);
        return acc;
    }, {} as Record<string, Member[]>);

    // Step 2: Calculate the smallest numeric ID for each section
    const sectionMinIds = Object.entries(groupedMembers).map(([section, members]) => {
        const numericIds = members.map(m => {
            const num = Number(m.id);
            if (isNaN(num)) {
                console.warn(`Invalid numeric ID: ${m.id} in section ${section}`);
                return Infinity; // Handle non-numeric IDs gracefully
            }
            return num;
        });
        const minId = Math.min(...numericIds);
        return { section, minId };
    });

    // Step 3: Sort sections by their minimum ID
    const sortedSections = sectionMinIds
        .sort((a, b) => a.minId - b.minId)
        .map(item => [item.section, groupedMembers[item.section]] as [string, Member[]]);

    // Step 4: Render the sections
    return (
        <div className="w-full flex flex-col justify-start items-center bg-dark-100 text-dark-500">
            <div className="w-full max-w-[1100px] flex flex-col items-center py-20 px-4 sm:px-10 gap-8 text-sm sm:text-base">
                {sortedSections.map(([section, sectionMembers]) => (
                    <div key={section} className="w-full">
                        <h2 className="font-bold text-2xl sm:text-3xl text-dark-500 mb-4">
                            {section}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {sectionMembers.map((member) => (
                                <Member key={member.id} member={member} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberView;