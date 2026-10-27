document.querySelectorAll('[data-share]').forEach((button) => {
  button.addEventListener('click', async () => {
    const url = window.location.href;
    const platform = button.dataset.share;
    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        button.textContent = 'Link copied';
        button.setAttribute('aria-live', 'polite');
      } catch {
        window.prompt('Copy this article link:', url);
      }
      return;
    }
    const shareUrl = platform === 'linkedin'
      ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
      : `https://x.com/intent/post?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  });
});