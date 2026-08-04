# 🚀 AWS Serverless Resume Challenge

A production-ready serverless cloud application built on AWS that demonstrates modern Cloud Engineering practices using **Terraform**, **GitHub Actions**, and **AWS serverless services**.

The application hosts a React portfolio website on Amazon S3 behind Amazon CloudFront and includes a serverless visitor counter powered by Amazon API Gateway, AWS Lambda, and Amazon DynamoDB.

---

## 🌐 Live Demo

**Website:** https://michaelnouzieres.com

---

# 📖 Overview

This project was built to demonstrate practical experience with:

- Infrastructure as Code (Terraform)
- Serverless application development
- AWS networking and security
- CI/CD automation
- GitHub OIDC authentication
- Production deployment practices

The entire infrastructure is provisioned automatically using Terraform, while GitHub Actions deploy both the infrastructure and frontend application.

---

# 🏗 Architecture

> _(Insert architecture diagram here)_

```
                   Internet
                       │
                       ▼
                 Amazon Route53
                       │
                       ▼
          Amazon CloudFront (HTTPS)
               ACM + OAC Enabled
               │              │
               │              │
               ▼              ▼
         Amazon S3       API Gateway
       React Frontend         │
                              ▼
                         AWS Lambda
                              │
                              ▼
                         Amazon DynamoDB
```

---

# ☁ AWS Services

| Service                 | Purpose                      |
| ----------------------- | ---------------------------- |
| Amazon S3               | Static website hosting       |
| Amazon CloudFront       | Global CDN                   |
| Amazon Route53          | DNS                          |
| AWS Certificate Manager | SSL/TLS certificates         |
| Amazon API Gateway      | REST API                     |
| AWS Lambda              | Serverless backend           |
| Amazon DynamoDB         | Visitor counter              |
| AWS IAM                 | Least privilege permissions  |
| GitHub Actions          | CI/CD                        |
| GitHub OIDC             | Secure authentication to AWS |

---

# ✨ Features

- Fully serverless architecture
- React frontend
- Node.js Lambda backend
- Visitor counter stored in DynamoDB
- HTTPS custom domain
- Private S3 bucket
- CloudFront Origin Access Control (OAC)
- Infrastructure as Code with Terraform
- Automated infrastructure deployment
- Automated frontend deployment
- GitHub OIDC authentication
- Modular Terraform architecture

---

# 📂 Repository Structure

```
.
├── backend
│   ├── controllers
│   ├── db
│   ├── repository
│   ├── app.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
├── infrastructure
│   ├── modules
│   ├── providers.tf
│   ├── backend.tf
│   ├── variables.tf
│   ├── outputs.tf
│   └── main.tf
│
└── .github
    └── workflows
        ├── infrastructure.yml
        └── frontend.yml
```

---

# 🚀 Deployment Workflows

The project uses **two independent GitHub Actions workflows**.

## Infrastructure Deployment

### Trigger

Automatically runs when infrastructure or backend code changes.

```
push
├── infrastructure/**
└── backend/**
```

### Pipeline

```
Checkout Repository
        │
Install Lambda Dependencies
        │
Authenticate using GitHub OIDC
        │
Terraform Init
        │
Terraform Plan
        │
Manual Approval
        │
Terraform Apply
```

The infrastructure workflow provisions:

- Amazon S3
- CloudFront
- Route53
- ACM
- API Gateway
- Lambda
- DynamoDB
- IAM

---

## Frontend Deployment

Frontend deployment is intentionally separated from infrastructure deployment.

### Trigger

```
workflow_dispatch
```

### Pipeline

```
Checkout Repository
        │
Authenticate using GitHub OIDC
        │
Install Dependencies
        │
Generate Production Environment Variables
        │
Build React Application
        │
Upload Build to Amazon S3
        │
Invalidate CloudFront Cache
```

---

# 🔐 Security

This project follows AWS security best practices.

- Private Amazon S3 bucket
- CloudFront Origin Access Control (OAC)
- HTTPS enforced with ACM
- IAM least privilege
- GitHub OpenID Connect (OIDC)
- No AWS access keys stored in GitHub
- Infrastructure managed exclusively through Terraform

---

# 🔄 Visitor Counter

```
User
 │
 ▼
React Application
 │
POST /visitor-count
 │
 ▼
Amazon API Gateway
 │
 ▼
AWS Lambda
 │
 ▼
UpdateItem
 │
 ▼
Amazon DynamoDB
```

The Lambda function atomically increments a DynamoDB item using an `UpdateItem` operation and returns the updated visitor count to the frontend.

---

# 🛠 Technology Stack

### Frontend

- React
- Vite

### Backend

- Node.js
- AWS SDK v3

### Infrastructure

- Terraform

### CI/CD

- GitHub Actions
- GitHub OpenID Connect (OIDC)

---

# 📊 Project Highlights

- **9 AWS services** integrated
- **100% Infrastructure as Code**
- **2 GitHub Actions workflows**
- **100% serverless backend**
- **Private S3 architecture**
- **CloudFront Origin Access Control**
- **HTTPS custom domain**
- **GitHub OIDC authentication**
- **Automated infrastructure provisioning**
- **Automated frontend deployment**

---

# 💡 Architecture Decisions

### Why Terraform?

Terraform provides repeatable, version-controlled infrastructure deployments and simplifies infrastructure management.

### Why GitHub OIDC?

OIDC allows GitHub Actions to assume an AWS IAM role securely without storing long-lived AWS credentials.

### Why CloudFront OAC?

Origin Access Control ensures the S3 bucket remains private while allowing CloudFront to securely retrieve content.

### Why API Gateway + Lambda + DynamoDB?

This architecture provides a highly scalable, serverless backend with minimal operational overhead and automatic scaling.

### Why Separate Deployment Pipelines?

Infrastructure changes are deployed independently from frontend updates, allowing UI changes to be released without reprovisioning cloud resources.

---

# 🚀 Future Improvements

- CloudWatch Dashboard
- CloudWatch Alarms
- SNS Topic + Email
- Lambda unit tests
- Cost monitoring dashboard

---

# 👨‍💻 Author

**Michael Nouzieres**

AWS Certified Solutions Architect – Associate

- 🌐 Portfolio: https://michaelnouzieres.com
- 💼 LinkedIn: [Michael Nouzieres](https://www.linkedin.com/in/michael-nouzieres-71a783143/)
- 💻 GitHub: [Michael Nouzieres](https://github.com/michaelnouzieres)

---

## ⭐ If you found this project helpful, feel free to star the repository!
