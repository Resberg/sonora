document.querySelectorAll('.spotify-weekly').forEach((chart) => {
  const player = chart.querySelector('iframe');
  chart.addEventListener('click', (event) => {
    const track = event.target.closest('button[data-spotify-track]');
    if (!track || track.getAttribute('aria-pressed') === 'true') return;
    chart.querySelector('[aria-pressed="true"]').setAttribute('aria-pressed', 'false');
    track.setAttribute('aria-pressed', 'true');
    player.title = 'Pemutar Spotify — ' + track.querySelector('strong').textContent;
    player.src = 'https://open.spotify.com/embed/track/' + track.dataset.spotifyTrack;
    player.scrollIntoView({ block: 'nearest' });
  });
});
