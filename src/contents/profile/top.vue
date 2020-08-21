<template>
  <div class="ProfileTop">
    <div class="ProfileTop_Header">
      <div class="ProfileTop_HeadLines">
        <h3 class="ProfileTop_Heading">
          <span class="ProfileTop_Text--Red">R</span>.D.<span
            class="ProfileTop_Text--Blue"
            >S</span
          >akamoto
        </h3>
        <h4 class="ProfileTop_HeadingSub">
          (<span class="ProfileTop_Text--Red">R</span>yu
          <span class="ProfileTop_Text--Blue">S</span>akamoto)
        </h4>
      </div>
      <div class="ProfileTop_HeadImageWrapper">
        <img class="ProfileTop_HeadImage" src="@/assets/img/skmt3p_prof2.png" />
      </div>
    </div>
    <ul class="ProfileTop_List">
      <li class="ProfileTop_ListItem">
        <span class="ProfileTop_ListText"
          ><span class="ProfileTop_Text--Red">P</span>resident (<a
            href="https://omusbridge.com/"
            target="”_blank”"
            rel="noopener noreferrer"
            >OmusBridge</a
          >)</span
        >
      </li>
      <li class="ProfileTop_ListItem">
        <span class="ProfileTop_ListText"
          ><span class="ProfileTop_Text--Blue">W</span>eb Front-end
          Engineer</span
        >
      </li>
      <li class="ProfileTop_ListItem">
        <span class="ProfileTop_ListText"
          ><span class="ProfileTop_Text--Red">I</span>CT Consultant &
          Lecturer</span
        >
      </li>
      <li class="ProfileTop_ListItem">
        <span class="ProfileTop_ListText"
          ><span class="ProfileTop_Text--Blue">T</span>ech Writer</span
        >
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';
.ProfileTop {
  width: 100%;
  height: 100%;
  min-width: 50vw;
  min-height: 50vh;
  &_Header {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
  &_HeadLines {
    flex: 1;
  }
  &_Heading {
    color: $--c-gray-0;
    font-size: 1.5rem;
    letter-spacing: 0.1em;
  }
  &_HeadingSub {
    color: $--c-gray-0;
    font-size: 1.2rem;
    letter-spacing: 0.1em;
  }
  &_HeadImageWrapper {
    width: 40%;
    min-width: 128px;
    max-width: 256px;
    overflow: hidden;
    border-radius: 100px;
  }
  &_HeadImage {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &_ListText {
    color: $--c-gray-0;
    font-size: 1rem;
    letter-spacing: 0.05em;
  }
  &_Text {
    &--Red {
      color: $--c-red-0;
    }
    &--Blue {
      color: $--c-blue-0;
    }
  }
}
</style>
