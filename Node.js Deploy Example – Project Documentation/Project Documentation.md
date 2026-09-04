# 🚀 Node.js Deploy Example

A simple Node.js web server deployed on an AWS EC2 instance. This project demonstrates the basic process of deploying, running, and managing a Node.js application on a cloud server.

## 🛠️ Tools & Technologies

- Node.js
- npm
- Git & GitHub
- AWS EC2
- Ubuntu
- Linux / Bash
- PM2
- Nginx

## 📂 Project Structure

```text
nodejs-deploy-example/
├── index.js
└── README.md

⚙️ Deployment

The application is deployed on an Ubuntu AWS EC2 instance. Node.js and npm are installed, the application is managed using PM2, and Nginx is configured as a reverse proxy.

Clone the Repository

git clone https://github.com/Rawa-110/nodejs-deploy-example.git
cd nodejs-deploy-example

Install Node.js and npm
sudo apt update
sudo apt install -y nodejs npm

 Run the Application
node index.js

The application runs on port 3000.

Run with PM2

sudo npm install -g pm2
pm2 start index.js
pm2 save
pm2 startup

Configure Nginx
sudo apt install -y nginx
sudo nano /etc/nginx/sites-available/default

location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}

Restart Nginx:
sudo nginx -t
sudo systemctl restart nginx


🎯 Project Goal

This project is part of my DevOps practice and focuses on application deployment, AWS EC2, Linux server management, Node.js, PM2 process management, and Nginx reverse proxy configuration.



Run the Application
