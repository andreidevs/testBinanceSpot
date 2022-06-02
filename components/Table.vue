<template>
  <div style="width: 100%">
    <div class="ml-2">
      <slot></slot>
    </div>

    <div class="wrapTable">
      <table class="table">
        <thead>
          <tr>
            <th>Price</th>
            <th>Ammount</th>
            <th class="hide">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item[0] }}</td>
            <td>{{ item[1] }}</td>
            <td class="hide">
              {{ item[0] * item[1] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTable",
  props: ["items"],
};
</script>

<style scoped lang="scss">
table {
  font-size: 14px;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
  width: 100%;
}
th {
  background: #108ee9;
  color: white;
  padding: 10px 20px;
  position: sticky;
  top: 0;
}
th,
td {
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
}
th:first-child,
td:first-child {
  text-align: left;
}
th:first-child {
  border-top-left-radius: 10px;
}
th:last-child {
  border-top-right-radius: 10px;
  border-right: none;
}
td {
  padding: 10px 20px;
  background: #f8e391;
}
tr:last-child td:first-child {
  border-radius: 0 0 0 10px;
}
tr:last-child td:last-child {
  border-radius: 0 0 10px 0;
}

tr td:last-child {
  border-right: none;
}

.wrapTable {
  height: calc(100vh - 120px);
  overflow: auto;
  width: 100%;
}

@media (max-width: 840px) {
  .hide {
    display: none;
  }
  th:nth-child(2) {
    border-top-right-radius: 10px;
  }
}
@media (max-width: 1090px) {
  table {
    font-size: 12px;
  }
  td {
    padding: 5px 10px;
  }
}
@media (max-width: 440px) {
  table {
    font-size: 10px;
    padding: 2px 5px !important;
  }
}
@media (max-width: 400px) {
  table {
    font-size: 8px;
  }
}
</style>
