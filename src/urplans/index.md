# URPlans Overview

# MADE BY MAIFOSS AND EYPOZAX

URPlans is a lightweight task‐planning core written in Java that is based on [Eisenhower Matrix](https://asana.com/resources/eisenhower-matrix) and is powered by [Spring Data JPA](https://spring.io/projects/spring-data-jpa), [Hibernate](https://hibernate.org/), and [Project Lombok](https://projectlombok.org/). You can run it as a standalone CLI tool to insert, list, show, delete, and search tasks backed by an H2 file‐based database.

Key features:

- Java 21 compatible, built with Maven
- Uses Eisenhower Matrix method
- Persistence via Spring Data JPA + Hibernate, defaulting to H2 file storage  
- CLI‐only runner reading non-option arguments (no web server by default)  
- Deployable as a standalone jar: `target/urplans-1.0-SNAPSHOT.jar`  
- Supports filtering by date, priority, paging, and full-text search  

Use URPlans to manage simple to-do items, recurring schedules, or integrate its core into larger Spring Boot apps.

[Setup](./setup.md){.md-button .md-button--primary .md-button--raised}
[Usage](./usage.md){.md-button .md-button--primary .md-button--raised}
[Artitecture](./architecture.md){.md-button .md-button--primary .md-button--raised}

