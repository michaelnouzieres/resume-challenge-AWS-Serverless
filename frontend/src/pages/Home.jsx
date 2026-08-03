import Stats from "../components/Stats";

export default function Home() {
  return (
    <>
      <section className="max-w-5xl mx-auto py-5  grid gap-6 lg:grid-cols-2 lg:items-center text-white text-center lg:text-justify">
        <img
          src="/DSC_0153.JPG"
          alt="michael"
          width={4000}
          height={6000}
          className="order-2 rounded-sm"
        />
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">Welcome to my website!</h1>
          <p className="text-lg">
            Hi, I'm Michael Nouzieres — a Technical Program Manager with a
            passion for Cloud Engineering and building secure, scalable, and
            automated solutions on AWS. <br /> <br />
            I enjoy helping organizations transform ideas into successful
            technology initiatives by bringing structure to complex projects,
            aligning stakeholders, and delivering solutions that create
            measurable business value. My background in enterprise IT program
            management, combined with hands-on experience designing and
            automating cloud infrastructure with AWS and Terraform, allows me to
            bridge the gap between technical implementation and strategic
            execution. <br />
            <br />
            I'm continuously expanding my cloud engineering skills through
            real-world projects focused on Infrastructure as Code, CI/CD,
            automation, and cloud-native architectures. My goal is to build
            reliable, production-ready solutions while continuously learning and
            applying AWS best practices. <br />
            <br />
            Outside of technology, I'm passionate about strength training,
            martial arts, and history. These interests have reinforced the
            discipline, resilience, and continuous learning mindset that I bring
            to both my professional work and personal development.
          </p>
        </div>
      </section>
      <Stats></Stats>
    </>
  );
}
