const projects = [
  {
    title: "Chaos Engineering & Monitoring",

    overview:
      "Built a cloud-based Chaos Engineering and Monitoring platform to simulate infrastructure resource failures and observe system behavior under different load conditions.",

    technical: `Provisioned AWS infrastructure using Terraform with two EC2 instances.

Deployed Docker-based chaos workloads using Docker Compose.

Implemented event-driven load generation using AWS Lambda and Amazon SQS.

Configured Amazon CloudWatch to monitor CPU, memory, disk and inode metrics and collect system and Docker logs.

Performed chaos testing including disk fill, CPU spike, memory usage, inode exhaustion and Lambda burst scenarios.

Implemented Docker image versioning and rollback using version tags.

Configured GitHub Actions CI/CD to build Docker images and push versioned images to Docker Hub.`,

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

    github: "https://github.com/dhanushv4/chaos-lab.git",

    youtube: "https://youtu.be/HVXt9-oxVtA?si=Hmun-jupUOz0u7f2"
  }
]

export default projects