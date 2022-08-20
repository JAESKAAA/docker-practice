FROM node:10

#COPY [복사할 파일] [도커 컨테이너에서 파일이 복사될 경로]
#모든 파일을 복사할때는 경로를 넣어주면 됨 아래 참고
COPY ./ ./

RUN npm install

# node + 엔트리파일 이름
CMD ["node", "server.js"]