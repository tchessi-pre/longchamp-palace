import { ChevronDown, MapPin, Clock, Star } from 'lucide-react';
import { WineGlass, Fork, Leaf } from './ChalkIllustrations';
import { useEffect, useState } from 'react';
import interiorImg from '@/assets/interieur.jpg';
import logo from '@/assets/logo.png';

const HeroSection = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setLoaded(true), 100);
		return () => clearTimeout(t);
	}, []);

	return (
		<section
			id='accueil'
			className='relative min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-0'
		>
			{/* Background image */}
			<div className='absolute inset-0'>
				<img
					src={interiorImg}
					alt='Intérieur Longchamp Palace'
					className='w-full h-full object-cover transition-transform [transition-duration:8s] ease-out'
					style={{ transform: loaded ? 'scale(1.05)' : 'scale(1.15)' }}
				/>
				{/* Dark overlay */}
				<div className='absolute inset-0 bg-background/50' />
				{/* Gradient overlays */}
				<div className='absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/20' />
				<div className='absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-transparent' />
				<div
					className='absolute inset-0'
					style={{
						background:
							'radial-gradient(1100px 520px at 50% 34%, hsla(var(--primary) / 0.12) 0%, transparent 0%), radial-gradient(900px 520px at 14% 20%, hsla(var(--chalk) / 0.07) 0%, transparent 55%), radial-gradient(900px 520px at 86% 20%, hsla(var(--chalk) / 0.06) 0%, transparent 55%)',
					}}
				/>
			</div>

			{/* Curtain overlay */}
			{/* <div
				className='absolute inset-0 bg-background z-30 pointer-events-none transition-opacity [transition-duration:2s] ease-out'
				style={{ opacity: loaded ? 0 : 1 }}
			/> */}

			{/* Warm ambient glow */}
			<div className='absolute inset-0 pointer-events-none overflow-hidden'>
				<div
					className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px] transition-all [transition-duration:3s] ease-out'
					style={{
						width: loaded ? 800 : 0,
						height: loaded ? 600 : 0,
						opacity: loaded ? 1 : 0,
						background:
							'radial-gradient(circle, hsla(var(--primary) / 0.15) 0%, transparent 70%)',
					}}
				/>
			</div>

			{/* Chalk illustrations */}
			<WineGlass
				className='pointer-events-none absolute top-24 sm:top-28 left-3 sm:left-6 md:left-14 lg:left-20 w-8 sm:w-10 md:w-14 lg:w-16 text-foreground/15 animate-float transition-all duration-1000 ease-out'
				style={{
					opacity: loaded ? 0.1 : 0,
					transform: loaded ? 'translateX(0)' : 'translateX(-40px)',
					transitionDelay: '1.35s',
				}}
			/>
			<Fork
				className='pointer-events-none absolute top-28 sm:top-40 right-3 sm:right-8 md:right-16 lg:right-24 w-6 sm:w-7 md:w-10 lg:w-12 text-foreground/10 animate-float transition-all duration-1000 ease-out'
				style={{
					opacity: loaded ? 0.07 : 0,
					transform: loaded ? 'translateX(0)' : 'translateX(40px)',
					transitionDelay: '1.55s',
					animationDelay: '2s',
				}}
			/>
			<Leaf
				className='pointer-events-none absolute bottom-24 sm:bottom-32 left-4 sm:left-10 md:left-24 lg:left-32 w-10 sm:w-14 md:w-20 lg:w-24 text-foreground/10 animate-float transition-all duration-1000 ease-out'
				style={{
					opacity: loaded ? 0.06 : 0,
					transform: loaded ? 'translateX(0)' : 'translateX(-40px)',
					transitionDelay: '1.8s',
					animationDelay: '4s',
				}}
			/>
			{/* Corner ornaments */}
			{[
				{
					pos: 'top-7 left-7 sm:top-9 sm:left-9 md:top-16 md:left-14 lg:top-24 lg:left-24 border-t border-l sm:border-t-2 sm:border-l-8 rounded-tl-3xl',
					// dot: 'top-0 left-0',
				},
				{
					pos: 'top-7 right-7 sm:top-9 sm:right-9 md:top-16 md:right-14 lg:top-24 lg:right-24 border-t border-r sm:border-t-2 sm:border-r-8 rounded-tr-3xl',
					// dot: 'top-0 right-0',
				},
				{
					pos: 'bottom-7 left-7 sm:bottom-9 sm:left-9 md:bottom-16 md:left-14 lg:bottom-24 lg:left-24 border-b border-l sm:border-b-2 sm:border-l-8 rounded-bl-3xl',
					// dot: 'bottom-0 left-0',
				},
				{
					pos: 'bottom-7 right-7 sm:bottom-9 sm:right-9 md:bottom-16 md:right-14 lg:bottom-24 lg:right-24 border-b border-r sm:border-b-8 sm:border-r-2 rounded-br-3xl',
					// dot: 'bottom-0 right-0',
				},
			].map(({ pos }, i) => (
				<div
					key={i}
					className={`absolute ${pos} w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 border-primary/30 pointer-events-none transition-[opacity,transform] duration-700 ease-out drop-shadow-[0_10px_28px_hsla(var(--primary)/0.18)]`}
					style={{
						opacity: loaded ? 1 : 0,
						transform: loaded ? 'scale(1)' : 'scale(0.88)',
						transitionDelay: `${1 + i * 0.15}s`,
					}}
				>
				</div>
			))}

			{/* Content */}
			<div className='relative z-10 text-center px-4 sm:px-6 w-full max-w-6xl mx-auto'>
				<div
					className='mx-auto w-full max-w-5xl rounded-3xl border border-primary/10 bg-#000000ff/20 backdrop-blur-sm shadow-[0_30px_120px_rgba(0, 0, 0, 0.329)] px-5 sm:px-8 md:px-10 py-10 sm:py-12 md:py-14 transition-all duration-1000 ease-out'
					style={{
						opacity: loaded ? 1 : 0,
						transform: loaded ? 'translateY(0)' : 'translateY(24px)',
						transitionDelay: '0.2s',
					}}
				>
					<div
						className='flex items-center justify-center gap-4 my-6 md:my-2 transition-all duration-1000 ease-out'
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
							transitionDelay: '1s',
						}}
					>
						<div className='h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-primary/50' />
						<img
							src={logo}
							alt='Longchamp Palace'
							className='h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain invert opacity-90 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]'
							loading='eager'
							width={40}
							height={40}
						/>
						<div className='h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-primary/50' />
					</div>

					{/* Tagline */}
					<div
						className='mb-6 md:mb-8 transition-all duration-1000 ease-out'
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
							transitionDelay: '0.3s',
						}}
					>
						<div className='inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md'>
							<MapPin className='w-3.5 h-3.5 text-primary' />
							<span className='text-primary font-elegant text-xs md:text-sm tracking-[0.3em] uppercase'>
								Marseille — Depuis 2015
							</span>
						</div>
					</div>

					{/* Main title */}
					<h1
						className='font-limelight mb-3 leading-[0.85] tracking-tight transition-all [transition-duration:1.2s] ease-out inline-block bg-primary text-black rounded-xl px-4 sm:px-6 py-4 sm:py-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]'
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded
								? 'translateY(0) scale(1)'
								: 'translateY(30px) scale(0.95)',
							transitionDelay: '0.5s',
						}}
					>
						<span
							className='block text-[clamp(2.4rem,9vw,6.25rem)] drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]'
						>
							LONGCHAMP
						</span>
						<span
							className='block mt-1 text-[clamp(2.8rem,10.5vw,7.5rem)] drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]'
						>
							PALACE
						</span>
					</h1>

					{/* Decorative line */}
					{/* <div
						className='flex items-center justify-center gap-4 my-6 md:my-8 transition-all duration-1000 ease-out'
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
							transitionDelay: '1s',
						}}
					>
						<div className='h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-primary/50' />
						<img
							src={logo}
							alt='Longchamp Palace'
							className='h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain invert opacity-90 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]'
							loading='eager'
							width={40}
							height={40}
						/>
						<div className='h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-primary/50' />
					</div> */}

					{/* Subtitle */}
					<div
						className='mb-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 transition-all duration-1000 ease-out'
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'translateY(0)' : 'translateY(15px)',
							transitionDelay: '1.1s',
						}}
					>
						<span className='inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[10px] sm:text-xs md:text-sm font-elegant tracking-[0.22em] uppercase text-foreground/75'>
							<span className='h-1.5 w-1.5 rounded-full bg-primary/70' />
							Restaurant
						</span>
						<span className='inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[10px] sm:text-xs md:text-sm font-elegant tracking-[0.22em] uppercase text-foreground/75'>
							<span className='h-1.5 w-1.5 rounded-full bg-primary/70' />
							Bistrot
						</span>
						<span className='inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[10px] sm:text-xs md:text-sm font-elegant tracking-[0.22em] uppercase text-foreground/75'>
							<span className='h-1.5 w-1.5 rounded-full bg-primary/70' />
							Terrasse
						</span>
						<span className='inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[10px] sm:text-xs md:text-sm font-elegant tracking-[0.22em] uppercase text-foreground/75'>
							<span className='h-1.5 w-1.5 rounded-full bg-primary/70' />
							Expositions de tableaux
						</span>
					</div>

					{/* Rating badge */}
					<div
						className='flex items-center justify-center gap-2 mb-10 sm:mb-12 transition-all duration-1000 ease-out'
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'translateY(0)' : 'translateY(10px)',
							transitionDelay: '1.2s',
						}}
					>
						<div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/15'>
							<div className='flex gap-0.5'>
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className={`w-3 h-3 ${i < 4
											? 'text-primary fill-primary'
											: 'text-primary/40 fill-primary/40'
											}`}
									/>
								))}
							</div>
							<span className='text-foreground/70 font-elegant text-xs tracking-wider'>
								4,41 / 5 — 622 avis
							</span>
						</div>
					</div>

					{/* CTA Buttons */}
					<div
						className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-1000 ease-out'
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'translateY(0)' : 'translateY(20px)',
							transitionDelay: '1.4s',
						}}
					>
						<a
							href='#cuisine'
							className='btn-gold rounded-full px-8 sm:px-10 py-3 sm:py-3.5 text-xs sm:text-sm tracking-widest uppercase shadow-[0_0_30px_hsla(var(--primary)/0.25)]'
						>
							Voir le Menu
						</a>
						<a
							href='tel:0486972259'
							className='btn-outline-chalk rounded-full px-8 sm:px-10 py-3 sm:py-3.5 text-xs sm:text-sm tracking-widest uppercase backdrop-blur-sm'
						>
							Réserver une table
						</a>
					</div>

					{/* Info chips */}
					<div
						className='flex flex-wrap items-center justify-center gap-4 mt-4 md:mt-4 transition-all duration-1000 ease-out'
						style={{ opacity: loaded ? 1 : 0, transitionDelay: '1.6s' }}
					>
						<div className='inline-flex items-center gap-2 text-foreground/30 text-xs sm:text-sm font-elegant tracking-wider'>
							<Clock className='w-3.5 h-3.5 text-primary/50' />
							<span>Lun – Jeu · 08h–01h | Ven – Sam · 08h–02h | Dim · 09h–01h</span>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<a
				href='#histoire'
				className='absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30 hover:text-primary/60 transition-colors duration-500 group z-10'
				style={{
					opacity: loaded ? 1 : 0,
					transitionDelay: '2s',
					transitionDuration: '1s',
				}}
			>
				<span className='font-elegant text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity'>
					Découvrir
				</span>
				<ChevronDown className='w-5 h-5 animate-bounce' />
			</a>
		</section>
	);
};

export default HeroSection;
