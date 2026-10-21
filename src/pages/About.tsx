import { Footer } from "../components/Footer";

export const About = () => {
	return (
		<div className="px-[10%] flex-col text-base1  py-10 flex flex-1">
			<div>
				<p className="">
					Elist Wallpapers is a platform for people looking for high quality,
					minuciously curated wallpapers. To this day it flabergasses me, the
					amount of bad quality, generic images on all the major go to,
					wallpaper platforms. One may say they need to have as much variety,
					since they target basically every new comer. If that's the case, I had
					to come up with a different approach.
				</p>

				<br />

				<p>
					A parallel that can be made is with movie recommendation platforms.
					Nowdays there's so much variety that it's hard to pick something to
					watch, and when you finally do, you still have a not insignificant
					chance of not liking what you watch(RoP smh). So why not save some
					time and let other people you can trust to curate some lists. Even if
					you end up not liking it, the chances of it being better than a random
					pick you made are good enough to give it a try. Now, can you trust me?
					Well, you would have to check for yourself. No login needed, just nice
					wallpapers ready to download.
				</p>

				<br />

				<p>
					It has a minimal design that highlights what really matters, which are
					the wallpapers(of course). There's also new features coming for
					V2.0(yeah barely released V1) such as:
				</p>

				<br />

				<ul className="">
					<option value="">- Light theme</option>
					<option value="">- Expanded view</option>
					<option value="">- Different layout views</option>
				</ul>

				<br />

				<p>
					Created by me (
					<a href="https://github.com/magalhaesfelipe" target="_blank">
						<strong className="text-highlight2">@magalhaesfelipe</strong>
					</a>
					), the project is open sourced on Github, and it's free for
					contributions. You can make feature requests, report issues etc. So
					far it's a solo project in its V1.0 I developed on my spare time, so
					if you find it useful, give it a ⭐ on{" "}
					<a
						href="https://github.com/magalhaesfelipe/elitist-wallpapers"
						target="_blank"
					>
						<strong className="text-highlight2">Github</strong>
					</a>
					, that way the project can be found by more people.
				</p>

				<br />

				<p>
					For the ones interested, I plan to write an article with more
					technical details about the process on my website. And how I did that
					with a minimal stack(imo). Soon will be posting about it too.
				</p>

				<br />
				<br />

				<p>P.S: Written with real human thought, not AI generated.</p>

				<br />

				<p>- Magalhães, Felipe</p>
			</div>

			<Footer />
		</div>
	);
};
