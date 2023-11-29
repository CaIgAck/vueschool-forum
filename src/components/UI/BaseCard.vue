<template>
  <div class="card">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
    <div class="card-action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &-header,
  &-body,
  &-footer,
  &-action {
    padding: 16px;
  }

  &-header {
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
    font-weight: bold;
  }

  &-action {
    text-align: right;
    background-color: #f0f0f0;
    border-top: 1px solid #ccc;
  }
}
</style>
