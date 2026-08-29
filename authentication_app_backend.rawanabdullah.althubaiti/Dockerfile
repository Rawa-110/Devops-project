# استخدم بيئة تشغيل مناسبة (مثلاً Node.js أو Python حسب مشروعك)
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
