<template>
  <NineBoxes class="ProfileSocial">
    <template v-slot:box-1>
      <a
        class="ProfileSocial_Button"
        href="https://github.com/skmt3P/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          :icon="['fab', 'github']"
          class="ProfileSocial_ButtonIcon"
        />
        <span class="ProfileSocial_ButtonText">GitHub</span>
      </a>
    </template>
    <template v-slot:box-2>
      <a
        class="ProfileSocial_Button"
        href="https://www.facebook.com/Sakamoto3P"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          :icon="['fab', 'facebook']"
          class="ProfileSocial_ButtonIcon"
        />
        <span class="ProfileSocial_ButtonText">Facebook</span>
      </a>
    </template>
    <template v-slot:box-3>
      <a
        class="ProfileSocial_Button"
        href="https://twitter.com/skmt3p"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          :icon="['fab', 'twitter']"
          class="ProfileSocial_ButtonIcon"
        />
        <span class="ProfileSocial_ButtonText">Twitter</span>
      </a>
    </template>
    <template v-slot:box-4>
      <a
        class="ProfileSocial_Button"
        href="https://www.linkedin.com/in/ryu-sakamoto-91957152/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          :icon="['fab', 'linkedin']"
          class="ProfileSocial_ButtonIcon"
        />
        <span class="ProfileSocial_ButtonText">LinkedIn</span>
      </a>
    </template>
    <template v-slot:box-5>
      <div class="ProfileSocial_Container">
        <span class="ProfileSocial_ContainerText">
          <span class="ProfileSocial_ContainerText--Red">S</span>ocial
        </span>
        <span class="ProfileSocial_ContainerText">
          <span class="ProfileSocial_ContainerText--Blue">L</span>inks
        </span>
      </div>
    </template>
    <template v-slot:box-6>
      <a
        class="ProfileSocial_Button"
        href="https://join.skype.com/invite/lNdAlxw7id2D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          :icon="['fab', 'skype']"
          class="ProfileSocial_ButtonIcon"
        />
        <span class="ProfileSocial_ButtonText">Skype</span>
      </a>
    </template>
    <template v-slot:box-7>
      <a
        class="ProfileSocial_Button"
        href="https://note.com/skmt3p"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          :icon="['far', 'comment-dots']"
          class="ProfileSocial_ButtonIcon"
        />
        <span class="ProfileSocial_ButtonText">note</span>
      </a>
    </template>
    <template v-slot:box-8>
      <a
        class="ProfileSocial_Button"
        href="https://medium.com/@skmt3p"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          :icon="['fab', 'medium-m']"
          class="ProfileSocial_ButtonIcon"
        />
        <span class="ProfileSocial_ButtonText">Medium</span>
      </a>
    </template>
    <template v-slot:box-9>
      <a
        class="ProfileSocial_Button"
        href="https://omusbridge.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          :icon="['far', 'building']"
          class="ProfileSocial_ButtonIcon"
        />
        <span class="ProfileSocial_ButtonText">Company</span>
      </a>
    </template>
  </NineBoxes>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import NineBoxes from '@/components/molecules/NineBoxes'
export default defineComponent({
  components: {
    NineBoxes,
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';
.ProfileSocial {
  width: 100%;
  height: 100%;
  &_Button {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10%;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: $--c-white-0;
    text-decoration: none;
    &Icon {
      display: block;
      margin: 0 auto 5%;
      font-size: 8vw;
    }
    &Text {
      margin: 0 auto 5%;
      font-size: 2.4vw;
      @media screen and (max-width: 559px) {
        width: 100%;
      }
    }
  }
  &_Container {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10%;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    &Text {
      display: block;
      color: $--c-gray-0;
      font-size: 4vw;
      &--Red {
        color: $--c-red-0;
      }
      &--Blue {
        color: $--c-blue-0;
      }
    }
  }
}
</style>
