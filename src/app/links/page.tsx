import Link from "next/link";

const categories = [
  {
    title: "Software Development",
    description:
      "Designing, building, testing, and maintaining scalable software solutions using modern frameworks, Agile, and DevOps practices.",
    links: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { name: "Stack Overflow", url: "https://stackoverflow.com" },
      { name: "GitHub", url: "https://github.com" },
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org" },
      { name: "JetBrains Resources", url: "https://www.jetbrains.com/resources" },
    ],
  },
  {
    title: "Web Development & Design",
    description:
      "Creating responsive, accessible, SEO-friendly, and high-performance websites using modern UI/UX principles.",
    links: [
      { name: "W3Schools", url: "https://www.w3schools.com" },
      { name: "CSS-Tricks", url: "https://css-tricks.com" },
      { name: "Web.dev", url: "https://web.dev" },
      { name: "Dribbble", url: "https://dribbble.com" },
      { name: "Smashing Magazine", url: "https://www.smashingmagazine.com" },
    ],
  },
  {
    title: "Cloud Computing",
    description:
      "Scalable cloud infrastructure, migration strategies, cost optimization, and secure deployments.",
    links: [
      { name: "AWS", url: "https://aws.amazon.com" },
      { name: "Google Cloud", url: "https://cloud.google.com" },
      { name: "Microsoft Azure", url: "https://azure.microsoft.com" },
      { name: "Cloudflare Learning", url: "https://www.cloudflare.com/learning" },
      { name: "Red Hat Cloud", url: "https://www.redhat.com/en/topics/cloud" },
    ],
  },
  {
    title: "Cybersecurity",
    description:
      "Protecting systems, networks, and data through best practices, audits, and threat mitigation.",
    links: [
      { name: "CISA", url: "https://www.cisa.gov" },
      { name: "OWASP", url: "https://owasp.org" },
      { name: "Kaspersky Resource Center", url: "https://www.kaspersky.com/resource-center" },
      { name: "SANS Institute", url: "https://www.sans.org" },
      { name: "Have I Been Pwned", url: "https://haveibeenpwned.com" },
    ],
  },
  {
    title: "IT Consulting & Strategy",
    description:
      "Aligning technology with business goals through digital transformation and strategic planning.",
    links: [
      { name: "Gartner", url: "https://www.gartner.com" },
      { name: "McKinsey Digital", url: "https://www.mckinsey.com/capabilities/mckinsey-digital" },
      { name: "CIO", url: "https://www.cio.com" },
      { name: "TechRepublic", url: "https://www.techrepublic.com" },
      { name: "BMC Blogs", url: "https://www.bmc.com/blogs" },
    ],
  },
  {
    title: "Project Management",
    description:
      "Ensuring projects are delivered on time, within scope, and with high quality using Agile and Scrum.",
    links: [
      { name: "PMI", url: "https://www.pmi.org" },
      { name: "Atlassian Agile", url: "https://www.atlassian.com/agile" },
      { name: "Asana Resources", url: "https://asana.com/resources" },
      { name: "Trello Guide", url: "https://trello.com/guide" },
      { name: "Scrum.org", url: "https://www.scrum.org" },
    ],
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Manual and automated testing practices to ensure software quality and reliability.",
    links: [
      { name: "Software Testing Help", url: "https://www.softwaretestinghelp.com" },
      { name: "Selenium", url: "https://www.selenium.dev" },
      { name: "Test Automation University", url: "https://testautomationu.applitools.com" },
      { name: "BrowserStack Guide", url: "https://www.browserstack.com/guide" },
      { name: "Martin Fowler – Testing", url: "https://martinfowler.com/testing" },
    ],
  },
  {
    title: "Data Analytics & BI",
    description:
      "Transforming raw data into actionable insights using dashboards and analytics platforms.",
    links: [
      { name: "Power BI", url: "https://powerbi.microsoft.com" },
      { name: "Tableau Learn", url: "https://www.tableau.com/learn" },
      { name: "Kaggle", url: "https://www.kaggle.com" },
      { name: "Towards Data Science", url: "https://towardsdatascience.com" },
      { name: "BigQuery Docs", url: "https://cloud.google.com/bigquery/docs" },
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Building intelligent systems for automation, prediction, and personalization.",
    links: [
      { name: "TensorFlow", url: "https://www.tensorflow.org" },
      { name: "PyTorch", url: "https://pytorch.org" },
      { name: "Google AI", url: "https://ai.google" },
      { name: "IBM AI", url: "https://www.ibm.com/artificial-intelligence" },
      { name: "OpenAI Research", url: "https://openai.com/research" },
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Designing and building secure, scalable mobile apps for Android and iOS platforms.",
    links: [
      { name: "Android Developers", url: "https://developer.android.com" },
      { name: "Apple Developer", url: "https://developer.apple.com" },
      { name: "Flutter", url: "https://flutter.dev" },
      { name: "React Native", url: "https://reactnative.dev" },
      { name: "Firebase", url: "https://firebase.google.com" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description:
      "Automating deployments and improving reliability with CI/CD and monitoring tools.",
    links: [
      { name: "Docker", url: "https://www.docker.com/resources" },
      { name: "Kubernetes", url: "https://kubernetes.io" },
      { name: "Jenkins", url: "https://www.jenkins.io" },
      { name: "HashiCorp", url: "https://www.hashicorp.com/resources" },
      { name: "Grafana Docs", url: "https://grafana.com/docs" },
    ],
  },
  {
    title: "IT Training & Resources",
    description:
      "Upskilling teams through structured learning platforms and technical documentation.",
    links: [
      { name: "Coursera", url: "https://www.coursera.org" },
      { name: "Udemy", url: "https://www.udemy.com" },
      { name: "edX", url: "https://www.edx.org" },
      { name: "Pluralsight", url: "https://www.pluralsight.com" },
      { name: "Roadmap.sh", url: "https://roadmap.sh" },
    ],
  },
];

export default function UsefulLinksPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Useful IT Resources & Links
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Curated learning and reference links for IT consulting, development,
          security, and digital transformation.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm text-gray-600">{item.description}</p>

            <ul className="mt-5 space-y-2 text-sm">
              {item.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
