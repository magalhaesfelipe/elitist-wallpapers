import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <div className="px-[10%] flex-col text-base1  py-10 flex flex-1">
      <div>
        <p>Are you tired of hunting good wallpapers for your desktop?</p>
        <br />

        <p>
          <p>Me too, so I created a new platform for that</p>
        </p>
        <br />

        <p className="">
          🖼️ Elitist Wallpapers is a platform for people looking for high
          quality, meticulously curated wallpapers. To this day it flabbergasses
          me the amount of bad quality, generic images on all the major go to,
          wallpaper websites. One may say they need to have as much variety,
          since they target basically every new comer. If that's the case, I had
          to come up with a different approach.
        </p>
        <br />

        <p>
          A parallel that can be made is with movie recommendation platforms.
          Nowadays there's so much variety that it's hard to pick something to
          watch, and when you finally do, you still have a not insignificant
          chance of not liking what you watch(RoP smh). So why not save some
          time and let other people you can trust, curate some lists for you.
          Even if you end up not liking it, the chances of it being better than
          a random pick you made are good enough to give it a try.
        </p>
        <br />

        <p>Now, can you trust me?</p>
        <br />

        <p>
          Well, you would have to check for yourself. No login needed, just nice
          wallpapers ready to download ✅.
        </p>
        <br />

        <p>
          It has a minimal design that highlights what really matters, which are
          the wallpapers(of course). There's also new features coming for
          V2.0(yeah barely released V1) such as:
        </p>
        <br />

        <ul className="">
          <option value="">- Expanded view</option>
          <option value="">- Mobile section</option>
          <option value="">- New categories coming soon</option>
          <option value=""></option>
        </ul>
        <br />

        <p>
          Created by me (
          <a href="https://github.com/magalhaesfelipe" target="_blank">
            <strong className="text-highlight2">@magalhaesfelipe</strong>
          </a>
          ), the project is open sourced on Github so anyone can make
          contributions, feature requests, report issues etc. So far it's a solo
          project in V1.0 that I developed on my spare time, so if you find it
          useful, give the repo a ⭐ on{" "}
          <a
            href="https://github.com/magalhaesfelipe/elitist-wallpapers"
            target="_blank"
          >
            <strong className="text-highlight2">Github</strong>
          </a>
          , that way more people can find it.
        </p>
        <br />

        <p>
          If you have some cool wallpaper and would like to share, you can
          request to add it
          <a
            href="https://github.com/magalhaesfelipe/wallpapers"
            target="_blank"
          >
            <strong className="text-highlight2"> here </strong>
          </a>
        </p>
        <br />

        <p>
          For the ones interested, I plan to write an article with more depth on
          technical details involving the process on my website. And how I did
          that with a minimal stack. Soon will be posting about it too.
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
