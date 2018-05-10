<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{stock.name}}</h3>
        <small>price: {{stock.price}}</small>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" laceholder="Quantity" v-model="quantity">
        </div>  
        <div class="pull-right">
          <button class="btn btn-success" @click="buyStock" :disabled="quantity <= 0">Buy</button>
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
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.stock.quantity
      };
      console.log(order);
      this.quantity = 0;
    }
  }
}
</script>

<style scoped>

</style>
