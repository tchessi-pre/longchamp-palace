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
			className='relative min-h-screen flex items-center justify-center overflow-hidden isolate pt-12 md:pt-0'
		>
			{/* Background image */}
			<div className='absolute inset-0'>
				<img
					src={interiorImg}
					alt='Intérieur Longchamp Palace'
					className='w-full h-full object-cover transition-transform [transition-duration:8s] ease-out'
					style={{
						transform: loaded ? 'scale(1.05)' : 'scale(1.15)',
						willChange: 'transform',
						backfaceVisibility: 'hidden',
						WebkitBackfaceVisibility: 'hidden',
					}}
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
							'radial-gradient(1100px 520px at 50% 34%, hsla(var(--primary) / 0.12) 0%, transparent 60%), radial-gradient(900px 520px at 14% 20%, hsla(var(--chalk) / 0.07) 0%, transparent 55%), radial-gradient(900px 520px at 86% 20%, hsla(var(--chalk) / 0.06) 0%, transparent 55%)',
					}}
				/>
				<div
					className='hidden md:block absolute inset-0 opacity-[0.10] mix-blend-soft-light pointer-events-none'
					style={{
						background:
							'repeating-linear-gradient(to bottom, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 5px)',
					}}
				/>
				<div
					className='hidden md:block absolute inset-0 opacity-[0.18] pointer-events-none'
					style={{
						background:
							'repeating-linear-gradient(to right, hsla(var(--primary) / 0.16) 0px, hsla(var(--primary) / 0.16) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(to bottom, hsla(var(--primary) / 0.12) 0px, hsla(var(--primary) / 0.12) 1px, transparent 1px, transparent 64px)',
						maskImage:
							'radial-gradient(circle at 50% 40%, black 0%, transparent 68%)',
						WebkitMaskImage:
							'radial-gradient(circle at 50% 40%, black 0%, transparent 68%)',
					}}
				/>
				<div
					className='hidden md:block absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none'
					style={{
						backgroundImage:
							'radial-gradient(rgba(255,255,255,0.45) 0.6px, transparent 0.6px)',
						backgroundSize: '3px 3px',
					}}
				/>
			</div>

			{/* Warm ambient glow */}
			<div className='absolute inset-0 pointer-events-none overflow-hidden'>
				<div
					className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px] transition-all [transition-duration:3s] ease-out'
					style={{
						width: 800,
						height: 600,
						opacity: loaded ? 1 : 0,
						transform: loaded
							? 'translate(-50%, -50%) scale(1)'
							: 'translate(-50%, -50%) scale(0.65)',
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
			{[
				{
					anchor: 'tl',
					pos: 'top-20 left-5 sm:top-10 sm:left-9 md:top-16 md:left-14 lg:top-24 lg:left-24',
				},
				{
					anchor: 'tr',
					pos: 'top-20 right-5 sm:top-10 sm:right-9 md:top-16 md:right-14 lg:top-24 lg:right-24',
				},
				{
					anchor: 'bl',
					pos: 'bottom-7 left-7 sm:bottom-9 sm:left-9 md:bottom-16 md:left-14 lg:bottom-24 lg:left-24',
				},
				{
					anchor: 'br',
					pos: 'bottom-7 right-7 sm:bottom-9 sm:right-9 md:bottom-16 md:right-14 lg:bottom-24 lg:right-24',
				},
			].map(({ pos, anchor }, i) => {
				const isTop = anchor === 'tl' || anchor === 'tr';
				const isLeft = anchor === 'tl' || anchor === 'bl';

				return (
					<div
						key={anchor}
						className={`absolute ${pos} z-20 pointer-events-none transition-[opacity,transform] duration-700 ease-out`}
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'scale(1)' : 'scale(0.92)',
							transitionDelay: `${1 + i * 0.15}s`,
						}}
					>
						<div className='relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16'>
							<div
								className={`absolute ${isTop ? 'top-0' : 'bottom-0'} left-0 h-px w-9 sm:w-12 md:w-14 bg-primary/45`}
							/>
							<div
								className={`absolute ${isLeft ? 'left-0' : 'right-0'} top-0 w-px h-9 sm:h-12 md:h-14 bg-primary/45`}
							/>
							<div
								className={`absolute ${isTop ? 'top-1' : 'bottom-1'} left-1 h-px w-6 sm:w-9 md:w-10 bg-primary/20`}
							/>
							<div
								className={`absolute ${isLeft ? 'left-1' : 'right-1'} top-1 w-px h-6 sm:h-9 md:h-10 bg-primary/20`}
							/>
							<div
								className={`absolute ${isTop ? 'top-[-1px]' : 'bottom-[-1px]'} ${isLeft ? 'left-[-1px]' : 'right-[-1px]'} h-2.5 w-2.5 sm:h-3 sm:w-3 rotate-45 border border-primary/50 bg-primary/10 shadow-[0_0_18px_hsla(var(--primary)/0.20)]`}
							/>
						</div>
					</div>
				);
			})}

			{/* Content */}
			<div className='relative z-10 text-center px-4 sm:px-6 w-full max-w-6xl mx-auto'>
				<div
					className=''
					style={{
						opacity: loaded ? 1 : 0,
						transform: loaded ? 'translateY(0)' : 'translateY(24px)',
						transitionDelay: '0.2s',
					}}
				>
					{/* <div className='absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-primary/20' /> */}
					{/* <div
						className='absolute inset-0 pointer-events-none opacity-80'
						style={{
							background:
								'radial-gradient(900px 420px at 50% 0%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%), radial-gradient(900px 520px at 50% 100%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 55%)',
						}}
					/> */}
					{/* <div
						className='absolute inset-0 opacity-[0.10] mix-blend-soft-light pointer-events-none'
						style={{
							background:
								'repeating-linear-gradient(to bottom, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 6px)',
						}}
					/> */}
					{/* <div
						className='absolute -inset-1 pointer-events-none opacity-70'
						style={{
							background:
								'linear-gradient(90deg, transparent 0%, hsla(var(--primary) / 0.22) 30%, transparent 60%), linear-gradient(180deg, transparent 0%, hsla(var(--primary) / 0.16) 40%, transparent 70%)',
							filter: 'blur(18px)',
						}}
					/> */}
					{/* <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none opacity-70' /> */}

					<div
						className='mx-auto grid w-full max-w-2xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-2 sm:gap-x-6 my-6 md:my-5 transition-all duration-1000 ease-out'
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'translateY(0)' : 'translateY(-10px)',
							transitionDelay: '1s',
						}}
					>
						<div className='min-w-0 justify-self-stretch flex items-center justify-end gap-2 sm:gap-4'>
							<div className='hidden sm:block h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-primary/60' />
							<div className='hidden sm:block h-2.5 w-2.5 rotate-45 border border-primary/50 bg-primary/10' />
							<span className='min-w-0 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-right text-primary font-bold font-elegant text-[9px] sm:text-xs md:text-sm tracking-[0.22em] sm:tracking-[0.32em] uppercase shadow-[0_0_18px_hsla(var(--primary)/0.10)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]'>
								Restaurant
							</span>
						</div>

						<div className='relative justify-self-center'>
							<div
								aria-hidden
								className='absolute -inset-4 rounded-3xl blur-2xl opacity-80'
								style={{
									background:
										'radial-gradient(circle, hsla(var(--primary) / 0.22) 0%, rgba(0,0,0,0) 70%)',
								}}
							/>
							<div className='relative rounded-2xl border border-primary/20 bg-black/10 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.35)]'>
								<img
									src={logo}
									alt='Longchamp Palace'
									className='h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain invert opacity-90 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]'
									loading='eager'
									width={40}
									height={40}
								/>
							</div>
						</div>

						<div className='min-w-0 justify-self-stretch flex items-center justify-start gap-2 sm:gap-4'>
							<span className='min-w-0 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-left text-primary font-bold font-elegant text-[9px] sm:text-xs md:text-sm tracking-[0.22em] sm:tracking-[0.32em] uppercase shadow-[0_0_18px_hsla(var(--primary)/0.10)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]'>
								Bistrot
							</span>
							<div className='hidden sm:block h-2.5 w-2.5 rotate-45 border border-primary/50 bg-primary/10' />
							<div className='hidden sm:block h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-primary/60' />
						</div>
					</div>

					{/* Main title */}
					<div className='flex justify-center'>
						<div className='relative mx-auto w-fit max-w-[96vw]'>
							<h1
								className='relative font-limelight mb-4 leading-[0.82] tracking-[0.02em] transition-all [transition-duration:1.2s] ease-out bg-primary text-black rounded-lg px-4 sm:px-10 py-5 sm:py-7 shadow-[0_26px_90px_rgba(0,0,0,0.45)] mx-auto w-fit max-w-[96vw] text-center border border-black/20 ring-1 ring-black/15 overflow-hidden'
								style={{
									opacity: loaded ? 1 : 0,
									transform: loaded
										? 'translateY(0) scale(1)'
										: 'translateY(30px) scale(0.95)',
									transitionDelay: '0.5s',
								}}
							>
								<span
									aria-hidden
									className='absolute inset-0 pointer-events-none opacity-90'
									style={{
										background:
											'linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.12) 28%, rgba(0,0,0,0.10) 100%)',
									}}
								/>
								<span
									aria-hidden
									className='absolute inset-0 pointer-events-none opacity-40'
									style={{
										background:
											'repeating-linear-gradient(90deg, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0.10) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 14px)',
									}}
								/>
								<span
									aria-hidden
									className='absolute inset-3 pointer-events-none border border-black/40'
								/>
								{/* <span
									aria-hidden
									className='absolute inset-5 pointer-events-none border border-black/20'
								/> */}
								<span
									aria-hidden
									className='absolute left-2 top-2 h-2 w-2 rotate-45 bg-black/70'
								/>
								<span
									aria-hidden
									className='absolute right-2 top-2 h-2 w-2 rotate-45 bg-black/70'
								/>
								<span
									aria-hidden
									className='absolute left-2 bottom-2 h-2 w-2 rotate-45 bg-black/70'
								/>
								<span
									aria-hidden
									className='absolute right-2 bottom-2 h-2 w-2 rotate-45 bg-black/70'
								/>
								{/* <span
									aria-hidden
									className='absolute inset-0 pointer-events-none opacity-60'
									style={{
										background:
											'repeating-linear-gradient(135deg, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 10px, rgba(255,255,255,0.06) 10px, rgba(255,255,255,0.06) 20px)',
									}}
								/>
								<span
									aria-hidden
									className='absolute inset-0 pointer-events-none'
									style={{
										background:
											'radial-gradient(700px 260px at 50% 0%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 60%)',
										opacity: 0.7,
									}}
								/> */}
								<span
									aria-hidden
									className='absolute inset-y-0 -left-1/2 w-1/2 pointer-events-none opacity-0'
									style={{
										background:
											'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.38) 50%, rgba(255,255,255,0) 100%)',
										transform: loaded
											? 'translateX(220%) skewX(-18deg)'
											: 'translateX(40%) skewX(-18deg)',
										opacity: loaded ? 0.6 : 0,
										transition:
											'transform 1200ms ease-out, opacity 1200ms ease-out',
										transitionDelay: '1.05s',
									}}
								/>
								<span className='block text-[clamp(2.4rem,9vw,6.25rem)] tracking-[0.08em] sm:tracking-[0.14em] drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]'>
									LONGCHAMP
								</span>
								<span className='block mt-1 text-[clamp(2.8rem,10.5vw,7.5rem)] tracking-[0.10em] sm:tracking-[0.18em] drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]'>
									PALACE
								</span>
								<div
									aria-hidden
									className='mx-auto mt-2 flex w-2/3 max-w-[22rem] items-center gap-3'
								>
									<div className='h-px flex-1 bg-black/70' />
									<div className='h-2.5 w-2.5 rotate-45 border border-black/80 bg-black/10' />
									<div className='h-px flex-1 bg-black/70' />
								</div>
							</h1>
						</div>
					</div>

					{/* Tagline */}
					<div
						className='mb-4 md:mb-8 transition-all duration-1000 ease-out'
						style={{
							opacity: loaded ? 1 : 0,
							transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
							transitionDelay: '0.3s',
						}}
					>
						<div className='inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md'>
							<MapPin className='w-3.5 h-3.5 text-primary' />
							<span className='text-white font-elegant text-xs md:text-sm tracking-[0.3em] uppercase'>
								Marseille
							</span>
						</div>
					</div>

					{/* Rating badge */}
					<div
						className='flex items-center justify-center gap-2 mb-6 sm:mb-8 transition-all duration-1000 ease-out'
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
								4,41 / 5 - 622 avis
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
						<div className='inline-flex items-start gap-2 text-foreground/30 text-xs sm:text-sm font-elegant tracking-wider'>
							{/* <Clock className='hidden sm:block w-3.5 h-3.5 text-primary/50 mt-[2px] shrink-0' /> */}
							<span>
								<span className='block'>Lun - Jeu · 08h-01h</span>
								<span className='block'>Ven - Sam · 08h-02h | Dim · 09h-01h</span>
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<a
				href='#histoire'
				className='absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30 hover:text-primary/60 transition-colors duration-500 group z-10'
				style={{
					opacity: loaded ? 1 : 0,
					transitionDelay: '2s',
					transitionDuration: '1s',
				}}
			>
				<span className='hidden sm:block font-elegant text-[10px] sm:text-xs tracking-[0.3em] uppercase text-foreground/40 group-hover:text-foreground/70 opacity-0 group-hover:opacity-100 transition-[opacity,color]'>
					Découvrir
				</span>
				<ChevronDown className='w-5 h-5 animate-bounce' />
			</a>
		</section>
	);
};

export default HeroSection;
