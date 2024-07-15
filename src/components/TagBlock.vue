<template>
	<div class="tag-block">
		<div class="tag-block__inner" >
			<div class="tag-block__field">
				<div class="tag-block__field-item" v-for="(item, i) in tagList" :key="i">
					<v-icon>{{ item.icon }}</v-icon>
					{{ item.text }}
          <v-icon class="tag-block__field-del" @click="removeTag(i)">mdi-close</v-icon>
				</div>
			</div>
			<div class="tag-block__write">
        <div class="tag-block__input">
          <v-text-field label="Текст тега" variant="underlined" class="tag-block__text" v-model="tagInput"></v-text-field>
          <v-select
            :items="iconsList"
            label="Выберите иконку"
            class="select-icon"
            v-model="currentIcon"
          >
            <template v-slot:selection="{ item }">
              <v-icon style="margin-right: 9px;">{{ item.title }}</v-icon>{{ item.title }}
            </template>
            <template v-slot:item="{ item, props: { onClick } }">
              <v-list-item @click="onClick">
                <v-row no-gutters>
                  <v-icon style="margin-right: 9px;">{{ item.title }}</v-icon> <span style="font-size: 12px;">{{ item.title }}</span>
                </v-row>
              </v-list-item>
            </template>
          </v-select>
        </div>
        <div class="tag-block__btn">
          <v-btn variant="tonal" @click="addTag">Добавить</v-btn>
        </div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
	data() {
		return {
      currentIcon: 'mdi-antenna',
      tagInput: 'Hello',
			tagList: [
				{
					text: 'Lorem1',
					icon: 'mdi-circle-small'
				},
				{
					text: 'Lorem2',
					icon: 'mdi-antenna'
				},
				{
					text: 'Lorem3',
					icon: 'mdi-open-in-new'
				},
				{
					text: 'Lorem4',
					icon: 'mdi-alert'
				},
				{
					text: 'Lorem5',
					icon: 'mdi-check-circle'
				},
				{
					text: 'Lorem6',
					icon: 'mdi-information'
				},
			],
			iconsList: ['mdi-circle-small','mdi-antenna','mdi-access-point','mdi-alert','mdi-check-circle','mdi-information']
		}
	},
	methods: {
		addTag() {
      if(this.tagInput === '') return false
      let newTag = {}
      newTag.text = this.tagInput
      newTag.icon = this.currentIcon
		  this.tagList.push(newTag)
      this.tagInput = '';
		},
    removeTag(i) {
      this.tagList.splice(i, 1)
    }
	},
}
</script>

<style lang="scss">
	.tag-block {
		height: 100%;
		&__inner {
			display: flex;
			flex-direction: column;
			height: 100%;
      border: solid 1px #757575;
		}
		&__write {
			margin-top: auto;
		}
    &__input {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 20px;
      align-items: end;
      padding: 5px;
      @media(max-width: 575px) {
        grid-template-columns: 1fr;
        gap: 5px;
      }
    }
    &__btn {
      width: 100%;
      padding: 5px;
      @media(max-width: 575px) {
        button {
          width: 100%;
        }
      }
    }
    &__field {
      height: 150px;
      padding: 5px;
      overflow-y: auto;
    }
		&__field-item {
			border: solid 1px #757575;
			border-radius: 50px;
			margin-right: 5px;
      margin-bottom: 5px;
			display: inline-flex;
      flex-wrap: wrap;
      align-items: center;
      font-size: 16px;
			padding: 5px 10px;
		}
    &__field-del {
      color: tomato;
      height: 0.3em!important;
      width: 0.3em!important;
      min-width: 0.3em!important;
      overflow: hidden;
      padding: 0 10px;
    }
	}
</style>
