export default function Technology() {
  return (
    <>
      <section className="max-w-5xl mx-auto py-5  grid gap-6 lg:grid-cols-4  text-white text-center lg:text-justify">
        <div className="space-y-4 col-span-full">
          <h1 className="text-4xl font-bold ">Technology Stack</h1>
          <p className="text-lg">
            This project uses a modern serverless AWS architecture designed to
            demonstrate cloud engineering best practices, Infrastructure as
            Code, automation, and secure CI/CD deployments.
          </p>
        </div>
        <div className="space-y-3 p-3 rounded-md bg-linear-to-br from-slate-700 to-slate-950">
          <h2 className="text-xl font-bold lg:text-justify">Frontend</h2>
          <ul className="text-md space-y-3">
            <li>React for building the interactive user interface.</li>
            <li>Amazon S3 for static website hosting.</li>
            <li>Amazon CloudFront for global content delivery and HTTPS.</li>
            <li>AWS Certificate Manager (ACM) for SSL/TLS certificates.</li>
          </ul>
        </div>
        <div className="space-y-3 p-3 rounded-md bg-linear-to-br from-slate-700 to-slate-950">
          <h2 className="text-xl font-bold lg:text-justify">Backend</h2>
          <ul className="text-md space-y-3">
            <li>Node.js running on AWS Lambda.</li>
            <li>Amazon API Gateway for exposing backend APIs.</li>
            <li>Amazon DynamoDB for persistent visitor counter storage.</li>
          </ul>
        </div>
        <div className="space-y-3 p-3 rounded-md bg-linear-to-br from-slate-700 to-slate-950">
          <h2 className="text-xl font-bold lg:text-justify">
            Infrastructure & Security
          </h2>
          <ul className="text-md space-y-3">
            <li>Terraform for Infrastructure as Code (IaC).</li>
            <li>AWS IAM with least-privilege access principles.</li>
            <li>Amazon Route 53 for DNS management.</li>
            <li>
              AWS Lambda, API Gateway, DynamoDB, S3, and CloudFront provisioned
              and managed through Terraform.
            </li>
          </ul>
        </div>
        <div className="space-y-3 p-3 rounded-md bg-linear-to-br from-slate-700 to-slate-950">
          <h2 className="text-xl font-bold lg:text-justify">
            CI/CD & Automation
          </h2>
          <ul className="text-md space-y-3">
            <li>GitHub Actions for automated testing and deployments.</li>
            <li>
              OIDC authentication for secure AWS access without long-lived
              credentials.
            </li>
            <li>
              Automated Terraform validation and infrastructure deployment
              workflows.
            </li>
            <li>Automated backend and frontend build processes.</li>
          </ul>
        </div>
      </section>
      <section className="hidden max-w-5xl mx-auto py-5  lg:grid gap-6 lg:grid-cols-5">
        <div className="bg-white rounded-md p-2">
          <img src="/images.png" alt="node" />
        </div>
        <div className="bg-white rounded-md p-2">
          <img src="/node-js-logo-png_seeklogo-480560.png" alt="node" />
        </div>
        <div className="bg-white rounded-md p-2">
          <img src="/images (1).png" alt="node" />
        </div>
        <div className="bg-white rounded-md p-2">
          <img src="/images (2).png" alt="node" />
        </div>
        <div className="bg-white rounded-md p-2">
          <img
            src="/amazon-web-services-aws-logo-png_seeklogo-319188.png"
            alt="node"
          />
        </div>
      </section>
    </>
  );
}
