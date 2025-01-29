<template>
    <div class="el-form-item material-outline " :class="$attrs.class">
        <label :for="props['id']"
        v-if="props['label']"
        class="el-form-item__label">
            {{ props['label'] }}
        </label>
        <div class="el-form-item__content">
            <div class="el-input" >
                <input tabindex="1" 
                :id="props['id']"
                ref="input"
                v-bind="{...$attrs, class: null}"
                :type="props['type']" 
                autocomplete="nope"
                class="el-input__inner "
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
import { v4 as uuid } from 'uuid'

const props = defineProps({
    'label': String,
    'id': {
        type: String,
        default: uuid(),
    },
    'type': {
        type: String,
        default: 'text',
    },
    'modelValue': String,
});

defineEmits(['update:modelValue'])

function focus() {
    this.$refs.input.focus();
}

function select() {
    this.$refs.input.select();
}

function setSeleectionRange(start, end) {
    this.$refs.input.setSelectionRange(start, end);
}
</script>
<style scoped>
.el-form-item.material-outline {
    display: inline-block;
    overflow: hidden;
    padding-top: 23px;
    position: relative;
    width: 100%;
    margin-bottom: 8px;
}

.el-form-item.material-outline .el-form-item__label {
    background-color: transparent;
    color: dimgray;
    display: flex;
    float: none;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    left: 0;
    line-height: 16px;
    max-height: 100%;
    padding: 0;
    pointer-events: none;
    position: absolute;
    text-align: left;
    top: 0;
    white-space: nowrap;
    width: 100%;
    z-index: 3;
}

.el-form-item__label::after,
.el-form-item__label::before {
    box-sizing: border-box;
}

.el-form-item.material-outline .el-form-item__content {
    line-height: normal;
    margin-left: 0 !important;
    min-height: 36px;
    z-index: 2;
}

.el-form-item__content {
    position: relative;
}

.el-input {
    display: inline-block;
    font-size: 14px;
    position: relative;
    width: 100%;
}

.el-form-item.material-outline .el-form-item__content .el-input .el-input__inner {
    background-color: transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-color: currentcolor #b1b1b1 #b1b1b1;
    border-top: #b1b1b1;
    border-top-color: rgb(177, 177, 177);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    color: #565656;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    height: 36px;
    line-height: 18px;
    outline: 0;
    padding-bottom: 16px;
    text-align: left;
    transition: border .2s, color .2s;
}

.el-form-item::after,
.el-form-item::before {
    content: "";
    display: table;
}

.el-form-item.material-outline .el-form-item__label::before {
    border-left: 1px solid #b1b1b1;
    border-radius: 6px 0;

    border-top: 1px solid #b1b1b1;

    content: "" !important;

    display: inline-block;

    height: 18px;

    margin-right: 4px;

    margin-top: 6px;

    width: 12px;

}

.el-form-item.material-outline .el-form-item__label::after {
    border-radius: 0 6px;
    border-right: 1px solid #b1b1b1;
    border-top: 1px solid #b1b1b1;
    content: "" !important;
    display: inline-block;
    flex-grow: 1;
    height: 18px;
    margin-left: 4px;
    margin-top: 6px;
}

.el-input__inner {
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: rgb(220, 223, 230);
    border-right-color: rgb(220, 223, 230);
    border-bottom-color: rgb(220, 223, 230);
    border-left-color: rgb(220, 223, 230);
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    padding-bottom: 0px;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
}
</style>