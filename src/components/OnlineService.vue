<template>
  <a class="card text-white stick-right fixed-bottom bg-whatsapp" style="width: 4rem; text-decoration: none;" target="_blank" href="https://api.whatsapp.com/send?phone=+6281291465687" rel="noopener">
    <ul class="list-group list-group-flush bg-whatsapp">
      <!-- <li class="list-group-item px-1 pt-3"><font-awesome-icon :icon="['fas', 'comment-dots']" class="m-0 icon" />Online Service</li> -->
      <li class="list-group-item bg-whatsapp px-1 pt-3"><font-awesome-icon :icon="['fab', 'whatsapp']" class="m-0 icon" />Online Service</li>
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

.bg-whatsapp {
  background-color: #1ebea5;
}
</style>
