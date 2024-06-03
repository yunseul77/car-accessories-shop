<script>
import baseURL from "@/scripts/baseURL";

export default {
  data() {
    return {
      item: {
        name: '',
        price: 0,
        discount: 0,
        stock: 0,
      },
      submitted: false,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.submitted = true;
    },
  },
};
</script>

<template>
  <div class="container">
    <h2 class="my-4">상품 정보</h2>
    <b-form @submit="onSubmit">
      <b-form-group
          label="상품명"
          label-for="itemName"
      >
        <b-form-input
            id="itemName"
            v-model="item.name"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          label="상품 가격"
          label-for="itemPrice"
      >
        <b-form-input
            id="itemPrice"
            type="number"
            v-model="item.price"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          label="할인율"
          label-for="itemDiscount"
      >
        <b-form-input
            id="itemDiscount"
            type="number"
            v-model="item.discount"
            required
        ></b-form-input>
      </b-form-group>

      <b-form-group
          label="재고 수량"
          label-for="itemStock"
      >
        <b-form-input
            id="itemStock"
            type="number"
            v-model="item.stock"
            required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">상품 등록</b-button>
    </b-form>

    <div v-if="submitted" class="mt-4">
      <h4>등록된 상품 정보:</h4>
      <ul>
        <li>상품명: {{ item.name }}</li>
        <li>상품 가격: {{ item.price }}</li>
        <li>할인율: {{ item.discount }}%</li>
        <li>재고 수량: {{ item.stock }}</li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
.container {
  max-width: 600px;
}
</style>