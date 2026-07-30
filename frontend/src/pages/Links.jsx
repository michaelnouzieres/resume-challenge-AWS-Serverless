export default function Links() {
  return (
    <section className="max-w-5xl mx-auto py-5  grid gap-10 lg:grid-cols-2 lg:items-center text-white text-center lg:text-justify">
      {" "}
      <h1 className="text-4xl font-bold col-span-full">
        Connect with me and follow my work!
      </h1>
      <div className="mx-auto space-y-5">
        <h2 className="text-2xl font-bold"> My Linkedin</h2>
        <a href="https://www.linkedin.com/in/michael-nouzieres-71a783143/">
          <img
            className="rounded-4xl bg-slate-950 hover:scale-95 hover:shadow-amber-50 hover:shadow-2xl transform ease-in-out"
            src="/public/linkedin.png"
            alt="gh"
            width={512}
            height={512}
          />
        </a>
      </div>
      <div className="mx-auto space-y-5">
        <h2 className="text-2xl font-bold"> My Github</h2>
        <a href="https://github.com/michaelnouzieres">
          <img
            className="rounded-4xl hover:scale-95 hover:shadow-amber-50 hover:shadow-2xl"
            src="/public/gh.png"
            alt="gh"
            width={512}
            height={512}
          />
        </a>
      </div>
    </section>
  );
}
