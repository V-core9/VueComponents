<template>
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
      <template>
        <div class="text-center">
            <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                >
                Dropdown
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                v-for="(item, index) in items"
                :key="index"
                >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item>
                <v-list-item-title>DemoItem</v-list-item-title>
                </v-list-item>
                <public-navigation />
            </v-list>
            </v-menu>
        </div>
      </template>
    </v-system-bar>
</template>

<script>
export default {
  name: "SystemTop",
};
</script>
