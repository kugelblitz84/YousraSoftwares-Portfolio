document.documentElement.classList.toggle(
  'dark',
  localStorage.theme === 'dark' || (!('theme' in localStorage) && matchMedia('(prefers-color-scheme: dark)').matches)
);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = new Date().getFullYear(); });

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }), { threshold: .1 })
    : null;
  document.querySelectorAll('.reveal').forEach((node) => observer ? observer.observe(node) : node.classList.add('visible'));
});

function siteShell() {
  return {
    mobileMenu: false,
    dark: document.documentElement.classList.contains('dark'),
    toggleTheme() {
      this.dark = !this.dark;
      document.documentElement.classList.toggle('dark', this.dark);
      localStorage.theme = this.dark ? 'dark' : 'light';
    }
  };
}

function projectFilter() {
  return {
    active: 'all',
    projects: [
      { id: 1, category: 'web', type: 'Web Platform' },
      { id: 2, category: 'mobile', type: 'Mobile Application' },
      { id: 3, category: 'ai', type: 'AI Product' }
    ],
    get visibleProjects() { return this.active === 'all' ? this.projects : this.projects.filter((project) => project.category === this.active); }
  };
}

function insightsFilter() {
  return { active: 'all' };
}
