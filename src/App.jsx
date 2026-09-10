```jsx
import profile from "./data/profile"
import ProjectCard from "./components/ProjectCard"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* ================= PROFILE ================= */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h1 className="text-5xl font-bold mb-4">
            {profile.name}
          </h1>

          <h2 className="text-2xl text-blue-600 mb-2">
            {profile.role}
          </h2>

          <p className="text-gray-500 mb-6">
            MCA Graduate | Fresher
          </p>

          {/* About */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">
              About Me
            </h3>

            <p className="text-lg text-gray-700 whitespace-pre-line">
              {profile.about}
            </p>
          </div>


          {/* ================= EXPERIENCE ================= */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">
              Experience
            </h3>

            <div className="bg-gray-50 border rounded-xl p-5">

              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Cloud & DevOps Intern
              </h4>

              <p className="text-blue-600 font-medium mb-3">
                ACTE — Bengaluru | 2026
              </p>

              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>
                  Practiced AWS services including EC2, S3, IAM and VPC.
                </li>

                <li>
                  Worked with Linux administration and Bash scripting.
                </li>

                <li>
                  Practiced Docker and Kubernetes for containerization
                  and application deployment.
                </li>

                <li>
                  Worked with Git, GitHub, Jenkins and CI/CD workflows.
                </li>

                <li>
                  Practiced Argo CD and GitOps deployment workflows.
                </li>

                <li>
                  Worked with NGINX and Terraform for cloud infrastructure
                  and web server management.
                </li>
              </ul>

            </div>
          </div>


          {/* ================= SKILLS ================= */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {profile.expertise.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>


          {/* ================= EDUCATION ================= */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">
              Education
            </h3>

            <div className="space-y-4">

              {profile.education.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border rounded-xl p-5"
                >

                  <h4 className="text-xl font-bold text-gray-800">
                    {item.degree}
                  </h4>

                  <p className="text-gray-700 mt-1">
                    {item.college}
                  </p>

                  <p className="text-gray-600">
                    {item.location}
                  </p>

                  <p className="text-gray-500 mt-1">
                    Passed Out: {item.passedOut}
                  </p>

                </div>
              ))}

            </div>
          </div>


          {/* ================= CERTIFICATION ================= */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">
              Certification
            </h3>

            <ul className="list-disc ml-6 text-gray-700">
              {profile.certifications.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>


          {/* ================= LANGUAGES ================= */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">
              Languages
            </h3>

            <div className="flex flex-wrap gap-3">

              {profile.languages.map((language, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
                >
                  {language}
                </span>
              ))}

            </div>
          </div>


          {/* ================= LINKS ================= */}
          <div className="flex flex-wrap gap-4">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:opacity-80"
            >
              LinkedIn
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:opacity-80"
            >
              Resume
            </a>

          </div>

        </div>


        {/* ================= PROJECTS ================= */}
        <div>

          <h2 className="text-4xl font-bold mb-8">
            Featured Project
          </h2>

          {profile.projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}

        </div>

      </div>

    </div>
  )
}

export default App
```
