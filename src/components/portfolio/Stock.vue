<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{stock.name}}</h3>
        <small>Price: {{stock.price | currency}} | Quantity: {{stock.quantity}}</small>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientQty}">
        </div>  
        <div class="pull-right">
          <button class="btn btn-success" @click="placeOrder" :disabled="insufficientQty || quantity <= 0">{{insufficientQty ? 'Not enough stocks' : 'Sell'}}</button>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
     quantity:0,
    }
  },
  props: ['stock'],
  computed: {
    insufficientQty() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    placeOrder() {
      
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch('sellStocks', order);
      this.quantity = 0;
    }
  },
}
</script>

<style scoped>
.danger {
  border: 2px solid red;
}
</style>
