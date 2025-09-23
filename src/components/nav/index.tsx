import React, { useState, useEffect } from 'react';
import Logo from '@/assets/images/Logo.png';
import '../../styles/component.css';
import ActionButton from '@/utils/ActionButton';
import CustomLink from './Link';
import { SectionId, navlinks } from '@/types/type';

const NavBar = () => {
	const [activeSection, setActiveSection] = useState<SectionId | null>(
		navlinks[0]?.id || null
	);

	const handleSetActive = (sectionId: SectionId) => {
		setActiveSection(sectionId);
	};
	return (
		<nav className='relative h-[88px]'>
			<div className='fixed top-0 z-30 w-full bg-white shadow-md'>
				<div className='mx-auto w-5/6 flex-between'>
					<div className='flex-between gap-20 w-full'>
						{/* Логотип */}
						<img src={Logo} alt='Logo' className='h-10' />

						{/* Меню */}
						<div className='flex-between gap-8 text-sm'>menu</div>

						{/* Кнопка Sign in */}
						<div className='flex-between gap-8'>
							<button className='rounded-md bg-amber-700 px-10 py-2 cursor-pointer hover:bg-amber-500 hover:text-white animate'>
								Sign in
							</button>
							<ActionButton to='contactus' variant='link'>
								Become a Member
							</ActionButton>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
