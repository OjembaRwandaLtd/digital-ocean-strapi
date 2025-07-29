FROM node:lts-alpine AS build

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build


FROM node:lts-alpine

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app
COPY --from=build /app/tsconfig.json /app
COPY --from=build /app/package-lock.json /app
COPY --from=build /app/database /app/database
COPY --from=build /app/public /app/public
COPY --from=build /app/config /app/config
COPY --from=build /app/favicon.png /app

RUN npm install --legacy-peer-deps

EXPOSE 1337
CMD ["npm", "start"]
