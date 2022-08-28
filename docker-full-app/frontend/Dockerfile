FROM node:alpine as builer

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx

EXPOSE 3000

#커스텀하여 만든 nginx설정 파일을 컨테이너 내부에 위치할 nginx 설정파일에 덮어 씌움
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

#빌드 파일 가져올 설정 값 / 빌드파일 경로 / 컨테이너 내부에 위치시킬 디렉토리
COPY --from=builder /app/build /usr/share/nginx/html