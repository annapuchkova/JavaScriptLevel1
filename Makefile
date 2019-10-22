build:
	npm run build

gitEmail:
	git config --local user.email "puchkova.anne@gmail.com"

gitName:
	git config --local user.name "annapuchkova"

lint:
	./node_modules/.bin/eslint src/main.js

push:
	git push --set-upstream origin
