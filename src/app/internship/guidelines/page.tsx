export default function Home() {

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Internship Program Guidelines</h1>

      <p style={styles.intro}>
        Welcome to the internship program. This guideline outlines the basic
        expectations, responsibilities, and professional standards that all
        interns must follow during the internship period.
      </p>

      <Section title="Meeting & Attendance">
        <ul>
          <li>- Join all meetings at least <strong>5 minutes before</strong> your scheduled slot.</li>
          <li>- Maintain punctuality and regular attendance.</li>
          <li>
            - If you need leave or will be absent, inform via email with valid
            details explaining the reason.
          </li>
        </ul>

        <p style={styles.note}>
          <strong>Note:</strong> Regular absence may affect teamwork, workflow,
          and project deadlines. Interns are expected to manage their time
          responsibly.
        </p>
      </Section>

      <Section title="Professional Identity">
        <ul>
          <li>- Use a professional headshot as your profile picture.</li>
          <li>
            - Your displayed name must match your real name as per your
            government-issued ID.
          </li>
        </ul>
      </Section>

      <Section title="Internship Application">
        <p>
          - All candidates must submit the <strong>Internship Application Form</strong>{" "}
          before joining the internship session.
        </p>
      </Section>

      <Section title="Communication Etiquette">
        <ul>
          <li>- Raise your hand and wait for your turn to speak during meetings.</li>
          <li>- Use clear, respectful, and professional communication.</li>
          <li>- Maintain a professional and respectful virtual learning environment.</li>
        </ul>
      </Section>

      <Section title="Internship Planning">
        <p>
          - Prepare an <strong>Internship Planner</strong> outlining your goals,
          tasks, and learning objectives for the internship period.
        </p>
      </Section>

      <Section title="Daily Work Logs">
        <ul>
          <li>- Maintain daily logs of your work and activities.</li>
          <li>
            - Send your logs via email to:{" "}
            <a href="mailto:internship@sriyog.com" style={styles.link}>
              internship@sriyog.com
            </a>
          </li>
          <li>
            - Also send the log in the Google Meet chat so the Internship
            Coordinator can update it in Trello.
          </li>
        </ul>
      </Section>

      <Section title="Security & Confidentiality">
        <ul>
          <li>
            - Keep all files, source code, API keys, tokens, and other
            project-related information secure.
          </li>
          <li>
            - Do not clone, copy, or create backups of any repository belonging
            to the organization without permission.
          </li>
        </ul>
      </Section>

      <Section title="Resume & Project Portfolio">
        <p>
          - Only include projects in your <strong>CV or Resume</strong> that are
          officially mentioned in your internship certificate.
        </p>
      </Section>

      <Section title="LinkedIn & Professional Profiles">
        <p>
          - Update your LinkedIn profile according to the <strong>Job Description</strong>,
          role, and organization mentioned in your Internship Offer Letter.
        </p>
      </Section>

      <Section title="Communication Scope">
        <p>
          - Communication during the internship should be limited to
          <strong> project-related and official internship matters only</strong>.
        </p>
      </Section>

      <Section title="Program Objective">
        <p>
          - The goal of this internship program is to provide a professional
          learning environment where interns gain practical experience,
          develop teamwork skills, and contribute to meaningful projects.
        </p>
      </Section>
    </main>
  );
}

function Section({ title, children }: any) {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>{title}</h2>
      <div style={styles.content}>{children}</div>
    </section>
  );
}

const styles = {
  container: {
    maxWidth: "850px",
    margin: "50px auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.7,
    color: "#333",
  },

  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },

  intro: {
    fontSize: "16px",
    marginBottom: "30px",
  },

  section: {
    marginBottom: "28px",
  },

  heading: {
    fontSize: "20px",
    marginBottom: "10px",
    borderBottom: "2px solid #eee",
    paddingBottom: "6px",
  },

  content: {
    fontSize: "15px",
  },

  note: {
    marginTop: "10px",
    background: "#fff7e6",
    padding: "10px",
    borderLeft: "4px solid orange",
  },

  link: {
    color: "#0070f3",
    textDecoration: "none",
  },
};