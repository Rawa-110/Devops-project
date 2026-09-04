# Terraform AWS EC2 Project

This project provisions an Amazon EC2 instance on AWS using Terraform.

## Prerequisites

- AWS Account
- AWS CLI configured
- Terraform installed
- SSH client
- IAM permissions to create EC2 resources

## Project Structure

```text
terraform-aws-ec2/
├── provider.tf
├── main.tf
├── outputs.tf
├── .gitignore
└── README.md

1. Install Terraform

Download Terraform from:

https://developer.hashicorp.com/terraform/downloads

Verify the installation:
terraform -version

2. Configure AWS

Configure your AWS credentials:
aws configure

Enter:

AWS Access Key ID
AWS Secret Access Key
Default region
Output format
3. Create an AWS Key Pair

Create a Key Pair from:

AWS Console → EC2 → Key Pairs → Create key pair

Save the .pem file securely.

Set permissions:
chmod 400 terraform-key.pem

4. Terraform Configuration
provider.tf
provider "aws" {
  region = "us-east-1"
}
main.tf
resource "aws_instance" "web" {
  ami           = "YOUR_AMI_ID"
  instance_type = "t2.micro"
  key_name      = "terraform-key"

  tags = {
    Name = "Terraform-EC2"
  }
}
outputs.tf
output "instance_id" {
  value = aws_instance.web.id
}

output "instance_public_ip" {
  value = aws_instance.web.public_ip
}
5. Initialize Terraform
terraform init
6. Check the Terraform Plan
terraform plan

This shows the resources Terraform is going to create.

7. Deploy the EC2 Instance
terraform apply

Confirm with:

yes

After deployment, Terraform will display:

instance_id = "i-xxxxxxxx"
instance_public_ip = "xx.xx.xx.xx"
8. Connect to EC2

For Amazon Linux:

ssh -i terraform-key.pem ec2-user@<PUBLIC_IP>

Example:

ssh -i terraform-key.pem ec2-user@54.123.45.67
9. Destroy the Infrastructure

When you finish the project:

terraform destroy

Confirm with:

yes

This removes the infrastructure created by Terraform.

.gitignore
.terraform/
*.tfstate
*.tfstate.backup
*.pem
.vagrant/
Important

Do not commit:

.pem private keys
terraform.tfstate
AWS credentials

Also, AMI IDs are region-specific and can become outdated, so use a current AMI ID for your selected AWS region.

Author

Created as a Terraform Infrastructure as Code project for AWS EC2.

