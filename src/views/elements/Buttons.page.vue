<template>
  <div id="buttonsPage">
    <h1>Buttons Examples</h1>
    <div class="pageSection">
      <p class="titleSection">Default Example <span class="codeExample"> <span class="component">BaseButton</span>  msg="{SomeMessageValue}" </span></p>
      <div class="innerSection">
        <BaseButton msg="Send" />
        <BaseButton msg="Submit" />
        <BaseButton msg="Approve" />
        <BaseButton msg="Accept" />
      </div>
    </div> 
    <div class="pageSection">
      <p class="titleSection">Example with color set <span class="codeExample"> <span class="component">BaseButton</span> color="{someColorValue}" </span></p>
      <div class="innerSection">
        <BaseButton msg="Send" color="#f44336"/>
        <BaseButton msg="Submit" color="#e91e63" />
        <BaseButton msg="Approve" color="#9c27b0" />
        <BaseButton msg="Accept" color="#673ab7" />
        <BaseButton msg="Accept" color="#3f51b5" />
        <BaseButton msg="Accept" color="#2196f3" />
        <BaseButton msg="Accept" color="#00bcd4" />
      </div>
    </div>
    <div class="pageSection">
      <p class="titleSection">Example with backColor set <span class="codeExample"> <span class="component">BaseButton</span> backColor="{someColorValue}" </span></p>
      <div class="innerSection">
        <BaseButton msg="Send" backColor="#f44336"/>
        <BaseButton msg="Submit" backColor="#e91e63" />
        <BaseButton msg="Approve" backColor="#9c27b0" />
        <BaseButton msg="Accept" backColor="#673ab7" />
        <BaseButton msg="Accept" backColor="#3f51b5" />
        <BaseButton msg="Accept" backColor="#2196f3" />
        <BaseButton msg="Accept" backColor="#00bcd4" />
      </div>
    </div> 
    <div class="pageSection">
      <p class="titleSection">Example with Size set <span class="codeExample"> <span class="component">BaseButton</span> size="{size}" </span> => Sizes : [ xs, s, m, l, xl ]</p>
      <div class="innerSection">
        <BaseButton msg="Send" backColor="#f44336" size="xs"/>
        <BaseButton msg="Send" backColor="#e91e63" size="s"/>
        <BaseButton msg="Submit" backColor="#9c27b0" size="m" />
        <BaseButton msg="Approve" backColor="#673ab7" size="l" />
        <BaseButton msg="Accept" backColor="#3f51b5" size="xl" />
      </div>
    </div> 
    <div class="pageSection">
      <p class="titleSection">Example with Rounded set <span class="codeExample"> <span class="component">BaseButton</span> rounded="true" </span> </p>
      <div class="innerSection">
        <BaseButton msg="Send" backColor="#f44336" rounded="true"  size="xs"/>
        <BaseButton msg="Send" backColor="#e91e63" rounded="true" size="s"/>
        <BaseButton msg="Submit" backColor="#9c27b0" rounded="true" size="m" />
        <BaseButton msg="Approve" backColor="#673ab7" rounded="true" size="l" />
        <BaseButton msg="Accept" backColor="#3f51b5" rounded="true" size="xl" />
      </div>
    </div> 
    <div class="pageSection">
      <p class="titleSection">Example with Icon set <span class="codeExample"> <span class="component">BaseButton</span> icon="angle-double-left" </span> </p>
      <div class="innerSection">
        <BaseButton msg="Send" backColor="#f44336" rounded="true"  size="xs" icon="apple-alt"/>
        <BaseButton msg="Send" backColor="#e91e63" rounded="true" size="s" icon="angle-double-left"/>
        <BaseButton msg="Submit" backColor="#9c27b0" rounded="true" size="m" icon="archway"/>
        <BaseButton msg="Approve" backColor="#673ab7" rounded="true" size="l" icon="atom" />
        <BaseButton msg="Accept" backColor="#3f51b5" rounded="true" size="xl" icon="biking" />
      </div>
    </div> 
    <div class="pageSection">
      <p class="titleSection">Example with Icon Position set <span class="codeExample"> <span class="component">BaseButton</span> icon="right" </span> </p>
      <div class="innerSection">
        <BaseButton msg="Send" backColor="#f44336" rounded="true"  size="xs" icon="apple-alt" iconPos="right"/>
        <BaseButton msg="Send" backColor="#e91e63" rounded="true" size="s" icon="angle-double-left" iconPos="right"/>
        <BaseButton msg="Submit" backColor="#9c27b0" rounded="true" size="m" icon="archway" iconPos="right"/>
        <BaseButton msg="Approve" backColor="#673ab7" rounded="true" size="l" icon="atom" iconPos="right" />
        <BaseButton msg="Accept" backColor="#3f51b5" rounded="true" size="xl" icon="biking" iconPos="right" />
      </div>
    </div>
    <div class="pageSection">
      <p class="titleSection">Example with InAnimation set <span class="codeExample"> <span class="component">BaseButton</span> inAnim="flyOutText" </span> </p>
      <div class="innerSection">
        <BaseButton msg="Send" backColor="#f44336" rounded="true"  size="xs" icon="apple-alt" iconPos="right" inAnim="flyOutText"/>
        <BaseButton msg="Send" backColor="#e91e63" rounded="true" size="s" icon="angle-double-left" iconPos="" inAnim="flyOutText"/>
        <BaseButton msg="Submit" backColor="#9c27b0" rounded="true" size="m" icon="archway" iconPos="right" inAnim="flyOutText"/>
        <BaseButton msg="Approve" backColor="#673ab7" rounded="true" size="l" icon="atom" iconPos="" inAnim="flyOutText" />
        <BaseButton msg="Accept" backColor="#3f51b5" rounded="true" size="xl" icon="biking" iconPos="right" inAnim="flyOutText" />
      </div>
    </div> 
    <div class="pageSection">
      <p class="titleSection">Example with HoverAnimation set <span class="codeExample"> <span class="component">BaseButton</span> hoverAnim="flyOutIcon" </span> </p>
      <div class="innerSection">
        <BaseButton msg="Send" backColor="#f44336" rounded="true"  size="xs" icon="apple-alt" iconPos="right" inAnim="flyOutText" hoverAnim="flyOutIcon"/>
        <BaseButton msg="Send" backColor="#e91e63" rounded="true" size="s" icon="angle-double-left" iconPos="" inAnim="flyOutText" hoverAnim="flyOutIcon"/>
        <BaseButton msg="Submit" backColor="#9c27b0" rounded="true" size="m" icon="archway" iconPos="right" inAnim="flyOutText" hoverAnim="flyOutIcon"/>
        <BaseButton msg="Approve" backColor="#673ab7" rounded="true" size="l" icon="atom" iconPos="" inAnim="flyOutText" hoverAnim="flyOutIcon" />
        <BaseButton msg="Accept" backColor="#3f51b5" rounded="true" size="xl" icon="biking" iconPos="right" inAnim="flyOutText" hoverAnim="flyOutIcon" />
      </div>
    </div>
    <div class="pageSection">
      <p class="titleSection">Example with HoverAnimation set <span class="codeExample"> <span class="component">BaseButton</span> hoverAnim="growText" </span> </p>
      <div class="innerSection">
        <BaseButton msg="Send" backColor="#f44336" rounded="true"  size="xs" icon="apple-alt" iconPos="right" inAnim="growText" />
        <BaseButton msg="Send" backColor="#e91e63" rounded="true" size="s" icon="angle-double-left" iconPos="" inAnim="growText" />
        <BaseButton msg="Submit" backColor="#9c27b0" rounded="true" size="m" icon="archway" iconPos="right" inAnim="growText" />
        <BaseButton msg="Approve" backColor="#673ab7" rounded="true" size="l" icon="atom" iconPos="" inAnim="growText"  />
        <BaseButton msg="Accept" backColor="#3f51b5" rounded="true" size="xl" icon="biking" iconPos="right" inAnim="growText" />
      </div>
    </div> 
    <div class="pageSection">
      <p class="titleSection">Example with HoverAnimation set <span class="codeExample"> <span class="component">BaseButton</span> hoverAnim="growText" </span> </p>
      <div class="innerSection">
        <BaseButton msg="Send" backColor="#444" iconBack="#f44336" rounded="true"  size="xs" icon="apple-alt" iconPos="right" inAnim="growText" />
        <BaseButton msg="Send" backColor="#444" iconBack="#e91e63" rounded="true" size="s" icon="angle-double-left" iconPos="" inAnim="growText" />
        <BaseButton msg="Submit" backColor="#444" iconBack="#9c27b0" rounded="true" size="m" icon="archway" iconPos="right" inAnim="growText" />
        <BaseButton msg="Approve" backColor="#444" iconBack="#673ab7" rounded="true" size="l" icon="atom" iconPos="" inAnim="growText"  />
        <BaseButton msg="Accept" backColor="#444" iconBack="#3f51b5" rounded="true" size="xl" icon="biking" iconPos="right" inAnim="growText" />
      </div>
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from "@/components/Elements/Buttons/BaseButton.vue";

export default {
  name: "ButtonsPage",
  components: {
    BaseButton
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

#buttonsPage {
  display: flex;
  flex-direction: column;
  gap: 1em;

  .pageSection {
    display: flex;
    flex-direction: column;
    background: gray;
    gap: 1em;
    padding: 1em;

    p.titleSection {
      color: white;
      text-shadow: 0 0 5px black;
      text-align: left;
    }

    .innerSection {
      display: flex;
      flex-direction: row;
      gap: 1em;
    }
  }
}

.codeExample {
  background:whitesmoke;
  padding: 0.25em .5em;
  color: rgb(97, 97, 237);
  text-shadow: none;

  &:before {
    content: '<';
    color: #444;
  }

  &:after {
    content: ' />';
    color: #444;
  }

  .component {
    color: #c0c0c0;
  }
}
</style>