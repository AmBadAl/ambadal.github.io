(() => {
  const activityRoot = document.querySelector("#github-activity");
  if (!activityRoot) return;

  const username = activityRoot.dataset.username;
  const repositoryCount = document.querySelector("#github-repo-count");
  const headers = { Accept: "application/vnd.github+json" };

  const safeRepositoryName = (value) => {
    const expectedPrefix = `${username}/`;
    return typeof value === "string" && value.startsWith(expectedPrefix) ? value : null;
  };

  const activityLabel = (event) => {
    switch (event.type) {
      case "PushEvent":
        return "Pushed updates to";
      case "CreateEvent":
        return event.payload?.ref_type === "repository" ? "Created" : "Created a branch or tag in";
      case "PublicEvent":
        return "Made public";
      case "PullRequestEvent":
        return `${event.payload?.action || "Updated"} a pull request in`;
      case "IssuesEvent":
        return `${event.payload?.action || "Updated"} an issue in`;
      case "ReleaseEvent":
        return "Published a release in";
      case "ForkEvent":
        return "Forked";
      case "WatchEvent":
        return "Starred";
      default:
        return "Updated";
    }
  };

  const formatDate = (value) =>
    new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));

  const renderActivity = (events) => {
    const seen = new Set();
    const recentEvents = events
      .filter((event) => safeRepositoryName(event.repo?.name))
      .sort((first, second) => new Date(second.created_at) - new Date(first.created_at))
      .filter((event) => {
        const day = event.created_at?.slice(0, 10);
        const key = `${event.type}:${event.repo.name}:${day}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 6);

    if (!recentEvents.length) throw new Error("No public activity returned");

    const list = document.createElement("ol");
    list.className = "github-activity-list";

    recentEvents.forEach((event) => {
      const repositoryName = safeRepositoryName(event.repo.name);
      const shortName = repositoryName.slice(username.length + 1);
      const item = document.createElement("li");
      const marker = document.createElement("span");
      const content = document.createElement("div");
      const description = document.createElement("p");
      const link = document.createElement("a");
      const time = document.createElement("time");

      marker.className = "github-activity-marker";
      content.className = "github-activity-content";
      description.append(`${activityLabel(event)} `);
      link.href = `https://github.com/${repositoryName}`;
      link.textContent = shortName;
      description.append(link);
      time.dateTime = event.created_at;
      time.textContent = formatDate(event.created_at);

      content.append(description, time);
      item.append(marker, content);
      list.append(item);
    });

    activityRoot.replaceChildren(list);
  };

  Promise.all([
    fetch(`https://api.github.com/users/${username}`, { headers }),
    fetch(`https://api.github.com/users/${username}/events/public?per_page=30`, { headers }),
  ])
    .then(async ([profileResponse, eventsResponse]) => {
      if (!profileResponse.ok || !eventsResponse.ok) throw new Error("GitHub API unavailable");
      const [profile, events] = await Promise.all([profileResponse.json(), eventsResponse.json()]);
      if (repositoryCount && Number.isInteger(profile.public_repos)) repositoryCount.textContent = profile.public_repos;
      renderActivity(events);
    })
    .catch(() => {
      const fallback = document.createElement("p");
      const link = document.createElement("a");
      fallback.className = "github-activity-status";
      fallback.append("Recent activity is temporarily unavailable. ");
      link.href = `https://github.com/${username}`;
      link.textContent = "View it directly on GitHub.";
      fallback.append(link);
      activityRoot.replaceChildren(fallback);
    });
})();
