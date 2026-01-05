<template>
  <div class="app-shell">
    <header class="app-header">
      <div class="app-title">
        <h1>路由測試</h1>
        <p>Vue2 / Vue3 / TS / Props 範例展示</p>
      </div>

      <nav class="app-nav" aria-label="主選單">
        <router-link active-class="active" to="/vue2">Vue2</router-link>
        <router-link active-class="active" to="/vue3">Vue3</router-link>
        <router-link active-class="active" :to="{ path: '/tsdemo' }">TsDemo</router-link>
        <router-link active-class="active" :to="{
          name: 'propsdemo',
          params: { b: '從父元件帶入的 bbbbb' },
          query: { c: '從父元件帶入的 ccccc' }
        }">
          PropsDemo
        </router-link>
      </nav>
    </header>

    <section class="app-card">
      <div class="card-head">
        <h2>展示區</h2>
      </div>
      <div class="card-body">
        <router-view />
      </div>
    </section>
  </div>
</template>


<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.app-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 18px;
  border: 1px solid var(--ui-border);
  border-radius: var(--ui-radius-lg);
  background: var(--ui-surface);
  box-shadow: var(--ui-shadow);
  backdrop-filter: blur(10px);
}

.app-title p {
  margin-top: 2px;
}

.app-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
}

.app-nav a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid var(--ui-border);
  background: color-mix(in srgb, var(--ui-surface-strong) 65%, transparent);
  color: var(--ui-heading);
  transition: transform 0.08s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  user-select: none;
}

.app-nav a:hover {
  border-color: var(--color-border-hover);
  background: color-mix(in srgb, var(--ui-surface-strong) 80%, transparent);
}

.app-nav a:active {
  transform: translateY(1px);
}

.app-nav a.active {
  border-color: transparent;
  background: linear-gradient(135deg, var(--ui-primary), var(--ui-primary-2));
  color: var(--ui-on-primary);
  box-shadow: 0 10px 25px color-mix(in srgb, var(--ui-primary) 25%, transparent);
}

.app-card {
  border: 1px solid var(--ui-border);
  border-radius: var(--ui-radius-lg);
  overflow: hidden;
  background: var(--ui-surface);
  box-shadow: var(--ui-shadow);
  backdrop-filter: blur(10px);
}

.card-head {
  padding: 14px 18px;
  border-bottom: 1px solid var(--ui-border);
  background: color-mix(in srgb, var(--ui-surface-strong) 75%, transparent);
}

.card-head h2 {
  margin: 0;
}

.card-body {
  padding: 18px;
}

@media (max-width: 720px) {
  .app-header {
    flex-direction: column;
  }

  .app-nav {
    justify-content: flex-start;
  }
}
</style>
