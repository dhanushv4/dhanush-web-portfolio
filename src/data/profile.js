const profile = {
  name: "Dhanush V",

  role:
    "Cloud & DevOps Engineer | SRE | AWS | Kubernetes",

  about: `
MCA graduate and aspiring Cloud & DevOps Engineer focused on
building reliable, automated and cloud-native infrastructure.

Hands-on experience with AWS, Linux, Docker, Kubernetes,
Git, GitHub, NGINX, Argo CD, Jenkins, Terraform and Bash
through practical training and projects.

Seeking entry-level opportunities in Cloud Engineering,
DevOps, SRE, AWS Engineering and Cloud Infrastructure.

Quick learner with a strong interest in automation,
containerization, CI/CD, monitoring and Infrastructure as Code.
  `,

  experience: [
    "Cloud & DevOps Intern — ACTE, Bengaluru",
    "Practiced AWS EC2, S3, IAM and VPC",
    "Linux administration and Bash scripting",
    "Docker and Kubernetes application deployment",
    "Git and GitHub workflows",
    "Jenkins and CI/CD",
    "Argo CD and GitOps",
    "NGINX web server and reverse proxy",
    "Terraform Infrastructure as Code"
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Saveetha University",
      location: "Chennai",
      passedOut: "2026"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "VIT University",
      location: "Vellore",
      passedOut: "2024"
    }
  ],

  certifications: [
    "Cloud Computing Training — ACTE, Bengaluru"
  ],

  expertise: [
    "AWS",
    "Cloud Computing",
    "DevOps",
    "SRE",
    "Docker",
    "Docker Compose",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "GitHub Actions",
    "Jenkins",
    "Argo CD",
    "GitOps",
    "Linux",
    "Bash",
    "NGINX",
    "CloudWatch",
    "Python"
  ],

  languages: [
    "Tamil",
    "English"
  ],

  github:
    "https://github.com/dhanushv4",

  linkedin:
    "https://www.linkedin.com/in/dhanush05v/",

  // Resume must be inside the public folder.
  // Put your resume at: public/resume.pdf
  resume:
    "/resume.pdf",

  projects: [
    {
      title: "Chaos Engineering & Monitoring",

      overview: `
Built a cloud-based Chaos Engineering and Monitoring platform
to simulate infrastructure resource failures and observe
system behavior under different load and failure conditions.

The project focuses on chaos testing, cloud monitoring,
containerization, infrastructure automation and CI/CD.
      `,

      technical: `
Infrastructure was provisioned using Terraform on AWS EC2
with two EC2 environments for comparing system behavior.

Docker and Docker Compose were used to deploy
containerized chaos workloads.

AWS Lambda and Amazon SQS were used to generate
event-driven workloads at scheduled intervals.

Amazon CloudWatch was configured to monitor CPU, memory,
disk and inode metrics and collect system and Docker logs.

Chaos testing scenarios included disk fill, CPU spike,
memory usage, inode exhaustion and Lambda burst testing.

GitHub Actions was used for CI/CD to build Docker images,
push images to Docker Hub and manage version tags.

Docker image versioning was implemented to support
application upgrades and rollback.
      `,

      techStack: [
        "AWS EC2",
        "Terraform",
        "Docker",
        "Docker Compose",
        "AWS Lambda",
        "Amazon SQS",
        "CloudWatch",
        "Flask",
        "NGINX",
        "GitHub Actions",
        "Docker Hub",
        "Linux",
        "Bash"
      ],

      github:
        "https://github.com/dhanushv4/chaos-lab.git",

      youtube:
        "https://youtu.be/HVXt9-oxVtA?si=Hmun-jupUOz0u7f2"
    }
    
  ]
}

export default profile

