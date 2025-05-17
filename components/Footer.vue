<template>
	<footer id="footer">
		<div class="flex gap-x-10 mx-24 my-24 justify-around items-center">
			<div class="flex gap-x-10 items-center">
				<div>
					<img src="/images/mobileAppImg.png" alt="Mobile App" />
				</div>
				<div class="space-y-3 w-2/4">
					<h1 class="text-xl font-extrabold">
						Activează și tu Mobile Banking
					</h1>
					<p class="text-lg">
						Cu <b class="font-extrabold">ZERO</b> comision de
						administrare
					</p>
					<NuxtLink to="/">
						<Button text="APLICĂ ONLINE" class="mt-5" />
					</NuxtLink>
				</div>
			</div>
			<div class="flex flex-col gap-y-1 space-y-5">
				<a href="">
					<img src="/icons/image.png" alt="App Store" />
				</a>
				<a href="">
					<img src="/icons/image-1.png" alt="App Gallery" />
				</a>
				<a href="">
					<img src="/icons/image-2.png" alt="Google Play" />
				</a>
			</div>
		</div>
		<div
			class="px-10 pt-10 pb-7 bg-blackBg text-white flex justify-between"
		>
			<div class="space-y-2.5">
				<img src="/images/LogoWhite.svg" alt="Unicredit Logo" />
				<p class="text-sm text-k3">
					© 20XX – 20XX UniCredit S.p.A. - All Rights reserved
				</p>
			</div>
			<div class="flex flex-col items-end space-y-2">
				<div class="flex gap-x-5">
					<img src="/icons/titok.svg" class="w-6" alt="tik tok" />
					<img src="/icons/x.svg" class="w-6" alt="x" />
					<img
						src="/icons/linkedin.svg"
						class="w-6"
						alt="linked in"
					/>
					<img src="/icons/ytb.svg" class="w-6" alt="youtube" />
					<img
						src="/icons/instagram.svg"
						class="w-6"
						alt="instagram"
					/>
					<img src="/icons/facebook.svg" class="w-6" alt="facebook" />
				</div>
				<div class="text-lg space-x-5 flex">
					<a href="" class="text-k3 underline hover:text-secondary"
						>Interactive</a
					>
					<p>|</p>
					<a href="" class="text-k3 underline hover:text-secondary"
						>Interactive</a
					>
				</div>
			</div>
		</div>
	</footer>
</template>
