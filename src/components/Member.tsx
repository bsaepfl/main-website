import React from 'react';
import Image from 'next/image';
import Twitter from '../images/logo/Twitter'; // Assuming this is in the same directory
import LinkedIn from '../images/logo/LinkedIn'; // Assuming this is available
import Github from '../images/logo/Github'; // To be created below
import type { Member } from '@/types';

interface MemberProps {
    member: Member;
}

const Member: React.FC<MemberProps> = ({ member }) => {
    const imageSrc = member.image || '/defaultImage.png';

    return (
        <div className="flex flex-col items-center">
            {/* Image container with hover effects */}
            <div className="group relative w-[200px] h-[200px] overflow-hidden rounded-lg">
                <Image
                    src={imageSrc}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    style={{ objectFit: 'cover' }} // Fallback for older browsers
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg" />
                {/* Social media icons on hover */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {member.twitter && <Twitter link={member.twitter} />}
                    {member.github && <Github link={member.github} />}
                    {member.linkedin && <LinkedIn link={member.linkedin} />}
                </div>
            </div>
            {/* Member's name */}
            <h3 className="mt-2 text-dark-500 font-semibold text-center">{member.name}</h3>
        </div>
    );
};

export default Member;