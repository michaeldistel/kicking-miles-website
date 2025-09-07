<script lang="ts">
  import type { WeatherBoxProps } from '$lib/types';

  export let weather: WeatherBoxProps['weather'];
</script>

<!-- Weather Box -->
<div class="km-weather-box">
  <div class="km-weather-title-wrapper">
    <span class="km-weather-title">
      {weather.title || 'Weather Report'}
    </span>
  </div>
  <p class="km-weather-description">
    {weather.description}
  </p>
</div>
 