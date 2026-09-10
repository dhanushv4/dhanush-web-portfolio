function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

      {/* PROJECT TITLE */}
      <h3 className="text-3xl font-bold text-gray-900 mb-5">
        {project.title}
      </h3>


      {/* PROJECT OVERVIEW */}
      <div className="mb-8">

        <h4 className="text-2xl font-bold text-gray-800 mb-3">
          Project Overview
        </h4>

        <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
          {project.overview}
        </p>

      </div>


      {/* ================= YOUTUBE VIDEO ================= */}

      {project.youtube && (
        <div className="mb-10">

          <h4 className="text-2xl font-bold text-gray-800 mb-4">
            Project Demo
          </h4>

          <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-black">

            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/HVXt9-oxVtA?autoplay=1&mute=1"
                title="Chaos Engineering & Monitoring Project Demo"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

            </div>

          </div>

          {/* YouTube Link */}
          <div className="mt-4">

            <a
              href={project.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition"
            >
              Watch on YouTube
            </a>

          </div>

        </div>
      )}


      {/* ================= TECHNICAL DETAILS ================= */}

      <div className="mb-8">

        <h4 className="text-2xl font-bold text-gray-800 mb-3">
          Technical Details
        </h4>

        <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
          {project.technical}
        </p>

      </div>


      {/* ================= TECH STACK ================= */}

      <div className="mb-8">

        <h4 className="text-2xl font-bold text-gray-800 mb-4">
          Technologies Used
        </h4>

        <div className="flex flex-wrap gap-3">

          {project.techStack.map((tech, index) => (

            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>


      {/* ================= PROJECT LINKS ================= */}

      <div className="flex flex-wrap gap-4">

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition"
        >
          GitHub
        </a>

        <a
          href={project.youtube}
          target="_blank"
          rel="noreferrer"
          className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition"
        >
          YouTube
        </a>

      </div>

    </div>
  )
}

export default ProjectCard
