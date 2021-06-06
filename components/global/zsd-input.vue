<template>
  <div class="zsd-input">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="name">
      {{ $_.capitalize(label)
      }}<span class="text-red-500" v-if="isRequired">*</span>
    </label>
    <input
      :class="[
        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        { 'border border-red-500': getVObject.$error },
      ]"
      v-model.trim="getVObject.$model"
      :type="type"
      :id="name"
      @change="emitModelValue"
    />

    <template v-if="getVObject.$error">
      <div class="pt-1">
        <div class="text-red-500 text-xs" v-if="!getVObject.required">
          {{ $_.capitalize(label) }} is required
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  name: "ZsdInput",
  props: {
    v: { type: Object, required: true },
    ns: { type: String, default: "", required: false },
    name: { type: String, default: "", required: true },
    type: { type: String, default: "string", required: false },
    label: { type: String, default: "", required: false },
  },
  computed: {
    getVObject() {
      if (this.ns != "") {
        return _.get(this.v, `${this.ns}.${this.name}`, {});
      }
      return _.get(this.v, this.name, {});
    },
    isRequired() {
      return (
        _.get(this.getVObject, "$params.required.type", false) == "required"
      );
    },
    getValidationRule() {
      return;
    },
  },
  methods: {
    emitModelValue(event) {
      const { value, name } = event.target;
      this.$emit("input", value, name);
    },
  },
};
</script>
