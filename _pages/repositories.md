---
layout: page
permalink: /repositories/
title: GitHub
description: Selected open-source projects, engineering highlights, and recent public activity.
nav: true
nav_order: 4
---

<div class="github-dashboard">
  <section class="github-hero" aria-labelledby="github-profile-heading">
    <div>
      <p class="github-eyebrow">Open-source profile</p>
      <h2 id="github-profile-heading"><a href="https://github.com/{{ site.data.repositories.username }}">@{{ site.data.repositories.username }}</a></h2>
      <p>
        I use GitHub to turn research and university work into documented, reproducible software. My public projects bring together
        economics, natural language processing, simulation, and data analysis.
      </p>
    </div>
    <a class="github-profile-button" href="https://github.com/{{ site.data.repositories.username }}">
      <i class="fa-brands fa-github" aria-hidden="true"></i>
      View GitHub profile
    </a>
  </section>

  <section class="github-stat-grid" aria-label="GitHub profile summary">
    <div class="github-stat">
      <strong id="github-repo-count">{{ site.data.repositories.public_repositories }}</strong>
      <span>Public repositories</span>
    </div>
    <div class="github-stat">
      <strong>{{ site.data.repositories.refactored_projects }}</strong>
      <span>Projects recently refactored</span>
    </div>
    <div class="github-stat">
      <strong>2020</strong>
      <span>Building in public since</span>
    </div>
    <div class="github-stat">
      <strong>Python + Julia</strong>
      <span>Primary project languages</span>
    </div>
  </section>

  <section class="github-section" aria-labelledby="github-highlights-heading">
    <div class="github-section-heading">
      <div>
        <p class="github-eyebrow">Highlights</p>
        <h2 id="github-highlights-heading">What the work demonstrates</h2>
      </div>
    </div>

    <div class="github-highlight-grid">
      {% for highlight in site.data.repositories.highlights %}
        <article class="github-highlight-card">
          <i class="{{ highlight.icon }}" aria-hidden="true"></i>
          <h3>{{ highlight.title }}</h3>
          <p>{{ highlight.description }}</p>
        </article>
      {% endfor %}
    </div>

  </section>

  <section class="github-section" aria-labelledby="featured-repositories-heading">
    <div class="github-section-heading">
      <div>
        <p class="github-eyebrow">Selected work</p>
        <h2 id="featured-repositories-heading">Featured repositories</h2>
      </div>
      <a href="https://github.com/{{ site.data.repositories.username }}?tab=repositories">Browse all repositories</a>
    </div>

    <div class="github-repository-grid">
      {% for repository in site.data.repositories.featured_repositories %}
        <article class="github-repository-card">
          <div class="github-repository-topline">
            <span class="github-language github-language-{{ repository.language_slug }}">
              <span aria-hidden="true"></span>{{ repository.language }}
            </span>
            <a href="https://github.com/{{ site.data.repositories.username }}/{{ repository.name }}" aria-label="Open {{ repository.title }} on GitHub">
              <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </div>
          <h3>
            <a href="https://github.com/{{ site.data.repositories.username }}/{{ repository.name }}">{{ repository.title }}</a>
          </h3>
          <p>{{ repository.description }}</p>
          <ul class="github-tag-list" aria-label="Topics">
            {% for topic in repository.topics %}
              <li>{{ topic }}</li>
            {% endfor %}
          </ul>
        </article>
      {% endfor %}
    </div>

  </section>

  <section class="github-section" aria-labelledby="recent-activity-heading">
    <div class="github-section-heading">
      <div>
        <p class="github-eyebrow">Activity</p>
        <h2 id="recent-activity-heading">Recent public work</h2>
      </div>
      <a href="https://github.com/{{ site.data.repositories.username }}">View full activity</a>
    </div>

    <div id="github-activity" class="github-activity" data-username="{{ site.data.repositories.username }}" aria-live="polite">
      <p class="github-activity-status">Loading recent activity from GitHub…</p>
    </div>
    <noscript>
      <p class="github-activity-status">JavaScript is disabled. Visit <a href="https://github.com/{{ site.data.repositories.username }}">GitHub</a> to see recent activity.</p>
    </noscript>

  </section>
</div>

<script defer src="{{ '/assets/js/github-dashboard.js' | relative_url }}"></script>
