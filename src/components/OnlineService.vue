<template>
  <a class="card bg-primary text-white stick-right fixed-bottom" style="width: 4rem; text-decoration: none;" target="_blank" href="https://google.com">
    <ul class="list-group list-group-flush bg-primary">
      <li class="list-group-item bg-primary px-1 pt-3"><font-awesome-icon :icon="['fas', 'comment-dots']" class="m-0 icon" />Online Service</li>
      <li class="list-group-item bg-primary"><font-awesome-icon :icon="['fab', 'whatsapp']" class="m-0 icon" /></li>
    </ul>
  </a>
</template>

<script>
export default {
  name: 'online-service'
}
</script>

<style>
@media all and (max-width:480px) {
  li {
    font-size: 10x;
  }
  .icon {
    font-size: 14px;
  }
}
li {
  font-size: 14px;
}
.icon {
  font-size: 24px;
}
.stick-right {
  left: unset !important;
}
</style>
