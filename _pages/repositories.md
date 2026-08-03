---
layout: page
permalink: /repositories/
title: Projects
description: Selected research and software projects.
nav: true
nav_order: 4
---

<div class="project-portfolio">
  <header class="project-introduction">
    <p>
      A selection of projects in natural language processing, computational economics, simulation, and neuroeconomics. Each repository
      contains the code, documentation, and materials needed to understand the work.
    </p>
    <a href="https://github.com/{{ site.data.repositories.username }}?tab=repositories">
      <i class="fa-brands fa-github" aria-hidden="true"></i>
      View all projects on GitHub
    </a>
  </header>

  <div class="project-list">
    {% for project in site.data.repositories.projects %}
      <article class="project-entry">
        <div class="project-entry-heading">
          <div>
            <p class="project-category">{{ project.category }}</p>
            <h2>
              <a href="https://github.com/{{ site.data.repositories.username }}/{{ project.name }}">{{ project.title }}</a>
            </h2>
          </div>
          <span class="project-language project-language-{{ project.language_slug }}">
            <span aria-hidden="true"></span>{{ project.language }}
          </span>
        </div>

        <p class="project-summary">{{ project.summary }}</p>

        <div class="project-details">
          <div>
            <h3>About the project</h3>
            <p>{{ project.explanation }}</p>
          </div>
          <div>
            <h3>What it includes</h3>
            <ul>
              {% for highlight in project.highlights %}
                <li>{{ highlight }}</li>
              {% endfor %}
            </ul>
          </div>
        </div>

        <footer class="project-entry-footer">
          <ul class="project-topic-list" aria-label="Topics">
            {% for topic in project.topics %}
              <li>{{ topic }}</li>
            {% endfor %}
          </ul>
          <a class="project-code-link" href="https://github.com/{{ site.data.repositories.username }}/{{ project.name }}">
            Explore the repository
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </footer>
      </article>
    {% endfor %}

  </div>
</div>
