"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          Hey there! I&#39;m a junior frontend developer with a passion for
          crafting beautiful, user-friendly websites. My journey into coding
          started with HTML and CSS, and I&#39;ve been hooked ever since.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Although I&#39;m still early in my career, I&#39;ve dived into various
          projects, learning and growing with each one. I love the challenge of
          turning designs into reality and exploring the magic of JavaScript.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          While I&#39;m focused on honing my skills and diving deeper into
          frontend frameworks, I also enjoy staying active in the developer
          community, whether it&#39;s through online courses or sharing insights
          with fellow developers.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Thanks for stopping by, and let&#39;s create something amazing
          together!
        </p>
      </div>
    </section>
  );
}
