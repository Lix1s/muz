.DEFAULT_GOAL=up

ifeq ($(OS),Windows_NT)
    WSL=wsl
endif

prod:
	docker-compose -f docker-compose.prod.yml up --build
.PHONY: up

up:
	docker-compose -f docker-compose.dev.yml up
.PHONY: up

down:
	docker-compose -f docker-compose.dev.yml down
.PHONY: down
