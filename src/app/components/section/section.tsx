import React from 'react';

interface SectionWrapper {
	type?: 'primary' | 'secondary';
	title?: string;
}

export const SectionWrapper = ({
	type = 'primary',
	title,
	...props
}: SectionWrapper & React.HTMLAttributes<HTMLDivElement>) => {
	const { className, children } = props;
	return (
		<div className={`${className} ${type === 'primary' ? 'bg-white' : type === 'secondary' ? 'bg-slate-50' : 'bg-white'} relative mx-auto h-max px-4 md:h-full md:px-6 lg:px-8`}>
			<span className='text-sm font-medium uppercase text-slate-600'>
				- {title ? title : 'Title Here'}
			</span>
			{children}
		</div>
	);
};